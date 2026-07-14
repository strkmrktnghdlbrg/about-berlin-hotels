import type { Locale } from "./site";

export type Hotel = {
  slug: string;
  name: string;
  district: string;
  categories: string[];
  stars: 2 | 3 | 4 | 5;
  priceFrom: number;
  shortDesc: { de: string; en: string };
  description: { de: string; en: string };
  highlights: { de: string[]; en: string[] };
  /** Offizielle Website (optional, für Quellen-Verifikation) */
  website?: string;
  /**
   * Native Booking.com Hotel-URL. Stay22 `letmeallez.js` rewritet sie
   * zur Laufzeit zu einem Affiliate-getrackten Link. Format:
   * `https://www.booking.com/hotel/de/<slug>.de.html`.
   * Wenn fehlend: BookingCTA fällt auf `website` zurück.
   */
  bookingUrl?: string;
  /** Optional: präzise Hotel-Koordinaten. Fallback: district.geo. */
  coordinates?: [number, number];
  featured?: boolean;
};

/**
 * Hotel-Liste — ausschließlich verifizierbare Berliner Hotels.
 * Quellen-Recherche: offizielle Hotel-Websites + Wikipedia-Verzeichnisse.
 * Beschreibungen basieren auf öffentlichen Informationen; keine erfundenen Details.
 * Aktuelle Preise + Bilder zeigt das eingebettete Stay22-Modul je Bezirk live.
 */
export const hotels: Hotel[] = [
  // ===== MITTE =====
  {
    slug: "hotel-adlon-kempinski",
    name: "Hotel Adlon Kempinski",
    district: "mitte",
    categories: ["luxushotels"],
    stars: 5,
    priceFrom: 480,
    website: "https://www.kempinski.com/de/hotel-adlon",
    bookingUrl: "https://www.booking.com/hotel/de/adlon-kempinski-berlin.de.html",
    shortDesc: {
      de: "Die Grande Dame der Berliner Hotellerie, direkt am Brandenburger Tor.",
      en: "The grande dame of Berlin hotels, right on Brandenburg Gate.",
    },
    description: {
      de: "1907 eröffnet, nach Zerstörung im Krieg an gleicher Adresse 1997 neu erbaut. Das Adlon liegt direkt am Pariser Platz mit Blick auf das Brandenburger Tor. Zur Ausstattung gehören Spa, Pool und das hauseigene Restaurant Lorenz Adlon Esszimmer (zwei Michelin-Sterne).",
      en: "Opened 1907, rebuilt at the same address in 1997 after WWII destruction. The Adlon sits on Pariser Platz with direct views of Brandenburg Gate. Amenities include spa, pool and the in-house Lorenz Adlon Esszimmer (two Michelin stars).",
    },
    highlights: {
      de: ["Pariser Platz", "Lorenz Adlon Esszimmer", "Spa & Pool", "Lobby-Bar"],
      en: ["Pariser Platz", "Lorenz Adlon Esszimmer", "Spa & pool", "Lobby Bar"],
    },
    featured: true,
  },
  {
    slug: "hotel-de-rome",
    name: "Hotel de Rome",
    district: "mitte",
    categories: ["luxushotels", "designhotels"],
    stars: 5,
    priceFrom: 420,
    website: "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-rome/",
    bookingUrl: "https://www.booking.com/hotel/de/rocco-forte-de-rome.de.html",
    shortDesc: {
      de: "Rocco Fortes Berliner Flagship am Bebelplatz, in der ehemaligen Dresdner Bank.",
      en: "Rocco Forte's Berlin flagship on Bebelplatz, in the former Dresdner Bank.",
    },
    description: {
      de: "Das 1889 erbaute frühere Bankgebäude beherbergt seit 2006 das Hotel de Rome. Der frühere Tresorraum dient als Pool. Die Dachterrasse bietet Blick auf den Berliner Dom; das hauseigene Restaurant La Banca steht für italienische Küche.",
      en: "The former 1889 bank building has housed Hotel de Rome since 2006. The bank's former vault now serves as the pool. The rooftop terrace offers views of Berlin Cathedral; the in-house La Banca restaurant focuses on Italian cuisine.",
    },
    highlights: {
      de: ["Pool im Tresorraum", "Dachterrasse zum Berliner Dom", "Am Bebelplatz"],
      en: ["Pool in the former vault", "Rooftop facing Berlin Cathedral", "On Bebelplatz"],
    },
    featured: true,
  },
  {
    slug: "regent-berlin",
    name: "Regent Berlin",
    district: "mitte",
    categories: ["luxushotels"],
    stars: 5,
    priceFrom: 380,
    website: "https://www.regenthotels.com/regent-berlin",
    bookingUrl: "https://www.booking.com/hotel/de/the-regent-berlin.de.html",
    shortDesc: {
      de: "5-Sterne-Haus direkt am Gendarmenmarkt mit dem Restaurant Charlotte & Fritz.",
      en: "Five-star property on Gendarmenmarkt with the Charlotte & Fritz restaurant.",
    },
    description: {
      de: "Das Regent Berlin (zur IHG-Gruppe gehörend) liegt unmittelbar am Gendarmenmarkt. Klassische Innenausstattung, großzügige Zimmer, Spa, eigene Bar und das Restaurant Charlotte & Fritz. Gute Anbindung an Mitte-Ost und West.",
      en: "Regent Berlin (part of IHG) sits directly on Gendarmenmarkt. Classical interiors, spacious rooms, spa, in-house bar and the Charlotte & Fritz restaurant. Good access to both eastern and western Mitte.",
    },
    highlights: {
      de: ["Am Gendarmenmarkt", "Klassisch eingerichtet", "Spa & Restaurant"],
      en: ["On Gendarmenmarkt", "Classical interiors", "Spa & restaurant"],
    },
  },
  {
    slug: "hotel-amano-grand-central",
    name: "Hotel AMANO Grand Central",
    district: "mitte",
    categories: ["designhotels", "boutique-hotels"],
    stars: 4,
    priceFrom: 145,
    website: "https://www.amanogroup.de/hotels/grand-central",
    bookingUrl: "https://www.booking.com/hotel/de/amano-grand-central.de.html",
    shortDesc: {
      de: "Designhotel mit Dachterrasse und Bar, direkt am Berliner Hauptbahnhof.",
      en: "Design hotel with rooftop terrace and bar, right at Berlin Hauptbahnhof.",
    },
    description: {
      de: "Teil der Berliner AMANO-Gruppe. Klare Linien, hochfrequentierte Dachbar mit Blick auf den Hauptbahnhof, eigenes Restaurant. Sehr zentral, perfekt für ÖPNV-Reisende.",
      en: "Part of Berlin's AMANO group. Clean lines, busy rooftop bar with views of Hauptbahnhof, in-house restaurant. Very central, perfect for transit travelers.",
    },
    highlights: {
      de: ["Dachterrasse", "Am Hauptbahnhof", "Bar & Restaurant"],
      en: ["Roof terrace", "At Hauptbahnhof", "Bar & restaurant"],
    },
  },
  {
    slug: "soho-house-berlin",
    name: "Soho House Berlin",
    district: "mitte",
    categories: ["boutique-hotels", "designhotels", "luxushotels"],
    stars: 5,
    priceFrom: 320,
    website: "https://www.sohohouse.com/houses/soho-house-berlin",
    shortDesc: {
      de: "Members-Club mit Hotel im Bauhaus-Bau an der Torstraße.",
      en: "Members club with hotel in a Bauhaus-era building on Torstraße.",
    },
    description: {
      de: "Im 1928 erbauten ehemaligen Kaufhaus Jonass - Roof-Pool, mehrere Restaurants und ein hauseigenes Kino. Hotelgäste haben Zugang zu allen Members-Bereichen.",
      en: "In the 1928 former Jonass department store - roof pool, multiple restaurants and an in-house cinema. Hotel guests get access to all members' areas.",
    },
    highlights: {
      de: ["Roof-Pool", "Kino", "Mehrere Restaurants"],
      en: ["Roof pool", "Cinema", "Multiple restaurants"],
    },
  },
  {
    slug: "the-mandala-hotel",
    name: "The Mandala Hotel",
    district: "mitte",
    categories: ["luxushotels", "wellness-hotels"],
    stars: 5,
    priceFrom: 290,
    website: "https://www.themandala.de/",
    bookingUrl: "https://www.booking.com/hotel/de/the-mandala.de.html",
    shortDesc: {
      de: "Suiten-Hotel am Potsdamer Platz mit dem 2-Sterne-Restaurant FACIL.",
      en: "All-suite hotel on Potsdamer Platz with the 2-Michelin-star FACIL.",
    },
    description: {
      de: "Privat geführtes Hotel mit ausschließlich Suiten am Potsdamer Platz. ONO-Spa, eigenes Fitnesscenter, das Sterne-Restaurant FACIL im Glas-Atrium.",
      en: "Privately owned all-suite hotel on Potsdamer Platz. ONO spa, in-house fitness, the Michelin-starred FACIL restaurant in the glass atrium.",
    },
    highlights: {
      de: ["Nur Suiten", "FACIL 2 Michelin-Sterne", "ONO Spa"],
      en: ["Suites only", "FACIL 2 Michelin stars", "ONO Spa"],
    },
  },
  {
    slug: "circus-hotel",
    name: "The Circus Hotel",
    district: "mitte",
    categories: ["boutique-hotels", "billige-hotels"],
    stars: 3,
    priceFrom: 95,
    website: "https://www.circus-berlin.de/",
    bookingUrl: "https://www.booking.com/hotel/de/the-circus.de.html",
    shortDesc: {
      de: "Inhabergeführtes Boutique-Hotel am Rosenthaler Platz - günstig und sehr berlinerisch.",
      en: "Owner-run boutique hotel on Rosenthaler Platz - affordable and very Berlin.",
    },
    description: {
      de: "Seit über 20 Jahren inhabergeführt. Bietet Hotel, Apartments und seit 2018 eine eigene Brauerei (Circus Brewing) im selben Block. Hauseigene Stadttouren auf Englisch und Deutsch.",
      en: "Owner-run for over 20 years. Offers a hotel, apartments and since 2018 its own brewery (Circus Brewing) in the same block. In-house city tours in English and German.",
    },
    highlights: {
      de: ["Eigene Brauerei", "Am Rosenthaler Platz", "Stadtführungen"],
      en: ["Own brewery", "On Rosenthaler Platz", "City tours"],
    },
  },
  {
    slug: "h2-hotel-alexanderplatz",
    name: "H2 Hotel Berlin Alexanderplatz",
    district: "mitte",
    categories: ["billige-hotels", "business-hotels"],
    stars: 3,
    priceFrom: 65,
    website: "https://www.h-hotels.com/de/h2/hotel-berlin-alexanderplatz",
    bookingUrl: "https://www.booking.com/hotel/de/h2-berlin-alexanderplatz.de.html",
    shortDesc: {
      de: "Funktionales 3-Sterne-Hotel direkt am Alexanderplatz.",
      en: "Functional 3-star hotel right at Alexanderplatz.",
    },
    description: {
      de: "Teil der H-Hotels-Gruppe. Frische, schlichte Zimmer, kostenloses WLAN, Frühstücksbuffet. Direkter Zugang zu allen U- und S-Bahn-Linien am Alex.",
      en: "Part of H-Hotels group. Fresh, plain rooms, free Wi-Fi, breakfast buffet. Direct access to every U- and S-Bahn line at Alexanderplatz.",
    },
    highlights: {
      de: ["Am Alexanderplatz", "Sehr günstig", "U-/S-Bahn vor der Tür"],
      en: ["At Alexanderplatz", "Very affordable", "U-/S-Bahn at the door"],
    },
  },
  {
    slug: "adina-apartment-hotel-mitte",
    name: "Adina Apartment Hotel Berlin Mitte",
    district: "mitte",
    categories: ["apartments", "business-hotels", "familienhotels"],
    stars: 4,
    priceFrom: 145,
    website: "https://www.adinahotels.com/de/apartment-hotel-berlin-mitte/",
    bookingUrl: "https://www.booking.com/hotel/de/adina-apartment-berlin-hauptbahnhof.de.html",
    shortDesc: {
      de: "Apartment-Hotel am Hackeschen Markt mit Pool und Sauna.",
      en: "Apartment hotel at Hackescher Markt with pool and sauna.",
    },
    description: {
      de: "Voll ausgestattete Studios und Apartments mit Küchenzeile, dazu Innenpool und Sauna. Ideal ab 3 Nächten - für Familien, Business-Reisende mit Langzeit-Bedarf.",
      en: "Fully equipped studios and apartments with kitchenette, plus indoor pool and sauna. Ideal from 3 nights - for families and business with longer stays.",
    },
    highlights: {
      de: ["Pool & Sauna", "Voll ausgestattete Apartments", "Am Hackeschen Markt"],
      en: ["Pool & sauna", "Fully equipped apartments", "At Hackescher Markt"],
    },
  },
  {
    slug: "park-inn-alexanderplatz",
    name: "Park Inn by Radisson Berlin Alexanderplatz",
    district: "mitte",
    categories: ["business-hotels", "familienhotels"],
    stars: 4,
    priceFrom: 110,
    website: "https://www.radissonhotels.com/de-de/hotels/park-inn-berlin-alexanderplatz",
    bookingUrl: "https://www.booking.com/hotel/de/park-inn-berlin-alexanderplatz.de.html",
    shortDesc: {
      de: 'Hochhaus-Hotel direkt am Alexanderplatz mit Dachterrasse („Base Flying").',
      en: 'High-rise hotel right on Alexanderplatz with rooftop „Base Flying".',
    },
    description: {
      de: '1.012 Zimmer auf 41 Etagen - eines der größten Hotels Berlins. Auf dem Dach befindet sich eine Aussichtsplattform mit dem „Base Flying"-Erlebnis. Direkter U-/S-/Tram-Anschluss.',
      en: "1,012 rooms on 41 floors - one of Berlin's largest hotels. The rooftop hosts an observation deck and the Base Flying experience. Direct U-/S-Bahn/tram access.",
    },
    highlights: {
      de: ["41 Etagen", "Dachterrasse", "Direkt am Alex"],
      en: ["41 floors", "Roof deck", "On Alexanderplatz"],
    },
  },
  {
    slug: "hotel-indigo-alexanderplatz",
    name: "Hotel Indigo Berlin – Centre Alexanderplatz",
    district: "mitte",
    categories: ["designhotels", "boutique-hotels"],
    stars: 4,
    priceFrom: 130,
    website: "https://www.ihg.com/hotelindigo/hotels/de/de/berlin/berah/hoteldetail",
    bookingUrl: "https://www.booking.com/hotel/de/indigo-berlin-alexanderplatz.de.html",
    shortDesc: {
      de: "Designhotel der IHG-Gruppe im Quartier am Alexanderplatz.",
      en: "Design hotel by IHG in the Alexanderplatz quarter.",
    },
    description: {
      de: "Boutique-Designhotel mit lokal inspirierter Innenarchitektur (Mauer-Referenzen, Berliner Künstler). Hauseigenes Restaurant, gut für City-Wochenenden.",
      en: "Boutique design hotel with locally inspired interiors (wall references, Berlin artists). In-house restaurant, great for city weekends.",
    },
    highlights: {
      de: ["Berlin-Themen-Design", "Restaurant", "Am Alexanderplatz"],
      en: ["Berlin-themed design", "Restaurant", "At Alexanderplatz"],
    },
  },

  // ===== CHARLOTTENBURG-WILMERSDORF =====
  {
    slug: "hotel-bristol-berlin",
    name: "Hotel Bristol Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["luxushotels", "charmante-hotels"],
    stars: 5,
    priceFrom: 240,
    website: "https://hotelbristolberlin.com/",
    bookingUrl: "https://www.booking.com/hotel/de/bristolberlin.de.html",
    shortDesc: {
      de: "Klassisches Grandhotel am Kurfürstendamm - empfängt seit 1952 Gäste.",
      en: "Classic grand hotel on Kurfürstendamm - welcoming guests since 1952.",
    },
    description: {
      de: "Eines der traditionsreichsten West-Berliner Grandhotels, bis 2017 als Kempinski Hotel Bristol Berlin geführt. Großzügige Zimmer, Pool, Spa, die Bristol Bar als Klassiker. Direkt am Ku'damm.",
      en: "One of West Berlin's most tradition-rich grand hotels, run as Kempinski Hotel Bristol Berlin until 2017. Spacious rooms, pool, spa, the Bristol Bar as a classic. Right on Kurfürstendamm.",
    },
    highlights: {
      de: ["Am Kurfürstendamm", "Pool & Spa", "Bristol Bar"],
      en: ["On Kurfürstendamm", "Pool & spa", "Bristol Bar"],
    },
    featured: true,
  },
  {
    slug: "hotel-zoo-berlin",
    name: "Hotel Zoo Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["designhotels", "boutique-hotels"],
    stars: 5,
    priceFrom: 270,
    website: "https://hotelzoo.de/",
    bookingUrl: "https://www.booking.com/hotel/de/zoo-berlin.de.html",
    shortDesc: {
      de: "Designhotel am Kurfürstendamm in einem historischen Gebäude von 1891.",
      en: "Design hotel on Kurfürstendamm in a historic 1891 building.",
    },
    description: {
      de: "Mehrere Jahre lang sorgfältig restauriertes Haus mit Roof-Bar (Grace) und der historisch beleuchteten Lobby. Lage am Ku'damm zwischen Olivaer und Adenauerplatz.",
      en: "Carefully restored over several years, with the Grace rooftop bar and historic illuminated lobby. Located on Kurfürstendamm between Olivaer and Adenauerplatz.",
    },
    highlights: {
      de: ["Grace Roof-Bar", "Restaurierter Gründerzeit-Bau", "Am Ku'damm"],
      en: ["Grace rooftop bar", "Restored period building", "On Ku'damm"],
    },
    featured: true,
  },
  {
    slug: "waldorf-astoria-berlin",
    name: "Waldorf Astoria Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["luxushotels"],
    stars: 5,
    priceFrom: 360,
    website: "https://www.hilton.com/de/hotels/berwawa-waldorf-astoria-berlin/",
    bookingUrl: "https://www.booking.com/hotel/de/waldorf-astoria-berlin.de.html",
    shortDesc: {
      de: "32-stöckiger Glasturm direkt an der Gedächtniskirche - Luxus mit Panoramablick.",
      en: "32-story glass tower at the Memorial Church - luxury with panoramic views.",
    },
    description: {
      de: "Berlins höchstes Hotel mit Blick über City West, dem Spa Guerlain auf zwei Etagen, der Bar Lang im 31. Stock und dem Restaurant ROCA. 2013 eröffnet, direkt am Bahnhof Zoo.",
      en: "Berlin's tallest hotel with views over City West, the two-floor Spa Guerlain, Bar Lang on the 31st floor and ROCA restaurant. Opened 2013, right at Zoo station.",
    },
    highlights: {
      de: ["32 Etagen", "Spa Guerlain", "Bar Lang im 31. Stock"],
      en: ["32 floors", "Spa Guerlain", "Bar Lang on floor 31"],
    },
  },
  {
    slug: "sir-savigny-hotel",
    name: "Sir Savigny Hotel",
    district: "charlottenburg-wilmersdorf",
    categories: ["boutique-hotels", "designhotels"],
    stars: 4,
    priceFrom: 165,
    website: "https://www.sirhotels.com/de/savigny",
    bookingUrl: "https://www.booking.com/hotel/de/sir-savigny-berlin.de.html",
    shortDesc: {
      de: "Designstarkes Boutique-Hotel an einer ruhigen Seitenstraße am Savignyplatz.",
      en: "Design-strong boutique hotel on a quiet side street near Savignyplatz.",
    },
    description: {
      de: "Teil der niederländischen Sir Hotels-Familie. Individuell eingerichtete Zimmer, hauseigene Cocktail-Bar, gemütliche Lobby. Wenige Minuten vom Savignyplatz und vom Bahnhof Zoo.",
      en: "Part of the Dutch Sir Hotels family. Individually designed rooms, in-house cocktail bar, cozy lobby. Minutes from Savignyplatz and Zoo station.",
    },
    highlights: {
      de: ["Am Savignyplatz", "Cocktail-Bar", "Designhotel"],
      en: ["Near Savignyplatz", "Cocktail bar", "Design hotel"],
    },
  },
  {
    slug: "hotel-q-berlin",
    name: "Hotel Q! Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["designhotels", "boutique-hotels"],
    stars: 4,
    priceFrom: 170,
    website: "https://www.loock-hotels.com/de/hotel-q/",
    bookingUrl: "https://www.booking.com/hotel/de/hotelqberlin.de.html",
    shortDesc: {
      de: "Architektonisches Designhotel mit fließenden Übergängen zwischen Möbel und Raum.",
      en: "Architectural design hotel with flowing transitions between furniture and room.",
    },
    description: {
      de: "Vom Berliner Architekturbüro GRAFT entworfen - geschwungene Wände, Bett und Wanne als bauliche Einheit, viel Eiche. Eines der originellsten Designhotels Berlins.",
      en: "Designed by Berlin architecture firm GRAFT - curved walls, bed and bath as a built unit, lots of oak. One of Berlin's most original design hotels.",
    },
    highlights: {
      de: ["GRAFT-Architektur", "Spa", "Nahe Ku'damm"],
      en: ["GRAFT architecture", "Spa", "Near Ku'damm"],
    },
  },
  {
    slug: "hampton-by-hilton-city-west",
    name: "Hampton by Hilton Berlin City West",
    district: "charlottenburg-wilmersdorf",
    categories: ["business-hotels", "billige-hotels"],
    stars: 3,
    priceFrom: 95,
    website: "https://www.hilton.com/de/hotels/berkwhx-hampton-berlin-city-west/",
    bookingUrl: "https://www.booking.com/hotel/de/hampton-by-hilton-berlin-city-west.de.html",
    shortDesc: {
      de: "Solider 3-Sterne-Bau in City West - Frühstück inklusive, gute Anbindung.",
      en: "Solid 3-star property in City West - breakfast included, good transit links.",
    },
    description: {
      de: "Frische, helle Zimmer, kostenloses warmes Frühstücksbuffet, 24/7-Fitness. Ideal als Business-Hotel zu fairem Preis.",
      en: "Fresh, bright rooms, free hot breakfast buffet, 24/7 fitness. Ideal as a business hotel at a fair price.",
    },
    highlights: {
      de: ["Frühstück inklusive", "24/7-Fitness", "Klimatisiert"],
      en: ["Breakfast included", "24/7 fitness", "Air-conditioned"],
    },
  },
  {
    slug: "25hours-hotel-bikini",
    name: "25hours Hotel Bikini Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["designhotels", "boutique-hotels"],
    stars: 4,
    priceFrom: 190,
    website: "https://www.25hours-hotels.com/de/hotels/berlin/bikini-berlin",
    bookingUrl: "https://www.booking.com/hotel/de/25hours-bikini-berlin.de.html",
    shortDesc: {
      de: "Designhotel mit Hängematten und Affen-Blick im Bikinihaus.",
      en: "Design hotel with hammocks and zoo views in the Bikinihaus.",
    },
    description: {
      de: 'Im sanierten Bikinihaus von 1957. „Jungle"-Side-Zimmer blicken direkt in den Berliner Zoo, die Monkey Bar auf dem Dach hat Panoramablick über Tiergarten und Kaiser-Wilhelm-Gedächtniskirche.',
      en: 'In the restored 1957 Bikinihaus. „Jungle-side" rooms look directly into Berlin Zoo, the rooftop Monkey Bar has panoramic views over Tiergarten and the Memorial Church.',
    },
    highlights: {
      de: ["Monkey Bar Dachterrasse", "Zoo-Blick", "Am Bahnhof Zoo"],
      en: ["Monkey Bar rooftop", "Zoo view", "At Zoo station"],
    },
  },
  {
    slug: "intercontinental-berlin",
    name: "InterContinental Berlin",
    district: "charlottenburg-wilmersdorf",
    categories: ["luxushotels", "business-hotels"],
    stars: 5,
    priceFrom: 240,
    website: "https://www.berlin.intercontinental.com/",
    bookingUrl: "https://www.booking.com/hotel/de/interconti-berlin.de.html",
    shortDesc: {
      de: "Großes 5-Sterne-Haus am Tiergarten mit dem 2-Sterne-Restaurant Hugos.",
      en: "Large five-star hotel by the Tiergarten with the 2-Michelin-star Hugos.",
    },
    description: {
      de: "An der Budapester Straße zwischen Tiergarten und KaDeWe gelegen. Großzügige Kongresskapazitäten, Spa, Pool, das Restaurant Hugos im 14. Stock mit zwei Michelin-Sternen.",
      en: "Located on Budapester Straße between Tiergarten and KaDeWe. Large conference facilities, spa, pool, the Hugos restaurant on the 14th floor with two Michelin stars.",
    },
    highlights: {
      de: ["Restaurant Hugos 2 Sterne", "Großer Kongressbereich", "Am Tiergarten"],
      en: ["Hugos restaurant 2 stars", "Large conference area", "By the Tiergarten"],
    },
  },
  {
    slug: "henri-hotel-kurfuerstendamm",
    name: "Henri Hotel Berlin Kurfürstendamm",
    district: "charlottenburg-wilmersdorf",
    categories: ["boutique-hotels", "charmante-hotels"],
    stars: 3,
    priceFrom: 110,
    website: "https://www.henri-hotel.com/de/berlin-kurfuerstendamm/",
    bookingUrl: "https://www.booking.com/hotel/de/henri-hotel-berlin-kurfurstendamm.de.html",
    shortDesc: {
      de: "Charmantes Boutique-Hotel im 1900er-Apartmenthaus am Ku'damm.",
      en: "Charming boutique hotel in a 1900s apartment building on Ku'damm.",
    },
    description: {
      de: "Designkonzept im Stil eines New Yorker Apartments der 1950er Jahre. Frühstück im klassischen Salon, individuelle Zimmer mit Vintage-Möbeln. Direkt am Olivaer Platz.",
      en: "Design concept inspired by a 1950s New York apartment. Breakfast in a classic salon, individual rooms with vintage furniture. Right at Olivaer Platz.",
    },
    highlights: {
      de: ["Vintage-Möbel", "Am Ku'damm", "Frühstückssalon"],
      en: ["Vintage furniture", "On Ku'damm", "Breakfast salon"],
    },
  },

  // ===== FRIEDRICHSHAIN-KREUZBERG =====
  {
    slug: "michelberger-hotel",
    name: "Michelberger Hotel",
    district: "friedrichshain-kreuzberg",
    categories: ["boutique-hotels", "designhotels"],
    stars: 4,
    priceFrom: 155,
    website: "https://www.michelbergerhotel.com/",
    bookingUrl: "https://www.booking.com/hotel/de/michelbergerhotel.de.html",
    shortDesc: {
      de: "Berliner Design-Ikone direkt gegenüber der Mercedes-Benz Arena.",
      en: "Berlin design icon right across from Mercedes-Benz Arena.",
    },
    description: {
      de: "Inhabergeführt, vom alten Industriebau zum unverwechselbaren Designhotel umgebaut. Hauseigenes Restaurant mit saisonaler Küche, Sauna auf dem Dach, eigenes Festival (Michelberger Music).",
      en: "Owner-run, converted from an old industrial building into a distinctive design hotel. In-house restaurant with seasonal cuisine, rooftop sauna, its own music festival (Michelberger Music).",
    },
    highlights: {
      de: ["Dach-Sauna", "Hauseigenes Restaurant", "An East Side Gallery"],
      en: ["Rooftop sauna", "In-house restaurant", "By East Side Gallery"],
    },
    featured: true,
  },
  {
    slug: "nhow-berlin",
    name: "nhow Berlin",
    district: "friedrichshain-kreuzberg",
    categories: ["designhotels", "boutique-hotels"],
    stars: 4,
    priceFrom: 145,
    website: "https://www.nh-hotels.de/hotel/nhow-berlin",
    bookingUrl: "https://www.booking.com/hotel/de/nhow-berlin.de.html",
    shortDesc: {
      de: "Musikhotel direkt an der Spree - mit hauseigenen Tonstudios.",
      en: "Music hotel right on the Spree - with in-house recording studios.",
    },
    description: {
      de: "Innenarchitektur von Karim Rashid. Zwei hauseigene Aufnahme-Studios, von Gästen mietbar. Knallpink-Lounge, Glasfassade zur Spree mit Blick auf die Oberbaumbrücke und Mercedes-Benz Arena.",
      en: "Interiors by Karim Rashid. Two in-house recording studios, available to guests. Hot-pink lounge, glass facade facing the Spree with views of Oberbaum Bridge and Mercedes-Benz Arena.",
    },
    highlights: {
      de: ["Hauseigene Tonstudios", "Spree-Lage", "Karim Rashid Design"],
      en: ["Own recording studios", "Spree location", "Karim Rashid design"],
    },
    featured: true,
  },
  {
    slug: "orania-berlin",
    name: "Orania.Berlin",
    district: "friedrichshain-kreuzberg",
    categories: ["boutique-hotels", "designhotels", "luxushotels"],
    stars: 5,
    priceFrom: 280,
    website: "https://www.orania.berlin/",
    bookingUrl: "https://www.booking.com/hotel/de/orania-berlin.de.html",
    shortDesc: {
      de: "5-Sterne Boutique-Haus am Oranienplatz mit Live-Konzerten.",
      en: "Five-star boutique house on Oranienplatz with live concerts.",
    },
    description: {
      de: "Restauriertes Gründerzeit-Gebäude in Kreuzberg. Restaurant Orania mit drei-Kontinente-Küche, Live-Musik im Salon-Kreuzberg, persönlicher Concierge-Service.",
      en: "Restored period building in Kreuzberg. Orania restaurant with three-continent cuisine, live music in the Salon-Kreuzberg, personal concierge service.",
    },
    highlights: {
      de: ["Live-Musik", "Restaurant Orania", "Am Oranienplatz"],
      en: ["Live music", "Orania restaurant", "On Oranienplatz"],
    },
  },
  {
    slug: "schulz-hotel",
    name: "Schulz Hotel Berlin Wall at the East Side Gallery",
    district: "friedrichshain-kreuzberg",
    categories: ["billige-hotels", "boutique-hotels"],
    stars: 3,
    priceFrom: 75,
    website: "https://www.schulz-hotels.com/berlin/",
    bookingUrl: "https://www.booking.com/hotel/de/schulz-berlin-wall-at-the-east-side-gallery.de.html",
    shortDesc: {
      de: "Modernes 3-Sterne-Hotel direkt an der East Side Gallery.",
      en: "Modern 3-star hotel right by the East Side Gallery.",
    },
    description: {
      de: "Direkt an der East Side Gallery zwischen Ostbahnhof und Mercedes-Benz Arena. Frische Zimmer, kostenloses WLAN, gutes Preis-Leistungs-Verhältnis. Familienzimmer verfügbar.",
      en: "Right at the East Side Gallery between Ostbahnhof and Mercedes-Benz Arena. Fresh rooms, free Wi-Fi, great value. Family rooms available.",
    },
    highlights: {
      de: ["An East Side Gallery", "Gutes Preis-Leistungs-Verhältnis", "Familienzimmer"],
      en: ["At East Side Gallery", "Great value", "Family rooms"],
    },
  },

  // ===== PANKOW =====
  {
    slug: "hotel-oderberger",
    name: "Hotel Oderberger Berlin",
    district: "pankow",
    categories: ["boutique-hotels", "familienhotels", "charmante-hotels"],
    stars: 4,
    priceFrom: 165,
    website: "https://www.hotel-oderberger.berlin/",
    bookingUrl: "https://www.booking.com/hotel/de/oderberger.de.html",
    shortDesc: {
      de: "Boutique-Charme mit historischem Pool in einem Stadtbad in Prenzlauer Berg.",
      en: "Boutique charm with a historic pool in a public bath in Prenzlauer Berg.",
    },
    description: {
      de: "Im ehemaligen Stadtbad Oderberger Straße, eröffnet 1902 als öffentliches Badehaus. Heute Hotel mit erhaltenem Schwimmbecken in der Original-Halle. Wenige Minuten vom Mauerpark.",
      en: "In the former Oderberger Straße public baths, opened 1902. Today a hotel with the original swimming pool preserved in the historic hall. Minutes from Mauerpark.",
    },
    highlights: {
      de: ["Historischer Pool von 1902", "Am Mauerpark", "Familienzimmer"],
      en: ["Historic 1902 pool", "By Mauerpark", "Family rooms"],
    },
    featured: true,
  },
  {
    slug: "myers-hotel",
    name: "Myer's Hotel Berlin",
    district: "pankow",
    categories: ["boutique-hotels", "charmante-hotels"],
    stars: 4,
    priceFrom: 135,
    website: "https://www.myershotel.de/",
    bookingUrl: "https://www.booking.com/hotel/de/myers-berlin.de.html",
    shortDesc: {
      de: "Gründerzeit-Boutique-Haus nahe Kollwitzplatz mit eigenem Garten.",
      en: "Period boutique house near Kollwitzplatz with its own garden.",
    },
    description: {
      de: "Restauriertes Gründerzeit-Gebäude im Herzen von Prenzlauer Berg, inhabergeführt. Frühstücksraum, kleiner Garten, ruhige Wohnstraße.",
      en: "Restored period building in the heart of Prenzlauer Berg, owner-run. Breakfast room, small garden, quiet residential street.",
    },
    highlights: {
      de: ["Nahe Kollwitzplatz", "Inhabergeführt", "Garten"],
      en: ["Near Kollwitzplatz", "Owner-run", "Garden"],
    },
  },
  {
    slug: "livinghotel-weissensee",
    name: "Living Hotel Weißensee",
    district: "pankow",
    categories: ["apartments", "familienhotels"],
    stars: 4,
    priceFrom: 110,
    website: "https://www.living-hotels.com/de/berlin-weissensee",
    bookingUrl: "https://www.booking.com/hotel/de/luisederag.de.html",
    shortDesc: {
      de: "Apartment-Hotel der Living-Hotels-Gruppe am Weißen See mit Park.",
      en: "Apartment hotel by Living Hotels group at Lake Weißensee with park.",
    },
    description: {
      de: "Voll ausgestattete Studios und Apartments mit Küchenzeile. Eigene Parkanlage, ruhige Lage am Weißen See im Norden Berlins.",
      en: "Fully equipped studios and apartments with kitchenette. Own park grounds, quiet location by Lake Weißensee in northern Berlin.",
    },
    highlights: {
      de: ["Am Weißen See", "Voll ausgestattete Apartments", "Park"],
      en: ["By Lake Weißensee", "Fully equipped apartments", "Park"],
    },
  },
  {
    slug: "ackselhaus-blue-home",
    name: "Ackselhaus & Blue Home",
    district: "pankow",
    categories: ["boutique-hotels", "charmante-hotels"],
    stars: 4,
    priceFrom: 160,
    website: "https://www.ackselhaus.de/",
    bookingUrl: "https://www.booking.com/hotel/de/ackselhaus.de.html",
    shortDesc: {
      de: "Inhabergeführtes Boutique-Hotel mit Themen-Zimmern in Prenzlauer Berg.",
      en: "Owner-run boutique hotel with themed rooms in Prenzlauer Berg.",
    },
    description: {
      de: "Sehr persönlich geführtes Haus mit individuell gestalteten Zimmern und Suiten in zwei restaurierten Altbauten. Frühstück im Innenhof, ruhige Lage in der Belforter Straße.",
      en: "Very personally run, with individually designed rooms and suites across two restored period buildings. Breakfast in the courtyard, quiet location on Belforter Straße.",
    },
    highlights: {
      de: ["Themen-Zimmer", "Innenhof-Frühstück", "Prenzlauer Berg"],
      en: ["Themed rooms", "Courtyard breakfast", "Prenzlauer Berg"],
    },
  },

  // ===== NEUKÖLLN =====
  {
    slug: "estrel-berlin",
    name: "Estrel Berlin",
    district: "neukoelln",
    categories: ["business-hotels", "familienhotels"],
    stars: 4,
    priceFrom: 110,
    website: "https://www.estrel.com/",
    bookingUrl: "https://www.booking.com/hotel/de/estrelres.de.html",
    shortDesc: {
      de: "Größtes Convention-Hotel Deutschlands an der Sonnenallee.",
      en: "Germany's largest convention hotel on Sonnenallee.",
    },
    description: {
      de: "1.125 Zimmer, das Estrel ist nach eigenen Angaben das größte Convention-, Entertainment- und Hotelzentrum Deutschlands. Eigene Show-Bühne (Stars in Concert), direkter Spreezugang, 15 Tagungsräume.",
      en: "1,125 rooms - by its own account Germany's largest convention, entertainment and hotel center. Own show stage (Stars in Concert), direct Spree access, 15 conference rooms.",
    },
    highlights: {
      de: ["Stars in Concert", "1.125 Zimmer", "An der Spree"],
      en: ["Stars in Concert", "1,125 rooms", "On the Spree"],
    },
  },
  {
    slug: "huettenpalast",
    name: "Hüttenpalast",
    district: "neukoelln",
    categories: ["boutique-hotels", "designhotels"],
    stars: 3,
    priceFrom: 95,
    website: "https://www.huettenpalast.de/",
    bookingUrl: "https://www.booking.com/hotel/de/huttenpalast.de.html",
    shortDesc: {
      de: "Übernachten im Wohnwagen - in einer alten Fabrikhalle in Neukölln.",
      en: "Sleep in a vintage caravan - inside a former Neukölln factory.",
    },
    description: {
      de: "In einer ehemaligen Staubsauger-Fabrik in der Hobrechtstraße. Alte Wohnwagen und selbstgebaute Hütten dienen als Zimmer in einer überdachten Halle. Klassische Hotelzimmer ebenfalls vorhanden, Café im Hof.",
      en: "In a former vacuum-cleaner factory on Hobrechtstraße. Vintage caravans and self-built huts serve as rooms inside a covered hall. Classic hotel rooms also available, café in the courtyard.",
    },
    highlights: {
      de: ["Wohnwagen-Zimmer", "Café im Hof", "Einzigartiges Konzept"],
      en: ["Caravan rooms", "Courtyard café", "Unique concept"],
    },
    featured: true,
  },

  // ===== TEMPELHOF-SCHÖNEBERG =====
  {
    slug: "axel-hotel-berlin",
    name: "Axel Hotel Berlin",
    district: "tempelhof-schoeneberg",
    categories: ["boutique-hotels", "designhotels"],
    stars: 4,
    priceFrom: 140,
    website: "https://www.axelhotels.com/de/berlin/",
    bookingUrl: "https://www.booking.com/hotel/de/axel-berlin.de.html",
    shortDesc: {
      de: "Heterofriendly Designhotel im LGBTQ+-Viertel Schöneberg.",
      en: "Heterofriendly design hotel in the LGBTQ+ quarter Schöneberg.",
    },
    description: {
      de: "Designhotel der spanischen Axel-Gruppe, mitten im Regenbogen-Kiez um die Motzstraße. Dachterrasse mit Pool, hauseigene Bar, viele wiederkehrende Gäste.",
      en: "Design hotel by the Spanish Axel group, right in the rainbow district around Motzstraße. Roof terrace with pool, in-house bar, many returning guests.",
    },
    highlights: {
      de: ["Dachterrasse mit Pool", "Im Regenbogen-Kiez", "Hauseigene Bar"],
      en: ["Roof terrace with pool", "In the rainbow district", "In-house bar"],
    },
  },
  {
    slug: "hotel-berlin-berlin",
    name: "Hotel Berlin, Berlin",
    district: "tempelhof-schoeneberg",
    categories: ["business-hotels", "familienhotels"],
    stars: 4,
    priceFrom: 120,
    website: "https://www.hotel-berlin.de/",
    bookingUrl: "https://www.booking.com/hotel/de/bbberlin.de.html",
    shortDesc: {
      de: "Großes 4-Sterne-Haus am Rand des Tiergartens, nahe KaDeWe.",
      en: "Large four-star hotel at the edge of Tiergarten, near KaDeWe.",
    },
    description: {
      de: "701 Zimmer, eine der ältesten Adressen in West-Berlin. Familienzimmer, Tagungsbereich, gutes Frühstücksbuffet. Gehminuten vom KaDeWe und Wittenbergplatz.",
      en: "701 rooms, one of West Berlin's longest-running addresses. Family rooms, conference area, strong breakfast buffet. Walking distance to KaDeWe and Wittenbergplatz.",
    },
    highlights: {
      de: ["701 Zimmer", "Familienzimmer", "Nahe KaDeWe"],
      en: ["701 rooms", "Family rooms", "Near KaDeWe"],
    },
  },

  // ===== STEGLITZ-ZEHLENDORF =====
  {
    slug: "patrick-hellmann-schlosshotel",
    name: "Patrick Hellmann Schlosshotel",
    district: "steglitz-zehlendorf",
    categories: ["luxushotels", "charmante-hotels"],
    stars: 5,
    priceFrom: 290,
    website: "https://www.schlosshotelberlin.com/",
    bookingUrl: "https://www.booking.com/hotel/de/schlosshotel-berlin-by-patrick-hellmann.de.html",
    shortDesc: {
      de: "Historisches Schlosshotel in Grunewald - von Karl Lagerfeld umgestaltet.",
      en: "Historic palace hotel in Grunewald - redesigned by Karl Lagerfeld.",
    },
    description: {
      de: "Im 1914 erbauten Schloss Pannwitz. Innenausstattung 1996 von Karl Lagerfeld neu gestaltet, später vom Modedesigner Patrick Hellmann übernommen. Park-Lage am Grunewald, eigenes Restaurant.",
      en: "In the 1914 Pannwitz Palace. Interior redesigned by Karl Lagerfeld in 1996, later taken over by fashion designer Patrick Hellmann. Parkland setting at the Grunewald, in-house restaurant.",
    },
    highlights: {
      de: ["Karl-Lagerfeld-Interiors", "Park-Lage", "Sehr diskret"],
      en: ["Karl Lagerfeld interiors", "Parkland setting", "Highly discreet"],
    },
  },
  {
    slug: "harnack-haus",
    name: "Harnack-Haus",
    district: "steglitz-zehlendorf",
    categories: ["charmante-hotels", "business-hotels"],
    stars: 4,
    priceFrom: 135,
    website: "https://www.harnackhaus-berlin.mpg.de/",
    shortDesc: {
      de: "Tagungs- und Gästehaus der Max-Planck-Gesellschaft in Dahlem.",
      en: "Conference and guest house of the Max Planck Society in Dahlem.",
    },
    description: {
      de: "1929 als Tagungshaus der Kaiser-Wilhelm-Gesellschaft errichtet. Heute Gäste- und Konferenzhaus der Max-Planck-Gesellschaft, aber auch für reguläre Reisende offen. Ruhige Lage in Dahlem.",
      en: "Built in 1929 as a conference house of the Kaiser-Wilhelm-Gesellschaft. Today the Max Planck Society's guest and conference house, also open to regular travelers. Quiet location in Dahlem.",
    },
    highlights: {
      de: ["1929er Bau", "MPG-Tagungshaus", "Sehr ruhig"],
      en: ["1929 building", "Max Planck guest house", "Very quiet"],
    },
  },

  // ===== TREPTOW-KÖPENICK =====
  {
    slug: "hotel-mueggelsee-berlin",
    name: "Hotel Müggelsee Berlin",
    district: "treptow-koepenick",
    categories: ["wellness-hotels", "familienhotels", "charmante-hotels"],
    stars: 4,
    priceFrom: 135,
    website: "https://www.hotel-mueggelsee-berlin.de/",
    bookingUrl: "https://www.booking.com/hotel/de/dolceberlinmuggelsee.de.html",
    shortDesc: {
      de: "Großes Seehotel direkt am Müggelsee mit Spa und eigenem Strandbad.",
      en: "Large lakeside hotel right on Lake Müggelsee with spa and own lido.",
    },
    description: {
      de: "Mit 174 Zimmern direkt am Berliner Müggelsee. Eigenes Strandbad, großer Spa-Bereich, Restaurant mit Seeblick. Beliebter Wochenend-Wellness-Spot der Berliner.",
      en: "With 174 rooms right on Berlin's Müggelsee. Own lido, large spa, restaurant with lake view. A popular weekend wellness spot for Berliners.",
    },
    highlights: {
      de: ["Eigenes Strandbad", "Großer Spa", "Seeblick"],
      en: ["Own lido", "Large spa", "Lake view"],
    },
    featured: true,
  },

  // ===== REINICKENDORF =====
  {
    slug: "best-western-am-borsigturm",
    name: "Best Western Hotel am Borsigturm",
    district: "reinickendorf",
    categories: ["familienhotels", "business-hotels"],
    stars: 4,
    priceFrom: 95,
    website: "https://www.hotel-am-borsigturm.de/",
    bookingUrl: "https://www.booking.com/hotel/de/borsigturm.de.html",
    shortDesc: {
      de: "4-Sterne-Hotel im sanierten Borsigwerke-Areal mit Pool und Sauna.",
      en: "Four-star hotel in the renovated Borsigwerke area with pool and sauna.",
    },
    description: {
      de: "Im historischen Industriedenkmal der Borsigwerke. Pool, Sauna, Tagungsbereich. U6-Anschluss in 25 Minuten zum Alexanderplatz.",
      en: "In the historic Borsigwerke industrial monument. Pool, sauna, conference area. U6 link reaches Alexanderplatz in 25 minutes.",
    },
    highlights: {
      de: ["Pool & Sauna", "Borsigwerke-Areal", "U6-Anschluss"],
      en: ["Pool & sauna", "Borsigwerke area", "U6 access"],
    },
  },

  // ===== MARZAHN-HELLERSDORF =====
  {
    slug: "ibis-budget-berlin-hellersdorf",
    name: "ibis budget Berlin Hellersdorf",
    district: "marzahn-hellersdorf",
    categories: ["billige-hotels"],
    stars: 2,
    priceFrom: 49,
    website: "https://all.accor.com/hotel/6446/index.de.shtml",
    bookingUrl: "https://www.booking.com/hotel/de/ibis-budget-berlin-ost.de.html",
    shortDesc: {
      de: "Sehr günstiges Budget-Hotel mit U-Bahn-Anschluss.",
      en: "Very affordable budget hotel with U-Bahn access.",
    },
    description: {
      de: "Funktionale, frisch renovierte Zimmer. Frühstück optional, kostenloses WLAN, U5 in Gehnähe (Station Hellersdorf). Für sehr budgetbewusste Reisende.",
      en: "Functional, recently renovated rooms. Breakfast optional, free Wi-Fi, U5 within walking distance (Hellersdorf station). For very budget-conscious travelers.",
    },
    highlights: {
      de: ["Ab €49", "U5-Anschluss", "Frisch renoviert"],
      en: ["From €49", "U5 access", "Recently renovated"],
    },
  },
];

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);
export const getHotelsByDistrict = (slug: string) => hotels.filter((h) => h.district === slug);
export const getHotelsByCategory = (slug: string) =>
  hotels.filter((h) => h.categories.includes(slug));
export const getFeaturedHotels = () => hotels.filter((h) => h.featured);
