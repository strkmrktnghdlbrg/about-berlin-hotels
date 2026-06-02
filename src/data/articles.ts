/**
 * articles.ts — zurückgeführte WordPress-Artikel.
 * --------------------------------------------------
 * Diese Artikel rekonstruieren die unter ihren EXAKTEN alten Flat-Slug-URLs
 * indexierten WP-Posts (z.B. /charlottenburg/, /luxus-hotels-berlin/), um das
 * Ranking zu erhalten. Der alte Text dient als Gerüst; Fakten sind gegen die
 * echte Hotel-/Bezirks-/Sehenswürdigkeiten-DB dieser Site geprüft.
 *
 * Aufbau folgt dem GEO-Playbook:
 *  - Frage-basierte H2/H3 mit direkter Antwort in den ersten Sätzen
 *  - mind. 3 interne Links (related) + Adjacent-Questions-Block
 *  - Kontext-Attribute (bestFor) sichtbar + in Schema.org
 *  - FAQPage-/Article-JSON-LD
 *
 * Diese Seiten sind DE-only (entsprechen den DE-indexierten WP-URLs) und
 * werden über dünne Wrapper in src/pages/<slug>.astro gerendert.
 */

export type ArticleSection = {
  /** Frage-Stil-Überschrift (H2). */
  heading: string;
  /** Absätze. Erster Absatz = direkte Antwort (Featured-Snippet-fähig). */
  body: string[];
  /** Optional: Hotel-Slugs (aus hotels.ts), die als Karten unter der Section erscheinen. */
  hotels?: string[];
  /** Optional: Aufzählungspunkte statt/zusätzlich zu Absätzen. */
  bullets?: string[];
};

export type ArticleFaq = { q: string; a: string };
export type ArticleLink = { label: string; href: string };

export type Article = {
  /** Exakter alter WP-Slug → ergibt /slug/ (trailingSlash always). */
  slug: string;
  /** H1 + <title>-Basis. */
  title: string;
  /** SEO meta description, ~150-165 Zeichen. */
  description: string;
  /** Eyebrow/Kicker über der H1. */
  kicker: string;
  /** Hero-Intro-Absätze. */
  intro: string[];
  /** "Wichtige Punkte"-Box (TL;DR). */
  takeaways?: string[];
  /** Für wen ist das? (Kontext-Attribute, sichtbar + Schema). */
  bestFor?: string[];
  /** Bezirk-Slug (districts.ts) → Stay22-Karte + Bezirks-Cross-Link. */
  districtSlug?: string;
  /** Kategorie-Slug (categories.ts) → /kategorien/<slug>/-Cross-Link. */
  categorySlug?: string;
  /** Featured-Hotel-Slugs (hotels.ts) → HotelCard-Grid oben. */
  hotels: string[];
  /** Inhalts-Sektionen (Frage-basiert). */
  sections: ArticleSection[];
  /** FAQ → Accordion + FAQPage-Schema. */
  faq: ArticleFaq[];
  /** GetYourGuide-Suchbegriff (activities-Mode). */
  gygQuery?: string;
  /** Verwandte interne Seiten (mind. 3). */
  related: ArticleLink[];
  /** Adjacent Questions (GEO) — verlinkte Folgefragen. */
  adjacent?: ArticleLink[];
  datePublished: string;
  dateModified: string;
};

import { districtArticles } from "./articles/districts";
import { themeArticles } from "./articles/themes";

export const articles: Article[] = [...districtArticles, ...themeArticles];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articleSlugs = () => articles.map((a) => a.slug);
