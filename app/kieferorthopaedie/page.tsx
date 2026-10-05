import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

const FAQS = [
  {
    q: "Werden auch Erwachsene kieferorthopädisch behandelt?",
    a: "Ja. In der Ordination werden Kinder, Jugendliche und Erwachsene behandelt – mit festen Zahnspangen, Alignern und lingualen Optionen je nach Befund.",
  },
  {
    q: "Werden unsichtbare Zahnspangen angeboten?",
    a: "Ja. Es werden unter anderem transparente Aligner und unsichtbare linguale Zahnspangen angeboten.",
  },
  {
    q: "Gibt es eine Gratis Zahnspange?",
    a: "Unter bestimmten Voraussetzungen (u. a. Alter und IOTN 4 oder 5) kann eine öffentlich geförderte Behandlung möglich sein. In der Ordination werden Versicherte der ÖGK, SVS, BVAEB und KFA (Wien) behandelt. Details und Ablauf erklären wir auf der Seite zur Gratis Zahnspange.",
  },
  {
    q: "Welche Krankenkassen werden behandelt?",
    a: "ÖGK, SVS, BVAEB und KFA (besonders in Wien). Sie müssen nicht vorab prüfen, ob Ihre Kasse bei uns behandelt wird.",
  },
  {
    q: "Wer ist der behandelnde Kieferorthopäde?",
    a: "Dr. med. dent. Manish Sablania, BDS, M.Sc., ist Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien. Die Beratung ist auf Deutsch, Englisch und Hindi möglich.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Kieferorthopädie Wien | Zahnspange & Aligner",
  description:
    "Kieferorthopädie in Wien: Korrektur von Zahn- und Kieferfehlstellungen für Kinder, Jugendliche und Erwachsene. Feste Zahnspange, Aligner und Lingualtechnik.",
  dePath: "/kieferorthopaedie",
  locale,
});

export default function KieferorthopaediePage() {
  const dict = getDictionary(locale);
  const k = dict.kieferorthopaedie;
  const nd = dict.navDropdown;

  return (
    <PageContent locale={locale} dict={dict} title={k.title} lead={k.lead}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.whatIs}</h2>
      <p className="text-gray-600">{k.whatIsText}</p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.treatmentOptions}</h2>
      <p className="text-gray-600">{k.treatmentOptionsText}</p>
      <ul className="mt-6 space-y-2 list-disc pl-6 text-gray-600">
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-wien", locale)} className="text-accent hover:underline">
            {nd.invisibleBraces}
          </Link>
        </li>
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange", locale)} className="text-accent hover:underline">
            Linguale / innenliegende Zahnspange
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-kinder", locale)} className="text-accent hover:underline">
            {nd.bracesChildren}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-jugendliche", locale)} className="text-accent hover:underline">
            {nd.bracesTeens}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-erwachsene", locale)} className="text-accent hover:underline">
            {nd.bracesAdults}
          </Link>
        </li>
        <li>
          <Link href={getHref("/kfo-retainer", locale)} className="text-accent hover:underline">
            {nd.retainers}
          </Link>
        </li>
        <li>
          <Link href={getHref("/gratis-zahnspange", locale)} className="text-accent hover:underline">
            Gratis Zahnspange
          </Link>
        </li>
        <li>
          <Link href={getHref("/ueber-mich", locale)} className="text-accent hover:underline">
            Dr. Manish Sablania – Über mich
          </Link>
        </li>
      </ul>

      <p className="mt-8 text-gray-600">
        Nicht jede Auffälligkeit braucht sofort eine Zahnspange. Zehn typische Gründe für eine Untersuchung
        beschreibt der Artikel{" "}
        <Link href="/wann-zum-kieferorthopaeden" className="text-accent hover:underline">
          Wann sollte man zum Kieferorthopäden?
        </Link>
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.process}</h2>
      <p className="text-gray-600">
        {k.processText}{" "}
        <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">
          {k.processLink}
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Häufige Fragen</h2>
      <dl className="mt-6 space-y-6">
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <dt className="font-semibold text-primary">{faq.q}</dt>
            <dd className="mt-2 text-gray-600">{faq.a}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-gray-600">{k.closing}</p>
      <p className="mt-6 text-xs text-gray-500">
        Allgemeine Informationen ersetzen keine persönliche Untersuchung oder Diagnose.
      </p>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </PageContent>
  );
}
