import type { Article } from "../articles";

/**
 * Themen-Artikel — zurückgeführt unter ihren exakten alten Flat-Slug-URLs.
 * Jeder Artikel hält seinen ursprünglichen Such-Fokus (Luxus, Design, Familie …),
 * ist aber gegen hotels.ts faktisch geprüft. Sensible Eigenschaften
 * (Haustiere, Barrierefreiheit, Nachhaltigkeit) werden bewusst vorsichtig
 * formuliert und auf eigene Bestätigung verwiesen. Verifizierte Fakten
 * (Michelin-Sterne, Rooftop-Bars, Baujahre) stammen aus der Hotel-DB.
 */

const PUB = "2024-02-01";
const MOD = "2026-06-01";

export const themeArticles: Article[] = [
  // ───────────────────────── LUXUS ─────────────────────────
  {
    slug: "luxus-hotels-berlin",
    title: "Die besten Luxushotels in Berlin: 5-Sterne-Häuser im Überblick",
    description:
      "Luxushotels in Berlin: die besten 5-Sterne-Häuser mit Spa, Concierge und Sternerestaurant — vom Adlon am Brandenburger Tor bis zur Waldorf Astoria.",
    kicker: "Hotel-Kategorie · Luxus",
    intro: [
      "Berlin spielt in der Top-Liga der Luxushotellerie: Adlon, Waldorf Astoria, Hotel de Rome und das Mandala bieten 5-Sterne-Komfort, Spa, Concierge rund um die Uhr und teils Sterneküche. Die meisten liegen am Brandenburger Tor, am Gendarmenmarkt oder am Kurfürstendamm.",
      "Wir zeigen die verifizierten Luxushäuser der Stadt — mit dem, was sie wirklich auszeichnet: Lage, Geschichte und die Extras, die den Aufenthalt besonders machen.",
    ],
    takeaways: [
      "Die größte Luxus-Dichte findest du in Mitte und in der City West (Charlottenburg).",
      "Top-Häuser kombinieren Spa, hauseigenes Restaurant und 24/7-Concierge.",
      "5-Sterne-Zimmer starten in Berlin meist bei rund 290–480 € pro Nacht.",
    ],
    bestFor: ["Luxus-Reisende", "Besondere Anlässe", "Paare", "Genießer"],
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
        heading: "Welches ist das beste Luxushotel in Berlin?",
        body: [
          "Die symbolträchtigste Adresse ist das Hotel Adlon Kempinski direkt am Brandenburger Tor — die Grande Dame der Stadt mit Spa, Pool und dem Lorenz Adlon Esszimmer (zwei Michelin-Sterne). Wer modernen Luxus mit Höhe sucht, bucht die Waldorf Astoria im 32-stöckigen Glasturm an der Gedächtniskirche.",
          "Für Design-affinen Luxus mit Geschichte steht das Hotel de Rome am Bebelplatz, in einer ehemaligen Bank — mit Pool im früheren Tresorraum und Dachterrasse zum Berliner Dom.",
        ],
      },
      {
        heading: "Was zeichnet ein echtes 5-Sterne-Haus in Berlin aus?",
        body: [
          "Mehr als Sterne an der Tür: durchgehender Concierge-Service, großzügige Zimmer und Suiten, ein ernstzunehmendes Spa und meist ein hauseigenes Spitzenrestaurant. Im Mandala am Potsdamer Platz etwa gibt es nur Suiten und mit dem FACIL ein Zwei-Sterne-Restaurant; im InterContinental kocht das Hugos auf zwei Sternen.",
        ],
      },
      {
        heading: "Wo liegen die Luxushotels in Berlin?",
        body: [
          "Klar konzentriert: rund um Pariser Platz und Gendarmenmarkt in Mitte sowie am Kurfürstendamm in der City West. Beide Lagen sind erstklassig angebunden und legen dir Sehenswürdigkeiten, Shopping und Gastronomie vor die Tür.",
        ],
      },
      {
        heading: "Lohnt sich Luxus in Berlin im Vergleich zu anderen Metropolen?",
        body: [
          "Ja — Berlins 5-Sterne-Preise liegen spürbar unter denen von Paris, London oder München bei vergleichbarer Qualität. Für ein Grandhotel-Erlebnis mit Sternerestaurant zahlst du hier oft deutlich weniger als anderswo.",
        ],
      },
    ],
    faq: [
      { q: "Was kostet ein Luxushotel in Berlin?", a: "5-Sterne-Häuser starten je nach Saison bei rund 290 € pro Nacht; Top-Suiten in Häusern wie dem Adlon liegen deutlich höher. Unter der Woche und in der Nebensaison sind die Preise am attraktivsten." },
      { q: "Welches Luxushotel hat das beste Restaurant?", a: "Mehrere Berliner Luxushäuser führen Sternerestaurants: das Lorenz Adlon Esszimmer (2 Sterne), das FACIL im Mandala (2 Sterne) und das Hugos im InterContinental (2 Sterne). Mehr dazu im Gourmet-Guide." },
      { q: "Welche Luxushotels haben einen Spa?", a: "Adlon, Waldorf Astoria (Spa Guerlain), InterContinental, de Rome und Mandala (ONO Spa) verfügen über große Spa-Bereiche. Details findest du im Wellness-Guide." },
      { q: "Wo wohnt man als Erstbesucher luxuriös am besten?", a: "In Mitte rund um Pariser Platz und Gendarmenmarkt — von hier erreichst du die wichtigsten Sehenswürdigkeiten zu Fuß." },
    ],
    gygQuery: "Berlin Highlights Tour",
    related: [
      { label: "Luxushotels — alle Häuser & Bezirke", href: "/kategorien/luxushotels/" },
      { label: "Hotels mit Gourmet-Küche", href: "/gourmet-hotels-berlin/" },
      { label: "Wellness- & Spa-Hotels", href: "/wellness-spa-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben die schönsten Rooftop-Bars?", href: "/rooftop-bars-hotels-berlin/" },
      { label: "Wo gibt es romantische Hotels für Paare?", href: "/romantische-hotels-berlin/" },
      { label: "Welche Hotels sind besonders geschichtsträchtig?", href: "/historische-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BOUTIQUE ─────────────────────────
  {
    slug: "boutique-hotels-berlin-charme",
    title: "Boutique-Hotels in Berlin: charmante Häuser mit Charakter",
    description:
      "Boutique-Hotels in Berlin: kleine, individuelle Häuser mit Design und Charakter — vom Michelberger in Friedrichshain bis zum Hotel Oderberger in Prenzlauer Berg.",
    kicker: "Hotel-Kategorie · Boutique",
    intro: [
      "Boutique-Hotels sind das Gegenstück zur Kette: 20 bis 80 Zimmer, alle individuell, oft in Altbauten oder umgebauten Industriegebäuden. Berlin hat eine der dichtesten Boutique-Hotel-Szenen Europas.",
      "Friedrichshain-Kreuzberg und Prenzlauer Berg sind die Boutique-Hochburgen, aber auch Mitte und die City West haben herausragende Häuser. Wir zeigen die charmantesten — verifiziert und einzeln vorgestellt.",
    ],
    takeaways: [
      "Boutique-Hotels punkten mit Individualität, Design und persönlichem Service.",
      "Die dichteste Auswahl liegt in Friedrichshain-Kreuzberg, Prenzlauer Berg und Mitte.",
      "Preise starten meist bei rund 140 € pro Nacht.",
    ],
    bestFor: ["Design-Fans", "Paare", "Individualreisende", "Berlin-Kenner"],
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
        heading: "Was macht ein gutes Boutique-Hotel aus?",
        body: [
          "Charakter statt Schema F: individuell gestaltete Zimmer, eine klare Designhandschrift, oft inhabergeführt und mit eigener Bar oder eigenem Restaurant. Du merkst sofort, dass jemand mit Haltung dahintersteht.",
          "Das Michelberger Hotel in Friedrichshain ist dafür ein Paradebeispiel — vom Industriebau zum Designhaus mit Dach-Sauna und saisonalem Restaurant.",
        ],
      },
      {
        heading: "Welche Boutique-Hotels sind in Berlin besonders?",
        body: [
          "Das Hotel Oderberger in Prenzlauer Berg residiert im Stadtbad von 1902 — mit erhaltenem historischem Schwimmbecken. Das Sir Savigny und das Henri Hotel stehen für Vintage-Charme in der City West, das Ackselhaus für individuell gestaltete Themen-Zimmer rund um den Kollwitzplatz.",
          "Eine Sonderform ist das Soho House in einem Bauhaus-Bau an der Torstraße — Members-Club mit Hotel, Roof-Pool und eigenem Kino.",
        ],
      },
      {
        heading: "Wo in Berlin gibt es die meisten Boutique-Hotels?",
        body: [
          "Friedrichshain-Kreuzberg gilt als Boutique-Mekka, dicht gefolgt von Prenzlauer Berg (Pankow) und Mitte. In der City West (Charlottenburg) finden sich die eleganteren, klassischeren Vertreter.",
        ],
      },
    ],
    faq: [
      { q: "Was kostet ein Boutique-Hotel in Berlin?", a: "Die meisten Häuser liegen zwischen 140 € und 200 € pro Nacht; gehobene Boutique-Hotels mit 5 Sternen auch darüber." },
      { q: "Boutique-Hotel oder Kette — was ist besser?", a: "Boutique-Häuser bieten mehr Charakter und persönlichen Service, Ketten mehr Standardisierung und Verlässlichkeit. Für ein authentisches Berlin-Erlebnis sind Boutique-Hotels meist die spannendere Wahl." },
      { q: "Sind Boutique-Hotels für Familien geeignet?", a: "Manche ja (das Hotel Oderberger etwa hat Familienzimmer), andere sind eher auf Paare und Individualreisende ausgelegt. Eine gezielte Familienauswahl findest du im Familien-Guide." },
      { q: "In welchem Bezirk wohnt man am charmantesten?", a: "Prenzlauer Berg und Friedrichshain-Kreuzberg für kreativen Charme, die City West für klassische Eleganz." },
    ],
    gygQuery: "Berlin Kieztour",
    related: [
      { label: "Boutique-Hotels — alle Häuser & Bezirke", href: "/kategorien/boutique-hotels/" },
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
      { label: "Boutique-Hotels in Friedrichshain-Kreuzberg", href: "/friedrichshain/" },
      { label: "Charmante Hotels in Berlin", href: "/kategorien/charmante-hotels/" },
    ],
    adjacent: [
      { label: "Welche Hotels sind echte Geheimtipps?", href: "/geheimtipp-hotels-berlin/" },
      { label: "Wo finde ich die besten Designhotels?", href: "/design-hotels-berlin/" },
      { label: "Romantische Hotels für Paare", href: "/romantische-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── DESIGN ─────────────────────────
  {
    slug: "design-hotels-berlin",
    title: "Designhotels in Berlin: Architektur und Stil zum Übernachten",
    description:
      "Designhotels in Berlin: architektonisch durchkomponierte Häuser mit klarer Handschrift — vom 25hours im Bikinihaus bis zum nhow an der Spree.",
    kicker: "Hotel-Kategorie · Design",
    intro: [
      "Berlin ist seit den 2000ern eine Design-Hotel-Hauptstadt. Designhotels denken jedes Detail mit: Möbel, Licht, Texturen, oft eigene Bar und eigenes Restaurant — und eine Architektur, die selbst zur Attraktion wird.",
      "Mitte und Friedrichshain führen, aber auch die City West hat starke Häuser. Wir zeigen die spannendsten Designhotels der Stadt — verifiziert und einzeln vorgestellt.",
    ],
    takeaways: [
      "Designhotels machen Architektur und Innenraum zum eigentlichen Erlebnis.",
      "Stärkste Cluster: Mitte, Friedrichshain-Kreuzberg und die City West.",
      "Preise starten meist bei rund 145–190 € pro Nacht.",
    ],
    bestFor: ["Design-Fans", "Kreative", "Städtetrips", "Architektur-Interessierte"],
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
        heading: "Welches Designhotel in Berlin ist das spektakulärste?",
        body: [
          "Das 25hours Hotel Bikini Berlin im sanierten Bikinihaus von 1957 ist ein Erlebnis: Jungle-Side-Zimmer blicken direkt in den Zoo, die Monkey Bar auf dem Dach hat Panoramablick über Tiergarten und Gedächtniskirche. Architektonisch besonders ist auch das Hotel Q! mit geschwungenen Wänden, bei dem Bett und Wanne zur baulichen Einheit verschmelzen.",
        ],
      },
      {
        heading: "Welche Designhotels haben eine eigene Handschrift?",
        body: [
          "Das nhow Berlin an der Spree wurde von Karim Rashid gestaltet und ist Europas erstes Musikhotel — mit zwei mietbaren Tonstudios. Das Hotel Zoo am Ku'damm verbindet einen restaurierten Gründerzeitbau mit der Grace Roof-Bar; das AMANO Grand Central steht für klare Linien und eine vielbesuchte Dachbar am Hauptbahnhof.",
        ],
      },
      {
        heading: "Wo liegen die besten Designhotels?",
        body: [
          "In Mitte (rund um Alexanderplatz und Hauptbahnhof), in Friedrichshain an der Spree und in der City West am Ku'damm. Alle drei Lagen sind exzellent angebunden.",
        ],
      },
    ],
    faq: [
      { q: "Was unterscheidet ein Designhotel von einem Boutique-Hotel?", a: "Die Begriffe überschneiden sich. Designhotels stellen die gestalterische und architektonische Idee in den Mittelpunkt; Boutique-Hotels betonen Individualität und persönlichen Service. Viele Häuser sind beides." },
      { q: "Was kostet ein Designhotel in Berlin?", a: "Meist 145–190 € pro Nacht, designstarke 5-Sterne-Häuser entsprechend mehr." },
      { q: "Welches Designhotel hat die beste Aussicht?", a: "Das 25hours Bikini mit der Monkey Bar über Tiergarten und Zoo — siehe auch unseren Rooftop-Bar-Guide." },
      { q: "Sind Designhotels gut angebunden?", a: "Ja, die meisten liegen sehr zentral in Mitte, an der Spree oder am Ku'damm mit direkter U-/S-Bahn-Anbindung." },
    ],
    gygQuery: "Berlin Architektur Tour",
    related: [
      { label: "Designhotels — alle Häuser & Bezirke", href: "/kategorien/designhotels/" },
      { label: "Boutique-Hotels in Berlin", href: "/boutique-hotels-berlin-charme/" },
      { label: "Hotels mit Rooftop-Bar", href: "/rooftop-bars-hotels-berlin/" },
      { label: "Hotels in Friedrichshain-Kreuzberg", href: "/friedrichshain/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben die schönsten Dachterrassen?", href: "/rooftop-bars-hotels-berlin/" },
      { label: "Wo finde ich charmante Boutique-Hotels?", href: "/boutique-hotels-berlin-charme/" },
      { label: "Kunst- und Kultur-Hotels in Berlin", href: "/kultur-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── FAMILIE ─────────────────────────
  {
    slug: "familienfreundliche-hotels-berlin",
    title: "Familienfreundliche Hotels in Berlin: kinderfreundlich übernachten",
    description:
      "Familienfreundliche Hotels in Berlin: Familienzimmer, Pool, Apartments mit Küche und kinderfreundliche Lagen — die besten Häuser für den Familienurlaub.",
    kicker: "Hotel-Kategorie · Familie",
    intro: [
      "Familienfreundliche Hotels in Berlin bieten Familienzimmer für vier und mehr Personen, oft Pool, Sauna oder Apartments mit Küchenzeile — und liegen gut zu Tierpark, Mauerpark, Müggelsee oder Museumsinsel.",
      "Pankow, Reinickendorf und Treptow-Köpenick haben das größte Angebot, aber auch zentrale Apartment-Hotels eignen sich bestens. Wir zeigen die verifizierten Häuser für den Familienurlaub.",
    ],
    takeaways: [
      "Familienzimmer, Apartments mit Küche und Pool sind die wichtigsten Familien-Features.",
      "Apartments mit Küchenzeile rechnen sich besonders ab drei bis vier Nächten.",
      "Pankow (Prenzlauer Berg) ist der familienfreundlichste Innenstadt-Kiez.",
    ],
    bestFor: ["Familien", "Längere Aufenthalte", "Reisende mit Kleinkindern", "Großfamilien"],
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
        heading: "Worauf sollte man bei einem Familienhotel in Berlin achten?",
        body: [
          "Auf Familienzimmer oder Apartments mit genug Platz, eine Küchenzeile (spart Restaurantbesuche mit Kindern), idealerweise Pool/Sauna und eine gute ÖPNV-Anbindung. Apartment-Hotels wie das Adina am Hackeschen Markt vereinen Hotelservice mit eigener Küche und Innenpool.",
        ],
      },
      {
        heading: "Welche Hotels sind besonders kinderfreundlich?",
        body: [
          "Das Hotel Müggelsee am See bietet Spa, Strandbad und viel Platz; das Park Inn am Alexanderplatz punktet mit zentraler Lage und Familienzimmern; das Best Western am Borsigturm im Norden hat Pool und Sauna. Charmant und zentral: das Hotel Oderberger mit historischem Pool nahe Mauerpark.",
        ],
      },
      {
        heading: "Welche Lage ist für Familien am besten?",
        body: [
          "Prenzlauer Berg (Pankow) für entspanntes Innenstadt-Wohnen mit Spielplätzen und Cafés, der grüne Norden (Reinickendorf) und der Müggelsee (Treptow-Köpenick) für Natur. Wer Sightseeing priorisiert, wählt ein Apartment-Hotel in Mitte.",
        ],
      },
    ],
    faq: [
      { q: "Welche Hotels in Berlin haben Familienzimmer?", a: "Viele größere Häuser (Park Inn, Estrel, Hotel Berlin Berlin) sowie familienorientierte Boutique-Häuser (Hotel Oderberger, Schulz Hotel). Apartments mit Küche bieten zusätzlich Platz und Flexibilität." },
      { q: "Was kostet ein Familienhotel in Berlin?", a: "Familienzimmer und Apartments liegen meist zwischen 110 € und 165 € pro Nacht; ab drei Nächten lohnen sich Apartments mit Küche besonders." },
      { q: "Welcher Bezirk ist am familienfreundlichsten?", a: "Pankow mit Prenzlauer Berg gilt als der familienfreundlichste Innenstadt-Bezirk; Reinickendorf und Treptow-Köpenick punkten mit viel Grün und Wasser." },
      { q: "Sind Berliner Hotels auf Kinder eingestellt?", a: "Familienorientierte Häuser bieten Kinderbetten, Familienzimmer und oft Pool. Spezielle Kinderbetreuung ist in der Stadthotellerie selten — frag vorab nach den konkreten Angeboten." },
    ],
    gygQuery: "Berlin mit Kindern",
    related: [
      { label: "Familienhotels — alle Häuser & Bezirke", href: "/kategorien/familienhotels/" },
      { label: "Berlin mit Kindern — Reiseplan", href: "/reiseplaner/berlin-mit-kindern/" },
      { label: "Familienhotels in Pankow", href: "/pankow/" },
      { label: "Seehotels in Treptow-Köpenick", href: "/treptow/" },
    ],
    adjacent: [
      { label: "Was kann man in Berlin mit Kindern bei Regen machen?", href: "/reiseplaner/berlin-bei-regen/" },
      { label: "Welche Hotels haben Pool und Sauna?", href: "/wellness-spa-hotels-berlin/" },
      { label: "Günstige Familienhotels in Berlin", href: "/budget-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── TIERFREUNDLICH ─────────────────────────
  {
    slug: "tierfreundliche-hotels-berlin",
    title: "Tierfreundliche Hotels in Berlin: mit Hund verreisen",
    description:
      "Tierfreundliche Hotels in Berlin: Häuser, die Hunde und Haustiere willkommen heißen — mit Tipps zu Gebühren, Regeln und den besten Lagen für Gassi-Runden.",
    kicker: "Hotel-Kategorie · Haustiere",
    intro: [
      "Mit dem Vierbeiner nach Berlin? Viele Hotels nehmen Hunde und kleine Haustiere auf — oft gegen eine Gebühr und nach Voranmeldung. Wichtig ist, die genauen Regeln (Größe, Anzahl, Aufpreis) vor der Buchung direkt mit dem Haus zu klären.",
      "Wir zeigen Häuser, die sich für eine Reise mit Hund anbieten, und worauf du achten solltest — von der Lage nahe Parks bis zum Service vor Ort.",
    ],
    takeaways: [
      "Viele Berliner Hotels akzeptieren Haustiere auf Anfrage — Konditionen vorab bestätigen lassen.",
      "Achte auf Gebühr, erlaubte Größe/Anzahl und Regeln (Allein-Lassen, Restaurantbereiche).",
      "Lagen nahe Tiergarten, Mauerpark oder den Seen erleichtern die Gassi-Runden.",
    ],
    bestFor: ["Reisende mit Hund", "Tierhalter", "Roadtripper", "Naturliebhaber"],
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
        heading: "Worauf muss man bei einem Hotel mit Hund achten?",
        body: [
          "Kläre vor der Buchung verbindlich: Wird das Haustier akzeptiert, welche Gebühr fällt an, sind Größe oder Anzahl begrenzt, und darf der Hund im Zimmer allein bleiben? Viele Häuser erlauben Hunde nur in bestimmten Zimmerkategorien und nicht in Restaurant- oder Spa-Bereichen.",
          "Praktisch sind ebenerdige Lagen, Apartments mit eigenem Eingang und die Nähe zu Grünflächen. Das Adina am Hackeschen Markt mit Apartments und Küche etwa erleichtert Reisen mit Tier.",
        ],
      },
      {
        heading: "Welche Lagen eignen sich für Reisen mit Hund?",
        body: [
          "Häuser nahe Tiergarten (City West), Mauerpark (Prenzlauer Berg) oder am Müggelsee bieten kurze Wege ins Grüne. Das Hotel Müggelsee punktet mit See und Strandbad direkt vor der Tür; zentrale Häuser am Tiergarten verbinden City-Nähe mit Auslauf.",
        ],
      },
      {
        heading: "Was kostet die Mitnahme eines Hundes im Hotel?",
        body: [
          "Üblich sind 15–30 € pro Nacht als Reinigungs- oder Haustiergebühr; manche Häuser nehmen Hunde kostenlos auf, andere gar nicht. Da sich Konditionen ändern, gilt: immer direkt beim Hotel anfragen und schriftlich bestätigen lassen.",
        ],
      },
    ],
    faq: [
      { q: "Welche Hotels in Berlin erlauben Hunde?", a: "Viele Häuser quer durch alle Kategorien nehmen Hunde auf Anfrage auf. Die konkrete Erlaubnis, Gebühr und Größenbeschränkung solltest du immer vorab direkt mit dem Hotel klären, da sich Richtlinien ändern können." },
      { q: "Was kostet ein Hund im Hotel?", a: "Meist 15–30 € pro Nacht; einzelne Häuser sind kostenlos oder erlauben keine Tiere. Vorab bestätigen lassen." },
      { q: "Darf der Hund im Hotelzimmer allein bleiben?", a: "Das handhaben Häuser unterschiedlich; viele verbieten es oder verlangen, dass der Hund in einer Box bleibt. Kläre das vor der Buchung." },
      { q: "Wo kann ich in Berlin mit Hund spazieren gehen?", a: "Tiergarten, Mauerpark, Tempelhofer Feld, Grunewald und die Uferwege am Müggelsee und an der Havel eignen sich besonders gut." },
    ],
    gygQuery: "Berlin Stadtpark Spaziergang",
    related: [
      { label: "Hotels in der grünen City West (Charlottenburg)", href: "/charlottenburg/" },
      { label: "Seehotels in Treptow-Köpenick", href: "/treptow/" },
      { label: "Ruhige Hotels im Grünen (Steglitz-Zehlendorf)", href: "/steglitz/" },
      { label: "Alle Hotelkategorien im Überblick", href: "/kategorien/" },
    ],
    adjacent: [
      { label: "Welche Hotels sind besonders familienfreundlich?", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Wo übernachtet man ruhig im Grünen?", href: "/steglitz/" },
      { label: "Hotels mit Apartment und Küche", href: "/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── WELLNESS ─────────────────────────
  {
    slug: "wellness-spa-hotels-berlin",
    title: "Wellness- und Spa-Hotels in Berlin: entspannen in der Hauptstadt",
    description:
      "Wellness- und Spa-Hotels in Berlin: Häuser mit Pool, Sauna und Spa — von Luxus-Spas in Mitte bis zum Seehotel am Müggelsee mit eigenem Strandbad.",
    kicker: "Hotel-Kategorie · Wellness",
    intro: [
      "Wellness- und Spa-Hotels mit großem Bade- und Saunabereich findest du in Berlin vor allem in der gehobenen Hotellerie in Mitte und im grünen Süden und Südosten am Wasser. Pools, Saunenlandschaften und Massagen gehören hier zum Standard.",
      "Wir zeigen die Häuser mit echtem Spa-Angebot — vom Stadt-Spa im Luxushotel bis zum Seehotel mit Strandbad.",
    ],
    takeaways: [
      "Die besten Stadt-Spas liegen in den Luxushäusern in Mitte und der City West.",
      "Für Wellness mit Naturbezug eignen sich der grüne Süden und der Müggelsee.",
      "Achte auf Pool, Saunenlandschaft und Massageangebot — nicht jedes Haus hat alles.",
    ],
    bestFor: ["Erholungssuchende", "Paare", "Spa-Liebhaber", "Wochenend-Reisende"],
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
        heading: "Welche Hotels in Berlin haben den besten Spa?",
        body: [
          "Im Luxussegment führen die Waldorf Astoria (zweistöckiger Spa Guerlain), das Mandala (ONO Spa, Pool im Glas-Atrium-Umfeld), das InterContinental, das Adlon und das Hotel de Rome (Pool im früheren Tresorraum). Diese Häuser verbinden Spa, Pool und gehobene Gastronomie unter einem Dach.",
        ],
      },
      {
        heading: "Wo gibt es Wellness mit Naturbezug?",
        body: [
          "Am Wasser im Südosten: Das Hotel Müggelsee bietet einen großen Spa-Bereich und ein eigenes Strandbad direkt am größten See der Stadt — ideal, um Sauna und Schwimmen im See zu verbinden. Auch der grüne Berliner Südwesten (Grunewald, Wannsee) eignet sich für ruhige Wellness-Aufenthalte.",
        ],
      },
      {
        heading: "Lohnt sich ein Spa-Wochenende in Berlin?",
        body: [
          "Sehr — gerade die Kombination aus Stadt-Spa und Kultur ist reizvoll: vormittags Museumsinsel, nachmittags Sauna und Massage. Für reine Erholung ist ein Seehotel am Müggelsee die ruhigere Wahl.",
        ],
      },
    ],
    faq: [
      { q: "Welche Berliner Hotels haben einen Pool?", a: "Unter anderem Adlon, de Rome (Pool im Tresorraum), Mandala, Waldorf Astoria, InterContinental, Soho House (Roof-Pool) sowie Apartment-Häuser wie das Adina. Das Hotel Müggelsee bietet zusätzlich ein Strandbad am See." },
      { q: "Was kostet ein Wellness-Hotel in Berlin?", a: "Stadt-Spas im Luxussegment starten bei rund 240–290 € pro Nacht; das Seehotel Müggelsee bei etwa 135 €." },
      { q: "Wo gibt es Wellness am See?", a: "Am Müggelsee (Treptow-Köpenick) sowie im grünen Südwesten rund um Wannsee und Grunewald." },
      { q: "Kann man Spa-Bereiche auch ohne Übernachtung nutzen?", a: "Einige Häuser bieten Day-Spa-Angebote an; das variiert stark — am besten direkt beim Hotel anfragen." },
    ],
    gygQuery: "Berlin Spa Wellness",
    related: [
      { label: "Wellness-Hotels — alle Häuser & Bezirke", href: "/kategorien/wellness-hotels/" },
      { label: "Seehotels in Treptow-Köpenick", href: "/treptow/" },
      { label: "Ruhige Hotels in Steglitz-Zehlendorf", href: "/steglitz/" },
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels eignen sich für ein Paar-Wochenende?", href: "/romantische-hotels-berlin/" },
      { label: "Wo übernachtet man am Wasser?", href: "/treptow/" },
      { label: "Luxushotels mit Spa und Sternerestaurant", href: "/luxus-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BUDGET ─────────────────────────
  {
    slug: "budget-hotels-berlin",
    title: "Günstige Hotels in Berlin: preiswert übernachten ohne Kompromisse",
    description:
      "Günstige Hotels in Berlin: saubere, gut angebundene Häuser unter 100 € — von zentralen 3-Sterne-Hotels bis zu kreativen Budget-Unterkünften in den Trendvierteln.",
    kicker: "Hotel-Kategorie · Budget",
    intro: [
      "Günstig in Berlin übernachten heißt nicht automatisch: weit draußen. Zentrale 3-Sterne-Häuser, kreative Budget-Konzepte und Apartments mit Küche liefern saubere Zimmer mit guter Anbindung — oft schon unter 100 € pro Nacht.",
      "Wir zeigen verifizierte Budget-Häuser quer durch die Stadt und verraten, wann und wo du am meisten sparst.",
    ],
    takeaways: [
      "Saubere, zentrale Budget-Hotels gibt es in Berlin oft schon ab 65–95 € pro Nacht.",
      "Günstige Bezirke: Spandau, Marzahn-Hellersdorf, Neukölln und Teile von Friedrichshain.",
      "Am meisten sparst du unter der Woche und in der Nebensaison.",
    ],
    bestFor: ["Budget-Reisende", "Junge Reisende", "Kurztrips", "Sparfüchse"],
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
        heading: "Wo findet man günstige Hotels in zentraler Lage?",
        body: [
          "Direkt am Alexanderplatz liegt das H2 Hotel ab rund 65 €; das inhabergeführte Circus Hotel am Rosenthaler Platz ist günstig und sehr berlinerisch. In der City West bietet das Hampton by Hilton faire Preise mit warmem Frühstück, an der East Side Gallery das Schulz Hotel preiswerte Zimmer und Familienzimmer.",
        ],
      },
      {
        heading: "Welche günstigen Unterkünfte sind besonders?",
        body: [
          "Der Hüttenpalast in Neukölln lässt dich in alten Wohnwagen und Hütten in einer Fabrikhalle übernachten — ein Erlebnis zum kleinen Preis. Für das absolute Spar-Minimum sorgt das ibis budget in Hellersdorf ab rund 49 € mit U-Bahn-Anschluss.",
        ],
      },
      {
        heading: "Wann sind Berliner Hotels am günstigsten?",
        body: [
          "In der Nebensaison (November bis Februar außerhalb der Feiertage) und unter der Woche. Großveranstaltungen und Messen treiben die Preise; wer flexibel ist, bucht antizyklisch und früh.",
        ],
        bullets: [
          "Nebensaison: Winter (außer Weihnachten/Silvester) ist am günstigsten.",
          "Dienstag bis Donnerstag ist oft günstiger als das Wochenende.",
          "Messen & Großevents meiden oder sehr früh buchen.",
        ],
      },
    ],
    faq: [
      { q: "Was kostet ein günstiges Hotel in Berlin?", a: "Solide 3-Sterne-Häuser starten bei rund 65–95 € pro Nacht, Budget-Häuser am Stadtrand ab etwa 49 €." },
      { q: "In welchen Bezirken sind Hotels am günstigsten?", a: "Spandau, Marzahn-Hellersdorf und Neukölln sind die preiswertesten, dazu Teile von Friedrichshain und Lichtenberg." },
      { q: "Lohnt sich ein günstiges Hotel zentral oder am Stadtrand?", a: "Wer viel Sightseeing plant, spart durch zentrale Lagen Zeit und Fahrtkosten. Am Stadtrand zahlst du weniger fürs Zimmer, dafür mehr Fahrzeit." },
      { q: "Sind günstige Hotels in Berlin sauber und sicher?", a: "Ja — die hier genannten Häuser sind geprüft. Achte bei sehr günstigen Angeboten auf aktuelle Gästebewertungen und die genaue Lage." },
    ],
    gygQuery: "Berlin Free Walking Tour",
    related: [
      { label: "Billige Hotels — alle Bezirke", href: "/kategorien/billige-hotels/" },
      { label: "Günstige Hotels in Spandau", href: "/spandau/" },
      { label: "Preiswerte Hotels in Neukölln", href: "/neukoelln/" },
      { label: "Budget-Hotels in Marzahn-Hellersdorf", href: "/marzahn/" },
    ],
    adjacent: [
      { label: "Wie buche ich ein Hotel am günstigsten?", href: "/hotel-buchungstipps/" },
      { label: "Welche Hotels sind kreativ und günstig zugleich?", href: "/geheimtipp-hotels-berlin/" },
      { label: "Günstige Familienhotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ROMANTISCH ─────────────────────────
  {
    slug: "romantische-hotels-berlin",
    title: "Romantische Hotels in Berlin: die schönsten Häuser für Paare",
    description:
      "Romantische Hotels in Berlin für Paare: stilvolle Suiten, Spa für zwei und intime Boutique-Häuser — die schönsten Adressen für eine Auszeit zu zweit.",
    kicker: "Hotel-Kategorie · Romantik",
    intro: [
      "Berlin hat für eine Auszeit zu zweit viel zu bieten: stilvolle Suiten mit Stadtblick, intime Boutique-Häuser, Spas für zwei und Hotels mit Live-Musik oder Dachterrasse. Romantik geht hier klassisch-elegant genauso wie kreativ.",
      "Wir zeigen die schönsten Häuser für Paare — vom Schlosshotel im Grünen bis zum Boutique-Haus mit persönlichem Service.",
    ],
    takeaways: [
      "Für Romantik zählen Atmosphäre, intime Größe und besondere Extras (Spa, Suite, Aussicht).",
      "Boutique- und Schlosshotels bieten oft mehr Charme als große Häuser.",
      "Ein Spa-Bereich oder eine Dachterrasse hebt das Paar-Wochenende spürbar.",
    ],
    bestFor: ["Paare", "Honeymoon", "Jahrestage", "Romantische Kurztrips"],
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
        heading: "Welche Hotels sind in Berlin am romantischsten?",
        body: [
          "Für stilvolle Romantik mit Charakter: das Orania.Berlin am Oranienplatz mit Live-Musik im Salon, das designstarke Hotel Zoo mit der Grace Roof-Bar und das diskrete Patrick Hellmann Schlosshotel im Grunewald (Interiors von Karl Lagerfeld). Wer es intim und persönlich mag, wählt das Ackselhaus mit Themen-Zimmern oder das Myer's Hotel nahe Kollwitzplatz mit Garten.",
        ],
      },
      {
        heading: "Was macht ein Hotel romantisch?",
        body: [
          "Atmosphäre vor Größe: ein persönlich geführtes Haus, eine schöne Suite, ein ruhiger Garten oder eine Dachterrasse mit Aussicht, idealerweise ein Spa. Kleine Häuser punkten hier oft mehr als die ganz großen Hotels.",
        ],
      },
      {
        heading: "Wo verbringt man als Paar ein Wochenende in Berlin?",
        body: [
          "Prenzlauer Berg für entspannten Charme und gute Cafés, die City West für klassische Eleganz, der grüne Südwesten für Ruhe und Natur. Kombiniert mit einem Spa-Besuch und einem Dinner wird daraus ein rundes Paar-Wochenende.",
        ],
      },
    ],
    faq: [
      { q: "Welches Hotel eignet sich für einen Heiratsantrag?", a: "Häuser mit Aussicht oder besonderer Atmosphäre — etwa das Hotel Zoo mit Roof-Bar, das Patrick Hellmann Schlosshotel im Grünen oder ein Luxushaus mit Suite und Spa." },
      { q: "Gibt es Hotels mit Spa für zwei?", a: "Ja — die großen Luxushäuser (Waldorf Astoria, Mandala, InterContinental) bieten Paar-Anwendungen. Mehr im Wellness-Guide." },
      { q: "Was kostet ein romantisches Wochenende in Berlin?", a: "Je nach Anspruch: Boutique-Häuser ab rund 160 €, Schloss- und Luxushotels ab rund 280–290 € pro Nacht." },
      { q: "Welcher Bezirk ist am romantischsten?", a: "Prenzlauer Berg für Charme, die City West für Eleganz und der grüne Südwesten für Ruhe und Natur." },
    ],
    gygQuery: "Berlin Spree Bootsfahrt",
    related: [
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Wellness- & Spa-Hotels", href: "/wellness-spa-hotels-berlin/" },
      { label: "Boutique-Hotels mit Charme", href: "/boutique-hotels-berlin-charme/" },
      { label: "Hotels mit Rooftop-Bar", href: "/rooftop-bars-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben ein Sternerestaurant?", href: "/gourmet-hotels-berlin/" },
      { label: "Wo gibt es Spa-Hotels für zwei?", href: "/wellness-spa-hotels-berlin/" },
      { label: "Ruhige Hotels im Grünen", href: "/steglitz/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BUSINESS ─────────────────────────
  {
    slug: "geschaeftsreisen-hotels-berlin",
    title: "Hotels für Geschäftsreisen in Berlin: die besten Business-Adressen",
    description:
      "Business-Hotels in Berlin: Tagungsräume, schnelles WLAN, Express-Check-in und beste Verkehrsanbindung — die besten Hotels für Geschäftsreisende.",
    kicker: "Hotel-Kategorie · Business",
    intro: [
      "Business-Hotels in Berlin liegen meist in Mitte (Hauptbahnhof, Potsdamer Platz) oder rund um die Messe in der City West. Tagungstechnik, Express-Check-in, schnelles WLAN und 24h-Service sind Standard.",
      "Wir zeigen die besten Adressen für Geschäftsreisende — von der repräsentativen Luxus-Adresse bis zum effizienten Haus mit guter Anbindung.",
    ],
    takeaways: [
      "Top-Lagen für Business: Mitte (Hauptbahnhof/Potsdamer Platz) und die Messe-nahe City West.",
      "Wichtig sind Tagungsräume, schnelles WLAN, Express-Check-in und ÖPNV-Nähe.",
      "Repräsentative Termine? Dann ein Luxushaus mit Konferenzbereich.",
    ],
    bestFor: ["Geschäftsreisende", "Tagungen & Kongresse", "Messebesucher", "Vielreisende"],
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
        heading: "Welches Hotel eignet sich für Geschäftsreisen am besten?",
        body: [
          "Für repräsentative Termine und große Tagungen ist das InterContinental mit umfangreichen Kongresskapazitäten erste Wahl, ebenso das Adlon und das Regent in Mitte. Wer effizient und zentral wohnen will, bucht das AMANO Grand Central am Hauptbahnhof oder das Park Inn direkt am Alexanderplatz.",
        ],
      },
      {
        heading: "Worauf kommt es bei einem Business-Hotel an?",
        body: [
          "Schnelles, verlässliches WLAN, Schreibtisch, frühes Frühstück, Express-Check-in und kurze Wege zu Bahn und Messe. Für längere Projekte sind Apartment-Hotels wie das Adina (mit Küche) praktisch und oft günstiger.",
        ],
      },
      {
        heading: "Wo wohnt man für die Berliner Messe am besten?",
        body: [
          "Für das Messegelände am Funkturm ist die City West (Charlottenburg) ideal. Für Veranstaltungen in Mitte oder am Hauptbahnhof wohnst du dort am kürzesten; Lichtenberg bietet günstige, gut angebundene Alternativen.",
        ],
      },
    ],
    faq: [
      { q: "Welche Hotels haben Tagungsräume in Berlin?", a: "Große Häuser wie InterContinental, Adlon, Regent und das Estrel (Deutschlands größtes Convention-Hotel) bieten umfangreiche Tagungs- und Kongresskapazitäten." },
      { q: "Was kostet ein Business-Hotel in Berlin?", a: "Solide Business-Häuser liegen bei 110–160 € pro Nacht, repräsentative Luxushäuser ab rund 240 €." },
      { q: "Welche Lage ist für Geschäftsreisen am besten?", a: "Mitte (Hauptbahnhof, Potsdamer Platz) für zentrale Termine, die City West für die Messe, Lichtenberg für günstige, gut angebundene Optionen." },
      { q: "Gibt es Apartments für längere Geschäftsaufenthalte?", a: "Ja — Apartment-Hotels wie das Adina oder Living Hotels bieten Küche und Wohnbereich, ideal ab mehreren Nächten." },
    ],
    gygQuery: "Berlin Stadtrundfahrt",
    related: [
      { label: "Business Hotels — alle Bezirke", href: "/kategorien/business-hotels/" },
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
      { label: "Hotels in Lichtenberg (günstig & angebunden)", href: "/lichtenberg/" },
      { label: "Apartment-Hotels in Berlin", href: "/kategorien/apartments/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben Shuttle-Service?", href: "/kategorien/hotels-mit-shuttle/" },
      { label: "Wo wohnt man zentral in Berlin?", href: "/zentrale-hotels-berlin/" },
      { label: "Hotelbuchung: Tipps für den besten Preis", href: "/hotel-buchungstipps/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── HISTORISCH ─────────────────────────
  {
    slug: "historische-hotels-berlin",
    title: "Historische Hotels in Berlin: übernachten mit Geschichte",
    description:
      "Historische Hotels in Berlin: Häuser mit Vergangenheit — vom Adlon am Brandenburger Tor über das Hotel de Rome in einer alten Bank bis zum Stadtbad-Hotel Oderberger.",
    kicker: "Hotel-Kategorie · Geschichte",
    intro: [
      "Berlins Geschichte lässt sich auch im Hotelbett erleben: Grandhotels mit über hundertjähriger Tradition, umgebaute Banken, ehemalige Stadtbäder und Schlösser. Diese Häuser erzählen Stadtgeschichte — und sind selbst sehenswert.",
      "Wir zeigen die faszinierendsten historischen Hotels Berlins, mit den Fakten hinter den Mauern.",
    ],
    takeaways: [
      "Berlins historische Hotels reichen vom Grandhotel von 1907 bis zum Stadtbad von 1902.",
      "Viele verbinden originale Bausubstanz mit modernem Komfort.",
      "Besonders dicht ist das Angebot in Mitte und der City West.",
    ],
    bestFor: ["Geschichtsinteressierte", "Architektur-Fans", "Kultur-Reisende", "Besondere Anlässe"],
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
        heading: "Welche historischen Hotels lohnen sich in Berlin?",
        body: [
          "Das Hotel Adlon Kempinski (1907 eröffnet, 1997 an gleicher Stelle neu erbaut) ist die berühmteste historische Adresse, direkt am Brandenburger Tor. Das Hotel de Rome residiert im Bankgebäude von 1889 — mit Pool im früheren Tresorraum. Das Hotel Bristol am Ku'damm empfängt seit 1952 Gäste.",
        ],
      },
      {
        heading: "Welche Häuser sind in besonderen Gebäuden untergebracht?",
        body: [
          "Das Hotel Oderberger in Prenzlauer Berg liegt im Stadtbad von 1902 — mit erhaltenem Schwimmbecken in der Original-Halle. Das Soho House nutzt ein Bauhaus-Kaufhaus von 1928, das Patrick Hellmann Schlosshotel das Schloss Pannwitz von 1914. Übernachten wird hier zur kleinen Zeitreise.",
        ],
      },
      {
        heading: "Wo liegen Berlins historische Hotels?",
        body: [
          "Schwerpunkt Mitte (rund um Pariser Platz und Bebelplatz) und City West (Ku'damm), dazu einzelne Perlen in Prenzlauer Berg und im grünen Grunewald.",
        ],
      },
    ],
    faq: [
      { q: "Welches ist das älteste Hotel Berlins?", a: "Zu den traditionsreichsten zählt das Adlon (ursprünglich 1907). Viele historische Häuser residieren in noch älteren Gebäuden, etwa das Hotel de Rome in einer Bank von 1889 oder das Hotel Oderberger im Stadtbad von 1902." },
      { q: "Sind historische Hotels modern ausgestattet?", a: "Ja — die hier genannten Häuser verbinden originale Bausubstanz mit modernem Komfort, Spa und teils Sterneküche." },
      { q: "Was kostet ein historisches Hotel in Berlin?", a: "Je nach Haus zwischen rund 165 € (Hotel Oderberger) und 480 € (Top-Suiten im Adlon)." },
      { q: "Kann man die historischen Hotels auch ohne Übernachtung besichtigen?", a: "Lobby, Bar oder Restaurant sind meist öffentlich zugänglich — ein Kaffee in der Adlon-Lobby oder ein Drink in der Bristol Bar ist auch ohne Zimmer möglich." },
    ],
    gygQuery: "Berlin Geschichte Tour",
    related: [
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Kunst- und Kultur-Hotels", href: "/kultur-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
      { label: "Hotels in Charlottenburg", href: "/charlottenburg/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben ein Sternerestaurant?", href: "/gourmet-hotels-berlin/" },
      { label: "Wo finde ich Kunst- und Kultur-Hotels?", href: "/kultur-hotels-berlin/" },
      { label: "3 Tage Berlin — der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── GEHEIMTIPP ─────────────────────────
  {
    slug: "geheimtipp-hotels-berlin",
    title: "Geheimtipp-Hotels in Berlin: übernachten abseits der Massen",
    description:
      "Geheimtipp-Hotels in Berlin: besondere Häuser abseits der Touristenpfade — vom Wohnwagen-Hotel in Neukölln bis zum Schloss-Gästehaus in Dahlem.",
    kicker: "Hotel-Kategorie · Geheimtipps",
    intro: [
      "Abseits der bekannten Adressen versteckt Berlin echte Hoteljuwelen: ein Wohnwagen-Hotel in einer Fabrikhalle, ein Gästehaus der Max-Planck-Gesellschaft, individuell gestaltete Boutique-Häuser in ruhigen Kiezen. Wer das ungewöhnliche Berlin sucht, wird hier fündig.",
      "Wir zeigen verifizierte Geheimtipps — Häuser mit Charakter, die du so nicht auf jeder Liste findest.",
    ],
    takeaways: [
      "Geheimtipps punkten mit ungewöhnlichen Konzepten und ruhigen Lagen.",
      "Oft inhabergeführt, mit Themen-Zimmern oder besonderer Architektur.",
      "Ideal für Berlin-Kenner, die das Übliche schon kennen.",
    ],
    bestFor: ["Berlin-Kenner", "Individualreisende", "Kreative", "Neugierige"],
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
        heading: "Welche ungewöhnlichen Hotels gibt es in Berlin?",
        body: [
          "Der Hüttenpalast in Neukölln lässt dich in alten Wohnwagen und selbstgebauten Hütten in einer ehemaligen Fabrikhalle übernachten. Das Harnack-Haus in Dahlem, 1929 als Tagungshaus erbaut und heute Gästehaus der Max-Planck-Gesellschaft, ist eine ruhige, akademisch geprägte Adresse — beide kennt kaum ein klassischer Tourist.",
        ],
      },
      {
        heading: "Welche Boutique-Geheimtipps lohnen sich?",
        body: [
          "Das Ackselhaus am Kollwitzplatz mit individuell gestalteten Themen-Zimmern und Innenhof, das Myer's Hotel im ruhigen Prenzlauer Berg mit Garten und das charmante Hotel Oderberger im historischen Stadtbad. Wer ein heterofriendly Designhotel im queeren Schöneberg sucht, ist im Axel Hotel gut aufgehoben.",
        ],
      },
      {
        heading: "Wo findet man die ruhigen Geheimtipps?",
        body: [
          "In den Wohnkiezen abseits der Hotspots: Prenzlauer Berg (Pankow), Dahlem (Steglitz-Zehlendorf), die Wohnstraßen Neuköllns und Schöneberg. Du wohnst dort ruhiger und authentischer als in den Touristenzentren.",
        ],
      },
    ],
    faq: [
      { q: "Was ist das ungewöhnlichste Hotel Berlins?", a: "Der Hüttenpalast in Neukölln mit Übernachtung in Wohnwagen und Hütten in einer Fabrikhalle zählt zu den originellsten Konzepten der Stadt." },
      { q: "Wo übernachtet man abseits der Touristen?", a: "In den Wohnkiezen von Prenzlauer Berg, Dahlem, Neukölln und Schöneberg — ruhiger, persönlicher und oft günstiger als in Mitte." },
      { q: "Sind Geheimtipp-Hotels teurer?", a: "Nicht unbedingt — die Bandbreite reicht vom günstigen Hüttenpalast bis zum gehobenen Boutique-Haus. Charakter gibt es in jeder Preisklasse." },
      { q: "Lohnen sich Geheimtipps für den ersten Berlin-Besuch?", a: "Wer zentral und klassisch übernachten will, ist in Mitte besser aufgehoben. Geheimtipps lohnen sich für Wiederkehrer und Individualreisende." },
    ],
    gygQuery: "Berlin Geheimtipps Tour",
    related: [
      { label: "Boutique-Hotels mit Charme", href: "/boutique-hotels-berlin-charme/" },
      { label: "Preiswerte Hotels in Neukölln", href: "/neukoelln/" },
      { label: "Ruhige Hotels in Steglitz-Zehlendorf", href: "/steglitz/" },
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Boutique-Hotels lohnen sich?", href: "/boutique-hotels-berlin-charme/" },
      { label: "Wo finde ich günstige, kreative Unterkünfte?", href: "/budget-hotels-berlin/" },
      { label: "Hotels nahe dem Berliner Nachtleben", href: "/berliner-nachtleben-hotels/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ROOFTOP ─────────────────────────
  {
    slug: "rooftop-bars-hotels-berlin",
    title: "Hotels mit Rooftop-Bar in Berlin: über den Dächern der Stadt",
    description:
      "Hotels mit Rooftop-Bar in Berlin: die besten Dachterrassen mit Panoramablick — von der Monkey Bar im 25hours bis zur Bar Lang in der Waldorf Astoria.",
    kicker: "Hotel-Kategorie · Rooftop",
    intro: [
      "Berlin von oben: Mehrere Hotels haben Dachbars mit Panoramablick über Tiergarten, City West oder den Berliner Dom. Manche sind nur für Hotelgäste, viele aber öffentlich zugänglich — ideal für den Sundowner.",
      "Wir zeigen die Häuser mit den besten Rooftop-Bars und Dachterrassen — alle mit verifizierten Dach-Highlights.",
    ],
    takeaways: [
      "Die spektakulärsten Dachbars: Monkey Bar (25hours), Bar Lang im 31. Stock (Waldorf Astoria).",
      "Viele Rooftop-Bars sind auch ohne Übernachtung zugänglich.",
      "Beste Zeit für den Blick: zum Sonnenuntergang an warmen Abenden.",
    ],
    bestFor: ["Aussicht-Fans", "Paare", "Sundowner-Liebhaber", "Fotografen"],
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
        heading: "Welche Hotels haben die besten Rooftop-Bars in Berlin?",
        body: [
          "Die berühmteste ist die Monkey Bar im 25hours Hotel Bikini mit Panoramablick über Tiergarten, Zoo und Gedächtniskirche. Hoch hinaus geht es auch in der Bar Lang der Waldorf Astoria im 31. Stock. Das Hotel Zoo hat mit der Grace eine stilvolle Roof-Bar am Ku'damm.",
        ],
      },
      {
        heading: "Welche Dachterrassen lohnen sich noch?",
        body: [
          "Das AMANO Grand Central betreibt eine vielbesuchte Dachbar mit Blick auf den Hauptbahnhof, das Hotel de Rome eine Dachterrasse mit Blick auf den Berliner Dom. Am Alexanderplatz bietet das Park Inn auf dem Dach eine Aussichtsplattform — inklusive des Base-Flying-Erlebnisses.",
        ],
      },
      {
        heading: "Sind die Rooftop-Bars öffentlich zugänglich?",
        body: [
          "Viele ja — die Monkey Bar, die Grace und die AMANO-Dachbar sind auch ohne Übernachtung besuchbar (an Wochenenden teils mit Andrang oder Reservierung). Manche Dachterrassen sind Hotelgästen vorbehalten; im Zweifel vorab beim Haus nachfragen.",
        ],
      },
    ],
    faq: [
      { q: "Welche Rooftop-Bar in Berlin hat die beste Aussicht?", a: "Die Monkey Bar im 25hours Bikini (über Tiergarten und Zoo) und die Bar Lang in der Waldorf Astoria im 31. Stock (über die ganze City West) zählen zu den besten." },
      { q: "Kann man die Hotel-Dachbars ohne Zimmer besuchen?", a: "Viele ja — Monkey Bar, Grace und die AMANO-Dachbar sind öffentlich. An Wochenenden lohnt eine Reservierung." },
      { q: "Wann ist die beste Zeit für eine Rooftop-Bar?", a: "Zum Sonnenuntergang an warmen Abenden. Im Sommer sind die Terrassen abends gut gefüllt." },
      { q: "Welche Hotels mit Dachbar liegen zentral?", a: "Das AMANO am Hauptbahnhof, das de Rome am Bebelplatz und das Park Inn am Alexanderplatz sind sehr zentral; das 25hours und Hotel Zoo liegen in der City West." },
    ],
    gygQuery: "Berlin Skyline Aussicht",
    related: [
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
      { label: "Hotels nahe dem Berliner Nachtleben", href: "/berliner-nachtleben-hotels/" },
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Hotels in Charlottenburg / City West", href: "/charlottenburg/" },
    ],
    adjacent: [
      { label: "Welche Hotels liegen am Berliner Nachtleben?", href: "/berliner-nachtleben-hotels/" },
      { label: "Wo finde ich romantische Hotels mit Aussicht?", href: "/romantische-hotels-berlin/" },
      { label: "Designhotels mit Architektur-Anspruch", href: "/design-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── NACHHALTIG ─────────────────────────
  {
    slug: "nachhaltige-hotels-berlin",
    title: "Nachhaltige Hotels in Berlin: grüner reisen in der Hauptstadt",
    description:
      "Nachhaltige Hotels in Berlin: worauf du bei grünen Unterkünften achten solltest — Zertifikate, Energie, regionale Küche — und welche Häuser glaubwürdig sind.",
    kicker: "Hotel-Kategorie · Nachhaltigkeit",
    intro: [
      "Grüner reisen wird auch in Berlin wichtiger. Nachhaltige Hotels setzen auf Ökostrom, Wassersparen, regionale und biologische Küche, Mülltrennung und faire Arbeitsbedingungen — idealerweise mit einem unabhängigen Zertifikat belegt.",
      "Wir zeigen, woran du ein glaubwürdig nachhaltiges Haus erkennst, und nennen Berliner Hotels mit nachvollziehbaren grünen Ansätzen.",
    ],
    takeaways: [
      "Glaubwürdige Nachhaltigkeit zeigt sich an unabhängigen Zertifikaten, nicht an Marketing-Floskeln.",
      "Achte auf Ökostrom, Wasserspar-Technik, regionale Küche und Mülltrennung.",
      "Frag im Zweifel direkt nach konkreten Maßnahmen und Nachweisen.",
    ],
    bestFor: ["Umweltbewusste Reisende", "Slow-Travel-Fans", "Familien", "Langzeit-Gäste"],
    hotels: [
      "hotel-amano-grand-central",
      "25hours-hotel-bikini",
      "hotel-indigo-alexanderplatz",
      "circus-hotel",
    ],
    sections: [
      {
        heading: "Woran erkennt man ein wirklich nachhaltiges Hotel?",
        body: [
          "An nachvollziehbaren Fakten statt grüner Worthülsen: unabhängige Zertifikate (z. B. GreenSign, Green Key, EU Ecolabel), Ökostrom, Wasserspar-Armaturen, konsequente Mülltrennung, regionale und saisonale Küche sowie faire Arbeitsbedingungen. Frag ruhig konkret nach — seriöse Häuser geben offen Auskunft.",
        ],
      },
      {
        heading: "Welche Berliner Hotels verfolgen grüne Ansätze?",
        body: [
          "Mehrere inhabergeführte und konzeptstarke Häuser legen Wert auf Ressourcenschonung — etwa das Circus Hotel (eigene Brauerei, kurze Wege, lokale Partner) oder Designhäuser wie das AMANO und das 25hours mit Fokus auf regionale Gastronomie. Da sich Standards und Zertifikate ändern, lohnt vor der Buchung ein Blick auf die aktuellen Angaben des jeweiligen Hauses.",
        ],
      },
      {
        heading: "Wie reist man in Berlin insgesamt nachhaltiger?",
        body: [
          "Berlin ist mit dem ÖPNV hervorragend erschlossen — verzichte auf den Mietwagen und nutze U-/S-Bahn, Tram und Leihräder. Wähle ein zentrales Hotel, um kurze Wege zu haben, und unterstütze lokale Gastronomie statt internationaler Ketten.",
        ],
        bullets: [
          "Mit ÖPNV und Leihrad statt Auto unterwegs sein.",
          "Zentral wohnen, um Fahrtwege zu reduzieren.",
          "Regionale Restaurants und Märkte bevorzugen.",
        ],
      },
    ],
    faq: [
      { q: "Welche Nachhaltigkeits-Zertifikate sind seriös?", a: "Anerkannt sind unter anderem GreenSign, Green Key, EU Ecolabel und Viabono. Sie prüfen Energie, Wasser, Abfall und Management nach festen Kriterien." },
      { q: "Sind nachhaltige Hotels teurer?", a: "Nicht zwingend — viele grüne Maßnahmen senken Betriebskosten. Die Preise liegen meist im normalen Rahmen ihrer Kategorie." },
      { q: "Woran erkenne ich Greenwashing?", a: "An vagen Aussagen ohne Belege (etwa nur Handtuch-Hinweise). Seriöse Häuser nennen konkrete Maßnahmen und unabhängige Zertifikate." },
      { q: "Wie reise ich in Berlin am umweltfreundlichsten an?", a: "Mit der Bahn statt dem Flugzeug und vor Ort konsequent mit ÖPNV und Leihrad. Berlin ist dafür ideal ausgebaut." },
    ],
    gygQuery: "Berlin Fahrradtour",
    related: [
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
      { label: "Boutique-Hotels mit Charme", href: "/boutique-hotels-berlin-charme/" },
      { label: "Zentrale Hotels in Berlin", href: "/zentrale-hotels-berlin/" },
      { label: "Alle Hotelkategorien", href: "/kategorien/" },
    ],
    adjacent: [
      { label: "Welche Hotels liegen besonders zentral?", href: "/zentrale-hotels-berlin/" },
      { label: "Wo finde ich charmante, inhabergeführte Häuser?", href: "/boutique-hotels-berlin-charme/" },
      { label: "Familienfreundliche Hotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── ZENTRAL ─────────────────────────
  {
    slug: "zentrale-hotels-berlin",
    title: "Zentrale Hotels in Berlin: im Herzen der Stadt übernachten",
    description:
      "Zentrale Hotels in Berlin: die besten Häuser in fußläufiger Nähe zu Brandenburger Tor, Museumsinsel und Alexanderplatz — für jedes Budget.",
    kicker: "Hotel-Kategorie · Zentrale Lage",
    intro: [
      "Wer Berlin zum ersten Mal besucht oder wenig Zeit hat, wohnt am besten zentral: In Mitte erreichst du Brandenburger Tor, Museumsinsel, Reichstag und Alexanderplatz zu Fuß oder mit wenigen Minuten U-Bahn.",
      "Zentral heißt dabei nicht automatisch teuer — die Bandbreite reicht vom Luxushaus am Pariser Platz bis zum günstigen 3-Sterne-Haus am Alex. Wir zeigen die besten zentralen Adressen.",
    ],
    takeaways: [
      "Die zentralste Lage ist Mitte — rund um Pariser Platz, Gendarmenmarkt und Alexanderplatz.",
      "Zentral wohnen spart Fahrtzeit und -kosten bei intensivem Sightseeing.",
      "Es gibt zentrale Häuser für jedes Budget — von 65 € bis 480 € pro Nacht.",
    ],
    bestFor: ["Erstbesucher", "Kurztrips", "Sightseeing-Fans", "Reisende ohne Auto"],
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
        heading: "Wo ist die zentralste Lage in Berlin?",
        body: [
          "In Mitte: Rund um Pariser Platz, Gendarmenmarkt und Unter den Linden bist du mitten im historischen Zentrum, am Alexanderplatz im Verkehrsknoten mit allen U- und S-Bahn-Linien. Von beiden Punkten erreichst du fast alle großen Sehenswürdigkeiten in wenigen Minuten.",
        ],
      },
      {
        heading: "Welche zentralen Hotels lohnen sich für welches Budget?",
        body: [
          "Luxus pur am Brandenburger Tor: das Adlon. Klassisch am Gendarmenmarkt: das Regent. Suiten am Potsdamer Platz: das Mandala. Designorientiert am Hauptbahnhof: das AMANO. Preisbewusst und direkt am Alexanderplatz: das H2 Hotel (ab rund 65 €) und das große Park Inn.",
        ],
      },
      {
        heading: "Lohnt sich eine zentrale Lage wirklich?",
        body: [
          "Wenn du viel sehen willst: ja. Du sparst täglich Fahrzeit und kannst mittags bequem ins Hotel zurück. Wer ohnehin viel mit der Bahn fährt oder Ruhe sucht, kann auch etwas außerhalb wohnen und dabei sparen.",
        ],
      },
    ],
    faq: [
      { q: "Welcher Bezirk ist am zentralsten?", a: "Mitte — hier liegen die meisten Sehenswürdigkeiten und die wichtigsten Verkehrsknoten (Hauptbahnhof, Alexanderplatz, Friedrichstraße)." },
      { q: "Was kostet ein zentrales Hotel in Berlin?", a: "Von rund 65 € für 3-Sterne-Häuser am Alexanderplatz bis 480 € für Top-Suiten am Brandenburger Tor." },
      { q: "Ist es am Alexanderplatz laut?", a: "Der Alex ist ein belebter Verkehrsknoten und nachts trubeliger als die ruhigeren Ecken um den Gendarmenmarkt. Dafür ist die Anbindung unschlagbar und die Preise sind moderater." },
      { q: "Zentral wohnen oder günstiger am Stadtrand?", a: "Für Kurztrips mit viel Programm lohnt sich zentral; für längere, entspannte Aufenthalte kann der etwas günstigere Stadtrand mit guter ÖPNV-Anbindung sinnvoll sein." },
    ],
    gygQuery: "Berlin Highlights Tour",
    related: [
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
      { label: "3 Tage Berlin — der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels sind ideal für Erstbesucher?", href: "/mitte/" },
      { label: "Wo finde ich günstige, zentrale Hotels?", href: "/budget-hotels-berlin/" },
      { label: "Hotels für Geschäftsreisen in Berlin", href: "/geschaeftsreisen-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── KULTUR ─────────────────────────
  {
    slug: "kultur-hotels-berlin",
    title: "Kultur-Hotels in Berlin: übernachten für Kunst- und Kulturfans",
    description:
      "Kultur-Hotels in Berlin: Häuser mit Kunst, Musik und Kultur im Konzept — nahe Museumsinsel, Galerien und Theatern, von Mitte bis Friedrichshain.",
    kicker: "Hotel-Kategorie · Kultur",
    intro: [
      "Berlin ist eine Kulturhauptstadt — und einige Hotels machen Kunst und Kultur zum Teil des Erlebnisses: mit eigener Galerie, Tonstudio, Kino, Live-Musik oder einer Lage direkt an den großen Museen und Theatern.",
      "Wir zeigen Häuser, die sich für Kunst- und Kulturfans besonders eignen — nah an Museumsinsel, Galerien und Bühnen.",
    ],
    takeaways: [
      "Kultur-Hotels verbinden Kunst, Musik oder Geschichte mit dem Aufenthalt.",
      "Beste Lagen: Mitte (Museumsinsel, Theater) und Friedrichshain (Galerien, Musik).",
      "Viele Häuser kooperieren mit lokalen Künstlern oder zeigen eigene Sammlungen.",
    ],
    bestFor: ["Kunst-Fans", "Museumsbesucher", "Musik-Liebhaber", "Theatergänger"],
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
        heading: "Welche Hotels eignen sich für Kulturreisende?",
        body: [
          "Für Museumsnähe ist das Hotel de Rome am Bebelplatz ideal — Museumsinsel, Staatsoper und Humboldt Forum sind fußläufig. Wer Musik liebt, bucht das nhow an der Spree mit eigenen Tonstudios oder das Orania mit Live-Konzerten im Salon. Das Soho House bringt mit eigenem Kino und Members-Kultur eine ganz eigene Note.",
        ],
      },
      {
        heading: "Welche Häuser setzen selbst auf Kunst?",
        body: [
          "Mehrere Berliner Hotels arbeiten mit lokalen Künstlern oder zeigen Kunst im Haus — vom Berlin-Themen-Design im Hotel Indigo bis zur kreativen, kuratierten Atmosphäre im Michelberger. Das Hotel Zoo verbindet restaurierte Gründerzeit-Architektur mit modernem Design.",
        ],
      },
      {
        heading: "Wo wohnt man am besten für die Berliner Museen?",
        body: [
          "In Mitte rund um die Museumsinsel und Unter den Linden — von dort erreichst du Pergamonmuseum, Neues Museum, Alte Nationalgalerie und die großen Bühnen zu Fuß. Für die zeitgenössische Galerie- und Off-Szene ist Friedrichshain-Kreuzberg die spannendere Basis.",
        ],
      },
    ],
    faq: [
      { q: "Welches Hotel liegt am nächsten zur Museumsinsel?", a: "Häuser in Mitte rund um den Bebelplatz und Unter den Linden — etwa das Hotel de Rome — liegen fußläufig zur Museumsinsel." },
      { q: "Gibt es Hotels mit eigener Kunstsammlung?", a: "Einige Berliner Häuser zeigen Kunst im Haus oder kooperieren mit lokalen Künstlern. Frag beim jeweiligen Hotel nach aktuellen Ausstellungen oder Führungen." },
      { q: "Welches Hotel eignet sich für Musikfans?", a: "Das nhow Berlin mit eigenen, mietbaren Tonstudios und das Orania mit Live-Musik im Salon." },
      { q: "Wo wohnt man für Theater und Oper?", a: "In Mitte nahe Gendarmenmarkt (Konzerthaus), Bebelplatz (Staatsoper) und Friedrichstraße — alles fußläufig erreichbar." },
    ],
    gygQuery: "Berlin Museumsinsel Tickets",
    related: [
      { label: "Historische Hotels in Berlin", href: "/historische-hotels-berlin/" },
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
      { label: "Museumsinsel entdecken", href: "/sehenswuerdigkeiten/museumsinsel/" },
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben eine eigene Geschichte?", href: "/historische-hotels-berlin/" },
      { label: "Wo finde ich Designhotels mit Kunstbezug?", href: "/design-hotels-berlin/" },
      { label: "3 Tage Berlin — Kultur-Highlights", href: "/reiseplaner/3-tage-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── GOURMET ─────────────────────────
  {
    slug: "gourmet-hotels-berlin",
    title: "Gourmet-Hotels in Berlin: übernachten mit Sterneküche",
    description:
      "Gourmet-Hotels in Berlin: Häuser mit Sternerestaurant — vom Lorenz Adlon Esszimmer über das FACIL im Mandala bis zum Hugos im InterContinental.",
    kicker: "Hotel-Kategorie · Gourmet",
    intro: [
      "Berlin hat eine erstaunlich dichte Sterne-Gastronomie — und einige der besten Restaurants liegen direkt im Hotel. Wer kulinarisch reisen will, übernachtet dort, wo Michelin-Sterne zum Haus gehören.",
      "Wir zeigen die Berliner Hotels mit eigener Spitzenküche und nennen die Restaurants samt verifizierten Auszeichnungen.",
    ],
    takeaways: [
      "Mehrere Berliner Hotels führen Restaurants mit zwei Michelin-Sternen.",
      "Top-Adressen: Lorenz Adlon Esszimmer, FACIL (Mandala), Hugos (InterContinental).",
      "Die meisten Gourmet-Hotels liegen in Mitte und der City West.",
    ],
    bestFor: ["Feinschmecker", "Paare", "Besondere Anlässe", "Kulinarik-Reisende"],
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
        heading: "Welche Berliner Hotels haben ein Sternerestaurant?",
        body: [
          "Im Adlon kocht das Lorenz Adlon Esszimmer auf zwei Michelin-Sternen, im Mandala am Potsdamer Platz das FACIL ebenfalls auf zwei Sternen, im InterContinental das Hugos im 14. Stock auf zwei Sternen. Drei der renommiertesten Sterne-Adressen der Stadt liegen also direkt im Hotel.",
        ],
      },
      {
        heading: "Welche Hotels punkten mit hauseigener Küche?",
        body: [
          "Das Hotel de Rome bietet im La Banca italienische Küche und eine Dachterrasse mit Domblick, das Regent das Charlotte & Fritz am Gendarmenmarkt. Das Orania in Kreuzberg verbindet Drei-Kontinente-Küche mit Live-Musik. So lässt sich Übernachtung und Spitzen-Dinner unter einem Dach verbinden.",
        ],
      },
      {
        heading: "Muss man im Hotel wohnen, um dort zu essen?",
        body: [
          "Nein — die Hotelrestaurants sind in der Regel auch für externe Gäste geöffnet. Für die Sterne-Adressen empfiehlt sich eine frühzeitige Reservierung, besonders am Wochenende.",
        ],
      },
    ],
    faq: [
      { q: "Welches Hotelrestaurant in Berlin hat die meisten Sterne?", a: "Mehrere Hotelrestaurants führen zwei Michelin-Sterne, darunter das Lorenz Adlon Esszimmer, das FACIL im Mandala und das Hugos im InterContinental." },
      { q: "Kann man als externer Gast im Hotelrestaurant essen?", a: "Ja, die Hotelrestaurants sind in der Regel öffentlich zugänglich. Für Sterne-Restaurants ist eine Reservierung dringend zu empfehlen." },
      { q: "Was kostet ein Gourmet-Hotel in Berlin?", a: "Die betreffenden Häuser liegen im Luxussegment ab rund 240–290 € pro Nacht; das Menü im Sternerestaurant wird separat berechnet." },
      { q: "Wo liegen die Gourmet-Hotels?", a: "Überwiegend in Mitte (Pariser Platz, Potsdamer Platz, Gendarmenmarkt) und der City West (Tiergarten/Budapester Straße)." },
    ],
    gygQuery: "Berlin Food Tour",
    related: [
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Romantische Hotels für Paare", href: "/romantische-hotels-berlin/" },
      { label: "Hotels in Berlin-Mitte", href: "/mitte/" },
      { label: "Historische Hotels in Berlin", href: "/historische-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels eignen sich für ein Paar-Wochenende?", href: "/romantische-hotels-berlin/" },
      { label: "Wo gibt es Luxushotels mit Spa?", href: "/wellness-spa-hotels-berlin/" },
      { label: "Hotels mit Rooftop-Bar und Aussicht", href: "/rooftop-bars-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BARRIEREFREI ─────────────────────────
  {
    slug: "barrierefreie-hotels-berlin",
    title: "Barrierefreie Hotels in Berlin: zugänglich übernachten",
    description:
      "Barrierefreie Hotels in Berlin: worauf du bei rollstuhlgerechten Zimmern achten solltest und welche Häuser sich eignen — plus Tipps zu Buchung und Anreise.",
    kicker: "Hotel-Kategorie · Barrierefreiheit",
    intro: [
      "Barrierefrei reisen will gut geplant sein. Viele Berliner Hotels bieten rollstuhlgerechte oder barrierearme Zimmer — die konkrete Ausstattung (Türbreiten, bodengleiche Dusche, Notruf, Aufzug) variiert aber stark und sollte vor der Buchung verbindlich geklärt werden.",
      "Wir zeigen, worauf es ankommt, und nennen Häuser, die sich aufgrund von Größe, Lage und Ausstattung für einen barrierefreien Aufenthalt anbieten.",
    ],
    takeaways: [
      "Barrierefreiheit ist kein einheitlicher Standard — die konkrete Ausstattung immer vorab prüfen.",
      "Wichtig: Türbreiten, bodengleiche Dusche, Aufzug, Notruf und stufenloser Zugang.",
      "Große, moderne Häuser haben häufiger geprüfte barrierefreie Zimmer.",
    ],
    bestFor: ["Reisende mit Mobilitätseinschränkung", "Senioren", "Rollstuhlfahrer", "Reisegruppen mit Bedarf"],
    hotels: [
      "adina-apartment-hotel-mitte",
      "park-inn-alexanderplatz",
      "estrel-berlin",
      "hotel-berlin-berlin",
      "intercontinental-berlin",
    ],
    sections: [
      {
        heading: "Worauf sollte man bei einem barrierefreien Hotel achten?",
        body: [
          "Auf die konkreten Details: stufenloser Zugang, ausreichend breite Türen, ein geräumiges Bad mit bodengleicher Dusche und Haltegriffen, ein erreichbarer Aufzug und ein Notrufsystem. Da Begriffe wie barrierefrei unterschiedlich ausgelegt werden, lass dir die Ausstattung des konkreten Zimmers vor der Buchung schriftlich bestätigen.",
        ],
      },
      {
        heading: "Welche Hotels eignen sich für barrierefreies Reisen?",
        body: [
          "Große, moderne Häuser haben häufiger geprüfte rollstuhlgerechte Zimmer — etwa das Park Inn und das Estrel (sehr große Häuser mit barrierearmen Zimmern), das traditionsreiche Hotel Berlin, Berlin oder das InterContinental. Apartment-Hotels wie das Adina bieten Platz und ebenerdige Bäder, was Reisen mit Hilfsmitteln erleichtern kann. Die genaue Eignung bitte direkt beim Haus erfragen.",
        ],
      },
      {
        heading: "Wie barrierefrei ist Berlin insgesamt?",
        body: [
          "Der ÖPNV ist in weiten Teilen ausgebaut: Viele U- und S-Bahnhöfe haben Aufzüge, Busse sind niederflurig. Eine aktuelle Übersicht zugänglicher Stationen bietet die BVG. Plane die Wege zwischen Hotel und Sehenswürdigkeiten dennoch vorab, da nicht jeder Bahnhof stufenlos ist.",
        ],
      },
    ],
    faq: [
      { q: "Welche Hotels in Berlin haben rollstuhlgerechte Zimmer?", a: "Vor allem große, moderne Häuser (z. B. Park Inn, Estrel, InterContinental) sowie viele Kettenhotels. Die konkrete Ausstattung variiert — kläre Türbreiten, Bad und Zugang immer vor der Buchung mit dem Hotel." },
      { q: "Was bedeutet barrierefrei genau?", a: "Es gibt keinen einheitlichen Standard. Achte auf konkrete Merkmale wie stufenlosen Zugang, breite Türen, bodengleiche Dusche, Haltegriffe, Aufzug und Notruf — und lass sie dir bestätigen." },
      { q: "Ist der Berliner Nahverkehr barrierefrei?", a: "Zu großen Teilen ja: viele Bahnhöfe haben Aufzüge, Busse sind niederflurig. Die BVG bietet eine Übersicht zugänglicher Stationen. Einzelne Bahnhöfe sind aber noch nicht stufenlos." },
      { q: "Lohnt sich ein Apartment-Hotel für barrierefreies Reisen?", a: "Oft ja — Apartments bieten mehr Platz und teils ebenerdige Bäder. Prüfe trotzdem die konkrete Ausstattung des Zimmers." },
    ],
    gygQuery: "Berlin barrierefreie Stadtrundfahrt",
    related: [
      { label: "Hotels für Geschäftsreisen in Berlin", href: "/geschaeftsreisen-hotels-berlin/" },
      { label: "Zentrale Hotels in Berlin", href: "/zentrale-hotels-berlin/" },
      { label: "Apartment-Hotels in Berlin", href: "/kategorien/apartments/" },
      { label: "Familienfreundliche Hotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben Apartments mit Küche?", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Wo wohnt man zentral und gut angebunden?", href: "/zentrale-hotels-berlin/" },
      { label: "Hotelbuchung: Tipps für den besten Preis", href: "/hotel-buchungstipps/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── NACHTLEBEN ─────────────────────────
  {
    slug: "berliner-nachtleben-hotels",
    title: "Hotels am Berliner Nachtleben: übernachten, wo gefeiert wird",
    description:
      "Hotels nahe dem Berliner Nachtleben: Häuser bei Clubs, Bars und Spätis in Friedrichshain, Kreuzberg und der City West — plus Tipps für Nachtschwärmer.",
    kicker: "Hotel-Kategorie · Nachtleben",
    intro: [
      "Berlin ist eine Welthauptstadt der Nacht. Wer Clubs, Bars und die legendäre Feierkultur erleben will, wohnt am besten dort, wo das Nachtleben pulsiert — vor allem in Friedrichshain und Kreuzberg, mit kurzen Wegen nach Hause.",
      "Wir zeigen Hotels nahe der Szene, mit eigener Bar oder Dachterrasse, und geben Tipps für entspanntes Feiern.",
    ],
    takeaways: [
      "Das Nachtleben konzentriert sich auf Friedrichshain, Kreuzberg und Neukölln.",
      "Hotels mit eigener Bar oder Dachterrasse verlängern den Abend bequem.",
      "Wer feiern, aber auch schlafen will, wählt ein Haus etwas abseits der lautesten Straßen.",
    ],
    bestFor: ["Nachtschwärmer", "Club-Gänger", "Junge Reisende", "Gruppen"],
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
        heading: "Wo übernachtet man nahe dem Berliner Nachtleben?",
        body: [
          "Im Zentrum der Szene: Friedrichshain rund um Warschauer Straße und RAW-Gelände sowie Kreuzberg. Das Michelberger Hotel gegenüber der Mercedes-Benz Arena und das nhow an der Spree liegen mittendrin; das Schulz Hotel an der East Side Gallery ist günstig und zentral für Clubbing. Das Orania bietet Live-Musik im eigenen Salon.",
        ],
      },
      {
        heading: "Welche Hotels haben eine gute eigene Bar?",
        body: [
          "Wer den Abend im Haus beginnen oder ausklingen lassen will: Das AMANO Grand Central hat eine vielbesuchte Dachbar, das Hotel Zoo die stilvolle Grace Roof-Bar. So bist du auch ohne Clubtour gut unterhalten — und hast einen kurzen Weg ins Bett.",
        ],
      },
      {
        heading: "Wie feiert man in Berlin entspannt mit Hotel?",
        body: [
          "Wähle ein Haus in Gehweite zu den Clubs, aber nicht direkt an der lautesten Kreuzung, damit du auch schlafen kannst. Berlins Nahverkehr fährt am Wochenende durch (Nacht-S-Bahn und -U-Bahn), Taxis und Ride-Sharing sind ebenfalls verfügbar — so kommst du immer sicher zurück.",
        ],
      },
    ],
    faq: [
      { q: "In welchem Bezirk ist das Berliner Nachtleben am stärksten?", a: "In Friedrichshain (Warschauer Straße, RAW-Gelände) und Kreuzberg, dazu Teile von Neukölln und Mitte. Dort liegen die meisten Clubs und Bars." },
      { q: "Welche Hotels liegen am nächsten an den Clubs?", a: "Häuser in Friedrichshain wie das Michelberger und das nhow sowie das Schulz Hotel an der East Side Gallery sind ideal für Nachtschwärmer." },
      { q: "Fährt der Berliner Nahverkehr nachts?", a: "Am Wochenende fahren U- und S-Bahn durch; unter der Woche übernehmen Nachtbusse. Taxis und Ride-Sharing sind rund um die Uhr verfügbar." },
      { q: "Kann man feiern und trotzdem gut schlafen?", a: "Ja — wähle ein Haus in Gehweite der Szene, aber in einer ruhigeren Seitenstraße, und achte auf schallisolierte Zimmer." },
    ],
    gygQuery: "Berlin Pub Crawl",
    related: [
      { label: "Boutique-Hotels in Friedrichshain-Kreuzberg", href: "/friedrichshain/" },
      { label: "Hotels mit Rooftop-Bar", href: "/rooftop-bars-hotels-berlin/" },
      { label: "Preiswerte Hotels in Neukölln", href: "/neukoelln/" },
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben die besten Dachbars?", href: "/rooftop-bars-hotels-berlin/" },
      { label: "Wo finde ich günstige, zentrale Hotels?", href: "/budget-hotels-berlin/" },
      { label: "Boutique-Hotels mit Charakter", href: "/boutique-hotels-berlin-charme/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── BUCHUNGSTIPPS ─────────────────────────
  {
    slug: "hotel-buchungstipps",
    title: "Hotel in Berlin buchen: Tipps für den besten Preis",
    description:
      "Hotel in Berlin buchen: Wann buchen, wo sparen, worauf bei Lage und Stornobedingungen achten — praktische Tipps für die beste Buchung in Berlin.",
    kicker: "Ratgeber · Buchung",
    intro: [
      "Ein gutes Hotel in Berlin zum fairen Preis zu finden, ist vor allem eine Frage von Timing und Lage. Mit ein paar einfachen Regeln sparst du spürbar — ohne Abstriche bei Qualität oder Anbindung.",
      "Hier kommen die wichtigsten Buchungstipps: wann du am günstigsten buchst, worauf du bei der Lage achtest und wie du böse Überraschungen vermeidest.",
    ],
    takeaways: [
      "Unter der Woche und in der Nebensaison sind Hotels in Berlin am günstigsten.",
      "Messen und Großevents treiben die Preise — Termine prüfen und früh buchen.",
      "Achte nicht nur auf den Preis, sondern auf Lage, ÖPNV-Nähe und Stornobedingungen.",
    ],
    bestFor: ["Preisbewusste Reisende", "Erstbesucher", "Planer", "Flexible Reisende"],
    hotels: [],
    sections: [
      {
        heading: "Wann bucht man ein Hotel in Berlin am günstigsten?",
        body: [
          "In der Nebensaison (November bis Februar, außerhalb von Weihnachten, Silvester und Feiertagen) und unter der Woche. Wochenenden und der Sommer sind teurer; Messen und Großveranstaltungen treiben die Preise stadtweit. Wer flexibel ist, vergleicht mehrere Termine und bucht antizyklisch.",
        ],
        bullets: [
          "Nebensaison: Winter (außer Feiertage) ist am günstigsten.",
          "Dienstag bis Donnerstag statt Wochenende.",
          "Messetermine (z. B. IFA, ITB) und Feiertage meiden oder früh buchen.",
        ],
      },
      {
        heading: "Worauf sollte man bei der Lage achten?",
        body: [
          "Auf die Nähe zu deinen Zielen und zum ÖPNV. Wer viel Sightseeing plant, fährt mit einer zentralen Lage in Mitte am besten. Wer sparen will, wählt einen gut angebundenen Außenbezirk — ein Hotel direkt an einer U- oder S-Bahn-Station spart Zeit und Nerven. Unsere Bezirks-Guides helfen bei der Auswahl.",
        ],
      },
      {
        heading: "Wie vermeidet man böse Überraschungen?",
        body: [
          "Lies aktuelle Gästebewertungen, prüfe die Stornobedingungen (flexibel vs. nicht erstattbar), achte auf versteckte Kosten wie City Tax (in Berlin fällt eine Übernachtungssteuer an) und Frühstückspreise. Kläre Sonderwünsche — Haustier, barrierefreies Zimmer, frühe Anreise — vorab direkt mit dem Hotel.",
        ],
      },
      {
        heading: "Lohnt sich die Buchung über eine Plattform oder direkt?",
        body: [
          "Vergleichsportale geben den schnellen Überblick über Preise und Verfügbarkeit. Über unsere Karten findest du Live-Preise von Booking.com je Bezirk. Bei Direktbuchung gewähren manche Häuser kleine Extras (Upgrade, Spätauscheck) — ein kurzer Vergleich lohnt sich.",
        ],
      },
    ],
    faq: [
      { q: "Wie lange im Voraus sollte man ein Hotel in Berlin buchen?", a: "Für normale Zeiten reichen oft wenige Wochen. Rund um Messen, Feiertage und im Hochsommer solltest du mehrere Monate vorher buchen, um Auswahl und gute Preise zu sichern." },
      { q: "Gibt es in Berlin eine Übernachtungssteuer?", a: "Ja, Berlin erhebt eine City Tax auf Übernachtungen (ein prozentualer Anteil des Übernachtungspreises). Geschäftsreisende können unter Umständen befreit sein — prüfe die aktuellen Regelungen." },
      { q: "Frühstück dazubuchen oder auswärts essen?", a: "In zentralen Lagen gibt es oft günstigere und bessere Frühstücks-Cafés in der Nähe. In Außenbezirken oder bei frühem Start kann das Hotelfrühstück bequemer sein." },
      { q: "Flexibel oder nicht erstattbar buchen?", a: "Nicht erstattbare Tarife sind günstiger, aber riskant bei unsicheren Plänen. Wenn deine Reise noch wackelt, ist die flexible Rate den kleinen Aufpreis meist wert." },
    ],
    gygQuery: "Berlin Welcome Card",
    related: [
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
      { label: "Zentrale Hotels in Berlin", href: "/zentrale-hotels-berlin/" },
      { label: "Alle Stadtteile im Überblick", href: "/stadtteile/" },
      { label: "Alle Hotelkategorien", href: "/kategorien/" },
    ],
    adjacent: [
      { label: "In welchem Bezirk wohnt man am besten?", href: "/zentrale-hotels-berlin/" },
      { label: "Wo finde ich die günstigsten Hotels?", href: "/budget-hotels-berlin/" },
      { label: "3 Tage Berlin — der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },
];
