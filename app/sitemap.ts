import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SITEMAP_DE_PATHS, SITEMAP_EN_PATHS, DE_ONLY_SITEMAP_PATHS } from "@/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const push = (url: string, path: string, isHome: boolean) => {
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : ("monthly" as const),
      priority: isHome
        ? 1
        : path.includes("ueber-mich") ||
            path.includes("/about") ||
            path.includes("wahlkieferorthopaede") ||
            path.includes("wann-zum-kieferorthopaeden") ||
            path.includes("gratis-zahnspange-wien-voraussetzungen")
          ? 0.9
          : 0.8,
    });
  };

  for (const path of SITEMAP_DE_PATHS) {
    const urlPath = path === "/" ? "" : path;
    push(`${baseUrl}${urlPath || ""}`, path, path === "/");
  }

  for (const path of DE_ONLY_SITEMAP_PATHS) {
    push(`${baseUrl}${path}`, path, false);
  }

  for (const path of SITEMAP_EN_PATHS) {
    push(`${baseUrl}${path}`, path, path === "/en");
  }

  return entries;
}
