export type ServiceCategoryId =
  | "procedure"
  | "dentist"
  | "orthodontics"
  | "general";

export interface ServiceItemConfig {
  /** German root path of the service detail page (used with getHref) */
  dePath: string;
  /** Optional icon filename in /public/icons used for cards & menus */
  iconFile?: string;
  /** If set, nav links open this URL instead of the internal dePath page */
  externalUrl?: string;
}

export interface ServiceCategoryConfig {
  id: ServiceCategoryId;
  /**
   * Items in the order they should appear in both
   * the Services mega dropdown and the services overview pages.
   */
  items: ServiceItemConfig[];
}

/**
 * Shared service menu configuration used by:
 * - Navbar mega dropdown under "Leistungen / Services"
 * - German and English services overview pages
 *
 * Labels for categories and individual items come from dictionaries:
 * - Category labels: dict.navDropdown.*
 * - Item labels: dict.navMenuLabels[dePath] (short), else dict.routeTitles[dePath]
 */
export const SERVICE_CATEGORIES: ServiceCategoryConfig[] = [
  {
    id: "procedure",
    items: [{ dePath: "/ablauf-zahnspange-kieferorthopaedie", iconFile: "Teeth whitening - oral hygiene.png" }],
  },
  {
    id: "dentist",
    items: [
      {
        dePath: "/zahnarzt-1200-wien",
        iconFile: "Veneers Crown Bridge.png",
        externalUrl: "https://wienzahnaerzte.at/",
      },
    ],
  },
  {
    id: "orthodontics",
    items: [
      { dePath: "/gratis-zahnspange", iconFile: "Free braces.png" },
      { dePath: "/unsichtbare-zahnspange-wien", iconFile: "Invisible braces Invisalign and lingual braces.png" },
      {
        dePath: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange",
        iconFile: "Invisible braces Invisalign and lingual braces.png",
      },
      { dePath: "/zahnspange-fuer-kinder", iconFile: "Free braces.png" },
      { dePath: "/zahnspange-fuer-jugendliche", iconFile: "Free braces.png" },
      { dePath: "/zahnspange-fuer-erwachsene", iconFile: "Invisible braces Invisalign and lingual braces.png" },
      { dePath: "/myofunktionelle-therapie", iconFile: "Teeth whitening - oral hygiene.png" },
      { dePath: "/kfo-retainer", iconFile: "Teeth whitening - oral hygiene.png" },
    ],
  },
  {
    id: "general",
    items: [
      { dePath: "/krone-bruecke", iconFile: "Veneers Crown Bridge.png" },
      { dePath: "/asethetic-dental-services", iconFile: "Veneers Crown Bridge.png" },
      { dePath: "/mundhygiene-wien", iconFile: "Teeth whitening - oral hygiene.png" },
      { dePath: "/zahnbleaching", iconFile: "Teeth whitening - oral hygiene.png" },
      { dePath: "/komposit-zahnfuellung", iconFile: "Aesthetic tooth-colored fillings.png" },
      { dePath: "/sportschutz-mouthguards", iconFile: "Teil und Vollprothesen   .png" },
    ],
  },
];

/** Quick lookup from dePath -> category id */
export const SERVICE_CATEGORY_BY_PATH: Record<string, ServiceCategoryId> =
  SERVICE_CATEGORIES.reduce<Record<string, ServiceCategoryId>>((acc, category) => {
    for (const item of category.items) {
      acc[item.dePath] = category.id;
    }
    return acc;
  }, {});

