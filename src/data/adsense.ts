/**
 * Google AdSense config.
 * Snippet wird sitewide geladen, aber NICHT auf noindex-Pages
 * (Impressum, Datenschutz, 404) — dort ohnehin keine Auslieferung.
 *
 * Pflicht: `public/ads.txt` mit:
 *   google.com, pub-3946820918041547, DIRECT, f08c47fec0942fa0
 */
export const adsense = {
  publisherId: "ca-pub-3946820918041547",
  enabled: true,
};

export const adsenseEnabled =
  adsense.enabled && adsense.publisherId.length > 0;
