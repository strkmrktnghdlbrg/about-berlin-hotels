/**
 * Generiert die Standard-Open-Graph-Karte: public/og-default.png (1200x630).
 *
 * Warum generiert statt fotografiert: die Bezirksfotos stammen von Wikimedia
 * (CC BY-SA) — in einer OG-Karte lässt sich die Namensnennung nicht anzeigen.
 * Eine gebrandete Vektorkarte hat dieses Problem nicht.
 *
 * Einmalig laufen lassen, das Ergebnis wird committet (CI generiert nichts neu):
 *   node scripts/og-image.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const W = 1200;
const H = 630;

const VARIANTS = [
  {
    file: "public/og-default.png",
    subtitle: "Hotels in Berlin - nach Bezirk, Stil und Budget",
    facts: "12 Bezirke &#183; 10 Hotel-Stile &#183; 20 Sehensw&#252;rdigkeiten",
  },
  {
    file: "public/og-default-en.png",
    subtitle: "Berlin hotels - by district, style and budget",
    facts: "12 districts &#183; 10 hotel styles &#183; 20 attractions",
  },
];

const card = ({ subtitle, facts }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1c2f72"/>
      <stop offset="55%" stop-color="#1739b3"/>
      <stop offset="100%" stop-color="#3866f0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- dezente Kreise als Tiefe, kein Motivbezug noetig -->
  <circle cx="1050" cy="120" r="260" fill="#ffffff" opacity="0.06"/>
  <circle cx="1150" cy="560" r="180" fill="#ffffff" opacity="0.05"/>

  <!-- Haus-Icon (identisch zum Header-Logo) -->
  <g transform="translate(90,86) scale(2.6)" fill="none" stroke="#ffffff" stroke-width="2.2"
     stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
    <path d="M3 21V10l9-7 9 7v11"/>
    <path d="M9 21V13h6v8"/>
    <path d="M3 21h18"/>
  </g>

  <text x="90" y="330" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="82" font-weight="700" fill="#ffffff">About Berlin Hotels</text>

  <text x="90" y="404" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="38" font-weight="400" fill="#dbe7ff">${subtitle}</text>

  <rect x="90" y="452" width="120" height="4" rx="2" fill="#5d8aff"/>

  <text x="90" y="536" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="30" font-weight="600" fill="#b9d0ff">${facts}</text>

  <text x="90" y="580" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="26" font-weight="400" fill="#8db1ff">www.about-berlin-hotels.de</text>
</svg>`;

await mkdir("public", { recursive: true });
for (const variant of VARIANTS) {
  const info = await sharp(Buffer.from(card(variant)))
    .png({ compressionLevel: 9 })
    .toFile(variant.file);
  console.log(
    `[og-image] ${variant.file} -> ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`,
  );
}
