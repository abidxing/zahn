import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";
import {
  getInsuranceCoverageIntro,
  getInsuranceFundsLinkHint,
  getSupplementaryInsuranceCopy,
} from "@/lib/healthInsurance";
import HealthInsuranceFundLinks from "@/components/HealthInsuranceFundLinks";

const IMG = {
  hero:
    "/Invisible-beaces/" +
    encodeURIComponent("Unsichtbare Zahnspange Wien Invisalign oder Clear Aligners.png"),
} as const;

function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  const TagName = Tag;
  return (
    <TagName
      className={`font-bold text-primary ${Tag === "h2" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"} ${className}`}
    >
      {children}
    </TagName>
  );
}

function InsuranceRefundSection({
  locale,
  sectionTitle,
  lead,
}: {
  locale: Locale;
  sectionTitle: string;
  lead: string;
}) {
  const supplementary = getSupplementaryInsuranceCopy(locale);
  return (
    <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
      <SectionTitle className="text-center">{sectionTitle}</SectionTitle>
      <div className="mt-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-white p-6 shadow-soft sm:p-8">
        <p className="leading-relaxed text-gray-800">{getInsuranceCoverageIntro(locale)}</p>
        <p className="mt-4 leading-relaxed text-gray-800">{lead}</p>
        <p className="mt-6 text-sm font-semibold text-gray-900">{getInsuranceFundsLinkHint(locale)}</p>
        <div className="mt-4">
          <HealthInsuranceFundLinks locale={locale} />
        </div>
        <p className="mt-8 font-semibold text-gray-900">{supplementary.heading}</p>
        <p className="mt-2 leading-relaxed text-gray-800">{supplementary.body}</p>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-gray-100 bg-white shadow-soft open:shadow-soft-lg">
      <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-primary transition-colors hover:bg-primary/[0.04] [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-3">
          <span>{question}</span>
          <span className="mt-0.5 shrink-0 text-primary-muted transition-transform group-open:rotate-180">▾</span>
        </span>
      </summary>
      <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-800">{answer}</div>
    </details>
  );
}

export default function UnsichtbareZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/unsichtbare-zahnspange-wien";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const isDe = locale === "de";
  const title = isDe ? "Unsichtbare Zahnspange in Wien" : (titles[dePath] ?? "Unsichtbare Zahnspange Wien");
  const lead = isDe
    ? "Eine unsichtbare Zahnspange besteht aus transparenten Alignern – herausnehmbaren, durchsichtigen Schienen, die Zahnfehlstellungen schrittweise korrigieren, ohne sichtbare Brackets. In der Ordination Zahnspange Sablania in Wien 1200 berät Dr. Manish Sablania zu dieser diskreten kieferorthopädischen Behandlung. Zur unsichtbaren Zahnspange in Wien gehören transparente Aligner; Invisalign ist ein etabliertes Aligner-System, das in der Praxis angeboten wird. Ob Aligner für Sie geeignet sind, klären wir in einer kostenlosen Erstberatung."
    : leads[dePath];
  const terminHref = getHref("/online-termine", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const jugendHref = getHref("/zahnspange-fuer-jugendliche", locale);
  const erwachseneHref = getHref("/zahnspange-fuer-erwachsene", locale);
  const durchsichtigHref = getHref("/durchsichtige-zahnspange", locale);
  const retainerHref = getHref("/kfo-retainer", locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const deFaqs: { q: string; aText: string; a: ReactNode }[] = [
    {
      q: "Was ist eine unsichtbare Zahnspange?",
      aText:
        "Eine unsichtbare Zahnspange besteht aus transparenten Alignern: herausnehmbaren, durchsichtigen Schienen, die die Zähne schrittweise bewegen. Es werden keine Brackets oder Drähte verwendet.",
      a: "Eine unsichtbare Zahnspange besteht aus transparenten Alignern: herausnehmbaren, durchsichtigen Schienen, die die Zähne schrittweise bewegen. Es werden keine Brackets oder Drähte verwendet.",
    },
    {
      q: "Für wen eignet sich eine unsichtbare Zahnspange?",
      aText:
        "Transparente Aligner kommen für Jugendliche und Erwachsene in Frage, wenn die Zahnfehlstellung dafür geeignet ist. Ob Aligner oder eine andere Zahnspange besser passt, entscheidet die kieferorthopädische Untersuchung. Informationen gibt es auch zur Zahnspange für Jugendliche und zur Zahnspange für Erwachsene.",
      a: (
        <>
          Transparente Aligner kommen für Jugendliche und Erwachsene in Frage, wenn die Zahnfehlstellung dafür geeignet
          ist. Ob Aligner oder eine andere Zahnspange besser passt, entscheidet die kieferorthopädische Untersuchung.
          Informationen gibt es auch zur{" "}
          <Link href={jugendHref} className="font-medium text-accent hover:underline">
            Zahnspange für Jugendliche
          </Link>{" "}
          und zur{" "}
          <Link href={erwachseneHref} className="font-medium text-accent hover:underline">
            Zahnspange für Erwachsene
          </Link>
          .
        </>
      ),
    },
    {
      q: "Wie funktionieren transparente Aligner?",
      aText:
        "Die Schienen werden computergestützt geplant und im Labor angefertigt. Sie üben sanfte Kräfte aus und lenken die Zähne Schritt für Schritt in die geplante Richtung. In der Regel wird alle 12 bis 14 Tage ein neuer Aligner getragen.",
      a: "Die Schienen werden computergestützt geplant und im Labor angefertigt. Sie üben sanfte Kräfte aus und lenken die Zähne Schritt für Schritt in die geplante Richtung. In der Regel wird alle 12 bis 14 Tage ein neuer Aligner getragen.",
    },
    {
      q: "Wie lange muss man Aligner täglich tragen?",
      aText:
        "Die Aligner müssen in der Regel 20 bis 22 Stunden pro Tag getragen werden. Sie werden zum Essen, Trinken (außer Wasser) und zur Zahnpflege herausgenommen.",
      a: "Die Aligner müssen in der Regel 20 bis 22 Stunden pro Tag getragen werden. Sie werden zum Essen, Trinken (außer Wasser) und zur Zahnpflege herausgenommen.",
    },
    {
      q: "Was kostet eine unsichtbare Zahnspange in Wien?",
      aText:
        "Die Kosten hängen von der Fehlstellung und dem individuellen Behandlungsplan ab. Verbindliche Angaben erfolgen in der Beratung. Je nach Schweregrad und Art der Behandlung können Krankenkassen oder Zusatzversicherungen Teile der Behandlung erstatten.",
      a: "Die Kosten hängen von der Fehlstellung und dem individuellen Behandlungsplan ab. Verbindliche Angaben erfolgen in der Beratung. Je nach Schweregrad und Art der Behandlung können Krankenkassen oder Zusatzversicherungen Teile der Behandlung erstatten.",
    },
    {
      q: "Wie läuft eine Aligner-Behandlung ab?",
      aText:
        "Zuerst erfolgt eine kostenlose Erstberatung, danach Diagnostik mit Röntgen, Fotos und digitalen Scans. Anschließend folgen Behandlungsplan, Einsetzen der Aligner, Kontrollen und nach Abschluss oft eine Retention mit Retainern. Den Ablauf finden Sie auch unter Ablauf der Zahnspangenbehandlung.",
      a: (
        <>
          Zuerst erfolgt eine kostenlose Erstberatung, danach Diagnostik mit Röntgen, Fotos und digitalen Scans.
          Anschließend folgen Behandlungsplan, Einsetzen der Aligner, Kontrollen und nach Abschluss oft eine Retention
          mit Retainern. Den Ablauf finden Sie auch unter{" "}
          <Link href={ablaufHref} className="font-medium text-accent hover:underline">
            Ablauf der Zahnspangenbehandlung
          </Link>
          .
        </>
      ),
    },
    {
      q: "Was ist der Unterschied zwischen Invisalign und anderen Alignern?",
      aText:
        "Invisalign ist ein bestimmtes Aligner-System (Marke) zur unsichtbaren Zahnkorrektur. Transparente Aligner allgemein beschreiben die Behandlungsmethode mit durchsichtigen Schienen. Welche Variante geeignet ist, klären wir individuell in der Beratung.",
      a: "Invisalign ist ein bestimmtes Aligner-System (Marke) zur unsichtbaren Zahnkorrektur. Transparente Aligner allgemein beschreiben die Behandlungsmethode mit durchsichtigen Schienen. Welche Variante geeignet ist, klären wir individuell in der Beratung.",
    },
  ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[2/1] min-h-[200px] w-full sm:aspect-[21/9]">
            <Image
              src={IMG.hero}
              alt={isDe ? "Transparente Aligner zur Zahnkorrektur" : "Clear aligners for tooth correction"}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </section>

        {isDe ? (
          <>
            <JsonLd
              data={[
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "@id": `${pageUrl}#webpage`,
                  url: pageUrl,
                  name: "Unsichtbare Zahnspange in Wien",
                  headline: "Unsichtbare Zahnspange in Wien",
                  description:
                    "Unsichtbare Zahnspange Wien: transparente Aligner und Invisalign in Wien. Diskrete Zahnkorrektur bei Zahnspange Sablania.",
                  inLanguage: "de-AT",
                  isPartOf: { "@id": websiteId },
                  author: { "@id": doctorId },
                  about: { "@id": dentistId },
                  mainEntity: { "@id": `${pageUrl}#service` },
                  audience: {
                    "@type": "PeopleAudience",
                    name: "Jugendliche und Erwachsene",
                  },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: `${base}${IMG.hero}`,
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
                      name: "Unsichtbare Zahnspange Wien",
                      item: pageUrl,
                    },
                  ],
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": `${pageUrl}#service`,
                  name: "Unsichtbare Zahnspange / Aligner",
                  serviceType: "Kieferorthopädie / unsichtbare Zahnspange",
                  url: pageUrl,
                  provider: { "@id": dentistId },
                  areaServed: {
                    "@type": "City",
                    name: "Wien",
                  },
                  availableLanguage: ["German", "English", "Hindi"],
                  description:
                    "Unsichtbare Zahnspange in Wien: transparente Aligner und Invisalign zur diskreten kieferorthopädischen Zahnkorrektur.",
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
            <section className="mx-auto mt-12 max-w-3xl space-y-5 sm:mt-14">
              <SectionTitle>Was ist eine unsichtbare Zahnspange?</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                Eine unsichtbare Zahnspange besteht aus transparenten Alignern: dünnen, durchsichtigen Schienen, die
                über die Zähne gesetzt werden. In der{" "}
                <Link href={kfoHref} className="font-medium text-accent hover:underline">
                  Kieferorthopädie in Wien
                </Link>{" "}
                bei Zahnspange Sablania dienen sie der diskreten Korrektur von Zahnfehlstellungen – ohne Brackets und
                Drähte.
              </p>
              <p className="leading-relaxed text-gray-800">
                Die Schienen werden mithilfe computergestützter Technologie geplant und im Labor gefertigt. Sie üben
                sanfte Kräfte aus und lenken die Zähne Schritt für Schritt in die zuvor digital geplante Richtung.
                Jugendliche und Erwachsene können so eine transparente Zahnschiene im Alltag tragen.
              </p>
              <p className="leading-relaxed text-gray-800">
                Invisalign ist ein bestimmtes Aligner-System für diese Behandlungsmethode. Andere transparente Aligner
                folgen demselben Prinzip. Welche Variante geeignet ist, hängt vom Befund ab und wird mit dem
                Fachzahnarzt für Kieferorthopädie besprochen.
              </p>
              <p className="leading-relaxed text-gray-800">
                In einigen Fällen kann die Behandlungsdauer mit Clear Aligners kürzer sein als mit einer festen
                Zahnspange; das ist nicht bei jeder Fehlstellung so. Die Eignung einer unsichtbaren Zahnspange sollte
                immer individuell entschieden werden.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Verwandte Behandlungen:{" "}
                <Link href={durchsichtigHref} className="font-medium text-accent hover:underline">
                  durchsichtige Zahnspange
                </Link>
                ,{" "}
                <Link href={jugendHref} className="font-medium text-accent hover:underline">
                  Zahnspange für Jugendliche
                </Link>{" "}
                und{" "}
                <Link href={erwachseneHref} className="font-medium text-accent hover:underline">
                  Zahnspange für Erwachsene
                </Link>
                .
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">
                Vor- und Nachteile der unsichtbaren Zahnspange bzw. Zahnregulierung
              </SectionTitle>
              <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-emerald-950 sm:text-lg">
                    Vorteile der Invisalign – Clear Aligners Therapie:
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-800">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Ästhetik:</strong> Die Clear Aligners sind nahezu unsichtbar, da sie aus
                        transparentem Material bestehen. Dadurch fällt es anderen oft nicht auf, dass man eine
                        Zahnspange trägt.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Komfort:</strong> Im Vergleich zu herkömmlichen Zahnspangen mit Brackets und
                        Drähten sind die Clear Aligners deutlich angenehmer zu tragen. Sie bestehen aus glattem
                        Kunststoff, der keine Reibung oder Irritationen im Mund verursacht.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Herausnehmbar:</strong> Die Clear Aligners können zum Essen, Trinken und zur
                        Zahnpflege einfach herausgenommen werden. Dadurch entstehen keine Einschränkungen bei der
                        Nahrungsaufnahme und die Zahnpflege gestaltet sich unkompliziert.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Präzision:</strong> Die Invisalign Clear Aligners werden mithilfe modernster
                        Computertechnologie und 3D-Bildgebung individuell für jeden Patienten angefertigt.
                        Dadurch wird eine präzise und effektive Korrektur der Zahnfehlstellungen ermöglicht.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Zeitersparnis:</strong> In einigen Fällen kann die Behandlung mit Clear Aligners
                        schneller abgeschlossen werden als mit herkömmlichen Zahnspangen. Die regelmäßigen
                        Kontrolltermine beim Kieferorthopäden sind meist weniger zeitaufwendig.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Alltagstauglichkeit:</strong> Die unsichtbare Zahnspange beeinträchtigt kaum den
                        Alltag des Patienten. Sportliche Aktivitäten, Musikinstrumente spielen oder wichtige
                        Veranstaltungen stellen keine Hindernisse dar, da die Invisaligns herausgenommen werden
                        können.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-white p-6 shadow-soft sm:p-8">
                  <p className="text-center text-sm font-semibold text-primary">
                    Transparente Aligner – Vor- und Nachteile
                  </p>
                  <h3 className="mt-4 text-base font-bold text-amber-950 sm:text-lg">
                    Nachteile der Invisalign – Clear Aligners Therapie:
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-800">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Disziplin und Eigenverantwortung:</strong> Da die Clear Aligners herausnehmbar
                        sind, erfordert die Behandlung eine Disziplin und Eigenverantwortung seitens des
                        Patienten. Die Aligners müssen konsequent für die vorgeschriebene Tragezeit (in der Regel
                        20-22 Stunden pro Tag) eingesetzt werden, um die gewünschten Ergebnisse zu erzielen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Einschränkungen bei manchen Lebensmitteln:</strong> Während der Behandlung mit
                        Invisalign sollten bestimmte Lebensmittel vermieden werden, insbesondere solche, die hart,
                        klebrig oder stark färbend sind. Der Verzicht auf diese Lebensmittel kann für manche
                        Menschen eine Einschränkung darstellen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Begrenzte Behandlungsmöglichkeiten:</strong> Obwohl die unsichtbare
                        Zahnregulierung mit Invisalign für viele Fälle von Zahnfehlstellungen geeignet ist, gibt
                        es bestimmte komplexe oder schwere Fehlstellungen, bei denen möglicherweise eine
                        herkömmliche feste Zahnspange effektiver ist. Als Kieferorthopäde kann ich die besten
                        Optionen für die individuelle Situation eines Patienten einschätzen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Regelmäßige Besuche in der Kieferorthopädie:</strong> Wie bei jeder
                        kieferorthopädischen Behandlung erfordert auch die Invisalign – Clear Aligners Therapie
                        regelmäßige Besuche beim Kieferorthopäden, um den Fortschritt zu überwachen, die Aligners
                        anzupassen und weitere Anweisungen zu erhalten. Diese Termine können für manche Menschen
                        zusätzlichen Zeitaufwand bedeuten.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  href={terminHref}
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
                >
                  Kostenlose Erstberatung für Invisalign vereinbaren
                </Link>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
              <SectionTitle>Invisalign in Wien – unsichtbare Zahnkorrektur mit Alignern</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                <strong>Kurz gesagt:</strong> Invisalign ist ein Marken-Aligner-System für die unsichtbare
                Zahnkorrektur. In der Ordination Zahnspange Sablania in Wien wird Invisalign als eine Form der
                transparenten Aligner-Behandlung angeboten – nicht als Sammelbegriff für jede unsichtbare Zahnspange.
              </p>
              <p className="mt-4 leading-relaxed text-gray-800">
                Die Behandlung mit Invisalign basiert auf einer Reihe von transparenten Alignern, die speziell für
                jeden Patienten individuell angefertigt werden. Die unsichtbaren Aligners werden 12 bis 14 Tage
                getragen, daraufhin kommen bereits neue Schienen zum Einsatz. Wir geben unseren Patienten stets 4 bis 6
                Aligners zum Wechseln mit nach Hause, damit Sie nicht jedes Mal in die Praxis kommen müssen.
              </p>
              <p className="mt-4 font-medium text-gray-900">Hier sind einige Details zur Behandlung:</p>
              <ul className="mt-5 space-y-5 border-l-2 border-primary/20 pl-5 text-gray-800">
                <li className="leading-relaxed">
                  <strong>Konsultation und Behandlungsplanung:</strong> Zu Beginn erfolgt eine ausführliche
                  Konsultation bei mir, Ihrem Kieferorthopäden, um die Ziele der Behandlung zu besprechen und
                  festzustellen, ob Invisalign die geeignete Option ist. Mithilfe moderner 3D-Bildgebungstechnologie
                  wird ein digitaler Behandlungsplan erstellt, der die Bewegung der Zähne während der gesamten
                  Behandlung zeigt.
                </li>
                <li className="leading-relaxed">
                  <strong>Anfertigung der Aligner:</strong> Basierend auf dem Behandlungsplan werden die
                  transparenten Aligner individuell im Invisalign-Labor hergestellt. Jeder Aligner wird dabei so
                  konzipiert, dass er schrittweise die gewünschte Zahnposition erreicht. In der Regel werden mehrere
                  Aligner-Sets für die gesamte Behandlung erstellt.
                </li>
                <li className="leading-relaxed">
                  <strong>Tragezeit der Aligner:</strong> Die Invisalign Aligner müssen in der Regel 20-22 Stunden
                  pro Tag getragen werden. Sie werden alle 12 bis 14 Tage gewechselt, um den Fortschritt der
                  Zahnverschiebung zu ermöglichen. Es ist wichtig, die Aligner nur zum Essen, Trinken (außer Wasser)
                  und zur Zahnpflege herauszunehmen.
                </li>
                <li className="leading-relaxed">
                  <strong>Fortschrittskontrollen:</strong> Während der Behandlung sind regelmäßige Kontrollbesuche –
                  der erste Kontrolltermin findet 8 Wochen nach Behandlungsstart statt – beim Kieferorthopäden
                  erforderlich. In diesen Terminen wird der Fortschritt überprüft, und gegebenenfalls werden
                  Anpassungen vorgenommen, um die Behandlung auf Kurs zu halten. Neue Aligner werden ausgehändigt,
                  um die Zähne weiterhin in die gewünschte Position zu bewegen. Bei jedem Termin erfolgt eine
                  digitale Computersimulation.
                </li>
                <li className="leading-relaxed">
                  <strong>Behandlungsdauer:</strong> Die Dauer der Invisalign-Behandlung variiert je nach
                  individuellem Fall. In der Regel dauert sie jedoch zwischen 6 (leicht Fälle), 18 (Mittel) und 24
                  (Schwer) Monaten. Die genaue Behandlungsdauer wird vom Kieferorthopäden basierend auf den
                  spezifischen Zahnfehlstellungen und den Behandlungszielen bestimmt.
                </li>
                <li className="leading-relaxed">
                  <strong>Nachbehandlung:</strong> Nach Abschluss der Behandlung mit Invisalign werden häufig
                  Retainer eingesetzt, um die erzielten Ergebnisse langfristig zu stabilisieren. Retainer sind
                  individuell angefertigte, transparente Schienen, die in der Regel nachts getragen werden.
                </li>
              </ul>
            </section>

            <section className="mx-auto mt-14 max-w-3xl space-y-5 sm:mt-16">
              <SectionTitle>Invisalign Behandlung für Erwachsene und Jugendliche</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                Invisalign Aligner ist eine beliebte Behandlungsmethode sowohl für Erwachsene als auch Jugendliche.
              </p>
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6">
                <p className="leading-relaxed text-gray-800">
                  Für Erwachsene ist die unsichtbare Zahnspange besonders gut mit beruflichen Anforderungen zu
                  kombinieren. Invisalign bietet eine diskrete Lösung für berufstätige Erwachsene, die während der
                  Behandlung kein offensichtliches Tragen einer Zahnspange wünschen. Die Möglichkeit, die Aligner bei
                  wichtigen beruflichen Anlässen herauszunehmen, ist ein großer Vorteil.
                </p>
              </div>
              <h3 className="text-lg font-bold text-primary sm:text-xl">Jugendliche schätzen die Diskretion der Clear Aligners</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Ästhetik und Selbstbewusstsein:</strong> Jugendliche schätzen die ästhetischen Vorteile
                    von Invisalign, da die transparenten Aligner ihnen ermöglichen, ihr Selbstbewusstsein zu bewahren
                    und sich während der Behandlung wohler zu fühlen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Sport und Aktivitäten:</strong> Invisalign bietet Jugendlichen die Flexibilität, ihren
                    Sport- und Aktivitätsroutinen uneingeschränkt nachzugehen. Die Aligner können während des Sports
                    herausgenommen werden, um Verletzungen zu vermeiden.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Soziale Interaktionen:</strong> Die Möglichkeit, die Aligner zum Essen oder bei sozialen
                    Anlässen herauszunehmen, erleichtert es den Jugendlichen, sich mit Freunden zu treffen und ihr
                    soziales Leben normal fortzusetzen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Pädagogische Unterstützung:</strong> Invisalign bietet spezielle Funktionen wie
                    Compliance-Indikatoren und spezielle Aligner für das Wachstum des Kiefers bei Jugendlichen. Dies
                    hilft dabei, die Behandlung zu überwachen und die Einhaltung des Behandlungsplans
                    sicherzustellen.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:mt-16 sm:p-8">
              <SectionTitle>Behandlung nach Schweregrad - IOTN</SectionTitle>
              <div className="mt-5 space-y-4 leading-relaxed text-gray-800">
                <p>
                  <strong>Kurz gesagt:</strong> Die Dauer der Behandlung mit Clear Alignern hängt vom Schweregrad der
                  Zahnfehlstellung ab (Index of Orthodontic Treatment Need, IOTN). Eine genaue Diagnostik und
                  Therapieplanung sind entscheidend.
                </p>
                <p>
                  Die Dauer der Behandlung mit Clear Aligners kann tatsächlich je nach Schweregrad der individuellen
                  Zahnfehlstellung (gemessen am Index of Orthodontic Treatment Need, IOTN) variieren. Eine genaue
                  Diagnostik und umfassende Therapieplanung sind entscheidende Erfolgsfaktoren für eine effektive
                  Clear Aligner-Behandlung.
                </p>
                <p>
                  Im Rahmen der Diagnostik werden verschiedene Untersuchungen durchgeführt, um den genauen Zustand
                  der Zahnfehlstellung zu erfassen. Dazu gehören Röntgenbilder, Abdrücke der Zähne und möglicherweise
                  auch digitale 3D-Scans. Basierend auf diesen Informationen wird ein Therapieplan entwickelt, der die
                  spezifischen Ziele und Bedürfnisse des Patienten berücksichtigt.
                </p>
                <p>
                  Die Herstellung der Set-Up-Modelle, die die gewünschte Zahnposition am Ende der Behandlung
                  darstellen, ist ein weiterer wichtiger Schritt. Diese Modelle werden verwendet, um die Aligner
                  individuell anzufertigen und sicherzustellen, dass sie optimal auf die Zähne passen und die
                  gewünschten Bewegungen erreichen.
                </p>
                <p>
                  Die Fertigung der Clear Aligner erfolgt im Labor unter Verwendung fortschrittlicher
                  computergestützter Technologie. Jeder Aligner wird speziell für den Patienten hergestellt und ist
                  darauf ausgelegt, die Zähne schrittweise in die gewünschte Position zu bewegen.
                </p>
                <p>
                  Es ist wichtig zu betonen, dass die Zielerreichung und die Behandlungsdauer auch von der Mitarbeit
                  des Patienten abhängen. Das Tragen der Aligner für die vorgeschriebene Tragezeit pro Tag und das
                  regelmäßige Einsetzen neuer Aligner gemäß dem Behandlungsplan sind entscheidend, um den gewünschten
                  Fortschritt zu erzielen.
                </p>
              </div>
            </section>

            <InsuranceRefundSection
              locale={locale}
              sectionTitle="Invisalign Clear Aligners – Rückerstattung durch Krankenkasse (ÖGK, SVS, BVAEB, KFA) oder Zusatzversicherung"
              lead="Je nach Schwergrad der Zahnfehlstellung und Art der Behandlung können Krankenkassen oder Zusatzversicherungen Teile der Behandlung erstatten."
            />

            <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
              <SectionTitle>Ablauf der Aligner-Behandlung in Wien</SectionTitle>
              <p className="mt-4 leading-relaxed text-gray-800">
                Die Beratung zur unsichtbaren Zahnspange findet in der Ordination {PRACTICE.name},{" "}
                {PRACTICE.streetAddress}, {PRACTICE.postalCode} {PRACTICE.addressLocality}, statt.{" "}
                {DOCTOR.name} ist {DOCTOR.jobTitleDe}.
              </p>
              <h3 className="mt-8 text-lg font-bold text-primary">So läuft die Aligner-Behandlung ab</h3>
              <ol className="mt-6 space-y-0">
                {[
                  "Kostenlose Erstberatung für Zahnfehlstellungen in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
                  "Behandlungsunterlagen für individuellen Behandlungsverlauf werden erstellt. Eine Diagnose mit Röntgen, Fotos und digitalen Scans erfolgt – ohne Abdrücke.",
                  "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
                  "Behandlungsbeginn. Einsetzen des Geräts und Aufklärung über Reinigung sowie Tragezeiten.",
                  "Wichtige und notwendige Kontrolltermine alle 6-8 Wochen",
                  "Behandlungsende. Entfernen der unsichtbaren Zahnspange und Besprechung des Behandlungsergebnisses.",
                  "Retention – der Beginn der Stabilisierung des Behandlungsergebnisses.",
                ].map((step, i) => {
                  const isRet = step.startsWith("Retention");
                  return (
                    <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < 6 && (
                        <span
                          className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                          isRet ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="leading-relaxed text-gray-800">
                          {isRet ? (
                            <>
                              <strong>Retention</strong>
                              {" – der Beginn der Stabilisierung des Behandlungsergebnisses. "}
                              <Link href={retainerHref} className="font-medium text-accent hover:underline">
                                Retainer nach der Zahnkorrektur
                              </Link>
                            </>
                          ) : (
                            step
                          )}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-6 leading-relaxed text-gray-800">
                Den gesamten Ablauf in der Kieferorthopädie finden Sie unter{" "}
                <Link href={ablaufHref} className="font-medium text-accent hover:underline">
                  Ablauf der Zahnspangenbehandlung
                </Link>
                .
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
              <SectionTitle>Häufige Fragen zur unsichtbaren Zahnspange</SectionTitle>
              <p className="mt-4 leading-relaxed text-gray-800">
                Kurze Antworten zu Alignern, Tragezeit, Ablauf und Invisalign in Wien – ohne pauschale
                Preisversprechen.
              </p>
              <div className="mt-6 space-y-3">
                {deFaqs.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </section>

            <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
              >
                Termin vereinbaren
              </a>
              <Link
                href={terminHref}
                className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
              >
                Kostenlose Erstberatung für Invisalign vereinbaren
              </Link>
              <Link
                href={kontaktHref}
                className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Kontakt
              </Link>
            </section>
          </>
        ) : (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-5 sm:mt-14">
              <SectionTitle>Invisible braces Vienna: innovative treatment with Invisalign in Vienna</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                The invisible brace treatment goes by several names, including „Invisible braces Vienna“ and „Invisalign Vienna“. This modern approach uses transparent aligner trays made with computer-aided technology in the lab.
              </p>
              <p className="leading-relaxed text-gray-800">
                Invisible braces Vienna – also known as Invisalign clear aligners – allow both teenagers and adults to benefit from clear aligner technology.
              </p>
              <p className="leading-relaxed text-gray-800">
                This aligner therapy is a state-of-the-art way to correct misalignment without brackets or wires. The trays apply gentle forces to move the teeth step by step towards the planned result.
              </p>
              <p className="leading-relaxed text-gray-800">
                In some cases treatment with clear aligners can also be shorter than with traditional methods, with fewer visits.
              </p>
              <p className="leading-relaxed text-gray-800">
                Every method has pros and cons. Suitability for the invisible brace should always be decided with a specialist orthodontist who considers your individual needs.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">Advantages and disadvantages of invisible braces</SectionTitle>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-emerald-950 sm:text-lg">Advantages of Invisalign – clear aligner therapy</h3>
                  <ul className="mt-5 space-y-3 text-gray-800">
                    <li className="leading-relaxed"><strong>Aesthetics:</strong> The aligners are almost invisible.</li>
                    <li className="leading-relaxed"><strong>Comfort:</strong> More comfortable than fixed braces; smooth plastic, no irritation.</li>
                    <li className="leading-relaxed"><strong>Removable:</strong> For eating, drinking and brushing – no dietary restrictions.</li>
                    <li className="leading-relaxed"><strong>Precision:</strong> Individually made using 3D imaging and computer technology.</li>
                    <li className="leading-relaxed"><strong>Time:</strong> In some cases treatment can be faster; check-ups often less time-consuming.</li>
                    <li className="leading-relaxed"><strong>Daily life:</strong> Sport, playing instruments and events are easier as aligners can be removed.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-amber-950 sm:text-lg">Disadvantages of Invisalign – clear aligner therapy</h3>
                  <ul className="mt-5 space-y-3 text-gray-800">
                    <li className="leading-relaxed"><strong>Discipline:</strong> Must be worn 20–22 hours per day for the best result.</li>
                    <li className="leading-relaxed"><strong>Food:</strong> Some foods (hard, sticky, strongly coloured) should be avoided.</li>
                    <li className="leading-relaxed"><strong>Limits:</strong> Some complex or severe cases may be better with fixed braces.</li>
                    <li className="leading-relaxed"><strong>Visits:</strong> Regular check-ups are still needed.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link href={terminHref} className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted">
                  Book a free Invisalign consultation
                </Link>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
              <SectionTitle>Details of treatment with Invisalign, the invisible brace</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                Treatment uses a series of transparent aligners made individually for you. Each set is worn 12–14 days. We give patients 4–6 aligners to take home so you don’t need to come in every time.
              </p>
              <p className="mt-4 font-medium text-gray-900">Details: consultation and planning with 3D imaging; aligners made in the Invisalign lab; wear 20–22 hours per day, change every 12–14 days; progress checks (first around 8 weeks); treatment duration typically 6–24 months depending on the case; after treatment, retainers are often used to stabilise the result.</p>
            </section>

            <section className="mx-auto mt-14 max-w-3xl space-y-4 sm:mt-16">
              <SectionTitle>Invisalign for adults and teenagers</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                For adults, the invisible brace fits well with work. For teenagers: aesthetics and confidence; sport and activities; social situations; compliance indicators and growth-specific options.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:mt-16 sm:p-8">
              <SectionTitle>Treatment by severity – IOTN</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                Treatment duration with clear aligners depends on the severity of misalignment (IOTN). Diagnosis and planning are key. We use X-rays, impressions or 3D scans, set-up models and lab-made aligners. Patient cooperation (wear time and changing aligners on schedule) is essential.
              </p>
            </section>

            <InsuranceRefundSection
              locale={locale}
              sectionTitle="Invisalign clear aligners – reimbursement (ÖGK, SVS, BVAEB, KFA) or supplementary insurance"
              lead="Depending on severity and type of treatment, health funds or supplementary insurance may reimburse part of the cost."
            />

            <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
              <SectionTitle>Invisible braces Vienna – Invisalign in our practice</SectionTitle>
              <p className="mt-4 leading-relaxed text-gray-800">1200 Vienna, near 1210, 1190, 1220, 1020 and Klosterneuburg.</p>
              <h3 className="mt-8 text-lg font-bold text-primary">Aligners – the process</h3>
              <ol className="mt-6 space-y-0">
                {[
                  "Free initial consultation. By appointment only!",
                  "Treatment records. Diagnosis with X-rays, photos and digital scans – without impressions.",
                  "Planning discussion. X-ray review and analysis of which brace/brackets are needed.",
                  "Start of treatment. Fitting and advice on cleaning and wear.",
                  "Check-ups every 6–8 weeks.",
                  "End of treatment. Removal and discussion of the result.",
                  "Retention – stabilising the result.",
                ].map((step, i) => {
                  const isRet = step.startsWith("Retention");
                  return (
                    <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < 6 && (
                        <span className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20" aria-hidden />
                      )}
                      <span
                        className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                          isRet ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="leading-relaxed text-gray-800">
                          {isRet ? (
                            <>
                              <strong>Retention</strong>
                              {" – stabilising the result."}
                            </>
                          ) : (
                            step
                          )}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
              >
                Book an appointment
              </a>
              <Link
                href={terminHref}
                className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
              >
                Book a free Invisalign consultation
              </Link>
              <Link
                href={kontaktHref}
                className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Contact
              </Link>
            </section>
          </>
        )}
      </div>
    </PageContent>
  );
}
