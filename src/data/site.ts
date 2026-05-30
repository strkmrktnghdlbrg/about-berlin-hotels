export const site = {
  domain: "www.about-berlin-hotels.de",
  baseUrl: "https://www.about-berlin-hotels.de",
  brand: {
    name: "About Berlin Hotels",
    short: "ABH",
    tagline: {
      de: "Dein Berlin-Guide für Hotels in jedem Bezirk",
      en: "Your Berlin guide to hotels in every district",
    },
  },
  contact: {
    email: "info@about-berlin-hotels.de",
  },
  social: {},
  defaultLocale: "de" as const,
  locales: ["de", "en"] as const,
  // Stay22 ist der Affiliate-Map-Provider (verlinkt zu Booking.com etc.)
  stay22: {
    enabled: true,
  },
};

export type Locale = (typeof site.locales)[number];

export const localePrefix = (locale: Locale) => (locale === "de" ? "" : "/en");
export const otherLocale = (locale: Locale): Locale =>
  locale === "de" ? "en" : "de";
