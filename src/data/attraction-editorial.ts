import type { Locale } from "./site";

/**
 * Redaktionelle Vertiefung pro Sehenswürdigkeit (ergänzend zu attractions.ts `intro`).
 * Praktischer Besuchs-Kontext, Umgebung und ÖPNV — basierend auf allgemein
 * bekannten, belegbaren Fakten. Keine erfundenen Öffnungszeiten/Preise.
 */
export type AttractionEditorial = Record<string, { de: string[]; en: string[] }>;

export const attractionEditorial: AttractionEditorial = {
  "brandenburger-tor": {
    de: [
      "Das Brandenburger Tor ist der zentrale Treffpunkt Berlins und der natürliche Startpunkt jeder Stadterkundung. Vom Pariser Platz aus erreichst du in wenigen Minuten den Reichstag, das Holocaust-Mahnmal und Unter den Linden - ein kompaktes Sightseeing-Bündel auf kürzester Strecke.",
      "Am schönsten ist das Tor früh am Morgen oder abends, wenn es beleuchtet ist und die Tagesbusse weg sind. Der S- und U-Bahnhof Brandenburger Tor liegt direkt darunter; ringsum reihen sich Botschaften, das Adlon und Cafés.",
    ],
    en: [
      "The Brandenburg Gate is Berlin's central meeting point and the natural starting point for any city walk. From Pariser Platz you reach the Reichstag, the Holocaust Memorial and Unter den Linden within minutes - a compact bundle of sights on the shortest of routes.",
      "The gate is at its best early in the morning or in the evening when it is lit and the day-trip buses have gone. The Brandenburger Tor S- and U-Bahn station sits right beneath it; embassies, the Adlon and cafés line the square.",
    ],
  },
  "reichstag": {
    de: [
      "Der Reichstag ist Sitz des Deutschen Bundestags und durch die Norman-Foster-Glaskuppel zugleich ein Aussichtspunkt mit Rundblick über das Regierungsviertel. Der Besuch der Kuppel ist kostenlos, erfordert aber eine vorherige Anmeldung - am besten rechtzeitig vor der Reise einplanen.",
      "Rundherum liegen das Bundeskanzleramt, der Tiergarten und das Brandenburger Tor in Gehweite. Der nahe Hauptbahnhof und der S-Bahnhof Brandenburger Tor machen die Anreise unkompliziert.",
    ],
    en: [
      "The Reichstag is the seat of the German Bundestag and, thanks to the Norman Foster glass dome, also a viewpoint with panoramas over the government quarter. Visiting the dome is free but requires advance registration - best planned well before your trip.",
      "The Chancellery, the Tiergarten and the Brandenburg Gate are all within walking distance. The nearby Hauptbahnhof and Brandenburger Tor S-Bahn station make getting there easy.",
    ],
  },
  "museumsinsel": {
    de: [
      "Die Museumsinsel vereint fünf Weltklasse-Häuser auf engstem Raum und gehört zum UNESCO-Welterbe. Für einen Besuch lohnt es sich, vorab ein, zwei Museen auszuwählen - alles an einem Tag ist kaum zu schaffen. Zeit-Tickets helfen, Wartezeiten zu vermeiden.",
      "Die Insel liegt zwischen Lustgarten und Berliner Dom, fußläufig zu Unter den Linden und Hackescher Markt. S-Bahn (Hackescher Markt) und Tram bringen dich direkt hin.",
    ],
    en: [
      "Museum Island gathers five world-class houses in a tight space and is a UNESCO World Heritage site. It pays to pick one or two museums in advance - seeing everything in a day is barely possible. Timed tickets help avoid queues.",
      "The island lies between the Lustgarten and Berlin Cathedral, within walking distance of Unter den Linden and Hackescher Markt. S-Bahn (Hackescher Markt) and tram take you right there.",
    ],
  },
  "fernsehturm": {
    de: [
      "Mit 368 Metern ist der Fernsehturm das höchste Gebäude Deutschlands und bietet von der Aussichtsplattform und dem Drehrestaurant den weitesten Blick über Berlin. An klaren Tagen reicht die Sicht weit ins Umland - Tickets mit Zeitfenster sparen Wartezeit.",
      "Der Turm steht direkt am Alexanderplatz, wo alle U- und S-Bahn-Linien zusammenlaufen. Museumsinsel, Rotes Rathaus und Hackescher Markt sind von hier aus schnell zu Fuß erreicht.",
    ],
    en: [
      "At 368 meters the TV Tower is the tallest building in Germany, and from the observation deck and revolving restaurant it offers the widest view over Berlin. On clear days you can see far into the surrounding region - timed tickets save waiting.",
      "The tower stands right on Alexanderplatz, where every U- and S-Bahn line meets. Museum Island, the Rotes Rathaus and Hackescher Markt are quickly reached on foot from here.",
    ],
  },
  "checkpoint-charlie": {
    de: [
      "Checkpoint Charlie war der bekannteste Grenzübergang des Kalten Krieges und ist heute eine Open-Air-Ausstellung mitten in der Stadt. Wer die Geschichte vertiefen will, findet das Mauermuseum direkt nebenan und das Mauer-Dokumentationszentrum in der Umgebung.",
      "Der Ort liegt zentral in Mitte, nahe der Friedrichstraße; die gleichnamigen U-Bahnhöfe (U6) sind wenige Schritte entfernt. Gut kombinierbar mit Gendarmenmarkt und Unter den Linden.",
    ],
    en: [
      "Checkpoint Charlie was the best-known Cold War border crossing and today is an open-air exhibition in the middle of the city. To go deeper, the Mauermuseum is right next door and Wall documentation sites are nearby.",
      "The site is central in Mitte, near Friedrichstraße; the U6 stations are a few steps away. It combines well with Gendarmenmarkt and Unter den Linden.",
    ],
  },
  "east-side-gallery": {
    de: [
      "Die East Side Gallery ist mit rund 1,3 Kilometern das längste erhaltene Stück der Berliner Mauer und zugleich eine durchgehende Open-Air-Galerie. Die Bilder entlang der Spree erzählen die Wendezeit - ein Spaziergang von der Oberbaumbrücke bis zum Ostbahnhof lohnt sich.",
      "Die Galerie liegt in Friedrichshain, direkt am Spreeufer und nahe der Mercedes-Benz Arena. Warschauer Straße und Ostbahnhof (S-Bahn) sind wenige Minuten entfernt.",
    ],
    en: [
      "The East Side Gallery, at around 1.3 kilometers, is the longest preserved stretch of the Berlin Wall and at the same time a continuous open-air gallery. The murals along the Spree tell the story of the fall of the Wall - a walk from the Oberbaum Bridge to Ostbahnhof is worth it.",
      "The gallery is in Friedrichshain, right on the Spree riverside and near Mercedes-Benz Arena. Warschauer Straße and Ostbahnhof (S-Bahn) are a few minutes away.",
    ],
  },
  "mauerpark": {
    de: [
      "Der Mauerpark ist das Wochenend-Wohnzimmer von Prenzlauer Berg: Sonntags treffen sich hier Flohmarkt, Straßenmusik und das legendäre Bearpit-Karaoke. Auf der großen Wiese wird gepicknickt, gegrillt und gespielt - sehr berlinerisch und kostenlos.",
      "Der Park liegt an der Grenze von Prenzlauer Berg und Wedding; Tram (M10) und U-Bahn (U8 Bernauer Straße) bringen dich hin. Gut kombinierbar mit der Gedenkstätte Berliner Mauer an der Bernauer Straße.",
    ],
    en: [
      "Mauerpark is Prenzlauer Berg's weekend living room: on Sundays it hosts a flea market, street music and the legendary Bearpit karaoke. People picnic, barbecue and play on the big meadow - very Berlin, and free.",
      "The park sits on the border of Prenzlauer Berg and Wedding; tram (M10) and U-Bahn (U8 Bernauer Straße) take you there. It combines well with the Berlin Wall Memorial on Bernauer Straße.",
    ],
  },
  "tiergarten": {
    de: [
      "Der Große Tiergarten ist die grüne Lunge im Herzen Berlins - ein weitläufiger Park mit Seen, Wiesen und schattigen Alleen, ideal für eine Pause zwischen zwei Sightseeing-Etappen. Von der Siegessäule in der Mitte hat man einen schönen Rundblick.",
      "Der Park erstreckt sich zwischen Brandenburger Tor und Bahnhof Zoo; rundum liegen Reichstag, Schloss Bellevue und das Kulturforum. Mehrere S- und U-Bahnhöfe säumen die Ränder.",
    ],
    en: [
      "The Großer Tiergarten is the green lung in the heart of Berlin - a sprawling park with lakes, meadows and shady avenues, ideal for a break between two sightseeing legs. The Victory Column at its center offers a fine panorama.",
      "The park stretches between the Brandenburg Gate and Zoo station; around it lie the Reichstag, Bellevue Palace and the Kulturforum. Several S- and U-Bahn stations line the edges.",
    ],
  },
  "kurfuerstendamm": {
    de: [
      "Der Kurfürstendamm ist Berlins traditionsreiche Shopping- und Flaniermeile in der City West. Vom KaDeWe über Designerläden bis zu Cafés und Kinos reiht sich hier auf rund dreieinhalb Kilometern alles aneinander - ein Bummel führt fast von selbst zur Gedächtniskirche.",
      "Mehrere U-Bahnhöfe und der Bahnhof Zoo erschließen den Ku'damm; Hotels aller Klassen liegen direkt an oder nahe der Straße. Ideal für einen entspannten Nachmittag im Westen.",
    ],
    en: [
      "The Kurfürstendamm is Berlin's tradition-rich shopping and strolling boulevard in City West. From KaDeWe to designer stores, cafés and cinemas, everything lines up along some three and a half kilometers - a stroll almost inevitably leads to the Memorial Church.",
      "Several U-Bahn stations and Zoo station serve the Ku'damm; hotels of every class sit on or near the street. Ideal for a relaxed afternoon in the west.",
    ],
  },
  "gendarmenmarkt": {
    de: [
      "Der Gendarmenmarkt gilt vielen als schönster Platz Berlins: Konzerthaus, Deutscher und Französischer Dom bilden ein harmonisches Ensemble. Im Advent verwandelt er sich in einen der stimmungsvollsten Weihnachtsmärkte der Stadt.",
      "Der Platz liegt zentral in Mitte, fußläufig zu Friedrichstraße, Unter den Linden und Checkpoint Charlie. Die U-Bahnhöfe Französische Straße, Hausvogteiplatz und Stadtmitte (U2/U6) sind nah.",
    ],
    en: [
      "Gendarmenmarkt is considered by many the most beautiful square in Berlin: the concert hall and the German and French cathedrals form a harmonious ensemble. In Advent it turns into one of the city's most atmospheric Christmas markets.",
      "The square is central in Mitte, within walking distance of Friedrichstraße, Unter den Linden and Checkpoint Charlie. The U-Bahn stations Französische Straße, Hausvogteiplatz and Stadtmitte (U2/U6) are close.",
    ],
  },
  "potsdamer-platz": {
    de: [
      "Der Potsdamer Platz steht für das neue Berlin: nach dem Mauerfall komplett neu bebaut, vereint er Kino, Theater, Shopping und moderne Architektur an einem Ort. Reste der Berliner Mauer und der rote Info-Container erinnern an die geteilte Vergangenheit.",
      "Der Platz ist über den gleichnamigen Regional- und S-Bahnhof bestens angebunden; Tiergarten, Kulturforum und das Mandala-Hotel liegen direkt nebenan. Ideal bei Regen dank überdachter Passagen.",
    ],
    en: [
      "Potsdamer Platz stands for the new Berlin: completely rebuilt after the fall of the Wall, it brings cinema, theater, shopping and modern architecture together in one place. Remnants of the Berlin Wall and the red info box recall the divided past.",
      "The square is well served by the regional and S-Bahn station of the same name; the Tiergarten, Kulturforum and the Mandala hotel are right next door. Great in the rain thanks to covered arcades.",
    ],
  },
  "holocaust-mahnmal": {
    de: [
      "Das Denkmal für die ermordeten Juden Europas besteht aus 2.711 Stelen, durch die man hindurchgeht - ein bewusst stiller, eindrücklicher Ort. Im unterirdischen Ort der Information werden die Opfer und ihre Geschichten dokumentiert; der Besuch ist kostenlos.",
      "Das Mahnmal liegt direkt südlich des Brandenburger Tors, fußläufig zum Tiergarten und Potsdamer Platz. Ein respektvoller Umgang ist selbstverständlich - es ist eine Gedenkstätte, kein Fotomotiv.",
    ],
    en: [
      "The Memorial to the Murdered Jews of Europe consists of 2,711 stelae you walk through - a deliberately quiet, powerful place. The underground Information Center documents the victims and their stories; admission is free.",
      "The memorial lies just south of the Brandenburg Gate, within walking distance of the Tiergarten and Potsdamer Platz. Respectful conduct goes without saying - it is a place of remembrance, not a photo backdrop.",
    ],
  },
  "alexanderplatz": {
    de: [
      "Der Alexanderplatz ist Berlins großer Verkehrs- und Einkaufsknoten im Osten der Mitte - geprägt vom Fernsehturm, der Weltzeituhr und weiten Plätzen. Hier laufen U-Bahn, S-Bahn, Tram und Regionalzüge zusammen, was den Alex zum praktischen Ausgangspunkt macht.",
      "Rund um den Platz gibt es Kaufhäuser und Shopping-Center; Museumsinsel, Rotes Rathaus und Hackescher Markt sind fußläufig. Ideal als zentrale Basis für Sightseeing.",
    ],
    en: [
      "Alexanderplatz is Berlin's big transport and shopping hub in eastern Mitte - defined by the TV Tower, the World Clock and wide open spaces. U-Bahn, S-Bahn, tram and regional trains all meet here, making the Alex a practical starting point.",
      "Department stores and shopping centers surround the square; Museum Island, the Rotes Rathaus and Hackescher Markt are within walking distance. Ideal as a central base for sightseeing.",
    ],
  },
  "schloss-charlottenburg": {
    de: [
      "Schloss Charlottenburg ist die größte Schlossanlage Berlins und ein Stück preußische Geschichte mitten in der City West. Prunkräume, die Orangerie und vor allem der weitläufige Barock- und Landschaftsgarten lohnen einen halben Tag - der Park ist frei zugänglich.",
      "Das Schloss liegt im Westen Charlottenburgs, erreichbar über U-Bahn und Bus; Ku'damm und KaDeWe sind ein kurzes Stück entfernt. Schön für einen ruhigeren Tag abseits der Mitte-Hektik.",
    ],
    en: [
      "Charlottenburg Palace is Berlin's largest palace complex and a piece of Prussian history in the heart of City West. State rooms, the orangery and above all the sprawling baroque and landscape garden are worth half a day - the park is free to enter.",
      "The palace sits in western Charlottenburg, reachable by U-Bahn and bus; the Ku'damm and KaDeWe are a short distance away. Lovely for a quieter day away from the bustle of Mitte.",
    ],
  },
  "tempelhofer-feld": {
    de: [
      "Das Tempelhofer Feld ist der ehemalige Flughafen Tempelhof, heute eine riesige öffentliche Freifläche. Auf den alten Rollbahnen wird geradelt, geskatet und Drachen steigen gelassen; es gibt Gemeinschaftsgärten und viel Platz zum Durchatmen - eine der ungewöhnlichsten Berlin-Erfahrungen, und kostenlos.",
      "Das Feld liegt zwischen Neukölln, Kreuzberg und Tempelhof; mehrere U- und S-Bahnhöfe säumen die Ränder. Am schönsten zum Sonnenuntergang über der weiten Fläche.",
    ],
    en: [
      "Tempelhofer Feld is the former Tempelhof airport, today a vast public open space. People cycle, skate and fly kites on the old runways; there are community gardens and plenty of room to breathe - one of Berlin's most unusual experiences, and free.",
      "The field lies between Neukölln, Kreuzberg and Tempelhof; several U- and S-Bahn stations line the edges. At its best at sunset over the wide expanse.",
    ],
  },
  "olympiastadion": {
    de: [
      "Das Olympiastadion von 1936 ist eine eindrucksvolle Sportstätte und heute Heimat von Hertha BSC sowie Schauplatz von Konzerten und dem DFB-Pokalfinale. Außerhalb von Veranstaltungen sind Besichtigungen und Führungen möglich, die Architektur und Geschichte verbinden.",
      "Das Stadion liegt im Westen Charlottenburgs und ist über die U2 und S-Bahn (Olympiastadion) direkt angebunden. Gut kombinierbar mit einem Ausflug ins grüne West-Berlin.",
    ],
    en: [
      "The 1936 Olympic Stadium is an impressive venue and today home to Hertha BSC as well as a stage for concerts and the German Cup final. Outside events, tours are available that combine architecture and history.",
      "The stadium sits in western Charlottenburg and is directly served by the U2 and S-Bahn (Olympiastadion). It combines well with a trip into green West Berlin.",
    ],
  },
  "berliner-dom": {
    de: [
      "Der Berliner Dom am Lustgarten ist die größte Kirche der Stadt und ein Wahrzeichen der Museumsinsel. Wer die Kuppel erklimmt, wird mit einem Rundblick über Mitte und die Spree belohnt; im Inneren beeindrucken die Hohenzollerngruft und die große Orgel.",
      "Der Dom liegt direkt gegenüber dem Humboldt Forum, fußläufig zu Museumsinsel, Unter den Linden und Alexanderplatz. S-Bahn (Hackescher Markt) und Tram halten in der Nähe.",
    ],
    en: [
      "Berlin Cathedral on the Lustgarten is the city's largest church and a landmark of Museum Island. Climbing the dome rewards you with a panorama over Mitte and the Spree; inside, the Hohenzollern crypt and the great organ impress.",
      "The cathedral faces the Humboldt Forum, within walking distance of Museum Island, Unter den Linden and Alexanderplatz. S-Bahn (Hackescher Markt) and tram stop nearby.",
    ],
  },
  "kadewe": {
    de: [
      "Das KaDeWe am Wittenbergplatz ist das größte Kaufhaus Kontinentaleuropas und eine Institution der City West. Berühmt ist vor allem die Feinschmecker-Etage mit ihrem riesigen Lebensmittel- und Delikatessen-Angebot - ein Erlebnis auch ohne Einkauf.",
      "Das Haus liegt direkt am U-Bahnhof Wittenbergplatz (U1/U2/U3), wenige Minuten vom Ku'damm. Ideal für einen Shopping-Nachmittag oder eine Pause in der obersten Etage mit Blick über die City West.",
    ],
    en: [
      "KaDeWe on Wittenbergplatz is the largest department store in continental Europe and an institution of City West. Most famous is the gourmet floor with its huge food and delicatessen selection - an experience even without buying anything.",
      "The store sits right by Wittenbergplatz U-Bahn station (U1/U2/U3), minutes from the Ku'damm. Ideal for a shopping afternoon or a break on the top floor with views over City West.",
    ],
  },
  "muggelsee": {
    de: [
      "Der Müggelsee ist der größte See Berlins und das Naherholungsziel im Südosten der Stadt. Baden, Segeln, Stand-up-Paddling und Spaziergänge am Ufer gehören zum Programm; der Müggelturm bietet einen schönen Blick über See und Wälder.",
      "Der See liegt in Treptow-Köpenick, rund 40 Minuten mit S-Bahn (S3) und Bus vom Zentrum. Gut kombinierbar mit der historischen Köpenicker Altstadt und einer Schiffstour auf Spree und Dahme.",
    ],
    en: [
      "The Müggelsee is Berlin's largest lake and the local recreation spot in the city's south-east. Swimming, sailing, stand-up paddling and shoreline walks are all on offer; the Müggelturm gives a fine view over lake and forests.",
      "The lake lies in Treptow-Köpenick, around 40 minutes from the center by S-Bahn (S3) and bus. It combines well with Köpenick's historic old town and a boat tour on the Spree and Dahme.",
    ],
  },
  "wannsee": {
    de: [
      "Der Wannsee im grünen Südwesten ist Berlins beliebtestes Sommerziel am Wasser - vor allem das große Strandbad Wannsee zieht bei Sonne viele Berliner an. Rundherum laden Grunewald, Pfaueninsel und die Glienicker Brücke zu Spaziergängen und Ausflügen ein.",
      "Der Wannsee liegt in Steglitz-Zehlendorf und ist über die S-Bahn (S1/S7) gut angebunden; von hier ist auch Potsdam schnell erreicht. Ideal für einen entspannten Natur- und Badetag abseits der Innenstadt.",
    ],
    en: [
      "The Wannsee in the green south-west is Berlin's most popular summer spot by the water - the large Wannsee lido in particular draws many Berliners when the sun is out. Around it, the Grunewald, Peacock Island and the Glienicke Bridge invite walks and excursions.",
      "The Wannsee lies in Steglitz-Zehlendorf and is well served by the S-Bahn (S1/S7); from here Potsdam is quickly reached too. Ideal for a relaxed day of nature and bathing away from the center.",
    ],
  },
};
