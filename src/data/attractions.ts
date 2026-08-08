import type { Locale } from "./site";

export type Attraction = {
  slug: string;
  name: { de: string; en: string };
  district: string;
  intro: { de: string; en: string };
  type: "landmark" | "museum" | "park" | "viewpoint" | "shopping" | "nightlife" | "history";
  geo: { lat: number; lng: number };
  /**
   * Optional: konkrete GetYourGuide-Activity-ID für Direct-Buchungs-Funnel.
   * Wenn gesetzt, rendert AttractionPage das GYG-availability-Widget.
   * Wenn fehlend: GYG-activities-Widget mit Auto-Match (q="<Sight-Name> Berlin").
   * Komma-separierte IDs erlaubt für mehrere Touren ("12345,67890").
   */
  gygActivityId?: string;
};

export const attractions: Attraction[] = [
  {
    slug: "brandenburger-tor",
    name: { de: "Brandenburger Tor", en: "Brandenburg Gate" },
    district: "mitte",
    intro: {
      de: "Berlins ikonisches Wahrzeichen - Symbol der Wiedervereinigung. Direkt am Pariser Platz, von Adlon und Holocaust-Mahnmal flankiert.",
      en: "Berlin's signature landmark and the symbol of reunification, right on Pariser Platz between the Hotel Adlon and the Holocaust Memorial.",
    },
    type: "landmark",
    geo: { lat: 52.5163, lng: 13.3777 },
  },
  {
    slug: "reichstag",
    name: { de: "Reichstag", en: "Reichstag" },
    district: "mitte",
    intro: {
      de: "Sitz des Deutschen Bundestags mit der berühmten Norman-Foster-Glaskuppel. Anmeldung für den Besuch der Kuppel empfohlen.",
      en: "Home of the Bundestag, Germany's parliament, under a glass dome by Norman Foster. Free to visit, but you have to register in advance.",
    },
    type: "landmark",
    geo: { lat: 52.5186, lng: 13.3762 },
  },
  {
    slug: "museumsinsel",
    name: { de: "Museumsinsel", en: "Museum Island" },
    district: "mitte",
    intro: {
      de: "UNESCO-Welterbe mit fünf Weltklasse-Museen: Pergamonmuseum, Neues Museum, Altes Museum, Alte Nationalgalerie, Bode-Museum.",
      en: "UNESCO World Heritage site with five world-class museums, including the Neues Museum, home of the Nefertiti bust, and the Pergamonmuseum.",
    },
    type: "museum",
    geo: { lat: 52.5215, lng: 13.3942 },
  },
  {
    slug: "fernsehturm",
    name: { de: "Fernsehturm Alexanderplatz", en: "TV Tower Alexanderplatz" },
    district: "mitte",
    intro: {
      de: "Mit 368 m das höchste Gebäude Deutschlands. Drehrestaurant und Aussichtsplattform - die beste Aussicht auf ganz Berlin.",
      en: "At 1,207 feet (368 m), Germany's tallest building. Observation deck and revolving restaurant with the widest view over Berlin.",
    },
    type: "viewpoint",
    geo: { lat: 52.5208, lng: 13.4094 },
  },
  {
    slug: "checkpoint-charlie",
    name: { de: "Checkpoint Charlie", en: "Checkpoint Charlie" },
    district: "mitte",
    intro: {
      de: "Berühmtester Grenzübergang des Kalten Krieges. Heute Open-Air-Ausstellung und Mauermuseum direkt nebenan.",
      en: "The best-known crossing point between East and West Berlin during the Cold War. Open-air exhibition with the Mauermuseum next door.",
    },
    type: "history",
    geo: { lat: 52.5076, lng: 13.3904 },
  },
  {
    slug: "east-side-gallery",
    name: { de: "East Side Gallery", en: "East Side Gallery" },
    district: "friedrichshain-kreuzberg",
    intro: {
      de: "1,3 km langes Stück der Berliner Mauer mit 105 Wandbildern - die längste durchgängige Open-Air-Galerie der Welt.",
      en: "A 0.8-mile (1.3 km) stretch of the Berlin Wall covered in 105 murals, the longest continuous open-air gallery in the world.",
    },
    type: "history",
    geo: { lat: 52.5051, lng: 13.4399 },
  },
  {
    slug: "mauerpark",
    name: { de: "Mauerpark", en: "Mauerpark" },
    district: "pankow",
    intro: {
      de: "Auf dem ehemaligen Mauerstreifen - heute Berlins berühmtester Sonntagspark mit Flohmarkt und Karaoke-Sessions im Amphitheater.",
      en: "Built on the old Wall strip, now Berlin's favorite Sunday park, with a huge flea market and open-air karaoke in the amphitheater.",
    },
    type: "park",
    geo: { lat: 52.5417, lng: 13.4023 },
  },
  {
    slug: "tiergarten",
    name: { de: "Tiergarten", en: "Tiergarten" },
    district: "mitte",
    intro: {
      de: "Berlins zentraler Stadtpark - 210 Hektar zwischen Brandenburger Tor und Bahnhof Zoo. Siegessäule, Englischer Garten, Café am Neuen See.",
      en: "Berlin's central park, 520 acres (210 hectares) between the Brandenburg Gate and Zoo station. Victory Column, English Garden, Café am Neuen See.",
    },
    type: "park",
    geo: { lat: 52.5145, lng: 13.3501 },
  },
  {
    slug: "kurfuerstendamm",
    name: { de: "Kurfürstendamm", en: "Kurfürstendamm" },
    district: "charlottenburg-wilmersdorf",
    intro: {
      de: "Die berühmteste Einkaufsstraße im Westen - 3,5 km Boulevard mit KaDeWe, Boutiquen, Cafés und der Gedächtniskirche am Ende.",
      en: "The West's famous shopping boulevard, 2.2 miles (3.5 km) of boutiques and cafés with the KaDeWe and the Memorial Church at its eastern end.",
    },
    type: "shopping",
    geo: { lat: 52.5036, lng: 13.3274 },
  },
  {
    slug: "gendarmenmarkt",
    name: { de: "Gendarmenmarkt", en: "Gendarmenmarkt" },
    district: "mitte",
    intro: {
      de: "Wohl Berlins schönster Platz - Deutscher Dom, Französischer Dom und Konzerthaus bilden ein perfektes Ensemble.",
      en: "Arguably Berlin's most beautiful square: the German and French cathedrals and the Konzerthaus concert hall form one perfect ensemble.",
    },
    type: "landmark",
    geo: { lat: 52.5135, lng: 13.3927 },
  },
  {
    slug: "potsdamer-platz",
    name: { de: "Potsdamer Platz", en: "Potsdamer Platz" },
    district: "mitte",
    intro: {
      de: "Modernes Berlin pur - Sony Center, Berlinale-Palast, Hochhäuser von Renzo Piano und Helmut Jahn. Nach der Wende komplett neu gebaut.",
      en: "Modern Berlin in one square: the Sony Center, the Berlinale movie palace and towers by Renzo Piano and Helmut Jahn, all built from scratch after 1990.",
    },
    type: "landmark",
    geo: { lat: 52.5096, lng: 13.3759 },
  },
  {
    slug: "holocaust-mahnmal",
    name: { de: "Holocaust-Mahnmal", en: "Holocaust Memorial" },
    district: "mitte",
    intro: {
      de: "Peter Eisenmans Stelenfeld zwischen Brandenburger Tor und Potsdamer Platz - eines der wichtigsten Mahnmale Europas.",
      en: "Peter Eisenman's field of 2,711 concrete stelae between the Brandenburg Gate and Potsdamer Platz, one of Europe's most important memorials.",
    },
    type: "history",
    geo: { lat: 52.5139, lng: 13.3784 },
  },
  {
    slug: "alexanderplatz",
    name: { de: "Alexanderplatz", en: "Alexanderplatz" },
    district: "mitte",
    intro: {
      de: "Berlins zentraler Verkehrsknoten - Weltzeituhr, Fernsehturm, Galeria Kaufhof. Hier kommt alles zusammen.",
      en: "Berlin's busiest transit hub: World Clock, TV Tower, department stores. Almost every U-Bahn (subway) and S-Bahn (commuter rail) line meets here.",
    },
    type: "landmark",
    geo: { lat: 52.5219, lng: 13.4132 },
  },
  {
    slug: "schloss-charlottenburg",
    name: { de: "Schloss Charlottenburg", en: "Charlottenburg Palace" },
    district: "charlottenburg-wilmersdorf",
    intro: {
      de: "Größtes Berliner Schloss - barocke Pracht mit Schlossgarten, Belvedere und Mausoleum. Ideal für einen halben Tag.",
      en: "Berlin's largest palace: baroque state rooms plus gardens, the Belvedere and the mausoleum. Plan half a day, the park itself is free.",
    },
    type: "landmark",
    geo: { lat: 52.521, lng: 13.296 },
  },
  {
    slug: "tempelhofer-feld",
    name: { de: "Tempelhofer Feld", en: "Tempelhofer Feld" },
    district: "tempelhof-schoeneberg",
    intro: {
      de: "Ehemaliger Flughafen, heute Berlins größter Park - 4 km² zum Skaten, Picknicken, Kitesurfen. Die alten Landebahnen sind frei begehbar.",
      en: "A closed airport turned into Berlin's biggest park, roughly 1.5 square miles (4 km²) for skating, picnics and kite flying. The runways are open to all.",
    },
    type: "park",
    geo: { lat: 52.4736, lng: 13.4036 },
  },
  {
    slug: "olympiastadion",
    name: { de: "Olympiastadion", en: "Olympic Stadium" },
    district: "charlottenburg-wilmersdorf",
    intro: {
      de: "Schauplatz der Olympischen Spiele 1936, heute Heimat von Hertha BSC und Bühne großer Konzerte. Beeindruckende Architektur.",
      en: "Built for the 1936 Olympic Games, now home to soccer club Hertha BSC and a stage for stadium concerts. The architecture alone is worth the trip.",
    },
    type: "landmark",
    geo: { lat: 52.5147, lng: 13.2395 },
  },
  {
    slug: "berliner-dom",
    name: { de: "Berliner Dom", en: "Berlin Cathedral" },
    district: "mitte",
    intro: {
      de: "Direkt auf der Museumsinsel - Hauptkirche der Hohenzollern, mit beeindruckender Kuppel und Aussicht über das Lustgarten.",
      en: "On Museum Island, the Hohenzollern dynasty's church. Climb the dome for a view over Mitte, or sit on the Lustgarten lawn out front.",
    },
    type: "landmark",
    geo: { lat: 52.5191, lng: 13.4012 },
  },
  {
    slug: "kadewe",
    name: { de: "KaDeWe", en: "KaDeWe" },
    district: "charlottenburg-wilmersdorf",
    intro: {
      de: 'Kontinentaleuropas größtes Warenhaus - sieben Etagen, legendäre Feinkost-Etage „Gourmet". Eine Berlin-Institution.',
      en: "The largest department store in continental Europe: seven floors and a legendary gourmet food hall on the sixth. A Berlin institution.",
    },
    type: "shopping",
    geo: { lat: 52.5026, lng: 13.3415 },
  },
  {
    slug: "muggelsee",
    name: { de: "Müggelsee", en: "Müggelsee" },
    district: "treptow-koepenick",
    intro: {
      de: "Berlins größter See - Strandbäder, Segelboote, Müggelturm. Im Sommer das beste Naherholungsgebiet der Hauptstadt.",
      en: "Berlin's largest lake: swimming beaches, sailboats and the Müggelturm lookout tower. The city's best summer escape, and still inside the city limits.",
    },
    type: "park",
    geo: { lat: 52.435, lng: 13.62 },
  },
  {
    slug: "wannsee",
    name: { de: "Wannsee", en: "Wannsee" },
    district: "steglitz-zehlendorf",
    intro: {
      de: "Berlins berühmtester Badesee - Strandbad Wannsee, Pfaueninsel, Schiffsverbindungen nach Potsdam. Sommer pur.",
      en: "Berlin's most famous swimming lake: the huge Strandbad Wannsee beach, Pfaueninsel island and boats to Potsdam. Summer at its best.",
    },
    type: "park",
    geo: { lat: 52.42, lng: 13.158 },
  },
];

export const getAttractionsByDistrict = (slug: string) =>
  attractions.filter((a) => a.district === slug);

export const getAttraction = (slug: string, _locale?: Locale) =>
  attractions.find((a) => a.slug === slug);
