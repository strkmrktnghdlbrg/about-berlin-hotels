import type { Locale } from "./site";

export type Category = {
  slug: string;
  /** Slug für englische Route */
  slugEn: string;
  name: { de: string; en: string };
  shortName: { de: string; en: string };
  icon: string;
  priceHint: { de: string; en: string };
  intro: { de: string; en: string };
  description: { de: string; en: string };
  /** Stadtteile, in denen diese Kategorie besonders stark vertreten ist */
  bestDistricts: string[];
  /** Optional: nur setzen wenn echte Anzahl bekannt. Sonst aus hotels[] live zählen. */
  hotelCount?: number;
  color: "navy" | "azure" | "teal" | "indigo" | "sky" | "amber";
};

export const categories: Category[] = [
  {
    slug: "luxushotels",
    slugEn: "luxury-hotels",
    name: { de: "Luxushotels", en: "Luxury Hotels" },
    shortName: { de: "Luxus", en: "Luxury" },
    icon: "✦",
    priceHint: { de: "ab 280 €/Nacht", en: "from €280/night" },
    intro: {
      de: "5-Sterne, Concierge-Service, Spa, Michelin-Restaurant. Vor allem in Mitte und Charlottenburg.",
      en: "5-star, concierge service, spa, Michelin restaurant. Especially in Mitte and Charlottenburg.",
    },
    description: {
      de: "Berlin spielt in der Top-Liga: Adlon, Waldorf Astoria, Hotel de Rome, Ritz-Carlton. Die meisten Luxushotels liegen direkt am Brandenburger Tor, am Gendarmenmarkt oder am Kurfürstendamm. Wer maximalen Komfort, Spa, hauseigene Restaurants und 24/7-Concierge sucht, ist hier richtig.",
      en: "Berlin plays in the top league: Adlon, Waldorf Astoria, Hotel de Rome, Ritz-Carlton. Most luxury hotels sit right by Brandenburg Gate, Gendarmenmarkt or Kurfürstendamm. The place for maximum comfort, spa, in-house restaurants and 24/7 concierge.",
    },
    bestDistricts: ["mitte", "charlottenburg-wilmersdorf"],
    color: "navy",
  },
  {
    slug: "boutique-hotels",
    slugEn: "boutique-hotels",
    name: { de: "Boutique Hotels", en: "Boutique Hotels" },
    shortName: { de: "Boutique", en: "Boutique" },
    icon: "◆",
    priceHint: { de: "ab 140 €/Nacht", en: "from €140/night" },
    intro: {
      de: "Klein, individuell, designstark. Berlin hat eine der dichtesten Boutique-Hotel-Szenen Europas.",
      en: "Small, individual, design-driven. Berlin has one of Europe's densest boutique hotel scenes.",
    },
    description: {
      de: "Boutique Hotels sind das Gegenstück zur Kette: 20–80 Zimmer, alle individuell, oft in Altbauten oder umgebauten Industriegebäuden. Friedrichshain-Kreuzberg ist das Boutique-Mekka, aber auch Mitte und Prenzlauer Berg haben hervorragende Häuser.",
      en: "Boutique hotels are the chain antidote: 20–80 rooms, all individual, often in period buildings or converted industrial spaces. Friedrichshain-Kreuzberg is the boutique mecca, but Mitte and Prenzlauer Berg also have outstanding houses.",
    },
    bestDistricts: ["friedrichshain-kreuzberg", "mitte", "pankow"],
    color: "indigo",
  },
  {
    slug: "familienhotels",
    slugEn: "family-hotels",
    name: { de: "Familienhotels", en: "Family Hotels" },
    shortName: { de: "Familie", en: "Family" },
    icon: "♥",
    priceHint: { de: "ab 110 €/Nacht", en: "from €110/night" },
    intro: {
      de: "Kinderbetten, Familienzimmer, Pool, Garten. Pankow und Reinickendorf führen.",
      en: "Children's beds, family rooms, pool, garden. Pankow and Reinickendorf lead.",
    },
    description: {
      de: "Familienhotels haben Familienzimmer (4+ Personen), Kinderbetten, oft Pool, Spielecke und kinderfreundliche Frühstücksbuffets. Pankow, Reinickendorf und Treptow-Köpenick haben das größte Angebot - alle gut mit Tierpark, Mauerpark oder Müggelsee verbunden.",
      en: "Family hotels offer family rooms (4+ people), kids' beds, often pool, play area and child-friendly breakfast buffets. Pankow, Reinickendorf and Treptow-Köpenick have the biggest selection - all well-connected to Tierpark, Mauerpark or Müggelsee.",
    },
    bestDistricts: ["pankow", "reinickendorf", "treptow-koepenick"],
    color: "sky",
  },
  {
    slug: "billige-hotels",
    slugEn: "budget-hotels",
    name: { de: "Billige Hotels", en: "Budget Hotels" },
    shortName: { de: "Budget", en: "Budget" },
    icon: "€",
    priceHint: { de: "ab 45 €/Nacht", en: "from €45/night" },
    intro: {
      de: "Sauber, gut angebunden, unter 80 € - Spandau, Marzahn, Neukölln.",
      en: "Clean, well-connected, under €80 - Spandau, Marzahn, Neukölln.",
    },
    description: {
      de: "Billige Hotels in Berlin müssen nicht heißen: weit draußen. Spandau, Marzahn-Hellersdorf und Teile von Neukölln bieten sehr günstige 3-Sterne-Hotels mit S-/U-Bahn-Anschluss. Wer Budget < 80 € hat, wird hier fündig.",
      en: "Budget hotels in Berlin don't have to mean far out. Spandau, Marzahn-Hellersdorf and parts of Neukölln offer very affordable 3-star hotels with S-/U-Bahn access. Anyone on a budget under €80 will find a stay here.",
    },
    bestDistricts: ["spandau", "marzahn-hellersdorf", "neukoelln"],
    color: "teal",
  },
  {
    slug: "charmante-hotels",
    slugEn: "charming-hotels",
    name: { de: "Charmante Hotels", en: "Charming Hotels" },
    shortName: { de: "Charmant", en: "Charming" },
    icon: "◐",
    priceHint: { de: "ab 120 €/Nacht", en: "from €120/night" },
    intro: {
      de: "Persönlich geführt, mit Geschichte, oft inhabergeführt. Für Reisende, die Charakter wollen.",
      en: "Personally run, with history, often owner-managed. For travelers who want character.",
    },
    description: {
      de: "Charmante Hotels haben eines gemeinsam: Sie sind keine Kette. Kleine Häuser mit Geschichte, oft seit Generationen inhabergeführt. Charlottenburg, Wilmersdorf und Steglitz-Zehlendorf haben besonders viele dieser Häuser.",
      en: "Charming hotels share one thing: they are not chains. Small houses with history, often run by the same family for generations. Charlottenburg, Wilmersdorf and Steglitz-Zehlendorf have especially many of these.",
    },
    bestDistricts: ["charlottenburg-wilmersdorf", "steglitz-zehlendorf", "pankow"],
    color: "azure",
  },
  {
    slug: "business-hotels",
    slugEn: "business-hotels",
    name: { de: "Business Hotels", en: "Business Hotels" },
    shortName: { de: "Business", en: "Business" },
    icon: "▣",
    priceHint: { de: "ab 130 €/Nacht", en: "from €130/night" },
    intro: {
      de: "Tagungsräume, schnelles WLAN, Frühstück ab 6 Uhr, gute Verkehrsanbindung.",
      en: "Conference rooms, fast Wi-Fi, breakfast from 6am, good transport links.",
    },
    description: {
      de: "Business Hotels in Berlin liegen meist in Mitte (Hauptbahnhof, Potsdamer Platz) oder rund um die Messe in Charlottenburg. Tagungstechnik, Express-Check-in, 24h-Roomservice und garantiert schnelles WLAN sind Standard.",
      en: "Business hotels in Berlin mostly cluster around Mitte (Hauptbahnhof, Potsdamer Platz) or around the trade fair grounds in Charlottenburg. Conference tech, express check-in, 24h room service and guaranteed fast Wi-Fi are standard.",
    },
    bestDistricts: ["mitte", "charlottenburg-wilmersdorf", "lichtenberg"],
    color: "navy",
  },
  {
    slug: "wellness-hotels",
    slugEn: "wellness-hotels",
    name: { de: "Wellness & Spa Hotels", en: "Wellness & Spa Hotels" },
    shortName: { de: "Wellness", en: "Wellness" },
    icon: "♨",
    priceHint: { de: "ab 170 €/Nacht", en: "from €170/night" },
    intro: {
      de: "Sauna, Pool, Massage. Im Grunewald, am Wannsee, am Müggelsee.",
      en: "Sauna, pool, massage. In the Grunewald, by Wannsee, by Müggelsee.",
    },
    description: {
      de: "Wellness-Hotels mit großem Spa-Bereich gibt es vor allem im grünen Berliner Süden (Steglitz-Zehlendorf, Treptow-Köpenick) und in der gehobenen Hotellerie in Mitte. Pools, Saunenlandschaften und Massage-Angebote sind hier Standard.",
      en: "Wellness hotels with extensive spa areas mostly sit in Berlin's green south (Steglitz-Zehlendorf, Treptow-Köpenick) and in upscale Mitte hotels. Pools, sauna landscapes and massage offers are standard.",
    },
    bestDistricts: ["steglitz-zehlendorf", "treptow-koepenick", "mitte"],
    color: "teal",
  },
  {
    slug: "hotels-mit-shuttle",
    slugEn: "hotels-with-shuttle",
    name: { de: "Hotels mit Shuttle", en: "Hotels with Shuttle" },
    shortName: { de: "Shuttle", en: "Shuttle" },
    icon: "→",
    priceHint: { de: "ab 100 €/Nacht", en: "from €100/night" },
    intro: {
      de: "Transfer von/zu BER, Messe oder Bahnhof - ideal für Late-Night-Arrivals.",
      en: "Transfers to/from BER, trade fair or stations - ideal for late-night arrivals.",
    },
    description: {
      de: "Viele Hotels - vor allem Business- und Mittelklasse-Häuser - bieten einen Shuttle-Service zu BER, zum Messegelände oder zum Hauptbahnhof. Besonders praktisch bei früher An- oder später Abreise.",
      en: "Many hotels - especially business and mid-range houses - offer a shuttle service to BER, the trade fair grounds or Hauptbahnhof. Particularly useful for early arrivals or late departures.",
    },
    bestDistricts: ["mitte", "charlottenburg-wilmersdorf", "treptow-koepenick"],
    color: "indigo",
  },
  {
    slug: "designhotels",
    slugEn: "design-hotels",
    name: { de: "Designhotels", en: "Design Hotels" },
    shortName: { de: "Design", en: "Design" },
    icon: "◇",
    priceHint: { de: "ab 160 €/Nacht", en: "from €160/night" },
    intro: {
      de: "Architektonisch durchkomponierte Häuser - Berlin ist seit den 2000ern eine Design-Hotel-Hauptstadt.",
      en: "Architecturally composed houses - Berlin has been a design hotel capital since the 2000s.",
    },
    description: {
      de: "Designhotels denken jedes Detail mit: Möbel, Licht, Texturen, oft eigene Bar und Restaurant. Mitte und Friedrichshain führen - Häuser wie Michelberger, nhow, Casa Camper, Soho House.",
      en: "Design hotels consider every detail: furniture, lighting, textures, often their own bar and restaurant. Mitte and Friedrichshain lead - houses like Michelberger, nhow, Casa Camper, Soho House.",
    },
    bestDistricts: ["mitte", "friedrichshain-kreuzberg"],
    color: "azure",
  },
  {
    slug: "apartments",
    slugEn: "apartments",
    name: { de: "Apartment Hotels", en: "Apartment Hotels" },
    shortName: { de: "Apartments", en: "Apartments" },
    icon: "▢",
    priceHint: { de: "ab 95 €/Nacht", en: "from €95/night" },
    intro: {
      de: "Mit Küche und Wohnbereich - ideal für längere Aufenthalte und Familien.",
      en: "With kitchen and living area - ideal for longer stays and families.",
    },
    description: {
      de: "Apartment Hotels (Adina, Living Hotels, etc.) bieten Hotelservice mit eigener Küchenzeile und Wohnbereich. Ideal ab 4 Nächten oder für Reisende mit Allergien/Diäten. Pankow, Mitte und Charlottenburg führen.",
      en: "Apartment hotels (Adina, Living Hotels etc.) offer hotel service plus your own kitchenette and living area. Ideal from 4 nights or for travelers with allergies/special diets. Pankow, Mitte and Charlottenburg lead.",
    },
    bestDistricts: ["mitte", "pankow", "charlottenburg-wilmersdorf"],
    color: "sky",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug || c.slugEn === slug);
