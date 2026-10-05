import type { Metadata } from "next";
import MyofunktionelleTherapieContent from "@/components/MyofunktionelleTherapieContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/myofunktionelle-therapie";
const locale = "de" as const;

const TITLE = "Myofunktionelle Therapie Wien | Zahnspange Sablania";
const DESCRIPTION =
  "Myofunktionelle Therapie in Wien: Training von Zunge, Lippen und Mundmuskulatur. Beratung zu Schluckmuster und Zungenlage bei Zahnspange Sablania.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage: "/myofunktionelle-therapie/myofunktion-appliance-hand.png",
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <MyofunktionelleTherapieContent locale={locale} dict={dict} />;
}
