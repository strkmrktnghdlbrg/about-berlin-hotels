/**
 * Echte Hotelfotos via Stay22 Direct Travel API (Build-Time).
 * ------------------------------------------------------------
 * Vorher zeigte HotelCard einen Farbverlauf mit Haus-Icon und die
 * Hotel-Detailseite das Bezirks-Stimmungsbild — beide ohne Bezug zum Hotel.
 *
 * Ablauf:
 *   1. EIN Fetch pro Bezirk (12 Calls je Build, danach modulweit gecacht).
 *   2. Treffer werden über den Hotelnamen STRIKT gematcht (siehe `matchScore`).
 *      Lieber kein Bild als das Bild des Nachbarhauses.
 *   3. Ohne STAY22_API_KEY (lokale Dev-Builds) liefert die API null →
 *      alle Aufrufer fallen auf das Bezirksbild zurück.
 *
 * Stay22-ToS: kein persistenter Storage. Die Bild-URLs werden nur im
 * Build-Output referenziert und bei jedem Rebuild (Cron alle 6h) erneuert.
 */
import { searchAccommodations } from "./stay22";
import { districts } from "../data/districts";
import type { Hotel } from "../data/hotels";
import { affiliate } from "../data/affiliate";

export type HotelPhoto = {
  /** Bild-URL vom Booking-CDN, auf eine große Variante hochgezogen. */
  src: string;
  /** Affiliate-getaggter Deeplink aus der API. */
  link?: string;
  /** Name des gematchten API-Treffers — steht im Build-Log zur Kontrolle. */
  matchedName: string;
};

type Candidate = { name: string; image: string; link?: string };

/** Wörter, die zur Identität eines Hauses nichts beitragen. */
const NOISE = new Set([
  "hotel", "hotels", "berlin", "germany", "deutschland", "the", "das", "der",
  "die", "den", "am", "an", "im", "in", "by", "and", "und", "de", "du", "la",
  "le", "el", "of", "at", "gmbh", "kg", "ag", "co", "collection", "group",
]);

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Objekttypen. Taucht einer davon nur im API-Treffer auf, ist es ein anderes
 * Haus: "The Circus Hotel" vs. "The Circus Hostel", "Soho House Berlin" vs.
 * "Soho House Berlin Apartments Suites".
 */
const PROPERTY_TYPES = new Set([
  "hostel", "hostels", "hostal", "apartment", "apartments", "aparthotel",
  "apartmenthaus", "apartmenthotel", "suites", "suite", "residence", "residences",
  "boardinghouse", "pension", "motel", "guesthouse", "gaestehaus", "resort",
  "camping", "ferienwohnung", "ferienwohnungen", "ferienhaus", "ferienhaeuser",
  "bnb", "lofts", "studios", "villa", "bungalow", "gasthof", "gasthaus", "zimmer",
]);

function tokens(name: string): string[] {
  return fold(name)
    .split(" ")
    .filter((w) => w.length > 1 && !NOISE.has(w));
}

/**
 * Strenger Namensabgleich: JEDES bedeutungstragende Token des redaktionellen
 * Hotelnamens muss im API-Treffer vorkommen, und der Treffer darf nicht
 * beliebig viel Zusatzrauschen mitbringen.
 *
 * Bewusst konservativ — ein falsches Foto auf einer Hoteldetailseite ist
 * schlimmer als gar keins. Rückgabe: Score > 0 = Match, 0 = kein Match.
 */
export function matchScore(hotelName: string, candidateName: string): number {
  // Identischer Name (nur Groß-/Kleinschreibung, Umlaute, Satzzeichen egal)
  // schlaegt alles — nur so bekommen kurznamige Haeuser wie "Hotel Zoo Berlin"
  // ueberhaupt ein Foto, ohne dass "Hotel am Zoo" faelschlich matcht.
  if (fold(hotelName) === fold(candidateName)) return 2;

  const a = tokens(hotelName);
  const b = tokens(candidateName);
  if (a.length === 0 || b.length === 0) return 0;

  const aSet = new Set(a);
  const bSet = new Set(b);
  if (!a.every((t) => bSet.has(t))) return 0;

  // Objekttyp nur auf der Trefferseite => anderes Haus.
  if (b.some((t) => PROPERTY_TYPES.has(t) && !aSet.has(t))) return 0;

  // Ein einzelnes kurzes Token (z.B. "rome") ist zu unspezifisch.
  if (a.length === 1 && a[0].length < 5) return 0;

  // Trägt der Hotelname nur EIN unterscheidendes Token, muss der Treffer damit
  // beginnen. Sonst matcht "Hotel Müggelsee Berlin" auf "Ferienhaus Rübezahl am
  // Müggelsee" - ein anderes Haus, das den See nur im Namen führt.
  // ("Bristol Berlin, Vignette Collection by IHG" bleibt gültig: beginnt mit
  // dem Token selbst.)
  if (a.length === 1 && b[0] !== a[0]) return 0;

  // Der Treffer darf nicht beliebig viel mehr enthalten — sonst matcht
  // "Circus" auch "Circus Hostel Apartments Berlin Mitte".
  if (b.length > a.length * 2 + 1) return 0;

  // Je näher die Tokenmengen beieinanderliegen, desto besser.
  return a.length / b.length;
}

/**
 * Booking-CDN-Thumbnails kommen klein (z.B. /square60/). Für Hero und Card
 * brauchen wir eine größere Variante — das Größensegment steckt im Pfad.
 */
function upscale(url: string): string {
  return url.replace(/\/(square\d+|max\d+(?:x\d+)?|thumb)\//i, "/max1024x768/");
}

let candidatesPromise: Promise<Candidate[]> | null = null;

async function loadCandidates(): Promise<Candidate[]> {
  const perDistrict = await Promise.all(
    districts.map((d) =>
      searchAccommodations({
        provider: "booking",
        lat: d.geo.lat,
        lng: d.geo.lng,
        radius: 3000,
        type: "hotel",
        // 50 pro Bezirk reichten nicht: im ersten Live-Build fanden nur 7 von
        // 41 redaktionellen Häusern einen Treffer, weil die großen Namen gar
        // nicht in der Ergebnisliste auftauchten.
        limit: 100,
        currency: "EUR",
        lang: "de",
        aid: affiliate.stay22.lmaId,
      }).catch(() => null),
    ),
  );

  // Bezirksradien überlappen → nach gefaltetem Namen deduplizieren.
  const byName = new Map<string, Candidate>();
  for (const result of perDistrict) {
    if (!Array.isArray(result)) continue;
    for (const c of result) {
      if (!c.name || !c.image) continue;
      const key = fold(c.name);
      if (!byName.has(key)) {
        byName.set(key, { name: c.name, image: c.image, link: c.link });
      }
    }
  }

  if (byName.size === 0) {
    console.warn(
      "[hotel-photos] Keine Stay22-Treffer (fehlender API-Key?) - Hotelbilder fallen auf das Bezirksbild zurueck.",
    );
  } else {
    console.log(`[hotel-photos] ${byName.size} Stay22-Kandidaten geladen.`);
  }

  return [...byName.values()];
}

/** Besten Treffer aus einer Kandidatenliste ziehen (0 = kein Match). */
function pickBest(hotelName: string, candidates: Candidate[]): HotelPhoto | null {
  let best: HotelPhoto | null = null;
  let bestScore = 0;
  for (const c of candidates) {
    const score = matchScore(hotelName, c.name);
    if (score > bestScore) {
      bestScore = score;
      best = { src: upscale(c.image), link: c.link, matchedName: c.name };
    }
  }
  return best;
}

/**
 * Gezielte Einzelabfrage für Häuser, die in der Bezirks-Sammelabfrage fehlen.
 * Die Namenssuche liefert das gesuchte Haus meist als ersten Treffer — der
 * strenge Abgleich entscheidet trotzdem, ob es wirklich passt.
 */
async function lookupByName(hotelName: string): Promise<Candidate[]> {
  const result = await searchAccommodations({
    provider: "booking",
    // Umlaute werden in searchAccommodations transliteriert (sonst HTTP 400).
    address: `${hotelName}, Berlin, Germany`,
    type: "hotel",
    limit: 5,
    currency: "EUR",
    lang: "de",
    aid: affiliate.stay22.lmaId,
  }).catch(() => null);

  if (!Array.isArray(result)) return [];
  return result
    .filter((c) => c.name && c.image)
    .map((c) => ({ name: c.name, image: c.image as string, link: c.link }));
}

/** Promise-Cache: mehrere Karten desselben Hotels lösen nur EINE Abfrage aus. */
const resolved = new Map<string, Promise<HotelPhoto | null>>();

async function resolvePhoto(hotel: Hotel): Promise<HotelPhoto | null> {
  if (!candidatesPromise) candidatesPromise = loadCandidates();
  const candidates = await candidatesPromise;

  // 1. Treffer aus der Bezirks-Sammelabfrage.
  let best = pickBest(hotel.name, candidates);

  // 2. Sonst gezielt nachfragen — nur einmal pro Haus und Build.
  if (!best && candidates.length > 0) {
    best = pickBest(hotel.name, await lookupByName(hotel.name));
    if (best) {
      console.log(`[hotel-photos] ${hotel.name} -> "${best.matchedName}" (Einzelabfrage)`);
      return best;
    }
    console.warn(`[hotel-photos] kein Treffer fuer "${hotel.name}" - Bezirksbild`);
    return null;
  }

  if (best) console.log(`[hotel-photos] ${hotel.name} -> "${best.matchedName}"`);
  return best;
}

/**
 * Foto für ein redaktionell gepflegtes Hotel — oder null, wenn die API nichts
 * liefert oder kein eindeutiger Namenstreffer existiert.
 */
export function getHotelPhoto(hotel: Hotel): Promise<HotelPhoto | null> {
  let pending = resolved.get(hotel.slug);
  if (!pending) {
    pending = resolvePhoto(hotel);
    resolved.set(hotel.slug, pending);
  }
  return pending;
}
