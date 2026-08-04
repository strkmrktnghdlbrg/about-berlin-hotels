/**
 * Cloudflare Pages Middleware fuer about-berlin-hotels.de.
 *
 * Hintergrund: Die komplette Legacy-Liste lag bis 04.08.2026 in
 * public/.htaccess. Cloudflare Pages ist kein Apache und liest die Datei
 * nicht - die /thema/-Regeln lieferten live 404.
 *
 * Was hier liegt und nicht in _redirects liegen kann:
 *   1. Kanonischer Host (Apex -> www).
 *   2. HTTP 410 fuer WP-Reste. _redirects kennt keine 410-Syntax.
 *   3. Schraegstrich-Normalisierung: Pages haengt den Schraegstrich nur an,
 *      wenn unter dem Pfad ein Asset liegt, und befragt bei 404 die
 *      Redirect-Tabelle nicht mehr.
 *
 * Reihenfolge: Host -> 410 -> Schraegstrich -> next().
 */

const CANONICAL_HOST = "www.about-berlin-hotels.de";

const GONE_EXAKT = new Set([
  "/feed",
  "/feed/",
  "/comments/feed",
  "/comments/feed/",
  "/xmlrpc.php",
]);

const GONE_PREFIX = ["/wp-json"];

const ASSET_EXT =
  /\.(js|mjs|css|map|json|xml|txt|webmanifest|ico|png|jpe?g|gif|svg|webp|avif|woff2?|ttf|eot|pdf|zip|mp4|webm)$/i;

const SEITE_410 = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Seite dauerhaft entfernt | About Berlin Hotels</title>
<style>
  :root { color-scheme: light }
  body { margin:0; font-family: ui-sans-serif, system-ui, sans-serif; color:#1f2937; line-height:1.65 }
  .wrap { max-width: 40rem; margin: 0 auto; padding: 4rem 1.25rem }
  h1 { font-size: 1.75rem; color:#1e3a8a; line-height:1.25; margin:0 0 1rem }
  a { color:#1d4ed8 }
  ul { padding-left: 1.2rem }
  li { margin: .35rem 0 }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Diese Seite wurde dauerhaft entfernt</h1>
    <p>Sie stammt aus der fruehereren WordPress-Version von About Berlin Hotels.</p>
    <ul>
      <li><a href="/stadtteile/">Hotels nach Stadtteil</a></li>
      <li><a href="/tipps/">Tipps rund um den Berlin-Aufenthalt</a></li>
      <li><a href="/kategorien/billige-hotels/">Guenstige Hotels</a></li>
    </ul>
    <p><a href="/">Zur Startseite</a></p>
  </div>
</body>
</html>`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname !== CANONICAL_HOST &&
    url.hostname.endsWith("about-berlin-hotels.de")
  ) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  const pfad = url.pathname;
  if (GONE_EXAKT.has(pfad) || GONE_PREFIX.some((p) => pfad.startsWith(p))) {
    return new Response(SEITE_410, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  if (pfad !== "/" && !pfad.endsWith("/") && !ASSET_EXT.test(pfad)) {
    url.pathname = pfad + "/";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
