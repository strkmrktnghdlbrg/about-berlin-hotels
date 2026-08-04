import type { Article } from "../../articles";

/**
 * English editions of the theme guides.
 * --------------------------------------
 * Same slugs as the German originals (src/data/articles/themes.ts), served
 * under /en/guides/<slug>/. Sensitive properties (pets, accessibility,
 * sustainability) stay deliberately cautious and point readers at their own
 * confirmation with the hotel, exactly as the German versions do.
 */

const PUB = "2024-02-01";
const MOD = "2026-08-04";

export const themeArticlesEn: Article[] = [
  // ───────────────────────── LUXURY ─────────────────────────
  {
    slug: "luxus-hotels-berlin",
    title: "The best luxury hotels in Berlin: five-star houses at a glance",
    description:
      "Luxury hotels in Berlin: the best five-star houses with spa, concierge and a starred restaurant - from the Adlon by the Brandenburg Gate to the Waldorf Astoria.",
    kicker: "Hotel category · Luxury",
    intro: [
      "Berlin plays in the top league of luxury hotels: the Adlon, Waldorf Astoria, Hotel de Rome and the Mandala offer five-star comfort, spas, round-the-clock concierge and in some cases starred kitchens. Most sit by the Brandenburg Gate, on Gendarmenmarkt or on Kurfürstendamm.",
      "Here are the city's verified luxury houses - with what really sets them apart: location, history and the extras that make a stay memorable.",
    ],
    takeaways: [
      "The greatest concentration of luxury is in Mitte and City West (Charlottenburg).",
      "Top houses combine a spa, an in-house restaurant and 24/7 concierge.",
      "Five-star rooms in Berlin mostly start at around €290–480 per night.",
    ],
    bestFor: ["Luxury travellers", "Special occasions", "Couples", "Connoisseurs"],
    categorySlug: "luxushotels",
    hotels: [
      "hotel-adlon-kempinski",
      "hotel-de-rome",
      "waldorf-astoria-berlin",
      "the-mandala-hotel",
      "intercontinental-berlin",
      "regent-berlin",
    ],
    sections: [
      {
        heading: "Which is the best luxury hotel in Berlin?",
        body: [
          "The most symbolic address is the Hotel Adlon Kempinski right by the Brandenburg Gate - the city's grande dame with spa, pool and the Lorenz Adlon Esszimmer (two Michelin stars). If you want modern luxury with height, book the Waldorf Astoria in the 32-storey glass tower by the Gedächtniskirche.",
          "For design-led luxury with history there is the Hotel de Rome on Bebelplatz, in a former bank - with a pool in the old vault and a roof terrace facing Berlin Cathedral.",
        ],
      },
      {
        heading: "What defines a real five-star house in Berlin?",
        body: [
          "More than stars on the door: continuous concierge service, generous rooms and suites, a serious spa and usually a top in-house restaurant. The Mandala at Potsdamer Platz, for instance, has suites only and the two-star FACIL; at the InterContinental, Hugos also cooks at two stars.",
        ],
      },
      {
        heading: "Where are Berlin's luxury hotels?",
        body: [
          "Clearly clustered: around Pariser Platz and Gendarmenmarkt in Mitte, and along Kurfürstendamm in City West. Both locations are superbly connected and put sights, shopping and dining on your doorstep.",
        ],
      },
      {
        heading: "Is luxury in Berlin worth it compared with other capitals?",
        body: [
          "Yes - Berlin's five-star prices sit noticeably below Paris, London or Munich at comparable quality. For a grand-hotel experience with a starred restaurant you often pay considerably less here than elsewhere.",
        ],
      },
    ],
    faq: [
      { q: "What does a luxury hotel in Berlin cost?", a: "Five-star houses start at around €290 per night depending on season; top suites in houses like the Adlon sit far higher. Midweek and off-season prices are the most attractive." },
      { q: "Which luxury hotel has the best restaurant?", a: "Several Berlin luxury houses run starred restaurants: Lorenz Adlon Esszimmer (2 stars), FACIL at the Mandala (2 stars) and Hugos at the InterContinental (2 stars). More in the gourmet guide." },
      { q: "Which luxury hotels have a spa?", a: "The Adlon, Waldorf Astoria (Spa Guerlain), InterContinental, de Rome and Mandala (ONO Spa) all have large spa areas. Details in the wellness guide." },
      { q: "Where should a first-time visitor stay in luxury?", a: "In Mitte around Pariser Platz and Gendarmenmarkt - from there you reach the major sights on foot." },
    ],
    gygQuery: "Berlin Highlights Tour",
    related: [
      { label: "Luxury hotels - all houses & districts", href: "/en/categories/luxury-hotels/" },
      { label: "Hotels with gourmet kitchens", href: "/en/guides/gourmet-hotels-berlin/" },
      { label: "Wellness & spa hotels", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
    ],
    adjacent: [
      { label: "Which hotels have the best rooftop bars?", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "Where are the romantic hotels for couples?", href: "/en/guides/romantische-hotels-berlin/" },
      { label: "Which hotels carry the most history?", href: "/en/guides/historische-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BOUTIQUE ─────────────────────────
  {
    slug: "boutique-hotels-berlin-charme",
    title: "Boutique hotels in Berlin: charming houses with character",
    description:
      "Boutique hotels in Berlin: small, individual houses with design and character - from the Michelberger in Friedrichshain to the Hotel Oderberger in Prenzlauer Berg.",
    kicker: "Hotel category · Boutique",
    intro: [
      "Boutique hotels are the chain antidote: 20 to 80 rooms, all individual, often in period buildings or converted industrial spaces. Berlin has one of Europe's densest boutique hotel scenes.",
      "Friedrichshain-Kreuzberg and Prenzlauer Berg are the boutique strongholds, but Mitte and City West have outstanding houses too. Here are the most charming - verified and presented one by one.",
    ],
    takeaways: [
      "Boutique hotels score on individuality, design and personal service.",
      "The densest selection sits in Friedrichshain-Kreuzberg, Prenzlauer Berg and Mitte.",
      "Prices mostly start at around €140 per night.",
    ],
    bestFor: ["Design fans", "Couples", "Independent travellers", "Berlin regulars"],
    categorySlug: "boutique-hotels",
    hotels: [
      "michelberger-hotel",
      "hotel-oderberger",
      "sir-savigny-hotel",
      "soho-house-berlin",
      "henri-hotel-kurfuerstendamm",
      "ackselhaus-blue-home",
    ],
    sections: [
      {
        heading: "What makes a good boutique hotel?",
        body: [
          "Character instead of a template: individually designed rooms, a clear design signature, often owner-run and with their own bar or restaurant. You notice immediately that someone with a point of view stands behind it.",
          "The Michelberger Hotel in Friedrichshain is a prime example - from industrial building to design house with a rooftop sauna and a seasonal restaurant.",
        ],
      },
      {
        heading: "Which boutique hotels stand out in Berlin?",
        body: [
          "The Hotel Oderberger in Prenzlauer Berg occupies the public baths of 1902 - with the historic swimming pool preserved. The Sir Savigny and the Henri Hotel stand for vintage charm in City West, the Ackselhaus for individually designed themed rooms around Kollwitzplatz.",
          "A special case is the Soho House in a Bauhaus building on Torstraße - a members' club with a hotel, roof pool and its own cinema.",
        ],
      },
      {
        heading: "Where in Berlin are most boutique hotels?",
        body: [
          "Friedrichshain-Kreuzberg counts as the boutique mecca, closely followed by Prenzlauer Berg (Pankow) and Mitte. In City West (Charlottenburg) you find the more elegant, classical representatives.",
        ],
      },
    ],
    faq: [
      { q: "What does a boutique hotel in Berlin cost?", a: "Most houses sit between €140 and €200 per night; upmarket five-star boutique hotels go above that." },
      { q: "Boutique hotel or chain - which is better?", a: "Boutique houses offer more character and personal service, chains more standardisation and reliability. For an authentic Berlin experience, boutique hotels are usually the more interesting choice." },
      { q: "Are boutique hotels suitable for families?", a: "Some are (the Hotel Oderberger has family rooms), others are aimed more at couples and independent travellers. A dedicated family selection is in the family guide." },
      { q: "Which district is the most charming to stay in?", a: "Prenzlauer Berg and Friedrichshain-Kreuzberg for creative charm, City West for classical elegance." },
    ],
    gygQuery: "Berlin Kieztour",
    related: [
      { label: "Boutique hotels - all houses & districts", href: "/en/categories/boutique-hotels/" },
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
      { label: "Boutique hotels in Friedrichshain-Kreuzberg", href: "/en/guides/friedrichshain/" },
      { label: "Charming hotels in Berlin", href: "/en/categories/charming-hotels/" },
    ],
    adjacent: [
      { label: "Which hotels are real insider tips?", href: "/en/guides/geheimtipp-hotels-berlin/" },
      { label: "Where do I find the best design hotels?", href: "/en/guides/design-hotels-berlin/" },
      { label: "Romantic hotels for couples", href: "/en/guides/romantische-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── DESIGN ─────────────────────────
  {
    slug: "design-hotels-berlin",
    title: "Design hotels in Berlin: architecture and style to sleep in",
    description:
      "Design hotels in Berlin: architecturally composed houses with a clear signature - from the 25hours in the Bikinihaus to the nhow on the Spree.",
    kicker: "Hotel category · Design",
    intro: [
      "Berlin has been a design-hotel capital since the 2000s. Design hotels think every detail through: furniture, light, textures, often their own bar and restaurant - and architecture that becomes an attraction in itself.",
      "Mitte and Friedrichshain lead the field, but City West has strong houses too. Here are the city's most interesting design hotels - verified and presented one by one.",
    ],
    takeaways: [
      "Design hotels turn architecture and interiors into the actual experience.",
      "Strongest clusters: Mitte, Friedrichshain-Kreuzberg and City West.",
      "Prices mostly start at around €145–190 per night.",
    ],
    bestFor: ["Design fans", "Creatives", "City breaks", "Architecture enthusiasts"],
    categorySlug: "designhotels",
    hotels: [
      "25hours-hotel-bikini",
      "hotel-zoo-berlin",
      "nhow-berlin",
      "hotel-amano-grand-central",
      "hotel-q-berlin",
      "hotel-indigo-alexanderplatz",
    ],
    sections: [
      {
        heading: "Which design hotel in Berlin is the most spectacular?",
        body: [
          "The 25hours Hotel Bikini Berlin in the restored Bikinihaus of 1957 is an experience in itself: jungle-side rooms look straight into the zoo, and the rooftop Monkey Bar has panoramic views over the Tiergarten and the Gedächtniskirche. Architecturally striking too is the Hotel Q! with its curved walls, where bed and bathtub merge into a single built form.",
        ],
      },
      {
        heading: "Which design hotels have a signature of their own?",
        body: [
          "The nhow Berlin on the Spree was designed by Karim Rashid and is Europe's first music hotel - with two recording studios guests can rent. The Hotel Zoo on the Ku'damm combines a restored period building with the Grace rooftop bar; the AMANO Grand Central stands for clean lines and a busy roof bar by Hauptbahnhof.",
        ],
      },
      {
        heading: "Where are the best design hotels?",
        body: [
          "In Mitte (around Alexanderplatz and Hauptbahnhof), in Friedrichshain along the Spree and in City West on the Ku'damm. All three locations are excellently connected.",
        ],
      },
    ],
    faq: [
      { q: "What is the difference between a design hotel and a boutique hotel?", a: "The terms overlap. Design hotels put the design and architectural idea at the centre; boutique hotels emphasise individuality and personal service. Many houses are both." },
      { q: "What does a design hotel in Berlin cost?", a: "Usually €145–190 per night, with design-led five-star houses accordingly higher." },
      { q: "Which design hotel has the best view?", a: "The 25hours Bikini with the Monkey Bar over the Tiergarten and the zoo - see also our rooftop bar guide." },
      { q: "Are design hotels well connected?", a: "Yes, most sit very centrally in Mitte, along the Spree or on the Ku'damm with direct U-Bahn or S-Bahn links." },
    ],
    gygQuery: "Berlin Architektur Tour",
    related: [
      { label: "Design hotels - all houses & districts", href: "/en/categories/design-hotels/" },
      { label: "Boutique hotels in Berlin", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Hotels with a rooftop bar", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "Hotels in Friedrichshain-Kreuzberg", href: "/en/guides/friedrichshain/" },
    ],
    adjacent: [
      { label: "Which hotels have the finest roof terraces?", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "Where do I find charming boutique hotels?", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Art and culture hotels in Berlin", href: "/en/guides/kultur-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── FAMILY ─────────────────────────
  {
    slug: "familienfreundliche-hotels-berlin",
    title: "Family-friendly hotels in Berlin: child-friendly places to stay",
    description:
      "Family-friendly hotels in Berlin: family rooms, pools, apartments with kitchens and child-friendly locations - the best houses for a family holiday.",
    kicker: "Hotel category · Family",
    intro: [
      "Family-friendly hotels in Berlin offer family rooms for four or more, often a pool, sauna or apartments with a kitchenette - and sit conveniently for the Tierpark, Mauerpark, Müggelsee or Museum Island.",
      "Pankow, Reinickendorf and Treptow-Köpenick have the widest choice, but central aparthotels work superbly too. Here are the verified houses for a family holiday.",
    ],
    takeaways: [
      "Family rooms, apartments with kitchens and pools are the key family features.",
      "Apartments with a kitchenette pay off especially from three to four nights.",
      "Pankow (Prenzlauer Berg) is the most family-friendly inner-city quarter.",
    ],
    bestFor: ["Families", "Longer stays", "Travellers with toddlers", "Large families"],
    categorySlug: "familienhotels",
    hotels: [
      "adina-apartment-hotel-mitte",
      "park-inn-alexanderplatz",
      "hotel-oderberger",
      "hotel-mueggelsee-berlin",
      "estrel-berlin",
      "best-western-am-borsigturm",
    ],
    sections: [
      {
        heading: "What should you look for in a family hotel in Berlin?",
        body: [
          "Family rooms or apartments with enough space, a kitchenette (which saves restaurant trips with children), ideally a pool or sauna, and good public transport. Aparthotels such as the Adina at Hackescher Markt combine hotel service with your own kitchen and an indoor pool.",
        ],
      },
      {
        heading: "Which hotels are particularly child-friendly?",
        body: [
          "The Hotel Müggelsee by the lake offers a spa, a lido and plenty of space; the Park Inn at Alexanderplatz scores with a central location and family rooms; the Best Western am Borsigturm in the north has a pool and sauna. Charming and central: the Hotel Oderberger with its historic pool near Mauerpark.",
        ],
      },
      {
        heading: "Which location is best for families?",
        body: [
          "Prenzlauer Berg (Pankow) for relaxed inner-city living with playgrounds and cafés, the green north (Reinickendorf) and the Müggelsee (Treptow-Köpenick) for nature. If sightseeing is the priority, choose an aparthotel in Mitte.",
        ],
      },
    ],
    faq: [
      { q: "Which hotels in Berlin have family rooms?", a: "Many larger houses (Park Inn, Estrel, Hotel Berlin Berlin) as well as family-oriented boutique houses (Hotel Oderberger, Schulz Hotel). Apartments with a kitchen add space and flexibility." },
      { q: "What does a family hotel in Berlin cost?", a: "Family rooms and apartments mostly sit between €110 and €165 per night; from three nights, apartments with a kitchen are especially worthwhile." },
      { q: "Which district is the most family-friendly?", a: "Pankow with Prenzlauer Berg counts as the most family-friendly inner-city district; Reinickendorf and Treptow-Köpenick score with greenery and water." },
      { q: "Are Berlin hotels set up for children?", a: "Family-oriented houses provide cots, family rooms and often a pool. Dedicated childcare is rare in city hotels - ask in advance about the specific offer." },
    ],
    gygQuery: "Berlin mit Kindern",
    related: [
      { label: "Family hotels - all houses & districts", href: "/en/categories/family-hotels/" },
      { label: "Berlin with kids - itinerary", href: "/en/itineraries/berlin-with-kids/" },
      { label: "Family hotels in Pankow", href: "/en/guides/pankow/" },
      { label: "Lakeside hotels in Treptow-Köpenick", href: "/en/guides/treptow/" },
    ],
    adjacent: [
      { label: "What can you do in Berlin with kids when it rains?", href: "/en/itineraries/berlin-when-it-rains/" },
      { label: "Which hotels have a pool and sauna?", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Affordable family hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── PET-FRIENDLY ─────────────────────────
  {
    slug: "tierfreundliche-hotels-berlin",
    title: "Pet-friendly hotels in Berlin: travelling with a dog",
    description:
      "Pet-friendly hotels in Berlin: houses that welcome dogs and pets - with tips on fees, rules and the best locations for walks.",
    kicker: "Hotel category · Pets",
    intro: [
      "Bringing your dog to Berlin? Many hotels accept dogs and small pets - often for a fee and with advance notice. What matters is clarifying the exact rules (size, number, surcharge) directly with the property before booking.",
      "Here are houses that lend themselves to a trip with a dog, and what to watch for - from a location near parks to the service on site.",
    ],
    takeaways: [
      "Many Berlin hotels accept pets on request - have the terms confirmed in advance.",
      "Check the fee, permitted size and number, and the rules (leaving the dog alone, restaurant areas).",
      "Locations near the Tiergarten, Mauerpark or the lakes make walks easier.",
    ],
    bestFor: ["Travellers with dogs", "Pet owners", "Road trippers", "Nature lovers"],
    hotels: [
      "hotel-zoo-berlin",
      "the-mandala-hotel",
      "intercontinental-berlin",
      "adina-apartment-hotel-mitte",
      "estrel-berlin",
      "hotel-mueggelsee-berlin",
    ],
    sections: [
      {
        heading: "What should you check for a hotel with a dog?",
        body: [
          "Clarify bindingly before booking: is the pet accepted, what fee applies, are size or number limited, and may the dog stay alone in the room? Many houses allow dogs only in certain room categories and not in restaurant or spa areas.",
          "Ground-floor locations, apartments with their own entrance and proximity to green space all help. The Adina at Hackescher Markt with apartments and kitchens, for instance, makes travelling with an animal easier.",
        ],
      },
      {
        heading: "Which locations suit travelling with a dog?",
        body: [
          "Houses near the Tiergarten (City West), Mauerpark (Prenzlauer Berg) or the Müggelsee offer short walks into the green. The Hotel Müggelsee has the lake and a lido on the doorstep; central houses by the Tiergarten combine city proximity with space to run.",
        ],
      },
      {
        heading: "What does bringing a dog cost?",
        body: [
          "€15–30 per night as a cleaning or pet fee is common; some houses take dogs free of charge, others not at all. Because terms change, the rule is: always ask the hotel directly and get it confirmed in writing.",
        ],
      },
    ],
    faq: [
      { q: "Which hotels in Berlin allow dogs?", a: "Many houses across all categories accept dogs on request. Always clarify the specific permission, fee and size limit directly with the hotel in advance, as policies can change." },
      { q: "What does a dog cost in a hotel?", a: "Usually €15–30 per night; a few houses charge nothing or allow no animals at all. Get it confirmed in advance." },
      { q: "May the dog stay alone in the hotel room?", a: "Houses handle this differently; many forbid it or require the dog to stay in a crate. Clarify before booking." },
      { q: "Where can I walk a dog in Berlin?", a: "The Tiergarten, Mauerpark, Tempelhofer Feld, the Grunewald and the shore paths along the Müggelsee and the Havel are particularly good." },
    ],
    gygQuery: "Berlin Stadtpark Spaziergang",
    related: [
      { label: "Hotels in green City West (Charlottenburg)", href: "/en/guides/charlottenburg/" },
      { label: "Lakeside hotels in Treptow-Köpenick", href: "/en/guides/treptow/" },
      { label: "Quiet hotels in the green (Steglitz-Zehlendorf)", href: "/en/guides/steglitz/" },
      { label: "All hotel categories at a glance", href: "/en/categories/" },
    ],
    adjacent: [
      { label: "Which hotels are particularly family-friendly?", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Where do you stay quietly in the green?", href: "/en/guides/steglitz/" },
      { label: "Hotels with apartments and kitchens", href: "/en/guides/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── WELLNESS ─────────────────────────
  {
    slug: "wellness-spa-hotels-berlin",
    title: "Wellness and spa hotels in Berlin: unwinding in the capital",
    description:
      "Wellness and spa hotels in Berlin: houses with a pool, sauna and spa - from luxury spas in Mitte to the lakeside hotel on the Müggelsee with its own lido.",
    kicker: "Hotel category · Wellness",
    intro: [
      "Wellness and spa hotels with a large bathing and sauna area are found in Berlin mainly in the upmarket segment in Mitte and in the green south and south-east by the water. Pools, sauna landscapes and massages are standard here.",
      "Here are the houses with a genuine spa offer - from the city spa in a luxury hotel to the lakeside house with a lido.",
    ],
    takeaways: [
      "The best city spas sit in the luxury houses in Mitte and City West.",
      "For wellness with a link to nature, the green south and the Müggelsee work best.",
      "Check for a pool, sauna landscape and massage offer - not every house has all three.",
    ],
    bestFor: ["Rest seekers", "Couples", "Spa lovers", "Weekend travellers"],
    categorySlug: "wellness-hotels",
    hotels: [
      "the-mandala-hotel",
      "hotel-mueggelsee-berlin",
      "waldorf-astoria-berlin",
      "intercontinental-berlin",
      "hotel-adlon-kempinski",
      "hotel-de-rome",
    ],
    sections: [
      {
        heading: "Which hotels in Berlin have the best spa?",
        body: [
          "In the luxury segment the leaders are the Waldorf Astoria (two-floor Spa Guerlain), the Mandala (ONO Spa, pool in the glass atrium setting), the InterContinental, the Adlon and the Hotel de Rome (pool in the former vault). These houses combine spa, pool and upmarket dining under one roof.",
        ],
      },
      {
        heading: "Where is wellness with a link to nature?",
        body: [
          "On the water in the south-east: the Hotel Müggelsee offers a large spa area and its own lido right on the city's biggest lake - ideal for combining a sauna with a swim in the lake. Berlin's green south-west (Grunewald, Wannsee) also suits quiet wellness stays.",
        ],
      },
      {
        heading: "Is a spa weekend in Berlin worth it?",
        body: [
          "Very much - the combination of city spa and culture is the appeal: Museum Island in the morning, sauna and massage in the afternoon. For pure recuperation, a lakeside hotel on the Müggelsee is the quieter choice.",
        ],
      },
    ],
    faq: [
      { q: "Which Berlin hotels have a pool?", a: "Among others the Adlon, de Rome (pool in the vault), Mandala, Waldorf Astoria, InterContinental, Soho House (roof pool) and apartment houses such as the Adina. The Hotel Müggelsee additionally offers a lido on the lake." },
      { q: "What does a wellness hotel in Berlin cost?", a: "City spas in the luxury segment start at around €240–290 per night; the lakeside Hotel Müggelsee at roughly €135." },
      { q: "Where is there wellness by a lake?", a: "On the Müggelsee (Treptow-Köpenick) and in the green south-west around Wannsee and the Grunewald." },
      { q: "Can you use the spa areas without staying overnight?", a: "Some houses offer day-spa packages; this varies a great deal - best to ask the hotel directly." },
    ],
    gygQuery: "Berlin Spa Wellness",
    related: [
      { label: "Wellness hotels - all houses & districts", href: "/en/categories/wellness-hotels/" },
      { label: "Lakeside hotels in Treptow-Köpenick", href: "/en/guides/treptow/" },
      { label: "Quiet hotels in Steglitz-Zehlendorf", href: "/en/guides/steglitz/" },
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels suit a weekend for two?", href: "/en/guides/romantische-hotels-berlin/" },
      { label: "Where do you stay by the water?", href: "/en/guides/treptow/" },
      { label: "Luxury hotels with spa and starred restaurant", href: "/en/guides/luxus-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BUDGET ─────────────────────────
  {
    slug: "budget-hotels-berlin",
    title: "Cheap hotels in Berlin: affordable stays without compromises",
    description:
      "Cheap hotels in Berlin: clean, well-connected houses under €100 - from central three-star hotels to creative budget stays in the trend quarters.",
    kicker: "Hotel category · Budget",
    intro: [
      "Staying cheaply in Berlin does not automatically mean staying far out. Central three-star houses, creative budget concepts and apartments with kitchens deliver clean rooms with good connections - often under €100 per night.",
      "Here are verified budget houses across the city, plus when and where you save the most.",
    ],
    takeaways: [
      "Clean, central budget hotels in Berlin often start at €65–95 per night.",
      "Cheap districts: Spandau, Marzahn-Hellersdorf, Neukölln and parts of Friedrichshain.",
      "You save most midweek and in the off season.",
    ],
    bestFor: ["Budget travellers", "Young travellers", "Short breaks", "Bargain hunters"],
    categorySlug: "billige-hotels",
    hotels: [
      "h2-hotel-alexanderplatz",
      "circus-hotel",
      "hampton-by-hilton-city-west",
      "schulz-hotel",
      "huettenpalast",
      "ibis-budget-berlin-hellersdorf",
    ],
    sections: [
      {
        heading: "Where do you find cheap hotels in central locations?",
        body: [
          "Right at Alexanderplatz the H2 Hotel starts at around €65; the owner-run Circus Hotel at Rosenthaler Platz is affordable and very Berlin. In City West the Hampton by Hilton offers fair prices with a hot breakfast, and on the East Side Gallery the Schulz Hotel has affordable rooms and family rooms.",
        ],
      },
      {
        heading: "Which affordable places to stay stand out?",
        body: [
          "The Hüttenpalast in Neukölln lets you sleep in vintage caravans and cabins inside a factory hall - an experience at a small price. For the absolute minimum, the ibis budget in Hellersdorf starts at around €49 with a U-Bahn connection.",
        ],
      },
      {
        heading: "When are Berlin hotels cheapest?",
        body: [
          "In the off season (November to February outside the holidays) and midweek. Major events and trade fairs push prices up; if you are flexible, book counter-cyclically and early.",
        ],
        bullets: [
          "Off season: winter (except Christmas/New Year) is cheapest.",
          "Tuesday to Thursday is often cheaper than the weekend.",
          "Avoid trade fairs and major events, or book very early.",
        ],
      },
    ],
    faq: [
      { q: "What does a cheap hotel in Berlin cost?", a: "Solid three-star houses start at around €65–95 per night, budget houses on the edge of the city from about €49." },
      { q: "Which districts have the cheapest hotels?", a: "Spandau, Marzahn-Hellersdorf and Neukölln are the most affordable, plus parts of Friedrichshain and Lichtenberg." },
      { q: "Cheap hotel in the centre or on the outskirts?", a: "If you plan a lot of sightseeing, a central location saves time and travel costs. On the outskirts you pay less for the room but more in travel time." },
      { q: "Are cheap hotels in Berlin clean and safe?", a: "Yes - the houses named here have been checked. With very cheap offers, look at recent guest reviews and the exact location." },
    ],
    gygQuery: "Berlin Free Walking Tour",
    related: [
      { label: "Budget hotels - all districts", href: "/en/categories/budget-hotels/" },
      { label: "Cheap hotels in Spandau", href: "/en/guides/spandau/" },
      { label: "Affordable hotels in Neukölln", href: "/en/guides/neukoelln/" },
      { label: "Budget hotels in Marzahn-Hellersdorf", href: "/en/guides/marzahn/" },
    ],
    adjacent: [
      { label: "How do I book a hotel most cheaply?", href: "/en/guides/hotel-buchungstipps/" },
      { label: "Which hotels are creative and cheap at once?", href: "/en/guides/geheimtipp-hotels-berlin/" },
      { label: "Affordable family hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ROMANTIC ─────────────────────────
  {
    slug: "romantische-hotels-berlin",
    title: "Romantic hotels in Berlin: the finest houses for couples",
    description:
      "Romantic hotels in Berlin for couples: stylish suites, a spa for two and intimate boutique houses - the loveliest addresses for a break together.",
    kicker: "Hotel category · Romance",
    intro: [
      "Berlin has plenty to offer for a break for two: stylish suites with city views, intimate boutique houses, spas for two and hotels with live music or a roof terrace. Romance here works classically elegant just as well as creative.",
      "Here are the loveliest houses for couples - from the palace hotel in the green to the boutique house with personal service.",
    ],
    takeaways: [
      "For romance, atmosphere, intimate size and special extras (spa, suite, view) matter most.",
      "Boutique and palace hotels often offer more charm than large houses.",
      "A spa area or roof terrace noticeably lifts a weekend for two.",
    ],
    bestFor: ["Couples", "Honeymoons", "Anniversaries", "Romantic short breaks"],
    hotels: [
      "orania-berlin",
      "patrick-hellmann-schlosshotel",
      "hotel-zoo-berlin",
      "soho-house-berlin",
      "ackselhaus-blue-home",
      "myers-hotel",
    ],
    sections: [
      {
        heading: "Which hotels in Berlin are the most romantic?",
        body: [
          "For stylish romance with character: the Orania.Berlin on Oranienplatz with live music in the salon, the design-led Hotel Zoo with its Grace rooftop bar and the discreet Patrick Hellmann Schlosshotel in the Grunewald (interiors by Karl Lagerfeld). If you prefer intimate and personal, choose the Ackselhaus with its themed rooms or Myer's Hotel near Kollwitzplatz with its garden.",
        ],
      },
      {
        heading: "What makes a hotel romantic?",
        body: [
          "Atmosphere over size: a personally run house, a lovely suite, a quiet garden or a roof terrace with a view, ideally a spa. Small houses often score more here than the very large hotels.",
        ],
      },
      {
        heading: "Where do couples spend a weekend in Berlin?",
        body: [
          "Prenzlauer Berg for relaxed charm and good cafés, City West for classical elegance, the green south-west for quiet and nature. Combined with a spa visit and dinner, that makes a well-rounded weekend for two.",
        ],
      },
    ],
    faq: [
      { q: "Which hotel suits a marriage proposal?", a: "Houses with a view or a special atmosphere - the Hotel Zoo with its roof bar, the Patrick Hellmann Schlosshotel in the green or a luxury house with a suite and spa." },
      { q: "Are there hotels with a spa for two?", a: "Yes - the large luxury houses (Waldorf Astoria, Mandala, InterContinental) offer couples' treatments. More in the wellness guide." },
      { q: "What does a romantic weekend in Berlin cost?", a: "Depending on standards: boutique houses from around €160, palace and luxury hotels from around €280–290 per night." },
      { q: "Which district is the most romantic?", a: "Prenzlauer Berg for charm, City West for elegance and the green south-west for quiet and nature." },
    ],
    gygQuery: "Berlin Spree Bootsfahrt",
    related: [
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Wellness & spa hotels", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Boutique hotels with charm", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Hotels with a rooftop bar", href: "/en/guides/rooftop-bars-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels have a starred restaurant?", href: "/en/guides/gourmet-hotels-berlin/" },
      { label: "Where are the spa hotels for two?", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Quiet hotels in the green", href: "/en/guides/steglitz/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BUSINESS ─────────────────────────
  {
    slug: "geschaeftsreisen-hotels-berlin",
    title: "Business travel hotels in Berlin: the best corporate addresses",
    description:
      "Business hotels in Berlin: meeting rooms, fast Wi-Fi, express check-in and the best transport links - the best hotels for business travellers.",
    kicker: "Hotel category · Business",
    intro: [
      "Business hotels in Berlin mostly sit in Mitte (Hauptbahnhof, Potsdamer Platz) or around the exhibition grounds in City West. Conference technology, express check-in, fast Wi-Fi and 24-hour service are standard.",
      "Here are the best addresses for business travellers - from the representative luxury address to the efficient house with good connections.",
    ],
    takeaways: [
      "Top business locations: Mitte (Hauptbahnhof/Potsdamer Platz) and City West near the fairground.",
      "What matters: meeting rooms, fast Wi-Fi, express check-in and proximity to transport.",
      "Representative meetings? Then a luxury house with a conference area.",
    ],
    bestFor: ["Business travellers", "Conferences & congresses", "Trade-fair visitors", "Frequent travellers"],
    categorySlug: "business-hotels",
    hotels: [
      "hotel-adlon-kempinski",
      "regent-berlin",
      "intercontinental-berlin",
      "park-inn-alexanderplatz",
      "hotel-amano-grand-central",
      "adina-apartment-hotel-mitte",
    ],
    sections: [
      {
        heading: "Which hotel works best for business travel?",
        body: [
          "For representative meetings and large conferences the InterContinental with its extensive congress capacity is first choice, as are the Adlon and the Regent in Mitte. If you want efficient and central, book the AMANO Grand Central by Hauptbahnhof or the Park Inn right at Alexanderplatz.",
        ],
      },
      {
        heading: "What matters in a business hotel?",
        body: [
          "Fast, reliable Wi-Fi, a desk, early breakfast, express check-in and short distances to rail and the fairground. For longer projects, aparthotels such as the Adina (with a kitchen) are practical and often cheaper.",
        ],
      },
      {
        heading: "Where do you stay best for the Berlin trade fair?",
        body: [
          "For the exhibition grounds by the Funkturm, City West (Charlottenburg) is ideal. For events in Mitte or by Hauptbahnhof you stay closest there; Lichtenberg offers cheap, well-connected alternatives.",
        ],
      },
    ],
    faq: [
      { q: "Which hotels have meeting rooms in Berlin?", a: "Large houses such as the InterContinental, Adlon, Regent and the Estrel (Germany's largest convention hotel) offer extensive conference and congress capacity." },
      { q: "What does a business hotel in Berlin cost?", a: "Solid business houses sit at €110–160 per night, representative luxury houses from around €240." },
      { q: "Which location is best for business trips?", a: "Mitte (Hauptbahnhof, Potsdamer Platz) for central meetings, City West for the trade fair, Lichtenberg for cheap, well-connected options." },
      { q: "Are there apartments for longer business stays?", a: "Yes - aparthotels such as the Adina or the Living Hotels offer a kitchen and living area, ideal from several nights on." },
    ],
    gygQuery: "Berlin Stadtrundfahrt",
    related: [
      { label: "Business hotels - all districts", href: "/en/categories/business-hotels/" },
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
      { label: "Hotels in Lichtenberg (cheap & connected)", href: "/en/guides/lichtenberg/" },
      { label: "Aparthotels in Berlin", href: "/en/categories/apartments/" },
    ],
    adjacent: [
      { label: "Which hotels have a shuttle service?", href: "/en/categories/hotels-with-shuttle/" },
      { label: "Where do you stay centrally in Berlin?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Hotel booking: tips for the best price", href: "/en/guides/hotel-buchungstipps/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── HISTORIC ─────────────────────────
  {
    slug: "historische-hotels-berlin",
    title: "Historic hotels in Berlin: staying with history",
    description:
      "Historic hotels in Berlin: houses with a past - from the Adlon by the Brandenburg Gate through the Hotel de Rome in an old bank to the Hotel Oderberger in a public bath.",
    kicker: "Hotel category · History",
    intro: [
      "Berlin's history can also be experienced from a hotel bed: grand hotels with more than a century of tradition, converted banks, former public baths and palaces. These houses tell the story of the city - and are worth seeing in themselves.",
      "Here are Berlin's most fascinating historic hotels, with the facts behind the walls.",
    ],
    takeaways: [
      "Berlin's historic hotels range from a grand hotel of 1907 to a public bath of 1902.",
      "Many combine original fabric with modern comfort.",
      "The supply is densest in Mitte and City West.",
    ],
    bestFor: ["History enthusiasts", "Architecture fans", "Culture travellers", "Special occasions"],
    hotels: [
      "hotel-adlon-kempinski",
      "hotel-de-rome",
      "hotel-bristol-berlin",
      "patrick-hellmann-schlosshotel",
      "hotel-oderberger",
      "soho-house-berlin",
    ],
    sections: [
      {
        heading: "Which historic hotels are worth it in Berlin?",
        body: [
          "The Hotel Adlon Kempinski (opened 1907, rebuilt on the same spot in 1997) is the most famous historic address, right by the Brandenburg Gate. The Hotel de Rome occupies the bank building of 1889 - with a pool in the former vault. The Hotel Bristol on the Ku'damm has received guests since 1952.",
        ],
      },
      {
        heading: "Which houses occupy special buildings?",
        body: [
          "The Hotel Oderberger in Prenzlauer Berg sits in the public bath of 1902 - with the pool preserved in the original hall. The Soho House uses a Bauhaus department store of 1928, the Patrick Hellmann Schlosshotel occupies Schloss Pannwitz of 1914. Staying here becomes a small journey through time.",
        ],
      },
      {
        heading: "Where are Berlin's historic hotels?",
        body: [
          "Mostly in Mitte (around Pariser Platz and Bebelplatz) and City West (Ku'damm), plus individual gems in Prenzlauer Berg and the green Grunewald.",
        ],
      },
    ],
    faq: [
      { q: "Which is Berlin's oldest hotel?", a: "Among the most tradition-rich is the Adlon (originally 1907). Many historic houses occupy even older buildings, such as the Hotel de Rome in a bank of 1889 or the Hotel Oderberger in the public bath of 1902." },
      { q: "Are historic hotels fitted out to modern standards?", a: "Yes - the houses named here combine original fabric with modern comfort, a spa and in some cases starred dining." },
      { q: "What does a historic hotel in Berlin cost?", a: "Depending on the house, between around €165 (Hotel Oderberger) and €480 (top suites at the Adlon)." },
      { q: "Can you visit the historic hotels without staying?", a: "The lobby, bar or restaurant is usually open to the public - a coffee in the Adlon lobby or a drink in the Bristol bar works without a room." },
    ],
    gygQuery: "Berlin Geschichte Tour",
    related: [
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Art and culture hotels", href: "/en/guides/kultur-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
      { label: "Hotels in Charlottenburg", href: "/en/guides/charlottenburg/" },
    ],
    adjacent: [
      { label: "Which hotels have a starred restaurant?", href: "/en/guides/gourmet-hotels-berlin/" },
      { label: "Where do I find art and culture hotels?", href: "/en/guides/kultur-hotels-berlin/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── HIDDEN GEMS ─────────────────────────
  {
    slug: "geheimtipp-hotels-berlin",
    title: "Hidden-gem hotels in Berlin: staying away from the crowds",
    description:
      "Hidden-gem hotels in Berlin: special houses off the tourist trail - from the caravan hotel in Neukölln to the scientific guest house in Dahlem.",
    kicker: "Hotel category · Hidden gems",
    intro: [
      "Away from the well-known addresses, Berlin hides genuine hotel gems: a caravan hotel in a factory hall, a guest house of the Max Planck Society, individually designed boutique houses in quiet neighbourhoods. If you are looking for unusual Berlin, you will find it here.",
      "Here are verified hidden gems - houses with character you will not find on every list.",
    ],
    takeaways: [
      "Hidden gems score with unusual concepts and quiet locations.",
      "Often owner-run, with themed rooms or unusual architecture.",
      "Ideal for Berlin regulars who already know the obvious.",
    ],
    bestFor: ["Berlin regulars", "Independent travellers", "Creatives", "The curious"],
    hotels: [
      "huettenpalast",
      "ackselhaus-blue-home",
      "myers-hotel",
      "harnack-haus",
      "axel-hotel-berlin",
      "hotel-oderberger",
    ],
    sections: [
      {
        heading: "Which unusual hotels does Berlin have?",
        body: [
          "The Hüttenpalast in Neukölln lets you sleep in vintage caravans and self-built cabins inside a former factory hall. The Harnack-Haus in Dahlem, built in 1929 as a conference house and today the guest house of the Max Planck Society, is a quiet, academically flavoured address - hardly any conventional tourist knows either.",
        ],
      },
      {
        heading: "Which boutique gems are worth it?",
        body: [
          "The Ackselhaus at Kollwitzplatz with individually designed themed rooms and a courtyard, Myer's Hotel in quiet Prenzlauer Berg with a garden, and the charming Hotel Oderberger in the historic public bath. If you want a hetero-friendly design hotel in queer Schöneberg, the Axel Hotel fits.",
        ],
      },
      {
        heading: "Where do you find the quiet gems?",
        body: [
          "In the residential quarters away from the hotspots: Prenzlauer Berg (Pankow), Dahlem (Steglitz-Zehlendorf), the residential streets of Neukölln and Schöneberg. You stay more quietly and more authentically there than in the tourist centres.",
        ],
      },
    ],
    faq: [
      { q: "What is Berlin's most unusual hotel?", a: "The Hüttenpalast in Neukölln, with rooms in caravans and cabins inside a factory hall, is among the city's most original concepts." },
      { q: "Where do you stay away from the tourists?", a: "In the residential quarters of Prenzlauer Berg, Dahlem, Neukölln and Schöneberg - quieter, more personal and often cheaper than Mitte." },
      { q: "Are hidden-gem hotels more expensive?", a: "Not necessarily - the range runs from the affordable Hüttenpalast to upmarket boutique houses. Character exists in every price bracket." },
      { q: "Are hidden gems worth it on a first visit to Berlin?", a: "If you want to stay centrally and conventionally, Mitte suits you better. Hidden gems pay off for returning and independent travellers." },
    ],
    gygQuery: "Berlin Geheimtipps Tour",
    related: [
      { label: "Boutique hotels with charm", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Affordable hotels in Neukölln", href: "/en/guides/neukoelln/" },
      { label: "Quiet hotels in Steglitz-Zehlendorf", href: "/en/guides/steglitz/" },
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which boutique hotels are worth it?", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Where do I find cheap, creative places to stay?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Hotels near Berlin's nightlife", href: "/en/guides/berliner-nachtleben-hotels/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ROOFTOP ─────────────────────────
  {
    slug: "rooftop-bars-hotels-berlin",
    title: "Hotels with a rooftop bar in Berlin: above the city's roofs",
    description:
      "Hotels with a rooftop bar in Berlin: the best roof terraces with panoramic views - from the Monkey Bar at the 25hours to Bar Lang at the Waldorf Astoria.",
    kicker: "Hotel category · Rooftop",
    intro: [
      "Berlin from above: several hotels have roof bars with panoramic views over the Tiergarten, City West or Berlin Cathedral. Some are for hotel guests only, but many are open to the public - ideal for a sundowner.",
      "Here are the houses with the best rooftop bars and roof terraces - all with verified rooftop highlights.",
    ],
    takeaways: [
      "The most spectacular roof bars: the Monkey Bar (25hours) and Bar Lang on the 31st floor (Waldorf Astoria).",
      "Many rooftop bars are accessible without staying overnight.",
      "Best time for the view: sunset on a warm evening.",
    ],
    bestFor: ["View seekers", "Couples", "Sundowner lovers", "Photographers"],
    hotels: [
      "25hours-hotel-bikini",
      "waldorf-astoria-berlin",
      "hotel-zoo-berlin",
      "hotel-amano-grand-central",
      "hotel-de-rome",
      "park-inn-alexanderplatz",
    ],
    sections: [
      {
        heading: "Which hotels have the best rooftop bars in Berlin?",
        body: [
          "The most famous is the Monkey Bar at the 25hours Hotel Bikini with panoramic views over the Tiergarten, the zoo and the Gedächtniskirche. Bar Lang at the Waldorf Astoria goes even higher, on the 31st floor. The Hotel Zoo has the stylish Grace roof bar on the Ku'damm.",
        ],
      },
      {
        heading: "Which other roof terraces are worth it?",
        body: [
          "The AMANO Grand Central runs a busy roof bar overlooking Hauptbahnhof, and the Hotel de Rome a roof terrace facing Berlin Cathedral. At Alexanderplatz the Park Inn offers a viewing platform on the roof - including the base-flying experience.",
        ],
      },
      {
        heading: "Are the rooftop bars open to the public?",
        body: [
          "Many are - the Monkey Bar, the Grace and the AMANO roof bar can be visited without staying (at weekends sometimes with queues or a reservation). Some roof terraces are reserved for hotel guests; when in doubt, ask the property in advance.",
        ],
      },
    ],
    faq: [
      { q: "Which rooftop bar in Berlin has the best view?", a: "The Monkey Bar at the 25hours Bikini (over the Tiergarten and zoo) and Bar Lang at the Waldorf Astoria on the 31st floor (over all of City West) are among the best." },
      { q: "Can you visit the hotel roof bars without a room?", a: "Many yes - the Monkey Bar, the Grace and the AMANO roof bar are public. At weekends a reservation is worthwhile." },
      { q: "When is the best time for a rooftop bar?", a: "At sunset on a warm evening. In summer the terraces fill up nicely in the evening." },
      { q: "Which hotels with a roof bar are central?", a: "The AMANO by Hauptbahnhof, the de Rome on Bebelplatz and the Park Inn at Alexanderplatz are very central; the 25hours and Hotel Zoo sit in City West." },
    ],
    gygQuery: "Berlin Skyline Aussicht",
    related: [
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
      { label: "Hotels near Berlin's nightlife", href: "/en/guides/berliner-nachtleben-hotels/" },
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Hotels in Charlottenburg / City West", href: "/en/guides/charlottenburg/" },
    ],
    adjacent: [
      { label: "Which hotels sit close to Berlin's nightlife?", href: "/en/guides/berliner-nachtleben-hotels/" },
      { label: "Where do I find romantic hotels with a view?", href: "/en/guides/romantische-hotels-berlin/" },
      { label: "Design hotels with architectural ambition", href: "/en/guides/design-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── SUSTAINABLE ─────────────────────────
  {
    slug: "nachhaltige-hotels-berlin",
    title: "Sustainable hotels in Berlin: travelling greener in the capital",
    description:
      "Sustainable hotels in Berlin: what to look for in green places to stay - certificates, energy, regional cuisine - and which houses are credible.",
    kicker: "Hotel category · Sustainability",
    intro: [
      "Travelling greener matters in Berlin too. Sustainable hotels rely on green electricity, water saving, regional and organic cuisine, waste separation and fair working conditions - ideally backed by an independent certificate.",
      "Here is how to recognise a credibly sustainable house, plus Berlin hotels with traceable green approaches.",
    ],
    takeaways: [
      "Credible sustainability shows in independent certificates, not marketing phrases.",
      "Look for green electricity, water-saving fittings, regional cuisine and waste separation.",
      "When in doubt, ask directly about specific measures and evidence.",
    ],
    bestFor: ["Environmentally aware travellers", "Slow-travel fans", "Families", "Long-stay guests"],
    hotels: [
      "hotel-amano-grand-central",
      "25hours-hotel-bikini",
      "hotel-indigo-alexanderplatz",
      "circus-hotel",
    ],
    sections: [
      {
        heading: "How do you recognise a genuinely sustainable hotel?",
        body: [
          "By traceable facts rather than green phrases: independent certificates (e.g. GreenSign, Green Key, EU Ecolabel), green electricity, water-saving fittings, consistent waste separation, regional and seasonal cuisine and fair working conditions. Do ask specifically - serious houses answer openly.",
        ],
      },
      {
        heading: "Which Berlin hotels pursue green approaches?",
        body: [
          "Several owner-run and concept-driven houses take resource use seriously - the Circus Hotel (its own brewery, short supply chains, local partners) or design houses such as the AMANO and the 25hours with a focus on regional dining. Since standards and certificates change, it is worth checking the property's current statements before booking.",
        ],
      },
      {
        heading: "How do you travel more sustainably in Berlin overall?",
        body: [
          "Berlin is superbly served by public transport - skip the rental car and use the U-Bahn, S-Bahn, trams and rental bikes. Choose a central hotel to keep distances short, and support local restaurants rather than international chains.",
        ],
        bullets: [
          "Get around by public transport and rental bike instead of by car.",
          "Stay centrally to reduce travel distances.",
          "Favour regional restaurants and markets.",
        ],
      },
    ],
    faq: [
      { q: "Which sustainability certificates are credible?", a: "Recognised ones include GreenSign, Green Key, the EU Ecolabel and Viabono. They assess energy, water, waste and management against fixed criteria." },
      { q: "Are sustainable hotels more expensive?", a: "Not necessarily - many green measures lower operating costs. Prices mostly sit within the normal range for their category." },
      { q: "How do I spot greenwashing?", a: "By vague claims without evidence (a towel notice and nothing else). Serious houses name specific measures and independent certificates." },
      { q: "What is the most environmentally friendly way to reach Berlin?", a: "By train rather than plane, and on the ground consistently by public transport and rental bike. Berlin is well set up for it." },
    ],
    gygQuery: "Berlin Fahrradtour",
    related: [
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
      { label: "Boutique hotels with charm", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Central hotels in Berlin", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "All hotel categories", href: "/en/categories/" },
    ],
    adjacent: [
      { label: "Which hotels are especially central?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Where do I find charming, owner-run houses?", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Family-friendly hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── CENTRAL ─────────────────────────
  {
    slug: "zentrale-hotels-berlin",
    title: "Central hotels in Berlin: staying in the heart of the city",
    description:
      "Central hotels in Berlin: the best houses within walking distance of the Brandenburg Gate, Museum Island and Alexanderplatz - for every budget.",
    kicker: "Hotel category · Central location",
    intro: [
      "If you are visiting Berlin for the first time or have little time, stay centrally: from Mitte you reach the Brandenburg Gate, Museum Island, the Reichstag and Alexanderplatz on foot or with a few minutes on the U-Bahn.",
      "Central does not automatically mean expensive - the range runs from the luxury house on Pariser Platz to the affordable three-star house at the Alex. Here are the best central addresses.",
    ],
    takeaways: [
      "The most central location is Mitte - around Pariser Platz, Gendarmenmarkt and Alexanderplatz.",
      "Staying centrally saves travel time and cost when sightseeing intensively.",
      "There are central houses for every budget - from €65 to €480 per night.",
    ],
    bestFor: ["First-time visitors", "Short breaks", "Sightseeing fans", "Travellers without a car"],
    hotels: [
      "hotel-adlon-kempinski",
      "regent-berlin",
      "hotel-amano-grand-central",
      "the-mandala-hotel",
      "h2-hotel-alexanderplatz",
      "park-inn-alexanderplatz",
    ],
    sections: [
      {
        heading: "Where is the most central location in Berlin?",
        body: [
          "In Mitte: around Pariser Platz, Gendarmenmarkt and Unter den Linden you are in the middle of the historic centre, and at Alexanderplatz in the transport hub with every U-Bahn and S-Bahn line. From both points you reach almost all the major sights within minutes.",
        ],
      },
      {
        heading: "Which central hotels suit which budget?",
        body: [
          "Pure luxury by the Brandenburg Gate: the Adlon. Classic on Gendarmenmarkt: the Regent. Suites at Potsdamer Platz: the Mandala. Design-led by Hauptbahnhof: the AMANO. Budget-conscious and right at Alexanderplatz: the H2 Hotel (from around €65) and the large Park Inn.",
        ],
      },
      {
        heading: "Is a central location really worth it?",
        body: [
          "If you want to see a lot: yes. You save travel time every day and can comfortably return to the hotel at midday. If you are travelling by train anyway or looking for quiet, staying slightly further out and saving money also works.",
        ],
      },
    ],
    faq: [
      { q: "Which district is the most central?", a: "Mitte - it holds most of the sights and the key transport hubs (Hauptbahnhof, Alexanderplatz, Friedrichstraße)." },
      { q: "What does a central hotel in Berlin cost?", a: "From around €65 for three-star houses at Alexanderplatz to €480 for top suites by the Brandenburg Gate." },
      { q: "Is Alexanderplatz noisy?", a: "The Alex is a busy transport hub and rowdier at night than the quieter corners around Gendarmenmarkt. In return the connections are unbeatable and prices more moderate." },
      { q: "Stay centrally or more cheaply on the outskirts?", a: "For short breaks with a full programme, central pays off; for longer, relaxed stays a slightly cheaper outer district with good transport can make sense." },
    ],
    gygQuery: "Berlin Highlights Tour",
    related: [
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels are ideal for first-time visitors?", href: "/en/guides/mitte/" },
      { label: "Where do I find cheap, central hotels?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Business travel hotels in Berlin", href: "/en/guides/geschaeftsreisen-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── CULTURE ─────────────────────────
  {
    slug: "kultur-hotels-berlin",
    title: "Culture hotels in Berlin: staying for art and culture fans",
    description:
      "Culture hotels in Berlin: houses with art, music and culture built into the concept - near Museum Island, galleries and theatres, from Mitte to Friedrichshain.",
    kicker: "Hotel category · Culture",
    intro: [
      "Berlin is a capital of culture - and some hotels make art and culture part of the experience: with their own gallery, recording studio, cinema, live music or a location right by the major museums and theatres.",
      "Here are the houses that suit art and culture fans particularly well - close to Museum Island, galleries and stages.",
    ],
    takeaways: [
      "Culture hotels tie art, music or history into the stay.",
      "Best locations: Mitte (Museum Island, theatres) and Friedrichshain (galleries, music).",
      "Many houses work with local artists or show their own collections.",
    ],
    bestFor: ["Art fans", "Museum visitors", "Music lovers", "Theatregoers"],
    hotels: [
      "hotel-de-rome",
      "soho-house-berlin",
      "orania-berlin",
      "nhow-berlin",
      "hotel-zoo-berlin",
      "michelberger-hotel",
    ],
    sections: [
      {
        heading: "Which hotels suit culture travellers?",
        body: [
          "For museum proximity the Hotel de Rome on Bebelplatz is ideal - Museum Island, the Staatsoper and the Humboldt Forum are all on foot. If you love music, book the nhow on the Spree with its own recording studios or the Orania with live concerts in the salon. The Soho House brings its own note with an in-house cinema and members' culture.",
        ],
      },
      {
        heading: "Which houses put art at the centre themselves?",
        body: [
          "Several Berlin hotels work with local artists or show art in-house - from the Berlin-themed design at the Hotel Indigo to the creative, curated atmosphere at the Michelberger. The Hotel Zoo combines restored period architecture with modern design.",
        ],
      },
      {
        heading: "Where do you stay best for Berlin's museums?",
        body: [
          "In Mitte around Museum Island and Unter den Linden - from there you reach the Pergamonmuseum, the Neues Museum, the Alte Nationalgalerie and the major stages on foot. For the contemporary gallery and off scene, Friedrichshain-Kreuzberg is the more interesting base.",
        ],
      },
    ],
    faq: [
      { q: "Which hotel is closest to Museum Island?", a: "Houses in Mitte around Bebelplatz and Unter den Linden - such as the Hotel de Rome - are within walking distance of Museum Island." },
      { q: "Are there hotels with their own art collection?", a: "Some Berlin houses show art in-house or work with local artists. Ask the hotel about current exhibitions or tours." },
      { q: "Which hotel suits music fans?", a: "The nhow Berlin with recording studios you can rent, and the Orania with live music in the salon." },
      { q: "Where do you stay for theatre and opera?", a: "In Mitte near Gendarmenmarkt (Konzerthaus), Bebelplatz (Staatsoper) and Friedrichstraße - all within walking distance." },
    ],
    gygQuery: "Berlin Museumsinsel Tickets",
    related: [
      { label: "Historic hotels in Berlin", href: "/en/guides/historische-hotels-berlin/" },
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
      { label: "Discover Museum Island", href: "/en/attractions/museumsinsel/" },
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
    ],
    adjacent: [
      { label: "Which hotels have a history of their own?", href: "/en/guides/historische-hotels-berlin/" },
      { label: "Where do I find design hotels with an art angle?", href: "/en/guides/design-hotels-berlin/" },
      { label: "3 days in Berlin - culture highlights", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── GOURMET ─────────────────────────
  {
    slug: "gourmet-hotels-berlin",
    title: "Gourmet hotels in Berlin: staying with starred cuisine",
    description:
      "Gourmet hotels in Berlin: houses with a starred restaurant - from the Lorenz Adlon Esszimmer through FACIL at the Mandala to Hugos at the InterContinental.",
    kicker: "Hotel category · Gourmet",
    intro: [
      "Berlin has a surprisingly dense starred restaurant scene - and some of the best sit inside hotels. If you travel for food, stay where the Michelin stars belong to the house.",
      "Here are the Berlin hotels with top kitchens of their own, naming the restaurants and their verified accolades.",
    ],
    takeaways: [
      "Several Berlin hotels run restaurants with two Michelin stars.",
      "Top addresses: Lorenz Adlon Esszimmer, FACIL (Mandala), Hugos (InterContinental).",
      "Most gourmet hotels sit in Mitte and City West.",
    ],
    bestFor: ["Food lovers", "Couples", "Special occasions", "Culinary travellers"],
    hotels: [
      "hotel-adlon-kempinski",
      "the-mandala-hotel",
      "intercontinental-berlin",
      "hotel-de-rome",
      "regent-berlin",
      "orania-berlin",
    ],
    sections: [
      {
        heading: "Which Berlin hotels have a starred restaurant?",
        body: [
          "At the Adlon, the Lorenz Adlon Esszimmer cooks at two Michelin stars; at the Mandala on Potsdamer Platz, FACIL likewise at two stars; at the InterContinental, Hugos on the 14th floor at two stars. Three of the city's most renowned starred addresses therefore sit inside hotels.",
        ],
      },
      {
        heading: "Which hotels score with in-house dining?",
        body: [
          "The Hotel de Rome offers Italian cuisine at La Banca and a roof terrace with a cathedral view, the Regent has Charlotte & Fritz on Gendarmenmarkt. The Orania in Kreuzberg combines three-continent cuisine with live music. So a stay and a top dinner can happen under one roof.",
        ],
      },
      {
        heading: "Do you have to stay at the hotel to eat there?",
        body: [
          "No - hotel restaurants are generally open to outside guests too. For the starred addresses, book well in advance, especially at weekends.",
        ],
      },
    ],
    faq: [
      { q: "Which hotel restaurant in Berlin has the most stars?", a: "Several hotel restaurants hold two Michelin stars, among them the Lorenz Adlon Esszimmer, FACIL at the Mandala and Hugos at the InterContinental." },
      { q: "Can outside guests eat in the hotel restaurant?", a: "Yes, hotel restaurants are generally open to the public. For starred restaurants a reservation is strongly recommended." },
      { q: "What does a gourmet hotel in Berlin cost?", a: "The houses in question sit in the luxury segment from around €240–290 per night; the tasting menu is charged separately." },
      { q: "Where are the gourmet hotels?", a: "Predominantly in Mitte (Pariser Platz, Potsdamer Platz, Gendarmenmarkt) and City West (Tiergarten/Budapester Straße)." },
    ],
    gygQuery: "Berlin Food Tour",
    related: [
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Romantic hotels for couples", href: "/en/guides/romantische-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/en/guides/mitte/" },
      { label: "Historic hotels in Berlin", href: "/en/guides/historische-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels suit a weekend for two?", href: "/en/guides/romantische-hotels-berlin/" },
      { label: "Where are the luxury hotels with a spa?", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Hotels with a rooftop bar and a view", href: "/en/guides/rooftop-bars-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ACCESSIBLE ─────────────────────────
  {
    slug: "barrierefreie-hotels-berlin",
    title: "Accessible hotels in Berlin: staying without barriers",
    description:
      "Accessible hotels in Berlin: what to check for wheelchair-accessible rooms and which houses are suitable - plus tips on booking and getting around.",
    kicker: "Hotel category · Accessibility",
    intro: [
      "Accessible travel needs good planning. Many Berlin hotels offer wheelchair-accessible or low-barrier rooms - but the actual fittings (door widths, level-access shower, emergency call, lift) vary a great deal and should be clarified bindingly before booking.",
      "Here is what matters, plus houses that lend themselves to an accessible stay through their size, location and fittings.",
    ],
    takeaways: [
      "Accessibility is not a uniform standard - always check the actual fittings in advance.",
      "Key points: door widths, level-access shower, lift, emergency call and step-free entry.",
      "Large, modern houses more often have certified accessible rooms.",
    ],
    bestFor: ["Travellers with reduced mobility", "Senior travellers", "Wheelchair users", "Groups with specific needs"],
    hotels: [
      "adina-apartment-hotel-mitte",
      "park-inn-alexanderplatz",
      "estrel-berlin",
      "hotel-berlin-berlin",
      "intercontinental-berlin",
    ],
    sections: [
      {
        heading: "What should you check in an accessible hotel?",
        body: [
          "The concrete details: step-free entry, sufficiently wide doors, a spacious bathroom with a level-access shower and grab rails, a reachable lift and an emergency call system. Because terms like \"accessible\" are interpreted differently, have the fittings of the specific room confirmed in writing before booking.",
        ],
      },
      {
        heading: "Which hotels suit accessible travel?",
        body: [
          "Large, modern houses more often have certified wheelchair-accessible rooms - for instance the Park Inn and the Estrel (very large houses with low-barrier rooms), the long-established Hotel Berlin, Berlin or the InterContinental. Aparthotels such as the Adina offer space and level-access bathrooms, which can make travelling with aids easier. Please confirm exact suitability directly with the property.",
        ],
      },
      {
        heading: "How accessible is Berlin overall?",
        body: [
          "Public transport is largely equipped: many U-Bahn and S-Bahn stations have lifts and buses are low-floor. The BVG provides a current overview of accessible stations. Still plan the routes between hotel and sights in advance, since not every station is step-free.",
        ],
      },
    ],
    faq: [
      { q: "Which hotels in Berlin have wheelchair-accessible rooms?", a: "Above all large, modern houses (e.g. Park Inn, Estrel, InterContinental) and many chain hotels. The actual fittings vary - always clarify door widths, bathroom and access with the hotel before booking." },
      { q: "What exactly does accessible mean?", a: "There is no uniform standard. Look for concrete features such as step-free entry, wide doors, a level-access shower, grab rails, a lift and an emergency call - and have them confirmed." },
      { q: "Is Berlin's public transport accessible?", a: "Largely yes: many stations have lifts and buses are low-floor. The BVG offers an overview of accessible stations. Some stations are not yet step-free." },
      { q: "Is an aparthotel worth it for accessible travel?", a: "Often yes - apartments offer more space and sometimes level-access bathrooms. Still check the fittings of the specific room." },
    ],
    gygQuery: "Berlin barrierefreie Stadtrundfahrt",
    related: [
      { label: "Business travel hotels in Berlin", href: "/en/guides/geschaeftsreisen-hotels-berlin/" },
      { label: "Central hotels in Berlin", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Aparthotels in Berlin", href: "/en/categories/apartments/" },
      { label: "Family-friendly hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels have apartments with kitchens?", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Where do you stay centrally and well connected?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Hotel booking: tips for the best price", href: "/en/guides/hotel-buchungstipps/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── NIGHTLIFE ─────────────────────────
  {
    slug: "berliner-nachtleben-hotels",
    title: "Hotels near Berlin's nightlife: staying where the party is",
    description:
      "Hotels near Berlin's nightlife: houses by the clubs, bars and corner shops of Friedrichshain, Kreuzberg and City West - plus tips for night owls.",
    kicker: "Hotel category · Nightlife",
    intro: [
      "Berlin is a world capital of the night. If you want to experience the clubs, bars and legendary party culture, stay where the nightlife pulses - above all in Friedrichshain and Kreuzberg, with a short walk home.",
      "Here are hotels near the scene, with their own bar or roof terrace, plus tips for relaxed nights out.",
    ],
    takeaways: [
      "Nightlife concentrates in Friedrichshain, Kreuzberg and Neukölln.",
      "Hotels with their own bar or roof terrace extend the evening comfortably.",
      "If you want to party and still sleep, pick a house slightly off the loudest streets.",
    ],
    bestFor: ["Night owls", "Clubbers", "Young travellers", "Groups"],
    hotels: [
      "michelberger-hotel",
      "nhow-berlin",
      "orania-berlin",
      "schulz-hotel",
      "hotel-amano-grand-central",
      "hotel-zoo-berlin",
    ],
    sections: [
      {
        heading: "Where do you stay near Berlin's nightlife?",
        body: [
          "At the centre of the scene: Friedrichshain around Warschauer Straße and the RAW grounds, and Kreuzberg. The Michelberger Hotel opposite the Mercedes-Benz Arena and the nhow on the Spree sit right in it; the Schulz Hotel on the East Side Gallery is affordable and central for clubbing. The Orania offers live music in its own salon.",
        ],
      },
      {
        heading: "Which hotels have a good bar of their own?",
        body: [
          "If you want to start or end the evening in-house: the AMANO Grand Central has a busy roof bar, the Hotel Zoo the stylish Grace roof bar. That keeps you entertained without a club tour - and the way to bed is short.",
        ],
      },
      {
        heading: "How do you party in Berlin comfortably with a hotel?",
        body: [
          "Pick a house within walking distance of the clubs but not on the loudest junction, so you can sleep too. Berlin's transit runs through the night at weekends (night S-Bahn and U-Bahn), and taxis and ride-sharing are available as well - so you always get back safely.",
        ],
      },
    ],
    faq: [
      { q: "Which district has the strongest nightlife in Berlin?", a: "Friedrichshain (Warschauer Straße, RAW grounds) and Kreuzberg, plus parts of Neukölln and Mitte. Most clubs and bars sit there." },
      { q: "Which hotels are closest to the clubs?", a: "Houses in Friedrichshain such as the Michelberger and the nhow, plus the Schulz Hotel on the East Side Gallery, are ideal for night owls." },
      { q: "Does Berlin transit run at night?", a: "At weekends the U-Bahn and S-Bahn run through; midweek night buses take over. Taxis and ride-sharing are available around the clock." },
      { q: "Can you party and still sleep well?", a: "Yes - pick a house within walking distance of the scene but on a quieter side street, and look for soundproofed rooms." },
    ],
    gygQuery: "Berlin Pub Crawl",
    related: [
      { label: "Boutique hotels in Friedrichshain-Kreuzberg", href: "/en/guides/friedrichshain/" },
      { label: "Hotels with a rooftop bar", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "Affordable hotels in Neukölln", href: "/en/guides/neukoelln/" },
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels have the best roof bars?", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "Where do I find cheap, central hotels?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Boutique hotels with character", href: "/en/guides/boutique-hotels-berlin-charme/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BOOKING TIPS ─────────────────────────
  {
    slug: "hotel-buchungstipps",
    title: "Booking a hotel in Berlin: tips for the best price",
    description:
      "Booking a hotel in Berlin: when to book, where to save, what to check on location and cancellation terms - practical tips for the best booking in Berlin.",
    kicker: "Guide · Booking",
    intro: [
      "Finding a good hotel in Berlin at a fair price is mostly a question of timing and location. A few simple rules save real money - without compromising on quality or connections.",
      "Here are the key booking tips: when to book most cheaply, what to check on location and how to avoid nasty surprises.",
    ],
    takeaways: [
      "Hotels in Berlin are cheapest midweek and in the off season.",
      "Trade fairs and major events push prices up - check the dates and book early.",
      "Look beyond the price at location, transport links and cancellation terms.",
    ],
    bestFor: ["Price-conscious travellers", "First-time visitors", "Planners", "Flexible travellers"],
    hotels: [],
    sections: [
      {
        heading: "When is the cheapest time to book a hotel in Berlin?",
        body: [
          "In the off season (November to February, outside Christmas, New Year and public holidays) and midweek. Weekends and summer are more expensive; trade fairs and major events push prices up city-wide. If you are flexible, compare several dates and book counter-cyclically.",
        ],
        bullets: [
          "Off season: winter (except holidays) is cheapest.",
          "Tuesday to Thursday rather than the weekend.",
          "Avoid fair dates (e.g. IFA, ITB) and holidays, or book early.",
        ],
      },
      {
        heading: "What should you look for in the location?",
        body: [
          "Proximity to your destinations and to public transport. If you plan a lot of sightseeing, a central location in Mitte works best. If you want to save, choose a well-connected outer district - a hotel right at a U-Bahn or S-Bahn station saves time and nerves. Our district guides help with the choice.",
        ],
      },
      {
        heading: "How do you avoid nasty surprises?",
        body: [
          "Read recent guest reviews, check the cancellation terms (flexible vs non-refundable) and watch for hidden costs such as the city tax (Berlin levies an overnight tax) and breakfast prices. Clarify special requests - a pet, an accessible room, an early arrival - directly with the hotel in advance.",
        ],
      },
      {
        heading: "Is it better to book through a platform or directly?",
        body: [
          "Comparison portals give you a quick overview of prices and availability. Our maps show live Booking.com prices per district. When booking direct, some houses grant small extras (an upgrade, late check-out) - a quick comparison is worth it.",
        ],
      },
    ],
    faq: [
      { q: "How far in advance should you book a hotel in Berlin?", a: "For normal periods a few weeks is often enough. Around trade fairs, holidays and in high summer, book several months ahead to secure choice and good prices." },
      { q: "Is there an overnight tax in Berlin?", a: "Yes, Berlin levies a city tax on overnight stays (a percentage of the room rate). Business travellers may be exempt under certain conditions - check the current rules." },
      { q: "Book breakfast or eat out?", a: "In central locations there are often cheaper and better breakfast cafés nearby. In outer districts, or with an early start, hotel breakfast can be more convenient." },
      { q: "Flexible or non-refundable?", a: "Non-refundable rates are cheaper but risky if plans are uncertain. If your trip is still moving, the flexible rate is usually worth the small premium." },
    ],
    gygQuery: "Berlin Welcome Card",
    related: [
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Central hotels in Berlin", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "All districts at a glance", href: "/en/districts/" },
      { label: "All hotel categories", href: "/en/categories/" },
    ],
    adjacent: [
      { label: "Which district is the best to stay in?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Where do I find the cheapest hotels?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },
];
