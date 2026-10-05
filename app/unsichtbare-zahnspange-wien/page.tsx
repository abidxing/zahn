import type { Metadata } from "next";
import UnsichtbareZahnspangeContent from "@/components/UnsichtbareZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/unsichtbare-zahnspange-wien";
const locale = "de" as const;

const TITLE = "Unsichtbare Zahnspange Wien | Zahnspange Sablania";
const DESCRIPTION =
  "Unsichtbare Zahnspange Wien: transparente Aligner und Invisalign in Wien. Diskrete Zahnkorrektur bei Zahnspange Sablania. Jetzt Beratung in 1200 Wien.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    dePath: DE_PATH,
    locale,
    ogImage:
      "/Invisible-beaces/" +
      encodeURIComponent("Unsichtbare Zahnspange Wien Invisalign oder Clear Aligners.png"),
    absoluteTitle: true,
  });
}

export default function Page() {
  const dict = getDictionary(locale);
  return <UnsichtbareZahnspangeContent locale={locale} dict={dict} />;
}
