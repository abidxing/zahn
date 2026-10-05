import type { Metadata } from "next";
import MundhygieneWienContent from "@/components/MundhygieneWienContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/mundhygiene-wien";
const locale = "de" as const;

const TITLE = "Mundhygiene Wien | Zahnspange Sablania";
const DESCRIPTION =
  "Mundhygiene Wien bei Zahnspange Sablania: professionelle Zahnreinigung und individuelle Zahnpflege – besonders sinnvoll auch bei einer Zahnspange.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage: "/mundhygiene-wien/hygiene-smile-toothbrush.png",
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <MundhygieneWienContent locale={locale} dict={dict} />;
}
