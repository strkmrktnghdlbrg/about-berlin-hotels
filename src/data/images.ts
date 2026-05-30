// Auto-generated from Wikimedia Commons lookups.
// Quelle: en.wikipedia.org REST API + commons.wikimedia.org
// Re-Generieren via /tmp/abh_fetch_images.py
//
// Lokale 1600x1200 4:3 Sources unter `src/assets/images/{sights,districts}/<slug>.jpg`
// werden via astro:assets als WebP-Varianten ausgespielt. Die Wikimedia-URL bleibt
// als Lizenz-Quelle in `commonsPage` referenziert (Caption-Backlink-Pflicht).
import type { ImageMetadata } from "astro";

const sightModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/sights/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true },
);
const districtModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/districts/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true },
);

function resolveLocal(
  folder: "sights" | "districts",
  slug: string,
): ImageMetadata | undefined {
  const modules = folder === "sights" ? sightModules : districtModules;
  const re = new RegExp(`/${slug}\\.(jpg|JPG|jpeg|png|webp)$`);
  for (const [path, mod] of Object.entries(modules)) {
    if (re.test(path)) return mod.default;
  }
  return undefined;
}

export type WikimediaImage = {
  url: string;
  thumb: string;
  artist: string;
  license: string;
  licenseUrl: string;
  file: string;
  commonsPage: string;
  /** Lokal hinterlegtes Asset (astro:assets) — wird in FigureImage bevorzugt. */
  localSrc?: ImageMetadata;
};

export const attractionImages: Record<string, WikimediaImage> = {
  "brandenburger-tor": {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/330px-Brandenburger_Tor_abends.jpg",
    artist: "Thomas Wolf, www.foto-tw.de",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Brandenburger_Tor_abends.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg",
  },
  "reichstag": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/3840px-Berlin_reichstag_west_panorama_2.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/330px-Berlin_reichstag_west_panorama_2.jpg",
    artist: "Mfield, Matthew Field, http://www.photography.mattfield.com; edit by Waugsberg (rotation 0,4°)",
    license: "GFDL 1.2",
    licenseUrl: "http://www.gnu.org/licenses/old-licenses/fdl-1.2.html",
    file: "Berlin_reichstag_west_panorama_2.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_reichstag_west_panorama_2.jpg",
  },
  "museumsinsel": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg/3840px-Berlin_Museumsinsel_Fernsehturm.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg/330px-Berlin_Museumsinsel_Fernsehturm.jpg",
    artist: "Thomas Wolf, www.foto-tw.de",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Berlin_Museumsinsel_Fernsehturm.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_Museumsinsel_Fernsehturm.jpg",
  },
  "fernsehturm": {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Crosses_of_Berliner_Fernsehturm_and_Berliner_Dom.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Crosses_of_Berliner_Fernsehturm_and_Berliner_Dom.jpg/330px-Crosses_of_Berliner_Fernsehturm_and_Berliner_Dom.jpg",
    artist: "Tobi85",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Crosses_of_Berliner_Fernsehturm_and_Berliner_Dom.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Crosses_of_Berliner_Fernsehturm_and_Berliner_Dom.jpg",
  },
  "checkpoint-charlie": {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Berlin_-_Checkpoint_Charlie_1963.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Berlin_-_Checkpoint_Charlie_1963.jpg/330px-Berlin_-_Checkpoint_Charlie_1963.jpg",
    artist: "Roger Wollstadt",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    file: "Berlin_-_Checkpoint_Charlie_1963.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_-_Checkpoint_Charlie_1963.jpg",
  },
  "east-side-gallery": {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg/330px-Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg",
    artist: "Lklundin",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Segment_with_Graffiti_of_the_Berlin_Wall_(3_of_4)_(cropped).jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg",
  },
  "mauerpark": {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Mauerpark_1979.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mauerpark_1979.jpg/330px-Mauerpark_1979.jpg",
    artist: "Franz Richter (User:FRZ)",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Mauerpark_1979.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Mauerpark_1979.jpg",
  },
  "tiergarten": {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Berlin_Tiergarten_Siegess%C3%A4ule_Luftansicht.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Berlin_Tiergarten_Siegess%C3%A4ule_Luftansicht.jpg/330px-Berlin_Tiergarten_Siegess%C3%A4ule_Luftansicht.jpg",
    artist: "beedubz",
    license: "CC BY-SA 3.0",
    licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    file: "Berlin_Tiergarten_Siegessäule_Luftansicht.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_Tiergarten_Siegess%C3%A4ule_Luftansicht.jpg",
  },
  "kurfuerstendamm": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Berlin_-_K%C3%BCrfurstendamm_Gehsteig.jpg/3840px-Berlin_-_K%C3%BCrfurstendamm_Gehsteig.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Berlin_-_K%C3%BCrfurstendamm_Gehsteig.jpg/330px-Berlin_-_K%C3%BCrfurstendamm_Gehsteig.jpg",
    artist: "Marek Śliwecki",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Berlin_-_Kürfurstendamm_Gehsteig.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_-_K%C3%BCrfurstendamm_Gehsteig.jpg",
  },
  "gendarmenmarkt": {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Gendarmenmarkt_Panorama.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gendarmenmarkt_Panorama.jpg/330px-Gendarmenmarkt_Panorama.jpg",
    artist: "Marek Heise Fotografie, Berlin",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Gendarmenmarkt_Panorama.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Gendarmenmarkt_Panorama.jpg",
  },
  "potsdamer-platz": {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg/330px-Berlin_-_Potsdamer_Platz_-_2016.jpg",
    artist: "Avda",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Berlin_-_Potsdamer_Platz_-_2016.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_-_Potsdamer_Platz_-_2016.jpg",
  },
  "holocaust-mahnmal": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Memorial_to_the_Murdered_Jews_of_Europeabove.jpg/3840px-Memorial_to_the_Murdered_Jews_of_Europeabove.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Memorial_to_the_Murdered_Jews_of_Europeabove.jpg/330px-Memorial_to_the_Murdered_Jews_of_Europeabove.jpg",
    artist: "Alexander Blum",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Memorial_to_the_Murdered_Jews_of_Europeabove.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Memorial_to_the_Murdered_Jews_of_Europeabove.jpg",
  },
  "alexanderplatz": {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Berlin_-_Weltzeituhr2.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Berlin_-_Weltzeituhr2.jpg/330px-Berlin_-_Weltzeituhr2.jpg",
    artist: "Taxiarchos228",
    license: "FAL",
    licenseUrl: "http://artlibre.org/licence/lal/en",
    file: "Berlin - Weltzeituhr2.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3ABerlin%20-%20Weltzeituhr2.jpg",
  },
  "schloss-charlottenburg": {
    url: "https://upload.wikimedia.org/wikipedia/commons/4/42/Charlottenburg_Hohenzollern_2.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charlottenburg_Hohenzollern_2.jpg/330px-Charlottenburg_Hohenzollern_2.jpg",
    artist: "ernstol",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Charlottenburg_Hohenzollern_2.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Charlottenburg_Hohenzollern_2.jpg",
  },
  "tempelhofer-feld": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tempelhofer_Feld_May_2021.jpg/1920px-Tempelhofer_Feld_May_2021.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tempelhofer_Feld_May_2021.jpg/330px-Tempelhofer_Feld_May_2021.jpg",
    artist: "Coooohen",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Tempelhofer_Feld_May_2021.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Tempelhofer_Feld_May_2021.jpg",
  },
  "olympiastadion": {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Berlin_Olympiastadion_aussen.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Berlin_Olympiastadion_aussen.jpg/1280px-Berlin_Olympiastadion_aussen.jpg",
    artist: "Nikolai Schwerg",
    license: "CC BY-SA 3.0",
    licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    file: "Berlin_Olympiastadion_aussen.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_Olympiastadion_aussen.jpg",
  },
  "berliner-dom": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/3840px-141227_Berliner_Dom.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/330px-141227_Berliner_Dom.jpg",
    artist: "Ansgar Koreng",
    license: "CC BY 3.0 de",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/de/deed.en",
    file: "141227_Berliner_Dom.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:141227_Berliner_Dom.jpg",
  },
  "kadewe": {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg/330px-Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg",
    artist: "Jörg Zägel",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Berlin,_Schoeneberg,_Tauentzienstrasse_21-24,_KaDeWe.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg",
  },
  "muggelsee": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg/3840px-View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg/330px-View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg",
    artist: "Leonhard Lenz",
    license: "CC0",
    licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    file: "View_from_Müggelberge_viewpoint_2019-06-13_22.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg",
  },
  "wannsee": {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Strandbad_Wannsee_-_April_2011.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Strandbad_Wannsee_-_April_2011.jpg/330px-Strandbad_Wannsee_-_April_2011.jpg",
    artist: "Times",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Strandbad Wannsee - April 2011.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3AStrandbad%20Wannsee%20-%20April%202011.jpg",
  },
};

export const districtImages: Record<string, WikimediaImage> = {
  "mitte": {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Berlin_Skyline_Fernsehturm_02.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Berlin_Skyline_Fernsehturm_02.jpg/330px-Berlin_Skyline_Fernsehturm_02.jpg",
    artist: "H.Helmlechner",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Berlin_Skyline_Fernsehturm_02.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Berlin_Skyline_Fernsehturm_02.jpg",
  },
  "friedrichshain-kreuzberg": {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Berlin%2C_Oberbaumbr%C3%BCcke_--_2011_--_2282.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Berlin%2C_Oberbaumbr%C3%BCcke_--_2011_--_2282.jpg/330px-Berlin%2C_Oberbaumbr%C3%BCcke_--_2011_--_2282.jpg",
    artist: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Berlin, Oberbaumbrücke -- 2011 -- 2282.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3ABerlin%2C%20Oberbaumbr%C3%BCcke%20--%202011%20--%202282.jpg",
  },
  "charlottenburg-wilmersdorf": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg/3840px-Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg/330px-Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg",
    artist: "Fridolin freudenfett",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Charlottenburg_Otto-Suhr-Allee_Rathaus.jpg",
  },
  "pankow": {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pankow_B%C3%BCrgerpark.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pankow_B%C3%BCrgerpark.jpg/330px-Pankow_B%C3%BCrgerpark.jpg",
    artist: "nikey",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Pankow_Bürgerpark.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Pankow_B%C3%BCrgerpark.jpg",
  },
  "neukoelln": {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Berlin_Landwehrkanal_Maybachufer-20241206-RM-151205.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Berlin_Landwehrkanal_Maybachufer-20241206-RM-151205.jpg/330px-Berlin_Landwehrkanal_Maybachufer-20241206-RM-151205.jpg",
    artist: "Reinhold Möller Ermell",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Berlin Landwehrkanal Maybachufer-20241206-RM-151205.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3ABerlin%20Landwehrkanal%20Maybachufer-20241206-RM-151205.jpg",
  },
  "tempelhof-schoeneberg": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ullsteinhaus_march_2015.jpg/3840px-Ullsteinhaus_march_2015.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ullsteinhaus_march_2015.jpg/330px-Ullsteinhaus_march_2015.jpg",
    artist: "Dirk Ingo Franke",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Ullsteinhaus_march_2015.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Ullsteinhaus_march_2015.jpg",
  },
  "steglitz-zehlendorf": {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Berlin%2C_GLAM_on_Tour_%282018%29%2C_Jagdschloss_Grunewald_NIK_5126.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Berlin%2C_GLAM_on_Tour_%282018%29%2C_Jagdschloss_Grunewald_NIK_5126.jpg/330px-Berlin%2C_GLAM_on_Tour_%282018%29%2C_Jagdschloss_Grunewald_NIK_5126.jpg",
    artist: "Nightflyer",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Berlin, GLAM on Tour (2018), Jagdschloss Grunewald NIK 5126.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3ABerlin%2C%20GLAM%20on%20Tour%20%282018%29%2C%20Jagdschloss%20Grunewald%20NIK%205126.jpg",
  },
  "spandau": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2013-08_View_from_Rathaus_Spandau_03.jpg/3840px-2013-08_View_from_Rathaus_Spandau_03.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2013-08_View_from_Rathaus_Spandau_03.jpg/330px-2013-08_View_from_Rathaus_Spandau_03.jpg",
    artist: "A.Savin",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "2013-08_View_from_Rathaus_Spandau_03.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:2013-08_View_from_Rathaus_Spandau_03.jpg",
  },
  "treptow-koepenick": {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bundesarchiv_Bild_183-19000-2423%2C_Berlin-M%C3%BCggelsee%2C_Strandbad%2C_Badeg%C3%A4ste_im_Wasser.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bundesarchiv_Bild_183-19000-2423%2C_Berlin-M%C3%BCggelsee%2C_Strandbad%2C_Badeg%C3%A4ste_im_Wasser.jpg/330px-Bundesarchiv_Bild_183-19000-2423%2C_Berlin-M%C3%BCggelsee%2C_Strandbad%2C_Badeg%C3%A4ste_im_Wasser.jpg",
    artist: "UnknownUnknown",
    license: "CC BY-SA 3.0 de",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
    file: "Bundesarchiv Bild 183-19000-2423, Berlin-Müggelsee, Strandbad, Badegäste im Wasser.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3ABundesarchiv%20Bild%20183-19000-2423%2C%20Berlin-M%C3%BCggelsee%2C%20Strandbad%2C%20Badeg%C3%A4ste%20im%20Wasser.jpg",
  },
  "lichtenberg": {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Lichtenberg%2C_Berlin_%28P1090047%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lichtenberg%2C_Berlin_%28P1090047%29.jpg/1280px-Lichtenberg%2C_Berlin_%28P1090047%29.jpg",
    artist: "Matti Blume",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    file: "Lichtenberg, Berlin (P1090047).jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File:Lichtenberg,_Berlin_(P1090047).jpg",
  },
  "marzahn-hellersdorf": {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Marzahn_Gaerten_der_Welt_08-2015_img04_Japanese_Garden.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Marzahn_Gaerten_der_Welt_08-2015_img04_Japanese_Garden.jpg/330px-Marzahn_Gaerten_der_Welt_08-2015_img04_Japanese_Garden.jpg",
    artist: "A.Savin",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    file: "Marzahn Gaerten der Welt 08-2015 img04 Japanese Garden.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3AMarzahn%20Gaerten%20der%20Welt%2008-2015%20img04%20Japanese%20Garden.jpg",
  },
  "reinickendorf": {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/11/20240819_Tegeler_Hafenbr%C3%BCcke_04.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/20240819_Tegeler_Hafenbr%C3%BCcke_04.jpg/330px-20240819_Tegeler_Hafenbr%C3%BCcke_04.jpg",
    artist: "Flocci Nivis",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    file: "20240819 Tegeler Hafenbrücke 04.jpg",
    commonsPage: "https://commons.wikimedia.org/wiki/File%3A20240819%20Tegeler%20Hafenbr%C3%BCcke%2004.jpg",
  },
};

// Stitch local astro:assets sources onto each entry. FigureImage prefers
// localSrc and falls back to the remote Wikimedia URL when missing.
for (const [slug, entry] of Object.entries(attractionImages)) {
  entry.localSrc = resolveLocal("sights", slug);
}
for (const [slug, entry] of Object.entries(districtImages)) {
  entry.localSrc = resolveLocal("districts", slug);
}
