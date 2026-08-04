# WEEKLY CHECKLIST – about-berlin-hotels.de (12 Wochen, 21.07.-18.10.2026)

Budget: 5 h/Woche. Tags: **[Sonnet]** = günstiges Modell erledigt es (Draft, Schema, Meta), **[Manual]** = selbst machen (Zugänge, Review, Publish-Freigabe). Jede Content-Aufgabe endet erst mit: live verifizieren, interne Links setzen, 0 Em-Dashes, echte Umlaute, Meta-Description vorhanden.

**Feste Regeln für alle Tasks:**
- Hotel-Einzelseiten-Blaupause: 800-1.200 Wörter - Lage + Bezirks-Kontext, Anreise/ÖPNV (konkrete Linien), Zimmerkategorien, "Für wen geeignet", Umgebung mit internen Links auf Sehenswürdigkeiten-/Bezirksseiten, FAQ (mit FAQPage-Schema), Hotel-JSON-LD, Stay22-Link prominent aber dezent (kein Marktschreier, keine erfundenen Preise oder Bewertungen).
- Title-Muster Hotel-Seiten: exakte Brand-Query vorn ("Estrel Hotel Berlin – Lage, Zimmer & Tipps | about-berlin-hotels.de").
- Stay22: bestehende lmaID aus STAY22-INTEGRATION.md verwenden; Map-Embeds MÜSSEN /embed/gm-Endpoint nutzen.
- Nach jedem Publish: Commit + Push + Deploy verifizieren (`gh run list` bzw. Deploy-Weg des Projekts prüfen), danach URL via RalfyIndex einreichen (Standard-Modus).
- City-Portal-Gotchas beachten: Brand-CSS-Override (global.css @theme schlägt brand.css), Platzhalterbilder in index.astro.

---

## Woche 1 (21.-27.07.) – Blindflug beenden + Index-Audit
- [ ] **[Manual, 1 h]** GSC-Property für about-berlin-hotels.de anlegen/prüfen (www-Variante!), Service-Account dashboard-reader@stark-analytics-501812.iam.gserviceaccount.com einladen. GA4-Property prüfen/anlegen, Stay22-Klicks als Key Event definieren.
- [ ] **[Sonnet, 1 h]** Indexierungs-Audit: alle 38 /hotels/-URLs + 12 /stadtteile/-URLs auflisten, per GSC-URL-Prüfung bzw. site:-Stichproben klären, was im Index ist. Sitemap kontrollieren (sind alle /hotels/-Seiten drin? www-Canonicals korrekt?). Befund als Notiz in `output/W1-INDEX-AUDIT.md` im War-Room-Ordner.
- [ ] **[Sonnet, 1 h]** Alle 38 /hotels/-URLs + Sitemap via RalfyIndex einreichen (Projekt: about-berlin-hotels-w1).
- [ ] **[Sonnet, 2 h]** Erste Brand-Seite upgraden: /hotels/estrel-berlin/ nach Blaupause ("estrel hotel berlin" 90.500 SV, bester Comp nur Pos 16 - SERP nicht versiegelt). **[Manual, 30 min]** Review + Publish + RalfyIndex.

## Woche 2 (28.07.-03.08.) – Kannibalisierung beenden
- [ ] **[Sonnet, 1 h]** Konsolidierungs-Entscheidung vorbereiten: /charlottenburg/, /friedrichshain/, /spandau/ vs. /stadtteile/*-Pendants inhaltlich vergleichen (welche Seite ist besser/länger, welche rankt höher). Gleicher Vergleich /familienfreundliche-hotels-berlin/ (Pos 49) vs. /kategorien/familienhotels/ (Pos 74, 13 Keywords).
- [ ] **[Manual, 30 min]** Entscheiden: je Paar EINE Ziel-URL festlegen (Default: /stadtteile/*-Seiten gewinnen; beim Familien-Paar die Seite mit besserem Content).
- [ ] **[Sonnet, 2 h]** 301-Redirects implementieren (Achtung: statisches Hosting - Redirect-Mechanismus des Deploys prüfen; falls nginx ohne .htaccess-Support: statische Redirect-Seiten oder Hosting-Konfig), besten Content in die Ziel-URL mergen, interne Links auf Ziel-URLs umbiegen, Sitemap bereinigen.
- [ ] **[Manual, 30 min]** Publish + Deploy-Verify + geänderte URLs via RalfyIndex.

## Woche 3 (04.-10.08.) – Brand-Offensive Runde 2
- [ ] **[Sonnet, 2 h]** /hotels/park-inn-alexanderplatz/ nach Blaupause (60.500 SV; Alexanderplatz-Kontext, Abgrenzung zu Motel One/H2/NH am Alex als eigene FAQ - die Comps ranken all diese Queries mit einer Seite).
- [ ] **[Sonnet, 2 h]** /hotels/hotel-adlon-kempinski/ nach Blaupause (60.500 SV; Luxus-Kontext, Brandenburger-Tor-Verzahnung mit interner Verlinkung).
- [ ] **[Manual, 1 h]** Beide reviewen (keine erfundenen Preise/Sterne/Bewertungen!), Publish, RalfyIndex, je 2-3 interne Links von Bezirks- und Sehenswürdigkeiten-Seiten setzen.

## Woche 4 (11.-17.08.) – Charlottenburg: die grösste Bezirks-Chance
- [ ] **[Sonnet, 3 h]** /stadtteile/charlottenburg-wilmersdorf/ zur echten "Hotels in Charlottenburg"-Seite umbauen (~8.000 SV Cluster, aktuell Pos 59-79): kuratierte Hotel-Empfehlungen mit Links auf eigene /hotels/-Seiten (25hours Bikini, Henri Kurfürstendamm, Hampton City West), Kiez-Beratung (Ku'damm vs. Savignyplatz), ÖPNV, Preisniveau, FAQ-Schema. Title: "Hotels in Charlottenburg Berlin – Empfehlungen & Lage-Tipps".
- [ ] **[Sonnet, 1 h]** GSC-Erstauswertung (nach ~2 Wochen Datensammlung): Welche Queries bekommen Impressions? Indexierungs-Status der Woche-1-Einreichungen prüfen. Kurznotiz in `output/W4-GSC-CHECK.md`.
- [ ] **[Manual, 30 min]** Review + Publish + RalfyIndex.

## Woche 5 (18.-24.08.) – Brand-Offensive Runde 3
- [ ] **[Sonnet, 2 h]** /hotels/h2-hotel-alexanderplatz/ nach Blaupause (18.100 SV, Comp-Pos 5-6 über Startseiten - mit dedizierter Seite angreifbar).
- [ ] **[Sonnet, 2 h]** /hotels/circus-hotel/ nach Blaupause (18.100 SV "the circus hostel"-Cluster; Abgrenzung Circus Hotel vs. Circus Hostel explizit als H2/FAQ).
- [ ] **[Manual, 1 h]** Review, Publish, RalfyIndex, interne Links.

## Woche 6 (25.-31.08.) – MESSPUNKT 1
- [ ] **[Sonnet, 1,5 h]** DataForSEO-Re-Pull (`python3 Tools/war-room-fetch/war_room_fetch.py full about-berlin-hotels.de <datadir> hotel-in-berlin.org atberlinhotels.com hotelinberlin.net hotelsofberlin.net`) + GSC-Auswertung. Delta-Memo `output/CHECKPOINT-W6.md`: Brand-Rankings der 5 upgegradeten Hotel-Seiten? Charlottenburg-Bewegung? Indexierungs-Quote /hotels/?
- [ ] **[Manual, 30 min]** Abbruchregel anwenden: 0 Brand-Rankings trotz bestätigter Indexierung -> Wette 2 stoppen, Kapazität auf Bezirke + Museumsinsel. Sonst weiter.
- [ ] **[Sonnet, 2 h]** Neue Seite "Hotels nahe der Museumsinsel" (680 SV Cluster, wir Pos 35-49 mit falscher Seite; SERP ohne redaktionelle Nahe-X-Seite): 3-5 Hotels mit Fusswegen, Stay22, FAQ. Von /sehenswuerdigkeiten/museumsinsel/ prominent verlinken.

## Woche 7 (01.-07.09.) – Mitte + Brand Runde 4
- [ ] **[Sonnet, 2,5 h]** /stadtteile/mitte/ zur "Hotels in Berlin-Mitte / Zentrum"-Seite umbauen ("hotels im zentrum von berlin" 2.900 SV Pos 71, "hotel berlin innenstadt" 390 SV; thehotelguru rankt dort Pos 9 mit Kuration - das Format funktioniert): Kieze (Alexanderplatz, Hackescher Markt, Friedrichstrasse), eigene Hotel-Links (adlon, amano, h2, park inn, de rome).
- [ ] **[Sonnet, 2 h]** /hotels/hotel-amano-grand-central/ nach Blaupause (27.100 SV Amano-Cluster; Amano-Gruppe-Abgrenzung als FAQ).
- [ ] **[Manual, 30 min]** Review, Publish, RalfyIndex.

## Woche 8 (08.-14.09.) – Pankow (leichteste SERP) + Familienhotels
- [ ] **[Sonnet, 2 h]** /stadtteile/pankow/ ausbauen ("hotels in pankow" 210 SV, Pos 50, SERP: nur OTAs + 1 Hotelseite, kein Content-Wettbewerber - realistischste Top-10-Chance unter den Bezirken). Prenzlauer-Berg-Winkel einbauen (gehört zu Pankow, hohes Unterkunfts-Interesse).
- [ ] **[Sonnet, 2 h]** Konsolidierte Familienhotel-Seite ausbauen (Ziel-URL aus Woche 2; 8 Keyword-Varianten ~3.600 SV, Pos 73-85 + "familienfreundliche hotels berlin" Pos 49): konkrete familientaugliche Hotels aus /hotels/-Bestand, Familienzimmer-Kriterien, FAQ.
- [ ] **[Manual, 1 h]** Review, Publish, RalfyIndex, interne Links von Startseite auf beide.

## Woche 9 (15.-21.09.) – Brand-Offensive Runde 5 + Backlink-Block
- [ ] **[Sonnet, 2 h]** Zwei weitere Hotel-Seiten nach Blaupause: /hotels/hotel-de-rome/ und /hotels/25hours-hotel-bikini/ (beide mit Comp-Rankings belegt, Luxus-/Design-Segment ergänzt das Portfolio).
- [ ] **[Sonnet, 1 h]** Backlink-Runde 1: Liste der Berlin-nahen eigenen Portfolio-Portale erstellen, 3-4 kontextuelle Links auf /hotels/-Hub und Charlottenburg-Seite setzen (Anker variieren, dezent). Den 1 broken Backlink identifizieren und Ziel-URL wiederherstellen oder umleiten.
- [ ] **[Manual, 1 h]** Review, Publish, RalfyIndex.

## Woche 10 (22.-28.09.) – Checkpoint-Charlie-Verzahnung
- [ ] **[Sonnet, 2,5 h]** Neue Seite "Hotels nahe Checkpoint Charlie" (Blaupause aus Woche 6; Domain rankt bereits Pos 75/92 für Checkpoint-Queries mit 376.000 SV kombiniert - die Hotel-Intention-Nische daneben ist unbesetzt): Friedrichstrasse-Hotels, Fusswege, Stay22. Von /sehenswuerdigkeiten/checkpoint-charlie/ verlinken.
- [ ] **[Sonnet, 1,5 h]** /stadtteile/tempelhof-schoeneberg/ prüfen: "hotel alt tempelhof berlin" (27.100 SV, Pos 78) sucht ein konkretes Hotel. Kurze Sektion "Bekannte Hotels in Tempelhof" mit Alt-Tempelhof-Erwähnung + Stay22-Alternative einbauen (KEINE eigene Seite für ein Fremdhotel ohne Datenbasis erfinden).
- [ ] **[Manual, 30 min]** Review, Publish, RalfyIndex.

## Woche 11 (29.09.-05.10.) – Neukölln/Spandau + Brand-Nachzügler
- [ ] **[Sonnet, 2 h]** /stadtteile/neukoelln/ ("hotel berlin neukölln" 1.300 SV Pos 69) und /stadtteile/spandau/ ("spandau hotels günstig" Pos 41, "hotels spandau" 260 SV Pos 63) nach Bezirks-Blaupause ausbauen - kompakter als Charlottenburg (je ~600 Wörter reicht bei dünner Konkurrenz).
- [ ] **[Sonnet, 2 h]** Zwei letzte Brand-Seiten aus der Top-10-Liste upgraden: /hotels/hotel-bristol-berlin/ und /hotels/hotel-berlin-berlin/ (Eigenname-Keyword "hotel berlin berlin" ist Comp-belegt).
- [ ] **[Manual, 1 h]** Review, Publish, RalfyIndex.

## Woche 12 (06.-12.10.) – MESSPUNKT 2 + Quartalsübergabe
- [ ] **[Sonnet, 2 h]** Voller Re-Pull (DataForSEO + GSC + GA4/Stay22-Klicks), Vergleich gegen Battle-Plan-Zieltabelle, `output/CHECKPOINT-W12.md`: Welche Hotel-Seiten ranken, welche nicht (und warum - Index? Content? SERP versiegelt?), Bezirks-Bewegung, RD-Zähler vs. Ziel 80.
- [ ] **[Sonnet, 1 h]** Nächste-Quartal-Kandidatenliste: restliche ~26 /hotels/-Seiten nach Comp-SV priorisieren, EN-Sektion-Entscheidung (nur falls DE-Modell trägt), Root-Listicle-Konsolidierung (die ~50 Stubs) bewerten.
- [ ] **[Manual, 1 h]** Entscheiden: neue Fable-Session (nur wenn Strategie kippt) oder Sonnet fährt mit CHECKPOINT-W12 + diesem Plan weiter.

---

**Stehende Wochenroutine (zählt ins 5-h-Budget):** Montags 15 min GSC-Blick - neue Impressions-Queries auf Pos 11-30 sind die nächsten Ausbau-Kandidaten; Brand-Queries mit Impressions aber ohne Klicks -> Title/Snippet schärfen. Nach jedem Deploy verifizieren, dass der Build wirklich live ist (Scheduled-Build-Clobber-Falle der City-Portale beachten: nach Push `git merge-base --is-ancestor` prüfen, falls das Portal dist trackt).
