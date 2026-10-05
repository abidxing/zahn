/**
 * Path mapping: German (default, root) <-> English (/en with English slugs).
 * No /de in URLs. German = root paths, English = /en/... with translated slugs.
 */

export type Locale = "de" | "en";

/**
 * Canonical German → English pairs (one EN URL each).
 * Aliases that redirect or share an EN page are listed separately.
 */
export const DE_TO_EN: Record<string, string> = {
  "/": "/en",
  "/leistungen": "/en/services",
  "/kieferorthopaedie": "/en/orthodontics",
  "/zahnspange-fuer-kinder": "/en/braces-for-children",
  "/zahnspange-fuer-jugendliche": "/en/braces-for-teens",
  "/zahnspange-fuer-erwachsene": "/en/braces-for-adults",
  "/unsichtbare-zahnspange-wien": "/en/invisible-braces",
  "/myofunktionelle-therapie": "/en/myofunctional-therapy",
  "/kfo-retainer": "/en/retainers",
  "/mundhygiene-wien": "/en/oral-hygiene",
  "/zahnbleaching": "/en/teeth-whitening",
  "/zahnersatz": "/en/dental-prosthetics",
  "/ueber-mich": "/en/about",
  "/ueber-uns": "/en/about-practice",
  "/unsere-ordination": "/en/practice",
  "/unser-team": "/en/team",
  "/vorher-nachher": "/en/before-after",
  "/vorher-nachher-fotos": "/en/before-after",
  "/kontakt": "/en/contact",
  "/online-termine": "/en/book-appointment",
  "/faqs": "/en/faqs",
  "/impressum": "/en/imprint",
  "/datenschutz": "/en/privacy-policy",
  "/ablauf-zahnspange-kieferorthopaedie": "/en/treatment-process",
  "/gratis-zahnspange": "/en/free-braces",
  "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange": "/en/lingual-braces",
  "/durchsichtige-zahnspange": "/en/clear-aligners",
  "/komposit-zahnfuellung": "/en/composite-fillings",
  "/krone-bruecke": "/en/crown-bridge",
  "/sportschutz-mouthguards": "/en/sports-mouthguards",
  "/asethetic-dental-services": "/en/aesthetic-dental-services",
  "/implantat-wien": "/en/implant-vienna",
  "/zahnarzt-1200-wien": "/en/dentist-1200-vienna",
  "/artikel": "/en/article",
};

/** Paths that redirect (excluded from sitemap; never add these to DE_TO_EN) */
export const REDIRECT_ONLY_DE_PATHS = [
  "/online-termin",
  "/online-terme",
  "/kontaktiere-uns",
  "/retention",
  "/invisalign-clear-aligner",
] as const;

/** English paths that redirect (excluded from sitemap) */
export const REDIRECT_ONLY_EN_PATHS = [
  "/en/dentist-in-vienna",
  "/en/kontaktiere-uns",
  "/en/tooth-implant",
  "/en/teeth-bleaching",
  "/en/sports-protection",
  "/en/professional-oral-hygiene-mundhygiene",
  "/en/our-practice",
  "/en/invisible-brackets",
  "/en/home-en-orthodontist-vienna",
  "/en/fee-guide",
  "/en/faqs-en",
  "/en/esthetic-dentistry",
  "/en/aesthetic-dentistry",
  "/en/dentures",
  "/en/contact-us",
  "/en/ceramic-braces",
  "/en/before-after-photos",
  "/en/about-me",
] as const;

/**
 * German paths included in the sitemap (canonical indexable URLs).
 * Includes both before/after German pages; English counterpart listed once separately.
 */
export const SITEMAP_DE_PATHS: string[] = Object.keys(DE_TO_EN);

/**
 * German-only content paths (e.g. articles without an English twin).
 * Included in the sitemap once; no EN hreflang pair.
 */
export const DE_ONLY_SITEMAP_PATHS: string[] = [
  "/gratis-zahnspange-wien-voraussetzungen",
  "/wann-zum-kieferorthopaeden",
  "/wahlkieferorthopaede-vertragskieferorthopaede-oegk",
];

/**
 * Unique English paths for sitemap (deduped).
 */
export const SITEMAP_EN_PATHS: string[] = Array.from(new Set(Object.values(DE_TO_EN)));

/**
 * Preferred German path when multiple DE URLs share one EN URL (language switcher).
 */
const EN_PREFERRED_DE: Record<string, string> = {
  "/en/before-after": "/vorher-nachher-fotos",
  "/en/book-appointment": "/online-termine",
};

/** English path -> German path (root), preferring canonicals for shared EN routes */
export const EN_TO_DE: Record<string, string> = {
  ...Object.fromEntries(Object.entries(DE_TO_EN).map(([de, en]) => [en, de])),
  ...EN_PREFERRED_DE,
};

/** @deprecated use SITEMAP_DE_PATHS — kept for compatibility */
export const DE_PATHS = SITEMAP_DE_PATHS;

/** @deprecated use SITEMAP_EN_PATHS */
export const EN_PATHS = SITEMAP_EN_PATHS;

/**
 * Get the equivalent URL for the other locale.
 */
export function getPathForLocale(pathname: string, targetLocale: Locale): string {
  const normalized = pathname?.replace(/\/$/, "") || "/";
  const path = normalized === "" ? "/" : normalized;
  if (targetLocale === "de") {
    return EN_TO_DE[path] ?? "/";
  }
  if (path.startsWith("/en")) return path;
  return DE_TO_EN[path] ?? "/en";
}

export function isEnglishPath(pathname: string): boolean {
  return pathname?.startsWith("/en") ?? false;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return isEnglishPath(pathname) ? "en" : "de";
}

/**
 * Href for a given German path and locale. Use for nav/footer links.
 */
export function getHref(dePath: string, locale: Locale): string {
  return locale === "de" ? dePath : (DE_TO_EN[dePath] ?? "/en");
}
