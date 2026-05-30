/**
 * Stay22 Direct Travel API — Helper (about-berlin-hotels.de)
 * -----------------------------------------------------------
 * Build-Time-Fetch von Live-Hotel-Daten via /v1/accommodations.
 *
 * Patterns aus dem Stay22 Playbook (Sektion 7.1, Pattern A):
 *   - X-API-Key Header
 *   - 60min HTTP-Caching erlaubt (KEIN persistenter DB-Storage)
 *   - Pattern A: Build-Time + GitHub-Action-Cron-Rebuild alle 6h
 *
 * WICHTIG (Stay22-API-Quirks):
 *   1. `address` mit Umlauten → HTTP 400. Wir transliterieren automatisch.
 *   2. `minguestrating`/`minstarrating` filtern serverseitig oft 0 Treffer.
 *      Wir fetchen das 4-fache Limit und filtern CLIENT-SEITIG.
 *   3. Response-Schema ist verschachtelt (location.coordinates.lat,
 *      rating.value, media.thumbnail, links.url). normalize() flacht ab.
 *
 * Env-Var: STAY22_API_KEY
 *   Wenn nicht gesetzt → Helper gibt null zurück (graceful degradation).
 */

export interface Stay22Accommodation {
  id?: string;
  name: string;
  type?: string;
  image?: string;
  /** Vollständige Affiliate-URL inkl. lmaID — direkt im href verwenden. */
  link?: string;
  rating?: {
    /** 0–10 (Booking-Score-Skala). */
    score?: number;
    count?: number;
  };
  starRating?: number;
  price?: {
    total?: number;
    perNight?: number;
    currency?: string;
    formattedTotal?: string;
    formattedPerNight?: string;
  };
  address?: {
    full?: string;
    cityName?: string;
    areaName?: string;
  };
  /** Distanz vom Suchzentrum in Metern (nur bei lat/lng-Suche). */
  distance?: number;
  geo?: { lat?: number; lng?: number };
  policies?: { freeCancellation?: boolean; instantBook?: boolean };
}

export interface Stay22SearchOptions {
  provider?: "booking" | "expedia" | "vrbo" | "hotelscom";
  /**
   * Volltext-Adresse für Geo-Lookup. Keine Umlaute — die API antwortet
   * sonst mit HTTP 400. Beispiel: "Berlin, Germany".
   */
  address?: string;
  lat?: number;
  lng?: number;
  /** Suchradius in Metern (nur mit lat/lng). Default API-seitig 10000. */
  radius?: number;
  /** "hotel" | "rental" */
  type?: string;
  minguestrating?: number;
  /** 0–5. */
  minstarrating?: number;
  min?: number;
  max?: number;
  limit?: number;
  currency?: string;
  lang?: string;
  checkin?: string;
  checkout?: string;
  adults?: number;
  children?: number;
  rooms?: number;
  campaign?: string;
  /** lmaID — Pflicht für Affiliate-Attribution. */
  aid?: string;
}

const API_BASE = "https://api.stay22.com/v1";

function getApiKey(): string | null {
  // @ts-expect-error — import.meta.env existiert in Astro/Vite
  const viteKey =
    typeof import.meta !== "undefined" ? import.meta.env?.STAY22_API_KEY : undefined;
  const nodeKey = typeof process !== "undefined" ? process.env?.STAY22_API_KEY : undefined;
  const key = viteKey || nodeKey;
  return typeof key === "string" && key.length > 0 ? key : null;
}

function formatPrice(amount: number | undefined, currency: string = "EUR"): string | undefined {
  if (amount === undefined || amount === null || Number.isNaN(amount)) return undefined;
  const symbol = currency === "EUR" ? "€" : currency === "USD" ? "$" : currency;
  const rounded = Math.round(amount);
  return `${rounded.toLocaleString("de-DE")} ${symbol}`;
}

function normalize(
  raw: any,
  meta: { nights?: number; currency?: string } = {},
): Stay22Accommodation {
  const currency = meta.currency || raw?.price?.currency || "EUR";
  const total: number | undefined = raw?.price?.total;
  const perNight =
    total !== undefined && meta.nights && meta.nights > 0
      ? total / meta.nights
      : undefined;

  return {
    id: raw?.id ? String(raw.id) : undefined,
    name: raw?.name ?? "",
    type: raw?.type,
    image: raw?.media?.thumbnail,
    link: raw?.links?.url,
    rating: raw?.rating
      ? { score: raw.rating.value, count: raw.rating.count }
      : undefined,
    starRating: raw?.rating?.hotelStars,
    price: {
      total,
      perNight,
      currency,
      formattedTotal: formatPrice(total, currency),
      formattedPerNight: formatPrice(perNight, currency),
    },
    address: raw?.location
      ? {
          full: raw.location.address,
          cityName: raw.location.cityName,
          areaName: raw.location.areaName,
        }
      : undefined,
    distance: raw?.location?.distanceInMeters,
    geo: raw?.location?.coordinates
      ? { lat: raw.location.coordinates.lat, lng: raw.location.coordinates.lng }
      : undefined,
    policies: raw?.policies,
  };
}

function transliterate(s: string): string {
  return s
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae")
    .replace(/Ö/g, "Oe")
    .replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss");
}

/**
 * Live-Accommodations via Stay22 API.
 *
 * Returns null wenn STAY22_API_KEY fehlt — Caller muss das defensiv
 * handhaben (Component versteckt sich, Page zeigt nur statische Hotels).
 */
export async function searchAccommodations(
  options: Stay22SearchOptions,
): Promise<Stay22Accommodation[] | null> {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn(
      "[stay22] STAY22_API_KEY env var fehlt — Live-Hotels werden übersprungen.",
    );
    return null;
  }

  const minGuest = options.minguestrating;
  const minStar = options.minstarrating;
  const userLimit = options.limit ?? 10;

  const safeOptions: Stay22SearchOptions = { ...options };
  delete safeOptions.minguestrating;
  delete safeOptions.minstarrating;
  if (minGuest || minStar) {
    safeOptions.limit = Math.max(userLimit * 4, 40);
  }
  if (typeof safeOptions.address === "string") {
    safeOptions.address = transliterate(safeOptions.address);
  }

  const params = new URLSearchParams();
  Object.entries(safeOptions).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") {
      params.set(k, String(v));
    }
  });

  const url = `${API_BASE}/accommodations?${params.toString()}`;

  try {
    const res = await fetch(url, {
      headers: {
        "X-API-Key": apiKey,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(
        `[stay22] API ${res.status} für ${options.address ?? "lat/lng-search"}: ${body.slice(0, 200)}`,
      );
      return null;
    }

    const data = (await res.json()) as
      | { results?: any[]; meta?: { nights?: number; currency?: string } }
      | any[];

    const results = Array.isArray(data) ? data : data.results ?? [];
    const meta = !Array.isArray(data) ? data.meta : undefined;

    let normalized = results.map((r) => normalize(r, meta || {}));

    if (minGuest !== undefined) {
      normalized = normalized.filter((h) => (h.rating?.score ?? 0) >= minGuest);
    }
    if (minStar !== undefined) {
      normalized = normalized.filter((h) => (h.starRating ?? 0) >= minStar);
    }

    return normalized.slice(0, userLimit);
  } catch (err) {
    console.error("[stay22] Fetch fehlgeschlagen:", err);
    return null;
  }
}

/**
 * Top-Hotels nach Adresse + Bewertung.
 * Default-Filter: 8.0+ Gäste-Score, 3+ Sterne — gut für Großstädte wie Berlin.
 */
export async function getTopHotels(
  address: string,
  lmaId: string,
  opts: Partial<Stay22SearchOptions> = {},
): Promise<Stay22Accommodation[] | null> {
  return searchAccommodations({
    provider: "booking",
    address,
    type: "hotel",
    minguestrating: 8.0,
    minstarrating: 3,
    limit: 12,
    currency: "EUR",
    lang: "de",
    aid: lmaId,
    campaign: lmaId,
    ...opts,
  });
}

/**
 * Hotels in der Nähe einer Sehenswürdigkeit (lat/lng-basiert).
 * Default-Radius 1500m, sortiert nach Distanz.
 */
export async function getNearbyHotels(
  lat: number,
  lng: number,
  lmaId: string,
  opts: Partial<Stay22SearchOptions> = {},
): Promise<Stay22Accommodation[] | null> {
  return searchAccommodations({
    provider: "booking",
    lat,
    lng,
    radius: 1500,
    type: "hotel",
    limit: 8,
    currency: "EUR",
    lang: "de",
    aid: lmaId,
    campaign: lmaId,
    ...opts,
  });
}
