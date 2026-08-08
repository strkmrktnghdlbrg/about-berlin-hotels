import type { Locale } from "./site";

export type GuideSlot = {
  /** "9:00 – 11:30" */
  time: string;
  /** US-Zeitformat für die EN-Route ("9:00am – 11:30am"). Fallback: time. */
  timeEn?: string;
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
      en: "3 Days in Berlin",
    },
    description: {
      de: "Der klassische Erstbesucher-Plan: Wahrzeichen in Mitte, Mauer-Geschichte in Friedrichshain-Kreuzberg, Charlottenburg & Tiergarten am dritten Tag.",
      en: "The classic first-timer plan: Mitte landmarks on day one, Berlin Wall history in Kreuzberg on day two, Charlottenburg and the Tiergarten on day three.",
    },
    duration: 3,
    audience: { de: "Erstbesucher", en: "First-time visitors" },
    bestSeason: { de: "April bis Oktober", en: "April through October" },
    imageKey: { folder: "sights", slug: "brandenburger-tor" },
    days: [
      {
        number: 1,
        title: { de: "Mitte: Wahrzeichen am Stück", en: "Mitte: landmarks back to back" },
        intro: {
          de: "Brandenburger Tor, Reichstag, Museumsinsel - die Berliner Pflichtbesichtigungen kompakt zu Fuß.",
          en: "Brandenburg Gate, Reichstag, Museum Island. Berlin's must-sees sit close enough together that the whole day works on foot.",
        },
        slots: [
          {
            time: "9:00 – 10:30",
            timeEn: "9:00am – 10:30am",
            type: "morgens",
            title: { de: "Start am Brandenburger Tor", en: "Start at Brandenburg Gate" },
            description: {
              de: "Pariser Platz, Adlon, Holocaust-Mahnmal direkt nebenan. Erste 30 Minuten ohne Eile zum Ankommen.",
              en: "Pariser Platz, the Hotel Adlon and the Holocaust Memorial are all right here. Give the first half hour to standing around and getting your bearings.",
            },
            attractionSlug: "brandenburger-tor",
            districtSlug: "mitte",
            tip: {
              de: "Frühstücks-Café 'Einstein Unter den Linden' liegt 5 Min Fußweg.",
              en: "Café Einstein Unter den Linden, a Berlin breakfast institution, is a five-minute walk.",
            },
          },
          {
            time: "10:30 – 12:00",
            timeEn: "10:30am – 12:00pm",
            type: "morgens",
            title: { de: "Reichstag mit Kuppel-Anmeldung", en: "Reichstag dome" },
            description: {
              de: "Glaskuppel von Foster, kostenlos zugänglich - aber Voranmeldung ein paar Tage vorher Pflicht.",
              en: "Norman Foster's glass dome over the German parliament. Entry is free, but nobody gets up there without registering first.",
            },
            attractionSlug: "reichstag",
            tip: {
              de: "Online-Anmeldung über bundestag.de, mindestens 1 Woche vorher.",
              en: "Register online at bundestag.de at least a week out, and bring the same photo ID you signed up with.",
            },
          },
          {
            time: "12:30 – 14:00",
            timeEn: "12:30pm – 2:00pm",
            type: "mittagessen",
            title: { de: "Mittagessen am Gendarmenmarkt", en: "Lunch on Gendarmenmarkt" },
            description: {
              de: "Schönster Platz Berlins mit Konzerthaus, Französischem und Deutschem Dom. Cafés rundherum.",
              en: "Berlin's handsomest square: the Konzerthaus flanked by the German and French domes. Restaurants line the side streets.",
            },
            attractionSlug: "gendarmenmarkt",
          },
          {
            time: "14:00 – 18:00",
            timeEn: "2:00pm – 6:00pm",
            type: "nachmittag",
            title: { de: "Museumsinsel", en: "Museum Island" },
            description: {
              de: "Pergamonmuseum (teils gesperrt), Neues Museum mit Nofretete, Bode-Museum. Eine Karte für alle 5 Häuser.",
              en: "Large parts of the Pergamonmuseum are closed for renovation, so aim for the Neues Museum and the Nefertiti bust instead. One area ticket covers all five houses.",
            },
            attractionSlug: "museumsinsel",
          },
          {
            time: "18:00 – 19:00",
            timeEn: "6:00pm – 7:00pm",
            type: "abends",
            title: { de: "Fernsehturm-Aussicht zum Sonnenuntergang", en: "TV Tower at sunset" },
            description: {
              de: "203 m über Berlin. Vorab-Buchung spart Wartezeit.",
              en: "The deck sits 666 feet (203 m) above the city. Book a timed slot; the sunset ones go first.",
            },
            attractionSlug: "fernsehturm",
          },
          {
            time: "20:00",
            timeEn: "8:00pm",
            type: "abendessen",
            title: { de: "Abendessen am Hackeschen Markt", en: "Dinner at Hackescher Markt" },
            description: {
              de: "Lebendige Restaurant-Szene, viele moderne Berliner Küchen.",
              en: "The courtyards around Hackescher Markt hold a dense run of restaurants, most of them modern German rather than traditional.",
            },
            districtSlug: "mitte",
          },
        ],
      },
      {
        number: 2,
        title: { de: "Mauer-Geschichte & Kreuzberger Vibes", en: "Berlin Wall history and Kreuzberg" },
        intro: {
          de: "East Side Gallery, Checkpoint Charlie, Görli - Berlins Geschichte zwischen 1961 und heute, durchwandert.",
          en: "East Side Gallery, Checkpoint Charlie, Görlitzer Park. A walking day through the years the city was split in two.",
        },
        slots: [
          {
            time: "9:30 – 11:30",
            timeEn: "9:30am – 11:30am",
            type: "morgens",
            title: { de: "East Side Gallery", en: "East Side Gallery" },
            description: {
              de: "1,3 km Mauerreste mit Originalbemalungen, direkt an der Spree. Bestes Licht am Vormittag.",
              en: "0.8 miles (1.3 km) of the original Berlin Wall, painted with 105 murals in 1990, running along the Spree river. Go early; the crowds build after lunch.",
            },
            attractionSlug: "east-side-gallery",
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "12:00 – 13:00",
            timeEn: "12:00pm – 1:00pm",
            type: "mittagessen",
            title: { de: "Markthalle Neun", en: "Markthalle Neun" },
            description: {
              de: "Donnerstags Street Food Thursday - Berliner Klassiker & internationale Stände.",
              en: "A covered market hall from 1891. On Thursday evenings it runs Street Food Thursday, with stalls from a couple of dozen kitchens.",
            },
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "14:00 – 15:30",
            timeEn: "2:00pm – 3:30pm",
            type: "nachmittag",
            title: { de: "Checkpoint Charlie + Mauermuseum", en: "Checkpoint Charlie + Wall Museum" },
            description: {
              de: "Berühmtester ehemaliger Grenzübergang, dazu das Haus am Checkpoint Charlie (Mauer-Fluchten).",
              en: "The old crossing between the American and Soviet sectors. The guard house is a replica; the escape stories in the Mauermuseum next door are the real substance.",
            },
            attractionSlug: "checkpoint-charlie",
          },
          {
            time: "16:00 – 18:00",
            timeEn: "4:00pm – 6:00pm",
            type: "nachmittag",
            title: { de: "Spaziergang durch Kreuzberg 36", en: "Walk through Kreuzberg 36" },
            description: {
              de: "Bergmannstraße, Görlitzer Park, Oranienstraße. Berlins zugleich türkischste und alternativste Ecke.",
              en: "Bergmannstraße, Görlitzer Park, Oranienstraße. Kreuzberg 36 is the old West Berlin postal code, and this Kiez, the local word for a neighborhood you can walk end to end, is Turkish and punk at the same time.",
            },
            districtSlug: "friedrichshain-kreuzberg",
          },
          {
            time: "20:00",
            timeEn: "8:00pm",
            type: "abendessen",
            title: { de: "Abendessen in Kreuzberg", en: "Dinner in Kreuzberg" },
            description: {
              de: "Von Berliner Currywurst bis zu Sterneküche - Kreuzberg liefert in jeder Preisklasse.",
              en: "From currywurst at a sidewalk stand to Michelin stars, Kreuzberg covers every price bracket inside a few blocks.",
            },
          },
        ],
      },
      {
        number: 3,
        title: { de: "West-Berlin & Tiergarten", en: "West Berlin and the Tiergarten" },
        intro: {
          de: "Schloss Charlottenburg, Kurfürstendamm, KaDeWe - die Westseite mit Kaiser-Wilhelm-Gedächtniskirche und Tiergarten-Spaziergang.",
          en: "Charlottenburg Palace, the Kurfürstendamm and KaDeWe: the half of the city that stayed western, ending with a walk back through the Tiergarten.",
        },
        slots: [
          {
            time: "9:30 – 11:30",
            timeEn: "9:30am – 11:30am",
            type: "morgens",
            title: { de: "Schloss Charlottenburg", en: "Charlottenburg Palace" },
            description: {
              de: "Größte preußische Schlossanlage Berlins, mit Schlossgarten zum Spazieren.",
              en: "The largest surviving Prussian palace in Berlin. The baroque garden behind it is free to walk.",
            },
            attractionSlug: "schloss-charlottenburg",
            districtSlug: "charlottenburg-wilmersdorf",
          },
          {
            time: "12:30 – 14:00",
            timeEn: "12:30pm – 2:00pm",
            type: "mittagessen",
            title: { de: "KaDeWe Feinschmecker-Etage", en: "KaDeWe gourmet floor" },
            description: {
              de: "6. Etage des KaDeWe - Sushi-Bars, Austern, Pasta, Berliner Bouletten. Großstadt-Schaufenster.",
              en: "The sixth floor of KaDeWe is a food hall built around counters: oysters, sushi, pasta, Berliner Buletten (local meatballs). Eat standing up like everyone else.",
            },
            attractionSlug: "kadewe",
          },
          {
            time: "14:30 – 16:00",
            timeEn: "2:30pm – 4:00pm",
            type: "nachmittag",
            title: { de: "Kurfürstendamm + Gedächtniskirche", en: "Kurfürstendamm + memorial church" },
            description: {
              de: "Berlins Schaufensterboulevard, 3,5 km lang. Im Bruchstein die Kaiser-Wilhelm-Gedächtniskirche.",
              en: "The city's window-shopping boulevard, 2.2 miles (3.5 km) end to end. The bombed-out Kaiser Wilhelm Memorial Church, left as a ruin on purpose, anchors the eastern end.",
            },
            attractionSlug: "kurfuerstendamm",
          },
          {
            time: "16:30 – 18:00",
            timeEn: "4:30pm – 6:00pm",
            type: "nachmittag",
            title: { de: "Tiergarten-Spaziergang", en: "Tiergarten walk" },
            description: {
              de: "Berlins grüne Mitte, vom Zoologischen Garten Richtung Brandenburger Tor - 4 km, ungefähr 50 Min.",
              en: "Berlin's green middle, from Zoo station back toward the Brandenburg Gate: about 2.5 miles (4 km), roughly 50 minutes at an easy pace.",
            },
            attractionSlug: "tiergarten",
          },
          {
            time: "20:00",
            timeEn: "8:00pm",
            type: "abendessen",
            title: { de: "Abschiedsessen in Mitte oder am Ku'damm", en: "Farewell dinner in Mitte or on the Ku'damm" },
            description: {
              de: "Je nachdem wo das Hotel liegt - beide Ecken bieten Optionen für den letzten Abend.",
              en: "Pick whichever end is closer to your hotel. Both have plenty of options for a last night.",
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
      en: "Berlin with Kids",
    },
    description: {
      de: "Familien-Wochenende in Berlin: Zoo, Tempelhofer Feld, Mauerpark-Flohmarkt und das Naturkundemuseum - kindgerecht, mit Pausen.",
      en: "A family weekend in Berlin: the zoo, Tempelhofer Feld, the Mauerpark flea market and enough downtime built in that nobody melts down by 3pm.",
    },
    duration: 2,
    audience: { de: "Familien mit Kindern (4-12 Jahre)", en: "Families with kids (ages 4-12)" },
    imageKey: { folder: "sights", slug: "tempelhofer-feld" },
    days: [
      {
        number: 1,
        title: { de: "Tiergarten, Zoo & Aussicht", en: "Zoo, Tiergarten and the tower" },
        intro: {
          de: "Großer Tag im Park - Zoo am Morgen, Tiergarten-Picknick, Fernsehturm zur Belohnung.",
          en: "A big outdoor day: the zoo in the morning, a picnic in the Tiergarten, the TV Tower as the payoff.",
        },
        slots: [
          {
            time: "9:30 – 13:00",
            timeEn: "9:30am – 1:00pm",
            type: "morgens",
            title: { de: "Zoologischer Garten", en: "Berlin Zoo" },
            description: {
              de: "Ältester Zoo Deutschlands. 3-4 Stunden reichen für Pandas, Elefanten, Aquarium.",
              en: "Germany's oldest zoo, opened in 1844, sitting right in the middle of the city. Three to four hours covers the pandas, the elephants and the aquarium.",
            },
            districtSlug: "charlottenburg-wilmersdorf",
            tip: {
              de: "Online-Tickets sparen Schlange. Aquarium ist im Kombi-Ticket günstiger.",
              en: "Buy online to skip the line. The aquarium works out cheaper as a combination ticket than paid separately.",
            },
          },
          {
            time: "13:30 – 15:30",
            timeEn: "1:30pm – 3:30pm",
            type: "mittagessen",
            title: { de: "Picknick im Tiergarten", en: "Picnic in Tiergarten" },
            description: {
              de: "Park ist riesig - perfekt zum Toben nach 3 Stunden Zoo. Spielplätze über den ganzen Park verteilt.",
              en: "520 acres of lawn and shade, which is exactly what three hours of zoo calls for. Playgrounds are scattered across the whole park.",
            },
            attractionSlug: "tiergarten",
          },
          {
            time: "16:30 – 18:00",
            timeEn: "4:30pm – 6:00pm",
            type: "nachmittag",
            title: { de: "Fernsehturm-Aussicht", en: "TV Tower viewpoint" },
            description: {
              de: "Kinder lieben den schnellen Aufzug und den Drehrestaurant-Raum oben.",
              en: "Kids usually rate the 40-second elevator ride higher than the view. The restaurant floor above the deck slowly rotates.",
            },
            attractionSlug: "fernsehturm",
          },
        ],
      },
      {
        number: 2,
        title: { de: "Freiraum & Mauerpark-Sonntag", en: "Wide open space and a Mauerpark Sunday" },
        intro: {
          de: "Tempelhofer Feld zum Skaten und Drachen steigen, mittags Mauerpark mit Flohmarkt und Bearpit-Karaoke.",
          en: "Tempelhofer Feld in the morning for skating and kites, then the Mauerpark flea market and open-air karaoke in the afternoon.",
        },
        slots: [
          {
            time: "10:00 – 12:30",
            timeEn: "10:00am – 12:30pm",
            type: "morgens",
            title: { de: "Tempelhofer Feld", en: "Tempelhofer Feld" },
            description: {
              de: "Stillgelegter Flughafen - heute die größte innerstädtische Freifläche Europas. Fahrräder/Skates mitbringen oder leihen.",
              en: "A closed airport turned public park: roughly 1.5 square miles of runway and grass with nothing built on it. Bring bikes or skates if you can.",
            },
            attractionSlug: "tempelhofer-feld",
          },
          {
            time: "13:30 – 17:00",
            timeEn: "1:30pm – 5:00pm",
            type: "mittagessen",
            title: { de: "Mauerpark (Sonntag)", en: "Mauerpark (Sundays)" },
            description: {
              de: "Sonntags Flohmarkt + nachmittags Bearpit-Karaoke (Open-Air). Kinder schauen, Eltern stöbern.",
              en: "Sunday means the flea market plus Bearpit Karaoke in the stone amphitheater from mid-afternoon. Kids watch the singers, parents dig through the stalls.",
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
      en: "Berlin When It Rains",
    },
    description: {
      de: "Ein Schlechtwetter-Tag in Berlin: drei Museen auf der Museumsinsel, Lunch in der Markthalle, Abend im KaDeWe oder Sony Center.",
      en: "A rainy-day plan for Berlin: three museums on Museum Island, a covered lunch near Hackescher Markt and an afternoon inside the KaDeWe.",
    },
    duration: 1,
    audience: { de: "Alle Reisende bei Regen", en: "Anyone caught in the rain" },
    imageKey: { folder: "sights", slug: "museumsinsel" },
    days: [
      {
        number: 1,
        title: { de: "Drinnen-Tour", en: "Indoors all day" },
        intro: {
          de: "Bei Berliner Schauerwetter funktioniert dieser Plan ohne nasse Füße - alles per ÖPNV oder Taxi vernetzt.",
          en: "Berlin is gray and wet for a good stretch of the year. This plan keeps you inside, and every leg connects by subway or one short taxi ride.",
        },
        slots: [
          {
            time: "10:00 – 13:00",
            timeEn: "10:00am – 1:00pm",
            type: "morgens",
            title: { de: "Museumsinsel - drei Häuser", en: "Museum Island - three houses" },
            description: {
              de: "Mit der Bereichskarte alle Häuser. Plan: Neues Museum (Nofretete), Alte Nationalgalerie, Bode-Museum.",
              en: "One area ticket covers all the houses. The pick: Neues Museum for the Nefertiti bust, Alte Nationalgalerie for the paintings, Bode-Museum for the sculpture.",
            },
            attractionSlug: "museumsinsel",
          },
          {
            time: "13:30 – 15:00",
            timeEn: "1:30pm – 3:00pm",
            type: "mittagessen",
            title: { de: "Lunch nahe Hackescher Markt", en: "Lunch near Hackescher Markt" },
            description: {
              de: "Überdachte Hackesche Höfe, dazu Cafés und Bistros direkt an der S-Bahn.",
              en: "The Hackesche Höfe are eight linked courtyards, most of them covered, with cafés and bistros right by the S-Bahn station.",
            },
            districtSlug: "mitte",
          },
          {
            time: "15:30 – 18:00",
            timeEn: "3:30pm – 6:00pm",
            type: "nachmittag",
            title: { de: "KaDeWe", en: "KaDeWe" },
            description: {
              de: "Größtes Kaufhaus Kontinentaleuropas, 7 Etagen - Schaufenster-Bummel ohne nass zu werden.",
              en: "The largest department store in continental Europe, seven floors of it. Window-shop dry, then eat your way along the gourmet counters on six.",
            },
            attractionSlug: "kadewe",
          },
          {
            time: "19:30",
            timeEn: "7:30pm",
            type: "abendessen",
            title: { de: "Abendessen - Konzerthaus oder Bar", en: "Dinner - concert hall or bar" },
            description: {
              de: "Je nach Mood: Konzerthaus am Gendarmenmarkt (vorab buchen) oder eine warme Bar in Mitte.",
              en: "Depends on the mood: a concert at the Konzerthaus on Gendarmenmarkt, booked ahead, or just a warm bar somewhere in Mitte.",
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
