import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import PageContent from "@/components/PageContent";
import JsonLd from "@/components/JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE, DEFAULT_OG_IMAGE } from "@/lib/practiceInfo";
import { getArticleBySlug } from "@/lib/articles";

const SLUG = "/gratis-zahnspange-wien-voraussetzungen";
const OEGK_URL = "https://www.gesundheitskasse.at/cdscontent/?contentid=10007.882758";
const GV_URL = "https://www.oesterreich.gv.at/de/themen/gesundheit/gratis_zahnspange";

const IOTN = [
  "IOTN 1 bedeutet einen sehr geringen oder keinen kieferorthopädischen Behandlungsbedarf.",
  "IOTN 2 und 3 beschreiben leichtere oder mittlere Fehlstellungen.",
  "IOTN 4 steht für einen großen Behandlungsbedarf.",
  "IOTN 5 bezeichnet einen sehr großen Behandlungsbedarf.",
] as const;

const STEPS = [
  {
    title: "Kieferorthopädische Erstuntersuchung",
    text: "Zunächst werden die Zähne, der Zusammenbiss und die Kieferstellung untersucht. Dabei wird geprüft, ob Hinweise auf eine schwere Fehlstellung vorhanden sind.",
  },
  {
    title: "Diagnostik und IOTN-Einstufung",
    text: "Falls erforderlich, werden diagnostische Unterlagen erstellt. Dazu können Fotos, ein digitaler Scan, Modelle oder Röntgenaufnahmen gehören. Anschließend wird die Fehlstellung nach den geltenden Kriterien beurteilt.",
  },
  {
    title: "Erstellung des Behandlungsplans",
    text: "Wenn eine Behandlung notwendig erscheint, wird ein individueller Behandlungsplan erstellt. Dieser beschreibt die Ausgangssituation und die geplanten Behandlungsschritte.",
  },
  {
    title: "Einreichung bei der Krankenversicherung",
    text: "Die notwendigen Unterlagen werden zur Prüfung eingereicht. Je nach Behandlung kann eine vorherige Bewilligung notwendig sein.",
  },
  {
    title: "Entscheidung der Krankenversicherung",
    text: "Die endgültige Entscheidung über den Anspruch und die Kostenerstattung trifft die zuständige Krankenversicherung. Eine Empfehlung der Ordination allein ist noch keine verbindliche Bewilligung.",
  },
  {
    title: "Beginn der Behandlung",
    text: "Nach der notwendigen positiven Entscheidung kann die Behandlung entsprechend dem vereinbarten Plan beginnen.",
  },
] as const;

const FAQS = [
  {
    q: "Ist die Gratis Zahnspange wirklich zu 100 Prozent kostenlos?",
    a: "Das hängt davon ab, wo und in welcher Form die Behandlung durchgeführt wird. Zwischen Vertragskieferorthopäden und Wahlkieferorthopäden können unterschiedliche Abrechnungs- und Erstattungswege gelten. Bei Zahnspange Sablania ist das Honorar für die bewilligte Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange so festgelegt, dass die mögliche ÖGK-Kostenerstattung bei erfüllten Voraussetzungen bis zu 100 Prozent der entsprechenden Rechnung abdecken kann. Diese Regelung gilt nicht automatisch für private Zusatzleistungen. Die endgültige Bewilligung und Höhe der Kostenerstattung werden von der ÖGK nach Prüfung der individuellen Anspruchsvoraussetzungen festgelegt.",
  },
  {
    q: "Was passiert, wenn nur IOTN 2 oder 3 vorliegt?",
    a: "Wenn die Fehlstellung nicht als IOTN 4 oder 5 eingestuft wird, besteht normalerweise kein Anspruch auf die Gratis Zahnspange im Rahmen dieses Programms. Das bedeutet nicht automatisch, dass keine kieferorthopädische Behandlung sinnvoll ist. In solchen Fällen können private Behandlungsmöglichkeiten besprochen werden.",
  },
  {
    q: "Welche Unterlagen sollten Eltern mitbringen?",
    a: "Für den ersten Beratungstermin sind vorhandene zahnmedizinische Unterlagen hilfreich, etwa frühere Röntgenbilder, Arztbriefe oder Informationen über bereits erfolgte Behandlungen. Außerdem sollten Eltern die e-card des Kindes und Informationen über die zuständige Krankenversicherung mitbringen.",
  },
  {
    q: "Kann man die IOTN-Stufe online bestimmen?",
    a: "Nein. Eine zuverlässige IOTN-Einstufung ist allein anhand eines Fotos oder einer Beschreibung nicht möglich. Für die Beurteilung müssen unter anderem die Zahnstellung, der Biss, die Abstände und die Entwicklung des Kiefers untersucht werden.",
  },
] as const;

export default function GratisZahnspangeVoraussetzungenArticle({
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
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const alignerHref = getHref("/durchsichtige-zahnspange", locale);
  const invisalignHref = getHref("/unsichtbare-zahnspange-wien", locale);
  const lingualHref = getHref("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange", locale);
  const anzeichenHref = "/wann-zum-kieferorthopaeden";
  const kasseHref = "/wahlkieferorthopaede-vertragskieferorthopaede-oegk";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${base}/artikel` },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
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
      logo: { "@type": "ImageObject", url: `${base}${DEFAULT_OG_IMAGE}` },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    inLanguage: "de-AT",
    articleSection: article.articleSection,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <PageContent
      title={article.title}
      lead="Voraussetzungen für die Gratis Zahnspange in Wien: Alter, IOTN und Bewilligung der Krankenversicherung."
      locale={locale}
      dict={dict}
      skipProse
      hideHeader
    >
      <article className="mx-auto max-w-3xl">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Gratis Zahnspange Wien</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{article.title}</h1>
          <p className="text-sm text-gray-600">
            Autor und medizinisch geprüft von:{" "}
            <Link href={ueberMichHref} className="font-semibold text-accent hover:underline">
              {DOCTOR.name}, {DOCTOR.credentials}
            </Link>
            <br />
            Fachzahnarzt für Kieferorthopädie
          </p>
          <p className="text-sm text-gray-500">Versicherungsinformationen zuletzt geprüft: Juli 2026</p>
          <p className="rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
            Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle Untersuchung oder
            verbindliche Auskunft der Krankenkasse.
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
          <p>
            Eine kieferorthopädische Behandlung kann für Familien eine wichtige, aber auch kostspielige
            Entscheidung sein. Deshalb möchten viele Eltern wissen, ob ihr Kind Anspruch auf eine{" "}
            <Link href={gratisHref} className="font-medium text-accent hover:underline">
              Gratis Zahnspange in Wien
            </Link>{" "}
            hat.
          </p>
          <p>
            Die Bezeichnung „Gratis Zahnspange“ kann jedoch missverstanden werden. Nicht jedes Kind und nicht
            jede Zahnfehlstellung erfüllt automatisch die Voraussetzungen. Entscheidend sind insbesondere das
            Alter, der Schweregrad der Fehlstellung, die medizinische Notwendigkeit und die Bewilligung durch
            die zuständige Krankenversicherung.
          </p>
          <p>
            In diesem Artikel erklären wir in einfachen Worten, für wen die Gratis Zahnspange vorgesehen ist,
            was IOTN 4 und 5 bedeuten und wie der Ablauf normalerweise funktioniert.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Was ist die Gratis Zahnspange?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Die Gratis Zahnspange ist eine Leistung der österreichischen Krankenversicherung für{" "}
              <Link href={kinderHref} className="font-medium text-accent hover:underline">
                Kinder und Jugendliche
              </Link>{" "}
              mit schweren Zahn- oder Kieferfehlstellungen. Das Programm soll sicherstellen, dass medizinisch
              notwendige kieferorthopädische Behandlungen nicht allein an den finanziellen Möglichkeiten einer
              Familie scheitern.
            </p>
            <p>
              Dabei handelt es sich nicht um eine kostenlose Wunschbehandlung für jede Zahnstellung. Eine leichte
              Fehlstellung oder ein rein ästhetischer Wunsch reicht normalerweise nicht aus. Die Zahn- oder
              Kieferfehlstellung muss einen bestimmten medizinischen Schweregrad erreichen.
            </p>
            <p>
              Ob ein Anspruch besteht, wird im Rahmen einer kieferorthopädischen Untersuchung festgestellt und
              anschließend von der zuständigen Krankenversicherung geprüft. Typische Gründe für eine Untersuchung
              beschreibt der Artikel{" "}
              <Link href={anzeichenHref} className="font-medium text-accent hover:underline">
                Wann sollte man zum Kieferorthopäden?
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Welche Voraussetzungen müssen erfüllt sein?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>Für eine Gratis Zahnspange in Wien müssen mehrere Voraussetzungen zusammenkommen.</p>
            <h3 className="text-lg font-semibold text-primary">Das Kind muss die Altersvoraussetzungen erfüllen</h3>
            <p>
              Das Programm richtet sich grundsätzlich an Kinder und Jugendliche. Bei einer kieferorthopädischen
              Hauptbehandlung muss der Behandlungsbeginn normalerweise vor dem 18. Geburtstag liegen.
            </p>
            <p>
              Bei jüngeren Kindern kann unter bestimmten Bedingungen eine frühe, sogenannte interzeptive
              Behandlung infrage kommen. Diese wird beispielsweise geprüft, wenn eine schwere Fehlstellung bereits
              während des Zahnwechsels erkannt wird.
            </p>
            <p>
              Das Alter allein reicht allerdings nicht aus. Zusätzlich muss eine entsprechend schwere Zahn- oder
              Kieferfehlstellung vorliegen.
            </p>
            <h3 className="pt-2 text-lg font-semibold text-primary">Es muss eine schwere Fehlstellung vorliegen</h3>
            <p>
              Eine der wichtigsten Voraussetzungen ist der Schweregrad der Fehlstellung. Für die Beurteilung wird
              der sogenannte IOTN verwendet.
            </p>
            <p>
              IOTN steht für „Index of Orthodontic Treatment Need“. Dieser Index hilft dabei, den
              kieferorthopädischen Behandlungsbedarf nach einheitlichen Kriterien einzustufen.
            </p>
            <p>Die Skala reicht von IOTN 1 bis IOTN 5:</p>
            <ul className="list-disc space-y-2 pl-5">
              {IOTN.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Für die Gratis Zahnspange sind normalerweise schwere Fehlstellungen der Stufen IOTN 4 oder IOTN 5
              erforderlich.
            </p>
            <p>
              Eltern können die IOTN-Stufe nicht zuverlässig selbst erkennen. Auch Bilder und Informationen im
              Internet ersetzen keine Untersuchung. Die korrekte Einstufung muss durch eine entsprechend
              qualifizierte kieferorthopädische Fachperson erfolgen.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Welche Fehlstellungen können IOTN 4 oder 5 erreichen?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Verschiedene Zahn- und Kieferfehlstellungen können einen hohen IOTN-Wert erreichen. Dazu können
              beispielsweise ein besonders ausgeprägter Überbiss, ein starker Unterbiss, erheblicher Platzmangel,
              bestimmte Kreuzbisse oder nicht richtig durchbrechende Zähne gehören.
            </p>
            <p>
              Ob eine konkrete Fehlstellung tatsächlich als IOTN 4 oder 5 eingestuft wird, hängt von genauen
              Messungen und medizinischen Kriterien ab. Zwei Zahnstellungen können auf den ersten Blick ähnlich
              aussehen und trotzdem unterschiedlich bewertet werden.
            </p>
            <p>Deshalb sollte auf der Grundlage von Fotos oder allgemeinen Beschreibungen keine Selbstdiagnose gestellt werden.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Welche Zahnspange wird verwendet?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Bei der kieferorthopädischen Hauptbehandlung im Rahmen des Kassenprogramms wird normalerweise eine
              festsitzende Zahnspange mit Metallbrackets verwendet.
            </p>
            <p>Ästhetische Alternativen sind nicht automatisch Bestandteil des Programms. Dazu können gehören:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Keramik-Brackets</li>
              <li>Durchsichtige Zahnschienen</li>
              <li>
                <Link href={alignerHref} className="font-medium text-accent hover:underline">
                  Clear Aligner
                </Link>
              </li>
              <li>
                <Link href={invisalignHref} className="font-medium text-accent hover:underline">
                  Invisalign
                </Link>
              </li>
              <li>
                innenliegende{" "}
                <Link href={lingualHref} className="font-medium text-accent hover:underline">
                  Lingualzahnspangen
                </Link>
              </li>
            </ul>
            <p>
              Wenn Eltern oder Jugendliche eine dieser privaten Alternativen wünschen, müssen die
              Behandlungsmöglichkeiten und möglichen zusätzlichen Kosten vorab individuell geklärt werden.
            </p>
            <p>Eine unsichtbare Zahnspange ist daher nicht automatisch eine Gratis Zahnspange.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Wie läuft die Beantragung ab?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Der genaue Ablauf kann je nach Versicherung und individuellem Behandlungsfall unterschiedlich sein.
              Typischerweise erfolgt er in mehreren Schritten. In der Ordination in 1200 Wien werden Versicherte
              der ÖGK, SVS, BVAEB und KFA (Wien) behandelt.
            </p>
          </div>
          <ol className="mt-6 space-y-4">
            {STEPS.map((step, idx) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-soft">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-800 sm:text-base">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Ist die Gratis Zahnspange wirklich zu 100 Prozent kostenlos?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Das hängt davon ab, wo und in welcher Form die Behandlung durchgeführt wird. Zwischen
              Vertragskieferorthopäden und Wahlkieferorthopäden können unterschiedliche Abrechnungs- und
              Erstattungswege gelten. Den Unterschied erklärt der Artikel{" "}
              <Link href={kasseHref} className="font-medium text-accent hover:underline">
                Was bezahlt die Krankenkasse?
              </Link>
            </p>
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Bei Zahnspange Sablania
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 sm:text-base">
                Bei Zahnspange Sablania ist das Honorar für die bewilligte Gratis-Zahnspangen-Behandlung mit fester
                Metallzahnspange so festgelegt, dass die mögliche ÖGK-Kostenerstattung bei erfüllten Voraussetzungen
                bis zu 100 Prozent der entsprechenden Rechnung abdecken kann. Dadurch kann für diese konkrete
                Behandlung kein verbleibender Selbstbehalt entstehen.
              </p>
            </div>
            <p>
              Diese besondere Regelung gilt nicht automatisch für private Zusatzleistungen oder andere
              Behandlungsmethoden. Keramik-Brackets, Invisalign, Clear Aligner und Lingualzahnspangen sind davon
              nicht automatisch umfasst.
            </p>
            <p>
              Außerdem handelt es sich nicht um eine allgemeine Garantie für jeden Patienten. Die endgültige
              Bewilligung und Höhe der Kostenerstattung werden von der ÖGK nach Prüfung der individuellen
              Anspruchsvoraussetzungen festgelegt.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Was passiert, wenn nur IOTN 2 oder 3 vorliegt?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Wenn die Fehlstellung nicht als IOTN 4 oder 5 eingestuft wird, besteht normalerweise kein Anspruch
              auf die Gratis Zahnspange im Rahmen dieses Programms.
            </p>
            <p>
              Das bedeutet jedoch nicht automatisch, dass keine kieferorthopädische Behandlung sinnvoll ist. Auch
              leichtere Fehlstellungen können funktionell oder persönlich störend sein. In solchen Fällen können
              private Behandlungsmöglichkeiten besprochen werden.
            </p>
            <p>
              Je nach Situation können eine herausnehmbare Zahnspange, eine feste Zahnspange oder durchsichtige
              Zahnschienen infrage kommen. Welche Behandlung geeignet ist, kann erst nach einer persönlichen
              Untersuchung beurteilt werden.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Welche Unterlagen sollten Eltern mitbringen?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Für den ersten Beratungstermin sind vorhandene zahnmedizinische Unterlagen hilfreich. Dazu können
              frühere Röntgenbilder, Arztbriefe oder Informationen über bereits erfolgte Behandlungen gehören.
            </p>
            <p>
              Außerdem sollten Eltern die e-card des Kindes und Informationen über die zuständige
              Krankenversicherung mitbringen. Die Ordination kann dann erklären, welche weiteren Unterlagen
              benötigt werden und wie die Prüfung der Anspruchsvoraussetzungen abläuft.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Kann man die IOTN-Stufe online bestimmen?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>Nein. Eine zuverlässige IOTN-Einstufung ist allein anhand eines Fotos oder einer Beschreibung nicht möglich.</p>
            <p>
              Für die Beurteilung müssen unter anderem die Zahnstellung, der Biss, die Abstände und die Entwicklung
              des Kiefers untersucht werden. Je nach Situation sind weitere diagnostische Unterlagen notwendig.
            </p>
            <p>
              Ein Online-Artikel kann Eltern helfen, die Grundlagen zu verstehen. Er kann aber keine
              kieferorthopädische Untersuchung ersetzen.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted px-6 py-10 text-white shadow-soft-lg sm:px-10">
          <h2 className="text-2xl font-bold">Beratung zur Gratis Zahnspange in 1200 Wien</h2>
          <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
            <p>
              Wenn Sie wissen möchten, ob Ihr Kind die Voraussetzungen für eine Gratis Zahnspange in Wien erfüllen
              könnte, können Sie einen persönlichen Beratungstermin bei Zahnspange Sablania vereinbaren.
            </p>
            <p>
              <Link href={ueberMichHref} className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                {DOCTOR.name}
              </Link>{" "}
              untersucht die Zahn- und Kieferstellung, erklärt die mögliche IOTN-Einstufung und informiert Sie über
              die nächsten Schritte. Falls eine Bewilligung notwendig ist, erfahren Sie, welche Unterlagen für die
              Krankenversicherung erforderlich sind.
            </p>
            <p>
              Weitere ausführliche Informationen finden Sie auf unserer Seite zur{" "}
              <Link href={gratisHref} className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                Gratis Zahnspange in Wien
              </Link>{"."}
            </p>
            <p>
              Eine Untersuchung bedeutet nicht automatisch, dass sofort eine Behandlung begonnen wird. Sie hilft
              Eltern jedoch dabei, die Zahn- und Kieferentwicklung ihres Kindes besser zu verstehen und die
              nächsten Schritte rechtzeitig zu planen.
            </p>
          </div>
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

        <section className="mt-12 border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-primary">Quellen und weiterführende Informationen</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-800 sm:text-base">
            <li>
              <a href={OEGK_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                Österreichische Gesundheitskasse – Informationen zur Zahnspange und Kostenerstattung
              </a>
            </li>
            <li>
              <a href={GV_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
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
