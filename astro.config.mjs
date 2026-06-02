import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Legacy-Redirects: alte WP-Spin-Duplikate → kanonischer zurückgeführter Artikel.
 * Die 36 indexierten Hauptseiten (Bezirke + Themen + Gastbeiträge) bleiben unter
 * ihren EXAKTEN URLs erhalten (eigene Pages) — NICHT hier umleiten!
 * Echte 301 liefert .htaccess (Apache); diese Astro-Redirects sind der Fallback
 * (Meta-Refresh) für statisches Hosting ohne .htaccess (z.B. Cloudflare Pages).
 */
const legacyRedirects = {
  "/billige-hotels/": "/budget-hotels-berlin/",
  "/budget-luxus-hotels-berlin/": "/luxus-hotels-berlin/",
  "/budget-friendly-luxury-berlin/": "/luxus-hotels-berlin/",
  "/budget-friendly-luxury-berlin-2/": "/luxus-hotels-berlin/",
  "/luxus-boutique-hotels-berlin/": "/luxus-hotels-berlin/",
  "/luxus-spa-hotels-berlin/": "/wellness-spa-hotels-berlin/",
  "/historische-luxushotels-berlin/": "/historische-hotels-berlin/",
  "/historische-charme-hotels-berlin/": "/historische-hotels-berlin/",
  "/hotel-mit-geschichte-berlin/": "/historische-hotels-berlin/",
  "/wellness-retreats-berlin/": "/wellness-spa-hotels-berlin/",
  "/wellness-retreats-berlin-2/": "/wellness-spa-hotels-berlin/",
  "/boutique-spa-hotels-berlin/": "/wellness-spa-hotels-berlin/",
  "/charming-hotels-einzigartige-unterkuenfte/": "/boutique-hotels-berlin-charme/",
  "/innovative-hotels-berlin/": "/design-hotels-berlin/",
  "/high-tech-hotels-berlin/": "/design-hotels-berlin/",
  "/architektur-wunder-hotels-berlin/": "/design-hotels-berlin/",
  "/trendy-hotels-berlin/": "/design-hotels-berlin/",
  "/kuenstlerische-hotels-berlin/": "/kultur-hotels-berlin/",
  "/kulturelle-hideaways-berlin/": "/kultur-hotels-berlin/",
  "/hidden-gems-hotels-berlin/": "/geheimtipp-hotels-berlin/",
  "/hidden-gems-hotels-berlin-2/": "/geheimtipp-hotels-berlin/",
  "/ungewoehnliche-hotels-berlin/": "/geheimtipp-hotels-berlin/",
  "/authentische-berliner-hotels/": "/geheimtipp-hotels-berlin/",
  "/pet-friendly-hotels-berlin/": "/tierfreundliche-hotels-berlin/",
  "/pet-friendly-hotels-berlin-2/": "/tierfreundliche-hotels-berlin/",
  "/familien-spass-hotels-berlin/": "/familienfreundliche-hotels-berlin/",
  "/oeko-freundliche-hotels-berlin/": "/nachhaltige-hotels-berlin/",
  "/beste-lage-hotels-berlin/": "/zentrale-hotels-berlin/",
  "/hotels-near-major-attractions-berlin/": "/zentrale-hotels-berlin/",
  "/ruhige-ecken-hotels-berlin/": "/steglitz/",
  "/bester-ausblick-hotels-berlin/": "/rooftop-bars-hotels-berlin/",
  "/luxuriose-dachterrassen-hotels-berlin/": "/rooftop-bars-hotels-berlin/",
  "/hotels-mit-bestem-service-berlin/": "/geschaeftsreisen-hotels-berlin/",
  "/hotels-mit-bestem-service-berlin-2/": "/geschaeftsreisen-hotels-berlin/",
  "/hotelveranstaltungen-verbessern-gaesteerlebnis/": "/geschaeftsreisen-hotels-berlin/",
  "/hotel-shuttleservice/": "/kategorien/hotels-mit-shuttle/",
  "/stadtteile-einblicke-vielfalt-leben/": "/stadtteile/",
};

const redirectSources = Object.keys(legacyRedirects);

export default defineConfig({
  site: "https://www.about-berlin-hotels.de",
  trailingSlash: "always",
  build: { format: "directory" },
  redirects: legacyRedirects,
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/404") &&
        // Spin-Duplikat-Redirects nicht in die Sitemap aufnehmen
        !redirectSources.some((src) => page.endsWith(src)),
      i18n: {
        defaultLocale: "de",
        locales: { de: "de-DE", en: "en-US" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
