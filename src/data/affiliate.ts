/**
 * Affiliate-Konfiguration für about-berlin-hotels.de.
 * ---------------------------------------------------
 * Stay22 (Hotels) + GetYourGuide (Touren & Tickets).
 *
 * Stay22 wirkt zweistufig:
 *   1. Snippet im BaseLayout (`letmeallez.js`) rewritet zur Laufzeit
 *      ALLE booking.com-Links zu Affiliate-tracking-fähigen Stay22-Links.
 *   2. Direct Travel API (siehe src/lib/stay22.ts) fetcht beim Build
 *      Live-Hotel-Daten für die Stay22Top/Nearby-Komponenten.
 *      Voraussetzung: env STAY22_API_KEY in der Build-Pipeline.
 *
 * lmaID-Quelle: /Users/joshuastark/Documents/Claude Code/STAY22-IDS-REFERENCE.md
 *
 * Pro Projekt INDIVIDUELL — niemals aus anderem Projekt übernehmen,
 * sonst landet die Affiliate-Provision auf dem falschen Konto.
 */

export const affiliate = {
  stay22: {
    /**
     * about-berlin-hotels.de — Property im Stay22-Dashboard
     * (Account j.stark@stark.marketing).
     */
    lmaId: "6a15fe51b50e1619f514d17d",
    enabled: true,
    /**
     * Optional: vorkonfiguriertes Map-Embed-Widget aus dem Stay22-Dashboard.
     * Wenn gesetzt, nutzt <Stay22Map> dieses Embed (https://stay22.com/embed/<id>)
     * statt der Parameter-URL — robuster, mit Dashboard-Branding.
     */
    mapEmbedId: "",
    /**
     * Brand maincolor für das Map-Widget (Hex OHNE führendes #).
     * Aus Tailwind brand-700: --color-brand-700 ≈ #1c4f9e (Spree-Blau).
     * Wird nur in der Parameter-URL verwendet.
     */
    mainColor: "1c4f9e",
  },
  getYourGuide: {
    /**
     * Joshua-Stark-Default Partner-ID (zentrales Affiliate-Konto).
     * Siehe Playbook 7.2.
     */
    partnerId: "1UPZQQB",
    locale: "de-DE",
    enabled: true,
    cityQuery: "Berlin",
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
