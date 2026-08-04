/**
 * Redaktionelle Vertiefung pro Bezirk (ergänzend zu `intro`/`vibe` in districts.ts).
 * ---------------------------------------------------------------------------------
 * Zweck: Lage, Anbindung und Preisniveau aus Gästesicht einordnen — der Teil,
 * den Kartenwidget und Hotelraster nicht abdecken.
 *
 * Alle Angaben beruhen auf allgemein bekannten, überprüfbaren Fakten
 * (ÖPNV-Linien, Wahrzeichen, Lage). Keine erfundenen Preise, keine erfundenen
 * Betriebe, keine Bewertungen.
 */
export type DistrictEditorial = Record<string, { de: string[]; en: string[] }>;

export const districtEditorial: DistrictEditorial = {
  mitte: {
    de: [
      "Mitte ist der Bezirk mit der höchsten Hoteldichte Berlins - von der Fünf-Sterne-Adresse am Pariser Platz bis zum Kettenhaus am Alexanderplatz liegt alles in Gehweite. Wer zum ersten Mal in Berlin ist, spart hier vor allem Zeit: Brandenburger Tor, Museumsinsel, Unter den Linden und Gendarmenmarkt lassen sich an einem Tag zu Fuß abklappern.",
      "Die Anbindung ist entsprechend gut: Hauptbahnhof, Friedrichstraße und Alexanderplatz bündeln S-Bahn, U-Bahn, Regional- und Fernverkehr. Der Preis dafür ist der Preis - während Messen, Berlinale oder Staatsbesuchen ziehen die Raten in Mitte am stärksten an. Wer flexibel ist, bucht Sonntag bis Dienstag oder weicht auf die angrenzenden Bezirke aus.",
    ],
    en: [
      "Mitte has the highest hotel density in Berlin - from the five-star address on Pariser Platz to the chain house at Alexanderplatz, everything is within walking distance. First-time visitors mainly save time here: Brandenburg Gate, Museum Island, Unter den Linden and Gendarmenmarkt can all be covered on foot in a day.",
      "Transport is just as convenient: Hauptbahnhof, Friedrichstraße and Alexanderplatz bundle S-Bahn, U-Bahn, regional and long-distance rail. The trade-off is the price - during trade fairs, the Berlinale or state visits, rates rise fastest in Mitte. If your dates are flexible, book Sunday to Tuesday or move one district out.",
    ],
  },
  "friedrichshain-kreuzberg": {
    de: [
      "Friedrichshain-Kreuzberg ist der Bezirk für Gäste, die Berlin nicht museal, sondern laut erleben wollen. Zwischen East Side Gallery, RAW-Gelände, Markthalle Neun und dem Landwehrkanal liegen Boutiquehotels, Designhostels und umgebaute Fabriketagen statt großer Kettenhäuser - meist mit deutlich mehr Charakter pro Euro als in Mitte.",
      "Warschauer Straße, Ostbahnhof und die U1 verbinden den Bezirk in wenigen Minuten mit dem Zentrum. Wer empfindlich schläft, sollte bei der Zimmerwahl auf die Lage achten: rund um Simon-Dach-Straße, Revaler Straße und Kottbusser Tor ist bis in den Morgen Betrieb. Ein Hinterhof- oder Kanalzimmer löst das Problem meist zuverlässig.",
    ],
    en: [
      "Friedrichshain-Kreuzberg is for guests who want Berlin loud rather than curated. Between the East Side Gallery, the RAW grounds, Markthalle Neun and the Landwehrkanal you will find boutique hotels, design hostels and converted factory floors instead of big chains - usually with far more character per euro than Mitte.",
      "Warschauer Straße, Ostbahnhof and the U1 connect the district to the centre in minutes. Light sleepers should watch the exact address: around Simon-Dach-Straße, Revaler Straße and Kottbusser Tor there is activity until morning. A courtyard or canal-facing room reliably solves it.",
    ],
  },
  "charlottenburg-wilmersdorf": {
    de: [
      "Charlottenburg-Wilmersdorf ist das bürgerliche West-Berlin: Kurfürstendamm, KaDeWe, Schloss Charlottenburg und breite Altbaustraßen. Die Hotellandschaft ist entsprechend etabliert - klassische Grandhotels am Ku'damm, solide Vier-Sterne-Häuser in den Seitenstraßen und internationale Ketten rund um den Bahnhof Zoologischer Garten.",
      "Für Messegäste ist der Bezirk erste Wahl: Das ExpoCenter City liegt direkt hier, entsprechend teuer wird es während ITB, IFA oder Fruit Logistica. Außerhalb der Messezeiten ist Charlottenburg oft die ruhigere und günstigere Alternative zu Mitte, mit S-Bahn- und U-Bahn-Anschluss ins Zentrum in rund 15 Minuten.",
    ],
    en: [
      "Charlottenburg-Wilmersdorf is bourgeois West Berlin: Kurfürstendamm, KaDeWe, Charlottenburg Palace and wide period-building avenues. The hotel scene matches - classic grand hotels on the Ku'damm, solid four-star houses in the side streets and international chains around Zoologischer Garten station.",
      "For trade-fair visitors the district is first choice: the ExpoCenter City sits right here, which is exactly why rates spike during ITB, IFA or Fruit Logistica. Outside fair weeks Charlottenburg is often the quieter, cheaper alternative to Mitte, with S-Bahn and U-Bahn reaching the centre in around 15 minutes.",
    ],
  },
  pankow: {
    de: [
      "Der Bezirk Pankow umfasst mit Prenzlauer Berg eines der am besten erhaltenen Gründerzeitviertel Europas. Rund um Kollwitzplatz, Kulturbrauerei und Mauerpark dominieren Cafés, Spielplätze und Wochenmärkte - der Bezirk gilt nicht ohne Grund als der familientauglichste im Berliner Innenstadtring.",
      "Große Hotelkomplexe sucht man hier weitgehend vergeblich; das Angebot besteht überwiegend aus kleinen Häusern, Apartments und Aparthotels - praktisch für längere Aufenthalte mit Küche. Die U2 (Eberswalder Straße, Senefelderplatz) und die Tram M1 bringen Gäste in rund zehn Minuten nach Mitte.",
    ],
    en: [
      "The Pankow district contains Prenzlauer Berg, one of Europe's best-preserved late-19th-century quarters. Around Kollwitzplatz, Kulturbrauerei and Mauerpark it is all cafés, playgrounds and weekly markets - there is a reason it counts as the most family-friendly area inside Berlin's inner ring.",
      "Large hotel complexes are rare here; the supply is mostly small houses, apartments and aparthotels - handy for longer stays with a kitchen. The U2 (Eberswalder Straße, Senefelderplatz) and the M1 tram reach Mitte in about ten minutes.",
    ],
  },
  neukoelln: {
    de: [
      "Neukölln hat sich vom Arbeiterbezirk zum vielleicht internationalsten Teil Berlins entwickelt. Zwischen Sonnenallee, Weserstraße und dem Tempelhofer Feld liegen Bars, Spätis, arabische Bäckereien und die Rooftop-Bar Klunkerkranich - Nachtleben, das ohne Taxi funktioniert.",
      "Klassische Hotels sind hier deutlich dünner gesät als in Mitte, dafür fällt das Preisniveau spürbar niedriger aus. Mit U7 und U8 ist die Innenstadt in gut 15 Minuten erreichbar. Wer Ruhe sucht, sollte den Norden rund um den Hermannplatz meiden und eher Richtung Rixdorf oder Britz buchen.",
    ],
    en: [
      "Neukölln has gone from working-class district to arguably the most international part of Berlin. Between Sonnenallee, Weserstraße and Tempelhofer Feld sit bars, corner shops, Arabic bakeries and the Klunkerkranich rooftop bar - nightlife that works without a taxi.",
      "Conventional hotels are far thinner on the ground than in Mitte, but the price level is noticeably lower. The U7 and U8 reach the centre in a good 15 minutes. If you want quiet, avoid the north around Hermannplatz and book towards Rixdorf or Britz instead.",
    ],
  },
  "tempelhof-schoeneberg": {
    de: [
      "Tempelhof-Schöneberg verbindet zwei sehr unterschiedliche Welten: das bürgerliche Schöneberg rund um Winterfeldtplatz und Nollendorfplatz - seit den 1920ern Zentrum der queeren Szene Berlins - und den weiten, ehemaligen Flughafen Tempelhof, dessen Rollfeld heute als Park für Skater, Radfahrer und Drachen genutzt wird.",
      "Das Hotelangebot ist solide Mittelklasse und kostet fast immer weniger als in Mitte, obwohl die U-Bahn-Linien U1, U2 und U7 das Zentrum in zehn bis fünfzehn Minuten anbinden. Für Messegäste ist die U7 ohne Umsteigen bis zur Messe ein Argument.",
    ],
    en: [
      "Tempelhof-Schöneberg joins two very different worlds: bourgeois Schöneberg around Winterfeldtplatz and Nollendorfplatz - the centre of Berlin's queer scene since the 1920s - and the vast former Tempelhof airport, whose runways now serve as a park for skaters, cyclists and kite flyers.",
      "The hotel supply is solid mid-range and almost always costs less than Mitte, even though the U1, U2 and U7 reach the centre in ten to fifteen minutes. For trade-fair guests, the U7 running to the Messe without a change is a real argument.",
    ],
  },
  "steglitz-zehlendorf": {
    de: [
      "Steglitz-Zehlendorf ist der grüne Südwesten: Grunewald, Wannsee, Schlachtensee und die Museen in Dahlem. Wer Berlin mit Spaziergängen, Seebad und Villenvierteln verbinden will statt mit Clubnächten, wohnt hier richtig - der Bezirk ist der ruhigste im Portfolio.",
      "Die Fahrzeit ins Zentrum liegt bei 25 bis 35 Minuten mit S1 und S7, dafür sind die Zimmerpreise meist niedriger als innerstädtisch. Das Angebot besteht aus Tagungshotels, Gästehäusern und kleineren Häusern; große Ketten sind hier die Ausnahme.",
    ],
    en: [
      "Steglitz-Zehlendorf is the green south-west: Grunewald forest, Wannsee, Schlachtensee and the Dahlem museums. If your Berlin is walks, lakeside swimming and villa streets rather than club nights, this is the place - it is the quietest district in this guide.",
      "Travel time to the centre is 25 to 35 minutes on the S1 and S7, but room rates are usually lower than inner-city. The supply consists of conference hotels, guest houses and smaller properties; large chains are the exception.",
    ],
  },
  spandau: {
    de: [
      "Spandau ist Berlins eigenständigster Bezirk - die Altstadt mit Fachwerk und Fußgängerzone, die Zitadelle aus dem 16. Jahrhundert und die Havel wirken eher wie eine eigene Kleinstadt als wie ein Stadtteil. Spandauer sagen bis heute gern, sie führen \"nach Berlin\", wenn sie ins Zentrum fahren.",
      "Für Reisende ist vor allem das Preisniveau interessant: Hier liegen die Übernachtungsraten regelmäßig deutlich unter dem Innenstadtdurchschnitt. Die U7 fährt ohne Umsteigen bis zur Messe und weiter in die City West, der Regionalverkehr braucht ab Spandau nur rund zehn Minuten bis zum Hauptbahnhof.",
    ],
    en: [
      "Spandau is Berlin's most self-contained district - the old town with half-timbered houses and a pedestrian zone, the 16th-century citadel and the Havel river make it feel more like its own small town than a city district. Locals still like to say they are going \"to Berlin\" when they head into the centre.",
      "For travellers the price level is the main draw: overnight rates here sit consistently below the inner-city average. The U7 runs to the Messe and on into City West without a change, and regional trains from Spandau reach Hauptbahnhof in about ten minutes.",
    ],
  },
  "treptow-koepenick": {
    de: [
      "Treptow-Köpenick ist flächenmäßig der größte Berliner Bezirk und zugleich der wasserreichste: Müggelsee, Dahme und Spree, dazu ausgedehnte Waldgebiete. Der Treptower Park mit dem Sowjetischen Ehrenmal liegt zentrumsnah, die Köpenicker Altstadt mit Schloss und Rathaus gut eine halbe Stunde weiter östlich.",
      "Übernachtungen sind hier fast durchweg günstiger als in der Innenstadt, das Angebot reicht von Seehotels bis zu kleinen Pensionen. Sinnvoll ist der Bezirk vor allem für Gäste mit Zeit oder Auto - für ein Wochenende mit dichtem Sightseeing-Programm ist die Anfahrt in die Mitte spürbar länger.",
    ],
    en: [
      "Treptow-Köpenick is Berlin's largest district by area and its most water-rich: the Müggelsee, the Dahme and the Spree plus extensive forest. Treptower Park with the Soviet War Memorial sits close to the centre, while Köpenick old town with its palace and town hall is a good half hour further east.",
      "Overnight rates here are almost always cheaper than inner-city, and the supply ranges from lakeside hotels to small guest houses. The district works best for guests with time or a car - for a weekend packed with sightseeing, the trip into Mitte is noticeably longer.",
    ],
  },
  lichtenberg: {
    de: [
      "Lichtenberg ist der Bezirk für Reisende mit Interesse an DDR-Geschichte: In der Normannenstraße befand sich die Zentrale des Ministeriums für Staatssicherheit, im Norden liegt die Gedenkstätte Berlin-Hohenschönhausen im ehemaligen Stasi-Untersuchungsgefängnis. Beides ist heute museal aufgearbeitet und ohne Umweg erreichbar.",
      "Familien zieht es eher in den Tierpark Berlin mit Schloss Friedrichsfelde - mit rund 160 Hektar eine der größten Zoo-Anlagen Europas. Das Hotelangebot ist überschaubar und preislich moderat; S-Bahnhof und Fernbahnhof Lichtenberg binden den Bezirk direkt an.",
    ],
    en: [
      "Lichtenberg is the district for travellers interested in GDR history: Normannenstraße housed the headquarters of the Ministry for State Security, and in the north the Berlin-Hohenschönhausen Memorial occupies the former Stasi remand prison. Both are now museums and easy to reach directly.",
      "Families tend to head for Tierpark Berlin with Friedrichsfelde Palace instead - at roughly 160 hectares one of Europe's largest zoo grounds. The hotel supply is limited and moderately priced; Lichtenberg's S-Bahn and long-distance station connect the district directly.",
    ],
  },
  "marzahn-hellersdorf": {
    de: [
      "Marzahn-Hellersdorf steht für die großen Plattenbausiedlungen der DDR - und für die Gärten der Welt, eine über 40 Hektar große Parkanlage mit chinesischem, japanischem, orientalischem und balinesischem Garten. Die Seilbahn über das Gelände stammt von der IGA 2017 und ist bis heute in Betrieb.",
      "Preislich ist der Bezirk das untere Ende der Berliner Skala, das Angebot besteht vor allem aus Budget- und Kettenhäusern an den Hauptachsen. Mit S7 und U5 dauert die Fahrt in die Mitte etwa 30 Minuten - vertretbar für längere Aufenthalte, unpraktisch für zwei Nächte mit vollem Programm.",
    ],
    en: [
      "Marzahn-Hellersdorf stands for the large GDR-era prefab housing estates - and for the Gärten der Welt, a park of more than 40 hectares with Chinese, Japanese, Oriental and Balinese gardens. The cable car above the grounds dates from the 2017 garden show and still runs today.",
      "On price the district is the bottom end of the Berlin scale, and the supply is mostly budget and chain houses along the main arteries. The S7 and U5 take around 30 minutes into Mitte - reasonable for longer stays, impractical for two nights with a packed schedule.",
    ],
  },
  reinickendorf: {
    de: [
      "Reinickendorf im Norden reicht vom ehemaligen Flughafen Tegel - heute als Forschungs- und Gewerbequartier im Umbau - über den Tegeler See bis in die Gartenstadt Frohnau. Der Bezirk ist grün, wohnlich und touristisch kaum erschlossen, was ihn vor allem für Geschäftsreisende und Durchreisende interessant macht.",
      "Das Hotelangebot konzentriert sich auf Häuser rund um Tegel und die Ausfallstraßen, oft mit Parkplatz und moderaten Raten. Die U6 fährt direkt bis Friedrichstraße und Mitte, die Fahrzeit liegt bei rund 25 Minuten.",
    ],
    en: [
      "Reinickendorf in the north stretches from the former Tegel airport - now being redeveloped as a research and business quarter - past the Tegeler See to the garden suburb of Frohnau. The district is green, residential and barely touristed, which makes it mainly interesting for business travellers and people passing through.",
      "The hotel supply concentrates around Tegel and the arterial roads, often with parking and moderate rates. The U6 runs directly to Friedrichstraße and Mitte in around 25 minutes.",
    ],
  },
};
