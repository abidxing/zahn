import type { Metadata } from "next";
import AestheticDentalServicesContent from "@/components/AestheticDentalServicesContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/asethetic-dental-services";
const locale = "de" as const;

const TITLE = "Ästhetische Zahnärztliche Leistungen | Zahnspange Sablania";
const DESCRIPTION =
  "Ästhetische zahnärztliche Leistungen in Wien bei Zahnspange Sablania: Aligner, Bleaching, Füllungen und Mundhygiene. Beratung nach individuellem Befund.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage: "/asethetic-dental-services/Aesthetik.jpg",
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <AestheticDentalServicesContent locale={locale} dict={dict} />;
}
