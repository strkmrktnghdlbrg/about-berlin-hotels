# BATTLE PLAN – about-berlin-hotels.de (90 Tage, 21.07.-19.10.2026)

Grundlage: `output/BRIEF.md` (DataForSEO: 85 eigene + 4x300 Wettbewerber-Keywords, Backlink-Vergleich, 7 SERP-Snapshots, Stand 21.07.2026). Kapazität: 5 h/Woche. Ziel: Stay22-Buchungsklicks über Berlin-Hotel-Keywords.

**Getroffene Annahmen (statt Rückfragen):** (1) GSC/GA4 sind nicht angebunden und werden in Woche 1 eingerichtet. (2) Stay22-Integration ist auf allen Hotel- und Bezirksseiten funktionsfähig (STAY22-INTEGRATION.md liegt im Projekt). (3) Die ca. 50 Root-Listicle-Stubs bleiben bestehen, werden aber nicht ausgebaut, solange sie nicht ranken.

---

## 1. Was kaputt ist (Diagnose mit Zahlen)

1. **Die Domain rankt für nichts, was klickbar wäre.** 0 Keywords in Top 20, nur 10 auf Pos 21-50, davon 6 mit Hotel-Intention und zusammen keine 900 SV. 80% des nominalen ETV (772,80 von 971,60) ist ein einziges Pos-75-Ranking für "checkpoint charlie" - Rauschen. Real verdient die Domain organisch praktisch nichts.

2. **Das Geschäftsmodell der Nische wird nicht mitgespielt.** Alle 4 Wettbewerber leben zu nahezu 100% von Hotel-Brand-Keywords ("estrel hotel berlin" 90.500 SV, "adlon" 60.500, "motel one alexanderplatz" 40.500). In den generischen SERPs ("hotels charlottenburg") tauchen sie gar nicht auf. Wir besitzen 38 Hotel-Einzelseiten unter /hotels/ - darunter estrel-berlin, park-inn-alexanderplatz, hotel-adlon-kempinski, h2-hotel-alexanderplatz, circus-hotel - und ranken mit KEINER für auch nur ein Brand-Keyword. Über 300.000 SV, für die die Seiten schon existieren, liegen brach.

3. **Interne Kannibalisierung auf dem einzigen funktionierenden Seitentyp.** Legacy-Rootseiten (/charlottenburg/, /friedrichshain/, /spandau/) konkurrieren nachweisbar mit /stadtteile/*-Seiten: "hotels charlottenburg berlin" rankt Pos 69 über /charlottenburg/, "hotel charlottenburg berlin" Pos 73 über /stadtteile/charlottenburg-wilmersdorf/. Dazu doppelt /familienfreundliche-hotels-berlin/ (Pos 49) das Thema von /kategorien/familienhotels/ (Pos 74, 13 Keywords). Die wenige Autorität, die da ist, wird auch noch geteilt.

4. **Autoritäts-Rückstand Faktor 7-115.** 40 verweisende Domains gegen 283 (hotelinberlin.net), 298 (hotelsofberlin.net), 320 (atberlinhotels.com), 4.605 (hotel-in-berlin.org). Aber: atberlinhotels holt mit nur 320 RD 68 Top-3-Rankings - die Schwelle, ab der das Modell trägt, liegt also im erreichbaren Bereich (Faktor 8, nicht Faktor 100).

5. **Blindflug.** Keine GSC, keine GA4-Anbindung. Wir wissen nicht einmal, ob die 38 Hotel-Seiten überhaupt indexiert sind - bei 0 Rankings trotz existierender Seiten ist Nicht-Indexierung die wahrscheinlichste Erklärung und muss vor allem anderen geprüft werden.

## 2. Wo jeder Wettbewerber schlagbar ist

**atberlinhotels.com (320 RD, 68 Top-3, Sample-ETV 101.024)** - der Beweis, dass das Modell in unserer Gewichtsklasse funktioniert, und zugleich die Messlatte. Rankt Brand-Keywords grossteils über die Startseite /de/ statt über tiefe Einzelseiten - d.h. eine dedizierte, inhaltlich bessere Hotel-Einzelseite (Lage, Anreise, Zimmer, Bezirks-Kontext, FAQ) kann die generische Startseiten-Antwort schlagen. Angriffsfläche: alle Brand-Queries, wo er nur Pos 11-20 steht.

**hotelinberlin.net (283 RD, nur 1 Top-3, 108x Pos 11-20)** - der schwächste direkte Gegner: dedizierte /de/property/*.html-Seiten, aber fast alles hängt auf Seite 2 fest (hilton 19, jw marriott 19, leonardo 17, melia 17). Veraltete .html-Struktur, dünner Inhalt. Wer hier mit einer besseren Seite kommt, überholt ihn zuerst - unsere realistischste Ziel-Position in 90 Tagen ist genau dieses Pos-11-20-Band.

**hotelsofberlin.net (298 RD, 15 Top-3)** - gleiches Muster, gleiche Schwäche: Brand-Rankings Pos 15-20 über die Startseite. Zusätzlich 41 broken Backlinks (wir: 1) - technisch ungepflegt.

**hotel-in-berlin.org (4.605 RD, 70 Top-3)** - der Aspirations-Gegner. Mit 115x mehr verweisenden Domains frontal nicht angreifbar; einholbar nur dort, wo er trotz Autorität nur Pos 16-19 steht ("estrel hotel berlin" Pos 16, "riu plaza" Pos 16, "maritim proarte" Pos 19) - dort ist die SERP offenbar noch nicht versiegelt.

**Strategische Wahrheit:** In den generischen Bezirks-SERPs stehen OTAs + berlin.de, aber kleine redaktionelle Seiten (thehotelguru, 22places, familie.de, sogar hotel-pankow-berlin.de) kommen dort in die Top 10. Die Nische belohnt kuratierte, spezifische Einzelseiten. Genau das ist ein City-Portal-Format - wir haben nur nie die Seiten dafür ranken lassen.

## 3. Priorisierte Wetten (90 Tage)

### Wette 1 - Messbarkeit + Indexierungs-Audit (Woche 1, ~3 h einmalig)
GSC-Property verifizieren + Service-Account einladen, GA4 prüfen, dann die Kernfrage klären: **Sind die 38 /hotels/-Seiten überhaupt im Google-Index?** (site:-Abfragen bzw. GSC-URL-Prüfung, Sitemap kontrollieren, alle 38 URLs via RalfyIndex einreichen.)
- **Impact:** Voraussetzung für alles. 38 existierende Seiten mit 300.000+ SV Brand-Volumen und 0 Rankings deuten auf ein Indexierungs- oder Qualitätsproblem - ohne Diagnose ist jede Content-Arbeit Blindflug.
- **Aufwand:** minimal. **Begründung Platz 1:** billigste Stunde des Quartals mit dem grössten Erkenntnisgewinn.

### Wette 2 - Hotel-Brand-Offensive: die 38 vorhandenen Seiten rankfähig machen (Woche 1-8)
Die 10 volumenstärksten vorhandenen Hotel-Seiten (estrel-berlin 90.500 SV, park-inn-alexanderplatz 60.500, hotel-adlon-kempinski 60.500, hotel-amano-grand-central 27.100, h2-hotel-alexanderplatz 18.100, circus-hotel 18.100, 25hours-hotel-bikini, hotel-de-rome, hotel-bristol-berlin, hotel-berlin-berlin) einzeln auf 800-1.200 Wörter ausbauen: Lage + Bezirk, Anreise/ÖPNV, Zimmerkategorien, für wen geeignet, Umgebung/Sehenswürdigkeiten (interne Links!), FAQ mit Schema, Hotel-Schema (JSON-LD), Stay22-Link prominent. Titles auf die exakte Brand-Query ("Estrel Hotel Berlin - Lage, Zimmer & Buchungstipps").
- **Impact:** hoch - das ist das nachgewiesene Traffic-Modell aller 4 Wettbewerber; hotelinberlin.net hält mit 283 RD (vergleichbar erreichbar) diese Rankings auf Pos 11-20. Realistisches 90-Tage-Ziel: 10-20 Brand-Keywords ins Pos-11-30-Band, erste Top 10 bei schwachen SERPs.
- **Aufwand:** ~1-2 Seiten-Upgrades pro Woche, Sonnet-tauglich.
- **Begründung Platz 2:** einziger Hebel mit sechsstelligem SV, bei dem die Seiten schon existieren; Brand-Suchende sind zudem buchungsnah (Stay22-Konversion).

### Wette 3 - Kannibalisierung beenden: Legacy-Rootseiten konsolidieren (Woche 2, ~2 h einmalig)
/charlottenburg/, /friedrichshain/, /spandau/ per 301 auf die jeweiligen /stadtteile/*-Seiten umleiten (bzw. Canonical, falls Inhalte unique bleiben sollen); /familienfreundliche-hotels-berlin/ (Pos 49) und /kategorien/familienhotels/ (Pos 74, 13 Keywords) zu EINER Seite zusammenführen - die Rankings sprechen dafür, /familienfreundliche-hotels-berlin/ als Ziel zu nehmen (bessere Position) oder umgekehrt die Kategorie-URL zu stärken und die Standalone-Seite umzuleiten; Entscheidung nach Content-Qualität in Woche 2.
- **Impact:** mittel - betrifft die Charlottenburg-Gruppe (~8.000 SV kombiniert) und den Familienhotel-Cluster (~3.600 SV, 8 Keyword-Varianten). Konsolidierung verdoppelt die effektive Seitenstärke ohne neuen Content.
- **Aufwand:** klein (Redirects + ein Merge). **Begründung Platz 3:** klassischer Einmal-Fix mit dauerhafter Wirkung, direkt vor dem Bezirks-Ausbau nötig, damit die Stärkung auf die richtige URL einzahlt.

### Wette 4 - Bezirks-Hotelseiten: Charlottenburg, Mitte, Pankow zuerst (Woche 3-9)
Die /stadtteile/*-Seiten von Bezirksbeschreibungen zu echten "Hotels in X"-Seiten umbauen - beginnend mit den drei belegten Chancen: Charlottenburg (~8.000 SV, Pos 59-79), Mitte/"hotels im zentrum von berlin" (2.900 SV, Pos 71), Pankow ("hotels in pankow" 210 SV, Pos 50, SERP ohne Content-Wettbewerber). Aufbau: kuratierte Hotel-Empfehlungen (auf unsere /hotels/-Seiten verlinkend!), Lage-Beratung (welche Kieze, ÖPNV), Preisniveau, FAQ. Die SERPs zeigen, dass redaktionelle Kuration dort neben OTAs rankt (thehotelguru Pos 9 bei "zentrum", hotel-pankow-berlin.de Pos 5 bei Pankow).
- **Impact:** mittel-hoch - generische "hotels + bezirk"-Queries sind die zweite Traffic-Säule und interne Link-Hubs für Wette 2.
- **Aufwand:** 1 Seite alle 2 Wochen gründlich statt aller 12 oberflächlich.
- **Begründung Platz 4:** nach Konsolidierung (Wette 3) der logische Ausbau; hinter Wette 2, weil hier OTAs in den SERPs stehen und der Weg in die Top 10 länger ist.

### Wette 5 - Museumsinsel-Chance + Sehenswürdigkeiten-Verzahnung (Woche 6-10)
"hotel berlin museumsinsel" (4 Varianten, 680 SV, Pos 35-49) ist unser bestes Hotel-Intention-Ranking - aber es rankt die Sehenswürdigkeiten-Seite. Eine dedizierte Seite "Hotels nahe der Museumsinsel" bauen (die SERP hat keine einzige redaktionelle Nahe-X-Seite in den Top 12), von /sehenswuerdigkeiten/museumsinsel/ prominent verlinken, 3-5 konkrete Hotels mit Fussweg-Angabe + Stay22. Gleiche Blaupause danach für Checkpoint Charlie/Friedrichstrasse vorbereiten (dort rankt die Domain schon, Pos 75-92, SV 368.000+8.100 - selbst Pos 20-30 wäre messbarer Traffic).
- **Impact:** mittel - kleines SV, aber kürzeste Distanz zur Top 20 im ganzen Datensatz und exakt buchungsnahe Intention.
- **Aufwand:** 1 neue Seite + interne Links.
- **Begründung Platz 5:** schneller, kleiner, sicherer Gewinn; hinter den strukturellen Wetten, weil er nur eine Seite betrifft.

### Wette 6 - Autorität: 40 -> 80 verweisende Domains (laufend, ~30 min/Woche)
Interne Portfolio-Links (Berlin-nahe eigene Portale und thematisch passende Städteportale, Anker variieren), Broken-Link des Bestands fixen, Branchenverzeichnis-/Tourismus-Einträge. KEIN Kaltakquise-Linkbuilding (Kapazität, §7-UWG-Risiko bei Cold Mail).
- **Impact:** multiplikativ, langsam - 40 RD ist der Deckel über allem; atberlinhotels zeigt bei 320 RD, wo das Modell zündet.
- **Aufwand:** klein, konstant. **Begründung Platz 6:** Verstärker, kein eigenständiger Kurzfrist-Hebel.

**Bewusst NICHT im Plan:** "checkpoint charlie" frontal angreifen (368.000 SV, Info-Intention, SERP gehört Wikipedia/berlin.de - kein Buchungs-Hebel), die ca. 50 Root-Listicle-Stubs ausbauen (0 Rankings, erst konsolidieren wenn Kernmodell trägt), Bezirks-Info-Keywords wie "12 berliner bezirke" pushen (rankt Pos 29, aber monetär wertlos - Mitnahme-Effekt reicht), EN-Sektion ausbauen (nur 5 EN-Keywords, alle Pos 60+, Fokus zuerst DE).

## 4. Messpunkte (90 Tage)

| Metrik | Ist (21.07.) | Ziel (19.10.) |
|---|---|---|
| Keywords Top 20 | 0 | 15+ |
| Keywords Pos 21-50 | 10 | 40+ |
| Hotel-Brand-Keywords (irgendein Ranking) | 0 | 25+ |
| ETV bereinigt (ohne Checkpoint-Ausreisser) | ~199 | 800+ |
| Verweisende Domains | 40 | 80+ |
| Indexierte /hotels/-Seiten | unbekannt | 38/38 |

Messung: Woche 6 und Woche 12 per DataForSEO-Re-Pull (`war_room_fetch.py full`), ab Woche 2 GSC. Abbruchregel: Wenn die 10 upgegradeten Hotel-Seiten in Woche 6 trotz bestätigter Indexierung KEIN einziges Brand-Ranking (auch nicht Pos 50+) zeigen, Wette 2 stoppen und Kapazität auf Wette 4/5 (Bezirke + Museumsinsel) umlenken - dort ist die Ranking-Fähigkeit der Domain bereits belegt.
