import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import PageContent from "@/components/PageContent";
import JsonLd from "@/components/JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE, DEFAULT_OG_IMAGE } from "@/lib/practiceInfo";
import { getInsuranceCoverageIntro } from "@/lib/healthInsurance";
import { getArticleBySlug } from "@/lib/articles";

const SLUG = "/wahlkieferorthopaede-vertragskieferorthopaede-oegk";
const OEGK_URL = "https://www.gesundheitskasse.at/cdscontent/?contentid=10007.882758";
const GV_URL = "https://www.oesterreich.gv.at/de/themen/gesundheit/gratis_zahnspange";

const FAQS = [
  {
    q: "Was ist der Unterschied zwischen einem Wahl- und einem Vertragskieferorthopäden?",
    a: "Ein Vertragskieferorthopäde rechnet genehmigte Kassenleistungen direkt mit der Krankenkasse ab. Bei einem Wahlkieferorthopäden wird die Rechnung zunächst privat bezahlt. Anschließend kann abhängig von Bewilligung und Versicherungsregeln eine Kostenerstattung beantragt werden.",
  },
  {
    q: "Erstattet die Krankenkasse 80 Prozent meiner gesamten Rechnung?",
    a: "Nicht unbedingt. Nach aktueller Information der Krankenkasse können bei einer genehmigten Wahlbehandlung 80 Prozent des gültigen Kassentarifs erstattet werden – nicht automatisch 80 Prozent der Privatrechnung. Bei Zahnspange Sablania ist das Honorar für die bewilligte Gratis-Zahnspange-Behandlung mit fester Metallzahnspange jedoch so festgelegt, dass die mögliche Kostenerstattung der Krankenkasse bei erfüllten Gratis-Zahnspange-Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) 100 Prozent unserer Rechnung abdecken kann. Diese Regelung gilt nicht für private Zusatzleistungen wie Keramik, Aligner oder Lingualtechnik.",
  },
  {
    q: "Wann bekommt ein Kind die Gratis Zahnspange?",
    a: "Grundsätzlich müssen die Altersvoraussetzungen erfüllt sein (6–18 Jahre) und eine erhebliche Zahn- oder Kieferfehlstellung der IOTN-Stufe 4 oder 5 vorliegen. Die endgültige Entscheidung trifft die zuständige Krankenkasse.",
  },
  {
    q: "Wird Invisalign von der Krankenkasse bezahlt?",
    a: "Invisalign und andere Clear Aligner gehören nicht automatisch zur öffentlich finanzierten Standardbehandlung. Ob ein Zuschuss möglich ist, sollte vor Behandlungsbeginn individuell mit der Krankenkasse geklärt werden.",
  },
  {
    q: "Muss ich die Zahnspange vor Behandlungsbeginn bewilligen lassen?",
    a: "Je nach Behandlung und Versicherung ist eine vorherige Prüfung oder Bewilligung erforderlich. Deshalb sollte der Anspruch immer vor Beginn der Therapie geklärt werden.",
  },
] as const;

const STEPS = [
  {
    title: "Erstberatung",
    text: "Beim ersten Termin werden Zähne, Kiefer und Biss untersucht. Dabei werden auch Wünsche, mögliche Behandlungsmethoden und die nächsten Schritte besprochen.",
  },
  {
    title: "Diagnostik",
    text: "Je nach Situation werden Fotos, Röntgenbilder, digitale Scans und weitere diagnostische Unterlagen benötigt.",
  },
  {
    title: "IOTN-Einstufung",
    text: "Bei Kindern und Jugendlichen wird geprüft, wie schwer die Fehlstellung ist und ob die Voraussetzungen für eine öffentlich unterstützte Behandlung vorliegen könnten.",
  },
  {
    title: "Behandlungs- und Kostenplan",
    text: "Die geplante Therapie, die voraussichtliche Dauer und die Kosten werden erläutert. Patientinnen und Patienten sollten erkennen können, welche Leistungen privat sind.",
  },
  {
    title: "Antrag bei der Krankenkasse",
    text: "Die erforderlichen Unterlagen werden entsprechend den Vorgaben bei der zuständigen Krankenkasse eingereicht. Eine notwendige Bewilligung sollte vor Beginn der Behandlung vorliegen.",
  },
  {
    title: "Behandlung und Kontrollen",
    text: "Nach der Bewilligung und der persönlichen Entscheidung beginnt die Behandlung. Regelmäßige Kontrolltermine sind wichtig, damit die Zahnbewegung beobachtet und die Apparatur angepasst werden kann.",
  },
  {
    title: "Einreichung zur Kostenerstattung",
    text: "Bei einer Wahlbehandlung werden die bezahlte Rechnung und die erforderlichen Nachweise entsprechend den Vorgaben bei der Versicherung eingereicht.",
  },
  {
    title: "Retention",
    text: "Nach der aktiven Zahnkorrektur stabilisiert ein Retainer das Ergebnis. Ohne diese Stabilisierung können sich Zähne wieder verschieben.",
  },
] as const;

export default function WahlVertragArticle({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const article = getArticleBySlug(SLUG)!;
  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${SLUG}`;
  const imageAbs = `${base}${article.image}`;
  const terminHref = getHref("/online-termine", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const ueberMichHref = getHref("/ueber-mich", locale);
  const gratisHref = getHref("/gratis-zahnspange", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const jugendHref = getHref("/zahnspange-fuer-jugendliche", locale);
  const alignerHref = getHref("/durchsichtige-zahnspange", locale);
  const retainerHref = getHref("/kfo-retainer", locale);

  const breadcrumbLd = {
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
        name: "Artikel",
        item: `${base}/artikel`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: pageUrl,
      },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: [imageAbs],
    author: {
      "@type": "Person",
      name: DOCTOR.name,
      url: `${base}/ueber-mich`,
      jobTitle: DOCTOR.jobTitleDe,
    },
    publisher: {
      "@type": "Organization",
      name: PRACTICE.name,
      url: PRACTICE.url,
      logo: {
        "@type": "ImageObject",
        url: `${base}${DEFAULT_OG_IMAGE}`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "de-AT",
    articleSection: article.articleSection,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <PageContent
      title={article.title}
      lead="Wahlkieferorthopäde und Krankenkasse – Abrechnung, Kassentarif und mögliche Kostenerstattung verständlich erklärt."
      locale={locale}
      dict={dict}
      skipProse
      hideHeader
    >
      <article className="mx-auto max-w-3xl">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Kieferorthopädie &amp; Krankenkasse
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Wahlkieferorthopäde oder Vertragskieferorthopäde: Was bezahlt die Krankenkasse?
          </h1>
          <p className="text-sm text-gray-600">
            Autor und medizinisch geprüft von:{" "}
            <Link href={ueberMichHref} className="font-semibold text-accent hover:underline">
              {DOCTOR.name}, {DOCTOR.credentials}
            </Link>
            <br />
            Fachzahnarzt für Kieferorthopädie
          </p>
          <p className="text-sm text-gray-500">
            Versicherungsinformationen zuletzt geprüft: Juli 2026
          </p>
          <p className="rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
            Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle medizinische
            oder verbindliche Auskunft der Krankenkasse.
          </p>
        </header>

        <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-800">
          <p>{getInsuranceCoverageIntro(locale)}</p>
          <p>
            Wer in Wien eine Zahnspange benötigt, stößt schnell auf Begriffe wie Vertragskieferorthopäde,
            Wahlkieferorthopäde, Kassentarif und{" "}
            <Link href={gratisHref} className="font-medium text-accent hover:underline">
              Gratis Zahnspange
            </Link>
            . Für viele Familien ist zunächst nicht klar, was diese Begriffe bedeuten und welche Kosten von
            der Krankenkasse übernommen werden.
          </p>
          <p>
            Der wichtigste Unterschied liegt in der Abrechnung: Ein Vertragskieferorthopäde rechnet bestimmte
            genehmigte Kassenleistungen direkt mit der Krankenkasse ab. Bei einem Wahlkieferorthopäden
            bezahlen Patientinnen und Patienten die Rechnung grundsätzlich selbst und können anschließend –
            abhängig von Anspruch und Bewilligung – eine Kostenerstattung beantragen.
          </p>
          <p>
            Welche Regelung im konkreten Fall gilt, hängt unter anderem vom Alter, vom Befund, von der
            IOTN-Einstufung und von der gewählten Behandlung ab. Mehr zur{" "}
            <Link href={kfoHref} className="font-medium text-accent hover:underline">
              Kieferorthopädie in Wien
            </Link>{" "}
            finden Sie auf unserer Übersichtsseite.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Was ist ein Vertragskieferorthopäde?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Ein Vertragskieferorthopäde hat für bestimmte kieferorthopädische Leistungen einen direkten
              Vertrag mit der zuständigen Krankenkasse. Wenn alle Voraussetzungen erfüllt sind und die
              Behandlung bewilligt wurde, wird die entsprechende Kassenleistung direkt mit der Versicherung
              abgerechnet.
            </p>
            <p>
              Bei der sogenannten Gratis Zahnspange kann das bedeuten, dass die gesetzlich vorgesehene
              Standardbehandlung für anspruchsberechtigte Kinder und Jugendliche ohne private Behandlungskosten
              durchgeführt wird.
            </p>
            <p>
              Das gilt jedoch nicht automatisch für jede Fehlstellung und jede Art von Zahnspange. Ästhetische
              Wünsche wie Keramik-Brackets, transparente Aligner oder innenliegende Zahnspangen gehören
              normalerweise nicht zur öffentlich finanzierten Standardleistung.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Was ist ein Wahlkieferorthopäde?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Ein Wahlkieferorthopäde arbeitet nicht im gleichen Abrechnungsmodell wie ein
              Vertragskieferorthopäde. Patientinnen und Patienten erhalten eine private Rechnung und bezahlen
              diese zunächst entsprechend der Vereinbarung mit der Ordination.
            </p>
            <p>
              Anschließend können die Rechnung und die erforderlichen Behandlungsunterlagen bei der
              Krankenkasse eingereicht werden. Die Versicherung prüft, ob eine Kostenerstattung möglich
              ist und wie hoch diese ausfällt.
            </p>
            <p>
              Wichtig: Eine mögliche Erstattung richtet sich nicht automatisch nach der Höhe der Privatrechnung.
              Nach aktueller Information der Krankenkasse können bei einer genehmigten Behandlung durch einen
              entsprechend qualifizierten Wahlbehandler 80 Prozent des gültigen Kassentarifs erstattet werden.
              Das sind nicht automatisch 80 Prozent des tatsächlich bezahlten Rechnungsbetrags.
            </p>
          </div>
        </section>

        <aside className="mt-10 rounded-2xl border border-primary/20 bg-primary/[0.04] px-5 py-5 shadow-soft sm:px-6">
          <h3 className="text-lg font-bold text-primary">Wichtig vor Behandlungsbeginn</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-800 sm:text-base">
            Lassen Sie Ihren Anspruch und die notwendige Bewilligung immer vor Beginn der Behandlung von Ihrer
            Krankenkasse bestätigen. Die Regeln können sich je nach Versicherung, Befund und Behandlung
            unterscheiden.
          </p>
        </aside>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            100 % Kostenerstattung bei Zahnspange Sablania – Gratis-Zahnspange (unter 18 Jahren, IOTN 4 oder IOTN 5)
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Bei Zahnspange Sablania ist unser Honorar für die bewilligte Gratis-Zahnspangen-Behandlung mit fester
              Metallzahnspange so festgelegt, dass die mögliche Kostenerstattung der Krankenkasse bei erfüllten Gratis-Zahnspange-Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5)
              100&nbsp;% unserer Rechnung abdecken kann.
            </p>

            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Ihr Vorteil bei Zahnspange Sablania
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 sm:text-base">
                Sind die Voraussetzungen für die Gratis Zahnspange erfüllt und wurde die Behandlung von der Krankenkasse
                bewilligt, kann die Kostenerstattung 100&nbsp;% des von Zahnspange Sablania für diese konkrete
                Behandlung verrechneten Honorars abdecken. Dadurch kann für diese Leistung kein verbleibender
                Selbstbehalt entstehen.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Diese Regelung gilt für die bewilligte Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange bei
                Zahnspange Sablania. Sie gilt nicht automatisch für andere Behandlungen, private Zusatzleistungen oder
                andere kieferorthopädische Ordinationen.
              </p>
            </div>

            <div className="flex gap-3 rounded-xl border border-sky-200/80 bg-sky-50/80 px-4 py-3">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-sky-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="space-y-1 text-xs leading-relaxed text-gray-700 sm:text-sm">
                <p>
                  Besonders bei Zahnspange Sablania: Bei erfüllten Gratis-Zahnspange-Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) erhalten Sie für diese konkrete
                  Behandlung bis zu 100&nbsp;% unserer Rechnung zurück.
                </p>
                <p>
                  Die endgültige Bewilligung und Kostenerstattung erfolgt durch die Krankenkasse und hängt von der individuellen
                  Anspruchsberechtigung ab.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Wer kann die Gratis Zahnspange erhalten?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Die{" "}
              <Link href={gratisHref} className="font-medium text-accent hover:underline">
                Gratis Zahnspange
              </Link>{" "}
              richtet sich an{" "}
              <Link href={kinderHref} className="font-medium text-accent hover:underline">
                Kinder
              </Link>{" "}
              und{" "}
              <Link href={jugendHref} className="font-medium text-accent hover:underline">
                Jugendliche
              </Link>{" "}
              im Alter von 6 bis 18 Jahren mit einer erheblichen Zahn- oder Kieferfehlstellung. Anspruch besteht
              in der Regel vom 6. bis zum vollendeten 18. Lebensjahr. Eine zentrale Voraussetzung ist
              normalerweise die Einstufung in IOTN 4 oder IOTN 5.
            </p>
            <p>
              IOTN steht für „Index of Orthodontic Treatment Need“. Mit diesem international verwendeten System
              wird beurteilt, wie schwer eine Zahn- oder Kieferfehlstellung ist und wie dringend eine
              kieferorthopädische Behandlung aus medizinischer Sicht benötigt wird.
            </p>
            <p>Für eine mögliche Kassenleistung sind insbesondere folgende Punkte wichtig:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Das Kind oder der Jugendliche ist 6 bis 18 Jahre alt und erfüllt die Altersvoraussetzungen der Krankenkasse.</li>
              <li>Es liegt eine medizinisch relevante Zahn- oder Kieferfehlstellung vor.</li>
              <li>Der Befund entspricht normalerweise IOTN 4 oder IOTN 5.</li>
              <li>Die erforderliche Untersuchung und Dokumentation wurden durchgeführt.</li>
              <li>Die zuständige Krankenkasse hat die Behandlung geprüft beziehungsweise bewilligt.</li>
            </ul>
            <p>
              Eine sichtbare Fehlstellung allein bedeutet nicht automatisch, dass Anspruch auf die Gratis
              Zahnspange besteht. Die IOTN-Einstufung erfolgt im Rahmen einer kieferorthopädischen Untersuchung.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            Welche Zahnspange wird von der Krankenkasse berücksichtigt?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Bei der Gratis-Zahnspange ist normalerweise eine feste Zahnspange mit
              Metall-Brackets als Standard vorgesehen. Diese Behandlung richtet sich vor allem nach der
              medizinischen Notwendigkeit.
            </p>
            <p>Ästhetische Alternativen sind in der Regel private Leistungen. Dazu gehören beispielsweise:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>zahnfarbene Keramik-Brackets,</li>
              <li>
                transparente{" "}
                <Link href={alignerHref} className="font-medium text-accent hover:underline">
                  Clear Aligner
                </Link>
                ,
              </li>
              <li>Invisalign,</li>
              <li>innenliegende Lingualzahnspangen,</li>
              <li>weitere ästhetische Zusatzleistungen.</li>
            </ul>
            <p>
              Wenn Eltern oder Patientinnen und Patienten eine private Alternative wünschen, sollte vor
              Behandlungsbeginn geklärt werden, welche Kosten selbst zu tragen sind und ob ein Zuschuss möglich
              ist.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            Wie läuft die Behandlung bei einem Wahlkieferorthopäden ab?
          </h2>
          <ol className="mt-6 space-y-4">
            {STEPS.map((step, idx) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-soft">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-800 sm:text-base">{step.text}</p>
                  {idx === 7 ? (
                    <p className="mt-2 text-sm">
                      Mehr zu{" "}
                      <Link href={retainerHref} className="font-medium text-accent hover:underline">
                        Retainern
                      </Link>
                      .
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            Wahl- oder Vertragskieferorthopäde: Welche Möglichkeit passt besser?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Beide Möglichkeiten können sinnvoll sein. Entscheidend sind die medizinische Situation, die
              gewünschte Behandlung, die Kosten und die persönlichen Erwartungen.
            </p>
            <p>
              Ein Vertragskieferorthopäde kann passend sein, wenn eine anspruchsberechtigte Kassenbehandlung im
              Vordergrund steht und die vorgesehene Standardversorgung gewählt wird.
            </p>
            <p>
              Ein Wahlkieferorthopäde kann interessant sein, wenn Patientinnen und Patienten Wert auf eine
              individuelle Terminplanung, eine bestimmte Behandlungsmethode oder zusätzliche private Optionen
              legen. Dabei sollte jedoch von Anfang an klar sein, welche Beträge selbst bezahlt werden müssen und
              welche Erstattung möglich sein könnte.
            </p>
            <p>
              Die Entscheidung sollte nicht nur vom Preis abhängen. Wichtig sind auch Qualifikation, Erfahrung,
              verständliche Beratung, Diagnostik, Behandlungskonzept und die Betreuung während der gesamten
              Therapie.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Wahlkieferorthopäde in 1200 Wien</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              <Link href={ueberMichHref} className="font-medium text-accent hover:underline">
                {DOCTOR.name}, {DOCTOR.credentials}
              </Link>
              , ist Fachzahnarzt für Kieferorthopädie und qualifizierter Wahlkieferorthopäde für die
              Krankenkasse-Gratis-Zahnspange. Er verfügt über mehr als 28 Jahre Erfahrung und hat über 8.000
              kieferorthopädische Behandlungen und Zahnspangenfälle begleitet.
            </p>
            <p>
              In der Ordination Zahnspange Sablania in 1200 Wien werden Kinder, Jugendliche und Erwachsene
              behandelt. Zum Angebot gehören feste und herausnehmbare Zahnspangen, transparente Aligner,
              Invisalign, Lingualzahnspangen, Retainer und myofunktionelle Therapie.
            </p>
            <p>
              Beratungen sind auf Deutsch, Englisch und Hindi möglich. Vor der Behandlung werden der Befund, die
              verfügbaren Möglichkeiten, die voraussichtlichen Kosten und die notwendigen Schritte mit der
              Krankenkasse besprochen.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted px-6 py-10 text-white shadow-soft-lg sm:px-10">
          <h2 className="text-2xl font-bold">Persönliche Beratung zur Zahnspange</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Sie möchten wissen, welche Zahnspange geeignet ist und ob eine Kostenerstattung möglich sein könnte?
            Vereinbaren Sie einen persönlichen Beratungstermin bei Dr. Manish Sablania in 1200 Wien. Bitte
            beachten Sie, dass eine verbindliche Entscheidung über Anspruch, Bewilligung und Erstattung
            ausschließlich von der zuständigen Krankenkasse getroffen wird.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={terminHref}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-accent-light"
            >
              Beratungstermin vereinbaren
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              Online buchen
            </a>
            <Link
              href={kontaktHref}
              className="inline-flex rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Häufige Fragen</h2>
          <dl className="mt-6 space-y-4">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4">
                <dt className="font-semibold text-primary">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-primary">Quellen und weiterführende Informationen</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-800 sm:text-base">
            <li>
              <a
                href={OEGK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Österreichische Gesundheitskasse – Informationen zur Zahnspange und Kostenerstattung
              </a>
            </li>
            <li>
              <a
                href={GV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                oesterreich.gv.at – Gratis Zahnspange
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Die Versicherungsinformationen wurden im Juli 2026 geprüft. Tarife und Voraussetzungen können sich
            ändern. Verbindliche Auskünfte erhalten Sie direkt bei Ihrer Krankenkasse.
          </p>
        </section>
      </article>

      <JsonLd data={[articleLd, breadcrumbLd, faqLd]} />
    </PageContent>
  );
}
