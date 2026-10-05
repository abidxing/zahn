import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

const FAQS = [
  {
    q: "Does Dr. Sablania treat adults?",
    a: "Yes. Children, teenagers and adults are treated with fixed braces, clear aligners and lingual options depending on the diagnosis.",
  },
  {
    q: "Are clear aligners available?",
    a: "Yes. Clear aligners and invisible lingual braces are among the options offered at the practice.",
  },
  {
    q: "Does the practice offer publicly funded braces?",
    a: "Under certain conditions (including age and IOTN grades 4 or 5), publicly funded treatment may be possible. The practice treats patients with ÖGK, SVS, BVAEB and KFA (Vienna). Details are on the publicly funded braces page.",
  },
  {
    q: "Which health insurance funds do you treat?",
    a: "ÖGK, SVS, BVAEB and KFA (especially in Vienna). You do not need to ask in advance whether we accept your fund.",
  },
  {
    q: "Is Dr. Manish Sablania an Indian orthodontist in Vienna?",
    a: "Yes. Dr. med. dent. Manish Sablania, BDS, M.Sc., is an Indian-origin specialist orthodontist and general dentist in 1200 Vienna. Consultations are available in German, English and Hindi.",
  },
  {
    q: "Is there an English-speaking dentist in Vienna at this practice?",
    a: "Yes. Consultations for orthodontics and general dentistry are available in English at the practice in Vienna’s 20th district (1200). This helps international patients, expats and anyone who prefers to discuss treatment in English.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Orthodontics Vienna | Braces & Aligners",
  description:
    "Orthodontics in Vienna with Dr. Sablania: braces and aligners for children, teens and adults. English-speaking dentist in Vienna 1200 – specialist orthodontist and general dentistry.",
  dePath: "/kieferorthopaedie",
  locale,
});

export default function OrthodonticsPage() {
  const dict = getDictionary(locale);
  const k = dict.kieferorthopaedie;
  const nd = dict.navDropdown;

  return (
    <PageContent locale={locale} dict={dict} title={k.title} lead={k.lead}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.whatIs}</h2>
      <p className="text-gray-600">{k.whatIsText}</p>

      <section className="mt-12 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Dentist in Vienna – orthodontics &amp; general dentistry</h2>
        <p className="text-gray-600 leading-relaxed">
          Looking for a{" "}
          <strong className="font-semibold text-gray-800">dentist in Vienna</strong> who also specialises in
          orthodontics? At Dr. Manish Sablania&apos;s practice in{" "}
          <strong className="font-semibold text-gray-800">1200 Vienna</strong> (20th district), you receive
          specialist brace and aligner treatment alongside general dental care – from check-ups and hygiene to
          fillings and restorative options, under one roof. The practice treats patients with{" "}
          <strong className="font-semibold text-gray-800">ÖGK, SVS, BVAEB and KFA</strong> (Vienna).
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Many patients search for an{" "}
          <strong className="font-semibold text-gray-800">English-speaking dentist in Vienna</strong>. Consultations
          are available in <strong className="font-semibold text-gray-800">English</strong>, as well as German and
          Hindi, so you can ask questions, understand your treatment plan and feel at ease – whether you live in
          Vienna long term, are new to the city or are visiting from abroad.
        </p>
        <ul className="mt-6 space-y-2 text-gray-600">
          <li>
            <Link href={getHref("/zahnarzt-1200-wien", locale)} className="font-medium text-accent hover:underline">
              Dentist in Vienna 1200 – general dentistry &amp; orthodontics
            </Link>
          </li>
          <li>
            <Link href={getHref("/ueber-mich", locale)} className="font-medium text-accent hover:underline">
              About Dr. Manish Sablania
            </Link>
          </li>
          <li>
            <Link href={getHref("/kontakt", locale)} className="font-medium text-accent hover:underline">
              Contact &amp; directions
            </Link>
          </li>
        </ul>
      </section>

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
            Lingual / inner braces
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
            Publicly funded braces
          </Link>
        </li>
        <li>
          <Link href={getHref("/ueber-mich", locale)} className="text-accent hover:underline">
            Dr. Manish Sablania – About
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.process}</h2>
      <p className="text-gray-600">
        {k.processText}{" "}
        <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">
          {k.processLink}
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Frequently asked questions</h2>
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
        General information does not replace a personal examination or diagnosis.
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
