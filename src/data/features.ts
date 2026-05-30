/**
 * Feature-Flags — zentrale Aktivierungslogik für optionale Sections.
 * Filtert Nav-Items, Pages und Sitemap-Einträge.
 */
export const features = {
  reiseplaner: { enabled: true },
  topTen: { enabled: true },
  // Phase 2 — noch nicht implementiert:
  events: { enabled: false },
  news: { enabled: false },
  branchen: { enabled: false },
  werben: { enabled: false },
};
