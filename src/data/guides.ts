import type { Locale } from "./site";

export type GuideSlot = {
  /** "9:00 – 11:30" */
  time: string;
  type:
    | "morgens"
    | "mittagessen"
    | "nachmittag"
    | "abendessen"
    | "abends"
    | "uebernachten";
  title: { de: string; en: string };
  description: { de: string; en: string };
  /** Cross-Ref auf bestehende Sehenswürdigkeit (Slug aus attractions.ts). */
  attractionSlug?: string;
  /** Cross-Ref auf bestehenden Bezirk. */
  districtSlug?: string;
  /** Cross-Ref auf ein Hotel (für "Übernachten"-Slot). */
  hotelSlug?: string;
  /** Praktischer Hinweis (ÖPNV, Ticket-Tipp, Zeitfenster). */
  tip?: { de: string; en: string };
};

export type GuideDay = {
  number: number;
  title: { de: string; en: string };
  intro: { de: string; en: string };
  slots: GuideSlot[];
};

export type Guide = {
  slug: string;
  slugEn: string;
  title: { de: string; en: string };
  /** SEO-Description, ~150-160 Zeichen. */
  description: { de: string; en: string };
  /** Anzahl Tage (1, 2, 3, ...). */
  duration: number;
  /** Zielgruppe (lesbarer Label). */
  audience: { de: string; en: string };
  /** Beste Reisezeit, optional. */
  bestSeason?: { de: string; en: string };
  /** Image-Key aus images.ts (sights/<slug> oder districts/<slug>). Optional. */
  imageKey?: { folder: "sights" | "districts"; slug: string };
  days: GuideDay[];
};

export const guides: Guide[] = [
  // ───────────────────────── 3-Tage-Berlin ─────────────────────────
  {
    slug: "3-tage-berlin",
    slugEn: "3-days-in-berlin",
    title: {
      de: "3 Tage in Berlin",
      en: "3 days in Berlin",
    },
    description: {
      de: "Der klassische Erstbesucher-Plan: Wahrzeichen in Mitte, Mauer-Geschichte in Friedrichshain-Kreuzberg, Charlottenburg & Tiergarten am dritten Tag.",
      en: "The classic first-timer itinerary: landmarks in Mitte, Wall history in Friedrichshain-Kreuzberg, Charlottenburg and Tiergarten on day three.",
    },
    duration: 3,
    audience: { de: "Erstbesucher", en: "First-time visitors" },
    bestSeason: { de: "April bis Oktober", en: "April through October" },
    imageKey: { folder: "sights", slug: "brandenburger-tor" },
    days: [
      {
        number: 1,
        title: { de: "Mitte: Wahrzeichen am Stück", en: "Mitte: landmarks back-to-back" },
        intro: {
          de: "Brandenburger Tor, Reichstag, Museumsinsel - die Berliner Pflichtbesichtigungen kompakt zu Fuß.",
          en: "Brandenburg Gate, Reichstag, Museum Island - Berlin's must-sees within walking distance.",
        },
        slots: [
          {
            time: "9:00 – 10:30",
            type: "morgens",
            title: { de: "Start am Brandenburger Tor", en: "Start at Brandenburg Gate" },
            description: {
              de: "Pariser Platz, Adlon, Holocaust-Mahnmal direkt nebenan. Erste 30 Minuten ohne Eile zum Ankommen.",
              en: "Pariser Platz, Adlon, Holocaust Memorial right next door. First 30 minutes to settle in.",
            },
            attractionSlug: "brandenburger-tor",
            districtSlug: "mitte",
            tip: {
              de: "Frühstücks-Café 'Einstein Unter den Linden' liegt 5 Min Fußweg.",
              en: "Café 'Einstein Unter den Linden' is a 5-minute walk away.",
            },
          },
          {
            time: "10:30 – 12:00",
            type: "morgens",
            title: { de: "Reichstag mit Kuppel-Anmeldung", en: "Reichstag with dome registration" },
            description: {
              de: "Glaskuppel von Foster, kostenlos zugänglich - aber Voranmeldung ein paar Tage vorher Pflicht.",
              en: "Foster's glass dome, free entry - but pre-registration a few days ahead is mandatory.",
            },
            attractionSlug: "reichstag",
            tip: {
              de: "Online-Anmeldung über bundestag.de, mindestens 1 Woche vorher.",
              en: "Online registration via bundestag.de, at least 1 week ahead.",
            },
          },
          {
            time: "12:30 – 14:00",
            type: "mittagessen",
            title: { de: "Mittagessen am Gendarmenmarkt", en: "Lunch on Gendarmenmarkt" },
            description: {
              de: "Schönster Platz Berlins mit Konzerthaus, Französischem und Deutschem Dom. Cafés rundherum.",
              en: "Berlin's most beautiful square with concert hall and the two cathedrals. Cafés all around.",
            },
            attractionSlug: "gendarmenmarkt",
          },
          {
            time: "14:00 – 18:00",
            type: "nachmittag",
            title: { de: "Museumsinsel", en: "Museum Island" },
            description: {
              de: "Pergamonmuseum (teils gesperrt), Neues Museum mit Nofretete, Bode-Museum. Eine Karte für alle 5 Häuser.",
              en: "Pergamon (partly closed), Neues Museum with Nefertiti, Bode Museum. One ticket for all 5 houses.",
            },
            attractionSlug: "museumsinsel",
          },
          {
            time: "18:00 – 19:00",
            type: "abends",
            title: { de: "Fernsehturm-Aussicht zum Sonnenuntergang", en: "TV Tower at sunset" },
            description: {
              de: "203 m über Berlin. Vorab-Buchung spart Wartezeit.",
              en: "203m above Berlin. Pre-booking saves queue time.",
            },
            attractionSlug: "fernsehturm",
          },
          {
            time: "20:00",
            type: "abendessen",
            title: { de: "Abendessen am Hackeschen Markt", en: "Dinner at Hackescher Markt" },
            description: {
              de: "Lebendige Restaurant-Szene, viele moderne Berliner Küchen.",
              en: "Lively restaurant scene with modern Berlin cuisine.",
            },
            districtSlug: "mitte",
          },
        ],
      },
      {
        number: 2,
        title: { de: "Mauer-Geschichte & Kreuzberger Vibes", en: "Wall history & Kreuzberg vibes" },
        intro: {
          de: "East Side Gallery, Checkpoint Charlie, Görli - Berlins Geschichte zwischen 1961 und heute, durchwandert.",
          en: "East Side Gallery, Checkpoint Charlie, Görli - Berlin's history from 1961 to today, on foot.",
        },
        slots: [
          {
            time: "9:30 – 11:30",
            type: "morgens",
            title: { de: "East Side Gallery", en: "East Side Gallery" },
            description: {
              de: "1,3 km Mauerreste mit Originalbemalungen, direkt an der Spree. Bestes Licht am Vormittag.",
              en: "1.3km of Wall remnants with original murals, right along the Spree. Best light in the morning.",
            },
            attractionSlug: "east-side-gallery",
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "12:00 – 13:00",
            type: "mittagessen",
            title: { de: "Markthalle Neun", en: "Markthalle Neun" },
            description: {
              de: "Donnerstags Street Food Thursday - Berliner Klassiker & internationale Stände.",
              en: "Thursdays: Street Food Thursday - Berlin classics & international stalls.",
            },
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "14:00 – 15:30",
            type: "nachmittag",
            title: { de: "Checkpoint Charlie + Mauermuseum", en: "Checkpoint Charlie + Wall Museum" },
            description: {
              de: "Berühmtester ehemaliger Grenzübergang, dazu das Haus am Checkpoint Charlie (Mauer-Fluchten).",
              en: "Most famous former crossing point, plus the Haus am Checkpoint Charlie (Wall escapes).",
            },
            attractionSlug: "checkpoint-charlie",
          },
          {
            time: "16:00 – 18:00",
            type: "nachmittag",
            title: { de: "Spaziergang durch Kreuzberg 36", en: "Walk through Kreuzberg 36" },
            description: {
              de: "Bergmannstraße, Görlitzer Park, Oranienstraße. Berlins zugleich türkischste und alternativste Ecke.",
              en: "Bergmannstraße, Görlitzer Park, Oranienstraße. Berlin's most Turkish and most alternative pocket at once.",
            },
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "20:00",
            type: "abendessen",
            title: { de: "Abendessen in Kreuzberg", en: "Dinner in Kreuzberg" },
            description: {
              de: "Von Berliner Currywurst bis zu Sterneküche - Kreuzberg liefert in jeder Preisklasse.",
              en: "From Berlin currywurst to Michelin-starred - Kreuzberg delivers in every price bracket.",
            },
          },
        ],
      },
      {
        number: 3,
        title: { de: "West-Berlin & Tiergarten", en: "West Berlin & Tiergarten" },
        intro: {
          de: "Schloss Charlottenburg, Kurfürstendamm, KaDeWe - die Westseite mit Kaiser-Wilhelm-Gedächtniskirche und Tiergarten-Spaziergang.",
          en: "Charlottenburg Palace, Kurfürstendamm, KaDeWe - the west side with the memorial church and Tiergarten walk.",
        },
        slots: [
          {
            time: "9:30 – 11:30",
            type: "morgens",
            title: { de: "Schloss Charlottenburg", en: "Charlottenburg Palace" },
            description: {
              de: "Größte preußische Schlossanlage Berlins, mit Schlossgarten zum Spazieren.",
              en: "Berlin's largest Prussian palace, with garden for a stroll.",
            },
            attractionSlug: "schloss-charlottenburg",
            districtSlug: "charlottenburg-wilmersdorf",
          },
          {
            time: "12:30 – 14:00",
            type: "mittagessen",
            title: { de: "KaDeWe Feinschmecker-Etage", en: "KaDeWe gourmet floor" },
            description: {
              de: "6. Etage des KaDeWe - Sushi-Bars, Austern, Pasta, Berliner Bouletten. Großstadt-Schaufenster.",
              en: "6th floor of KaDeWe - sushi bars, oysters, pasta, Berlin meatballs. Big-city window.",
            },
            attractionSlug: "kadewe",
          },
          {
            time: "14:30 – 16:00",
            type: "nachmittag",
            title: { de: "Kurfürstendamm + Gedächtniskirche", en: "Kurfürstendamm + memorial church" },
            description: {
              de: "Berlins Schaufensterboulevard, 3,5 km lang. Im Bruchstein die Kaiser-Wilhelm-Gedächtniskirche.",
              en: "Berlin's window-shopping boulevard, 3.5km long. The bombed-out Kaiser Wilhelm Memorial Church anchors it.",
            },
            attractionSlug: "kurfuerstendamm",
          },
          {
            time: "16:30 – 18:00",
            type: "nachmittag",
            title: { de: "Tiergarten-Spaziergang", en: "Tiergarten walk" },
            description: {
              de: "Berlins grüne Mitte, vom Zoologischen Garten Richtung Brandenburger Tor - 4 km, ungefähr 50 Min.",
              en: "Berlin's green center, from Zoo Station towards Brandenburg Gate - 4km, around 50 min.",
            },
            attractionSlug: "tiergarten",
          },
          {
            time: "20:00",
            type: "abendessen",
            title: { de: "Abschiedsessen in Mitte oder am Ku'damm", en: "Farewell dinner in Mitte or Ku'damm" },
            description: {
              de: "Je nachdem wo das Hotel liegt - beide Ecken bieten Optionen für den letzten Abend.",
              en: "Depending on where the hotel is - both areas have options for the last night.",
            },
          },
        ],
      },
    ],
  },

  // ───────────────────────── Berlin mit Kindern ─────────────────────────
  {
    slug: "berlin-mit-kindern",
    slugEn: "berlin-with-kids",
    title: {
      de: "Berlin mit Kindern",
      en: "Berlin with kids",
    },
    description: {
      de: "Familien-Wochenende in Berlin: Zoo, Tempelhofer Feld, Mauerpark-Flohmarkt und das Naturkundemuseum - kindgerecht, mit Pausen.",
      en: "Family weekend in Berlin: Zoo, Tempelhof Field, Mauerpark flea market and the Natural History Museum - kid-friendly, with breaks.",
    },
    duration: 2,
    audience: { de: "Familien mit Kindern (4-12 Jahre)", en: "Families with kids (ages 4-12)" },
    imageKey: { folder: "sights", slug: "tempelhofer-feld" },
    days: [
      {
        number: 1,
        title: { de: "Tiergarten, Zoo & Aussicht", en: "Tiergarten, Zoo & viewpoint" },
        intro: {
          de: "Großer Tag im Park - Zoo am Morgen, Tiergarten-Picknick, Fernsehturm zur Belohnung.",
          en: "Big day in the park - Zoo in the morning, Tiergarten picnic, TV Tower as reward.",
        },
        slots: [
          {
            time: "9:30 – 13:00",
            type: "morgens",
            title: { de: "Zoologischer Garten", en: "Berlin Zoo" },
            description: {
              de: "Ältester Zoo Deutschlands. 3-4 Stunden reichen für Pandas, Elefanten, Aquarium.",
              en: "Germany's oldest zoo. 3-4 hours covers pandas, elephants, the aquarium.",
            },
            districtSlug: "charlottenburg-wilmersdorf",
            tip: {
              de: "Online-Tickets sparen Schlange. Aquarium ist im Kombi-Ticket günstiger.",
              en: "Online tickets skip the queue. Aquarium is cheaper as a combo ticket.",
            },
          },
          {
            time: "13:30 – 15:30",
            type: "mittagessen",
            title: { de: "Picknick im Tiergarten", en: "Picnic in Tiergarten" },
            description: {
              de: "Park ist riesig - perfekt zum Toben nach 3 Stunden Zoo. Spielplätze über den ganzen Park verteilt.",
              en: "Huge park - perfect to run around after 3 hours of zoo. Playgrounds across the whole park.",
            },
            attractionSlug: "tiergarten",
          },
          {
            time: "16:30 – 18:00",
            type: "nachmittag",
            title: { de: "Fernsehturm-Aussicht", en: "TV Tower viewpoint" },
            description: {
              de: "Kinder lieben den schnellen Aufzug und den Drehrestaurant-Raum oben.",
              en: "Kids love the fast lift and the revolving restaurant floor at the top.",
            },
            attractionSlug: "fernsehturm",
          },
        ],
      },
      {
        number: 2,
        title: { de: "Freiraum & Mauerpark-Sonntag", en: "Open space & Mauerpark Sunday" },
        intro: {
          de: "Tempelhofer Feld zum Skaten und Drachen steigen, mittags Mauerpark mit Flohmarkt und Bearpit-Karaoke.",
          en: "Tempelhof Field for skating and kite-flying, then Mauerpark with flea market and Bearpit Karaoke.",
        },
        slots: [
          {
            time: "10:00 – 12:30",
            type: "morgens",
            title: { de: "Tempelhofer Feld", en: "Tempelhof Field" },
            description: {
              de: "Stillgelegter Flughafen - heute die größte innerstädtische Freifläche Europas. Fahrräder/Skates mitbringen oder leihen.",
              en: "Decommissioned airport - now Europe's largest inner-city open space. Bring or rent bikes/skates.",
            },
            attractionSlug: "tempelhofer-feld",
          },
          {
            time: "13:30 – 17:00",
            type: "mittagessen",
            title: { de: "Mauerpark (Sonntag)", en: "Mauerpark (Sundays)" },
            description: {
              de: "Sonntags Flohmarkt + nachmittags Bearpit-Karaoke (Open-Air). Kinder schauen, Eltern stöbern.",
              en: "Sunday flea market + afternoon Bearpit Karaoke (open-air). Kids watch, parents browse.",
            },
            attractionSlug: "mauerpark",
            districtSlug: "pankow",
          },
        ],
      },
    ],
  },

  // ───────────────────────── Berlin bei Regen ─────────────────────────
  {
    slug: "berlin-bei-regen",
    slugEn: "berlin-when-it-rains",
    title: {
      de: "Berlin bei Regen",
      en: "Berlin when it rains",
    },
    description: {
      de: "Ein Schlechtwetter-Tag in Berlin: drei Museen auf der Museumsinsel, Lunch in der Markthalle, Abend im KaDeWe oder Sony Center.",
      en: "A rainy day in Berlin: three museums on Museum Island, lunch in the market hall, evening at KaDeWe or Sony Center.",
    },
    duration: 1,
    audience: { de: "Alle Reisende bei Regen", en: "Anyone caught in the rain" },
    imageKey: { folder: "sights", slug: "museumsinsel" },
    days: [
      {
        number: 1,
        title: { de: "Drinnen-Tour", en: "Indoor tour" },
        intro: {
          de: "Bei Berliner Schauerwetter funktioniert dieser Plan ohne nasse Füße - alles per ÖPNV oder Taxi vernetzt.",
          en: "When Berlin's weather turns nasty, this plan stays dry - everything connects via public transit or taxi.",
        },
        slots: [
          {
            time: "10:00 – 13:00",
            type: "morgens",
            title: { de: "Museumsinsel - drei Häuser", en: "Museum Island - three houses" },
            description: {
              de: "Mit der Bereichskarte alle Häuser. Plan: Neues Museum (Nofretete), Alte Nationalgalerie, Bode-Museum.",
              en: "All houses on one area ticket. Plan: Neues Museum (Nefertiti), Alte Nationalgalerie, Bode Museum.",
            },
            attractionSlug: "museumsinsel",
          },
          {
            time: "13:30 – 15:00",
            type: "mittagessen",
            title: { de: "Lunch nahe Hackescher Markt", en: "Lunch near Hackescher Markt" },
            description: {
              de: "Überdachte Hackesche Höfe, dazu Cafés und Bistros direkt an der S-Bahn.",
              en: "Roofed Hackesche Höfe, plus cafés and bistros right at the S-Bahn.",
            },
            districtSlug: "mitte",
          },
          {
            time: "15:30 – 18:00",
            type: "nachmittag",
            title: { de: "KaDeWe", en: "KaDeWe" },
            description: {
              de: "Größtes Kaufhaus Kontinentaleuropas, 7 Etagen - Schaufenster-Bummel ohne nass zu werden.",
              en: "Largest department store in continental Europe, 7 floors - window-shopping without getting wet.",
            },
            attractionSlug: "kadewe",
          },
          {
            time: "19:30",
            type: "abendessen",
            title: { de: "Abendessen - Konzerthaus oder Bar", en: "Dinner - concert hall or bar" },
            description: {
              de: "Je nach Mood: Konzerthaus am Gendarmenmarkt (vorab buchen) oder eine warme Bar in Mitte.",
              en: "Mood-dependent: Konzerthaus on Gendarmenmarkt (book ahead) or a warm bar in Mitte.",
            },
            attractionSlug: "gendarmenmarkt",
          },
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) =>
  guides.find((g) => g.slug === slug || g.slugEn === slug);

export const guideHrefDe = (g: Guide) => `/reiseplaner/${g.slug}/`;
export const guideHrefEn = (g: Guide) => `/en/itineraries/${g.slugEn}/`;
