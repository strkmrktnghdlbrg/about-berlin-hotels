import type { Locale } from "./site";

export type District = {
  slug: string;
  name: string;
  fullName: string;
  region: "mitte" | "west" | "ost" | "nord" | "süd";
  position: "central" | "inner" | "outer";
  intro: { de: string; en: string };
  vibe: { de: string; en: string };
  highlights: { de: string[]; en: string[] };
  bestFor: { de: string[]; en: string[] };
  /** Optional: nur setzen wenn echte Anzahl bekannt. Sonst aus hotels[] live zählen. */
  hotelCount?: number;
  /** Stay22 Affiliate Map Embed ID (from current WP site) */
  stay22Id?: string;
  /** Fallback: lat/lng + zoom for OSM static map */
  geo: { lat: number; lng: number; zoom: number };
};

export const districts: District[] = [
  {
    slug: "mitte",
    name: "Mitte",
    fullName: "Berlin-Mitte",
    region: "mitte",
    position: "central",
    intro: {
      de: "Mitte ist Berlins historisches und geografisches Herz - Brandenburger Tor, Museumsinsel, Reichstag und Unter den Linden auf wenigen Quadratkilometern. Hier wohnst du in unmittelbarer Nähe der ikonischen Berliner Sehenswürdigkeiten und im Zentrum des kulturellen Geschehens.",
      en: "Mitte is Berlin's historic and geographic heart - Brandenburg Gate, Museum Island, Reichstag and Unter den Linden all within a few square kilometers. Stay here to be right next to Berlin's iconic landmarks and at the center of cultural life.",
    },
    vibe: {
      de: "Repräsentativ, geschichtsträchtig, urban-elegant. Tagsüber Touristen, abends Theater und gehobene Gastronomie.",
      en: "Stately, history-rich, urban-elegant. Tourists by day, theatre and fine dining by night.",
    },
    highlights: {
      de: ["Brandenburger Tor", "Museumsinsel", "Reichstag", "Gendarmenmarkt", "Unter den Linden", "Fernsehturm"],
      en: ["Brandenburg Gate", "Museum Island", "Reichstag", "Gendarmenmarkt", "Unter den Linden", "TV Tower"],
    },
    bestFor: {
      de: ["Erstbesucher", "Luxus-Reisende", "Kultur-Fans", "Kurztrips"],
      en: ["First-time visitors", "Luxury travellers", "Culture fans", "Short stays"],
    },
    stay22Id: "690c3ff787d29649e84585e8",
    geo: { lat: 52.52, lng: 13.405, zoom: 14 },
  },
  {
    slug: "friedrichshain-kreuzberg",
    name: "Friedrichshain-Kreuzberg",
    fullName: "Friedrichshain-Kreuzberg",
    region: "ost",
    position: "inner",
    intro: {
      de: "Friedrichshain-Kreuzberg ist Berlins kreatives Epizentrum - East Side Gallery, Mercedes-Benz Arena, RAW-Gelände und Markthalle Neun bilden den Kern. Hier dominieren Boutique-Hotels, Designhostels und urbanes Lebensgefühl statt Hotelketten.",
      en: "Friedrichshain-Kreuzberg is Berlin's creative epicenter - East Side Gallery, Mercedes-Benz Arena, RAW grounds and Markthalle Neun form the core. Boutique hotels, design hostels and urban culture dominate here over chain hotels.",
    },
    vibe: {
      de: "Alternativ, kreativ, lebendig. Nachtleben am Limit, Streetart an jeder Ecke, Cafés bis spät in den Abend.",
      en: "Alternative, creative, vibrant. Nightlife on the edge, street art on every corner, cafés open late.",
    },
    highlights: {
      de: ["East Side Gallery", "Mercedes-Benz Arena", "RAW-Gelände", "Markthalle Neun", "Oberbaumbrücke", "Bergmannkiez"],
      en: ["East Side Gallery", "Mercedes-Benz Arena", "RAW area", "Markthalle Neun", "Oberbaum Bridge", "Bergmannkiez"],
    },
    bestFor: {
      de: ["Boutique-Liebhaber", "Nachtschwärmer", "Kreative", "Junge Reisende"],
      en: ["Boutique lovers", "Night owls", "Creatives", "Young travellers"],
    },
    stay22Id: "690c7e1387d29649e845f233",
    geo: { lat: 52.51, lng: 13.45, zoom: 14 },
  },
  {
    slug: "charlottenburg-wilmersdorf",
    name: "Charlottenburg-Wilmersdorf",
    fullName: "Charlottenburg-Wilmersdorf",
    region: "west",
    position: "inner",
    intro: {
      de: "Charlottenburg ist das elegante West-Berlin - Kurfürstendamm, Schloss Charlottenburg, KaDeWe und Savignyplatz prägen den Bezirk. Hier findest du Berlins traditionsreichste 4- und 5-Sterne-Hotels in Gründerzeit-Bauten und ruhigen Nebenstraßen.",
      en: "Charlottenburg is Berlin's elegant West - Kurfürstendamm, Charlottenburg Palace, KaDeWe and Savignyplatz define the district. This is where you find Berlin's most traditional 4- and 5-star hotels in late-19th-century buildings and quiet side streets.",
    },
    vibe: {
      de: "Elegant, gediegen, ruhig. Shopping am Ku'damm, Kaffee am Savignyplatz, Klassikkonzerte in der Philharmonie.",
      en: "Elegant, refined, calm. Shopping on Ku'damm, coffee at Savignyplatz, classical concerts at the Philharmonie.",
    },
    highlights: {
      de: ["Kurfürstendamm", "Schloss Charlottenburg", "KaDeWe", "Savignyplatz", "Gedächtniskirche", "Olympiastadion"],
      en: ["Kurfürstendamm", "Charlottenburg Palace", "KaDeWe", "Savignyplatz", "Memorial Church", "Olympic Stadium"],
    },
    bestFor: {
      de: ["Anspruchsvolle Reisende", "Shopping-Fans", "Klassik-Fans", "Geschäftsreisende"],
      en: ["Discerning travellers", "Shopping fans", "Classical music lovers", "Business travellers"],
    },
    stay22Id: "690c3d3a87d29649e84582fd",
    geo: { lat: 52.505, lng: 13.305, zoom: 13 },
  },
  {
    slug: "pankow",
    name: "Pankow",
    fullName: "Pankow (mit Prenzlauer Berg & Weißensee)",
    region: "nord",
    position: "inner",
    intro: {
      de: "Pankow ist Berlins größter Bezirk - vom hippen Prenzlauer Berg mit Mauerpark und Kollwitzplatz über das ruhige Weißensee bis zum grünen Buch im Norden. Familienfreundliche Hotels, charmante Pensionen und entspannte Boutique-Häuser prägen das Bild.",
      en: "Pankow is Berlin's largest district - from hip Prenzlauer Berg with Mauerpark and Kollwitzplatz, through quiet Weißensee to green Buch in the north. Family-friendly hotels, charming pensions and relaxed boutique houses define the area.",
    },
    vibe: {
      de: "Familienfreundlich, grün, entspannt. Cafés mit Spielecke, Sonntage im Mauerpark, Altbauten mit Stuck.",
      en: "Family-friendly, green, relaxed. Cafés with kids' corners, Sundays at Mauerpark, stuccoed period buildings.",
    },
    highlights: {
      de: ["Mauerpark", "Kollwitzplatz", "Kulturbrauerei", "Schloss Schönhausen", "Weißensee", "Botanischer Volkspark Pankow"],
      en: ["Mauerpark", "Kollwitzplatz", "Kulturbrauerei", "Schönhausen Palace", "Weißensee", "Pankow Botanic Garden"],
    },
    bestFor: {
      de: ["Familien", "Längere Aufenthalte", "Ruhesuchende", "Berlin-Kenner"],
      en: ["Families", "Longer stays", "Quiet seekers", "Berlin regulars"],
    },
    stay22Id: "690c3fbfcb7caa230cbde5f3",
    geo: { lat: 52.55, lng: 13.41, zoom: 13 },
  },
  {
    slug: "neukoelln",
    name: "Neukölln",
    fullName: "Neukölln",
    region: "süd",
    position: "inner",
    intro: {
      de: "Neukölln ist der wohl spannendste Bezirk im aktuellen Berlin - die Mischung aus arabischer Hauptstraße, hippen Galerien, Tempelhofer Feld und Kreativ-Cafés am Maybachufer ist einzigartig. Budget-freundliche Hotels und Designhostels überwiegen.",
      en: "Neukölln is arguably the most exciting district in today's Berlin - the mix of Arab high street, hip galleries, Tempelhofer Feld and creative cafés along the Maybachufer is unique. Budget-friendly hotels and design hostels dominate.",
    },
    vibe: {
      de: "Hip, divers, kreativ, jung. Brunch-Spots, Spätis, Drittelpreis-Märkte, Galerie-Eröffnungen.",
      en: "Hip, diverse, creative, young. Brunch spots, late-night kiosks, bargain markets, gallery openings.",
    },
    highlights: {
      de: ["Tempelhofer Feld", "Maybachufer", "Klunkerkranich", "Rixdorf", "Sonnenallee", "Körnerpark"],
      en: ["Tempelhofer Feld", "Maybachufer", "Klunkerkranich", "Rixdorf", "Sonnenallee", "Körnerpark"],
    },
    bestFor: {
      de: ["Budget-Reisende", "Foodies", "Junge Reisende", "Berlin-Insider"],
      en: ["Budget travellers", "Foodies", "Young travellers", "Berlin insiders"],
    },
    geo: { lat: 52.481, lng: 13.435, zoom: 13 },
  },
  {
    slug: "tempelhof-schoeneberg",
    name: "Tempelhof-Schöneberg",
    fullName: "Tempelhof-Schöneberg",
    region: "süd",
    position: "inner",
    intro: {
      de: "Tempelhof-Schöneberg vereint urbanes Leben am Winterfeldtplatz, das legendäre Tempelhofer Feld (ehemaliger Flughafen) und gemütliche Wohnviertel. Mittelpreisige Hotels, charmante Pensionen und ruhige Stadthotels machen den Bezirk aus.",
      en: "Tempelhof-Schöneberg combines urban life around Winterfeldtplatz, the legendary Tempelhofer Feld (former airport) and cosy residential areas. Mid-priced hotels, charming pensions and quiet city hotels define the district.",
    },
    vibe: {
      de: "Urban, gemütlich, gut angebunden. Markt am Winterfeldtplatz, Drachen steigen auf dem Feld, Café-Kultur.",
      en: "Urban, cosy, well-connected. Winterfeldt market, kite-flying on the field, café culture.",
    },
    highlights: {
      de: ["Tempelhofer Feld", "Winterfeldtplatz", "Rathaus Schöneberg", "Viktoriapark", "Kreuzberg-Süd", "KaDeWe in Nähe"],
      en: ["Tempelhofer Feld", "Winterfeldtplatz", "Rathaus Schöneberg", "Viktoriapark", "Kreuzberg-South", "KaDeWe nearby"],
    },
    bestFor: {
      de: ["Mittelpreis-Reisende", "Familien", "Berlin-Kenner", "Längere Aufenthalte"],
      en: ["Mid-budget travellers", "Families", "Berlin regulars", "Longer stays"],
    },
    geo: { lat: 52.473, lng: 13.385, zoom: 13 },
  },
  {
    slug: "steglitz-zehlendorf",
    name: "Steglitz-Zehlendorf",
    fullName: "Steglitz-Zehlendorf",
    region: "süd",
    position: "outer",
    intro: {
      de: "Steglitz-Zehlendorf ist Berlins grünster und ruhigster Bezirk - Grunewald, Wannsee und Krumme Lanke prägen das Landschaftsbild. Hotels im südwestlichen Berlin sind oft kleiner, persönlicher und liegen mitten im Wald oder am See.",
      en: "Steglitz-Zehlendorf is Berlin's greenest and quietest district - Grunewald, Wannsee and Krumme Lanke shape the landscape. Hotels in southwest Berlin tend to be smaller, more personal, set in woods or at the lake.",
    },
    vibe: {
      de: "Ruhig, grün, gediegen. Spaziergänge im Grunewald, Strandbad Wannsee, Villenkolonie Dahlem.",
      en: "Calm, green, refined. Walks in the Grunewald, Wannsee lido, Dahlem villa colony.",
    },
    highlights: {
      de: ["Grunewald", "Wannsee", "Krumme Lanke", "Glienicker Brücke", "Botanischer Garten", "Domäne Dahlem"],
      en: ["Grunewald forest", "Wannsee", "Krumme Lanke", "Glienicke Bridge", "Botanic Garden", "Domäne Dahlem"],
    },
    bestFor: {
      de: ["Ruhesuchende", "Natur-Fans", "Spa-Reisende", "Längere Aufenthalte"],
      en: ["Quiet seekers", "Nature lovers", "Spa travellers", "Longer stays"],
    },
    geo: { lat: 52.43, lng: 13.27, zoom: 12 },
  },
  {
    slug: "spandau",
    name: "Spandau",
    fullName: "Spandau",
    region: "west",
    position: "outer",
    intro: {
      de: "Spandau hat einen ganz eigenen Charakter - historische Altstadt, Zitadelle, Havelufer. Der Bezirk ist günstig, gut mit der S- und U-Bahn ans Zentrum angebunden und ideal für Budget-Reisende oder Messebesucher.",
      en: "Spandau has its own distinct character - historic old town, citadel, Havel waterfront. The district is affordable, well-connected to the centre by S- and U-Bahn, and ideal for budget travellers or trade-fair visitors.",
    },
    vibe: {
      de: "Kleinstädtisch, historisch, wassernah. Altstadt-Charme, Festivals an der Zitadelle, Havelfähren.",
      en: "Small-town feel, historic, waterside. Old-town charm, festivals at the citadel, Havel ferries.",
    },
    highlights: {
      de: ["Zitadelle Spandau", "Spandauer Altstadt", "Havelufer", "Kolk", "Wasserstadt", "Naturschutzpark Tegel"],
      en: ["Spandau Citadel", "Spandau Old Town", "Havel waterfront", "Kolk", "Wasserstadt", "Tegel nature park"],
    },
    bestFor: {
      de: ["Budget-Reisende", "Messebesucher (Funkausstellung)", "Familien", "Kurztrips mit Auto"],
      en: ["Budget travellers", "Trade-fair visitors", "Families", "Short stays by car"],
    },
    geo: { lat: 52.535, lng: 13.2, zoom: 12 },
  },
  {
    slug: "treptow-koepenick",
    name: "Treptow-Köpenick",
    fullName: "Treptow-Köpenick",
    region: "ost",
    position: "outer",
    intro: {
      de: "Treptow-Köpenick ist Berlins Wasser-Bezirk - Müggelsee, Dahme und Spreeufer. Hier liegen Seehotels, Wellness-Resorts und die Hauptstadt der Berliner Schifffahrt. Treptower Park und Plänterwald runden das Naturangebot ab.",
      en: "Treptow-Köpenick is Berlin's water district - Lake Müggelsee, the Dahme and Spree banks. Lakeside hotels, wellness resorts and the capital of Berlin's boat traffic are here. Treptower Park and Plänterwald round out the natural offer.",
    },
    vibe: {
      de: "Wasser, Wald, Erholung. Schiffstouren, Strandbäder, Boots-Verleih, Spreepark-Erinnerungen.",
      en: "Water, woods, recovery. Boat tours, lake lidos, boat rentals, Spreepark memories.",
    },
    highlights: {
      de: ["Müggelsee", "Schloss Köpenick", "Treptower Park", "Plänterwald", "Spreepark", "Müggelturm"],
      en: ["Müggelsee", "Köpenick Palace", "Treptower Park", "Plänterwald", "Spreepark", "Müggelturm"],
    },
    bestFor: {
      de: ["Wellness-Reisende", "Wassersportler", "Familien", "Erholungssuchende"],
      en: ["Wellness travellers", "Water sports fans", "Families", "Recovery seekers"],
    },
    geo: { lat: 52.45, lng: 13.575, zoom: 12 },
  },
  {
    slug: "lichtenberg",
    name: "Lichtenberg",
    fullName: "Lichtenberg",
    region: "ost",
    position: "outer",
    intro: {
      de: "Lichtenberg liegt im Berliner Osten, gut angebunden an Mitte und zugleich günstiger. Tierpark, Stasimuseum und die Karl-Lade-Straße sind Anker. Hotels sind oft Business- oder Mittelklasse-orientiert mit gutem Preis-Leistungs-Verhältnis.",
      en: "Lichtenberg sits in Berlin's east, well-connected to Mitte yet more affordable. Tierpark, Stasi Museum and Karl-Lade-Straße are anchors. Hotels here lean business or mid-range with strong value.",
    },
    vibe: {
      de: "Bodenständig, gut angebunden, preiswert. Tierpark-Spaziergänge, DDR-Architektur, Berliner Alltag.",
      en: "Down-to-earth, well-connected, affordable. Tierpark walks, GDR architecture, everyday Berlin.",
    },
    highlights: {
      de: ["Tierpark Berlin", "Stasimuseum", "Schloss Friedrichsfelde", "Rummelsburger Bucht", "Karlshorst", "Rathaus Lichtenberg"],
      en: ["Berlin Tierpark", "Stasi Museum", "Friedrichsfelde Palace", "Rummelsburger Bay", "Karlshorst", "Lichtenberg town hall"],
    },
    bestFor: {
      de: ["Geschäftsreisende", "Familien", "Budget-Reisende"],
      en: ["Business travellers", "Families", "Budget travellers"],
    },
    geo: { lat: 52.515, lng: 13.5, zoom: 13 },
  },
  {
    slug: "marzahn-hellersdorf",
    name: "Marzahn-Hellersdorf",
    fullName: "Marzahn-Hellersdorf",
    region: "ost",
    position: "outer",
    intro: {
      de: 'Marzahn-Hellersdorf ist Berlins Ost-Plattenbau-Bezirk - aber auch Heimat der „Gärten der Welt", einem der schönsten Parks der Stadt. Hotels hier sind sehr preiswert, die Anbindung zur Innenstadt mit S-/U-Bahn solide.',
      en: 'Marzahn-Hellersdorf is Berlin\'s eastern Plattenbau district - but also home to the „Gardens of the World", one of the city\'s most beautiful parks. Hotels here are very affordable, with solid S-/U-Bahn links to the centre.',
    },
    vibe: {
      de: "Großstädtisch-funktional, mit grünen Oasen. Plattenbau-Romantik, Internationale Gärten, weite Spielplätze.",
      en: "Urban-functional, with green oases. Plattenbau character, international gardens, wide playgrounds.",
    },
    highlights: {
      de: ["Gärten der Welt", "Schloss Biesdorf", "Wuhletal", "Kienberg", "Eastgate Berlin", "Tierpark in der Nähe"],
      en: ["Gardens of the World", "Biesdorf Palace", "Wuhletal", "Kienberg", "Eastgate Berlin", "Tierpark nearby"],
    },
    bestFor: {
      de: ["Sehr budgetbewusste Reisende", "Familien mit Garten-Interesse"],
      en: ["Very budget-conscious travellers", "Families interested in gardens"],
    },
    geo: { lat: 52.541, lng: 13.59, zoom: 12 },
  },
  {
    slug: "reinickendorf",
    name: "Reinickendorf",
    fullName: "Reinickendorf",
    region: "nord",
    position: "outer",
    intro: {
      de: "Reinickendorf liegt im Berliner Norden - Tegeler See, Tegeler Forst, Französisch Buchholz. Hier wohnt man ruhig im Grünen und ist trotzdem in 20 Minuten mit der U6 in Mitte. Mittelklasse- und Familienhotels prägen den Bezirk.",
      en: "Reinickendorf sits in Berlin's north - Tegeler See, Tegeler Forst, Französisch Buchholz. You stay quietly in greenery yet reach Mitte in 20 minutes via U6. Mid-range and family hotels dominate.",
    },
    vibe: {
      de: "Ruhig, grün, wassernah. Spaziergänge am Tegeler See, Tegeler Forst, Schloss Tegel.",
      en: "Calm, green, lakeside. Walks at Tegeler See, Tegel forest, Tegel Palace.",
    },
    highlights: {
      de: ["Tegeler See", "Tegeler Forst", "Schloss Tegel", "Reinickendorfer Rathaus", "Borsigwerke", "Frohnauer Pagode"],
      en: ["Tegeler See", "Tegel forest", "Tegel Palace", "Reinickendorf town hall", "Borsigwerke", "Frohnau Pagoda"],
    },
    bestFor: {
      de: ["Familien", "Ruhesuchende", "Reisende mit Auto"],
      en: ["Families", "Quiet seekers", "Travellers with car"],
    },
    geo: { lat: 52.59, lng: 13.31, zoom: 12 },
  },
];

export const getDistrict = (slug: string) => districts.find((d) => d.slug === slug);
export const getDistrictName = (d: District, locale: Locale) => d.name;
