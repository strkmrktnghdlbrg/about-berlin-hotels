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
      "The Brandenburg Gate is Berlin's central meeting point and the natural place to start a first walk through the city. From Pariser Platz, the square directly in front of it, you reach the Reichstag, the Holocaust Memorial and the boulevard Unter den Linden within a few minutes on foot. Not many European capitals put this many headline sights inside such a short stretch.",
      "The gate itself was finished in the 1790s as a city gate. After 1961 it stood inside the death strip between East and West Berlin, unreachable from either side, and in 1989 it became the backdrop for reunification. That is why Germans treat it as a national symbol rather than a photo stop, and why it shows up on the two-euro coin.",
      "Come early in the morning or after dark, when the gate is floodlit and the tour buses have gone. Midday in summer means crowds, costumed performers and very little room to stand back for a picture.",
      "Getting here is simple: Brandenburger Tor station sits directly underneath and serves both the U-Bahn, Berlin's subway, and the S-Bahn, the mostly above-ground commuter rail that covers the wider region. One ticket is valid on both, plus trams and buses. Around the square you will find embassies, the Hotel Adlon and a handful of cafés, and the district around it, Mitte, has the densest concentration of hotels in the city.",
    ],
  },
  "reichstag": {
    de: [
      "Der Reichstag ist Sitz des Deutschen Bundestags und durch die Norman-Foster-Glaskuppel zugleich ein Aussichtspunkt mit Rundblick über das Regierungsviertel. Der Besuch der Kuppel ist kostenlos, erfordert aber eine vorherige Anmeldung - am besten rechtzeitig vor der Reise einplanen.",
      "Rundherum liegen das Bundeskanzleramt, der Tiergarten und das Brandenburger Tor in Gehweite. Der nahe Hauptbahnhof und der S-Bahnhof Brandenburger Tor machen die Anreise unkompliziert.",
    ],
    en: [
      "The Reichstag is the seat of the Bundestag, the German federal parliament, which makes it Berlin's rough equivalent of the US Capitol. What most visitors come for is the glass dome that Norman Foster added during the 1990s rebuild: a spiral ramp winds up the inside, and from the top you look out over the government quarter and, through the glass floor, down into the plenary chamber.",
      "Visiting the dome is free, but you have to register online in advance and bring the same photo ID you registered with. Slots go fast in summer, so book this before you book anything else. The building itself dates from 1894, burned in 1933, sat as a shell through the division of the city, and only became the parliament again after reunification.",
      "The Reichstag anchors the government quarter, a cluster of modern federal buildings along a bend in the Spree river. The Bundeskanzleramt, the chancellor's office, is a short walk west, and the eastern edge of the Tiergarten park starts right across the street.",
      "For transit, Berlin Hauptbahnhof, the main train station, is roughly a 10-minute walk, and Brandenburger Tor station, served by both S-Bahn and U-Bahn, is closer still. Honestly, you will not need a train here: the gate, the memorial and Unter den Linden are all walkable from the front lawn.",
    ],
  },
  "museumsinsel": {
    de: [
      "Die Museumsinsel vereint fünf Weltklasse-Häuser auf engstem Raum und gehört zum UNESCO-Welterbe. Für einen Besuch lohnt es sich, vorab ein, zwei Museen auszuwählen - alles an einem Tag ist kaum zu schaffen. Zeit-Tickets helfen, Wartezeiten zu vermeiden.",
      "Die Insel liegt zwischen Lustgarten und Berliner Dom, fußläufig zu Unter den Linden und Hackescher Markt. S-Bahn (Hackescher Markt) und Tram bringen dich direkt hin.",
    ],
    en: [
      "Museum Island is a UNESCO World Heritage site and puts five separate museums on one island in the Spree river: the Pergamonmuseum, the Neues Museum, the Altes Museum, the Alte Nationalgalerie and the Bode-Museum. Between them they cover ancient Egypt, classical antiquity, Byzantine art and 19th-century European painting. The complex was laid out in the 1800s as a deliberate answer to the Louvre and the British Museum.",
      "Do not try to do all five in a day. Pick one or two, buy timed tickets online, and let the rest be a reason to come back. For a first visit the easiest choice is the Neues Museum, home of the Nefertiti bust, plus the Alte Nationalgalerie. Large parts of the Pergamonmuseum are closed for a long-running renovation, so check what is actually open before you plan around it.",
      "One practical note that catches Americans out: most German museums close one day a week, usually Monday, and several stay open late one evening. Check the day you plan to go rather than assuming.",
      "The island sits between the Lustgarten square and Berlin Cathedral, a few minutes on foot from Unter den Linden, the Humboldt Forum and the Hackescher Markt courtyards. The S-Bahn stops at Hackescher Markt and several tram lines run past the northern end, both about a five-minute walk from the entrances.",
    ],
  },
  "fernsehturm": {
    de: [
      "Mit 368 Metern ist der Fernsehturm das höchste Gebäude Deutschlands und bietet von der Aussichtsplattform und dem Drehrestaurant den weitesten Blick über Berlin. An klaren Tagen reicht die Sicht weit ins Umland - Tickets mit Zeitfenster sparen Wartezeit.",
      "Der Turm steht direkt am Alexanderplatz, wo alle U- und S-Bahn-Linien zusammenlaufen. Museumsinsel, Rotes Rathaus und Hackescher Markt sind von hier aus schnell zu Fuß erreicht.",
    ],
    en: [
      "At 1,207 feet (368 meters), the Fernsehturm, the TV Tower, is the tallest structure in Germany and the quickest way to make sense of how Berlin is put together. From the observation deck, and from the revolving restaurant one level above, you can see that the city has no single downtown: it is flat, wide and made of districts running off in every direction.",
      "The tower went up in the late 1960s as a prestige project of East Germany, which is why it stands in what used to be East Berlin. Locals nicknamed the cross-shaped reflection that appears on the sphere in sunlight the Pope's Revenge. On a clear day the view runs well past the city limits into the surrounding state of Brandenburg.",
      "Book a timed ticket if you can. Lines at the base build through the afternoon and the sunset slots sell out first. The elevator ride to the deck takes about 40 seconds.",
      "The tower rises straight out of Alexanderplatz, where U-Bahn, S-Bahn, tram and regional trains all converge, so it is one of the easiest points in Berlin to reach. Museum Island, the Rotes Rathaus, the red-brick city hall that gives Berlin's government its nickname, and Hackescher Markt are each a 10- to 15-minute walk away.",
    ],
  },
  "checkpoint-charlie": {
    de: [
      "Checkpoint Charlie war der bekannteste Grenzübergang des Kalten Krieges und ist heute eine Open-Air-Ausstellung mitten in der Stadt. Wer die Geschichte vertiefen will, findet das Mauermuseum direkt nebenan und das Mauer-Dokumentationszentrum in der Umgebung.",
      "Der Ort liegt zentral in Mitte, nahe der Friedrichstraße; die gleichnamigen U-Bahnhöfe (U6) sind wenige Schritte entfernt. Gut kombinierbar mit Gendarmenmarkt und Unter den Linden.",
    ],
    en: [
      "Checkpoint Charlie was the crossing point between the American and Soviet sectors of divided Berlin, and the one that foreign visitors, diplomats and Allied personnel were required to use. In October 1961, American and Soviet tanks stood muzzle to muzzle here for several days, the closest the Cold War came to shooting in Berlin. The name comes from the NATO phonetic alphabet: it was simply the third Allied checkpoint, after Alpha and Bravo.",
      "Be clear about what you are looking at today. The guard house is a replica, the surroundings are commercial, and the men in uniform posing for photos have nothing to do with the historical site. The substance is in the exhibits: the Mauermuseum next door tells the escape stories in detail, and the open-air panels along the sidewalk lay out the timeline for free.",
      "If you want the real thing rather than the replica, ride a few stops north to the Berlin Wall Memorial on Bernauer Straße, where an original section of the border strip, watchtower and all, has been preserved with the death strip intact. Many visitors do both in one afternoon.",
      "The site is central in Mitte, on Friedrichstraße at the corner of Zimmerstraße. Kochstraße/Checkpoint Charlie station on the U6 subway line is a few steps away, and Gendarmenmarkt and Unter den Linden are both about a 10-minute walk north.",
    ],
  },
  "east-side-gallery": {
    de: [
      "Die East Side Gallery ist mit rund 1,3 Kilometern das längste erhaltene Stück der Berliner Mauer und zugleich eine durchgehende Open-Air-Galerie. Die Bilder entlang der Spree erzählen die Wendezeit - ein Spaziergang von der Oberbaumbrücke bis zum Ostbahnhof lohnt sich.",
      "Die Galerie liegt in Friedrichshain, direkt am Spreeufer und nahe der Mercedes-Benz Arena. Warschauer Straße und Ostbahnhof (S-Bahn) sind wenige Minuten entfernt.",
    ],
    en: [
      "The East Side Gallery is the longest surviving piece of the Berlin Wall, about 0.8 miles (1.3 km) of it, still standing along the Spree river in Friedrichshain. This is not a reconstruction or a memorial fence: it is the actual inner wall that ran along the eastern bank of the river. In 1990, months after the border opened, artists from more than 20 countries painted 105 murals on the eastern face, the side ordinary East Germans had never been allowed to approach.",
      "The best-known images are all here, including Dmitri Vrubel's painting of the East German and Soviet leaders kissing and Birgit Kinder's Trabant car bursting through the concrete. Several murals have been repainted by their original artists after decades of weather, graffiti and souvenir chipping.",
      "Walk it in one direction instead of doubling back. The stretch runs between the Oberbaumbrücke, the double-decker brick bridge that was itself a border crossing, and Ostbahnhof station. Mornings are the calmest; by afternoon the sidewalk fills up and it becomes hard to see the panels without other people in front of them.",
      "The gallery sits next to the Mercedes-Benz Arena and a short walk from Warschauer Straße and Ostbahnhof, both on the S-Bahn. The neighborhood around it, especially the former RAW railway yards, is the center of Berlin's club scene, so the area stays busy long after dark and the hotels here skew young and design-led.",
    ],
  },
  "mauerpark": {
    de: [
      "Der Mauerpark ist das Wochenend-Wohnzimmer von Prenzlauer Berg: Sonntags treffen sich hier Flohmarkt, Straßenmusik und das legendäre Bearpit-Karaoke. Auf der großen Wiese wird gepicknickt, gegrillt und gespielt - sehr berlinerisch und kostenlos.",
      "Der Park liegt an der Grenze von Prenzlauer Berg und Wedding; Tram (M10) und U-Bahn (U8 Bernauer Straße) bringen dich hin. Gut kombinierbar mit der Gedenkstätte Berliner Mauer an der Bernauer Straße.",
    ],
    en: [
      "Mauerpark means wall park, and the name is literal: the ground under it was the no-man's-land the Berlin Wall ran through until 1989. A painted section of the wall still stands along the western edge, now one of the few surfaces in the city where graffiti is legal, so it changes week to week.",
      "On Sundays the park turns into the best free show in Berlin. A large flea market takes over one end, buskers spread across the lawn, and in the afternoon the Bearpit Karaoke session fills the stone amphitheater with a crowd in the thousands. Anyone can sign up to sing, and a good share of the audience is local rather than visiting.",
      "The rest of the week it is an ordinary neighborhood park: barbecues, basketball, dogs and a slope that catches the evening sun. There are only a handful of food stands, so bring what you want to eat. Grilling is allowed only in the marked areas, a rule Berlin actually enforces.",
      "The park straddles the border between Prenzlauer Berg and Wedding. Tram line M10 stops at the edge and Bernauer Straße station on the U8 subway line is a few minutes away, which also puts you at the Berlin Wall Memorial, the single best place in the city to understand how the border physically worked.",
    ],
  },
  "tiergarten": {
    de: [
      "Der Große Tiergarten ist die grüne Lunge im Herzen Berlins - ein weitläufiger Park mit Seen, Wiesen und schattigen Alleen, ideal für eine Pause zwischen zwei Sightseeing-Etappen. Von der Siegessäule in der Mitte hat man einen schönen Rundblick.",
      "Der Park erstreckt sich zwischen Brandenburger Tor und Bahnhof Zoo; rundum liegen Reichstag, Schloss Bellevue und das Kulturforum. Mehrere S- und U-Bahnhöfe säumen die Ränder.",
    ],
    en: [
      "The Großer Tiergarten is Berlin's answer to Central Park: 520 acres (210 hectares) of woodland, meadows and small lakes right in the middle of the city. It began as a royal hunting ground, which is why the paths radiate out from a few grand intersections instead of following a grid, and it was replanted almost from scratch after Berliners cut the trees down for firewood in the winters right after World War II.",
      "The Siegessäule, the Victory Column, stands at the center on a traffic circle, and you can climb the stairs inside for a view straight down four avenues at once. Elsewhere in the park are the Englischer Garten, a cluster of memorials, and the Café am Neuen See, a lakeside beer garden with rowboats for rent that is one of the most pleasant hours you can spend in Berlin on a warm afternoon.",
      "The Tiergarten is the connective tissue of the center. It runs from the Brandenburg Gate in the east to Zoologischer Garten station in the west, with the Reichstag, Schloss Bellevue, the German president's residence, and the Kulturforum museum complex around its edges. Walking the full length takes roughly 50 minutes at an easy pace.",
      "S-Bahn and U-Bahn stations line every side, so you can cut in or out wherever it suits your route. On summer weekends the lawns fill with families grilling, and the park is a genuinely useful way to break up a heavy sightseeing day rather than a destination you need to schedule.",
    ],
  },
  "kurfuerstendamm": {
    de: [
      "Der Kurfürstendamm ist Berlins traditionsreiche Shopping- und Flaniermeile in der City West. Vom KaDeWe über Designerläden bis zu Cafés und Kinos reiht sich hier auf rund dreieinhalb Kilometern alles aneinander - ein Bummel führt fast von selbst zur Gedächtniskirche.",
      "Mehrere U-Bahnhöfe und der Bahnhof Zoo erschließen den Ku'damm; Hotels aller Klassen liegen direkt an oder nahe der Straße. Ideal für einen entspannten Nachmittag im Westen.",
    ],
    en: [
      "The Kurfürstendamm, Ku'damm for short, is the main boulevard of what West Berliners simply call City West. Through the decades of division this was the commercial heart of the western half of the city, the shopping street that West Berlin built to prove a point, and it kept the role after 1989 as a calmer, more established counterweight to Mitte.",
      "It runs about 2.2 miles (3.5 kilometers) and changes character along the way: international chains and department stores at the eastern end, designer boutiques, galleries and quieter cafés as you head west. The side streets, Fasanenstraße in particular, hold most of the small shops worth stopping for.",
      "At the eastern end stands the Kaiser-Wilhelm-Gedächtniskirche, the Kaiser Wilhelm Memorial Church, whose bombed-out tower was deliberately left standing as a ruin after World War II and is still known locally as the hollow tooth. The KaDeWe department store is a couple of blocks further on, along Tauentzienstraße, which is the continuation of the same shopping axis.",
      "Several U-Bahn stations serve the boulevard, and Zoologischer Garten handles S-Bahn and regional trains as well. Hotels at every price level sit on or just off the street, which makes City West a practical base if you want a residential neighborhood at night and a direct 15-minute ride into Mitte during the day.",
    ],
  },
  "gendarmenmarkt": {
    de: [
      "Der Gendarmenmarkt gilt vielen als schönster Platz Berlins: Konzerthaus, Deutscher und Französischer Dom bilden ein harmonisches Ensemble. Im Advent verwandelt er sich in einen der stimmungsvollsten Weihnachtsmärkte der Stadt.",
      "Der Platz liegt zentral in Mitte, fußläufig zu Friedrichstraße, Unter den Linden und Checkpoint Charlie. Die U-Bahnhöfe Französische Straße, Hausvogteiplatz und Stadtmitte (U2/U6) sind nah.",
    ],
    en: [
      "Plenty of Berliners will tell you Gendarmenmarkt is the most beautiful square in the city, and it is hard to argue. Three buildings frame it: the Konzerthaus concert hall in the middle, with the Deutscher Dom and the Französischer Dom facing each other across the open space. The proportions are the point, and the square works best simply as somewhere to sit for half an hour.",
      "Despite the name, the two Dom buildings are not cathedrals. The French one was built for Berlin's Huguenot community, Protestant refugees from France who arrived in the late 1600s and made up a sizeable share of the city's population at the time. The matching domed towers were added later, purely so the square would be symmetrical.",
      "There are classical concerts most evenings at the Konzerthaus, and restaurants and cafés on the surrounding streets. In December the square traditionally hosts one of the most atmospheric Christmas markets in Berlin, with roasted almonds, mulled wine and a lot of people packed between the two domes.",
      "Gendarmenmarkt sits in central Mitte, a short walk from Friedrichstraße, Unter den Linden and Checkpoint Charlie. The nearest subway stations are Französische Straße, Hausvogteiplatz and Stadtmitte on the U2 and U6 lines. It is one of the easiest places in the center to fold into a walking day without adding a train ride.",
    ],
  },
  "potsdamer-platz": {
    de: [
      "Der Potsdamer Platz steht für das neue Berlin: nach dem Mauerfall komplett neu bebaut, vereint er Kino, Theater, Shopping und moderne Architektur an einem Ort. Reste der Berliner Mauer und der rote Info-Container erinnern an die geteilte Vergangenheit.",
      "Der Platz ist über den gleichnamigen Regional- und S-Bahnhof bestens angebunden; Tiergarten, Kulturforum und das Mandala-Hotel liegen direkt nebenan. Ideal bei Regen dank überdachter Passagen.",
    ],
    en: [
      "Before World War II, Potsdamer Platz was one of the busiest intersections in Europe, the place where Berlin installed what is often called the continent's first traffic light. The war flattened it, and the Berlin Wall then ran straight through the empty space for 28 years. Almost everything you see today was built in the 1990s on what was, for a while, the largest construction site on the continent.",
      "That history explains why the square looks the way it does: corporate, glassy and unapologetically new. The Sony Center sits under a tented roof, with towers by Renzo Piano and Helmut Jahn around it, plus cinemas, a shopping arcade and the theater that hosts the Berlinale, Berlin's international film festival, every February.",
      "A few original segments of the Wall stand on the square itself, and the line of the border is marked in the pavement by a double row of cobblestones that runs for miles across the inner city. Following that line for a few blocks gives you a better sense of the division than any single monument does.",
      "The station of the same name serves S-Bahn, U-Bahn and regional trains, making this one of the simplest points in Berlin to reach. The Tiergarten starts across the street, and the Kulturforum, with the Gemäldegalerie and the Berliner Philharmonie, is next door. The covered arcades also make Potsdamer Platz a dependable fallback on a rainy afternoon.",
    ],
  },
  "holocaust-mahnmal": {
    de: [
      "Das Denkmal für die ermordeten Juden Europas besteht aus 2.711 Stelen, durch die man hindurchgeht - ein bewusst stiller, eindrücklicher Ort. Im unterirdischen Ort der Information werden die Opfer und ihre Geschichten dokumentiert; der Besuch ist kostenlos.",
      "Das Mahnmal liegt direkt südlich des Brandenburger Tors, fußläufig zum Tiergarten und Potsdamer Platz. Ein respektvoller Umgang ist selbstverständlich - es ist eine Gedenkstätte, kein Fotomotiv.",
    ],
    en: [
      "The Memorial to the Murdered Jews of Europe, designed by the American architect Peter Eisenman and opened in 2005, covers a full city block with 2,711 concrete stelae of varying height. There is no set route and no explanatory sign on the field itself. You walk in, the ground drops away, the blocks rise over your head, and the traffic noise falls off. What it means is deliberately left to you.",
      "Underneath the field is the Ort der Information, the Information Center, which supplies what the stelae withhold: family histories, last letters, and a room where the names of the victims are read aloud. Admission is free. Allow an hour, and expect it to be quiet.",
      "This is a place of remembrance, not a photo backdrop. The foundation that runs the site asks visitors not to climb, jump between or picnic on the stelae, and staff will say so if you do. Berlin has a long-running debate about how people behave here; the simple version is to treat it the way you would a cemetery.",
      "The memorial lies just south of the Brandenburg Gate, between the Tiergarten and Potsdamer Platz, so it sits naturally in the standard first-day walk through Mitte. Brandenburger Tor and Potsdamer Platz stations are both within about five minutes on foot.",
    ],
  },
  "alexanderplatz": {
    de: [
      "Der Alexanderplatz ist Berlins großer Verkehrs- und Einkaufsknoten im Osten der Mitte - geprägt vom Fernsehturm, der Weltzeituhr und weiten Plätzen. Hier laufen U-Bahn, S-Bahn, Tram und Regionalzüge zusammen, was den Alex zum praktischen Ausgangspunkt macht.",
      "Rund um den Platz gibt es Kaufhäuser und Shopping-Center; Museumsinsel, Rotes Rathaus und Hackescher Markt sind fußläufig. Ideal als zentrale Basis für Sightseeing.",
    ],
    en: [
      "Alexanderplatz, the Alex to locals, is not pretty and is not trying to be. It is the transit and shopping center of eastern Berlin, a wide socialist-era plaza that East Germany rebuilt in the 1960s and 70s around the base of the TV Tower. If your mental image of Berlin is the historic one, this square will surprise you; it is worth seeing precisely because it is the other Berlin.",
      "Two things on the square are worth a look in their own right. The Weltzeituhr, the World Clock, is a rotating aluminum column showing the time in cities around the globe and the classic Berlin meeting spot, and the Brunnen der Völkerfreundschaft fountain stands next to it. Both date from the late 1960s and both are still in daily use as places to wait for someone.",
      "For a visitor the real value here is connectivity. U-Bahn, S-Bahn, tram and regional trains all meet at Alexanderplatz, which means a hotel in this corner of Mitte puts nearly anything in the city within one ride. Department stores and a shopping mall sit directly on the square, and the airport express trains run from here as well.",
      "On foot you are 10 to 15 minutes from Museum Island, the Rotes Rathaus and the courtyards at Hackescher Markt. The Nikolaiviertel, the small reconstructed quarter around Berlin's oldest church, is closer still, and it is the fastest way to get from concrete plaza to cobblestones in this city.",
    ],
  },
  "schloss-charlottenburg": {
    de: [
      "Schloss Charlottenburg ist die größte Schlossanlage Berlins und ein Stück preußische Geschichte mitten in der City West. Prunkräume, die Orangerie und vor allem der weitläufige Barock- und Landschaftsgarten lohnen einen halben Tag - der Park ist frei zugänglich.",
      "Das Schloss liegt im Westen Charlottenburgs, erreichbar über U-Bahn und Bus; Ku'damm und KaDeWe sind ein kurzes Stück entfernt. Schön für einen ruhigeren Tag abseits der Mitte-Hektik.",
    ],
    en: [
      "Schloss Charlottenburg, Charlottenburg Palace, is the largest surviving royal palace in Berlin and the best place in the city to see how the Prussian court actually lived. It was begun in the 1690s as a summer residence for Sophie Charlotte, wife of the first king in Prussia, and kept expanding for the next hundred years as each ruler added a wing.",
      "Inside, the highlights are the baroque state apartments in the old palace and the rococo rooms in the New Wing, including the Golden Gallery and the porcelain cabinet lined floor to ceiling with Chinese and Japanese pieces. The palace was badly damaged in World War II, so a lot of what you see is careful reconstruction, a point the audio guide makes openly.",
      "The garden behind the palace is reason enough to come even if you skip the interiors. It was laid out as a formal French garden, later reworked in the English landscape style, and it is free to enter. The Belvedere teahouse and the mausoleum of Queen Luise stand among the trees, and in summer locals treat the lawns as a park rather than a monument.",
      "The palace sits in the western part of Charlottenburg, reached by U-Bahn and bus, with the Ku'damm and KaDeWe a short ride away. Combined with the museum buildings directly across the street it makes a comfortable half day away from the crowds in Mitte, and it works well on a day when the weather is uncertain.",
    ],
  },
  "tempelhofer-feld": {
    de: [
      "Das Tempelhofer Feld ist der ehemalige Flughafen Tempelhof, heute eine riesige öffentliche Freifläche. Auf den alten Rollbahnen wird geradelt, geskatet und Drachen steigen gelassen; es gibt Gemeinschaftsgärten und viel Platz zum Durchatmen - eine der ungewöhnlichsten Berlin-Erfahrungen, und kostenlos.",
      "Das Feld liegt zwischen Neukölln, Kreuzberg und Tempelhof; mehrere U- und S-Bahnhöfe säumen die Ränder. Am schönsten zum Sonnenuntergang über der weiten Fläche.",
    ],
    en: [
      "Tempelhofer Feld is the former Tempelhof airport, shut down in 2008 and handed to the public as a park. Nothing was landscaped: the two runways, the taxiways and the painted markings are all still there. In a 2014 referendum Berliners voted to keep it that way and block construction on the field, which tells you something about how the city feels about open space.",
      "The scale is what surprises people. At roughly 1.5 square miles (about 4 km²) it is larger than Central Park, and from the middle you can see a flat horizon in every direction, something that almost never happens inside a European city. People cycle, skate, run the runways, fly kites and land-sail across the old aprons. There are community gardens along one edge and a designated barbecue area.",
      "This was the airport of the Berlin Airlift. In 1948 and 1949, after the Soviet Union cut off road and rail access to West Berlin, American and British aircraft landed here around the clock for nearly a year to keep the western half of the city supplied. The enormous curved terminal building along the western edge dates from the 1930s and can be seen on a guided tour.",
      "The field has several entrances, each next to a station: Tempelhof and Paradestraße on the U6, Boddinstraße, Leinestraße and Hermannstraße on the U8, plus the S-Bahn ring at Tempelhof and Hermannstraße. It borders Neukölln, Kreuzberg and Tempelhof, so it adds easily to a day in any of those neighborhoods. Sunset over the runways is the standard local recommendation, and admission is free.",
    ],
  },
  "olympiastadion": {
    de: [
      "Das Olympiastadion von 1936 ist eine eindrucksvolle Sportstätte und heute Heimat von Hertha BSC sowie Schauplatz von Konzerten und dem DFB-Pokalfinale. Außerhalb von Veranstaltungen sind Besichtigungen und Führungen möglich, die Architektur und Geschichte verbinden.",
      "Das Stadion liegt im Westen Charlottenburgs und ist über die U2 und S-Bahn (Olympiastadion) direkt angebunden. Gut kombinierbar mit einem Ausflug ins grüne West-Berlin.",
    ],
    en: [
      "The Olympiastadion was built for the 1936 Summer Olympics, the games the Nazi regime staged as a propaganda showcase and the games where the American sprinter Jesse Owens won four gold medals. The stadium came through the war largely intact and was thoroughly modernized before the 2006 soccer World Cup, but the monumental stone exterior is original.",
      "That combination makes a visit unusual. It is a working modern arena wrapped in a 1930s structure that the city chose to keep and explain rather than demolish. Guided tours cover both sides of that, including the locker rooms, the marathon gate and the bell tower with its view over the grounds and the Grunewald forest beyond.",
      "It is the home ground of the soccer club Hertha BSC, hosts the German Cup final every year and doubles as a stadium concert venue. On match days the whole area is packed and the trains run full; outside events it is quiet and you can walk the grounds at your own pace.",
      "The stadium has its own stations on the U2 subway line and on the S-Bahn, both called Olympiastadion, roughly 25 minutes from the center. It sits in far western Charlottenburg near the Grunewald and the Havel river, so it pairs naturally with a day out in green West Berlin rather than with the sights in Mitte.",
    ],
  },
  "berliner-dom": {
    de: [
      "Der Berliner Dom am Lustgarten ist die größte Kirche der Stadt und ein Wahrzeichen der Museumsinsel. Wer die Kuppel erklimmt, wird mit einem Rundblick über Mitte und die Spree belohnt; im Inneren beeindrucken die Hohenzollerngruft und die große Orgel.",
      "Der Dom liegt direkt gegenüber dem Humboldt Forum, fußläufig zu Museumsinsel, Unter den Linden und Alexanderplatz. S-Bahn (Hackescher Markt) und Tram halten in der Nähe.",
    ],
    en: [
      "The Berliner Dom, Berlin Cathedral, is the largest church in the city, although the name oversells it: it has never been the seat of a bishop. It was built between 1894 and 1905 as the court church of the Hohenzollerns, the dynasty that ruled Prussia and then the German Empire, and the sheer bulk of it was meant to make exactly that point.",
      "Inside, the Sauer organ with its more than 7,000 pipes fills the end of the nave, and the Hohenzollern crypt below holds around 90 sarcophagi of the family, one of the most important dynastic burial collections in Europe. The building was gutted by bombing in 1944 and took decades to restore, with the last work finishing well after reunification.",
      "The climb to the dome walkway runs about 270 steps and gives you the best close-range view in Berlin: Museum Island directly below, the Spree, the Humboldt Forum and the TV Tower lined up in one direction. There is an admission charge for the interior, and services are open to anyone.",
      "The cathedral stands on the Lustgarten, a large open lawn that doubles as a place for people to sit in summer, facing the Humboldt Forum, the rebuilt Berlin Palace that now houses museums. Museum Island, Unter den Linden and Alexanderplatz are all within a 10-minute walk, and the S-Bahn at Hackescher Markt plus several tram lines stop nearby.",
    ],
  },
  "kadewe": {
    de: [
      "Das KaDeWe am Wittenbergplatz ist das größte Kaufhaus Kontinentaleuropas und eine Institution der City West. Berühmt ist vor allem die Feinschmecker-Etage mit ihrem riesigen Lebensmittel- und Delikatessen-Angebot - ein Erlebnis auch ohne Einkauf.",
      "Das Haus liegt direkt am U-Bahnhof Wittenbergplatz (U1/U2/U3), wenige Minuten vom Ku'damm. Ideal für einen Shopping-Nachmittag oder eine Pause in der obersten Etage mit Blick über die City West.",
    ],
    en: [
      "KaDeWe is short for Kaufhaus des Westens, department store of the West. It opened in 1907, and during the division of the city it became the showcase store of the western half, the place East Berliners headed for first when the Wall opened in November 1989. It is still the largest department store in continental Europe.",
      "The sixth floor is the reason to come even if you buy nothing at all. The gourmet floor is built around counters rather than aisles: oysters, charcuterie, cheese, a sushi bar, a champagne bar, and stands where you eat standing up next to whoever else stopped in. It is a food hall on a scale most American visitors will not have seen at home.",
      "Above it, a glass-roofed top floor looks out over City West and works as a break in a shopping afternoon. The building has been renovating floor by floor for several years, so the exact layout shifts, but the food hall stays put.",
      "The store sits directly at Wittenbergplatz station on the U1, U2 and U3 subway lines, a few minutes' walk from the Kurfürstendamm and the Memorial Church. One thing to plan around: German stores, KaDeWe included, are closed on Sundays. That is a national rule, not a decision by the shop, and it catches a lot of visitors out on a weekend trip.",
    ],
  },
  "muggelsee": {
    de: [
      "Der Müggelsee ist der größte See Berlins und das Naherholungsziel im Südosten der Stadt. Baden, Segeln, Stand-up-Paddling und Spaziergänge am Ufer gehören zum Programm; der Müggelturm bietet einen schönen Blick über See und Wälder.",
      "Der See liegt in Treptow-Köpenick, rund 40 Minuten mit S-Bahn (S3) und Bus vom Zentrum. Gut kombinierbar mit der historischen Köpenicker Altstadt und einer Schiffstour auf Spree und Dahme.",
    ],
    en: [
      "The Müggelsee is the largest lake inside Berlin's city limits, roughly 3 square miles (about 7.4 km²) of open water in the far southeast. This is not a pond in a park. It is a proper lake with sailboats, passenger ferries, forest along the southern shore and public swimming beaches, and standing on the shore you would never guess you are still inside a capital city.",
      "In summer Berliners come out here to swim, sail and paddle. There are Strandbäder, which is the German term for a supervised lake beach with changing rooms and a small entrance fee, along with free stretches of shoreline where people simply walk in. Shaded trails run around much of the water for anyone who would rather hike than swim.",
      "On the hill above the southern shore stands the Müggelturm, a lookout tower from the early 1960s. The climb is short, and the view takes in the lake, the wooded Müggelberge hills and, on a clear day, the TV Tower back in the center of the city.",
      "Getting here takes about 40 minutes from the center, S-Bahn line S3 plus a tram or bus. Combine it with the old town of Köpenick, a small historic center with a baroque palace on its own island, or with one of the boat tours that run on the Spree and Dahme rivers. It is a full day trip, not a stop you squeeze between two museums.",
    ],
  },
  "wannsee": {
    de: [
      "Der Wannsee im grünen Südwesten ist Berlins beliebtestes Sommerziel am Wasser - vor allem das große Strandbad Wannsee zieht bei Sonne viele Berliner an. Rundherum laden Grunewald, Pfaueninsel und die Glienicker Brücke zu Spaziergängen und Ausflügen ein.",
      "Der Wannsee liegt in Steglitz-Zehlendorf und ist über die S-Bahn (S1/S7) gut angebunden; von hier ist auch Potsdam schnell erreicht. Ideal für einen entspannten Natur- und Badetag abseits der Innenstadt.",
    ],
    en: [
      "Wannsee is Berlin's summer address, a broad bay of the Havel river in the leafy southwest of the city. The Strandbad Wannsee, a lakeside beach with its Bauhaus-era buildings from around 1930, has close to a mile of sand and counts as one of the largest inland beaches in Europe. On a hot weekend a noticeable share of Berlin is out there.",
      "The area around it is green in every direction: the Grunewald forest to the north, the Pfaueninsel, Peacock Island, with its folly of a castle and free-roaming peacocks, and the Glienicker Brücke, the Glienicke Bridge, where the Cold War superpowers exchanged captured spies. The bridge is also the boundary with Potsdam, which is a different federal state entirely.",
      "Ferries and tour boats leave from the Wannsee dock, including the route across the water to Potsdam and its Prussian palaces. That makes an easy half day from here rather than a trip back through the center first. Rowboats and stand-up paddleboards can be rented along the shore.",
      "Wannsee station is on the S1 and S7 lines, roughly 30 to 40 minutes from Mitte, with buses onward to the beach and the island. The surrounding district, Steglitz-Zehlendorf, is quiet and residential, and it is worth an overnight only if a genuinely calm base matters more to you than a short walk to the sights.",
    ],
  },
};
