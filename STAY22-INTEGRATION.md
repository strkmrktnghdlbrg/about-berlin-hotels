# Stay22 — Hotel-Affiliate-Integration für about-berlin-hotels.de

Stay22 wirkt zweistufig auf diesem Portal:

1. **Snippet im BaseLayout** ([`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro))
   rewritet zur Laufzeit jeden `booking.com`-Link auf der Seite zu einem
   Affiliate-tracking-fähigen Stay22-Link. Pro Klick, sitewide.
2. **Map-Widget** ([`src/components/Stay22Map.astro`](src/components/Stay22Map.astro))
   zeigt eine interaktive Hotel-Karte mit Live-Preisen — eingebettet auf
   Bezirks- und Hotel-Detailseiten.

Eine dritte Stufe ist die **Direct Travel API**
([`src/lib/stay22.ts`](src/lib/stay22.ts)). Sie fetcht beim Astro-Build
Live-Hotels (Name, Preis, Sterne, Bewertung, Bild, fertig getaggter
Affiliate-Link) und rendert sie über zwei Komponenten:
- [`Stay22TopHotels.astro`](src/components/Stay22TopHotels.astro) — Top-12 auf `/hotels/` Index
- [`Stay22NearbyHotels.astro`](src/components/Stay22NearbyHotels.astro) — 1.5 km Radius auf jeder Sehenswürdigkeit

Voraussetzung: `STAY22_API_KEY` als Env-Var (siehe `.env.example`).

## Konfiguration

### lmaID — pro Projekt einzigartig

**about-berlin-hotels.de** ist im
[`STAY22-IDS-REFERENCE.md`](../STAY22-IDS-REFERENCE.md) noch nicht eingetragen.
Eine neue Property muss im Stay22-Dashboard (Account
`j.stark@stark.marketing`) angelegt werden. Anschließend die ID in
[`src/data/affiliate.ts`](src/data/affiliate.ts) hinterlegen:

```ts
export const affiliate = {
  stay22: {
    lmaId: "<NEUE_ID>",  // ← hier eintragen
    enabled: true,
    mainColor: "1c4f9e", // Spree-Blau (Brand-Akzent, ohne #)
    mapEmbedId: "",      // optional: vorkonfiguriertes Dashboard-Embed
  },
  // ...
};
```

Solange `lmaId` leer ist:
- `stay22Enabled` ist `false` → `letmeallez.js`-Snippet wird nicht geladen
- `Stay22Map` rendert eine OSM-Static-Map als Fallback (kein Live-Hotel-Listing)
- Hotel-CTAs verlinken trotzdem zu nativen Booking.com-URLs, falls
  `hotel.bookingUrl` gesetzt — nur ohne Affiliate-Tracking

### Brand maincolor

Map-Widget nutzt `#1c4f9e` (Spree-Blau, Tailwind `brand-700`) als
`maincolor` — eingestellt in
[`src/data/affiliate.ts`](src/data/affiliate.ts). Konsistent zum
Hero-Gradient `gradient-spree` der Site.

## Native Booking-URLs pflegen

Damit `letmeallez.js` etwas zu rewriten hat, brauchen die Hotel-Cards
native Booking.com-Links im Format
`https://www.booking.com/hotel/de/<slug>.de.html`.

In [`src/data/hotels.ts`](src/data/hotels.ts) das Feld `bookingUrl?`
pro Hotel pflegen:

```ts
{
  slug: "hotel-adlon-kempinski",
  // …
  website: "https://www.kempinski.com/de/hotel-adlon",
  bookingUrl: "https://www.booking.com/hotel/de/adlon-kempinski-berlin.de.html",
}
```

Pflicht-Attribute am Link sitzen in
[`src/components/BookingCTA.astro`](src/components/BookingCTA.astro):
`rel="sponsored noopener nofollow"` + sichtbare Affiliate-Disclosure.

## Verifikation nach Deploy

1. **DevTools → Network**, Seite laden → suche nach
   `scripts.stay22.com/letmeallez.js` — sollte 200 OK liefern, wenn
   `stay22Enabled` true ist.
2. **Booking-CTA klicken** → Ziel-URL sollte `stay22.com/` enthalten,
   nicht direkt `booking.com` (Snippet hat den Klick rewritet).
3. **Stay22-Dashboard** (`https://www.stay22.com/`, Account
   `j.stark@stark.marketing`) prüfen ob Klicks ankommen — kann bis 24h
   dauern.
4. **Map-Widget** sollte das Brand-Blau als Akzent zeigen, nicht den
   Stay22-Default-Orange.

## Affiliate-Disclosure (Pflicht DE/EU)

- `BookingCTA` rendert die Disclosure-Zeile direkt unter dem Button
  ("Affiliate-Link: Bei Buchung über Stay22/Booking.com erhalten wir
  eine Provision. Du zahlst keinen Cent extra.").
- `Stay22Map` rendert dieselbe Disclosure unter der Karte (Default).
- Datenschutzerklärung (`src/pages/datenschutz.astro`) erklärt die
  Stay22-Datenübertragung und verlinkt deren Privacy-Policy.

## Caching-Hinweise (Stay22 ToS)

- HTTP-Cache: 60 Minuten erlaubt.
- KEIN persistenter DB-Storage der API-Antworten.
- Wenn Direct Travel API später dazukommt: Build-Time-Fetch +
  GitHub-Action-Cron-Rebuild alle 6 Stunden ist der empfohlene Pattern.

## Hilfreiche Dateien im Überblick

| Datei | Zweck |
|---|---|
| [`src/data/affiliate.ts`](src/data/affiliate.ts) | lmaID, GYG-Partner-ID, maincolor, feature flags |
| [`src/data/features.ts`](src/data/features.ts) | Sitewide Feature-Flags |
| [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) | letmeallez.js + GYG Loader-Snippet im `<head>` |
| [`src/components/Stay22Map.astro`](src/components/Stay22Map.astro) | Map mit 4-stufiger Fallback-Kette |
| [`src/components/BookingCTA.astro`](src/components/BookingCTA.astro) | Affiliate-konformer Booking-Button |
| [`STAY22-IDS-REFERENCE.md`](../STAY22-IDS-REFERENCE.md) | Globale lmaID-Tabelle (kommt von außerhalb des Projekts) |
