import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";

const IMG = {
  products: "/mundhygiene-wien/hygiene-products-illustration.png",
  smileCare: "/mundhygiene-wien/hygiene-smile-toothbrush.png",
  airflow: "/mundhygiene-wien/ems-airflow-prophylaxis-master.png",
} as const;

function FaqItem({ question, answer }: { question: string; answer: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-gray-100 bg-white shadow-soft open:shadow-soft-lg">
      <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-primary transition-colors hover:bg-primary/[0.04] [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-3">
          <span>{question}</span>
          <span className="mt-0.5 shrink-0 text-primary-muted transition-transform group-open:rotate-180">▾</span>
        </span>
      </summary>
      <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-700">{answer}</div>
    </details>
  );
}

const PRO_EXPLAINER = {
  de: {
    sectionTitle: "Was ist professionelle Mundhygiene?",
    paragraphs: [
      "Professionelle Mundhygiene ist eine Prophylaxe in der Zahnheilkunde: Sie ergänzt die tägliche Zahnpflege an Stellen, die mit der Zahnbürste nur schwer erreichbar sind. Dort können sich Beläge, Zahnstein und Bakterien ansammeln und das Risiko für Karies, Mundgeruch oder Zahnfleischentzündungen erhöhen.",
      "Im Rahmen der professionellen Zahnreinigung werden harte und weiche Beläge schonend entfernt. Verfärbungen durch Kaffee, Tee, Nikotin oder Rotwein können oft reduziert werden. Anschließend werden die Zahnoberflächen poliert, wodurch sich neue Beläge weniger leicht festsetzen können. Auf Wunsch erfolgt zusätzlich eine Fluoridierung zur Stärkung des Zahnschmelzes.",
      "Eine professionelle Reinigung kann besonders sinnvoll sein bei empfindlichem Zahnfleisch, Implantaten, Kronen oder einer festsitzenden Zahnspange. Wie oft ein Termin ratsam ist, hängt von der individuellen Situation ab.",
      "Bei Zahnspange Sablania beraten wir Sie zur Mundhygiene und geben Hinweise für die tägliche Zahnpflege zu Hause. Ziel ist es, Ihre Zähne und Ihr Zahnfleisch zu unterstützen – ohne pauschale Garantien für Krankheitsvermeidung.",
    ],
    advantagesTitle: "Was eine professionelle Mundhygiene leisten kann",
    advantages: [
      "Entfernung von Zahnstein und Belägen",
      "Kann dazu beitragen, das Risiko für Karies und Zahnfleischentzündungen zu senken",
      "Schonende Reduktion oberflächlicher Verfärbungen",
      "Frischeres Atemgefühl und saubereres Mundgefühl",
      "Unterstützung der Zahnpflege, je nach individueller Situation",
      "Individuelle Beratung zur täglichen Zahnpflege",
    ],
    closing:
      "Kontroll- und Mundhygiene-Termine empfehlen wir individuell – je nach Zahngesundheit, Zahnfleisch und einer eventuellen Zahnspange.",
  },
  en: {
    sectionTitle: "Professional oral hygiene",
    paragraphs: [
      "Professional oral hygiene is a key part of modern dentistry and supports long-term healthy teeth and gums. Even with careful daily brushing, there are areas that are hard to reach with a toothbrush alone. Plaque, tartar and bacteria can build up there and may increase the risk of tooth decay, bad breath or gum inflammation.",
      "During professional cleaning, hard and soft deposits are removed gently. Stains from coffee, tea, nicotine or red wine can often be reduced so teeth look clean and well cared for. Surfaces are then polished, making it harder for new deposits to cling. On request, fluoride can be applied to strengthen enamel.",
      "Regular hygiene appointments support oral health. Professional cleaning can be especially relevant if you have sensitive gums, implants, crowns or fixed braces. How often a visit is advisable depends on your individual situation.",
      "Our goal is to support healthy teeth over the long term. We therefore advise you individually on oral hygiene and share practical tips you can use every day at home.",
    ],
    advantagesTitle: "Benefits of professional oral hygiene",
    advantages: [
      "Removal of tartar and soft deposits",
      "May help reduce the risk of tooth decay and gum inflammation",
      "Gentle reduction of surface stains",
      "Fresher breath and a cleaner-feeling mouth",
      "Supports oral care, depending on the individual situation",
      "Individual coaching for your home care routine",
    ],
    closing: "We recommend check-up and hygiene appointments individually, depending on oral health and any braces.",
  },
} as const;

const DE_LEAD =
  "Professionelle Mundhygiene in Wien ergänzt die tägliche Zahnpflege: Beläge und Zahnstein werden entfernt, die Zahnoberflächen poliert, und Sie erhalten Hinweise für zu Hause. Besonders an Stellen, die mit der Zahnbürste schwer erreichbar sind, können sich Beläge sammeln. Die professionelle Zahnreinigung in der Ordination entfernt harte und weiche Beläge; auf Wunsch kann eine Fluoridierung erfolgen. Bei Zahnspange Sablania in 1200 Wien führt eine erfahrene, gelernte Assistentin die Mundhygiene durch. Bei einer festen Zahnspange können sich Beläge leichter um Brackets und Drähte ansammeln – sorgfältige Zahnpflege und professionelle Reinigung sind dann besonders sinnvoll. Wie oft ein Termin ratsam ist, hängt von Ihrer individuellen Situation ab.";

const DE = {
  intro:
    "Die professionelle Mundhygiene in Wien wird in unserer Ordination durch eine erfahrene, gelernte Assistentin durchgeführt.",
  procedureH: "Was passiert bei einer Mundhygiene?",
  procedureLead:
    "Ablauf und Umfang richten sich nach dem Befund. Typischerweise gehören folgende Schritte zur professionellen Mundhygiene in unserer Ordination:",
  procedureSteps: [
    "Professionelle Zahnreinigung: Entfernung harter und weicher Beläge sowie von Zahnstein",
    "Reduktion oberflächlicher Verfärbungen, soweit möglich",
    "Politur der Zahnoberflächen",
    "Auf Wunsch Fluoridierung zur Stärkung des Zahnschmelzes",
    "Individuelle Hinweise zur Zahnpflege zu Hause",
  ],
  nutritionH: "Mundhygiene, Ernährung und Zahnpflege",
  nutritionP:
    "Neben der professionellen Mundhygiene in der Ordination spielen die tägliche Zahnpflege und eine zahngesunde Ernährung eine Rolle. Regelmäßige Mundhygiene kann dazu beitragen, das Risiko für Erkrankungen von Zahnfleisch und Zahnhalteapparat zu senken. Sie ersetzt keine individuelle zahnärztliche Beurteilung.",
  importantH: "Wie oft ist professionelle Mundhygiene sinnvoll?",
  important: [
    "Zahnarztbesuche und Mundhygiene-Intervalle richten sich nach der individuellen Situation.",
    "In der Ordination wird oft etwa zweimal im Jahr eine professionelle Mundhygiene empfohlen – bei einer Zahnspange oder empfindlichem Zahnfleisch kann ein anderer Abstand sinnvoll sein.",
    "Für zu Hause: in der Regel zweimal täglich Zähneputzen, ergänzt um Zahnseide und Mundspülung, soweit für Sie geeignet.",
  ],
  bracesH: "Mundhygiene bei einer festen Zahnspange",
  bracesLead:
    "Bei einer festsitzenden Zahnspange können sich Beläge leichter um Brackets und Drähte sammeln. Sorgfältige Zahnpflege zu Hause und professionelle Mundhygiene in der Ordination können helfen, schwer erreichbare Stellen gründlicher zu reinigen. Eine professionelle Reinigung ersetzt die tägliche Pflege nicht und verhindert Karies oder Zahnfleischentzündungen nicht automatisch.",
  airSubH: "Professionelle Mundhygiene mit Airflow",
  airIntro:
    "In der Ordination kommt unter anderem das EMS AIRFLOW Prophylaxis Master zum Einsatz. Dabei wird ein speziell aufbereitetes Pulver mit Wasser und Luftdruck verwendet.",
  airBullets: [
    "Es können oberflächliche Beläge und Verfärbungen – etwa durch Kaffee, Wein oder Nikotin – gereinigt werden.",
    "Das Verfahren kann auch gezielte, schwerer erreichbare Stellen erreichen, etwa im Umfeld einer festen Zahnspange.",
    "Ziel ist eine schonende Reinigung; ob und in welchem Umfang Airflow eingesetzt wird, hängt vom Befund ab.",
  ],
  providerH: "Mundhygiene bei Zahnspange Sablania in Wien",
  faqH: "Häufige Fragen zur Mundhygiene",
  cta: "Termin für Mundhygiene vereinbaren",
  ctaOnline: "Online terminieren",
} as const;

const EN = {
  intro:
    "The Professional Oral Hygiene is carried out by a trained and experienced Assistant in our office.",
  importantH: "Important:",
  important: [
    "visit a dentist 2x a year.",
    "Professional Oralhygiene minimum 2x a year.",
  ],
  importantLastLine1: "use 2",
  importantLastLine2: "x a day mouthwash+Dental floss and brush your teeth.",
  airH: "Mundhygiene bei Zahnspange",
  airSubH: "Mundhygiene Wien: Professional Oral hygiene with Air flow",
  airIntro: "This treatment uses sprecial processed powder with concentrated water and air pressure.",
  airBullets: [
    "-cleans not only superfacial Plaque and stains (Coffee, Wein and Nicotin ) from the teeth,",
    "-but also penetrate deep into particular targeted areas as well.",
    "-so we can minimise the gums and bone problems such as caries and periodontal issues.",
    "-maintain healthy teeth for a longer period of time.",
  ] as const,
  cta: "Book a hygiene appointment",
  ctaOnline: "Book online",
} as const;

export default function MundhygieneWienContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/mundhygiene-wien";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const isDe = locale === "de";
  const title = isDe ? "Professionelle Mundhygiene in Wien" : (titles[dePath] ?? "Oral Hygiene Vienna");
  const lead = isDe ? DE_LEAD : leads[dePath];
  const u = (path: string) => getHref(path, locale);

  const kfoHref = u("/kieferorthopaedie");
  const kinderHref = u("/zahnspange-fuer-kinder");
  const jugendHref = u("/zahnspange-fuer-jugendliche");
  const erwachseneHref = u("/zahnspange-fuer-erwachsene");
  const kontaktHref = u("/kontakt");
  const terminHref = u("/online-termine");

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const deFaqs: { q: string; aText: string; a: ReactNode }[] = [
    {
      q: "Was ist professionelle Mundhygiene?",
      aText:
        "Professionelle Mundhygiene ist eine Prophylaxe in der Zahnheilkunde. Sie ergänzt die tägliche Zahnpflege, indem Beläge und Zahnstein entfernt und die Zahnoberflächen poliert werden. Bei Zahnspange Sablania in Wien führt eine erfahrene, gelernte Assistentin die Behandlung durch.",
      a: "Professionelle Mundhygiene ist eine Prophylaxe in der Zahnheilkunde. Sie ergänzt die tägliche Zahnpflege, indem Beläge und Zahnstein entfernt und die Zahnoberflächen poliert werden. Bei Zahnspange Sablania in Wien führt eine erfahrene, gelernte Assistentin die Behandlung durch.",
    },
    {
      q: "Was wird bei einer Mundhygiene gemacht?",
      aText:
        "Typischerweise werden harte und weiche Beläge sowie Zahnstein entfernt (professionelle Zahnreinigung), oberflächliche Verfärbungen soweit möglich reduziert und die Zahnoberflächen poliert. Auf Wunsch kann eine Fluoridierung erfolgen. Sie erhalten Hinweise zur Zahnpflege zu Hause. Der genaue Ablauf richtet sich nach dem Befund.",
      a: "Typischerweise werden harte und weiche Beläge sowie Zahnstein entfernt (professionelle Zahnreinigung), oberflächliche Verfärbungen soweit möglich reduziert und die Zahnoberflächen poliert. Auf Wunsch kann eine Fluoridierung erfolgen. Sie erhalten Hinweise zur Zahnpflege zu Hause. Der genaue Ablauf richtet sich nach dem Befund.",
    },
    {
      q: "Wie oft sollte man eine professionelle Mundhygiene machen?",
      aText:
        "Das Intervall hängt von Zahngesundheit, Zahnfleisch und einer eventuellen Zahnspange ab. In der Ordination wird oft etwa zweimal im Jahr eine professionelle Mundhygiene empfohlen. Ob das in Ihrem Fall passt, klären wir individuell.",
      a: "Das Intervall hängt von Zahngesundheit, Zahnfleisch und einer eventuellen Zahnspange ab. In der Ordination wird oft etwa zweimal im Jahr eine professionelle Mundhygiene empfohlen. Ob das in Ihrem Fall passt, klären wir individuell.",
    },
    {
      q: "Warum ist Mundhygiene bei einer Zahnspange wichtig?",
      aText:
        "Um Brackets und Drähte einer festen Zahnspange können sich Beläge leichter ansammeln. Sorgfältige Zahnpflege und professionelle Mundhygiene können helfen, schwer erreichbare Stellen gründlicher zu reinigen. Sie garantieren nicht, dass Karies oder Zahnfleischentzündungen ausbleiben.",
      a: (
        <>
          Um Brackets und Drähte einer festen Zahnspange können sich Beläge leichter ansammeln. Sorgfältige Zahnpflege
          und professionelle Mundhygiene können helfen, schwer erreichbare Stellen gründlicher zu reinigen. Sie
          garantieren nicht, dass Karies oder Zahnfleischentzündungen ausbleiben. Mehr zur{" "}
          <Link href={kfoHref} className="font-medium text-accent underline hover:text-primary">
            Kieferorthopädie in Wien
          </Link>
          .
        </>
      ),
    },
    {
      q: "Kann man mit einer festen Zahnspange eine Mundhygiene machen?",
      aText:
        "Ja. Eine professionelle Mundhygiene ist bei fester Zahnspange möglich und oft besonders sinnvoll. In der Ordination kann unter anderem Airflow zum Einsatz kommen, um Beläge an schwer erreichbaren Stellen zu reinigen. Ob das Verfahren geeignet ist, hängt vom Befund ab.",
      a: "Ja. Eine professionelle Mundhygiene ist bei fester Zahnspange möglich und oft besonders sinnvoll. In der Ordination kann unter anderem Airflow zum Einsatz kommen, um Beläge an schwer erreichbaren Stellen zu reinigen. Ob das Verfahren geeignet ist, hängt vom Befund ab.",
    },
    {
      q: "Wie lange dauert eine professionelle Mundhygiene?",
      aText:
        "In der Online-Terminvergabe werden unter anderem Mundhygiene für Kinder (30 Minuten) und für Erwachsene (45 Minuten) angeboten. Die konkrete Dauer kann je nach Situation abweichen. Aktuelle Angaben erhalten Sie bei der Terminvereinbarung.",
      a: (
        <>
          In der Online-Terminvergabe werden unter anderem Mundhygiene für Kinder (30 Minuten) und für Erwachsene (45
          Minuten) angeboten. Die konkrete Dauer kann je nach Situation abweichen. Aktuelle Angaben erhalten Sie bei
          der{" "}
          <Link href={terminHref} className="font-medium text-accent underline hover:text-primary">
            Online-Terminvergabe
          </Link>
          .
        </>
      ),
    },
    {
      q: "Was kostet Mundhygiene in Wien?",
      aText:
        "Auf dieser Seite ist kein verbindlicher Preis hinterlegt. Die Kosten hängen von der konkreten Leistung ab. Aktuelle Honorare erfahren Sie in der Ordination oder bei der Terminvereinbarung.",
      a: (
        <>
          Auf dieser Seite ist kein verbindlicher Preis hinterlegt. Die Kosten hängen von der konkreten Leistung ab.
          Aktuelle Honorare erfahren Sie in der Ordination oder über{" "}
          <Link href={kontaktHref} className="font-medium text-accent underline hover:text-primary">
            Kontakt
          </Link>
          .
        </>
      ),
    },
    {
      q: "Wie vereinbare ich einen Termin für Mundhygiene in Wien?",
      aText:
        "Sie können einen Termin für Mundhygiene online buchen oder die Ordination Zahnspange Sablania in 1200 Wien kontaktieren.",
      a: (
        <>
          Sie können einen Termin für Mundhygiene{" "}
          <Link href={terminHref} className="font-medium text-accent underline hover:text-primary">
            online buchen
          </Link>{" "}
          oder die Ordination Zahnspange Sablania in 1200 Wien über{" "}
          <Link href={kontaktHref} className="font-medium text-accent underline hover:text-primary">
            Kontakt
          </Link>{" "}
          erreichen.
        </>
      ),
    },
  ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      {isDe ? (
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: "Professionelle Mundhygiene in Wien",
              headline: "Professionelle Mundhygiene in Wien",
              description:
                "Mundhygiene Wien: professionelle Zahnreinigung und individuelle Zahnpflege bei Zahnspange Sablania – auch bei fester Zahnspange.",
              inLanguage: "de-AT",
              isPartOf: { "@id": websiteId },
              author: { "@id": doctorId },
              about: { "@id": dentistId },
              mainEntity: { "@id": `${pageUrl}#service` },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${base}${IMG.smileCare}`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Startseite",
                  item: `${base}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Mundhygiene Wien",
                  item: pageUrl,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: "Professionelle Mundhygiene",
              serviceType: "Mundhygiene / professionelle Zahnreinigung",
              url: pageUrl,
              provider: { "@id": dentistId },
              areaServed: {
                "@type": "City",
                name: "Wien",
              },
              availableLanguage: ["German", "English", "Hindi"],
              description:
                "Professionelle Mundhygiene in Wien: Entfernung von Belägen und Zahnstein, Politur und Beratung zur Zahnpflege – auch bei fester Zahnspange.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: deFaqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.aText,
                },
              })),
            },
          ]}
        />
      ) : null}

      <div className="space-y-0">
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[21/9] min-h-[200px] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
            <Image
              src={IMG.smileCare}
              alt={isDe ? "Zahnpflege mit Zahnbürste" : "Brushing teeth"}
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </section>

        <ProfessionalHygieneExplainer isDe={isDe} />

        {isDe ? (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-6 sm:mt-16">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{DE.intro}</p>
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{DE.procedureH}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-800">{DE.procedureLead}</p>
                <ol className="mt-5 space-y-3">
                  {DE.procedureSteps.map((step, idx) => (
                    <li key={step} className="flex gap-4 text-gray-800">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="pt-1 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{DE.nutritionH}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-800">{DE.nutritionP}</p>
              </div>
            </section>

            <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white shadow-soft-lg">
                <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-10">
                  <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm">
                    <Image
                      src={IMG.products}
                      alt="Illustration von Zahnbürste, Zahncreme und Mundpflegeprodukten"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 85vw, 400px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{DE.importantH}</h2>
                    <ul className="mt-5 list-none space-y-4">
                      {DE.important.map((line) => (
                        <li key={line} className="flex gap-3 text-gray-800">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <AirFlowBlock
              airH={DE.bracesH}
              airSubH={DE.airSubH}
              airIntro={DE.airIntro}
              airLead={DE.bracesLead}
              airBullets={DE.airBullets}
              isDe
              extra={
                <p className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Zur kieferorthopädischen Behandlung in Wien siehe{" "}
                  <Link href={kfoHref} className="font-medium text-accent underline hover:text-primary">
                    Kieferorthopädie in Wien
                  </Link>
                  ,{" "}
                  <Link href={kinderHref} className="font-medium text-accent underline hover:text-primary">
                    Zahnspange für Kinder
                  </Link>
                  ,{" "}
                  <Link href={jugendHref} className="font-medium text-accent underline hover:text-primary">
                    Zahnspange für Jugendliche
                  </Link>{" "}
                  und{" "}
                  <Link href={erwachseneHref} className="font-medium text-accent underline hover:text-primary">
                    Zahnspange für Erwachsene
                  </Link>
                  .
                </p>
              }
            />

            <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">{DE.providerH}</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-800">
                {DOCTOR.name} ist {DOCTOR.jobTitleDe}. Die professionelle Mundhygiene findet in der Ordination{" "}
                {PRACTICE.name}, {PRACTICE.streetAddress}, {PRACTICE.postalCode} {PRACTICE.addressLocality}, statt.
                Terminvereinbarung ist online oder über die Ordination möglich.
              </p>
            </section>

            <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
              <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{DE.faqH}</h2>
              <div className="mt-8 space-y-3">
                {deFaqs.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{EN.intro}</p>
            </section>

            <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white shadow-soft-lg">
                <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-10">
                  <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm">
                    <Image
                      src={IMG.products}
                      alt="Illustration of toothbrush, toothpaste and oral-care products"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 85vw, 400px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{EN.importantH}</h2>
                    <ul className="mt-5 list-none space-y-4">
                      {EN.important.map((line) => (
                        <li key={line} className="flex gap-3 text-gray-800">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                      <li className="flex gap-3 text-gray-800">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span className="leading-relaxed">
                          {EN.importantLastLine1}
                          <br />
                          {EN.importantLastLine2}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <AirFlowBlock
              airH={EN.airH}
              airSubH={EN.airSubH}
              airIntro={EN.airIntro}
              airBullets={EN.airBullets}
              isDe={false}
            />
          </>
        )}

        <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-16">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
          >
            {isDe ? DE.cta : EN.cta}
          </a>
          <Link
            href={terminHref}
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
          >
            {isDe ? DE.ctaOnline : EN.ctaOnline}
          </Link>
          <Link
            href={kontaktHref}
            className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            {isDe ? "Kontakt" : "Contact"}
          </Link>
        </section>
      </div>
    </PageContent>
  );
}

function HygieneBenefitCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ProfessionalHygieneExplainer({ isDe }: { isDe: boolean }) {
  const c = isDe ? PRO_EXPLAINER.de : PRO_EXPLAINER.en;

  return (
    <section
      className="mx-auto mt-12 max-w-4xl sm:mt-16"
      aria-labelledby="professional-hygiene-explainer-title"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft-lg">
        <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-accent" aria-hidden />

        <div className="space-y-5 px-6 py-8 text-gray-800 sm:space-y-6 sm:p-10">
          <h2
            id="professional-hygiene-explainer-title"
            className="text-2xl font-bold tracking-tight text-primary sm:text-3xl sm:leading-snug"
          >
            {c.sectionTitle}
          </h2>
          <div className="max-w-prose space-y-5 border-l-[3px] border-primary/20 pl-5 sm:pl-6">
            {c.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-gray-800 text-pretty sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 bg-[#fafbfc] px-6 py-8 sm:px-10 sm:py-10">
          <h3 className="text-xl font-bold text-primary sm:text-2xl">{c.advantagesTitle}</h3>
          <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 sm:gap-5">
            {c.advantages.map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-soft transition-all duration-200 hover:border-primary/20 hover:shadow-soft-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <HygieneBenefitCheckIcon className="h-[22px] w-[22px] stroke-[2.25]" />
                </span>
                <p className="min-w-0 pt-2 text-sm font-medium leading-relaxed text-gray-800 text-pretty sm:pt-1.5 sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-white to-accent/[0.05] px-5 py-6 text-center sm:px-8 sm:py-7">
            <p className="font-serif text-base font-semibold leading-relaxed text-primary sm:text-lg sm:leading-snug">
              {c.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AirFlowBlock({
  airH,
  airSubH,
  airIntro,
  airLead,
  airBullets,
  isDe,
  extra,
}: {
  airH: string;
  airSubH: string;
  airIntro: string;
  airLead?: string;
  airBullets: readonly string[];
  isDe: boolean;
  extra?: ReactNode;
}) {
  return (
    <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{airH}</h2>
      {airLead ? <p className="mt-4 text-base leading-relaxed text-gray-800">{airLead}</p> : null}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{airSubH}</h3>
      <figure className="mt-6">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f6f8] shadow-soft">
          <Image
            src={IMG.airflow}
            alt={
              isDe
                ? "EMS AIRFLOW Prophylaxis Master – Gerät für professionelle Prophylaxe"
                : "EMS AIRFLOW Prophylaxis Master — professional prophylaxis device"
            }
            fill
            className="object-contain object-center p-6 sm:p-8"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        <figcaption className="mx-auto mt-4 max-w-prose text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          {isDe
            ? "EMS AIRFLOW Prophylaxis Master – System für eine schonende professionelle Mundhygiene in der Ordination."
            : "EMS AIRFLOW Prophylaxis Master – advanced system for gentle, effective professional oral hygiene and preventive care."}
        </figcaption>
      </figure>
      <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-gray-800">{airIntro}</p>
      <ul className="mt-5 list-none space-y-2 pl-0 text-gray-800">
        {airBullets.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
      {extra}
    </section>
  );
}
