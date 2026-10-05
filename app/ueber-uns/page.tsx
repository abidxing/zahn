import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import PracticeGalleryContent from "@/components/PracticeGalleryContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Unsere Praxis | Dr. Manish Sablania",
  description:
    "Moderne Kieferorthopädie-Praxis in Wien 1200: Einblicke in Wartebereich, Behandlungsräume und Ambiente der Ordination Dr. Manish Sablania.",
  alternates: {
    canonical: `${SITE_URL}/ueber-uns`,
    languages: { de: `${SITE_URL}/ueber-uns`, en: `${SITE_URL}/en/about-practice` },
  },
};

const BULLETS = [
  "Individuelle Betreuung",
  "Moderne Technik",
  "Langjährige Erfahrung",
  "Angenehme Atmosphäre",
];

export default function UeberUnsPage() {
  const dict = getDictionary(locale);
  return (
    <PageContent
      title="Unsere Praxis"
      lead="Moderne Kieferorthopädie in Wien"
      locale={locale}
      dict={dict}
      skipProse
    >
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Unsere Philosophie</h2>
        <p className="text-gray-600">
          Im Mittelpunkt unserer Praxis steht die patientenorientierte Betreuung. Wir nehmen uns
          Zeit für Ihre Anliegen und entwickeln gemeinsam mit Ihnen ein Behandlungskonzept, das zu
          Ihren Zielen und Ihrem Alltag passt. Moderne Kieferorthopädie verbindet bei uns Ästhetik,
          Funktion und Ihr Wohlbefinden.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Moderne Technologie</h2>
        <p className="text-gray-600">
          Wir setzen auf digitale Diagnostik, präzise 3D-Planung und zeitgemäße Behandlungsmethoden
          – von unsichtbaren Alignern bis zur festsitzenden Klammer. So können wir Behandlungen
          effizient und komfortabel gestalten und Ihnen ein klares Bild des geplanten Ergebnisses
          zeigen.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Warum unsere Praxis?</h2>
        <ul className="space-y-2 text-gray-600">
          {BULLETS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0f2e5c]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Praxis Bilder</h2>
        <PracticeGalleryContent locale={locale} dict={dict} />
      </section>
    </PageContent>
  );
}
