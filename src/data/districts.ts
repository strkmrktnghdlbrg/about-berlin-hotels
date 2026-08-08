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
      en: "Mitte is Berlin's historic and geographic heart. The Brandenburger Tor (Brandenburg Gate), the Museumsinsel (Museum Island), the Reichstag and the boulevard Unter den Linden all sit within a couple of square miles. Stay here and you can walk to most of what brought you to Berlin.",
    },
    vibe: {
      de: "Repräsentativ, geschichtsträchtig, urban-elegant. Tagsüber Touristen, abends Theater und gehobene Gastronomie.",
      en: "Stately, history-heavy, urban but polished. Tour groups by day, theater and white-tablecloth dining by night.",
    },
    highlights: {
      de: ["Brandenburger Tor", "Museumsinsel", "Reichstag", "Gendarmenmarkt", "Unter den Linden", "Fernsehturm"],
      en: ["Brandenburger Tor (Brandenburg Gate)", "Museumsinsel (Museum Island)", "Reichstag", "Gendarmenmarkt", "Unter den Linden", "Fernsehturm (TV Tower)"],
    },
    bestFor: {
      de: ["Erstbesucher", "Luxus-Reisende", "Kultur-Fans", "Kurztrips"],
      en: ["First-time visitors", "Luxury travelers", "Museum and history buffs", "Short city breaks"],
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
      en: "Friedrichshain-Kreuzberg is Berlin's creative epicenter. The East Side Gallery, the Mercedes-Benz Arena, the RAW-Gelände (a former rail repair yard turned club and street-art compound) and the Markthalle Neun food hall anchor it. Expect boutique hotels, design hostels and converted factory floors instead of the big chains.",
    },
    vibe: {
      de: "Alternativ, kreativ, lebendig. Nachtleben am Limit, Streetart an jeder Ecke, Cafés bis spät in den Abend.",
      en: "Alternative, creative, wide awake. Nightlife that runs past sunrise, street art on every corner, cafés that never seem to close.",
    },
    highlights: {
      de: ["East Side Gallery", "Mercedes-Benz Arena", "RAW-Gelände", "Markthalle Neun", "Oberbaumbrücke", "Bergmannkiez"],
      en: ["East Side Gallery", "Mercedes-Benz Arena", "RAW-Gelände (street-art yard)", "Markthalle Neun (food hall)", "Oberbaumbrücke (Oberbaum Bridge)", "Bergmannkiez"],
    },
    bestFor: {
      de: ["Boutique-Liebhaber", "Nachtschwärmer", "Kreative", "Junge Reisende"],
      en: ["Boutique hotel fans", "Night owls", "Creatives", "Younger travelers"],
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
      en: "Charlottenburg is the elegant side of former West Berlin. The Kurfürstendamm shopping boulevard, Schloss Charlottenburg (Charlottenburg Palace), the KaDeWe department store and leafy Savignyplatz define it. This is where Berlin's most established four- and five-star hotels sit, in 19th-century buildings and on quiet side streets.",
    },
    vibe: {
      de: "Elegant, gediegen, ruhig. Shopping am Ku'damm, Kaffee am Savignyplatz, Klassikkonzerte in der Philharmonie.",
      en: "Polished, grown-up, calm. Shopping on the Ku'damm, coffee under the trees at Savignyplatz, classical concerts at the Philharmonie.",
    },
    highlights: {
      de: ["Kurfürstendamm", "Schloss Charlottenburg", "KaDeWe", "Savignyplatz", "Gedächtniskirche", "Olympiastadion"],
      en: ["Kurfürstendamm (Ku'damm)", "Schloss Charlottenburg (Charlottenburg Palace)", "KaDeWe (department store)", "Savignyplatz", "Gedächtniskirche (Memorial Church)", "Olympiastadion (Olympic Stadium)"],
    },
    bestFor: {
      de: ["Anspruchsvolle Reisende", "Shopping-Fans", "Klassik-Fans", "Geschäftsreisende"],
      en: ["Travelers who want comfort", "Shoppers", "Classical music fans", "Business travelers"],
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
      en: "Pankow is Berlin's most populous district, running from hip Prenzlauer Berg with the Mauerpark and Kollwitzplatz through quiet Weißensee up to green Buch in the north. Worth knowing: Prenzlauer Berg, the name most visitors have heard, is a neighborhood inside Pankow rather than a district of its own. Family-friendly hotels, small guest houses and easygoing boutique properties set the tone.",
    },
    vibe: {
      de: "Familienfreundlich, grün, entspannt. Cafés mit Spielecke, Sonntage im Mauerpark, Altbauten mit Stuck.",
      en: "Family-friendly, green, unhurried. Cafés with a play corner, Sunday afternoons at the Mauerpark, stucco ceilings in prewar apartment buildings.",
    },
    highlights: {
      de: ["Mauerpark", "Kollwitzplatz", "Kulturbrauerei", "Schloss Schönhausen", "Weißensee", "Botanischer Volkspark Pankow"],
      en: ["Mauerpark", "Kollwitzplatz", "Kulturbrauerei (brewery turned venue)", "Schloss Schönhausen (Schönhausen Palace)", "Weißensee", "Botanischer Volkspark Pankow"],
    },
    bestFor: {
      de: ["Familien", "Längere Aufenthalte", "Ruhesuchende", "Berlin-Kenner"],
      en: ["Families", "Longer stays", "Travelers who want quiet", "Repeat visitors"],
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
      en: "Neukölln is the most talked-about district in today's Berlin. Arabic bakeries and shops line the Sonnenallee, small galleries fill the side streets, the vast Tempelhofer Feld sits on its edge, and cafés spill onto the canal bank at the Maybachufer. Budget-friendly hotels and design hostels dominate.",
    },
    vibe: {
      de: "Hip, divers, kreativ, jung. Brunch-Spots, Spätis, Drittelpreis-Märkte, Galerie-Eröffnungen.",
      en: "Young, diverse, restless. Long brunches, Spätis (corner stores that sell beer late into the night), cheap markets, gallery openings.",
    },
    highlights: {
      de: ["Tempelhofer Feld", "Maybachufer", "Klunkerkranich", "Rixdorf", "Sonnenallee", "Körnerpark"],
      en: ["Tempelhofer Feld (former airport, now a park)", "Maybachufer (canal market)", "Klunkerkranich (rooftop bar)", "Rixdorf", "Sonnenallee", "Körnerpark"],
    },
    bestFor: {
      de: ["Budget-Reisende", "Foodies", "Junge Reisende", "Berlin-Insider"],
      en: ["Budget travelers", "Food lovers", "Younger travelers", "Repeat visitors"],
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
      en: "Tempelhof-Schöneberg pairs the market-square life around Winterfeldtplatz with Tempelhofer Feld, the former airport whose runways are now a public park, and block after block of calm residential streets. Mid-priced hotels, small guest houses and quiet city properties define it.",
    },
    vibe: {
      de: "Urban, gemütlich, gut angebunden. Markt am Winterfeldtplatz, Drachen steigen auf dem Feld, Café-Kultur.",
      en: "Urban, comfortable, easy to get around. Saturday market at Winterfeldtplatz, kites over the old runways, cafés with sidewalk tables.",
    },
    highlights: {
      de: ["Tempelhofer Feld", "Winterfeldtplatz", "Rathaus Schöneberg", "Viktoriapark", "Kreuzberg-Süd", "KaDeWe in Nähe"],
      en: ["Tempelhofer Feld (former airport)", "Winterfeldtplatz (market square)", "Rathaus Schöneberg (town hall)", "Viktoriapark", "Southern Kreuzberg", "KaDeWe nearby"],
    },
    bestFor: {
      de: ["Mittelpreis-Reisende", "Familien", "Berlin-Kenner", "Längere Aufenthalte"],
      en: ["Mid-range budgets", "Families", "Repeat visitors", "Longer stays"],
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
      en: "Steglitz-Zehlendorf is Berlin's greenest and quietest district. The Grunewald city forest, the Wannsee lake and the Krumme Lanke shape the landscape out here. Hotels in the southwest tend to be smaller and more personal, some of them in the woods or right at the water.",
    },
    vibe: {
      de: "Ruhig, grün, gediegen. Spaziergänge im Grunewald, Strandbad Wannsee, Villenkolonie Dahlem.",
      en: "Quiet, green, well-heeled. Long walks in the Grunewald, swimming at the Wannsee public beach, villa streets in Dahlem.",
    },
    highlights: {
      de: ["Grunewald", "Wannsee", "Krumme Lanke", "Glienicker Brücke", "Botanischer Garten", "Domäne Dahlem"],
      en: ["Grunewald (city forest)", "Wannsee (lake)", "Krumme Lanke (lake)", "Glienicker Brücke (Glienicke Bridge)", "Botanischer Garten (Botanic Garden)", "Domäne Dahlem (historic farm)"],
    },
    bestFor: {
      de: ["Ruhesuchende", "Natur-Fans", "Spa-Reisende", "Längere Aufenthalte"],
      en: ["Travelers who want quiet", "Nature lovers", "Spa stays", "Longer stays"],
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
      en: "Spandau feels like its own small town: a historic old quarter, a 16th-century citadel and the Havel river running through it. Rooms cost less than downtown, the S-Bahn and U-Bahn run straight into the center, and it works well for budget travelers and anyone in town for a trade show.",
    },
    vibe: {
      de: "Kleinstädtisch, historisch, wassernah. Altstadt-Charme, Festivals an der Zitadelle, Havelfähren.",
      en: "Small-town, historic, on the water. Old-town charm, summer festivals at the citadel, ferries across the Havel.",
    },
    highlights: {
      de: ["Zitadelle Spandau", "Spandauer Altstadt", "Havelufer", "Kolk", "Wasserstadt", "Naturschutzpark Tegel"],
      en: ["Zitadelle Spandau (Spandau Citadel)", "Spandauer Altstadt (old town)", "Havelufer (Havel waterfront)", "Kolk (oldest quarter)", "Wasserstadt", "Tegel nature park"],
    },
    bestFor: {
      de: ["Budget-Reisende", "Messebesucher (Funkausstellung)", "Familien", "Kurztrips mit Auto"],
      en: ["Budget travelers", "Trade-show visitors", "Families", "Short trips by car"],
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
      en: "Treptow-Köpenick is Berlin's water district: the Müggelsee lake, the Dahme river and long stretches of Spree riverbank. Lakeside hotels, spa resorts and the hub of Berlin's passenger-boat traffic are all here, with Treptower Park and the Plänterwald woods filling in the green.",
    },
    vibe: {
      de: "Wasser, Wald, Erholung. Schiffstouren, Strandbäder, Boots-Verleih, Spreepark-Erinnerungen.",
      en: "Water, woods, downtime. Boat trips, lake beaches, rental boats and the ruins of the old Spreepark amusement park.",
    },
    highlights: {
      de: ["Müggelsee", "Schloss Köpenick", "Treptower Park", "Plänterwald", "Spreepark", "Müggelturm"],
      en: ["Müggelsee (lake)", "Schloss Köpenick (Köpenick Palace)", "Treptower Park", "Plänterwald (woods)", "Spreepark", "Müggelturm (lookout tower)"],
    },
    bestFor: {
      de: ["Wellness-Reisende", "Wassersportler", "Familien", "Erholungssuchende"],
      en: ["Spa and wellness stays", "Boating and swimming", "Families", "Slow, restful trips"],
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
      en: "Lichtenberg sits in eastern Berlin, well connected to Mitte and noticeably cheaper. The Tierpark landscape zoo, the Stasi Museum in the former secret-police headquarters and Karl-Lade-Straße are the anchors. Hotels here lean business or mid-range and give you more room for your money.",
    },
    vibe: {
      de: "Bodenständig, gut angebunden, preiswert. Tierpark-Spaziergänge, DDR-Architektur, Berliner Alltag.",
      en: "Down-to-earth, well connected, affordable. Walks through the Tierpark, East German architecture, everyday Berlin without the tour groups.",
    },
    highlights: {
      de: ["Tierpark Berlin", "Stasimuseum", "Schloss Friedrichsfelde", "Rummelsburger Bucht", "Karlshorst", "Rathaus Lichtenberg"],
      en: ["Tierpark Berlin (landscape zoo)", "Stasimuseum (Stasi Museum)", "Schloss Friedrichsfelde (Friedrichsfelde Palace)", "Rummelsburger Bucht (bay)", "Karlshorst", "Rathaus Lichtenberg (town hall)"],
    },
    bestFor: {
      de: ["Geschäftsreisende", "Familien", "Budget-Reisende"],
      en: ["Business travelers", "Families", "Budget travelers"],
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
      en: "Marzahn-Hellersdorf is the eastern district of Plattenbau housing, the prefabricated concrete apartment blocks East Germany built by the thousand. It is also home to the Gärten der Welt (Gardens of the World), one of the prettiest parks in the city. Hotels here are among the cheapest in Berlin, with solid S-Bahn and U-Bahn links into the center.",
    },
    vibe: {
      de: "Großstädtisch-funktional, mit grünen Oasen. Plattenbau-Romantik, Internationale Gärten, weite Spielplätze.",
      en: "Big-city functional, with green pockets. A skyline of prefab towers, themed gardens from four continents, playgrounds with room to run.",
    },
    highlights: {
      de: ["Gärten der Welt", "Schloss Biesdorf", "Wuhletal", "Kienberg", "Eastgate Berlin", "Tierpark in der Nähe"],
      en: ["Gärten der Welt (Gardens of the World)", "Schloss Biesdorf (Biesdorf Palace)", "Wuhletal (valley trail)", "Kienberg (viewpoint)", "Eastgate Berlin (mall)", "Tierpark nearby"],
    },
    bestFor: {
      de: ["Sehr budgetbewusste Reisende", "Familien mit Garten-Interesse"],
      en: ["Travelers on a tight budget", "Families who like gardens"],
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
      en: "Reinickendorf covers Berlin's north: the Tegeler See lake, the Tegeler Forst woods and the garden suburb of Frohnau. You sleep in the green and still reach Mitte in about 20 minutes on the U6 subway line. Mid-range and family hotels dominate.",
    },
    vibe: {
      de: "Ruhig, grün, wassernah. Spaziergänge am Tegeler See, Tegeler Forst, Schloss Tegel.",
      en: "Quiet, green, lakeside. Walks around the Tegeler See, the Tegel woods, Schloss Tegel.",
    },
    highlights: {
      de: ["Tegeler See", "Tegeler Forst", "Schloss Tegel", "Reinickendorfer Rathaus", "Borsigwerke", "Frohnauer Pagode"],
      en: ["Tegeler See (lake)", "Tegeler Forst (woods)", "Schloss Tegel (Tegel Palace)", "Rathaus Reinickendorf (town hall)", "Borsigwerke (historic industrial site)", "Frohnauer Pagode (pagoda)"],
    },
    bestFor: {
      de: ["Familien", "Ruhesuchende", "Reisende mit Auto"],
      en: ["Families", "Travelers who want quiet", "Anyone with a rental car"],
    },
    geo: { lat: 52.59, lng: 13.31, zoom: 12 },
  },
];

export const getDistrict = (slug: string) => districts.find((d) => d.slug === slug);
export const getDistrictName = (d: District, locale: Locale) => d.name;
