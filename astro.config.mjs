import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.about-berlin-hotels.de",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/404"),
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
