import type { Dictionary } from "@/lib/dictionaries";

type DictWithNavMenu = Dictionary & {
  navMenuLabels?: Record<string, string>;
};

/** Short labels for service mega-menu / mobile nav (page H1s stay in routeTitles). */
export function getServiceNavLabel(dePath: string, dict: Dictionary): string {
  const navLabels = (dict as DictWithNavMenu).navMenuLabels;
  if (navLabels?.[dePath]) return navLabels[dePath];
  const titles = dict.routeTitles as Record<string, string>;
  return titles[dePath] ?? dePath;
}
