/**
 * guest-posts.ts — übernommene Gastbeiträge (bezahlte Backlink-Artikel).
 * ----------------------------------------------------------------------
 * WICHTIG: Diese Beiträge bleiben unter ihrer EXAKTEN alten URL online und
 * behalten ihren dofollow-Outbound-Link UNVERÄNDERT. Inhalt wird originalgetreu
 * übernommen, NICHT umgeschrieben. Kein noindex, keine nofollow/sponsored-Rels
 * an den Geld-Links — sonst stirbt der bezahlte Backlink-Service.
 *
 * Outbound-Links (dofollow, exakt wie im Original):
 *  - reisehighlights-in-japan        → djoser.de/rundreise-japan  (Anchor: "rundreise japan")
 *  - …hochzeitsplanung               → rent-a-pastor.com (Anchor: "budget"),
 *                                       schlossneuhaus.com (Anchor: "corporate party")
 *  - trockenblumen-details           → love-flowerbox.de/trockenblumen
 *  - probleme-beim-schlafen-…        → biocbd.de (Anchor: "CBD Tropfen")
 */

export type GuestBlock = { type: "h2" | "h3" | "p"; html: string };

export type GuestPostImage = { src: string; alt: string; credit?: string };

export type GuestPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  /** Optionales Titelbild (Hero). */
  image?: GuestPostImage;
  blocks: GuestBlock[];
};

export const guestPosts: GuestPost[] = [
  {
    slug: "reisehighlights-in-japan",
    title: "Internationale Reisehighlights in Japan",
    description:
      "Reisehighlights in Japan: Tokio und Kyoto, japanische Küche, Tempel, Gärten und der effiziente Nahverkehr - ein Überblick für die Reiseplanung.",
    datePublished: "2024-11-01",
    dateModified: "2024-11-01",
    image: {
      src: "/images/reisehighlights-in-japan.jpg",
      alt: "Das schwimmende Torii des Itsukushima-Schreins bei Miyajima, Japan, im Wasser stehend",
      credit: "Foto: Balon Greyjoy / Wikimedia Commons (CC0)",
    },
    blocks: [
      { type: "p", html: "Im Osten Asiens befindet sich Japan, ein Land, das für seine Mischung aus alten Traditionen und moderner Innovation bekannt ist und dessen Kultur sowohl Handwerkskunst als auch lebendiges urbanes Leben schätzt. Japan bietet viele Orte und Aktivitäten, die für Reisende attraktiv sind und einen Einblick in die faszinierende Kultur, Geschichte und das tägliche Leben des Landes gewähren. Neben den bekannten Städten wie Tokio und Kyoto gibt es kulinarische Erlebnisse, spirituelle Stätten und sorgfältig gestaltete Gärten, die das Bild des Landes vervollständigen. Dieser Überblick stellt internationale Reisehighlights vor, die Besucher während eines Aufenthalts in Japan erleben können." },
      { type: "h2", html: "Die Hauptstadt Tokio entdecken" },
      { type: "p", html: "Tokio ist eine Stadt, in der moderne Entwicklungen und historische Elemente nebeneinander existieren. Bekannte Stadtteile wie Akihabara, Harajuku und Shibuya bieten jeweils eine Vielzahl von Einkaufs- und Freizeitmöglichkeiten. Ein Besuch des Tokyo Tower bietet bei klarem Wetter einen Blick auf den Mount Fuji. Parks, Gärten, Museen und Tempel gehören ebenfalls zur städtischen Landschaft. Auf dem Toyosu-Fischmarkt können Besucher zusehen, wie große Thunfische verarbeitet und verschiedene Meeresfrüchte zum Verkauf angeboten werden. Jede dieser Aktivitäten zeigt verschiedene Aspekte der Metropole und ihrer Menschen." },
      { type: "h2", html: "Kyoto als Kulturzentrum" },
      { type: "p", html: "Die ehemalige Hauptstadt Kyoto ist bekannt für ihre vielen historischen Gebäude. Das Stadtzentrum bietet Geschäfte und Restaurants sowie traditionelle Straßen. Bedeutende Sehenswürdigkeiten wie der Goldene Pavillon, der Fushimi Inari-Schrein und der Philosophenweg gehören zu den bekanntesten Attraktionen. Das Gion-Viertel ist bekannt für Begegnungen mit Geishas und Maikos, die auf einer <a href=\"https://www.djoser.de/rundreise-japan/\">rundreise japan</a> oft zu sehen sind. Kyoto beherbergt außerdem viele UNESCO-Weltkulturerbestätten, die den Besuchern einen umfassenden Blick auf die kulturelle Geschichte des Landes bieten." },
      { type: "h2", html: "Die Vielfalt der japanischen Küche" },
      { type: "p", html: "Die japanische Küche umfasst Gerichte, die sowohl traditionelle als auch moderne Einflüsse vereinen. Sushi und Sashimi sind weit bekannt, aber auch Udon-Nudeln und die Nationalgericht Misosuppe gehören zu den Grundlagen vieler Mahlzeiten. Urbane Restaurants und Straßenstände bieten eine Vielzahl kulinarischer Optionen. Kobe-Rind, regionale Rezepte und moderne Interpretationen sind neben klassischen Gerichten erhältlich. Die Bedeutung der Esskultur wird durch die Tatsache unterstrichen, dass Tokio zu den Städten mit der höchsten Anzahl an Michelin-Sternen weltweit gehört." },
      { type: "h2", html: "Effizienter öffentlicher Nahverkehr" },
      { type: "p", html: "Sich in Japan fortzubewegen, kann selbst ein Erlebnis sein, dank eines Verkehrssystems, das sowohl effizient als auch gut durchdacht ist. Das Land ist bekannt für sein gut entwickeltes öffentliches Verkehrsnetz, das besonders sehr pünktlich ist. Fernzüge, U-Bahnen und Busse fahren regelmäßig und bieten eine zuverlässige Möglichkeit, verschiedene Regionen zu erreichen. Züge sind oft ruhig, und viele Fahrgäste nutzen die Zeit, um zu arbeiten oder sich auszuruhen. Der Shinkansen, Japans schnellster Zug, verbindet große Städte mit Geschwindigkeiten von bis zu 360 km/h. Die Sauberkeit der Stationen und Fahrzeuge trägt ebenfalls zu einem angenehmen Reiseerlebnis bei." },
      { type: "h2", html: "Tempel und Schreine besuchen" },
      { type: "p", html: "Tempel und Schreine sind ein bedeutender Teil des kulturellen Erbes Japans. Der Meiji-Schrein in Tokio ist von einem großen Park umgeben und wird für Zeremonien und Besuche genutzt. Kyoto beherbergt zahlreiche buddhistische Tempel und Shinto-Schreine, darunter den Ryoan-ji-Tempel mit seinem bekannten Zen-Garten. Auf der Insel Miyajima ist das leuchtend orange Torii ein markanter Anblick. Je nach Gezeiten verändert sich der Zugang zu dieser Stätte, was für Besucher ein interessantes Detail darstellt." },
      { type: "h2", html: "Parks und Gärten als Rückzugsorte" },
      { type: "p", html: "Japanische Parks und Gärten bieten einen Kontrast zur städtischen Umgebung. Viele dieser Räume sind Teil historischer Gebäude oder Tempelanlagen. Wassermerkmale, sorgfältig angeordnete Pflanzen und traditionelle Strukturen prägen ihr Erscheinungsbild. Der Garten des Eikando-Tempels in Kyoto ist ein Beispiel für eine kleinere Anlage, die dennoch viele typische Elemente des japanischen Gartendesigns zeigt. Solche Orte bieten eine Gelegenheit, vom Stadtleben innezuhalten und mehr über die Landschaftstraditionen des Landes zu erfahren." },
      { type: "h2", html: "Fazit" },
      { type: "p", html: "Japan bietet eine breite Palette an Erlebnissen, die den Reisenden einen umfassenden Blick auf das Land ermöglichen. Städte wie Tokio und Kyoto, die Küche, das öffentliche Verkehrssystem, spirituelle Stätten sowie Parks und Gärten tragen zu einer abwechslungsreichen Reiseerfahrung bei. Die Einbeziehung dieser Elemente in die Reiseplanung ermöglicht es den Besuchern, verschiedene Aspekte des Landes zu entdecken und miteinander zu verbinden." },
    ],
  },

  {
    slug: "die-ultimative-checkliste-fuer-die-hochzeitsplanung",
    title: "Die ultimative Checkliste für die Hochzeitsplanung",
    description:
      "Die ultimative Checkliste für die Hochzeitsplanung: Budget festlegen, Gästeliste erstellen, Planer engagieren, Location wählen - Schritt für Schritt zur Traumhochzeit.",
    datePublished: "2024-03-01",
    dateModified: "2024-03-01",
    blocks: [
      { type: "h2", html: "12 Monate im Voraus" },
      { type: "h3", html: "Budget festlegen" },
      { type: "p", html: "Now it’s time to do the math and crunch some not-so-fun numbers. Before you can start planning, you need to figure out who’s paying for what and determine the cost of your wedding. Then, break down your budget - what’s a priority? What’s not? - and start allocating funds accordingly. (A little market research goes a long way here.) And since these numbers will change as you plan, it’s a good idea to create a detailed spreadsheet from the start. This way, you can keep track of your expenses and easily adjust the numbers over time." },
      { type: "h3", html: "Gästeliste erstellen" },
      { type: "h3", html: "Hochzeitsplaner engagieren" },
      { type: "p", html: "Again, it depends on your <a href=\"https://rent-a-pastor.com/kalkulator-online-hochzeits-budgetplaner-geld-kosten-freie-trauung-hochzeit/\">budget</a>. (Fair warning: A lot of it depends.) But if your budget allows - or if your peace of mind depends on it - now is the time to hire your big day manager. This person will be your right-hand man (or woman) and will guide you through every decision, from choosing the venue to monitoring the budget to handling all the logistics." },
      { type: "h3", html: "Formalitäten und Gesamtthema festlegen" },
      { type: "p", html: "Now it’s time to sit down with your partner and have another heart-to-heart talk. After all, the vibe of your wedding needs to be a joint decision between the two guests of honor. To get the conversation started, pour a glass of wine/water/tea and ask yourself: What’s important to you and why? What do you value? Also, consider that your venue - more on that below - will influence all of this." },
      { type: "h3", html: "Location auswählen" },
      { type: "p", html: "Okay, so you know who you’re marrying. Now the only question is, where? Trust us: Choosing a venue is one of the most important decisions you’ll make at this moment. The location influences almost everything else, from the number of guests invited to the type of flowers on the table. Whether you are planning an intimate wedding or a <a href=\"https://www.schlossneuhaus.com/eventlocation-firmenfeier/\">corporate party</a>, the right venue sets the tone for the entire event - so explore your options early and book in good time." },
    ],
  },

  {
    slug: "trockenblumen-details",
    title: "Trockenblumen Details",
    description:
      "Trockenblumen mit Liebe zum Detail: handgebundene Sträuße, hochwertige Qualität und wie aus einer Leidenschaft ein internationales E-Commerce-Geschäft wurde.",
    datePublished: "2024-04-01",
    dateModified: "2024-04-01",
    blocks: [
      { type: "h2", html: "Jeder Strauß wird von Hand gebunden" },
      { type: "p", html: "Wir sind derzeit Marktführer und liefern direkt an die Verbraucher. Aber das ist uns nicht genug; ab September werden unsere Trockensträuße auch in den meisten Luxushändlern erhältlich sein. Wir wollen überall Trockenblumen anbieten können, aber mit absolut einer Grundregel: Es muss Love sein, also immer etwas Besonderes! Die <a href=\"https://www.love-flowerbox.de/trockenblumen/\">Trockenblumensträuße von Love Flowerbox</a> stehen genau für dieses Versprechen." },
      { type: "p", html: "Dieses Always-Special-Gefühl finden Sie auf der Website und in den Social Spots. Sobald wir wieder fliegen durften, fuhren wir ins schöne Málaga, Spanien, zu einem Fotoshooting. Ich wollte auch, dass Carmen das Gesicht ihrer eigenen Firma wird, und genau das haben wir getan; ein luxuriöser Auftritt mit Leidenschaft und Farbe, gelegentlich rebellisch. Ich wollte die getrockneten Blumen mit einem Schlag aus ihrem alten Bild herausziehen." },
      { type: "h3", html: "Top-Designer und Elektro-Rebell" },
      { type: "p", html: "Bei allem gebührenden Respekt für die Heimwerker, ein blühendes E-Commerce-Geschäft zu führen, ist wirklich eine andere Geschichte. Wir arbeiten nur mit Partnern auf ‚Champions-League-Niveau‘ zusammen. Das gibt Ihnen die Macht, die Welt zu erobern. Das ist wieder einmal unsere große Herausforderung, aber die Liebe und Aufmerksamkeit zum Detail bleibt! Jeder Strauß wird doppelt geprüft." },
      { type: "p", html: "Ich sehe auch Blumensträuße von Kollegen angewidert, ich finde die Einzelhandelssträuße schade. Warum wird nicht auf Qualität geachtet, selbst dann ist es möglich, eine preisbewusste Variante herzustellen und zu verkaufen? Das haben wir getan, und zwar mit Erfolg!" },
      { type: "h2", html: "Wie geht es weiter?" },
      { type: "p", html: "Der Trockenblumen-Trend wird in 2 Jahren tot sein. Und was machen Sie dann! Was kommt als Nächstes? Das ist bereits darüber nachzudenken, wie Sie die Bedürfnisse Ihrer Kunden weiterhin erfüllen können. Schließlich können Sie bei einem E-Commerce-Unternehmen genau sehen, wer Ihre Kunden sind. Unser Ziel ist einfach: Wir wollen unsere Kunden glücklich machen! Wir sind entschlossen, daraus einen großen internationalen Erfolg zu machen. Wer hilft uns dabei?" },
    ],
  },

  {
    slug: "probleme-beim-schlafen-10-tipps-die-helfen-koennen",
    title: "Probleme beim Schlafen? 10 Tipps, die helfen können",
    description:
      "Probleme beim Schlafen? 10 praktische Tipps, die beim Ein- und Durchschlafen helfen können - von Routine und Atmung bis zur entspannenden Schlafumgebung.",
    datePublished: "2024-05-01",
    dateModified: "2024-05-01",
    blocks: [
      { type: "p", html: "Mein ganzes Leben lang hatte ich Schwierigkeiten, einzuschlafen und durchzuschlafen. Vielleicht kannst du dich damit identifizieren? Wenn du dich nicht mehr daran erinnern kannst, wann du das letzte Mal aufgewacht bist und dich ausgeruht und erfrischt gefühlt hast, bekommst du wahrscheinlich keinen guten Schlaf. Und schlechter Schlaf kann seinen Tribut fordern, was unter anderem zu Müdigkeit, verminderter Funktionsfähigkeit, Gedächtnisstörungen und Stimmungsschwankungen führt. Also, was können wir tun?" },
      { type: "h3", html: "Hier sind ein paar Tipps, die helfen können:" },
      { type: "p", html: "<strong>Schreibe es auf:</strong> Wenn man nachts wach liegt und eine Checkliste mit allem, was man zu tun hat, durchläuft, ist man nicht allein. Also, warum nicht alles aufschreiben? Wenn dir etwas in den Kopf kommt, schreib es auf und sprich es morgens an. Wenn du Stress oder Sorgen hast, versuche es mit einem Tagebuch, um die Dinge aus deinem Kopf zu bekommen." },
      { type: "p", html: "<strong>Trainiere zur richtigen Zeit:</strong> Morgendliches Training kann deiner Körperuhr helfen, tagsüber aktiv zu bleiben und nachts schlafbereit zu werden. Vermeide es, zu nahe an der Schlafenszeit zu trainieren." },
      { type: "p", html: "<strong>Achte darauf, was und wann du isst:</strong> Wenn du es dir zur Gewohnheit gemacht hast, ein spätes Abendessen einzunehmen und dann innerhalb von ein oder zwei Stunden einzuschlafen, wird die Verdauungsaktivität dein Gehirn und deinen Körper länger wach halten. Liebst du Schokolade oder Kaffee? Verschiebe diese auf einen früheren Zeitpunkt am Tag; Koffein kann bis zu sieben Stunden lang in deinem System bleiben. Du kannst auch versuchen, dir ein paar <a href=\"https://biocbd.de/product/premium-bio-cbd-ol-tropfen-5-500-mg-bio-zertifiziert/\">CBD Tropfen</a> in den Tee zu machen, das wirkt auch sehr gut." },
      { type: "p", html: "<strong>Mach es dir gemütlich:</strong> Ein beruhigender Tee wie Kamille macht deinen Körper schlafbereit. Wenn du Getränke vermeiden willst, bei denen du aufwachen musst, um ins Badezimmer zu gehen, versuche ein heißes Bad. Eine Fußmassage ist großartig, wenn man das Glück hat, einen zuvorkommenden Partner oder Mitbewohner zu haben." },
      { type: "p", html: "<strong>Konzentriere dich auf deinen Atem:</strong> Die Zählung von Schafen funktioniert nicht ohne Grund. Es ist ähnlich wie beim Meditieren. Schließe deine Augen und konzentriere dich auf deine Atmung; beachte, wie sie sich in und aus deiner Nase bewegt, kühler auf dem Weg hinein und wärmer auf dem Weg hinaus. Wenn sich dein Verstand verirrt, bring ihn einfach immer wieder zum Atem zurück." },
      { type: "p", html: "<strong>Mach dein Schlafzimmer zu einer entspannenden Umgebung:</strong> Vergewissere dich, dass dein Schlafzimmer sauber, belüftet, kühl, ruhig und dunkel ist – alles optimale Bedingungen für einen besseren Schlaf. Bequeme Laken, Kissen und Decken schaden auch nicht." },
      { type: "p", html: "<strong>Wenn du nicht einschlafen kannst, steh auf:</strong> Vermeide es, Zeit wach in deinem Schlafzimmer zu verbringen. Das bedeutet: kein Fernseher, kein Laptop oder gar Lesen unter der Decke (langweilige Bücher können die Ausnahme sein!)." },
      { type: "p", html: "<strong>Kein Nickerchen:</strong> Sicher, du willst ein Mittagsschläfchen nach einer schlechten Nacht. Kämpfe gegen diesen Drang. Schlafen am Tag nimmt dir den nächtlichen Schlafbedarf und macht es schwieriger einzuschlafen." },
      { type: "p", html: "<strong>Achte auf dein Gewicht:</strong> Ein höherer Body-Mass-Index (BMI) trägt zu einem verkürzten Schlaf bei. Adipositas erhöht auch das Risiko einer obstruktiven Schlafapnoe, bei der du während des Schlafes kurzzeitig nicht mehr atmest. Diese Unterbrechungen wecken dich kurz und verursachen einen fragmentierten Schlaf." },
    ],
  },
];

export const getGuestPost = (slug: string) => guestPosts.find((p) => p.slug === slug);
