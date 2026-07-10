import type { Article } from "../articles";

/**
 * Bezirks-Artikel — zurückgeführt unter ihren exakten alten Flat-Slug-URLs.
 * Jeder Artikel behält den ursprünglichen Such-Fokus (z.B. Charlottenburg =
 * elegante 4-Sterne-Häuser, Friedrichshain = Boutique, Pankow = Familie),
 * ist aber faktisch gegen hotels.ts/districts.ts geprüft und auf die neuen
 * /stadtteile/-, /hotels/- und /kategorien/-Seiten verlinkt.
 */

const PUB = "2024-02-01";
const MOD = "2026-06-01";

export const districtArticles: Article[] = [
  // ───────────────────────── CHARLOTTENBURG ─────────────────────────
  {
    slug: "charlottenburg",
    title: "Hotels in Charlottenburg: Eleganz im westlichen Berlin",
    description:
      "Hotels in Charlottenburg: traditionsreiche 4- und 5-Sterne-Häuser am Kurfürstendamm, ruhige Boutique-Hotels am Savignyplatz und faire City-West-Optionen.",
    kicker: "Bezirks-Guide · City West",
    intro: [
      "Charlottenburg ist das elegante West-Berlin: Kurfürstendamm, Savignyplatz, KaDeWe und Schloss Charlottenburg liegen hier dicht beieinander. Wer Stil, Shopping und kurze Wege zu klassischer Kultur sucht, wohnt in keinem Bezirk besser.",
      "Die Hotellandschaft reicht vom historischen Grandhotel über das Designhaus im Gründerzeitbau bis zum fairen 3-Sterne-Haus mit gutem Frühstück. Wir zeigen die verifizierten Häuser, die uns überzeugen - und wo sie genau liegen.",
    ],
    takeaways: [
      "Charlottenburg-Wilmersdorf hat Berlins dichteste Auswahl an traditionsreichen 4- und 5-Sterne-Hotels.",
      "Die besten Lagen: direkt am Ku'damm, rund um den Savignyplatz und am Bahnhof Zoo.",
      "Schon ab rund 95 € pro Nacht gibt es solide City-West-Häuser mit Frühstück.",
    ],
    bestFor: ["Anspruchsvolle Reisende", "Shopping & Klassik", "Geschäftsreisende", "Erstbesucher West"],
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
        heading: "Was macht Charlottenburg als Hotel-Standort besonders?",
        body: [
          "Charlottenburg ist der eleganteste, ruhigste der zentralen West-Bezirke. Du wohnst zwischen Kurfürstendamm und Savignyplatz - Shopping, Cafés und die Philharmonie sind fußläufig, das Getümmel von Mitte aber weit genug weg.",
          "Verkehrstechnisch ist die City West top angebunden: Bahnhof Zoo (Regional, S- und U-Bahn) und die U-Bahnhöfe entlang des Ku'damms bringen dich in 15–20 Minuten nach Mitte. Für einen ersten Berlin-Besuch mit Hang zu Komfort ist das eine ideale Basis.",
        ],
      },
      {
        heading: "Welche Hotels in Charlottenburg lohnen sich wirklich?",
        body: [
          "Für klassischen Grandhotel-Stil führt am Hotel Bristol Berlin am Ku'damm und an der Waldorf Astoria im 32-stöckigen Glasturm an der Gedächtniskirche kein Weg vorbei. Designorientierter wohnst du im Hotel Zoo (mit der Grace Roof-Bar) oder im architektonisch verspielten Hotel Q!.",
          "Wer es persönlicher und etwas günstiger mag, ist im Sir Savigny an einer ruhigen Seitenstraße gut aufgehoben. Faire City-West-Preise mit warmem Frühstück liefert das Hampton by Hilton.",
        ],
      },
      {
        heading: "Sind die Hotels gut mit öffentlichen Verkehrsmitteln erreichbar?",
        body: [
          "Ja. Rund um Bahnhof Zoo treffen Regionalzüge, S-Bahn-Ring und mehrere U-Bahn-Linien zusammen - von hier erreichst du Mitte, Hauptbahnhof und den Flughafen BER ohne Umsteigestress. Die meisten Häuser in diesem Guide liegen maximal zehn Gehminuten von einer Station entfernt.",
        ],
      },
      {
        heading: "Was kann man rund um die Hotels unternehmen?",
        body: [
          "Direkt vor der Tür liegen der Kurfürstendamm zum Shoppen, das KaDeWe und die Kaiser-Wilhelm-Gedächtniskirche. Zu Fuß oder in wenigen Minuten erreichst du Schloss Charlottenburg, das Olympiastadion und den Tiergarten.",
        ],
      },
    ],
    faq: [
      {
        q: "Welche Art von Hotels gibt es in Charlottenburg?",
        a: "Der Schwerpunkt liegt auf traditionsreichen 4- und 5-Sterne-Häusern und Designhotels, dazu kommen einige solide 3-Sterne-Häuser für mittlere Budgets. Reine Hostels sind seltener als im Berliner Osten.",
      },
      {
        q: "Ist Charlottenburg für Familien geeignet?",
        a: "Ja - die Gegend ist ruhig und sicher, mit Tiergarten, Zoo und Schloss Charlottenburg in Reichweite. Familienzimmer findest du eher in den größeren Häusern; eine breitere Familien-Auswahl bietet Pankow.",
      },
      {
        q: "Wie viel kostet ein Hotel in Charlottenburg?",
        a: "Solide 3-Sterne-Häuser starten bei rund 95 € pro Nacht, gehobene 4-Sterne-Hotels bei etwa 165 €, die Grandhotels am Ku'damm bei 240 € aufwärts.",
      },
      {
        q: "Eignet sich Charlottenburg für Geschäftsreisen?",
        a: "Sehr gut. Die Nähe zum Messegelände, schnelle Verbindungen und viele Business-taugliche Häuser (InterContinental, Waldorf Astoria, Hampton by Hilton) machen die City West zur klassischen Business-Adresse.",
      },
    ],
    gygQuery: "Charlottenburg Berlin",
    related: [
      { label: "Alle Hotels in Charlottenburg-Wilmersdorf", href: "/stadtteile/charlottenburg-wilmersdorf/" },
      { label: "Luxushotels in Berlin im Vergleich", href: "/luxus-hotels-berlin/" },
      { label: "Designhotels in Berlin", href: "/design-hotels-berlin/" },
      { label: "Schloss Charlottenburg entdecken", href: "/sehenswuerdigkeiten/schloss-charlottenburg/" },
      { label: "Kurfürstendamm & KaDeWe", href: "/sehenswuerdigkeiten/kurfuerstendamm/" },
    ],
    adjacent: [
      { label: "Wo wohnt man in Berlin am besten zum ersten Mal?", href: "/zentrale-hotels-berlin/" },
      { label: "Welche Hotels haben die schönsten Rooftop-Bars?", href: "/rooftop-bars-hotels-berlin/" },
      { label: "3 Tage Berlin - der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── FRIEDRICHSHAIN ─────────────────────────
  {
    slug: "friedrichshain",
    title: "Boutique-Hotels in Friedrichshain-Kreuzberg: das alternative Berlin",
    description:
      "Boutique- und Designhotels in Friedrichshain-Kreuzberg: individuelle Häuser an East Side Gallery, Spree und RAW-Gelände - Berlins kreativster Bezirk zum Übernachten.",
    kicker: "Bezirks-Guide · Berlin Ost",
    intro: [
      "Friedrichshain-Kreuzberg ist das kreative Epizentrum Berlins: East Side Gallery, Mercedes-Benz Arena, RAW-Gelände und die Markthalle Neun prägen den Kiez. Statt Hotelketten dominieren hier individuelle Boutique- und Designhäuser.",
      "Wer Nachtleben, Streetart und Spree-Atmosphäre will und auf Marmor-Lobbys verzichten kann, findet hier die spannendsten Übernachtungen der Stadt - wir zeigen die verifizierten Häuser.",
    ],
    takeaways: [
      "Friedrichshain-Kreuzberg ist Berlins Boutique- und Design-Mekka - kaum austauschbare Ketten.",
      "Top-Lagen: direkt an der East Side Gallery, an der Spree und rund um die Warschauer Straße.",
      "Ideal für Nachtschwärmer, Kreative und alle, die das echte, ungeschliffene Berlin suchen.",
    ],
    bestFor: ["Boutique-Liebhaber", "Nachtschwärmer", "Kreative", "Junge Reisende"],
    districtSlug: "friedrichshain-kreuzberg",
    categorySlug: "boutique-hotels",
    hotels: ["michelberger-hotel", "nhow-berlin", "orania-berlin", "schulz-hotel"],
    sections: [
      {
        heading: "Warum in Friedrichshain-Kreuzberg übernachten?",
        body: [
          "Weil kein anderer Bezirk so sehr für das junge, kreative Berlin steht. Du wohnst zwischen Galerien, Spätis, Clubs und Spree-Ufer - und bist mit der U1/U3 und der S-Bahn trotzdem schnell in Mitte.",
          "Die Hotels hier sind fast alle inhabergeführt oder konzeptstark: umgebaute Industriebauten, eigene Tonstudios, Dach-Saunen, Live-Musik. Das ist Übernachten mit Charakter statt Standardzimmer.",
        ],
      },
      {
        heading: "Welche Boutique-Hotels sind die besten?",
        body: [
          "Das Michelberger Hotel gegenüber der Mercedes-Benz Arena ist eine echte Berliner Design-Ikone - mit Dach-Sauna und saisonalem Restaurant. Das nhow Berlin direkt an der Spree ist Europas erstes Musikhotel mit eigenen, mietbaren Tonstudios.",
          "Wer es eine Stufe luxuriöser mag, bucht das Orania.Berlin am Oranienplatz mit Live-Konzerten im Salon. Preisbewusste übernachten im Schulz Hotel direkt an der East Side Gallery.",
        ],
      },
      {
        heading: "Wie laut ist es nachts - und für wen ist das nichts?",
        body: [
          "Rund um Warschauer Straße und RAW-Gelände ist nachts viel los; das ist Teil des Reizes, aber nichts für ruhebedürftige Schläfer. Wer Nähe zur Szene will, ohne im Lärm zu liegen, wählt ein Haus Richtung Kreuzberg-Süd (Bergmannkiez) oder zur Spree hin.",
        ],
      },
      {
        heading: "Was sollte man im Kiez gesehen haben?",
        body: [
          "Die East Side Gallery (längstes erhaltenes Mauerstück), die Oberbaumbrücke, das RAW-Gelände und die Markthalle Neun für Streetfood. Kreuzberg punktet zusätzlich mit dem Bergmannkiez, dem Görlitzer Park und dem Landwehrkanal.",
        ],
      },
    ],
    faq: [
      {
        q: "Was kostet ein Boutique-Hotel in Friedrichshain-Kreuzberg?",
        a: "Designorientierte Häuser starten bei rund 145–155 € pro Nacht, das gehobene Orania bei etwa 280 €. Preiswerte 3-Sterne-Optionen wie das Schulz Hotel gibt es ab rund 75 €.",
      },
      {
        q: "Ist der Bezirk für Erstbesucher geeignet?",
        a: "Für jüngere Reisende und alle, die das alternative Berlin suchen: absolut. Klassische Sightseeing-Erstbesucher mit Fokus auf Brandenburger Tor & Museumsinsel wohnen zentraler in Mitte.",
      },
      {
        q: "Wie komme ich von hier ins Zentrum?",
        a: "Mit U1/U3, der Ringbahn und der S3/S5/S7 ab Warschauer Straße oder Ostbahnhof bist du in 10–15 Minuten am Alexanderplatz und in Mitte.",
      },
      {
        q: "Gibt es auch Familienhotels?",
        a: "Vereinzelt - das Schulz Hotel bietet Familienzimmer. Für eine breitere familienfreundliche Auswahl ist Pankow die bessere Wahl.",
      },
    ],
    gygQuery: "East Side Gallery Berlin",
    related: [
      { label: "Alle Hotels in Friedrichshain-Kreuzberg", href: "/stadtteile/friedrichshain-kreuzberg/" },
      { label: "Boutique-Hotels in Berlin", href: "/boutique-hotels-berlin-charme/" },
      { label: "Hotels nahe dem Berliner Nachtleben", href: "/berliner-nachtleben-hotels/" },
      { label: "East Side Gallery", href: "/sehenswuerdigkeiten/east-side-gallery/" },
    ],
    adjacent: [
      { label: "Welche Designhotels lohnen sich in Berlin?", href: "/design-hotels-berlin/" },
      { label: "Wo finde ich günstige Hotels in zentraler Lage?", href: "/budget-hotels-berlin/" },
      { label: "Die schönsten Rooftop-Bars in Hotels", href: "/rooftop-bars-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── PANKOW ─────────────────────────
  {
    slug: "pankow",
    title: "Familienhotels in Pankow: kinderfreundlich übernachten im Berliner Norden",
    description:
      "Familienfreundliche Hotels in Pankow & Prenzlauer Berg: Familienzimmer, ruhige Altbau-Lagen und Boutique-Charme nahe Mauerpark und Kollwitzplatz.",
    kicker: "Bezirks-Guide · Berlin Nord",
    intro: [
      "Pankow ist Berlins größter Bezirk und reicht vom hippen Prenzlauer Berg mit Mauerpark und Kollwitzplatz über das ruhige Weißensee bis ins grüne Buch. Für Familien und längere Aufenthalte ist das eine der entspanntesten Ecken der Stadt.",
      "Statt Hotelketten prägen charmante Boutique-Häuser, Apartment-Hotels und familiengeführte Pensionen das Bild - viele in restaurierten Gründerzeitbauten mit Stuck und Hof.",
    ],
    takeaways: [
      "Prenzlauer Berg (Teil von Pankow) ist Berlins familienfreundlichster Innenstadt-Kiez.",
      "Viele Häuser bieten Familienzimmer, Apartments mit Küche und ruhige Lagen abseits der Touristenströme.",
      "Mauerpark, Kollwitzplatz und die Kulturbrauerei sind die grünen und kulturellen Anker.",
    ],
    bestFor: ["Familien", "Längere Aufenthalte", "Ruhesuchende", "Berlin-Kenner"],
    districtSlug: "pankow",
    categorySlug: "familienhotels",
    hotels: ["hotel-oderberger", "myers-hotel", "ackselhaus-blue-home", "livinghotel-weissensee"],
    sections: [
      {
        heading: "Warum ist Pankow gut für Familien?",
        body: [
          "Weil hier Innenstadt-Nähe auf entspanntes Wohnen trifft: breite Altbau-Straßen, Spielplätze, Cafés mit Kinderecke und der Mauerpark als Wochenend-Wohnzimmer. Die Wege sind kurz, das Tempo ruhiger als in Mitte oder Friedrichshain.",
          "Familienzimmer und vor allem Apartment-Hotels mit Küchenzeile (ideal ab drei Nächten) sind im Bezirk überdurchschnittlich häufig - gut für Familien, die nicht jeden Abend essen gehen wollen.",
        ],
      },
      {
        heading: "Welche Hotels in Pankow empfehlen wir?",
        body: [
          "Ein echtes Unikat ist das Hotel Oderberger im ehemaligen Stadtbad von 1902 - mit erhaltenem historischem Schwimmbecken und Familienzimmern, wenige Minuten vom Mauerpark. Das Myer's Hotel nahe Kollwitzplatz und das Ackselhaus mit seinen Themen-Zimmern stehen für persönlichen Boutique-Charme.",
          "Für längere Aufenthalte mit Kindern ist das Living Hotel Weißensee mit voll ausgestatteten Apartments und eigenem Park die praktischste Wahl.",
        ],
      },
      {
        heading: "Was kann man mit Kindern in der Nähe unternehmen?",
        body: [
          "Sonntags zum Flohmarkt und Karaoke in den Mauerpark, spielen und picknicken auf der großen Wiese, Eis am Kollwitzplatz. Die Kulturbrauerei bietet Kino und Veranstaltungen, der Botanische Volkspark Pankow und Schloss Schönhausen liegen im grünen Norden.",
        ],
      },
    ],
    faq: [
      {
        q: "Sind Hotels in Pankow gut ans Zentrum angebunden?",
        a: "Ja. Aus Prenzlauer Berg bist du mit Tram (M1, M10) und der U2 in rund 15 Minuten am Alexanderplatz. Weißensee und der Norden sind etwas weiter draußen, dafür ruhiger und günstiger.",
      },
      {
        q: "Was kostet ein Familienhotel in Pankow?",
        a: "Boutique- und Familienhäuser liegen meist zwischen 110 € und 165 € pro Nacht. Apartments mit Küche rechnen sich besonders ab drei bis vier Nächten.",
      },
      {
        q: "Ist Prenzlauer Berg dasselbe wie Pankow?",
        a: "Prenzlauer Berg ist ein Ortsteil des Bezirks Pankow - der bekannteste und zentralste. Weißensee, Niederschönhausen und Buch gehören ebenfalls zu Pankow, liegen aber weiter im Norden.",
      },
      {
        q: "Eignet sich Pankow auch ohne Kinder?",
        a: "Auf jeden Fall. Der Kiez ist bei Paaren und Berlin-Kennern beliebt, die Ruhe, gute Cafés und kurze Wege ins Zentrum schätzen.",
      },
    ],
    gygQuery: "Mauerpark Prenzlauer Berg Berlin",
    related: [
      { label: "Alle Hotels in Pankow", href: "/stadtteile/pankow/" },
      { label: "Familienfreundliche Hotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Berlin mit Kindern - Reiseplan", href: "/reiseplaner/berlin-mit-kindern/" },
      { label: "Mauerpark entdecken", href: "/sehenswuerdigkeiten/mauerpark/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben Familienzimmer und Pool?", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Wo finde ich charmante, inhabergeführte Hotels?", href: "/boutique-hotels-berlin-charme/" },
      { label: "Berlin mit Kindern bei Regen", href: "/reiseplaner/berlin-bei-regen/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── MITTE ─────────────────────────
  {
    slug: "mitte",
    title: "Hotels in Berlin-Mitte: übernachten im Herzen der Geschichte",
    description:
      "Hotels in Berlin-Mitte: von Luxushäusern am Brandenburger Tor und Gendarmenmarkt bis zu günstigen Häusern am Alexanderplatz - zentraler wohnt man in Berlin nicht.",
    kicker: "Bezirks-Guide · Zentrum",
    intro: [
      "Mitte ist Berlins historisches und geografisches Herz: Brandenburger Tor, Museumsinsel, Reichstag, Gendarmenmarkt und Unter den Linden liegen auf wenigen Quadratkilometern. Wer zum ersten Mal nach Berlin kommt, wohnt hier am sinnvollsten.",
      "Das Spektrum reicht vom legendären Grandhotel bis zum funktionalen 3-Sterne-Haus am Alexanderplatz - alles fußläufig oder eine kurze U-Bahn-Fahrt von den großen Sehenswürdigkeiten.",
    ],
    takeaways: [
      "Mitte bietet die kürzesten Wege zu Berlins ikonischen Sehenswürdigkeiten.",
      "Hier stehen die meisten 5-Sterne-Häuser der Stadt - aber auch günstige Optionen am Alex.",
      "Beste Mikro-Lagen: Pariser Platz, Gendarmenmarkt, Hackescher Markt und Alexanderplatz.",
    ],
    bestFor: ["Erstbesucher", "Luxus-Reisende", "Kultur-Fans", "Kurztrips"],
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
        heading: "Warum in Mitte übernachten?",
        body: [
          "Weil du fast alles zu Fuß erreichst: Brandenburger Tor, Reichstag, Museumsinsel, Unter den Linden und den Gendarmenmarkt. Für einen Kurztrip mit klassischem Sightseeing-Programm spart die zentrale Lage täglich viel Zeit.",
          "Mitte ist außerdem die Adresse der Berliner Spitzenhotellerie - wer Luxus, Spa und Sternerestaurant sucht, findet hier die größte Dichte.",
        ],
      },
      {
        heading: "Welche Hotels in Mitte sind die besten?",
        body: [
          "Das Hotel Adlon Kempinski am Pariser Platz ist die Grande Dame der Stadt, direkt am Brandenburger Tor. Das Hotel de Rome am Bebelplatz residiert in einer früheren Bank - mit Pool im alten Tresorraum. Am Gendarmenmarkt liegt das klassische Regent Berlin, am Potsdamer Platz das Suiten-Haus The Mandala mit dem 2-Sterne-Restaurant FACIL.",
          "Designorientiert und zentral wohnst du im AMANO Grand Central am Hauptbahnhof; preisbewusst und direkt am Alexanderplatz im H2 Hotel.",
        ],
      },
      {
        heading: "Wo in Mitte ist die beste Lage?",
        body: [
          "Für Sightseeing pur: rund um Pariser Platz und Gendarmenmarkt. Für Nachtleben und Restaurants: Hackescher Markt und die Rosenthaler Gegend. Für ÖPNV und faire Preise: direkt am Alexanderplatz, wo alle U- und S-Bahn-Linien zusammenlaufen.",
        ],
      },
      {
        heading: "Lohnt sich Luxus in Mitte oder geht es auch günstig?",
        body: [
          "Beides funktioniert. 5-Sterne-Häuser starten bei rund 290–480 € pro Nacht, solide 3-Sterne-Häuser am Alex aber schon ab etwa 65 €. Wer zentral wohnen, aber sparen will, bucht Richtung Alexanderplatz oder ein Designhaus der mittleren Klasse.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Mitte der beste Bezirk für den ersten Berlin-Besuch?",
        a: "Für klassisches Sightseeing ja: Die Wege zu den großen Sehenswürdigkeiten sind am kürzesten. Wer das alternative Berlin sucht, ist in Friedrichshain-Kreuzberg oder Neukölln besser aufgehoben.",
      },
      {
        q: "Was kostet ein Hotel in Mitte?",
        a: "Von rund 65 € für funktionale 3-Sterne-Häuser am Alexanderplatz bis 480 € für die Top-Suiten im Adlon. Die meisten 4-Sterne-Häuser liegen bei 130–200 €.",
      },
      {
        q: "Welche Sehenswürdigkeiten sind fußläufig?",
        a: "Brandenburger Tor, Reichstag, Holocaust-Mahnmal, Unter den Linden, Museumsinsel, Berliner Dom, Gendarmenmarkt, Fernsehturm und Alexanderplatz - alle in Mitte oder am Rand.",
      },
      {
        q: "Ist Mitte abends sicher und belebt?",
        a: "Ja. Rund um Hackescher Markt und Gendarmenmarkt ist es abends belebt mit Restaurants und Theatern. Die Gegend gilt als sicher; am Alexanderplatz ist es nachts trubeliger.",
      },
    ],
    gygQuery: "Brandenburger Tor Museumsinsel Berlin",
    related: [
      { label: "Alle Hotels in Mitte", href: "/stadtteile/mitte/" },
      { label: "Luxushotels in Berlin", href: "/luxus-hotels-berlin/" },
      { label: "Zentrale Hotels in Berlin", href: "/zentrale-hotels-berlin/" },
      { label: "Brandenburger Tor", href: "/sehenswuerdigkeiten/brandenburger-tor/" },
      { label: "Museumsinsel", href: "/sehenswuerdigkeiten/museumsinsel/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben ein Sternerestaurant?", href: "/gourmet-hotels-berlin/" },
      { label: "3 Tage Berlin - der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
      { label: "Wo finde ich Wellness- und Spa-Hotels?", href: "/wellness-spa-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── SPANDAU ─────────────────────────
  {
    slug: "spandau",
    title: "Günstige Hotels in Spandau: preiswert übernachten mit Altstadt-Charme",
    description:
      "Günstige Hotels in Spandau: preiswerte Berlin-Unterkünfte mit historischer Altstadt, Zitadelle und Havelufer - gut angebunden und ideal für Budget- und Messereisende.",
    kicker: "Bezirks-Guide · Berlin West",
    intro: [
      "Spandau fühlt sich fast wie eine eigene Kleinstadt an: historische Altstadt, Zitadelle, Havelufer. Wer preiswert übernachten und trotzdem mit S- und U-Bahn schnell ins Zentrum will, ist hier richtig.",
      "Eigene große Hotels gibt es im alten Spandau wenige - dafür ist der Bezirk perfekt als günstige Basis, etwa für Messebesucher oder Reisende mit Auto. Wir zeigen, worauf es ankommt, und nennen verifizierte Budget-Häuser in erreichbarer Nähe.",
    ],
    takeaways: [
      "Spandau ist eine der günstigsten zentralen-nahen Übernachtungsgegenden Berlins.",
      "Mit U7 und S-Bahn (Linie S3/S9) bist du ohne Umsteigen in der City West.",
      "Ideal für Budget-Reisende, Messebesucher und Wochenend-Trips mit Auto.",
    ],
    bestFor: ["Budget-Reisende", "Messebesucher", "Familien mit Auto", "Altstadt-Fans"],
    districtSlug: "spandau",
    categorySlug: "billige-hotels",
    hotels: ["hampton-by-hilton-city-west", "h2-hotel-alexanderplatz"],
    sections: [
      {
        heading: "Lohnt es sich, in Spandau zu übernachten?",
        body: [
          "Wenn dein Budget begrenzt ist oder du mit dem Auto anreist: ja. Spandau ist deutlich günstiger als die Innenstadt, hat eine hübsche historische Altstadt und liegt am Wasser. Für reines Sightseeing in Mitte rechne mit 30–40 Minuten Fahrt.",
          "Weil das Hotelangebot im alten Spandau selbst überschaubar ist, lohnt der Blick auf preiswerte, gut angebundene Häuser in der angrenzenden City West - von dort ist Spandau in wenigen Minuten erreichbar.",
        ],
      },
      {
        heading: "Wann bekommt man die günstigsten Preise?",
        body: [
          "In der Nebensaison (November bis Februar, außerhalb von Messen und Feiertagen) und unter der Woche sind die Preise am niedrigsten. Achtung: Während großer Messen am Funkturm ziehen die Preise im gesamten Westen spürbar an - dann früh buchen.",
        ],
        bullets: [
          "Nebensaison nutzen: Winter (außer Weihnachten/Silvester) ist am günstigsten.",
          "Unter der Woche statt Wochenende buchen.",
          "Messetermine (IFA & Co.) meiden oder sehr früh reservieren.",
        ],
      },
      {
        heading: "Was kann man in Spandau unternehmen?",
        body: [
          "Die Zitadelle Spandau (eine der besterhaltenen Renaissance-Festungen Europas), die Altstadt mit Fachwerk und Kolk, sowie Spaziergänge und Fähren am Havelufer. Im Advent ist der Spandauer Weihnachtsmarkt einer der größten Berlins.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie weit ist Spandau vom Zentrum entfernt?",
        a: "Rund 12 Kilometer westlich. Mit der U7 oder der S-Bahn erreichst du die City West in etwa 20 Minuten, Mitte in 30–40 Minuten.",
      },
      {
        q: "Was kostet ein Hotel in Spandau?",
        a: "Günstige Häuser starten bei etwa 60–80 € pro Nacht. In der angrenzenden City West gibt es solide 3-Sterne-Häuser ab rund 95 €.",
      },
      {
        q: "Ist Spandau für Familien geeignet?",
        a: "Ja - ruhig, am Wasser, mit Zitadelle und Parks. Für Reisende mit Auto sind die Parkmöglichkeiten ein Pluspunkt gegenüber der Innenstadt.",
      },
      {
        q: "Lohnt sich Spandau für Messebesucher?",
        a: "Sehr - die Anbindung ans Messegelände am Funkturm ist gut, und die Preise liegen unter denen der direkt an der Messe gelegenen Häuser.",
      },
    ],
    gygQuery: "Zitadelle Spandau Berlin",
    related: [
      { label: "Alle Hotels in Spandau", href: "/stadtteile/spandau/" },
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
      { label: "Billige Hotels - Bezirke im Vergleich", href: "/kategorien/billige-hotels/" },
      { label: "Hotels in Charlottenburg (City West)", href: "/charlottenburg/" },
    ],
    adjacent: [
      { label: "Wo finde ich Hotels unter 80 € pro Nacht?", href: "/budget-hotels-berlin/" },
      { label: "Welche Bezirke sind am günstigsten?", href: "/kategorien/billige-hotels/" },
      { label: "Hotels mit Parkplatz und guter Auto-Anbindung", href: "/reinickendorf/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── STEGLITZ ─────────────────────────
  {
    slug: "steglitz",
    title: "Ruhige Hotels in Steglitz-Zehlendorf: grüne Rückzugsorte am Wasser",
    description:
      "Ruhige Hotels in Steglitz-Zehlendorf: friedliche Rückzugsorte am Wannsee, im Grunewald und in Dahlem - Berlins grünster Bezirk für erholsame Aufenthalte.",
    kicker: "Bezirks-Guide · Berlin Südwest",
    intro: [
      "Steglitz-Zehlendorf ist Berlins grünster und ruhigster Bezirk: Grunewald, Wannsee und Krumme Lanke prägen die Landschaft. Hotels sind hier oft kleiner, persönlicher und liegen mitten im Wald oder am See.",
      "Wer Erholung, Natur und gehobene Ruhe sucht - und auf Innenstadt-Trubel gern verzichtet - , findet im Südwesten genau das. Wir zeigen die verifizierten Häuser und ihre Lagen.",
    ],
    takeaways: [
      "Steglitz-Zehlendorf ist die ruhigste, grünste Übernachtungsgegend Berlins.",
      "Top für Spa-Reisende, Naturfreunde und längere, erholsame Aufenthalte.",
      "Grunewald, Wannsee und der Botanische Garten liegen direkt vor der Tür.",
    ],
    bestFor: ["Ruhesuchende", "Natur-Fans", "Spa-Reisende", "Längere Aufenthalte"],
    districtSlug: "steglitz-zehlendorf",
    categorySlug: "wellness-hotels",
    hotels: ["patrick-hellmann-schlosshotel", "harnack-haus"],
    sections: [
      {
        heading: "Für wen lohnt sich ein Hotel in Steglitz-Zehlendorf?",
        body: [
          "Für alle, die Ruhe und Grün höher gewichten als kurze Wege zu den Sehenswürdigkeiten. Du wohnst zwischen Wald und Seen, schläfst ungestört und tankst auf - ideal für Spa-Aufenthalte, Naturwochenenden und längere Visiten.",
          "Wer dagegen jeden Abend in Mitte ausgehen will, sollte die Fahrzeit von 30–40 Minuten einkalkulieren.",
        ],
      },
      {
        heading: "Welche Hotels empfehlen wir im grünen Südwesten?",
        body: [
          "Das Patrick Hellmann Schlosshotel im Grunewald residiert im Schloss Pannwitz von 1914 - die Innenräume wurden 1996 von Karl Lagerfeld gestaltet. Sehr diskret, mit Parklage und eigenem Restaurant.",
          "Eine charmante, ruhigere Alternative ist das Harnack-Haus in Dahlem, 1929 als Tagungshaus erbaut und heute Gäste- und Konferenzhaus der Max-Planck-Gesellschaft - auch für reguläre Reisende offen.",
        ],
      },
      {
        heading: "Was kann man in der Umgebung unternehmen?",
        body: [
          "Spaziergänge und Radtouren im Grunewald, ein Tag am Strandbad Wannsee, Kunst im Museum Dahlem-Umfeld, ein Abstecher zur Glienicker Brücke oder in den Botanischen Garten. Im Sommer ist der Südwesten Berlins ein Naherholungsparadies.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie gut ist Steglitz-Zehlendorf ans Zentrum angebunden?",
        a: "Mit S-Bahn (S1, S7) und U-Bahn (U3) erreichst du die City West in 20–25 Minuten und Mitte in 30–40 Minuten. Mit dem Auto sind Parkplätze deutlich entspannter als in der Innenstadt.",
      },
      {
        q: "Sind die Hotels hier teuer?",
        a: "Das Schlosshotel und vergleichbare Häuser liegen im gehobenen Bereich ab rund 290 € pro Nacht; charmante Tagungs- und Gästehäuser starten bei etwa 135 €.",
      },
      {
        q: "Eignet sich der Bezirk für Familien?",
        a: "Ja, vor allem im Sommer: Strandbad Wannsee, Wälder und Seen sind ideal. Die Wege ins Zentrum sind allerdings länger.",
      },
      {
        q: "Gibt es echte Wellness- und Spa-Hotels?",
        a: "Der grüne Süden Berlins ist die klassische Spa-Gegend. Eine Übersicht der besten Häuser findest du in unserem Wellness-Guide.",
      },
    ],
    gygQuery: "Wannsee Grunewald Berlin",
    related: [
      { label: "Alle Hotels in Steglitz-Zehlendorf", href: "/stadtteile/steglitz-zehlendorf/" },
      { label: "Wellness- & Spa-Hotels in Berlin", href: "/wellness-spa-hotels-berlin/" },
      { label: "Seehotels in Treptow-Köpenick", href: "/treptow/" },
      { label: "Wannsee entdecken", href: "/sehenswuerdigkeiten/wannsee/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben den besten Spa-Bereich?", href: "/wellness-spa-hotels-berlin/" },
      { label: "Wo übernachtet man am Wasser in Berlin?", href: "/treptow/" },
      { label: "Tagesausflug nach Potsdam & Sanssouci", href: "/potsdam/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── TEMPELHOF ─────────────────────────
  {
    slug: "tempelhof",
    title: "Zentrale Hotels in Tempelhof-Schöneberg: urbanes Berlin mit Charakter",
    description:
      "Hotels in Tempelhof-Schöneberg: zentrale Stadthotels, Boutique-Häuser und Budget-Optionen rund um Winterfeldtplatz, Tempelhofer Feld und KaDeWe-Nähe.",
    kicker: "Bezirks-Guide · Berlin Süd",
    intro: [
      "Tempelhof-Schöneberg verbindet urbanes Leben am Winterfeldtplatz, das legendäre Tempelhofer Feld und gemütliche Wohnviertel. Du wohnst zentral, aber entspannter und oft günstiger als in Mitte.",
      "Die Hotellandschaft reicht vom Designhaus über charmante Pensionen bis zu fairen Stadthotels - gut angebunden und mit KaDeWe und Ku'damm in Reichweite.",
    ],
    takeaways: [
      "Tempelhof-Schöneberg ist zentral, lebendig und meist preiswerter als Mitte.",
      "Schöneberg punktet mit Markt, Café-Kultur und dem queeren Regenbogen-Kiez.",
      "Das Tempelhofer Feld ist Berlins größte Freifläche - perfekt für Radeln und Drachensteigen.",
    ],
    bestFor: ["Mittelpreis-Reisende", "Stadtentdecker", "LGBTQ+-Reisende", "Familien"],
    districtSlug: "tempelhof-schoeneberg",
    categorySlug: "boutique-hotels",
    hotels: ["axel-hotel-berlin", "hotel-berlin-berlin"],
    sections: [
      {
        heading: "Warum in Tempelhof-Schöneberg übernachten?",
        body: [
          "Weil der Bezirk zentral liegt, ohne touristisch überlaufen zu sein. Schöneberg ist lebendig und gut vernetzt - KaDeWe, Wittenbergplatz und der Ku'damm sind nah, die Preise aber oft moderater als in Mitte.",
          "Der Kiez um die Motzstraße ist zudem Berlins traditionsreichstes queeres Viertel; entsprechend gibt es heterofriendly Designhotels mit eigenem Flair.",
        ],
      },
      {
        heading: "Welche Hotels lohnen sich hier?",
        body: [
          "Das Axel Hotel Berlin im Regenbogen-Kiez ist ein heterofriendly Designhotel mit Dachterrasse und Pool. Das große, traditionsreiche Hotel Berlin, Berlin am Rand des Tiergartens bietet Familienzimmer, Tagungsbereich und ein starkes Frühstücksbuffet - wenige Gehminuten vom KaDeWe.",
        ],
      },
      {
        heading: "Was macht das Tempelhofer Feld besonders?",
        body: [
          "Der ehemalige Flughafen Tempelhof ist heute eine riesige öffentliche Freifläche: Radfahren auf den alten Rollbahnen, Skaten, Drachensteigen, Urban Gardening und Picknicks. Eine der ungewöhnlichsten Berlin-Erfahrungen - und kostenlos.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Tempelhof-Schöneberg zentral?",
        a: "Ja, Schöneberg grenzt direkt an die City West und ist über U1, U2, U3 und U7 sehr gut angebunden. Mitte erreichst du in rund 20 Minuten.",
      },
      {
        q: "Was kostet ein Hotel hier?",
        a: "Solide Stadt- und Designhotels liegen meist bei 120–160 € pro Nacht, Budget-Optionen und Pensionen darunter.",
      },
      {
        q: "Eignet sich der Bezirk für Familien?",
        a: "Ja - das Tempelhofer Feld, Spielplätze und das familienfreundliche Hotel Berlin, Berlin machen ihn attraktiv. Die zentrale Lage erspart lange Wege.",
      },
      {
        q: "Was ist der Winterfeldtplatz?",
        a: "Ein lebendiger Platz in Schöneberg mit einem der beliebtesten Wochenmärkte Berlins (Mittwoch und Samstag) und vielen Cafés rundherum.",
      },
    ],
    gygQuery: "Tempelhofer Feld Berlin",
    related: [
      { label: "Alle Hotels in Tempelhof-Schöneberg", href: "/stadtteile/tempelhof-schoeneberg/" },
      { label: "Zentrale Hotels in Berlin", href: "/zentrale-hotels-berlin/" },
      { label: "Boutique-Hotels in Berlin", href: "/boutique-hotels-berlin-charme/" },
      { label: "Tempelhofer Feld", href: "/sehenswuerdigkeiten/tempelhofer-feld/" },
    ],
    adjacent: [
      { label: "Wo finde ich zentrale, faire Stadthotels?", href: "/zentrale-hotels-berlin/" },
      { label: "Welche Hotels sind besonders günstig?", href: "/budget-hotels-berlin/" },
      { label: "Hotels in Charlottenburg / City West", href: "/charlottenburg/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── NEUKÖLLN ─────────────────────────
  {
    slug: "neukoelln",
    title: "Preiswerte Hotels in Neukölln: übernachten im kreativen Kiez",
    description:
      "Günstige Hotels in Neukölln: budgetfreundliche und kreative Unterkünfte zwischen Maybachufer, Tempelhofer Feld und Rixdorf - Berlins spannendster Bezirk für junge Reisende.",
    kicker: "Bezirks-Guide · Berlin Süd",
    intro: [
      "Neukölln ist vielleicht der spannendste Bezirk im heutigen Berlin: arabische Hauptstraße, hippe Galerien, das Maybachufer und Kreativ-Cafés treffen hier aufeinander. Budgetfreundliche Häuser und Designhostels überwiegen.",
      "Wer das echte, ungeschönte und vielfältige Berlin sucht - und dabei sparen will - , ist in Neukölln richtig. Wir zeigen verifizierte Häuser und worauf du bei der Lage achten solltest.",
    ],
    takeaways: [
      "Neukölln ist hip, divers und günstiger als die klassischen Innenstadt-Kieze.",
      "Top für Foodies, junge Reisende und Berlin-Insider abseits der Touristenpfade.",
      "Das Tempelhofer Feld, der Klunkerkranich und das Maybachufer sind die Highlights.",
    ],
    bestFor: ["Budget-Reisende", "Foodies", "Junge Reisende", "Berlin-Insider"],
    districtSlug: "neukoelln",
    categorySlug: "billige-hotels",
    hotels: ["huettenpalast", "estrel-berlin"],
    sections: [
      {
        heading: "Lohnt sich Neukölln zum Übernachten?",
        body: [
          "Für preisbewusste, neugierige Reisende: absolut. Du wohnst mitten in einem lebendigen, multikulturellen Kiez mit Galerien, Bars, Spätis und einer der besten Streetfood-Szenen Berlins - zu Preisen unter denen der Touristen-Hotspots.",
          "Wer ruhige Eleganz oder klassisches Sightseeing vor der Tür will, ist anderswo besser aufgehoben; Neukölln punktet mit Atmosphäre und Authentizität.",
        ],
      },
      {
        heading: "Welche Unterkünfte sind besonders?",
        body: [
          "Der Hüttenpalast ist ein echtes Unikat: In einer ehemaligen Fabrikhalle übernachtest du in alten Wohnwagen und selbstgebauten Hütten - dazu klassische Zimmer und ein Café im Hof. Das riesige Estrel Berlin an der Sonnenallee ist Deutschlands größtes Convention-Hotel mit eigener Show-Bühne und gutem Preis-Leistungs-Verhältnis.",
        ],
      },
      {
        heading: "Was sollte man in Neukölln erleben?",
        body: [
          "Den türkischen Markt am Maybachufer (Dienstag und Freitag), Sundowner mit Skyline-Blick auf dem Klunkerkranich, das böhmische Rixdorf und die Café-Szene rund um den Körnerpark. Das Tempelhofer Feld grenzt direkt an.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Neukölln sicher?",
        a: "Die belebten Teile rund um Reuterkiez, Schillerkiez und Rixdorf gelten als sicher und sind abends gut besucht. Wie überall in Großstädten lohnt nachts ein wachsames Auge - der Kiez ist aber keineswegs gefährlich.",
      },
      {
        q: "Wie komme ich ins Zentrum?",
        a: "Mit der U7 und U8 sowie der Ringbahn bist du in 15–20 Minuten in Mitte oder am Alexanderplatz. Kreuzberg liegt direkt nebenan.",
      },
      {
        q: "Was kostet ein Hotel in Neukölln?",
        a: "Budget-Häuser und besondere Konzepte starten bei rund 95 €; das Estrel liegt bei etwa 110 € - bei für Berlin sehr hoher Zimmerzahl und guter Verfügbarkeit.",
      },
      {
        q: "Neukölln oder Kreuzberg - was ist besser?",
        a: "Kreuzberg ist etwas zentraler und stärker auf Nachtleben getrimmt, Neukölln günstiger und in Teilen noch ungeschliffener. Beide grenzen aneinander, du bist also schnell im jeweils anderen Kiez.",
      },
    ],
    gygQuery: "Maybachufer Tempelhofer Feld Berlin",
    related: [
      { label: "Alle Hotels in Neukölln", href: "/stadtteile/neukoelln/" },
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
      { label: "Ungewöhnliche & geheime Hotels", href: "/geheimtipp-hotels-berlin/" },
      { label: "Tempelhofer Feld", href: "/sehenswuerdigkeiten/tempelhofer-feld/" },
    ],
    adjacent: [
      { label: "Wo finde ich die kreativsten Unterkünfte Berlins?", href: "/geheimtipp-hotels-berlin/" },
      { label: "Welche Hotels liegen am Berliner Nachtleben?", href: "/berliner-nachtleben-hotels/" },
      { label: "Boutique-Hotels in Friedrichshain-Kreuzberg", href: "/friedrichshain/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── TREPTOW ─────────────────────────
  {
    slug: "treptow",
    title: "Seehotels in Treptow-Köpenick: übernachten am Wasser",
    description:
      "Seehotels in Treptow-Köpenick: Übernachten am Müggelsee und an der Spree mit Spa, Strandbad und Naturerlebnis - Berlins Wasser-Bezirk im Südosten.",
    kicker: "Bezirks-Guide · Berlin Südost",
    intro: [
      "Treptow-Köpenick ist Berlins Wasser-Bezirk: Müggelsee, Dahme und das Spreeufer prägen die Landschaft. Hier liegen Seehotels und Wellness-Resorts, dazu Treptower Park und der Plänterwald.",
      "Wer Erholung am Wasser, Wassersport und Natur mit dem Charme eines historischen Stadtkerns (Köpenick) verbinden will, findet im Südosten die entspannteste Berlin-Variante.",
    ],
    takeaways: [
      "Treptow-Köpenick ist die Wasser- und Wald-Ecke Berlins - ideal für Erholung.",
      "Der Müggelsee ist der größte See Berlins, mit Strandbad und Bootsverleih.",
      "Perfekt für Wellness-Reisende, Wassersportler und naturverbundene Familien.",
    ],
    bestFor: ["Wellness-Reisende", "Wassersportler", "Familien", "Erholungssuchende"],
    districtSlug: "treptow-koepenick",
    categorySlug: "wellness-hotels",
    hotels: ["hotel-mueggelsee-berlin"],
    sections: [
      {
        heading: "Für wen lohnt sich ein Seehotel im Südosten?",
        body: [
          "Für alle, die Erholung über kurze Sightseeing-Wege stellen: Du schläfst am See, schwimmst morgens, gehst Spazieren oder paddeln und genießt abends den Blick aufs Wasser. Eine echte Auszeit innerhalb der Stadtgrenzen.",
          "Für klassisches Innenstadt-Programm ist die Fahrzeit (rund 40 Minuten nach Mitte) einzuplanen - dafür bekommst du Ruhe und Natur, die kein zentraler Bezirk bietet.",
        ],
      },
      {
        heading: "Welches Hotel empfehlen wir am Wasser?",
        body: [
          "Das Hotel Müggelsee Berlin liegt mit 174 Zimmern direkt am größten See der Stadt - mit eigenem Strandbad, großem Spa-Bereich und Restaurant mit Seeblick. Ein beliebter Wellness- und Wochenendspot auch bei den Berlinern selbst.",
        ],
      },
      {
        heading: "Was kann man in Treptow-Köpenick unternehmen?",
        body: [
          "Baden und Bootfahren am Müggelsee, der Aufstieg auf den Müggelturm, ein Bummel durch die historische Köpenicker Altstadt mit Schloss, Schiffstouren auf Spree und Dahme sowie Spaziergänge im Treptower Park und Plänterwald.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie weit ist Treptow-Köpenick vom Zentrum entfernt?",
        a: "Der Müggelsee liegt im äußersten Südosten, rund 40 Minuten mit S-Bahn (S3) und Tram/Bus von Mitte. Treptow selbst (Treptower Park) ist deutlich näher am Zentrum.",
      },
      {
        q: "Was kostet ein Seehotel hier?",
        a: "Das Hotel Müggelsee startet bei rund 135 € pro Nacht - für ein Haus mit Spa und Seelage ein faires Niveau.",
      },
      {
        q: "Ist der Bezirk gut für Familien?",
        a: "Sehr - Strandbad, Bootsverleih, Wälder und das Strandbad Müggelsee machen ihn zum idealen Familien- und Sommerziel.",
      },
      {
        q: "Kann man hier Wassersport machen?",
        a: "Ja: Schwimmen, Stand-up-Paddling, Segeln und Bootstouren sind am Müggelsee und auf der Dahme gut möglich; mehrere Verleihe liegen am Ufer.",
      },
    ],
    gygQuery: "Müggelsee Köpenick Berlin",
    related: [
      { label: "Alle Hotels in Treptow-Köpenick", href: "/stadtteile/treptow-koepenick/" },
      { label: "Wellness- & Spa-Hotels in Berlin", href: "/wellness-spa-hotels-berlin/" },
      { label: "Ruhige Hotels in Steglitz-Zehlendorf", href: "/steglitz/" },
      { label: "Müggelsee entdecken", href: "/sehenswuerdigkeiten/muggelsee/" },
    ],
    adjacent: [
      { label: "Welche Hotels haben den besten Spa?", href: "/wellness-spa-hotels-berlin/" },
      { label: "Wo übernachtet man ruhig im Grünen?", href: "/steglitz/" },
      { label: "Familienfreundliche Hotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── MARZAHN ─────────────────────────
  {
    slug: "marzahn",
    title: "Budget-Hotels in Marzahn-Hellersdorf: günstig im Osten übernachten",
    description:
      "Günstige Hotels in Marzahn-Hellersdorf: sehr preiswerte Unterkünfte im Berliner Osten mit solider S-/U-Bahn-Anbindung und den Gärten der Welt als Highlight.",
    kicker: "Bezirks-Guide · Berlin Ost",
    intro: [
      "Marzahn-Hellersdorf ist Berlins Plattenbau-Bezirk im Osten - aber auch Heimat der „Gärten der Welt“, einem der schönsten Parks der Stadt. Hotels sind hier sehr preiswert, die Anbindung zur Innenstadt mit S- und U-Bahn solide.",
      "Für sehr budgetbewusste Reisende und Familien mit Interesse an den Gärten ist der Bezirk eine ehrliche, günstige Basis. Wir zeigen, was du erwarten kannst.",
    ],
    takeaways: [
      "Marzahn-Hellersdorf gehört zu den günstigsten Übernachtungsgegenden Berlins.",
      "Die „Gärten der Welt“ mit Seilbahn und Aussichtspunkt sind das große Highlight.",
      "Mit der U5 und der S-Bahn (S7) bist du ohne Umsteigen in der Innenstadt.",
    ],
    bestFor: ["Sehr budgetbewusste Reisende", "Familien mit Garten-Interesse", "Längere Aufenthalte"],
    districtSlug: "marzahn-hellersdorf",
    categorySlug: "billige-hotels",
    hotels: ["ibis-budget-berlin-hellersdorf"],
    sections: [
      {
        heading: "Lohnt sich ein Hotel in Marzahn-Hellersdorf?",
        body: [
          "Wenn der Preis das wichtigste Kriterium ist: ja. Hier bekommst du saubere, funktionale Zimmer zu den niedrigsten Preisen Berlins. Für Sightseeing in Mitte rechne mit rund 30–40 Minuten Fahrt mit U- oder S-Bahn.",
          "Ein zweiter guter Grund sind die „Gärten der Welt“ - wer den Park gezielt besuchen will, wohnt hier ideal.",
        ],
      },
      {
        heading: "Welches Hotel ist verifiziert empfehlenswert?",
        body: [
          "Das ibis budget Berlin Hellersdorf bietet frisch renovierte, funktionale Zimmer ab rund 49 € pro Nacht - mit kostenlosem WLAN und U5-Anschluss in Gehnähe. Für preisbewusste Reisende, die vor allem ein sauberes Bett und gute Anbindung wollen, ist das eine ehrliche Wahl.",
        ],
      },
      {
        heading: "Was kann man in der Umgebung unternehmen?",
        body: [
          "Allen voran die „Gärten der Welt“ mit chinesischem, japanischem, balinesischem und orientalischem Garten, Seilbahn und dem Aussichtsberg Kienberg. Dazu Schloss Biesdorf, das Wuhletal zum Wandern und das Einkaufszentrum Eastgate.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie weit ist Marzahn-Hellersdorf vom Zentrum?",
        a: "Rund 12–15 Kilometer östlich. Mit U5 oder S7 erreichst du Alexanderplatz und Mitte in etwa 30–40 Minuten.",
      },
      {
        q: "Was kostet ein Hotel hier?",
        a: "Budget-Häuser starten bei rund 49 € pro Nacht - günstiger geht es in Berlin kaum.",
      },
      {
        q: "Lohnt sich der Bezirk für Familien?",
        a: "Vor allem wegen der „Gärten der Welt“ und der großzügigen Grünflächen. Die Wege ins Zentrum sind allerdings länger.",
      },
      {
        q: "An welchen Wochentagen sind Hotels am günstigsten?",
        a: "Wie überall in Berlin meist unter der Woche und in der Nebensaison. Bei diesen ohnehin niedrigen Preisen ist der Spielraum aber kleiner als in der Innenstadt.",
      },
    ],
    gygQuery: "Gärten der Welt Berlin",
    related: [
      { label: "Alle Hotels in Marzahn-Hellersdorf", href: "/stadtteile/marzahn-hellersdorf/" },
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
      { label: "Billige Hotels - Bezirke im Vergleich", href: "/kategorien/billige-hotels/" },
      { label: "Günstige Hotels in Spandau", href: "/spandau/" },
    ],
    adjacent: [
      { label: "Wo finde ich Hotels unter 60 € pro Nacht?", href: "/budget-hotels-berlin/" },
      { label: "Welche Bezirke sind am günstigsten?", href: "/kategorien/billige-hotels/" },
      { label: "Hotels im Berliner Osten - Lichtenberg", href: "/lichtenberg/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── LICHTENBERG ─────────────────────────
  {
    slug: "lichtenberg",
    title: "Hotels in Lichtenberg: gut angebunden und preiswert im Berliner Osten",
    description:
      "Hotels in Lichtenberg: faire Business- und Mittelklasse-Häuser im Berliner Osten mit guter Anbindung, Tierpark und Stasimuseum - starkes Preis-Leistungs-Verhältnis.",
    kicker: "Bezirks-Guide · Berlin Ost",
    intro: [
      "Lichtenberg liegt im Berliner Osten, gut angebunden an Mitte und zugleich günstiger. Tierpark, Stasimuseum und die Rummelsburger Bucht sind die Anker; die Hotels sind oft Business- oder Mittelklasse-orientiert mit gutem Preis-Leistungs-Verhältnis.",
      "Wer zentral genug, aber günstiger als in der Innenstadt wohnen will - und Wert auf schnelle Verbindungen legt - , findet hier eine bodenständige, faire Basis.",
    ],
    takeaways: [
      "Lichtenberg ist preiswerter als die Innenstadt, aber sehr gut angebunden.",
      "Stark für Geschäftsreisende und preisbewusste Städtereisende.",
      "Highlights: Tierpark Berlin, Stasimuseum und die Rummelsburger Bucht am Wasser.",
    ],
    bestFor: ["Geschäftsreisende", "Preisbewusste Städtereisende", "Familien"],
    districtSlug: "lichtenberg",
    categorySlug: "business-hotels",
    hotels: ["h2-hotel-alexanderplatz", "park-inn-alexanderplatz"],
    sections: [
      {
        heading: "Warum in Lichtenberg übernachten?",
        body: [
          "Wegen der Kombination aus Preis und Anbindung: Lichtenberg liegt direkt östlich von Friedrichshain, ist mit S-Bahn, Tram und Regionalzug (Bahnhof Lichtenberg) bestens vernetzt und deutlich günstiger als die Innenstadt.",
          "Der Bezirk ist bodenständig und unprätentiös - ideal für Geschäftsreisende und alle, die ein faires Zimmer mit kurzen Wegen ins Zentrum suchen. Da die Auswahl direkt in Lichtenberg überschaubar ist, lohnt der Blick auf gut angebundene Häuser im angrenzenden Mitte/Alexanderplatz-Bereich.",
        ],
      },
      {
        heading: "Was kann man in Lichtenberg unternehmen?",
        body: [
          "Der Tierpark Berlin ist mit 160 Hektar einer der größten Landschaftstierparks Europas. Dazu kommen das Stasimuseum in der ehemaligen MfS-Zentrale, Schloss Friedrichsfelde und die aufstrebende Rummelsburger Bucht mit Wasserlage.",
        ],
      },
      {
        heading: "Für wen ist der Bezirk nichts?",
        body: [
          "Wer klassisches Sightseeing direkt vor der Tür erwartet oder gehobenen Luxus sucht, ist in Mitte oder Charlottenburg besser aufgehoben. Lichtenberg ist Alltags-Berlin: praktisch, günstig, gut vernetzt - aber kein Touristen-Hotspot.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie gut ist Lichtenberg ans Zentrum angebunden?",
        a: "Sehr gut. Mit der S-Bahn (S5, S7, S75) und Tram bist du in rund 15 Minuten am Alexanderplatz. Der Bahnhof Lichtenberg ist zudem ein wichtiger Regional- und Fernbahn-Halt.",
      },
      {
        q: "Was kostet ein Hotel in Lichtenberg?",
        a: "Business- und Mittelklasse-Häuser liegen meist bei 80–130 € pro Nacht - günstiger als vergleichbare Häuser in Mitte.",
      },
      {
        q: "Lohnt sich Lichtenberg für Familien?",
        a: "Ja, vor allem wegen des Tierparks. Die gute ÖPNV-Anbindung und faire Preise sprechen ebenfalls für den Bezirk.",
      },
      {
        q: "Ist Lichtenberg sicher?",
        a: "Die Wohn- und Hotelgegenden gelten als sicher und ruhig. Wie überall lohnt nachts an Bahnhöfen ein normales Maß an Aufmerksamkeit.",
      },
    ],
    gygQuery: "Tierpark Stasimuseum Berlin",
    related: [
      { label: "Alle Hotels in Lichtenberg", href: "/stadtteile/lichtenberg/" },
      { label: "Hotels für Geschäftsreisen in Berlin", href: "/geschaeftsreisen-hotels-berlin/" },
      { label: "Business Hotels - Bezirke im Vergleich", href: "/kategorien/business-hotels/" },
      { label: "Günstige Hotels in Berlin", href: "/budget-hotels-berlin/" },
    ],
    adjacent: [
      { label: "Welche Hotels sind ideal für Geschäftsreisen?", href: "/geschaeftsreisen-hotels-berlin/" },
      { label: "Wo finde ich günstige, gut angebundene Hotels?", href: "/budget-hotels-berlin/" },
      { label: "Budget-Hotels in Marzahn-Hellersdorf", href: "/marzahn/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── REINICKENDORF ─────────────────────────
  {
    slug: "reinickendorf",
    title: "Hotels in Reinickendorf: ruhig im grünen Norden, nah am Tegeler See",
    description:
      "Hotels in Reinickendorf: ruhige Familien- und Mittelklasse-Häuser im grünen Berliner Norden am Tegeler See - mit der U6 in 20 Minuten in Mitte.",
    kicker: "Bezirks-Guide · Berlin Nord",
    intro: [
      "Reinickendorf liegt im Berliner Norden - Tegeler See, Tegeler Forst und Frohnau. Hier wohnt man ruhig im Grünen und ist trotzdem in rund 20 Minuten mit der U6 in Mitte. Mittelklasse- und Familienhotels prägen den Bezirk.",
      "Hinweis: Der frühere Flughafen Tegel (TXL) ist seit 2020 geschlossen - Berlins Airport ist heute BER im Südosten. Reinickendorf punktet stattdessen mit Natur, Wasser und ruhigen Wohnlagen.",
    ],
    takeaways: [
      "Reinickendorf ist grün, ruhig und mit der U6 schnell mit Mitte verbunden.",
      "Ideal für Familien, Ruhesuchende und Reisende mit Auto.",
      "Der Flughafen Tegel ist seit 2020 geschlossen - heute fliegst du ab BER.",
    ],
    bestFor: ["Familien", "Ruhesuchende", "Reisende mit Auto", "Naturfreunde"],
    districtSlug: "reinickendorf",
    categorySlug: "familienhotels",
    hotels: ["best-western-am-borsigturm"],
    sections: [
      {
        heading: "Für wen lohnt sich Reinickendorf?",
        body: [
          "Für Familien und ruhebedürftige Reisende, die im Grünen wohnen, aber schnell ins Zentrum wollen. Mit der U6 erreichst du Mitte in rund 20 Minuten; rundherum locken Tegeler See und Tegeler Forst.",
          "Auch für Reisende mit Auto ist der Norden entspannt - Parkplätze sind hier deutlich leichter zu finden als in der Innenstadt.",
        ],
      },
      {
        heading: "Welches Hotel empfehlen wir?",
        body: [
          "Das Best Western Hotel am Borsigturm liegt im sanierten Borsigwerke-Areal, einem historischen Industriedenkmal, und bietet Pool, Sauna und Tagungsbereich. Über die U6 (Station Borsigwerke) bist du in etwa 25 Minuten am Alexanderplatz - eine solide, familienfreundliche Wahl mit gutem Preis-Leistungs-Verhältnis.",
        ],
      },
      {
        heading: "Was kann man im Berliner Norden unternehmen?",
        body: [
          "Spaziergänge und Bootsfahrten am Tegeler See, Wandern im Tegeler Forst, ein Abstecher zum Schloss Tegel und zur Frohnauer Pagode. Im Sommer ist der Norden ein entspanntes Naherholungsgebiet abseits der Touristenströme.",
        ],
      },
    ],
    faq: [
      {
        q: "Gibt es noch Flughafen-Hotels in Reinickendorf?",
        a: "Der Flughafen Tegel (TXL) ist seit November 2020 geschlossen; das Areal wird zur „Urban Tech Republic“ umgebaut. Wer ein flughafennahes Hotel sucht, sollte heute Richtung BER im Südosten Berlins buchen.",
      },
      {
        q: "Wie komme ich von Reinickendorf ins Zentrum?",
        a: "Mit der U6 erreichst du Mitte in rund 20 Minuten, der Alexanderplatz ist über Umstieg in etwa 25–30 Minuten erreichbar.",
      },
      {
        q: "Was kostet ein Hotel in Reinickendorf?",
        a: "Familien- und Mittelklasse-Häuser liegen meist bei rund 95–130 € pro Nacht - fair für ein ruhiges Zimmer im Grünen.",
      },
      {
        q: "Eignet sich der Bezirk für Familien?",
        a: "Ja - ruhig, grün, am Wasser und mit familienfreundlichen Häusern (Pool, Sauna). Die gute U-Bahn-Anbindung macht Ausflüge ins Zentrum einfach.",
      },
    ],
    gygQuery: "Tegeler See Berlin",
    related: [
      { label: "Alle Hotels in Reinickendorf", href: "/stadtteile/reinickendorf/" },
      { label: "Familienfreundliche Hotels in Berlin", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Familienhotels - Bezirke im Vergleich", href: "/kategorien/familienhotels/" },
      { label: "Hotels in Pankow (Familie)", href: "/pankow/" },
    ],
    adjacent: [
      { label: "Welche Hotels sind ideal für Familien?", href: "/familienfreundliche-hotels-berlin/" },
      { label: "Wo übernachtet man ruhig im Grünen?", href: "/steglitz/" },
      { label: "Hotels mit guter Auto-Anbindung in Spandau", href: "/spandau/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },

  // ───────────────────────── POTSDAM ─────────────────────────
  {
    slug: "potsdam",
    title: "Potsdam & Sanssouci: Tagesausflug und Übernachten vor den Toren Berlins",
    description:
      "Potsdam mit Schloss Sanssouci als Tagesausflug ab Berlin: Park, Schlösser und Anreise - plus ruhige Hotels im grünen Berliner Südwesten als Basis.",
    kicker: "Ausflugs-Guide · Brandenburg",
    intro: [
      "Potsdam liegt direkt vor den Toren Berlins und ist mit dem Park Sanssouci, den Schlössern und dem Holländischen Viertel eines der lohnendsten Tagesausflugsziele der Region - in rund 40 Minuten mit der S-Bahn (S7) erreichbar.",
      "Wer Potsdam in Ruhe erleben will, übernachtet im grünen Berliner Südwesten (Steglitz-Zehlendorf) oder direkt in Potsdam. Wir zeigen die Highlights und die beste Basis dafür.",
    ],
    takeaways: [
      "Potsdam ist der schönste Tagesausflug ab Berlin - mit der S7 in rund 40 Minuten.",
      "Schloss und Park Sanssouci gehören zum UNESCO-Welterbe.",
      "Als Basis eignet sich der ruhige Berliner Südwesten (Wannsee, Grunewald, Dahlem).",
    ],
    bestFor: ["Kultur-Fans", "Tagesausflügler", "Ruhesuchende", "Paare"],
    districtSlug: "steglitz-zehlendorf",
    categorySlug: "charmante-hotels",
    hotels: ["patrick-hellmann-schlosshotel", "harnack-haus"],
    sections: [
      {
        heading: "Was muss man in Potsdam gesehen haben?",
        body: [
          "Allen voran Schloss und Park Sanssouci - die einstige Sommerresidenz Friedrichs des Großen mit den berühmten Weinbergterrassen. Dazu das Neue Palais, der Park mit seinen Wasserspielen, das Holländische Viertel und die Russische Kolonie Alexandrowka.",
        ],
        bullets: [
          "Park Sanssouci mit den Weinbergterrassen und dem Schloss.",
          "Das Neue Palais am westlichen Parkende.",
          "Holländisches Viertel und Alexandrowka für einen Bummel.",
        ],
      },
      {
        heading: "Wie kommt man von Berlin nach Potsdam?",
        body: [
          "Am einfachsten mit der S-Bahn-Linie S7 bis Potsdam Hauptbahnhof (rund 40 Minuten ab Mitte), von dort weiter mit Tram/Bus zum Park. Auch Regionalzüge (RE1) fahren schnell. Ein Tagesticket Berlin ABC deckt die Fahrt ab.",
        ],
      },
      {
        heading: "Wo übernachtet man am besten für einen Potsdam-Besuch?",
        body: [
          "Wer mit dem Schloss-Besuch eine ruhige Übernachtung verbinden will, wohnt ideal im grünen Berliner Südwesten - etwa im Patrick Hellmann Schlosshotel im Grunewald oder im charmanten Harnack-Haus in Dahlem. Von dort ist Potsdam in kurzer Zeit erreichbar, und du genießt abends die Ruhe von Wald und Seen.",
        ],
      },
    ],
    faq: [
      {
        q: "Lohnt sich Potsdam als Tagesausflug von Berlin?",
        a: "Unbedingt. Park und Schloss Sanssouci, das Holländische Viertel und die Seenlandschaft lassen sich gut an einem Tag erleben - die Anreise dauert nur rund 40 Minuten.",
      },
      {
        q: "Gehört Potsdam zu Berlin?",
        a: "Nein. Potsdam ist die Landeshauptstadt Brandenburgs und grenzt im Südwesten direkt an Berlin. Mit der S-Bahn ist es aber so gut angebunden wie ein Außenbezirk.",
      },
      {
        q: "Kostet der Park Sanssouci Eintritt?",
        a: "Der Park selbst ist frei zugänglich (eine Spende wird erbeten); für die Innenbesichtigung der Schlösser gibt es Tickets, die in der Hauptsaison schnell ausgebucht sind - am besten vorab online buchen.",
      },
      {
        q: "Wann ist die beste Zeit für Sanssouci?",
        a: "Frühling bis Frühherbst, wenn der Park in voller Blüte steht. Früh am Tag ist es ruhiger; an Wochenenden im Sommer wird es voll.",
      },
    ],
    gygQuery: "Sanssouci Potsdam",
    related: [
      { label: "Ruhige Hotels in Steglitz-Zehlendorf", href: "/steglitz/" },
      { label: "Alle Berliner Reiseplaner", href: "/reiseplaner/" },
      { label: "Charmante Hotels in Berlin", href: "/kategorien/charmante-hotels/" },
      { label: "Wannsee & Glienicker Brücke", href: "/sehenswuerdigkeiten/wannsee/" },
    ],
    adjacent: [
      { label: "Welche Hotels liegen ruhig im Grünen?", href: "/steglitz/" },
      { label: "Was kann man in Berlin bei Regen machen?", href: "/reiseplaner/berlin-bei-regen/" },
      { label: "3 Tage Berlin - der perfekte Plan", href: "/reiseplaner/3-tage-berlin/" },
    ],
    datePublished: PUB,
    dateModified: MOD,
  },
];
