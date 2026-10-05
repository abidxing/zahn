import type { Metadata } from "next";
import ZahnspangeJugendlicheContent from "@/components/ZahnspangeJugendlicheContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/zahnspange-fuer-jugendliche";
const locale = "de" as const;

const TITLE = "Zahnspange Wien für Jugendliche | Zahnspange Sablania";
const DESCRIPTION =
  "Zahnspange Wien für Jugendliche und Teenager: feste und unsichtbare Zahnspangen bei Zahnspange Sablania. Kostenlose Erstberatung in 1200 Wien.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage: "/braces-for-teen/Jugendliche-600x469.png",
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ZahnspangeJugendlicheContent locale={locale} dict={dict} />;
}
