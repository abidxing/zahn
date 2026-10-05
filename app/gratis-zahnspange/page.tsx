import type { Metadata } from "next";
import GratisZahnspangeContent from "@/components/GratisZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/gratis-zahnspange";
const locale = "de" as const;

const TITLE = "Gratis Zahnspange in Wien | Zahnspange Sablania";
const DESCRIPTION =
  "Gratis Zahnspange in Wien: Welche Voraussetzungen gelten, welche Rolle der IOTN spielt – und wie die Beratung bei Zahnspange Sablania in Wien abläuft.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage: "/gratis-zahnspange/1-2048x1365.jpg",
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <GratisZahnspangeContent locale={locale} dict={dict} />;
}
