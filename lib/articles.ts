/**
 * German article / blog registry.
 * English equivalents are optional — omit `enPath` for DE-only articles.
 */

export type ArticleMeta = {
  /** German URL path including leading slash */
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  image: string;
  imageAlt: string;
  datePublished: string; // ISO date YYYY-MM-DD
  dateModified: string;
  articleSection: string;
};

/** Published German articles (newest first). */
export const ARTICLES_DE: ArticleMeta[] = [
  {
    slug: "/gratis-zahnspange-wien-voraussetzungen",
    title: "Wer bekommt eine Gratis Zahnspange in Wien? Voraussetzungen einfach erklärt",
    excerpt:
      "Alter, IOTN 4 und 5, Bewilligung der Krankenkasse: für wen die Gratis Zahnspange in Wien vorgesehen ist und wie der Ablauf normalerweise funktioniert.",
    seoTitle: "Gratis Zahnspange Wien: Voraussetzungen einfach erklärt",
    seoDescription:
      "Wer bekommt eine Gratis Zahnspange in Wien? Alter, IOTN 4 und 5, Bewilligung der Krankenkasse und Ablauf einfach erklärt.",
    ogTitle: "Gratis Zahnspange in Wien: Wer hat Anspruch?",
    ogDescription:
      "Voraussetzungen für die Gratis Zahnspange einfach erklärt: Alter, schwere Fehlstellung, IOTN 4 oder 5 und Bewilligung der Krankenversicherung.",
    image: "/gratis-zahnspange/Kind-Laecheln.png",
    imageAlt: "Lächelndes Kind – Beratung zu den Voraussetzungen der Gratis Zahnspange in Wien",
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    articleSection: "Gratis Zahnspange Wien",
  },
  {
    slug: "/wann-zum-kieferorthopaeden",
    title:
      "Wann sollte man zum Kieferorthopäden? 10 wichtige Anzeichen bei Kindern und Erwachsenen",
    excerpt:
      "Zehn typische Anzeichen, bei denen eine Untersuchung beim Kieferorthopäden in Wien sinnvoll sein kann – von schiefen Zähnen bis zu Veränderungen im Erwachsenenalter.",
    seoTitle: "Kieferorthopäde Wien: 10 Anzeichen bei Kindern & Erwachsenen",
    seoDescription:
      "Kieferorthopädie Wien: Wann zum Kieferorthopäden? Zehn Anzeichen bei Kindern und Erwachsenen – von schiefen Zähnen über Kreuzbiss bis Mundatmung.",
    ogTitle: "Kieferorthopäde Wien: Wann zum Kieferorthopäden? 10 Anzeichen",
    ogDescription:
      "Zehn Anzeichen für eine kieferorthopädische Untersuchung bei Kindern und Erwachsenen – persönlich beurteilt in der Ordination in 1200 Wien.",
    image: "/galerie/practice-treatment-room-teal.jpg",
    imageAlt:
      "Behandlungsraum der Ordination Zahnspange Sablania in 1200 Wien für die Untersuchung beim Kieferorthopäden",
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    articleSection: "Kieferorthopädie Wien",
  },
  {
    slug: "/wahlkieferorthopaede-vertragskieferorthopaede-oegk",
    title: "Wahlkieferorthopäde oder Vertragskieferorthopäde: Was bezahlt die Krankenkasse?",
    excerpt:
      "Einfach erklärt: der Unterschied zwischen Kassen- und Wahlkieferorthopädie, IOTN 4–5 und möglicher Kostenerstattung der Krankenkasse.",
    seoTitle: "Wahl- oder Vertragskieferorthopäde: Was zahlt die Krankenkasse?",
    seoDescription:
      "Was ist der Unterschied zwischen Wahl- und Vertragskieferorthopäden? Erfahren Sie, wann die Krankenkasse eine Zahnspange bezahlt oder Kosten rückerstattet.",
    ogTitle: "Wahl- oder Vertragskieferorthopäde: Was zahlt die Krankenkasse?",
    ogDescription:
      "Einfach erklärt: Kassenbehandlung, Wahlkieferorthopädie, Gratis Zahnspange und mögliche Kostenerstattung der Krankenkasse.",
    image: "/gratis-zahnspange/Zahnarzt-1-e1671695799854.png",
    imageAlt:
      "Beratung zur Zahnspange und Kostenerstattung der Krankenkasse beim Kieferorthopäden in Wien",
    datePublished: "2026-07-21",
    dateModified: "2026-09-02",
    articleSection: "Kieferorthopädie und Krankenkasse",
  },
];

/** German-only article paths for the sitemap (no English twin). */
export const ARTICLE_DE_ONLY_PATHS: string[] = ARTICLES_DE.map((a) => a.slug);

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES_DE.find((a) => a.slug === slug);
}
