import type { Article } from "../../articles";

/**
 * English editions of the district guides.
 * -----------------------------------------
 * Same slugs as the German originals (src/data/articles/districts.ts), served
 * under /en/guides/<slug>/. The German pages keep their exact legacy WP URLs
 * for ranking reasons - the English versions are new routes, so they live in a
 * clean /en/ namespace.
 *
 * Internal links point at the English routes (/en/districts/, /en/categories/,
 * /en/attractions/, /en/itineraries/, /en/guides/).
 */

const PUB = "2024-02-01";
const MOD = "2026-08-04";

export const districtArticlesEn: Article[] = [
  // ───────────────────────── CHARLOTTENBURG ─────────────────────────
  {
    slug: "charlottenburg",
    title: "Hotels in Charlottenburg: elegance in western Berlin",
    description:
      "Hotels in Charlottenburg: long-established 4- and 5-star houses on Kurfürstendamm, quiet boutique hotels around Savignyplatz and fair-value City West options.",
    kicker: "District guide · City West",
    intro: [
      "Charlottenburg is elegant West Berlin: Kurfürstendamm, Savignyplatz, KaDeWe and Charlottenburg Palace all sit close together. If you want style, shopping and short walks to classical culture, no district serves you better.",
      "The hotel landscape runs from historic grand hotels through design houses in period buildings to fair three-star properties with a good breakfast. Here are the verified houses that convince us - and exactly where they sit.",
    ],
    takeaways: [
      "Charlottenburg-Wilmersdorf has Berlin's densest selection of long-established 4- and 5-star hotels.",
      "The best locations: directly on the Ku'damm, around Savignyplatz and near Bahnhof Zoo.",
      "Solid City West properties with breakfast start at around €95 per night.",
    ],
    bestFor: ["Discerning travellers", "Shopping & classical culture", "Business travellers", "First-time visitors (west)"],
    districtSlug: "charlottenburg-wilmersdorf",
    categorySlug: "luxushotels",
    hotels: [
      "hotel-bristol-berlin",
      "hotel-zoo-berlin",
      "waldorf-astoria-berlin",
      "sir-savigny-hotel",
      "hotel-q-berlin",
      "hampton-by-hilton-city-west",
    ],
    sections: [
      {
        heading: "What makes Charlottenburg special as a hotel base?",
        body: [
          "Charlottenburg is the most elegant and the calmest of the central western districts. You stay between Kurfürstendamm and Savignyplatz - shopping, cafés and the Philharmonie are within walking distance, while the bustle of Mitte stays comfortably far away.",
          "Transport in City West is excellent: Bahnhof Zoo (regional, S-Bahn and U-Bahn) and the U-Bahn stations along the Ku'damm get you to Mitte in 15–20 minutes. For a first Berlin visit with a taste for comfort, this is an ideal base.",
        ],
      },
      {
        heading: "Which Charlottenburg hotels are genuinely worth it?",
        body: [
          "For classic grand-hotel style there is no way past the Hotel Bristol Berlin on the Ku'damm and the Waldorf Astoria in the 32-storey glass tower by the Gedächtniskirche. For something more design-driven, stay at the Hotel Zoo (with its Grace rooftop bar) or the architecturally playful Hotel Q!.",
          "If you prefer something more personal and slightly cheaper, the Sir Savigny on a quiet side street is a good fit. Fair City West pricing with a hot breakfast comes from the Hampton by Hilton.",
        ],
      },
      {
        heading: "Are the hotels easy to reach by public transport?",
        body: [
          "Yes. Around Bahnhof Zoo, regional trains, the S-Bahn ring and several U-Bahn lines meet - from here you reach Mitte, Hauptbahnhof and BER airport without stressful changes. Most of the houses in this guide sit no more than a ten-minute walk from a station.",
        ],
      },
      {
        heading: "What is there to do around the hotels?",
        body: [
          "Right on the doorstep: Kurfürstendamm for shopping, KaDeWe and the Kaiser Wilhelm Memorial Church. On foot or within a few minutes you also reach Charlottenburg Palace, the Olympiastadion and the Tiergarten.",
        ],
      },
    ],
    faq: [
      {
        q: "What kind of hotels does Charlottenburg have?",
        a: "The focus is on long-established 4- and 5-star houses and design hotels, plus a few solid three-star properties for mid-range budgets. Pure hostels are rarer than in eastern Berlin.",
      },
      {
        q: "Is Charlottenburg suitable for families?",
        a: "Yes - the area is quiet and safe, with the Tiergarten, the zoo and Charlottenburg Palace within reach. Family rooms are mostly found in the larger houses; for a broader family selection, look at Pankow.",
      },
      {
        q: "How much does a hotel in Charlottenburg cost?",
        a: "Solid three-star houses start around €95 per night, upmarket four-star hotels around €165, and the grand hotels on the Ku'damm from €240 upwards.",
      },
      {
        q: "Does Charlottenburg work for business trips?",
        a: "Very well. Proximity to the exhibition grounds, fast connections and plenty of business-capable houses (InterContinental, Waldorf Astoria, Hampton by Hilton) make City West the classic business address.",
      },
    ],
    gygQuery: "Charlottenburg Berlin",
    related: [
      { label: "All hotels in Charlottenburg-Wilmersdorf", href: "/en/districts/charlottenburg-wilmersdorf/" },
      { label: "Luxury hotels in Berlin compared", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Design hotels in Berlin", href: "/en/guides/design-hotels-berlin/" },
      { label: "Discover Charlottenburg Palace", href: "/en/attractions/schloss-charlottenburg/" },
      { label: "Kurfürstendamm & KaDeWe", href: "/en/attractions/kurfuerstendamm/" },
    ],
    adjacent: [
      { label: "Where should you stay in Berlin on a first visit?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Which hotels have the best rooftop bars?", href: "/en/guides/rooftop-bars-hotels-berlin/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── FRIEDRICHSHAIN ─────────────────────────
  {
    slug: "friedrichshain",
    title: "Boutique hotels in Friedrichshain-Kreuzberg: alternative Berlin",
    description:
      "Boutique and design hotels in Friedrichshain-Kreuzberg: individual houses by the East Side Gallery, the Spree and the RAW grounds - Berlin's most creative district to stay in.",
    kicker: "District guide · East Berlin",
    intro: [
      "Friedrichshain-Kreuzberg is Berlin's creative epicentre: the East Side Gallery, Mercedes-Benz Arena, the RAW grounds and Markthalle Neun define the neighbourhood. Instead of hotel chains, individual boutique and design houses dominate.",
      "If you want nightlife, street art and riverside atmosphere and can do without marble lobbies, this district holds the most interesting places to sleep in the city - here are the verified ones.",
    ],
    takeaways: [
      "Friedrichshain-Kreuzberg is Berlin's boutique and design mecca - hardly any interchangeable chains.",
      "Prime locations: right on the East Side Gallery, along the Spree and around Warschauer Straße.",
      "Ideal for night owls, creatives and anyone after the real, unpolished Berlin.",
    ],
    bestFor: ["Boutique lovers", "Night owls", "Creatives", "Younger travellers"],
    districtSlug: "friedrichshain-kreuzberg",
    categorySlug: "boutique-hotels",
    hotels: ["michelberger-hotel", "nhow-berlin", "orania-berlin", "schulz-hotel"],
    sections: [
      {
        heading: "Why stay in Friedrichshain-Kreuzberg?",
        body: [
          "Because no other district stands so completely for young, creative Berlin. You stay between galleries, corner shops, clubs and the riverbank - and the U1/U3 and S-Bahn still put you in Mitte quickly.",
          "Almost every hotel here is owner-run or built around a concept: converted industrial buildings, in-house recording studios, rooftop saunas, live music. This is staying somewhere with character rather than in a standard room.",
        ],
      },
      {
        heading: "Which boutique hotels are the best?",
        body: [
          "The Michelberger Hotel opposite the Mercedes-Benz Arena is a genuine Berlin design icon - with a rooftop sauna and a seasonal restaurant. The nhow Berlin right on the Spree is Europe's first music hotel, with recording studios guests can rent.",
          "For a step up in luxury, book the Orania.Berlin on Oranienplatz with its live concerts in the salon. Budget-conscious travellers stay at the Schulz Hotel directly on the East Side Gallery.",
        ],
      },
      {
        heading: "How loud is it at night - and who should avoid it?",
        body: [
          "Around Warschauer Straße and the RAW grounds there is a lot going on at night; that is part of the appeal but no good for light sleepers. If you want to be near the scene without lying in the noise, pick a house towards southern Kreuzberg (Bergmannkiez) or facing the Spree.",
        ],
      },
      {
        heading: "What should you see in the neighbourhood?",
        body: [
          "The East Side Gallery (the longest surviving stretch of the Wall), the Oberbaum Bridge, the RAW grounds and Markthalle Neun for street food. Kreuzberg adds the Bergmannkiez, Görlitzer Park and the Landwehrkanal.",
        ],
      },
    ],
    faq: [
      {
        q: "What does a boutique hotel in Friedrichshain-Kreuzberg cost?",
        a: "Design-led houses start around €145–155 per night, the upmarket Orania around €280. Affordable three-star options such as the Schulz Hotel start at roughly €75.",
      },
      {
        q: "Is the district suitable for first-time visitors?",
        a: "For younger travellers and anyone looking for alternative Berlin: absolutely. Classic first-time sightseers focused on the Brandenburg Gate and Museum Island stay more centrally in Mitte.",
      },
      {
        q: "How do I get to the centre from here?",
        a: "With the U1/U3, the ring line and the S3/S5/S7 from Warschauer Straße or Ostbahnhof you reach Alexanderplatz and Mitte in 10–15 minutes.",
      },
      {
        q: "Are there family hotels too?",
        a: "A few - the Schulz Hotel offers family rooms. For a broader family-friendly selection, Pankow is the better choice.",
      },
    ],
    gygQuery: "East Side Gallery Berlin",
    related: [
      { label: "All hotels in Friedrichshain-Kreuzberg", href: "/en/districts/friedrichshain-kreuzberg/" },
      { label: "Boutique hotels in Berlin", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Hotels near Berlin's nightlife", href: "/en/guides/berliner-nachtleben-hotels/" },
      { label: "East Side Gallery", href: "/en/attractions/east-side-gallery/" },
    ],
    adjacent: [
      { label: "Which design hotels are worth it in Berlin?", href: "/en/guides/design-hotels-berlin/" },
      { label: "Where do I find cheap hotels in central locations?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "The best rooftop bars in hotels", href: "/en/guides/rooftop-bars-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── PANKOW ─────────────────────────
  {
    slug: "pankow",
    title: "Family hotels in Pankow: child-friendly stays in northern Berlin",
    description:
      "Family-friendly hotels in Pankow & Prenzlauer Berg: family rooms, quiet period-building streets and boutique charm near Mauerpark and Kollwitzplatz.",
    kicker: "District guide · North Berlin",
    intro: [
      "Pankow is Berlin's largest district, stretching from hip Prenzlauer Berg with Mauerpark and Kollwitzplatz through quiet Weißensee up to green Buch. For families and longer stays it is one of the most relaxed corners of the city.",
      "Instead of hotel chains, the picture is shaped by charming boutique houses, aparthotels and family-run guest houses - many in restored period buildings with stucco and courtyards.",
    ],
    takeaways: [
      "Prenzlauer Berg (part of Pankow) is Berlin's most family-friendly inner-city neighbourhood.",
      "Many houses offer family rooms, apartments with kitchens and quiet locations away from tourist flows.",
      "Mauerpark, Kollwitzplatz and the Kulturbrauerei are the green and cultural anchors.",
    ],
    bestFor: ["Families", "Longer stays", "Peace seekers", "Berlin regulars"],
    districtSlug: "pankow",
    categorySlug: "familienhotels",
    hotels: ["hotel-oderberger", "myers-hotel", "ackselhaus-blue-home", "livinghotel-weissensee"],
    sections: [
      {
        heading: "Why is Pankow good for families?",
        body: [
          "Because inner-city proximity meets relaxed living: wide period-building streets, playgrounds, cafés with a kids' corner and Mauerpark as the weekend living room. Distances are short and the pace is calmer than in Mitte or Friedrichshain.",
          "Family rooms and especially aparthotels with a kitchenette (ideal from three nights) are more common here than the city average - good for families who do not want to eat out every evening.",
        ],
      },
      {
        heading: "Which hotels in Pankow do we recommend?",
        body: [
          "A genuine one-off is the Hotel Oderberger in the former public baths of 1902 - with the historic swimming pool preserved and family rooms, a few minutes from Mauerpark. Myer's Hotel near Kollwitzplatz and the Ackselhaus with its themed rooms stand for personal boutique charm.",
          "For longer stays with children, the Living Hotel Weißensee with fully equipped apartments and its own park is the most practical choice.",
        ],
      },
      {
        heading: "What can you do nearby with children?",
        body: [
          "The Sunday flea market and karaoke in Mauerpark, playing and picnicking on the big meadow, ice cream at Kollwitzplatz. The Kulturbrauerei has cinema and events, while the Botanischer Volkspark Pankow and Schönhausen Palace sit in the green north.",
        ],
      },
    ],
    faq: [
      {
        q: "Are Pankow hotels well connected to the centre?",
        a: "Yes. From Prenzlauer Berg the trams (M1, M10) and the U2 put you at Alexanderplatz in around 15 minutes. Weißensee and the north are further out, but quieter and cheaper.",
      },
      {
        q: "What does a family hotel in Pankow cost?",
        a: "Boutique and family houses usually sit between €110 and €165 per night. Apartments with a kitchen pay off especially from three to four nights.",
      },
      {
        q: "Is Prenzlauer Berg the same as Pankow?",
        a: "Prenzlauer Berg is a locality within the Pankow district - the best known and most central one. Weißensee, Niederschönhausen and Buch also belong to Pankow but lie further north.",
      },
      {
        q: "Does Pankow work without children?",
        a: "Certainly. The area is popular with couples and Berlin regulars who value quiet, good cafés and short trips into the centre.",
      },
    ],
    gygQuery: "Mauerpark Prenzlauer Berg Berlin",
    related: [
      { label: "All hotels in Pankow", href: "/en/districts/pankow/" },
      { label: "Family-friendly hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Berlin with kids - itinerary", href: "/en/itineraries/berlin-with-kids/" },
      { label: "Discover Mauerpark", href: "/en/attractions/mauerpark/" },
    ],
    adjacent: [
      { label: "Which hotels have family rooms and a pool?", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Where do I find charming, owner-run hotels?", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Berlin with kids when it rains", href: "/en/itineraries/berlin-when-it-rains/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── MITTE ─────────────────────────
  {
    slug: "mitte",
    title: "Hotels in Berlin-Mitte: staying in the heart of history",
    description:
      "Hotels in Berlin-Mitte: from luxury houses by the Brandenburg Gate and Gendarmenmarkt to affordable rooms at Alexanderplatz - you cannot stay more centrally in Berlin.",
    kicker: "District guide · City centre",
    intro: [
      "Mitte is Berlin's historic and geographic heart: Brandenburg Gate, Museum Island, the Reichstag, Gendarmenmarkt and Unter den Linden all sit within a few square kilometres. For a first visit to Berlin this is the most sensible place to stay.",
      "The range runs from legendary grand hotels to functional three-star houses at Alexanderplatz - everything on foot or a short U-Bahn ride from the major sights.",
    ],
    takeaways: [
      "Mitte offers the shortest walks to Berlin's iconic sights.",
      "It holds most of the city's five-star houses - but also affordable options around Alexanderplatz.",
      "Best micro-locations: Pariser Platz, Gendarmenmarkt, Hackescher Markt and Alexanderplatz.",
    ],
    bestFor: ["First-time visitors", "Luxury travellers", "Culture fans", "Short breaks"],
    districtSlug: "mitte",
    categorySlug: "luxushotels",
    hotels: [
      "hotel-adlon-kempinski",
      "hotel-de-rome",
      "regent-berlin",
      "the-mandala-hotel",
      "hotel-amano-grand-central",
      "h2-hotel-alexanderplatz",
    ],
    sections: [
      {
        heading: "Why stay in Mitte?",
        body: [
          "Because you reach almost everything on foot: Brandenburg Gate, the Reichstag, Museum Island, Unter den Linden and Gendarmenmarkt. On a short break with a classic sightseeing programme, the central location saves real time every day.",
          "Mitte is also the address of Berlin's top-end hotel scene - if you want luxury, a spa and a starred restaurant, the density is highest here.",
        ],
      },
      {
        heading: "Which hotels in Mitte are the best?",
        body: [
          "The Hotel Adlon Kempinski on Pariser Platz is the city's grande dame, right by the Brandenburg Gate. The Hotel de Rome on Bebelplatz occupies a former bank - with a pool in the old vault. On Gendarmenmarkt sits the classic Regent Berlin, and at Potsdamer Platz the all-suite The Mandala with its two-star restaurant FACIL.",
          "For design-led central stays there is the AMANO Grand Central by Hauptbahnhof; for budget-conscious travellers the H2 Hotel directly at Alexanderplatz.",
        ],
      },
      {
        heading: "Where in Mitte is the best location?",
        body: [
          "For pure sightseeing: around Pariser Platz and Gendarmenmarkt. For nightlife and restaurants: Hackescher Markt and the Rosenthaler area. For transport and fair prices: right at Alexanderplatz, where all the U-Bahn and S-Bahn lines converge.",
        ],
      },
      {
        heading: "Is luxury worth it in Mitte, or can you stay cheaply?",
        body: [
          "Both work. Five-star houses start around €290–480 per night, but solid three-star properties at the Alex begin at roughly €65. If you want to stay central and save, book towards Alexanderplatz or a mid-range design house.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Mitte the best district for a first visit to Berlin?",
        a: "For classic sightseeing, yes: the walks to the major sights are shortest. If you are after alternative Berlin, Friedrichshain-Kreuzberg or Neukölln suit you better.",
      },
      {
        q: "What does a hotel in Mitte cost?",
        a: "From around €65 for functional three-star houses at Alexanderplatz to €480 for the top suites at the Adlon. Most four-star houses sit at €130–200.",
      },
      {
        q: "Which sights are within walking distance?",
        a: "Brandenburg Gate, the Reichstag, the Holocaust Memorial, Unter den Linden, Museum Island, Berlin Cathedral, Gendarmenmarkt, the TV Tower and Alexanderplatz - all in or on the edge of Mitte.",
      },
      {
        q: "Is Mitte safe and lively in the evening?",
        a: "Yes. Around Hackescher Markt and Gendarmenmarkt evenings are busy with restaurants and theatres. The area counts as safe; Alexanderplatz gets rowdier at night.",
      },
    ],
    gygQuery: "Brandenburger Tor Museumsinsel Berlin",
    related: [
      { label: "All hotels in Mitte", href: "/en/districts/mitte/" },
      { label: "Luxury hotels in Berlin", href: "/en/guides/luxus-hotels-berlin/" },
      { label: "Central hotels in Berlin", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Brandenburg Gate", href: "/en/attractions/brandenburger-tor/" },
      { label: "Museum Island", href: "/en/attractions/museumsinsel/" },
    ],
    adjacent: [
      { label: "Which hotels have a starred restaurant?", href: "/en/guides/gourmet-hotels-berlin/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
      { label: "Where do I find wellness and spa hotels?", href: "/en/guides/wellness-spa-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── SPANDAU ─────────────────────────
  {
    slug: "spandau",
    title: "Cheap hotels in Spandau: affordable stays with old-town charm",
    description:
      "Cheap hotels in Spandau: affordable Berlin stays with a historic old town, citadel and Havel waterfront - well connected and ideal for budget and trade-fair travellers.",
    kicker: "District guide · West Berlin",
    intro: [
      "Spandau feels almost like its own small town: a historic old quarter, the citadel, the Havel waterfront. If you want to stay cheaply and still reach the centre quickly by S-Bahn and U-Bahn, this is your district.",
      "Old Spandau itself has few large hotels - but the area works perfectly as an affordable base, for instance for trade-fair visitors or travellers with a car. We show what matters and name verified budget houses within easy reach.",
    ],
    takeaways: [
      "Spandau is one of the cheapest near-central places to stay in Berlin.",
      "The U7 and the S-Bahn (S3/S9) reach City West without a change.",
      "Ideal for budget travellers, trade-fair visitors and weekend trips by car.",
    ],
    bestFor: ["Budget travellers", "Trade-fair visitors", "Families with a car", "Old-town fans"],
    districtSlug: "spandau",
    categorySlug: "billige-hotels",
    hotels: ["hampton-by-hilton-city-west", "h2-hotel-alexanderplatz"],
    sections: [
      {
        heading: "Is it worth staying in Spandau?",
        body: [
          "If your budget is limited or you are arriving by car: yes. Spandau is significantly cheaper than the inner city, has a pretty historic old town and sits on the water. For pure sightseeing in Mitte, reckon on 30–40 minutes of travel.",
          "Because the hotel supply within old Spandau itself is limited, it is worth looking at affordable, well-connected houses in neighbouring City West - from there Spandau is only minutes away.",
        ],
      },
      {
        heading: "When do you get the lowest prices?",
        body: [
          "In the off season (November to February, outside trade fairs and holidays) and midweek. Note: during the big fairs at the Funkturm, prices across the whole west rise noticeably - book early then.",
        ],
        bullets: [
          "Use the off season: winter (except Christmas/New Year) is cheapest.",
          "Book midweek rather than at the weekend.",
          "Avoid fair dates (IFA and co.) or reserve very early.",
        ],
      },
      {
        heading: "What is there to do in Spandau?",
        body: [
          "The Spandau Citadel (one of Europe's best-preserved Renaissance fortresses), the old town with its half-timbered houses and the Kolk quarter, plus walks and ferries along the Havel. In Advent, the Spandau Christmas market is one of Berlin's largest.",
        ],
      },
    ],
    faq: [
      {
        q: "How far is Spandau from the centre?",
        a: "Around 12 kilometres west. The U7 or the S-Bahn reach City West in about 20 minutes and Mitte in 30–40 minutes.",
      },
      {
        q: "What does a hotel in Spandau cost?",
        a: "Affordable houses start at roughly €60–80 per night. In neighbouring City West, solid three-star houses start at around €95.",
      },
      {
        q: "Is Spandau suitable for families?",
        a: "Yes - quiet, on the water, with the citadel and parks. For travellers with a car, parking is a clear plus over the inner city.",
      },
      {
        q: "Does Spandau work for trade-fair visitors?",
        a: "Very much so - the connection to the exhibition grounds at the Funkturm is good, and prices sit below those of the houses right by the fair.",
      },
    ],
    gygQuery: "Zitadelle Spandau Berlin",
    related: [
      { label: "All hotels in Spandau", href: "/en/districts/spandau/" },
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Budget hotels - districts compared", href: "/en/categories/budget-hotels/" },
      { label: "Hotels in Charlottenburg (City West)", href: "/en/guides/charlottenburg/" },
    ],
    adjacent: [
      { label: "Where do I find hotels under €80 a night?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Which districts are the cheapest?", href: "/en/categories/budget-hotels/" },
      { label: "Hotels with parking and good car access", href: "/en/guides/reinickendorf/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── STEGLITZ ─────────────────────────
  {
    slug: "steglitz",
    title: "Quiet hotels in Steglitz-Zehlendorf: green retreats by the water",
    description:
      "Quiet hotels in Steglitz-Zehlendorf: peaceful retreats by the Wannsee, in the Grunewald and in Dahlem - Berlin's greenest district for restful stays.",
    kicker: "District guide · South-west Berlin",
    intro: [
      "Steglitz-Zehlendorf is Berlin's greenest and quietest district: the Grunewald, the Wannsee and the Krumme Lanke shape the landscape. Hotels here tend to be smaller and more personal, often set in the forest or by a lake.",
      "If you want rest, nature and upmarket quiet - and are happy to skip inner-city bustle - the south-west delivers exactly that. Here are the verified houses and where they sit.",
    ],
    takeaways: [
      "Steglitz-Zehlendorf is the quietest, greenest place to stay in Berlin.",
      "Great for spa travellers, nature lovers and longer, restful stays.",
      "The Grunewald, the Wannsee and the Botanical Garden are right outside.",
    ],
    bestFor: ["Peace seekers", "Nature lovers", "Spa travellers", "Longer stays"],
    districtSlug: "steglitz-zehlendorf",
    categorySlug: "wellness-hotels",
    hotels: ["patrick-hellmann-schlosshotel", "harnack-haus"],
    sections: [
      {
        heading: "Who is a hotel in Steglitz-Zehlendorf right for?",
        body: [
          "For anyone who weighs quiet and greenery more heavily than short walks to the sights. You stay between forest and lakes, sleep undisturbed and recharge - ideal for spa stays, nature weekends and longer visits.",
          "If, on the other hand, you want to go out in Mitte every evening, factor in 30–40 minutes of travel.",
        ],
      },
      {
        heading: "Which hotels do we recommend in the green south-west?",
        body: [
          "The Patrick Hellmann Schlosshotel in the Grunewald occupies Schloss Pannwitz of 1914 - the interiors were designed by Karl Lagerfeld in 1996. Very discreet, in parkland, with its own restaurant.",
          "A charming, quieter alternative is the Harnack-Haus in Dahlem, built in 1929 as a conference house and today the guest and conference house of the Max Planck Society - open to regular travellers as well.",
        ],
      },
      {
        heading: "What is there to do in the area?",
        body: [
          "Walks and bike rides in the Grunewald, a day at the Wannsee lido, art around the Dahlem museums, a detour to the Glienicke Bridge or into the Botanical Garden. In summer the south-west of Berlin is a recreation paradise.",
        ],
      },
    ],
    faq: [
      {
        q: "How well connected is Steglitz-Zehlendorf to the centre?",
        a: "The S-Bahn (S1, S7) and U-Bahn (U3) reach City West in 20–25 minutes and Mitte in 30–40 minutes. By car, parking is far more relaxed than in the inner city.",
      },
      {
        q: "Are the hotels here expensive?",
        a: "The Schlosshotel and comparable houses sit in the upmarket bracket from around €290 per night; charming conference and guest houses start at about €135.",
      },
      {
        q: "Does the district suit families?",
        a: "Yes, especially in summer: the Wannsee lido, forests and lakes are ideal. The trips into the centre are longer, though.",
      },
      {
        q: "Are there real wellness and spa hotels?",
        a: "The green south of Berlin is the classic spa area. You will find an overview of the best houses in our wellness guide.",
      },
    ],
    gygQuery: "Wannsee Grunewald Berlin",
    related: [
      { label: "All hotels in Steglitz-Zehlendorf", href: "/en/districts/steglitz-zehlendorf/" },
      { label: "Wellness & spa hotels in Berlin", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Lakeside hotels in Treptow-Köpenick", href: "/en/guides/treptow/" },
      { label: "Discover the Wannsee", href: "/en/attractions/wannsee/" },
    ],
    adjacent: [
      { label: "Which hotels have the best spa?", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Where do you stay by the water in Berlin?", href: "/en/guides/treptow/" },
      { label: "Day trip to Potsdam & Sanssouci", href: "/en/guides/potsdam/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── TEMPELHOF ─────────────────────────
  {
    slug: "tempelhof",
    title: "Central hotels in Tempelhof-Schöneberg: urban Berlin with character",
    description:
      "Hotels in Tempelhof-Schöneberg: central city hotels, boutique houses and budget options around Winterfeldtplatz, Tempelhofer Feld and close to KaDeWe.",
    kicker: "District guide · South Berlin",
    intro: [
      "Tempelhof-Schöneberg combines urban life around Winterfeldtplatz, the legendary Tempelhofer Feld and comfortable residential streets. You stay centrally but more calmly and often more cheaply than in Mitte.",
      "The hotel landscape runs from design houses through charming guest houses to fair-value city hotels - well connected, with KaDeWe and the Ku'damm within reach.",
    ],
    takeaways: [
      "Tempelhof-Schöneberg is central, lively and usually cheaper than Mitte.",
      "Schöneberg scores with its market, café culture and the queer Regenbogenkiez.",
      "Tempelhofer Feld is Berlin's largest open space - perfect for cycling and kite flying.",
    ],
    bestFor: ["Mid-range travellers", "City explorers", "LGBTQ+ travellers", "Families"],
    districtSlug: "tempelhof-schoeneberg",
    categorySlug: "boutique-hotels",
    hotels: ["axel-hotel-berlin", "hotel-berlin-berlin"],
    sections: [
      {
        heading: "Why stay in Tempelhof-Schöneberg?",
        body: [
          "Because the district is central without being overrun by tourists. Schöneberg is lively and well connected - KaDeWe, Wittenbergplatz and the Ku'damm are close, while prices are often more moderate than in Mitte.",
          "The area around Motzstraße is also Berlin's most established queer quarter; accordingly there are hetero-friendly design hotels with their own flair.",
        ],
      },
      {
        heading: "Which hotels are worth it here?",
        body: [
          "The Axel Hotel Berlin in the Regenbogenkiez is a hetero-friendly design hotel with a roof terrace and pool. The large, long-established Hotel Berlin, Berlin on the edge of the Tiergarten offers family rooms, a conference area and a strong breakfast buffet - a few minutes' walk from KaDeWe.",
        ],
      },
      {
        heading: "What makes Tempelhofer Feld special?",
        body: [
          "The former Tempelhof airport is now a huge public open space: cycling on the old runways, skating, kite flying, urban gardening and picnics. One of the most unusual Berlin experiences - and free.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Tempelhof-Schöneberg central?",
        a: "Yes, Schöneberg borders City West directly and is very well served by the U1, U2, U3 and U7. You reach Mitte in around 20 minutes.",
      },
      {
        q: "What does a hotel here cost?",
        a: "Solid city and design hotels mostly sit at €120–160 per night, with budget options and guest houses below that.",
      },
      {
        q: "Does the district suit families?",
        a: "Yes - Tempelhofer Feld, playgrounds and the family-friendly Hotel Berlin, Berlin make it attractive. The central location saves long journeys.",
      },
      {
        q: "What is Winterfeldtplatz?",
        a: "A lively square in Schöneberg with one of Berlin's most popular weekly markets (Wednesdays and Saturdays) and plenty of cafés around it.",
      },
    ],
    gygQuery: "Tempelhofer Feld Berlin",
    related: [
      { label: "All hotels in Tempelhof-Schöneberg", href: "/en/districts/tempelhof-schoeneberg/" },
      { label: "Central hotels in Berlin", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Boutique hotels in Berlin", href: "/en/guides/boutique-hotels-berlin-charme/" },
      { label: "Tempelhofer Feld", href: "/en/attractions/tempelhofer-feld/" },
    ],
    adjacent: [
      { label: "Where do I find central, fair-value city hotels?", href: "/en/guides/zentrale-hotels-berlin/" },
      { label: "Which hotels are particularly cheap?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Hotels in Charlottenburg / City West", href: "/en/guides/charlottenburg/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── NEUKÖLLN ─────────────────────────
  {
    slug: "neukoelln",
    title: "Affordable hotels in Neukölln: staying in the creative quarter",
    description:
      "Cheap hotels in Neukölln: budget-friendly and creative places to stay between Maybachufer, Tempelhofer Feld and Rixdorf - Berlin's most exciting district for young travellers.",
    kicker: "District guide · South Berlin",
    intro: [
      "Neukölln is perhaps the most exciting district in today's Berlin: an Arabic high street, hip galleries, the Maybachufer canal and creative cafés all meet here. Budget-friendly houses and design hostels dominate.",
      "If you are after the real, unvarnished and diverse Berlin - and want to save money doing it - Neukölln is your district. Here are the verified places and what to watch for in terms of location.",
    ],
    takeaways: [
      "Neukölln is hip, diverse and cheaper than the classic inner-city quarters.",
      "Great for foodies, young travellers and Berlin insiders off the tourist trail.",
      "Tempelhofer Feld, the Klunkerkranich and the Maybachufer are the highlights.",
    ],
    bestFor: ["Budget travellers", "Foodies", "Young travellers", "Berlin insiders"],
    districtSlug: "neukoelln",
    categorySlug: "billige-hotels",
    hotels: ["huettenpalast", "estrel-berlin"],
    sections: [
      {
        heading: "Is Neukölln worth staying in?",
        body: [
          "For price-conscious, curious travellers: absolutely. You stay in a lively, multicultural quarter with galleries, bars, corner shops and one of Berlin's best street-food scenes - at prices below the tourist hotspots.",
          "If you want quiet elegance or classic sightseeing on your doorstep, you are better off elsewhere; Neukölln scores on atmosphere and authenticity.",
        ],
      },
      {
        heading: "Which places to stay stand out?",
        body: [
          "The Hüttenpalast is a genuine one-off: in a former factory hall you sleep in vintage caravans and self-built cabins - plus conventional rooms and a café in the courtyard. The huge Estrel Berlin on Sonnenallee is Germany's largest convention hotel, with its own show stage and good value for money.",
        ],
      },
      {
        heading: "What should you experience in Neukölln?",
        body: [
          "The Turkish market on the Maybachufer (Tuesdays and Fridays), sundowners with a skyline view at the Klunkerkranich, Bohemian Rixdorf and the café scene around Körnerpark. Tempelhofer Feld borders the district directly.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Neukölln safe?",
        a: "The lively parts around the Reuterkiez, Schillerkiez and Rixdorf count as safe and are well frequented in the evening. As in any big city it pays to keep your wits about you at night - but the area is by no means dangerous.",
      },
      {
        q: "How do I get to the centre?",
        a: "The U7 and U8 plus the ring line put you in Mitte or at Alexanderplatz in 15–20 minutes. Kreuzberg is right next door.",
      },
      {
        q: "What does a hotel in Neukölln cost?",
        a: "Budget houses and special concepts start at around €95; the Estrel sits at roughly €110 - with a very high room count for Berlin and good availability.",
      },
      {
        q: "Neukölln or Kreuzberg - which is better?",
        a: "Kreuzberg is somewhat more central and more geared to nightlife, Neukölln cheaper and in parts still rougher. They border each other, so you are quickly in the other quarter.",
      },
    ],
    gygQuery: "Maybachufer Tempelhofer Feld Berlin",
    related: [
      { label: "All hotels in Neukölln", href: "/en/districts/neukoelln/" },
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Unusual & hidden hotels", href: "/en/guides/geheimtipp-hotels-berlin/" },
      { label: "Tempelhofer Feld", href: "/en/attractions/tempelhofer-feld/" },
    ],
    adjacent: [
      { label: "Where do I find Berlin's most creative places to stay?", href: "/en/guides/geheimtipp-hotels-berlin/" },
      { label: "Which hotels sit close to Berlin's nightlife?", href: "/en/guides/berliner-nachtleben-hotels/" },
      { label: "Boutique hotels in Friedrichshain-Kreuzberg", href: "/en/guides/friedrichshain/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── TREPTOW ─────────────────────────
  {
    slug: "treptow",
    title: "Lakeside hotels in Treptow-Köpenick: staying by the water",
    description:
      "Lakeside hotels in Treptow-Köpenick: stay by the Müggelsee and the Spree with spa, lido and nature - Berlin's water district in the south-east.",
    kicker: "District guide · South-east Berlin",
    intro: [
      "Treptow-Köpenick is Berlin's water district: the Müggelsee, the Dahme and the Spree riverbank shape the landscape. This is where lakeside hotels and wellness resorts sit, alongside Treptower Park and the Plänterwald.",
      "If you want to combine rest by the water, watersports and nature with the charm of a historic town centre (Köpenick), the south-east offers the most relaxed version of Berlin.",
    ],
    takeaways: [
      "Treptow-Köpenick is Berlin's water and woodland corner - ideal for recuperation.",
      "The Müggelsee is Berlin's largest lake, with a lido and boat hire.",
      "Perfect for wellness travellers, watersports fans and nature-loving families.",
    ],
    bestFor: ["Wellness travellers", "Watersports fans", "Families", "Rest seekers"],
    districtSlug: "treptow-koepenick",
    categorySlug: "wellness-hotels",
    hotels: ["hotel-mueggelsee-berlin"],
    sections: [
      {
        heading: "Who is a lakeside hotel in the south-east right for?",
        body: [
          "For anyone who puts recuperation above short sightseeing walks: you sleep by the lake, swim in the morning, walk or paddle, and enjoy the view over the water in the evening. A genuine break inside the city limits.",
          "For a classic inner-city programme, factor in the travel time (around 40 minutes to Mitte) - in return you get quiet and nature no central district can offer.",
        ],
      },
      {
        heading: "Which hotel do we recommend by the water?",
        body: [
          "The Hotel Müggelsee Berlin sits with 174 rooms directly on the city's largest lake - with its own lido, a large spa area and a restaurant with lake views. A popular wellness and weekend spot with Berliners themselves.",
        ],
      },
      {
        heading: "What is there to do in Treptow-Köpenick?",
        body: [
          "Swimming and boating on the Müggelsee, the climb up the Müggelturm, a stroll through Köpenick's historic old town with its palace, boat tours on the Spree and Dahme, and walks in Treptower Park and the Plänterwald.",
        ],
      },
    ],
    faq: [
      {
        q: "How far is Treptow-Köpenick from the centre?",
        a: "The Müggelsee lies in the far south-east, around 40 minutes from Mitte by S-Bahn (S3) plus tram or bus. Treptow itself (Treptower Park) is considerably closer to the centre.",
      },
      {
        q: "What does a lakeside hotel here cost?",
        a: "The Hotel Müggelsee starts at around €135 per night - fair for a house with a spa and a lakeside setting.",
      },
      {
        q: "Is the district good for families?",
        a: "Very - the lido, boat hire, forests and the Müggelsee beach make it an ideal family and summer destination.",
      },
      {
        q: "Can you do watersports here?",
        a: "Yes: swimming, stand-up paddling, sailing and boat trips all work well on the Müggelsee and the Dahme; several rental places sit on the shore.",
      },
    ],
    gygQuery: "Müggelsee Köpenick Berlin",
    related: [
      { label: "All hotels in Treptow-Köpenick", href: "/en/districts/treptow-koepenick/" },
      { label: "Wellness & spa hotels in Berlin", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Quiet hotels in Steglitz-Zehlendorf", href: "/en/guides/steglitz/" },
      { label: "Discover the Müggelsee", href: "/en/attractions/muggelsee/" },
    ],
    adjacent: [
      { label: "Which hotels have the best spa?", href: "/en/guides/wellness-spa-hotels-berlin/" },
      { label: "Where do you stay quietly in the green?", href: "/en/guides/steglitz/" },
      { label: "Family-friendly hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── MARZAHN ─────────────────────────
  {
    slug: "marzahn",
    title: "Budget hotels in Marzahn-Hellersdorf: staying cheaply in the east",
    description:
      "Cheap hotels in Marzahn-Hellersdorf: very affordable stays in eastern Berlin with solid S-Bahn and U-Bahn links and the Gardens of the World as the highlight.",
    kicker: "District guide · East Berlin",
    intro: [
      "Marzahn-Hellersdorf is Berlin's prefab-housing district in the east - but also home to the Gardens of the World, one of the finest parks in the city. Hotels here are very affordable and the connection to the inner city by S-Bahn and U-Bahn is solid.",
      "For very budget-conscious travellers and families interested in the gardens, the district is an honest, cheap base. Here is what to expect.",
    ],
    takeaways: [
      "Marzahn-Hellersdorf is among the cheapest places to stay in Berlin.",
      "The Gardens of the World with the cable car and viewpoint are the big highlight.",
      "The U5 and the S-Bahn (S7) reach the inner city without a change.",
    ],
    bestFor: ["Very budget-conscious travellers", "Families interested in gardens", "Longer stays"],
    districtSlug: "marzahn-hellersdorf",
    categorySlug: "billige-hotels",
    hotels: ["ibis-budget-berlin-hellersdorf"],
    sections: [
      {
        heading: "Is a hotel in Marzahn-Hellersdorf worth it?",
        body: [
          "If price is your main criterion: yes. You get clean, functional rooms at Berlin's lowest rates. For sightseeing in Mitte, reckon on around 30–40 minutes by U-Bahn or S-Bahn.",
          "A second good reason is the Gardens of the World - if you specifically want to visit the park, you are perfectly placed here.",
        ],
      },
      {
        heading: "Which hotel is verified and recommendable?",
        body: [
          "The ibis budget Berlin Hellersdorf offers freshly renovated, functional rooms from around €49 per night - with free Wi-Fi and the U5 within walking distance. For price-conscious travellers who mainly want a clean bed and good connections, it is an honest choice.",
        ],
      },
      {
        heading: "What is there to do in the area?",
        body: [
          "Above all the Gardens of the World with their Chinese, Japanese, Balinese and Oriental gardens, the cable car and the Kienberg viewpoint. Plus Biesdorf Palace, the Wuhletal valley for walking and the Eastgate shopping centre.",
        ],
      },
    ],
    faq: [
      {
        q: "How far is Marzahn-Hellersdorf from the centre?",
        a: "Around 12–15 kilometres east. The U5 or S7 reach Alexanderplatz and Mitte in about 30–40 minutes.",
      },
      {
        q: "What does a hotel here cost?",
        a: "Budget houses start at around €49 per night - it barely gets cheaper in Berlin.",
      },
      {
        q: "Is the district worth it for families?",
        a: "Mainly because of the Gardens of the World and the generous green spaces. The journeys into the centre are longer, though.",
      },
      {
        q: "On which weekdays are hotels cheapest?",
        a: "As everywhere in Berlin, usually midweek and in the off season. At these already low prices, though, the room to manoeuvre is smaller than in the inner city.",
      },
    ],
    gygQuery: "Gärten der Welt Berlin",
    related: [
      { label: "All hotels in Marzahn-Hellersdorf", href: "/en/districts/marzahn-hellersdorf/" },
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Budget hotels - districts compared", href: "/en/categories/budget-hotels/" },
      { label: "Cheap hotels in Spandau", href: "/en/guides/spandau/" },
    ],
    adjacent: [
      { label: "Where do I find hotels under €60 a night?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Which districts are the cheapest?", href: "/en/categories/budget-hotels/" },
      { label: "Hotels in eastern Berlin - Lichtenberg", href: "/en/guides/lichtenberg/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── LICHTENBERG ─────────────────────────
  {
    slug: "lichtenberg",
    title: "Hotels in Lichtenberg: well connected and affordable in eastern Berlin",
    description:
      "Hotels in Lichtenberg: fair-value business and mid-range houses in eastern Berlin with good connections, the Tierpark and the Stasi Museum - strong value for money.",
    kicker: "District guide · East Berlin",
    intro: [
      "Lichtenberg lies in eastern Berlin, well connected to Mitte and cheaper at the same time. The Tierpark, the Stasi Museum and the Rummelsburger Bucht are the anchors; hotels tend to be business or mid-range oriented with good value for money.",
      "If you want to stay central enough but cheaper than the inner city - and value fast connections - this is a down-to-earth, fair base.",
    ],
    takeaways: [
      "Lichtenberg is cheaper than the inner city but very well connected.",
      "Strong for business travellers and price-conscious city breakers.",
      "Highlights: Tierpark Berlin, the Stasi Museum and the waterside Rummelsburger Bucht.",
    ],
    bestFor: ["Business travellers", "Price-conscious city breakers", "Families"],
    districtSlug: "lichtenberg",
    categorySlug: "business-hotels",
    hotels: ["h2-hotel-alexanderplatz", "park-inn-alexanderplatz"],
    sections: [
      {
        heading: "Why stay in Lichtenberg?",
        body: [
          "Because of the combination of price and connections: Lichtenberg sits directly east of Friedrichshain, is superbly served by S-Bahn, tram and regional trains (Bahnhof Lichtenberg) and is significantly cheaper than the inner city.",
          "The district is down-to-earth and unpretentious - ideal for business travellers and anyone looking for a fair room with short journeys into the centre. Since the selection within Lichtenberg itself is limited, it is worth looking at well-connected houses in the adjoining Mitte/Alexanderplatz area.",
        ],
      },
      {
        heading: "What is there to do in Lichtenberg?",
        body: [
          "Tierpark Berlin is, at 160 hectares, one of Europe's largest landscape zoos. Add the Stasi Museum in the former MfS headquarters, Friedrichsfelde Palace and the up-and-coming Rummelsburger Bucht on the water.",
        ],
      },
      {
        heading: "Who should give the district a miss?",
        body: [
          "If you expect classic sightseeing on your doorstep or are after upmarket luxury, Mitte or Charlottenburg suit you better. Lichtenberg is everyday Berlin: practical, affordable, well connected - but not a tourist hotspot.",
        ],
      },
    ],
    faq: [
      {
        q: "How well connected is Lichtenberg to the centre?",
        a: "Very well. The S-Bahn (S5, S7, S75) and trams put you at Alexanderplatz in around 15 minutes. Bahnhof Lichtenberg is also an important regional and long-distance stop.",
      },
      {
        q: "What does a hotel in Lichtenberg cost?",
        a: "Business and mid-range houses mostly sit at €80–130 per night - cheaper than comparable houses in Mitte.",
      },
      {
        q: "Is Lichtenberg worth it for families?",
        a: "Yes, above all because of the Tierpark. The good public transport and fair prices also speak for the district.",
      },
      {
        q: "Is Lichtenberg safe?",
        a: "The residential and hotel areas count as safe and quiet. As everywhere, a normal level of attention around stations at night makes sense.",
      },
    ],
    gygQuery: "Tierpark Stasimuseum Berlin",
    related: [
      { label: "All hotels in Lichtenberg", href: "/en/districts/lichtenberg/" },
      { label: "Business travel hotels in Berlin", href: "/en/guides/geschaeftsreisen-hotels-berlin/" },
      { label: "Business hotels - districts compared", href: "/en/categories/business-hotels/" },
      { label: "Cheap hotels in Berlin", href: "/en/guides/budget-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Which hotels are ideal for business trips?", href: "/en/guides/geschaeftsreisen-hotels-berlin/" },
      { label: "Where do I find cheap, well-connected hotels?", href: "/en/guides/budget-hotels-berlin/" },
      { label: "Budget hotels in Marzahn-Hellersdorf", href: "/en/guides/marzahn/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── REINICKENDORF ─────────────────────────
  {
    slug: "reinickendorf",
    title: "Hotels in Reinickendorf: quiet in the green north, near the Tegeler See",
    description:
      "Hotels in Reinickendorf: quiet family and mid-range houses in the green north of Berlin by the Tegeler See - 20 minutes to Mitte on the U6.",
    kicker: "District guide · North Berlin",
    intro: [
      "Reinickendorf lies in the north of Berlin - the Tegeler See, the Tegeler Forst and Frohnau. You stay quietly in the green and are still in Mitte in around 20 minutes on the U6. Mid-range and family hotels dominate the district.",
      "Note: the former Tegel airport (TXL) has been closed since 2020 - Berlin's airport today is BER in the south-east. Reinickendorf instead scores with nature, water and quiet residential streets.",
    ],
    takeaways: [
      "Reinickendorf is green, quiet and quickly connected to Mitte via the U6.",
      "Ideal for families, peace seekers and travellers with a car.",
      "Tegel airport has been closed since 2020 - today you fly from BER.",
    ],
    bestFor: ["Families", "Peace seekers", "Travellers with a car", "Nature lovers"],
    districtSlug: "reinickendorf",
    categorySlug: "familienhotels",
    hotels: ["best-western-am-borsigturm"],
    sections: [
      {
        heading: "Who is Reinickendorf right for?",
        body: [
          "For families and travellers who need quiet, want to stay in the green but reach the centre quickly. The U6 gets you to Mitte in around 20 minutes; all around, the Tegeler See and the Tegeler Forst await.",
          "The north is also relaxed for travellers with a car - parking is far easier to find here than in the inner city.",
        ],
      },
      {
        heading: "Which hotel do we recommend?",
        body: [
          "The Best Western Hotel am Borsigturm sits in the redeveloped Borsigwerke site, a historic industrial monument, and offers a pool, sauna and conference area. Via the U6 (Borsigwerke station) you are at Alexanderplatz in about 25 minutes - a solid, family-friendly choice with good value for money.",
        ],
      },
      {
        heading: "What is there to do in northern Berlin?",
        body: [
          "Walks and boat trips on the Tegeler See, hiking in the Tegeler Forst, a detour to Tegel Palace and the Frohnau Pagoda. In summer the north is a relaxed recreation area away from the tourist flows.",
        ],
      },
    ],
    faq: [
      {
        q: "Are there still airport hotels in Reinickendorf?",
        a: "Tegel airport (TXL) has been closed since November 2020; the site is being redeveloped as the \"Urban Tech Republic\". If you want a hotel near the airport today, book towards BER in the south-east of Berlin.",
      },
      {
        q: "How do I get from Reinickendorf to the centre?",
        a: "The U6 reaches Mitte in around 20 minutes; Alexanderplatz takes about 25–30 minutes with one change.",
      },
      {
        q: "What does a hotel in Reinickendorf cost?",
        a: "Family and mid-range houses mostly sit at around €95–130 per night - fair for a quiet room in the green.",
      },
      {
        q: "Does the district suit families?",
        a: "Yes - quiet, green, by the water and with family-friendly houses (pool, sauna). The good U-Bahn link makes trips into the centre easy.",
      },
    ],
    gygQuery: "Tegeler See Berlin",
    related: [
      { label: "All hotels in Reinickendorf", href: "/en/districts/reinickendorf/" },
      { label: "Family-friendly hotels in Berlin", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Family hotels - districts compared", href: "/en/categories/family-hotels/" },
      { label: "Hotels in Pankow (family)", href: "/en/guides/pankow/" },
    ],
    adjacent: [
      { label: "Which hotels are ideal for families?", href: "/en/guides/familienfreundliche-hotels-berlin/" },
      { label: "Where do you stay quietly in the green?", href: "/en/guides/steglitz/" },
      { label: "Hotels with good car access in Spandau", href: "/en/guides/spandau/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── POTSDAM ─────────────────────────
  {
    slug: "potsdam",
    title: "Potsdam & Sanssouci: day trip and stays at the gates of Berlin",
    description:
      "Potsdam with Sanssouci Palace as a day trip from Berlin: park, palaces and how to get there - plus quiet hotels in Berlin's green south-west as a base.",
    kicker: "Excursion guide · Brandenburg",
    intro: [
      "Potsdam sits directly at the gates of Berlin and, with Sanssouci Park, its palaces and the Dutch Quarter, is one of the most rewarding day trips in the region - reachable in around 40 minutes on the S-Bahn (S7).",
      "If you want to experience Potsdam at leisure, stay in Berlin's green south-west (Steglitz-Zehlendorf) or in Potsdam itself. Here are the highlights and the best base for them.",
    ],
    takeaways: [
      "Potsdam is the finest day trip from Berlin - around 40 minutes on the S7.",
      "Sanssouci Palace and Park are a UNESCO World Heritage Site.",
      "Berlin's quiet south-west (Wannsee, Grunewald, Dahlem) works well as a base.",
    ],
    bestFor: ["Culture fans", "Day trippers", "Peace seekers", "Couples"],
    districtSlug: "steglitz-zehlendorf",
    categorySlug: "charmante-hotels",
    hotels: ["patrick-hellmann-schlosshotel", "harnack-haus"],
    sections: [
      {
        heading: "What must you see in Potsdam?",
        body: [
          "Above all Sanssouci Palace and Park - the former summer residence of Frederick the Great with its famous vineyard terraces. Add the New Palace, the park with its fountains, the Dutch Quarter and the Russian colony of Alexandrowka.",
        ],
        bullets: [
          "Sanssouci Park with the vineyard terraces and the palace.",
          "The New Palace at the western end of the park.",
          "The Dutch Quarter and Alexandrowka for a stroll.",
        ],
      },
      {
        heading: "How do you get from Berlin to Potsdam?",
        body: [
          "Most easily on the S-Bahn line S7 to Potsdam Hauptbahnhof (around 40 minutes from Mitte), then on by tram or bus to the park. Regional trains (RE1) are quick too. A Berlin ABC day ticket covers the journey.",
        ],
      },
      {
        heading: "Where is the best place to stay for a Potsdam visit?",
        body: [
          "If you want to combine the palace visit with a quiet night, Berlin's green south-west is ideal - for instance the Patrick Hellmann Schlosshotel in the Grunewald or the charming Harnack-Haus in Dahlem. From there Potsdam is a short trip away, and in the evening you get the quiet of forest and lakes.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Potsdam worth it as a day trip from Berlin?",
        a: "Definitely. Sanssouci Park and Palace, the Dutch Quarter and the lake landscape work well in a single day - and the trip takes only around 40 minutes.",
      },
      {
        q: "Is Potsdam part of Berlin?",
        a: "No. Potsdam is the capital of Brandenburg and borders Berlin directly to the south-west. By S-Bahn it is as well connected as an outer district, though.",
      },
      {
        q: "Is there an entrance fee for Sanssouci Park?",
        a: "The park itself is freely accessible (a donation is requested); for the palace interiors there are tickets, which sell out quickly in high season - best booked online in advance.",
      },
      {
        q: "When is the best time for Sanssouci?",
        a: "Spring to early autumn, when the park is in full bloom. Early in the day is quieter; summer weekends get busy.",
      },
    ],
    gygQuery: "Sanssouci Potsdam",
    related: [
      { label: "Quiet hotels in Steglitz-Zehlendorf", href: "/en/guides/steglitz/" },
      { label: "All Berlin itineraries", href: "/en/itineraries/" },
      { label: "Charming hotels in Berlin", href: "/en/categories/charming-hotels/" },
      { label: "Wannsee & Glienicke Bridge", href: "/en/attractions/wannsee/" },
    ],
    adjacent: [
      { label: "Which hotels sit quietly in the green?", href: "/en/guides/steglitz/" },
      { label: "What can you do in Berlin when it rains?", href: "/en/itineraries/berlin-when-it-rains/" },
      { label: "3 days in Berlin - the perfect plan", href: "/en/itineraries/3-days-in-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },
];
