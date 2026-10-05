import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";

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

export default function ZahnspangeJugendlicheContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-jugendliche";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title =
    locale === "de" ? "Zahnspange für Jugendliche in Wien" : (titles[dePath] ?? "Zahnspange für Jugendliche");
  const lead =
    locale === "de"
      ? "Eine Zahnspange für Jugendliche in Wien richtet sich an Teenager mit Zahn- oder Kieferfehlstellungen. In der Ordination Zahnspange Sablania in Wien 1200 behandelt Dr. Manish Sablania Jugendliche kieferorthopädisch – mit fester Zahnspange, durchsichtigen Keramikbrackets oder unsichtbaren Alignern. In der Jugendphase lässt sich das Kieferwachstum oft noch gezielt nutzen."
      : leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termine", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const unsichtbarHref = getHref("/unsichtbare-zahnspange-wien", locale);
  const durchsichtigHref = getHref("/durchsichtige-zahnspange", locale);
  const gratisHref = getHref("/gratis-zahnspange", locale);
  const retainerHref = getHref("/kfo-retainer", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const kontaktHref = getHref("/kontakt", locale);

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const deFaqs: { q: string; aText: string; a: ReactNode }[] = [
    {
      q: "Welche Zahnspange eignet sich für Jugendliche?",
      aText:
        "Welche Zahnspange für Jugendliche geeignet ist, hängt von der Zahn- und Kieferfehlstellung ab. In der Praxis kommen feste Metallbrackets, durchsichtige Keramikbrackets sowie Clear Aligners bzw. Invisalign in Frage. Die passende Lösung wird nach der Diagnose in der Beratung festgelegt.",
      a: (
        <>
          Welche Zahnspange für Jugendliche geeignet ist, hängt von der Zahn- und Kieferfehlstellung ab. In der Praxis
          kommen feste Metallbrackets, durchsichtige Keramikbrackets sowie Clear Aligners bzw. Invisalign in Frage. Die
          passende Lösung wird nach der Diagnose in der Beratung festgelegt.
        </>
      ),
    },
    {
      q: "Wann ist eine Zahnspange bei Jugendlichen sinnvoll?",
      aText:
        "Eine kieferorthopädische Behandlung ist bei Jugendlichen oft sinnvoll, wenn das Wechselgebiss weitgehend abgeschlossen ist. Die wichtige Hauptphase beginnt häufig ab dem 11. oder 12. Lebensjahr. Der Wachstums-Höhepunkt liegt bei Mädchen etwa mit 11 oder 12 Jahren und bei Jungen mit 13 oder 14 Jahren. Den konkreten Startzeitpunkt klären wir individuell.",
      a: (
        <>
          Eine kieferorthopädische Behandlung ist bei Jugendlichen oft sinnvoll, wenn das Wechselgebiss weitgehend
          abgeschlossen ist. Die wichtige Hauptphase beginnt häufig ab dem 11. oder 12. Lebensjahr. Der
          Wachstums-Höhepunkt liegt bei Mädchen etwa mit 11 oder 12 Jahren und bei Jungen mit 13 oder 14 Jahren. Den
          konkreten Startzeitpunkt klären wir individuell.
        </>
      ),
    },
    {
      q: "Wie lange dauert eine Zahnspangenbehandlung?",
      aText:
        "Bei einer festsitzenden Zahnspange dauert die Behandlung im Durchschnitt etwa 18 bis 24 Monate – abhängig von der Fehlstellung. Die genaue Dauer wird in der kostenlosen Erstberatung besprochen.",
      a: (
        <>
          Bei einer festsitzenden Zahnspange dauert die Behandlung im Durchschnitt etwa 18 bis 24 Monate – abhängig von
          der Fehlstellung. Die genaue Dauer wird in der kostenlosen Erstberatung besprochen.
        </>
      ),
    },
    {
      q: "Welche Arten von Zahnspangen gibt es für Jugendliche?",
      aText:
        "Für Jugendliche bieten wir unter anderem Metallbrackets, eine durchsichtige Keramikzahnspange und unsichtbare Clear Aligners (Invisalign) an. Feste und herausnehmbare Lösungen werden je nach Befund geplant. Mehr zur unsichtbaren Zahnspange.",
      a: (
        <>
          Für Jugendliche bieten wir unter anderem Metallbrackets, eine durchsichtige Keramikzahnspange und unsichtbare
          Clear Aligners (Invisalign) an. Feste und herausnehmbare Lösungen werden je nach Befund geplant. Mehr zur{" "}
          <Link href={unsichtbarHref} className="font-medium text-accent hover:underline">
            unsichtbaren Zahnspange
          </Link>
          .
        </>
      ),
    },
    {
      q: "Was kostet eine Zahnspange für Jugendliche in Wien?",
      aText:
        "Die Kosten hängen von der gewählten Zahnspange und dem individuellen Behandlungsplan ab. In der kostenlosen Erstberatung erläutern wir die Optionen. Für anspruchsberechtigte Jugendliche kann unter bestimmten Voraussetzungen die Gratis Zahnspange in Frage kommen. Fragen dazu beantworten wir auch über die Kontaktseite.",
      a: (
        <>
          Die Kosten hängen von der gewählten Zahnspange und dem individuellen Behandlungsplan ab. In der kostenlosen
          Erstberatung erläutern wir die Optionen. Für anspruchsberechtigte Jugendliche kann unter bestimmten
          Voraussetzungen die{" "}
          <Link href={gratisHref} className="font-medium text-accent hover:underline">
            Gratis Zahnspange
          </Link>{" "}
          in Frage kommen. Fragen dazu beantworten wir auch über die{" "}
          <Link href={kontaktHref} className="font-medium text-accent hover:underline">
            Kontaktseite
          </Link>
          .
        </>
      ),
    },
    {
      q: "Wie läuft eine kieferorthopädische Beratung ab?",
      aText:
        "Die Erstberatung ist kostenlos und nur nach Terminvereinbarung. Anschließend erstellen wir Behandlungsunterlagen mit Röntgen, Fotos und digitalen Scans (ohne Abdrücke), besprechen den Plan und die passende Zahnspange. Den gesamten Ablauf finden Sie unter Ablauf Zahnspange und Kieferorthopädie.",
      a: (
        <>
          Die Erstberatung ist kostenlos und nur nach Terminvereinbarung. Anschließend erstellen wir
          Behandlungsunterlagen mit Röntgen, Fotos und digitalen Scans (ohne Abdrücke), besprechen den Plan und die
          passende Zahnspange. Den gesamten Ablauf finden Sie unter{" "}
          <Link href={ablaufHref} className="font-medium text-accent hover:underline">
            Ablauf Zahnspange und Kieferorthopädie
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: "Zahnspange für Jugendliche in Wien",
                headline: "Zahnspange für Jugendliche in Wien",
                description:
                  "Zahnspange Wien für Jugendliche und Teenager: feste oder unsichtbare Zahnspange in der Kieferorthopädie Sablania.",
                inLanguage: "de-AT",
                isPartOf: { "@id": websiteId },
                author: { "@id": doctorId },
                about: { "@id": dentistId },
                mainEntity: { "@id": `${pageUrl}#service` },
                audience: {
                  "@type": "PeopleAudience",
                  name: "Jugendliche und Teenager",
                  suggestedMinAge: 10,
                  suggestedMaxAge: 18,
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: `${base}/braces-for-teen/Jugendliche-600x469.png`,
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
                    name: "Zahnspange für Jugendliche",
                    item: pageUrl,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": `${pageUrl}#service`,
                name: "Zahnspange für Jugendliche",
                serviceType: "Kieferorthopädie / Zahnspange",
                url: pageUrl,
                provider: { "@id": dentistId },
                areaServed: {
                  "@type": "City",
                  name: "Wien",
                },
                availableLanguage: ["German", "English", "Hindi"],
                description:
                  "Kieferorthopädische Behandlung für Jugendliche und Teenager in Wien: feste Metallzahnspange, keramische Zahnspange und unsichtbare Aligner.",
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

          {/* 1. HERO SECTION */}
          <section className="mb-10 rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Feste und unsichtbare Zahnspange für Teenager
                </h2>
                <p className="mt-3 text-sm sm:text-base text-sky-50/90 leading-relaxed">
                  Als Kieferorthopäde in Wien planen wir die Zahnspange für Jugendliche individuell. Feste
                  Metallbrackets, keramische Zahnspange oder Clear Aligners kommen je nach Befund in Frage – in der
                  Ordination in Wien 1200.
                </p>
                <div className="mt-4">
                  <Link
                    href={terminHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
                  >
                    Kostenlose Erstberatung vereinbaren
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex-1 lg:mt-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
                  <Image
                    src="/braces-for-teen/Jugendliche-600x469.png"
                    alt="Jugendliche Patientin mit fester Zahnspange"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTRO SECTION */}
          <section className="mt-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Zahnspange Wien: Behandlungsmöglichkeiten für Jugendliche
            </h2>
            <p className="mt-3 mx-auto max-w-3xl text-sm sm:text-base text-slate-700 leading-relaxed">
              Zwischen etwa 10 und 18 Jahren ist oft ein guter Zeitraum für die{" "}
              <Link href={kfoHref} className="font-medium text-accent hover:underline">
                Kieferorthopädie in Wien
              </Link>
              : Das Wachstum kann die Zahnregulierung unterstützen. Unten finden Sie die wichtigsten
              Behandlungsmöglichkeiten – feste Metallbrackets, durchsichtige Keramikzahnspange und unsichtbare Aligner.
              Für jüngere Kinder gibt es eine eigene Seite zur{" "}
              <Link href={kinderHref} className="font-medium text-accent hover:underline">
                Zahnspange für Kinder
              </Link>
              .
            </p>
          </section>

          {/* 3. TREATMENT OPTIONS CARDS */}
          <section className="mt-8">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Metallbrackets */}
              <article className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/1-1536x1024.jpg"
                    alt="Junge Frau mit Metallbrackets"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">Metallbrackets</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Feste Metallbrackets sind eine bewährte Zahnspange für Jugendliche. Sie eignen sich für viele Zahn-
                    und Kieferfehlstellungen und werden individuell geplant.
                  </p>
                </div>
              </article>

              {/* Durchsichtige Zahnspange */}
              <article className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/Zahnspange-1.png"
                    alt="Durchsichtige Keramikzahnspange bei einer Jugendlichen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">
                    Durchsichtige Zahnspange – Unsichtbare Zahnspange
                  </h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Keramikbrackets sind zahnfarben und dadurch unauffälliger als Metall. Sie sind eine feste,
                    durchsichtige Option für Teenager. Mehr zur{" "}
                    <Link href={durchsichtigHref} className="font-medium text-accent hover:underline">
                      durchsichtigen Zahnspange
                    </Link>
                    .
                  </p>
                </div>
              </article>

              {/* Clear Aligners / Invisalign */}
              <article className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/gallery-7-e1671902405301.jpg"
                    alt="Jugendliche mit durchsichtigen Alignern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">
                    Clear Aligners, Invisalign Unsichtbare Zahnspange
                  </h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Clear Aligners und Invisalign sind herausnehmbare, nahezu unsichtbare Schienen. Ob sie für
                    Jugendliche geeignet sind, hängt von der Fehlstellung ab. Details zur{" "}
                    <Link href={unsichtbarHref} className="font-medium text-accent hover:underline">
                      unsichtbaren Zahnspange in Wien
                    </Link>
                    .
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* 4. WARUM WICHTIG SECTION */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Warum ist die Zahnspange für Jugendliche in der Entwicklung so wichtig?
            </h2>
            <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>Kurz gesagt:</strong> Schiefe Zähne oder eine Kieferfehlstellung können einzelne Zähne und das
                  Kiefergelenk überlasten. In der Jugend kann das Wachstum noch für die Korrektur genutzt werden.
                </p>
                <p>
                  Schiefe Zähne oder eine Kiefer-Fehlstellung führen zu Überbelastungen einzelner Regionen.
                </p>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-soft">
                  <p>
                    <strong>ACHTUNG:</strong> Das kann die Zähne selbst schädigen oder auch Probleme des
                    Zahnhalte-Apparates, des Kieferknochens, des Kiefergelenkes und der Kaumuskulatur
                    verursachen. Auch Sprachprobleme sind eine häufig Ursache.
                  </p>
                </div>
                <p>
                  Das Wachstum des Kiefers kann in diesem Alter noch optimal beeinflusst werden. Ein
                  überschießendes Wachstum muss gehemmt werden. Ein zu langsames Wachstum des Kiefers muss
                  beschleunigt werden. Das sind wichtige Aufgaben eines guten Kieferorthopäden.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src="/braces-for-teen/smiling-beautiful-cute-brunette-woman-model-casual-summer-dress-with-no-makeup-with-white-braces-teeth-making-selfie-photo-phone-isolated-scaled.jpg"
                    alt="Jugendliche mit weißer Zahnspange"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 5. VORTEILE EINER RECHTZEITIGEN BEHANDLUNG */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Eine rechtzeitige Behandlung kann bei einer Vielzahl an Problemen helfen:
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                "Man kann zukünftigen, kieferorthopädische Behandlungen vorbeugen!",
                "Psychosoziale Aspekte und Optik sind häufig Gründe das man sich nicht wohl fühlt",
                "Das Wachstum kann in dieser Zeit perfekt für die Behandlung genutzt werden. Gesichtsschädel-Wachstum, der Zahnwechsel und der Zahndurchbruch.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft flex flex-col gap-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-sm font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. WAS IST ZU BEACHTEN */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Was ist bei der kieferorthopädischen Behandlung (Zahnregulierung) einer Zahnfehlstellung zu beachten?
            </h2>
            <h3 className="mt-6 text-sm font-semibold text-[#0f2e5c]">
              Wann ist eine kieferorthopädische Behandlung bei Jugendlichen notwendig?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong>Antwort:</strong> Der Zeitpunkt ist sehr wichtig. Die Hauptphase beginnt häufig ab dem 11. oder
              12. Lebensjahr – nach dem späten Wechselgebiss.
            </p>
            <div className="mt-2 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Ab dem 11, 12 Lebensjahr beginnt die wichtige Hauptphase der Behandlung – Phase 2 beginnt
                nach Ende des späten Wechselgebisses oder direkt im Anschluss an den Zahnwechsels.
              </p>
              <p>
                Der Wachstums-Höhepunkt wird bei Mädchen etwa mit 11 oder 12 Lebensjahr und bei Jungen mit
                dem 13 oder 14 Lebensjahr erreicht.
              </p>
              <p>Ein Behandlungsstart vor / zu diesem Zeitpunkt sinnvoll und vorteilhaft!</p>
              <p className="mt-4 font-medium">
                Der richtige Startzeitpunkt der kieferorthopädischen Behandlung Zahnregulierung ist
                besonders wichtig.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
              <p className="text-sm font-semibold text-[#0f2e5c]">
                Für den richtigen Startzeitpunkt relevant:
              </p>
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm sm:text-base text-slate-700">
                <li>Das chronologische Alter</li>
                <li>Das dentale und skelettale Alter</li>
                <li>Die skelettale Entwicklung</li>
                <li>Die Art der Fehlstellung (Dysgnathie).</li>
              </ul>
            </div>

            <div className="mt-4 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Ungünstige Wachstumseinflüsse können die Fehlstellung natürlich zusätzlich verstärken. einer
                Erschwerung der Behandlung und einer Verschlechterung der Prognose beitragen.
              </p>
              <p>
                Für die optimale Behandlung der Zahnfehlstellung wie z.B. Unterkiefer- oder
                Oberkiefer-Rücklage ist das Wachstum unerlässlich.
              </p>
            </div>
          </section>

          {/* 7. BEHANDLUNGSDAUER */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Zahnspange bei Jugendlichen und die Behandlungsdauer
            </h2>
            <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>Wie lange dauert es?</strong> Je nach Zahnfehlstellung dauert eine Behandlung mit einer
                  festsitzenden Zahnspange im Durchschnitt 18–24 Monate mit Brackets. Die genaue Dauer hängt vom
                  Einzelfall ab und wird in der kostenlosen Erstberatung geklärt.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src="/braces-for-teen/Frau.png"
                    alt="Jugendliche mit fester Zahnspange"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 8. METALL- UND KERAMIKBRACKETS */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Zahnspange bei Jugendlichen – Metall- und Keramikbrackets
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-700 leading-relaxed">
              Für die feste Zahnspange in Wien stehen Metallbrackets und unauffälligere Keramikbrackets zur Verfügung.
              Welche Variante geeignet ist, hängt vom Befund und von den Wünschen der Jugendlichen ab.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-start">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="w-full bg-[#f8fafc]">
                  <Image
                    src="/braces-for-teen/Braces-1-628x649.png"
                    alt="Metallbrackets für Jugendliche"
                    width={628}
                    height={649}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="w-full bg-[#f8fafc]">
                  <Image
                    src="/braces-for-teen/close-up-portrait-young-cheerful-readhead-woman-orthodontist-1-scaled.jpg"
                    alt="Patientin mit Keramikbrackets"
                    width={2560}
                    height={1708}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 9. DER ABLAUF */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Ablauf der Zahnspangenbehandlung für Jugendliche
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-700 leading-relaxed">
              So läuft die kieferorthopädische Beratung und Behandlung in der Praxis ab: von der Erstberatung über die
              Diagnose bis zur Retention.
            </p>
            <div className="mt-4 grid gap-4">
              {[
                "Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
                "Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.",
                "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
                "Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten",
                "Wichtige und notwendigen Kontrolltermine alle 6-8 Wochen",
                "Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses",
                "Retention – der Beginn der Stabilisierung des Behandlungsergebnisses",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="group flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c6e] text-white text-xs font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              Nach der aktiven Phase sichern{" "}
              <Link href={retainerHref} className="font-medium text-accent hover:underline">
                KFO-Retainer
              </Link>{" "}
              das Ergebnis. Den gesamten Ablauf in der Kieferorthopädie finden Sie hier im Detail:{" "}
              <Link href={ablaufHref} className="text-accent font-medium hover:underline">
                Ablauf der Zahnspangenbehandlung
              </Link>
              .
            </p>
          </section>

          {/* 10. FAQ */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Häufige Fragen zur Zahnspange für Jugendliche
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-700 leading-relaxed">
              Kurze Antworten zu Zahnspange, Zeitpunkt, Dauer und Beratung in Wien – ohne pauschale Preis- oder
              Erstattungsversprechen.
            </p>
            <div className="mt-6 space-y-3">
              {deFaqs.map((item) => (
                <FaqItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* 11. FINAL CTA SECTION */}
          <section className="mt-14 mb-2 rounded-3xl bg-[#0f3c6e] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Beratung zur Zahnspange für Jugendliche vereinbaren
            </h2>
            <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
              Wir beraten Sie in der Praxis {PRACTICE.name}, {PRACTICE.streetAddress}, {PRACTICE.postalCode}{" "}
              {PRACTICE.addressLocality}, individuell zur passenden Behandlung für Jugendliche – mit festen oder
              unsichtbaren Optionen. {DOCTOR.name}, {DOCTOR.jobTitleDe}.
            </p>
            <div className="mt-5 flex justify-center">
              <Link
                href={terminHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm sm:text-base font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
              >
                Kostenlose Erstberatung vereinbaren
              </Link>
            </div>
          </section>
        </>
      )}
      {locale === "en" && (
        <>
          {/* HERO SECTION – BRACES FOR TEENS */}
          <section className="mb-10 rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Braces for teenagers aged 10 to 18
                </h2>
                <p className="mt-3 text-sm sm:text-base text-sky-50/90 leading-relaxed">
                  Modern metal brackets, clear braces and Invisalign clear aligners for teenagers – tailored orthodontic
                  treatment in Vienna.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-sky-100/90">
                  Braces for teens · free braces · Invisalign for teenagers
                </p>
                <div className="mt-4">
                  <Link
                    href={terminHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
                  >
                    Arrange a free initial consultation
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex-1 lg:mt-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
                  <Image
                    src="/braces-for-teen/Jugendliche-600x469.png"
                    alt="Teenager with braces smiling"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TREATMENT OPTIONS GRID – METAL, CLEAR, ALIGNERS */}
          <section className="mt-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Braces for teenagers
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
              You will find the various treatment options for teenagers with braces below. Click on the option you are
              interested in for full details.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/Braces-1-628x649.png"
                    alt="Metal brackets for teenagers"
                    fill
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">Metal brackets</h3>
                  <p className="mt-1 text-slate-700">
                    Adult metal brackets – young woman with grey braces.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/Zahnspange-1.png"
                    alt="Clear ceramic braces"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">Clear braces – invisible braces</h3>
                  <p className="mt-1 text-slate-700">
                    Ceramic braces for children and teenagers.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src="/braces-for-teen/gallery-7-e1671902405301.jpg"
                    alt="Clear aligners and Invisalign for teens"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <div className="px-4 py-3 text-sm">
                  <h3 className="font-semibold text-[#0f2e5c]">
                    Clear aligners, Invisalign invisible braces
                  </h3>
                  <p className="mt-1 text-slate-700">
                    Invisible braces Vienna – Invisalign Vienna clear aligners, braces for adults and teenagers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHY BRACES ARE IMPORTANT */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Why are braces so important for developing adolescents?
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>Crooked teeth or a jaw misalignment lead to overloading of individual regions.</p>
                <p>
                  <strong>ATTENTION:</strong> This can damage the teeth themselves or cause problems with the
                  periodontium, jawbone, jaw joint and chewing muscles. Speech problems are also a common consequence.
                </p>
                <p>
                  The growth of the jaw can still be optimally influenced at this age. Excessive growth must be
                  inhibited. Jaw growth that is too slow must be accelerated. These are important tasks of a good
                  orthodontist.
                </p>
                <p>Timely treatment can help with a variety of problems:</p>
                <ul className="list-disc list-outside pl-5 space-y-1">
                  <li>You can prevent future orthodontic treatments.</li>
                  <li>Psychosocial aspects and appearance are often reasons for not feeling well.</li>
                  <li>
                    Growth can be used perfectly for treatment during this time – facial skull growth, the change of
                    teeth and the eruption of teeth.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src="/braces-for-teen/smiling-beautiful-cute-brunette-woman-model-casual-summer-dress-with-no-makeup-with-white-braces-teeth-making-selfie-photo-phone-isolated-scaled.jpg"
                    alt="Teenager with white braces smiling"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TIMING OF ORTHODONTIC TREATMENT */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              The right time to start orthodontic treatment is particularly important.
            </h2>
            <h3 className="mt-4 text-sm font-semibold text-[#0f2e5c]">
              What should be taken into account during orthodontic treatment (tooth straightening) of a misaligned tooth?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong>Timing is very important:</strong>
            </p>
            <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm sm:text-base text-slate-700">
              <li>
                The important main phase of treatment begins from the age of 11 or 12 – phase 2 begins after the end of
                the late mixed dentition or directly after the change of teeth.
              </li>
              <li>
                The growth peak is reached around the age of 11 or 12 for girls and around the age of 13 or 14 for boys.
                Starting treatment at this point makes sense and is beneficial.
              </li>
            </ul>
            <p className="mt-4 font-medium text-sm sm:text-base text-slate-700">
              Relevant for the right starting time:
            </p>
            <ul className="mt-1 list-disc list-outside pl-5 space-y-1 text-sm sm:text-base text-slate-700">
              <li>The chronological age</li>
              <li>Dental and skeletal age</li>
              <li>Skeletal development</li>
              <li>The type of misalignment (dysgnathia)</li>
            </ul>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              Unfavorable growth influences can of course further exacerbate the misalignment, complicate treatment and
              worsen the prognosis. Growth is essential for the optimal treatment of tooth misalignment such as lower
              jaw or upper jaw retention.
            </p>
          </section>

          {/* DURATION & PROCESS */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Braces in teenagers and the duration of treatment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              Depending on the misalignment of the teeth, treatment with fixed braces takes an average of 18–24 months
              with brackets. In adults, the duration varies from case to case. All details will then be clarified in the
              free initial consultation.
            </p>
          </section>

          {/* TEEN BRACES GALLERY – USE REMAINING IMAGES */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0f2e5c]">
              Braces for teens – impressions
            </h2>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed max-w-3xl">
              A few impressions of braces and clear aligner treatments for teenagers in our orthodontic practice.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: "/braces-for-teen/woman-with-dental-braces-teeth-glitter-lipstick-lips-talks-smiling-widely-blurred-background-room-home-extreme-closeup-scaled.jpg",
                  alt: "Close-up of colourful braces",
                  caption: "Colourful brace smile",
                },
                {
                  src: "/braces-for-teen/close-up-portrait-young-cheerful-readhead-woman-orthodontist-1-scaled.jpg",
                  alt: "Orthodontist with cheerful teen patient",
                  caption: "Orthodontic check-up",
                },
                {
                  src: "/braces-for-teen/Frau.png",
                  alt: "Young woman showing her smile with braces",
                  caption: "Confident smile with braces",
                },
              ].map((img) => (
                <figure
                  key={img.src}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-sm text-gray-600">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* PROCESS TIMELINE */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Braces for teenagers, the process:
            </h2>
            <div className="mt-4 grid gap-4">
              {[
                "Free initial consultation for misaligned teeth in our orthodontics. Appointment only by appointment!",
                "Create treatment documents for individual treatment courses. Diagnosis with X-rays, photos and digital scans. Always without marks.",
                "Plan discussion and explanation. X-ray evaluation and the analysis discussion about which type of braces and/or brackets are necessary for the individual case.",
                "Start of treatment. Inserting the device and providing information about cleaning and wearing times.",
                "Important and necessary check-ups every 6-8 weeks.",
                "End of treatment. Removing the braces and discussing the results of the treatment.",
                "Retention – the beginning of stabilization of the treatment result.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="group flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c6e] text-white text-xs font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link href={ablaufHref} className="text-accent font-medium hover:underline">
                Here you will find the entire process in my orthodontics explained in detail.
              </Link>
            </p>
          </section>
        </>
      )}
    </PageContent>
  );
}
