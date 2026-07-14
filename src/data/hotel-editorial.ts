import type { Locale } from "./site";

/**
 * Redaktionelle Vertiefungstexte pro Hotel (ergänzend zu hotels.ts `description`).
 * Bewusst getrennt von den verifizierten Kern-Daten gehalten. Inhalte basieren
 * ausschließlich auf den belegbaren Fakten aus hotels.ts/districts.ts plus
 * allgemein bekanntem Berlin-Kontext (Lage, ÖPNV, Umgebung) — keine erfundenen
 * Detailangaben (Preise/Verfügbarkeiten zeigt das Stay22-Widget live).
 */
export type HotelEditorial = Record<string, { de: string[]; en: string[] }>;

export const hotelEditorial: HotelEditorial = {
  // ===== MITTE =====
  "hotel-adlon-kempinski": {
    de: [
      "Kaum eine Adresse steht so sehr für Berlin wie das Adlon am Pariser Platz. Direkt vor der Tür liegen das Brandenburger Tor, der Reichstag und Unter den Linden - Sightseeing beginnt hier buchstäblich an der Hotellobby. Wer zum ersten Mal in die Hauptstadt kommt und maximale Zentralität mit Grandhotel-Service verbinden will, ist hier richtig.",
      "Zum Haus gehören ein Spa mit Pool und das Lorenz Adlon Esszimmer, eines der höchstdekorierten Restaurants der Stadt. Die Anbindung ist exzellent: Der S-Bahnhof Brandenburger Tor und der Bahnhof Friedrichstraße sind wenige Gehminuten entfernt, der Flughafen BER per S-Bahn direkt erreichbar.",
    ],
    en: [
      "Few addresses embody Berlin like the Adlon on Pariser Platz. The Brandenburg Gate, the Reichstag and Unter den Linden are right outside - sightseeing literally starts at the lobby door. If it is your first time in the capital and you want maximum centrality paired with grand-hotel service, this is the place.",
      "The house has a spa with pool and the Lorenz Adlon Esszimmer, one of the city's most decorated restaurants. Transport is excellent: Brandenburger Tor S-Bahn station and Friedrichstraße station are a few minutes' walk, and BER airport is a direct S-Bahn ride away.",
    ],
  },
  "hotel-de-rome": {
    de: [
      "Das Hotel de Rome am Bebelplatz verbindet Bankhaus-Geschichte mit ruhiger Eleganz. Museumsinsel, Staatsoper und Humboldt Forum liegen fußläufig - eine ideale Basis für Kultur- und Architektur-Reisende, die zentral, aber abseits des größten Trubels wohnen wollen.",
      "Der frühere Tresorraum dient heute als Pool, die Dachterrasse bietet Blick auf den Berliner Dom. Über die U-Bahnhöfe Hausvogteiplatz und Französische Straße sowie die nahe Friedrichstraße ist das ganze Stadtgebiet schnell erreichbar.",
    ],
    en: [
      "Hotel de Rome on Bebelplatz blends banking-house history with quiet elegance. Museum Island, the State Opera and the Humboldt Forum are within walking distance - an ideal base for culture and architecture travelers who want to be central yet away from the biggest crowds.",
      "The former bank vault now serves as the pool, and the rooftop terrace overlooks Berlin Cathedral. The U-Bahn stations Hausvogteiplatz and Französische Straße, plus nearby Friedrichstraße, put the whole city within easy reach.",
    ],
  },
  "regent-berlin": {
    de: [
      "Das Regent Berlin liegt unmittelbar am Gendarmenmarkt, für viele der schönste Platz der Stadt mit Konzerthaus und den beiden Domen. Die klassisch-zurückhaltende Einrichtung spricht Reisende an, die Wert auf Service und eine ruhige, dennoch absolut zentrale Lage legen.",
      "Restaurants, Theater und die Friedrichstraße sind zu Fuß erreichbar; über die U2 und U6 ist man in Minuten in Mitte-Ost wie -West. Eine gute Wahl für anspruchsvolle Städtereisende und Geschäftsreisende gleichermaßen.",
    ],
    en: [
      "The Regent Berlin sits directly on Gendarmenmarkt, for many the city's most beautiful square with its concert hall and twin cathedrals. The classic, understated interiors appeal to travelers who value service and a quiet yet absolutely central location.",
      "Restaurants, theaters and Friedrichstraße are within walking distance; the U2 and U6 lines reach both eastern and western Mitte in minutes. A strong choice for discerning city and business travelers alike.",
    ],
  },
  "hotel-amano-grand-central": {
    de: [
      "Das AMANO Grand Central direkt am Hauptbahnhof ist die praktische Design-Adresse für alle, die viel mit der Bahn unterwegs sind. Klare Linien, faire Preise und eine lebhafte Dachbar mit Blick über die Gleise machen es zum unkomplizierten City-Quartier.",
      "Vom Hauptbahnhof aus erreichst du jede Ecke Berlins und den Flughafen BER ohne Umsteigen. Regierungsviertel, Reichstag und der Tiergarten liegen in Gehweite - ideal für kurze, effiziente Aufenthalte.",
    ],
    en: [
      "The AMANO Grand Central right by Hauptbahnhof is the practical design choice for anyone traveling a lot by train. Clean lines, fair prices and a lively rooftop bar overlooking the tracks make it an easy-going city base.",
      "From Hauptbahnhof you can reach every corner of Berlin and BER airport without changing trains. The government quarter, the Reichstag and the Tiergarten are within walking distance - ideal for short, efficient stays.",
    ],
  },
  "soho-house-berlin": {
    de: [
      "Das Soho House an der Torstraße ist Members-Club und Designhotel in einem Bauhaus-Bau von 1928. Roof-Pool, hauseigenes Kino und mehrere Restaurants schaffen eine Atmosphäre, in der man auch ohne festes Programm gerne Zeit verbringt.",
      "Die Lage am Übergang von Mitte zu Prenzlauer Berg verbindet Sightseeing mit kreativem Kiez-Leben; Hackescher Markt, Rosenthaler Platz und das Nachtleben rund um die Torstraße sind fußläufig.",
    ],
    en: [
      "Soho House on Torstraße is a members' club and design hotel in a 1928 Bauhaus building. A roof pool, in-house cinema and several restaurants create an atmosphere where you happily spend time even without a fixed plan.",
      "Its location on the seam between Mitte and Prenzlauer Berg blends sightseeing with creative neighborhood life; Hackescher Markt, Rosenthaler Platz and the nightlife around Torstraße are all within walking distance.",
    ],
  },
  "the-mandala-hotel": {
    de: [
      "Das Mandala am Potsdamer Platz ist ein privat geführtes Suiten-Hotel für Reisende, die Platz und Privatsphäre schätzen. Mit dem ONO-Spa und dem Zwei-Sterne-Restaurant FACIL gehört es zu den ruhigeren Luxus-Adressen der Stadt.",
      "Der Potsdamer Platz verbindet Kino, Theater und Shopping direkt vor der Tür; über den gleichnamigen Regional- und S-Bahnhof bist du schnell in Mitte, am Hauptbahnhof und am Flughafen BER.",
    ],
    en: [
      "The Mandala on Potsdamer Platz is a privately run all-suite hotel for travelers who value space and privacy. With the ONO spa and the two-Michelin-star FACIL restaurant, it ranks among the city's quieter luxury addresses.",
      "Potsdamer Platz puts cinema, theater and shopping right outside; the regional and S-Bahn station of the same name quickly connects you to Mitte, Hauptbahnhof and BER airport.",
    ],
  },
  "circus-hotel": {
    de: [
      "Das inhabergeführte Circus Hotel am Rosenthaler Platz beweist, dass zentral und günstig kein Widerspruch sein muss. Seit über zwanzig Jahren mit viel Berliner Eigensinn geführt, gehört seit 2018 sogar eine eigene Brauerei zum Block.",
      "Vom Rosenthaler Platz (U8) erreichst du Hackescher Markt, Mitte und das Nachtleben der Torstraße zu Fuß. Hauseigene Stadttouren auf Deutsch und Englisch machen den Einstieg leicht - ideal für junge und neugierige Reisende.",
    ],
    en: [
      "The owner-run Circus Hotel on Rosenthaler Platz proves that central and affordable need not be a contradiction. Run with plenty of Berlin character for over twenty years, it even gained its own brewery on the block in 2018.",
      "From Rosenthaler Platz (U8) you can walk to Hackescher Markt, Mitte and the Torstraße nightlife. In-house city tours in German and English make getting started easy - ideal for young and curious travelers.",
    ],
  },
  "h2-hotel-alexanderplatz": {
    de: [
      "Das H2 Hotel direkt am Alexanderplatz ist die unkomplizierte Budget-Basis im Zentrum. Frische, schlichte Zimmer und ein gutes Frühstücksbuffet reichen vielen Städtereisenden völlig - gespart wird beim Zimmer, nicht bei der Lage.",
      "Am Alex laufen sämtliche U- und S-Bahn-Linien sowie Trams zusammen; Fernsehturm, Museumsinsel und Hackescher Markt sind fußläufig. Wer zentral wohnen, aber das Budget schonen will, ist hier goldrichtig.",
    ],
    en: [
      "The H2 Hotel right on Alexanderplatz is the no-fuss budget base in the center. Fresh, simple rooms and a good breakfast buffet are plenty for many city travelers - you save on the room, not the location.",
      "Every U- and S-Bahn line and several trams meet at the Alex; the TV Tower, Museum Island and Hackescher Markt are within walking distance. For staying central while sparing the budget, this is spot on.",
    ],
  },
  "adina-apartment-hotel-mitte": {
    de: [
      "Das Adina am Hackeschen Markt verbindet Hotelservice mit voll ausgestatteten Apartments inklusive Küchenzeile - ideal ab drei Nächten, für Familien und für alle, die nicht jeden Abend auswärts essen wollen. Innenpool und Sauna runden das Angebot ab.",
      "Der Hackesche Markt mit S-Bahn und Tram liegt direkt vor der Tür; Museumsinsel, Hackesche Höfe und das Nachtleben der Spandauer Vorstadt sind fußläufig. Eine flexible, familientaugliche Mitte-Basis.",
    ],
    en: [
      "The Adina at Hackescher Markt combines hotel service with fully equipped apartments including a kitchenette - ideal from three nights, for families and for anyone who would rather not eat out every evening. An indoor pool and sauna round things off.",
      "Hackescher Markt, with its S-Bahn and tram, is right outside; Museum Island, the Hackesche Höfe and the nightlife of the Spandauer Vorstadt are all walkable. A flexible, family-friendly Mitte base.",
    ],
  },
  "park-inn-alexanderplatz": {
    de: [
      "Mit 1.012 Zimmern auf 41 Etagen ist das Park Inn eines der größten Hotels Berlins und ein verlässlicher Tagungs- und Familien-Standort direkt am Alexanderplatz. Auf dem Dach gibt es eine Aussichtsplattform mit Blick über die ganze Stadt.",
      "Die Lage am Alex ist verkehrstechnisch unschlagbar: U2/U5/U8, S-Bahn und Tram halten direkt am Haus. Fernsehturm und Rotes Rathaus sind nur ein paar Schritte entfernt.",
    ],
    en: [
      "With 1,012 rooms across 41 floors, the Park Inn is one of Berlin's largest hotels and a reliable conference and family base right on Alexanderplatz. The roof has an observation deck with views over the whole city.",
      "Its Alex location is hard to beat for transport: U2/U5/U8, S-Bahn and trams stop right at the door. The TV Tower and Rotes Rathaus are just a few steps away.",
    ],
  },
  "hotel-indigo-alexanderplatz": {
    de: [
      "Das Hotel Indigo am Alexanderplatz ist ein Boutique-Designhotel der IHG-Gruppe mit lokal inspirierter Innenarchitektur - Mauer-Referenzen und Berliner Künstler ziehen sich durch das Haus. Eine gute Wahl für City-Wochenenden mit Stil.",
      "Vom Quartier am Alex erreichst du alle großen Sehenswürdigkeiten in Mitte zu Fuß oder in wenigen ÖPNV-Minuten. Restaurants und Nachtleben rund um den Hackeschen Markt sind nah.",
    ],
    en: [
      "Hotel Indigo at Alexanderplatz is a boutique design hotel by IHG with locally inspired interiors - wall references and Berlin artists run through the house. A good pick for stylish city weekends.",
      "From the quarter around the Alex you can reach all the major Mitte sights on foot or within a few minutes by public transport. Restaurants and nightlife around Hackescher Markt are close by.",
    ],
  },

  // ===== CHARLOTTENBURG-WILMERSDORF =====
  "hotel-bristol-berlin": {
    de: [
      "Das Hotel Bristol am Kurfürstendamm ist eines der traditionsreichsten Grandhotels West-Berlins und empfängt seit 1952 Gäste. Wer die elegante, etwas ruhigere Seite Berlins sucht - mit Shopping am Ku'damm und klassischer Kultur - wohnt hier klassisch und zentral zugleich.",
      "Pool, Spa und die Bristol Bar gehören zum Haus. Über den nahen Bahnhof Zoo und mehrere U-Bahn-Linien ist die ganze Stadt schnell erreichbar; KaDeWe und die Gedächtniskirche liegen in Gehweite.",
    ],
    en: [
      "The Hotel Bristol on Kurfürstendamm is one of West Berlin's most tradition-rich grand hotels, welcoming guests since 1952. If you want Berlin's elegant, slightly quieter side - with Ku'damm shopping and classical culture - this is classic and central at once.",
      "A pool, spa and the Bristol Bar are part of the house. Nearby Zoo station and several U-Bahn lines connect the whole city quickly; KaDeWe and the Memorial Church are within walking distance.",
    ],
  },
  "hotel-zoo-berlin": {
    de: [
      "Das Hotel Zoo am Kurfürstendamm verbindet einen restaurierten Gründerzeitbau von 1891 mit modernem Design und der stilvollen Grace Roof-Bar. Es ist die designorientierte, fotogene Adresse der City West - beliebt bei Paaren und Stilbewussten.",
      "Die Lage zwischen Olivaer und Adenauerplatz legt dir Boutiquen, Cafés und den Ku'damm vor die Tür; Bahnhof Zoo und mehrere U-Bahnhöfe sind nah. Ein Haus mit Charakter statt Kettenstandard.",
    ],
    en: [
      "Hotel Zoo on Kurfürstendamm pairs a restored 1891 period building with modern design and the stylish Grace rooftop bar. It is the design-led, photogenic address of City West - popular with couples and the style-conscious.",
      "Its location between Olivaer and Adenauerplatz puts boutiques, cafés and the Ku'damm at your doorstep; Zoo station and several U-Bahn stops are close. A house with character rather than chain standard.",
    ],
  },
  "waldorf-astoria-berlin": {
    de: [
      "Die Waldorf Astoria ist mit 32 Etagen das höchste Hotel Berlins und bietet Panoramablick über die City West. Der zweistöckige Spa Guerlain und die Bar Lang im 31. Stock machen sie zur Adresse für Reisende, die Luxus mit Aussicht verbinden.",
      "Direkt am Bahnhof Zoo gelegen, sind Ku'damm, KaDeWe und die Gedächtniskirche fußläufig, der Tiergarten gleich nebenan. Eine erstklassige Basis für anspruchsvolle Städte- und Geschäftsreisende.",
    ],
    en: [
      "At 32 floors, the Waldorf Astoria is Berlin's tallest hotel, offering panoramic views over City West. The two-floor Spa Guerlain and Bar Lang on the 31st floor make it the address for travelers who want luxury with a view.",
      "Right by Zoo station, the Ku'damm, KaDeWe and the Memorial Church are within walking distance, with the Tiergarten next door. A first-class base for discerning city and business travelers.",
    ],
  },
  "sir-savigny-hotel": {
    de: [
      "Das Sir Savigny liegt an einer ruhigen Seitenstraße nahe dem Savignyplatz und steht für persönlichen Boutique-Charme statt Kettenstandard. Individuell eingerichtete Zimmer und eine hauseigene Cocktail-Bar machen es zur stilvollen, dennoch entspannten City-West-Wahl.",
      "Der Savignyplatz mit seinen Restaurants und der Bahnhof Zoo sind wenige Minuten entfernt; von hier erreichst du Mitte und den Flughafen BER unkompliziert. Ideal für Designliebhaber mit mittlerem Budget.",
    ],
    en: [
      "The Sir Savigny sits on a quiet side street near Savignyplatz and stands for personal boutique charm rather than chain standard. Individually designed rooms and an in-house cocktail bar make it a stylish yet relaxed City West choice.",
      "Savignyplatz with its restaurants and Zoo station are minutes away; from here Mitte and BER airport are easy to reach. Ideal for design lovers on a mid-range budget.",
    ],
  },
  "hotel-q-berlin": {
    de: [
      "Das vom Berliner Büro GRAFT entworfene Hotel Q! ist eines der originellsten Designhotels der Stadt: geschwungene Wände, Bett und Wanne als bauliche Einheit, viel Eiche. Wer Architektur als Teil des Erlebnisses sucht, ist hier genau richtig.",
      "Die Lage nahe dem Ku'damm verbindet Shopping und Gastronomie mit guter ÖPNV-Anbindung. Ein Spa gehört zum Haus - eine kleine, designstarke Auszeit mitten in der City West.",
    ],
    en: [
      "Designed by Berlin firm GRAFT, Hotel Q! is one of the city's most original design hotels: curved walls, bed and bath as a built unit, lots of oak. If you want architecture as part of the experience, this is exactly right.",
      "Its location near the Ku'damm combines shopping and dining with good transit links. A spa is part of the house - a small, design-strong retreat in the heart of City West.",
    ],
  },
  "hampton-by-hilton-city-west": {
    de: [
      "Das Hampton by Hilton in der City West ist die solide 3-Sterne-Wahl mit verlässlichem Standard: frische Zimmer, kostenloses warmes Frühstück und 24/7-Fitness. Gerade für preisbewusste Business- und Messereisende ein faires Paket.",
      "Die City West ist bestens an Messegelände, Bahnhof Zoo und Innenstadt angebunden. Wer Verlässlichkeit zu fairem Preis sucht und auf Schnörkel verzichten kann, ist hier gut aufgehoben.",
    ],
    en: [
      "The Hampton by Hilton in City West is the solid 3-star choice with reliable standards: fresh rooms, free hot breakfast and 24/7 fitness. A fair package especially for budget-conscious business and trade-fair travelers.",
      "City West is well connected to the trade-fair grounds, Zoo station and the center. If you want reliability at a fair price and can do without frills, this is a good fit.",
    ],
  },
  "25hours-hotel-bikini": {
    de: [
      "Das 25hours Hotel Bikini im sanierten Bikinihaus von 1957 ist ein Erlebnis für sich: Die Jungle-Side-Zimmer blicken direkt in den Berliner Zoo, die Monkey Bar auf dem Dach gehört zu den bekanntesten Aussichtspunkten der Stadt.",
      "Direkt am Bahnhof Zoo gelegen, sind Ku'damm, KaDeWe und der Tiergarten fußläufig. Ein verspieltes, designstarkes Haus für Reisende, die Berlin von seiner kreativen Seite wollen.",
    ],
    en: [
      "The 25hours Hotel Bikini in the restored 1957 Bikinihaus is an experience in itself: the jungle-side rooms look straight into Berlin Zoo, and the rooftop Monkey Bar is one of the city's best-known viewpoints.",
      "Right by Zoo station, the Ku'damm, KaDeWe and the Tiergarten are within walking distance. A playful, design-strong house for travelers who want Berlin from its creative side.",
    ],
  },
  "intercontinental-berlin": {
    de: [
      "Das InterContinental an der Budapester Straße ist ein großes 5-Sterne-Haus mit umfangreichen Kongresskapazitäten - eine erste Adresse für Tagungen und größere Veranstaltungen. Spa, Pool und das Zwei-Sterne-Restaurant Hugos im 14. Stock gehören dazu.",
      "Zwischen Tiergarten und KaDeWe gelegen, verbindet es Geschäftsreise-Infrastruktur mit Innenstadtnähe. Bahnhof Zoo und mehrere U-Bahn-Linien sind in Gehweite.",
    ],
    en: [
      "The InterContinental on Budapester Straße is a large five-star hotel with extensive conference capacity - a leading address for meetings and bigger events. A spa, pool and the two-Michelin-star Hugos on the 14th floor are part of it.",
      "Set between the Tiergarten and KaDeWe, it combines business-travel infrastructure with proximity to the center. Zoo station and several U-Bahn lines are within walking distance.",
    ],
  },
  "henri-hotel-kurfuerstendamm": {
    de: [
      "Das Henri Hotel am Olivaer Platz steckt in einem Apartmenthaus von 1900 und ist im Stil eines New Yorker Apartments der 1950er gestaltet - Vintage-Möbel, Frühstück im klassischen Salon, viel persönlicher Charme. Eine charmante Alternative zur Kette am Ku'damm.",
      "Boutiquen, Cafés und der Kurfürstendamm liegen direkt vor der Tür; mehrere U-Bahnhöfe verbinden dich schnell mit dem Rest der Stadt. Ideal für Individualreisende mit Sinn fürs Besondere.",
    ],
    en: [
      "The Henri Hotel at Olivaer Platz occupies a 1900s apartment building and is styled like a 1950s New York apartment - vintage furniture, breakfast in a classic salon, lots of personal charm. A charming alternative to the chains on Ku'damm.",
      "Boutiques, cafés and the Kurfürstendamm are right outside; several U-Bahn stations connect you quickly to the rest of the city. Ideal for independent travelers with an eye for the special.",
    ],
  },

  // ===== FRIEDRICHSHAIN-KREUZBERG =====
  "michelberger-hotel": {
    de: [
      "Das inhabergeführte Michelberger gegenüber der Mercedes-Benz Arena ist eine Berliner Design-Ikone - vom alten Industriebau zum unverwechselbaren Haus mit Dach-Sauna und saisonalem Restaurant umgebaut. Es steht für das kreative, ungeschliffene Friedrichshain.",
      "East Side Gallery, Spreeufer und das Nachtleben rund um die Warschauer Straße sind fußläufig; S- und U-Bahn bringen dich in Minuten nach Mitte. Perfekt für Reisende, die das echte, junge Berlin suchen.",
    ],
    en: [
      "The owner-run Michelberger opposite Mercedes-Benz Arena is a Berlin design icon - converted from an old industrial building into a distinctive house with a rooftop sauna and seasonal restaurant. It embodies creative, unpolished Friedrichshain.",
      "The East Side Gallery, the Spree riverside and the nightlife around Warschauer Straße are within walking distance; S- and U-Bahn reach Mitte in minutes. Perfect for travelers seeking the real, young Berlin.",
    ],
  },
  "nhow-berlin": {
    de: [
      "Das nhow Berlin direkt an der Spree ist Europas erstes Musikhotel - mit zwei hauseigenen, von Gästen mietbaren Tonstudios und einer Innenarchitektur von Karim Rashid. Knallpink, verspielt und mit Glasfassade zur Oberbaumbrücke ein echtes Statement-Haus.",
      "Die Lage an der Grenze von Friedrichshain und Kreuzberg verbindet Spree-Atmosphäre mit kurzem Weg zu Clubs und Galerien. Ein Haus für Kreative, Musikfans und alle, die das Besondere wollen.",
    ],
    en: [
      "The nhow Berlin right on the Spree is Europe's first music hotel - with two in-house recording studios guests can rent and interiors by Karim Rashid. Hot-pink, playful and with a glass facade facing the Oberbaum Bridge, it is a genuine statement house.",
      "Its location on the border of Friedrichshain and Kreuzberg blends Spree atmosphere with a short hop to clubs and galleries. A house for creatives, music fans and anyone after something different.",
    ],
  },
  "orania-berlin": {
    de: [
      "Das Orania.Berlin am Oranienplatz ist ein restauriertes Gründerzeithaus, das Fünf-Sterne-Boutique-Komfort mit Live-Musik im eigenen Salon verbindet. Das Restaurant mit Drei-Kontinente-Küche und der persönliche Service machen es zu einer der besonderen Adressen Kreuzbergs.",
      "Mitten im lebendigen Kreuzberg gelegen, sind Markthalle Neun, Landwehrkanal und das Nachtleben fußläufig. Eine Wahl für Genießer, die Kiez-Authentizität nicht gegen Komfort eintauschen wollen.",
    ],
    en: [
      "The Orania.Berlin on Oranienplatz is a restored period building that pairs five-star boutique comfort with live music in its own salon. Its three-continent restaurant and personal service make it one of Kreuzberg's special addresses.",
      "Set in the heart of lively Kreuzberg, Markthalle Neun, the Landwehrkanal and the nightlife are within walking distance. A choice for connoisseurs who refuse to trade neighborhood authenticity for comfort.",
    ],
  },
  "schulz-hotel": {
    de: [
      "Das Schulz Hotel liegt direkt an der East Side Gallery zwischen Ostbahnhof und Mercedes-Benz Arena - kaum ein Haus ist näher am längsten erhaltenen Mauerstück. Frische Zimmer, faire Preise und Familienzimmer machen es zur preisbewussten Friedrichshain-Basis.",
      "Konzerte in der Arena, Clubs an der Warschauer Straße und das Spreeufer sind fußläufig; der Ostbahnhof verbindet dich mit Regional- und S-Bahn. Ideal für junge Reisende und Familien mit kleinem Budget.",
    ],
    en: [
      "The Schulz Hotel sits right by the East Side Gallery between Ostbahnhof and Mercedes-Benz Arena - few houses are closer to the longest preserved stretch of the Wall. Fresh rooms, fair prices and family rooms make it a budget-savvy Friedrichshain base.",
      "Concerts at the arena, clubs on Warschauer Straße and the Spree riverside are within walking distance; Ostbahnhof links you to regional and S-Bahn services. Ideal for young travelers and families on a smaller budget.",
    ],
  },

  // ===== PANKOW =====
  "hotel-oderberger": {
    de: [
      "Das Hotel Oderberger im ehemaligen Stadtbad von 1902 ist ein echtes Unikat: Das historische Schwimmbecken in der Original-Halle ist erhalten und kann genutzt werden. Boutique-Charme, Familienzimmer und die Lage wenige Minuten vom Mauerpark machen es besonders.",
      "Mitten in Prenzlauer Berg gelegen, sind Kollwitzplatz, Kulturbrauerei und unzählige Cafés fußläufig; Tram und U2 bringen dich schnell nach Mitte. Ideal für Familien und Reisende, die Charakter suchen.",
    ],
    en: [
      "The Hotel Oderberger in the former 1902 public baths is a real one-off: the historic swimming pool in the original hall is preserved and can be used. Boutique charm, family rooms and a location minutes from Mauerpark make it special.",
      "In the heart of Prenzlauer Berg, Kollwitzplatz, the Kulturbrauerei and countless cafés are within walking distance; tram and U2 reach Mitte quickly. Ideal for families and travelers seeking character.",
    ],
  },
  "myers-hotel": {
    de: [
      "Das inhabergeführte Myer's Hotel nahe dem Kollwitzplatz steckt in einem restaurierten Gründerzeitbau und bietet mit kleinem Garten und ruhiger Wohnstraße eine entspannte Auszeit mitten in Prenzlauer Berg. Persönlich, leise, charmant.",
      "Cafés, Boutiquen und der Wochenmarkt am Kollwitzplatz sind fußläufig; über Tram und U2 erreichst du Mitte in rund 15 Minuten. Eine Wahl für Paare und Ruhesuchende, die zentral, aber nicht im Trubel wohnen wollen.",
    ],
    en: [
      "The owner-run Myer's Hotel near Kollwitzplatz occupies a restored period building and, with its small garden and quiet residential street, offers a relaxed retreat in the heart of Prenzlauer Berg. Personal, quiet, charming.",
      "Cafés, boutiques and the Kollwitzplatz farmers' market are within walking distance; tram and U2 reach Mitte in around 15 minutes. A choice for couples and quiet-seekers who want to be central but not in the bustle.",
    ],
  },
  "livinghotel-weissensee": {
    de: [
      "Das Living Hotel Weißensee bietet voll ausgestattete Studios und Apartments mit Küchenzeile und eigener Parkanlage am Weißen See im Norden Berlins. Für längere Aufenthalte und Familien ist das eine ruhige, praktische und preiswerte Basis.",
      "Der Weiße See mit Strandbad und Spaziergängen liegt direkt vor der Tür; mit Tram und Bus erreichst du Prenzlauer Berg und die Innenstadt. Ideal, wenn du Platz, Ruhe und Selbstversorgung schätzt.",
    ],
    en: [
      "The Living Hotel Weißensee offers fully equipped studios and apartments with kitchenette and its own park grounds by Lake Weißensee in northern Berlin. For longer stays and families it is a quiet, practical and affordable base.",
      "Lake Weißensee with its lido and walking paths is right outside; tram and bus reach Prenzlauer Berg and the center. Ideal if you value space, quiet and self-catering.",
    ],
  },
  "ackselhaus-blue-home": {
    de: [
      "Das Ackselhaus & Blue Home ist ein sehr persönlich geführtes Boutique-Hotel mit individuell gestalteten Themen-Zimmern in zwei restaurierten Altbauten. Das Frühstück im begrünten Innenhof und die ruhige Belforter Straße machen es zu einem echten Geheimtipp in Prenzlauer Berg.",
      "Kollwitzplatz, Cafés und Kulturbrauerei sind fußläufig; Tram und U2 verbinden dich mit dem Zentrum. Eine charmante Wahl für Paare und Individualreisende, die das Besondere schätzen.",
    ],
    en: [
      "The Ackselhaus & Blue Home is a very personally run boutique hotel with individually designed themed rooms across two restored period buildings. Breakfast in the leafy courtyard and the quiet Belforter Straße make it a genuine insider tip in Prenzlauer Berg.",
      "Kollwitzplatz, cafés and the Kulturbrauerei are within walking distance; tram and U2 connect you to the center. A charming choice for couples and independent travelers who appreciate the special.",
    ],
  },

  // ===== NEUKÖLLN =====
  "estrel-berlin": {
    de: [
      "Das Estrel Berlin an der Sonnenallee ist mit 1.125 Zimmern nach eigenen Angaben das größte Convention-, Entertainment- und Hotelzentrum Deutschlands. Eigene Show-Bühne, 15 Tagungsräume und direkter Spreezugang machen es zur Adresse für Veranstaltungen und Gruppen.",
      "Über die nahe S-Bahn (Sonnenallee) bist du schnell in Kreuzberg und Mitte. Für Messe-, Kongress- und Eventbesucher bietet das Haus viel Kapazität zu fairem Preis.",
    ],
    en: [
      "The Estrel Berlin on Sonnenallee, with 1,125 rooms, is by its own account Germany's largest convention, entertainment and hotel center. Its own show stage, 15 conference rooms and direct Spree access make it the address for events and groups.",
      "The nearby S-Bahn (Sonnenallee) quickly reaches Kreuzberg and Mitte. For trade-fair, congress and event visitors the house offers ample capacity at a fair price.",
    ],
  },
  "huettenpalast": {
    de: [
      "Der Hüttenpalast in Neukölln ist eines der ungewöhnlichsten Häuser Berlins: In einer ehemaligen Staubsauger-Fabrik übernachtest du in alten Wohnwagen und selbstgebauten Hütten unter einem Hallendach - dazu gibt es klassische Zimmer und ein Café im Hof.",
      "Mitten im lebendigen Neukölln gelegen, sind Maybachufer, Bars und Galerien fußläufig; U7 und U8 verbinden dich mit dem Rest der Stadt. Für neugierige, junge Reisende ein Erlebnis zum fairen Preis.",
    ],
    en: [
      "The Hüttenpalast in Neukölln is one of Berlin's most unusual houses: in a former vacuum-cleaner factory you sleep in vintage caravans and self-built huts under a covered hall - plus classic rooms and a café in the courtyard.",
      "In the heart of lively Neukölln, the Maybachufer, bars and galleries are within walking distance; U7 and U8 connect you to the rest of the city. For curious, young travelers, an experience at a fair price.",
    ],
  },

  // ===== TEMPELHOF-SCHÖNEBERG =====
  "axel-hotel-berlin": {
    de: [
      "Das Axel Hotel der spanischen Gruppe liegt mitten im Regenbogen-Kiez um die Motzstraße - Berlins traditionsreichstem queeren Viertel. Als heterofriendly Designhotel mit Dachterrasse, Pool und eigener Bar zieht es viele wiederkehrende Gäste an.",
      "Schöneberg ist zentral und gut angebunden: KaDeWe, Wittenbergplatz und der Ku'damm sind nah, mehrere U-Bahn-Linien verbinden dich mit der ganzen Stadt. Eine stilvolle, lebendige Basis.",
    ],
    en: [
      "The Axel Hotel by the Spanish group sits in the heart of the rainbow district around Motzstraße - Berlin's most tradition-rich queer quarter. As a heterofriendly design hotel with roof terrace, pool and its own bar, it draws many returning guests.",
      "Schöneberg is central and well connected: KaDeWe, Wittenbergplatz and the Ku'damm are nearby, and several U-Bahn lines link you to the whole city. A stylish, lively base.",
    ],
  },
  "hotel-berlin-berlin": {
    de: [
      "Das große Hotel Berlin, Berlin am Rand des Tiergartens ist mit 701 Zimmern eine der langlebigsten Adressen West-Berlins. Familienzimmer, Tagungsbereich und ein starkes Frühstücksbuffet machen es zur verlässlichen Wahl für Familien und Gruppen.",
      "KaDeWe und der Wittenbergplatz sind fußläufig, der Tiergarten liegt direkt nebenan. Über die nahen U-Bahnhöfe erreichst du Mitte und die City West gleichermaßen schnell.",
    ],
    en: [
      "The large Hotel Berlin, Berlin at the edge of the Tiergarten is, with 701 rooms, one of West Berlin's longest-running addresses. Family rooms, a conference area and a strong breakfast buffet make it a reliable choice for families and groups.",
      "KaDeWe and Wittenbergplatz are within walking distance, with the Tiergarten right next door. Nearby U-Bahn stations reach both Mitte and City West quickly.",
    ],
  },

  // ===== STEGLITZ-ZEHLENDORF =====
  "patrick-hellmann-schlosshotel": {
    de: [
      "Das Patrick Hellmann Schlosshotel im Grunewald residiert im Schloss Pannwitz von 1914 - die Innenräume wurden 1996 von Karl Lagerfeld gestaltet. Sehr diskret, mit Parklage und eigenem Restaurant, ist es die ruhige Luxus-Adresse im grünen Südwesten Berlins.",
      "Wer Erholung über kurze Sightseeing-Wege stellt, findet hier Ruhe zwischen Wald und Villen. Grunewald, Wannsee und Potsdam sind nah; ins Zentrum sind es rund 30 bis 40 Minuten.",
    ],
    en: [
      "The Patrick Hellmann Schlosshotel in the Grunewald occupies the 1914 Pannwitz Palace - the interiors were designed by Karl Lagerfeld in 1996. Highly discreet, with parkland and its own restaurant, it is the quiet luxury address in Berlin's green south-west.",
      "If you value recovery over short sightseeing distances, you will find calm here between woods and villas. The Grunewald, Wannsee and Potsdam are close; the center is around 30 to 40 minutes away.",
    ],
  },
  "harnack-haus": {
    de: [
      "Das Harnack-Haus in Dahlem wurde 1929 als Tagungshaus errichtet und ist heute Gäste- und Konferenzhaus der Max-Planck-Gesellschaft - auch für reguläre Reisende offen. Die ruhige, akademisch geprägte Atmosphäre ist ein echter Geheimtipp im grünen Südwesten.",
      "Dahlem mit seinen Museen, Villen und dem Botanischen Garten liegt vor der Tür; über die U3 erreichst du die City West in gut 20 Minuten. Ideal für Ruhesuchende und Geschäftsreisende mit Tagungsbezug.",
    ],
    en: [
      "The Harnack-Haus in Dahlem was built in 1929 as a conference house and today serves as the Max Planck Society's guest and conference house - also open to regular travelers. Its quiet, academically minded atmosphere is a genuine insider tip in the green south-west.",
      "Dahlem with its museums, villas and the Botanic Garden is on the doorstep; the U3 reaches City West in just over 20 minutes. Ideal for quiet-seekers and business travelers with a conference connection.",
    ],
  },

  // ===== TREPTOW-KÖPENICK =====
  "hotel-mueggelsee-berlin": {
    de: [
      "Das Hotel Müggelsee liegt mit 174 Zimmern direkt am größten See Berlins - mit eigenem Strandbad, großem Spa und Restaurant mit Seeblick. Es ist der klassische Wellness- und Wochenend-Spot, an dem auch Berliner gern Auszeit nehmen.",
      "Baden, Paddeln und Spaziergänge starten direkt am Haus; der Müggelturm und die Köpenicker Altstadt sind nah. Ins Zentrum sind es rund 40 Minuten mit S-Bahn und Bus - dafür bekommst du Natur, die kein zentraler Bezirk bietet.",
    ],
    en: [
      "The Hotel Müggelsee sits with 174 rooms right on Berlin's largest lake - with its own lido, a large spa and a restaurant with lake views. It is the classic wellness and weekend spot where even Berliners like to take time out.",
      "Swimming, paddling and walks start right at the house; the Müggelturm and Köpenick's old town are close. The center is around 40 minutes by S-Bahn and bus - in return you get nature no central district can offer.",
    ],
  },

  // ===== REINICKENDORF =====
  "best-western-am-borsigturm": {
    de: [
      "Das Best Western Hotel am Borsigturm liegt im sanierten Borsigwerke-Areal, einem historischen Industriedenkmal im grünen Norden Berlins. Pool, Sauna und Tagungsbereich machen es zur familienfreundlichen und business-tauglichen Wahl mit gutem Preis-Leistungs-Verhältnis.",
      "Über die U6 (Station Borsigwerke) erreichst du den Alexanderplatz in rund 25 Minuten; Tegeler See und Tegeler Forst liegen für Ausflüge ins Grüne nah. Parkplätze sind hier entspannter als in der Innenstadt.",
    ],
    en: [
      "The Best Western Hotel am Borsigturm sits in the renovated Borsigwerke area, a historic industrial monument in Berlin's green north. A pool, sauna and conference area make it a family-friendly and business-capable choice with good value for money.",
      "The U6 (Borsigwerke station) reaches Alexanderplatz in around 25 minutes; Tegeler See and the Tegel forest are close for trips into the greenery. Parking is more relaxed here than in the center.",
    ],
  },

  // ===== MARZAHN-HELLERSDORF =====
  "ibis-budget-berlin-hellersdorf": {
    de: [
      "Das ibis budget Berlin Hellersdorf ist die ehrliche Spar-Option im Osten Berlins: frisch renovierte, funktionale Zimmer, kostenloses WLAN und ein U-Bahn-Anschluss in Gehnähe. Wer vor allem ein sauberes Bett und gute Anbindung sucht, fährt hier am günstigsten.",
      "Über die U5 erreichst du den Alexanderplatz in rund 30 bis 40 Minuten; die Gärten der Welt liegen für einen Ausflug ganz in der Nähe. Ideal für sehr budgetbewusste Reisende und längere Aufenthalte.",
    ],
    en: [
      "The ibis budget Berlin Hellersdorf is the honest money-saving option in eastern Berlin: freshly renovated, functional rooms, free Wi-Fi and a U-Bahn link within walking distance. If you mainly want a clean bed and good connections, this is the cheapest way to go.",
      "The U5 reaches Alexanderplatz in around 30 to 40 minutes; the Gardens of the World are nearby for a day out. Ideal for very budget-conscious travelers and longer stays.",
    ],
  },
};
