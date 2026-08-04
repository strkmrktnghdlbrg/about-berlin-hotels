/**
 * Redaktionelle Vertiefung pro Hotel-Kategorie (ergänzend zu `description`
 * in categories.ts).
 * ------------------------------------------------------------------------
 * Zweck: die Kaufentscheidung stützen - worauf man bei dieser Kategorie in
 * Berlin achten sollte, wo sie sich lohnt und wo nicht.
 *
 * Nur allgemein bekannte, überprüfbare Angaben. Keine erfundenen Preise,
 * keine erfundenen Häuser, keine Bewertungen.
 */
export type CategoryEditorial = Record<string, { de: string[]; en: string[] }>;

export const categoryEditorial: CategoryEditorial = {
  luxushotels: {
    de: [
      "Berliner Luxushotels unterscheiden sich stärker voneinander als in den meisten Hauptstädten: Die Häuser am Pariser Platz und am Gendarmenmarkt spielen die klassische Grandhotel-Karte, während Häuser in der City West eher auf Design und Understatement setzen. Wer Wert auf Spa, Pool und Restaurant im Haus legt, sollte das vor der Buchung prüfen - nicht jedes Fünf-Sterne-Haus in Berlin hat alle drei.",
      "Preislich ist Berlin im europäischen Vergleich immer noch moderat, aber saisonabhängig: Messewochen, Berlinale und die Wochen vor Weihnachten heben die Raten deutlich an. Wochenenden im Januar und Februar sind traditionell die günstigsten Termine für ein Haus der Spitzenklasse.",
    ],
    en: [
      "Berlin's luxury hotels differ from one another more than in most capitals: the houses on Pariser Platz and Gendarmenmarkt play the classic grand-hotel card, while City West properties lean towards design and understatement. If spa, pool and an in-house restaurant matter to you, check before booking - not every five-star house in Berlin has all three.",
      "By European standards Berlin is still moderately priced, but strongly seasonal: fair weeks, the Berlinale and the run-up to Christmas lift rates sharply. Weekends in January and February are traditionally the cheapest dates for a top-tier property.",
    ],
  },
  "boutique-hotels": {
    de: [
      "Boutiquehotels sind in Berlin selten Neubauten - die interessanten Häuser stecken in Gründerzeitgebäuden, ehemaligen Fabriken, Umspannwerken oder Brauereien. Genau das ist der Reiz und zugleich der Haken: Zimmergrößen und Zuschnitte unterscheiden sich innerhalb desselben Hauses teils erheblich.",
      "Bei kleinen Häusern lohnt sich der Blick auf die Details, die Ketten standardisiert liefern: Rezeption rund um die Uhr, Aufzug, Klimaanlage und Frühstückszeiten am Wochenende. Wer damit leben kann, bekommt in Friedrichshain-Kreuzberg, Mitte und Prenzlauer Berg deutlich mehr Charakter für den gleichen Preis.",
    ],
    en: [
      "Boutique hotels in Berlin are rarely new builds - the interesting ones sit in period buildings, former factories, substations or breweries. That is exactly the appeal and the catch: room sizes and layouts can differ considerably within the same house.",
      "With small properties it pays to check the details chains standardise: 24-hour reception, lift, air conditioning and weekend breakfast times. If you can live with that, Friedrichshain-Kreuzberg, Mitte and Prenzlauer Berg give you noticeably more character for the same money.",
    ],
  },
  familienhotels: {
    de: [
      "Familienfreundlich heißt in Berlin vor allem: genug Platz und eine ruhige Lage mit kurzer ÖPNV-Anbindung. Familienzimmer und Zustellbetten sind in den Kettenhäusern am verlässlichsten zu bekommen; kleinere Boutiquehäuser haben oft nur ein oder zwei geeignete Zimmer pro Etage.",
      "Praktisch sind Bezirke mit Parks und Spielplätzen in Gehweite - Prenzlauer Berg, Tempelhof-Schöneberg und Charlottenburg-Wilmersdorf sind hier stark. Bei mehr als drei Nächten lohnt der Vergleich mit einem Apartment: Küche und Waschmaschine sparen im Berliner Alltag mehr, als der Aufpreis kostet.",
    ],
    en: [
      "Family-friendly in Berlin mostly means enough space and a quiet address with a short transit connection. Family rooms and extra beds are most reliably available in chain hotels; smaller boutique houses often have only one or two suitable rooms per floor.",
      "Districts with parks and playgrounds within walking distance help - Prenzlauer Berg, Tempelhof-Schöneberg and Charlottenburg-Wilmersdorf are strong here. Beyond three nights it is worth comparing with an apartment: a kitchen and washing machine usually save more than the price difference costs.",
    ],
  },
  "billige-hotels": {
    de: [
      "Günstig übernachten funktioniert in Berlin auf drei Wegen: Budget-Ketten an den Verkehrsachsen, Hostels mit Privatzimmern und Häuser in den Außenbezirken. Alle drei sind sauber kalkuliert - der Unterschied liegt fast immer in der Fahrzeit ins Zentrum, nicht in der Zimmerqualität.",
      "Vor der Buchung lohnt sich der Blick auf zwei Posten, die den Preis nachträglich verschieben: das Frühstück und die Stadtverträglichkeitsabgabe (City Tax). Wer ohne Frühstück bucht, fährt in Berlin fast immer besser - Cafés gibt es in jedem Kiez, oft günstiger und deutlich besser.",
    ],
    en: [
      "Cheap in Berlin works three ways: budget chains on the main traffic axes, hostels with private rooms, and properties in the outer districts. All three are tightly costed - the difference is almost always travel time to the centre, not room quality.",
      "Before booking, check the two items that shift the price afterwards: breakfast and the city tax. Skipping hotel breakfast is almost always the better deal in Berlin - there are cafés in every neighbourhood, usually cheaper and considerably better.",
    ],
  },
  "charmante-hotels": {
    de: [
      "Charme lässt sich schwer messen, aber gut eingrenzen: kleine Häuser mit eigener Handschrift, häufig familiengeführt, oft in Altbauten mit Stuck, Innenhof oder Garten. In Berlin finden sich solche Adressen vor allem abseits der großen Achsen - in Seitenstraßen von Prenzlauer Berg, Schöneberg und Charlottenburg.",
      "Wer hier bucht, sollte Erwartungen an Standardisierung zurückschrauben: Die Rezeption ist nachts nicht immer besetzt, der Aufzug fehlt manchmal ganz. Dafür sind die Zimmer selten austauschbar und das Personal kennt die Nachbarschaft besser als jede App.",
    ],
    en: [
      "Charm is hard to measure but easy to bound: small houses with their own signature, often family-run, frequently in period buildings with stucco, a courtyard or a garden. In Berlin such addresses sit mostly off the main axes - in the side streets of Prenzlauer Berg, Schöneberg and Charlottenburg.",
      "Book here with lower expectations of standardisation: reception is not always staffed at night, and sometimes there is no lift at all. In exchange the rooms are rarely interchangeable and the staff know the neighbourhood better than any app.",
    ],
  },
  "business-hotels": {
    de: [
      "Für Geschäftsreisen zählt in Berlin die Anbindung mehr als die Adresse. Die Messe liegt in Charlottenburg, das Regierungsviertel in Mitte, die großen Tech- und Startup-Büros verteilen sich auf Mitte, Kreuzberg und Friedrichshain - ein Haus mit direkter U-Bahn-Verbindung schlägt fast immer die zentralere, aber schlechter angebundene Alternative.",
      "Während der großen Messen (ITB, IFA, Fruit Logistica, Grüne Woche) verdoppeln sich die Raten in Messenähe regelmäßig. Wer früh bucht oder auf Häuser an der U7 in Spandau und Tempelhof-Schöneberg ausweicht, zahlt bei kaum längerer Fahrzeit deutlich weniger.",
    ],
    en: [
      "For business travel in Berlin the connection matters more than the address. The Messe is in Charlottenburg, the government quarter in Mitte, and the large tech and startup offices spread across Mitte, Kreuzberg and Friedrichshain - a house with a direct U-Bahn link almost always beats the more central but poorly connected alternative.",
      "During the big fairs (ITB, IFA, Fruit Logistica, Grüne Woche) rates near the fairground routinely double. Booking early or moving to properties on the U7 in Spandau and Tempelhof-Schöneberg costs noticeably less for barely more travel time.",
    ],
  },
  "wellness-hotels": {
    de: [
      "Berlin ist keine Wellness-Destination im alpinen Sinn - Spa-Bereiche gehören hier meist zu Stadthotels und sind entsprechend kompakt. Wer Pool und Sauna erwartet, sollte die Beschreibung genau lesen: \"Wellnessbereich\" bedeutet in der Stadt oft Sauna plus Fitnessraum, nicht Schwimmbad.",
      "Die Häuser mit vollwertigem Spa konzentrieren sich in Mitte und der City West. Ergänzend lohnt der Blick nach draußen: Die großen öffentlichen Thermen und die Seen im Südwesten sind für viele Gäste die bessere Alternative zum Hotelpool.",
    ],
    en: [
      "Berlin is not a wellness destination in the Alpine sense - spa areas here usually belong to city hotels and are correspondingly compact. If you expect a pool and sauna, read the description carefully: in the city, \"wellness area\" often means sauna plus gym, not a swimming pool.",
      "The houses with a full spa cluster in Mitte and City West. It is also worth looking beyond the hotel: the large public thermal baths and the lakes in the south-west are the better alternative to a hotel pool for many guests.",
    ],
  },
  "hotels-mit-shuttle": {
    de: [
      "Ein Hotel-Shuttle ist in Berlin vor allem für frühe Abflüge ab BER interessant. Der Flughafen liegt im Süden der Stadt, die Fahrt aus der Innenstadt dauert je nach Verkehr 40 bis 60 Minuten - bei Abflügen vor 8 Uhr ist ein Haus mit Transfer oder in Flughafennähe die stressärmere Lösung.",
      "Wichtig ist die Rückfrage vor der Buchung: Viele Häuser bieten den Shuttle nur zu festen Zeiten, gegen Aufpreis oder mit Voranmeldung am Vorabend. Als Alternative fährt der Flughafenexpress FEX vom Hauptbahnhof in rund 30 Minuten zum Terminal - für die meisten Gäste die zuverlässigere Variante.",
    ],
    en: [
      "A hotel shuttle in Berlin matters mainly for early departures from BER. The airport sits in the south of the city and the drive from the centre takes 40 to 60 minutes depending on traffic - for flights before 8am, a house with a transfer or near the airport is the lower-stress option.",
      "Ask before booking: many properties run the shuttle only at fixed times, for a surcharge, or with sign-up the evening before. As an alternative, the FEX airport express runs from Hauptbahnhof to the terminal in around 30 minutes - the more reliable choice for most guests.",
    ],
  },
  designhotels: {
    de: [
      "Designhotels sind in Berlin weniger Stilfrage als Baugeschichte: Viele der interessanten Häuser sind Umbauten - Bürogebäude der Nachkriegsmoderne, Fabriketagen, Kaufhäuser. Entsprechend eigenwillig sind Grundrisse, Lichtführung und Badkonzepte, und entsprechend groß sind die Unterschiede zwischen den Zimmerkategorien.",
      "Für Gäste heißt das: Bilder in der Buchungsstrecke zeigen oft nur die beste Kategorie. Wer Wert auf Tageslicht im Bad, eine Badewanne oder ein ruhiges Zimmer legt, sollte die Zimmerkategorie gezielt auswählen statt die günstigste zu nehmen.",
    ],
    en: [
      "Design hotels in Berlin are less a matter of style than of building history: many of the interesting ones are conversions - post-war office buildings, factory floors, department stores. Floor plans, daylight and bathroom concepts are correspondingly idiosyncratic, and so are the differences between room categories.",
      "For guests that means the photos in the booking flow often show only the best category. If daylight in the bathroom, a bathtub or a quiet room matter to you, pick the room category deliberately rather than taking the cheapest.",
    ],
  },
  apartments: {
    de: [
      "Apartments und Aparthotels lohnen sich in Berlin ab etwa vier Nächten - die Kombination aus Küche, Waschmaschine und mehr Fläche gleicht den Aufpreis gegenüber einem Hotelzimmer schnell aus. Besonders dicht ist das Angebot in Prenzlauer Berg, Mitte und Friedrichshain.",
      "Zwei Punkte sollte man vorab klären: Berlin reguliert die kurzzeitige Vermietung von Wohnraum über das Zweckentfremdungsverbot, seriöse Anbieter weisen eine Registriernummer aus. Und geprüft gehört, ob Rezeption, Check-in-Zeiten und Reinigung im Preis enthalten sind - bei reinen Apartments oft nicht.",
    ],
    en: [
      "Apartments and aparthotels pay off in Berlin from around four nights - a kitchen, a washing machine and more space quickly offset the premium over a hotel room. The supply is densest in Prenzlauer Berg, Mitte and Friedrichshain.",
      "Clarify two things in advance: Berlin regulates short-term letting of residential space under the Zweckentfremdungsverbot, and legitimate operators display a registration number. And check whether reception, check-in times and cleaning are included in the price - with pure apartments they often are not.",
    ],
  },
};
