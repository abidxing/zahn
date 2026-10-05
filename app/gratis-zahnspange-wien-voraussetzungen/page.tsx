import type { Metadata } from "next";
import GratisZahnspangeVoraussetzungenArticle from "@/components/GratisZahnspangeVoraussetzungenArticle";
import { getDictionary } from "@/lib/dictionaries";
import { getArticleBySlug } from "@/lib/articles";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const SLUG = "/gratis-zahnspange-wien-voraussetzungen";
const locale = "de" as const;
const article = getArticleBySlug(SLUG)!;
const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}${SLUG}`;
const ogImage = article.image.startsWith("http") ? article.image : `${base}${article.image}`;

const pageMeta = buildPageMetadata({
  title: article.seoTitle,
  description: article.seoDescription,
  dePath: SLUG,
  locale,
  absoluteTitle: true,
  deOnly: true,
  openGraphType: "article",
  ogImage: article.image,
});

export const metadata: Metadata = {
  ...pageMeta,
  openGraph: {
    ...pageMeta.openGraph,
    title: article.ogTitle,
    description: article.ogDescription,
    url: pageUrl,
    images: [{ url: ogImage }],
  },
};

export default function Page() {
  const dict = getDictionary(locale);
  return <GratisZahnspangeVoraussetzungenArticle locale={locale} dict={dict} />;
}
