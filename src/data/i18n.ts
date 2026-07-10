import type { Locale } from "./site";

type Dict = Record<Locale, string>;

export const t = {
  nav: {
    home: { de: "Startseite", en: "Home" },
    districts: { de: "Stadtteile", en: "Districts" },
    categories: { de: "Kategorien", en: "Categories" },
    attractions: { de: "Sehenswürdigkeiten", en: "Attractions" },
    tips: { de: "Tipps", en: "Tips" },
    legal: { de: "Rechtliches", en: "Legal" },
  },
  ui: {
    bookOnMap: { de: "Hotels auf der Karte ansehen", en: "View hotels on map" },
    seeAllHotels: { de: "Alle Hotels ansehen", en: "View all hotels" },
    findStay: { de: "Hotel finden", en: "Find a stay" },
    learnMore: { de: "Mehr erfahren", en: "Learn more" },
    bookNow: { de: "Jetzt buchen", en: "Book now" },
    fromPerNight: { de: "ab €/Nacht", en: "from €/night" },
    backToTop: { de: "Nach oben", en: "Back to top" },
    languageSwitch: { de: "EN", en: "DE" },
    readyToBook: { de: "Bereit zu buchen?", en: "Ready to book?" },
    exploreDistricts: { de: "Berliner Bezirke entdecken", en: "Explore Berlin districts" },
    popularCategories: { de: "Beliebte Hotel-Kategorien", en: "Popular hotel categories" },
    topAttractions: { de: "Top Sehenswürdigkeiten in Berlin", en: "Top Berlin attractions" },
    featuredHotels: { de: "Ausgewählte Hotels", en: "Featured hotels" },
    travelTips: { de: "Reisetipps", en: "Travel tips" },
    hotelsCount: { de: "Hotels", en: "hotels" },
    districtsCount: { de: "Bezirke", en: "districts" },
    categoriesCount: { de: "Kategorien", en: "categories" },
    attractionsCount: { de: "Sehenswürdigkeiten", en: "attractions" },
    hero: {
      eyebrow: { de: "Berlin · Hotelguide", en: "Berlin · Hotel guide" },
      title: {
        de: "Hotels in Berlin - kuratiert nach Bezirk, Stil und Anlass",
        en: "Hotels in Berlin - curated by district, style and occasion",
      },
      subtitle: {
        de: "Von Luxushotels in Mitte über Boutique-Häuser in Friedrichshain bis zu familienfreundlichen Hotels in Pankow. Wir zeigen dir, wo du am besten übernachtest - mit echten Karten, ehrlichen Beschreibungen und einem Klick zur Buchung.",
        en: "From luxury hotels in Mitte through boutique houses in Friedrichshain to family-friendly stays in Pankow. We show you where to stay best - with real maps, honest descriptions and one click to book.",
      },
      ctaPrimary: { de: "Bezirke erkunden", en: "Explore districts" },
      ctaSecondary: { de: "Top-Hotels ansehen", en: "View top hotels" },
    },
    cta: {
      title: {
        de: "Finde dein Berlin-Hotel",
        en: "Find your Berlin hotel",
      },
      body: {
        de: "Egal ob Wochenend-Trip, Geschäftsreise oder Familienurlaub - entdecke das passende Hotel in jedem Berliner Bezirk.",
        en: "Whether it's a weekend trip, a business stay or a family holiday - find the right hotel in every Berlin district.",
      },
    },
  },
  footer: {
    about: { de: "Über uns", en: "About" },
    aboutBody: {
      de: "About Berlin Hotels ist ein unabhängiger, redaktioneller Berlin-Hotelguide.",
      en: "About Berlin Hotels is an independent, editorial Berlin hotel guide.",
    },
    quickLinks: { de: "Schnellzugriff", en: "Quick links" },
    imprint: { de: "Impressum", en: "Imprint" },
    privacy: { de: "Datenschutz", en: "Privacy" },
    copyright: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
    affiliateDisclosure: {
      de: "Wir verlinken zu Buchungsplattformen und erhalten ggf. eine Provision. Für dich bleibt der Preis gleich.",
      en: "We link to booking platforms and may earn a commission. Your price stays the same.",
    },
  },
};

export const tr = (dict: Dict, locale: Locale): string => dict[locale];
