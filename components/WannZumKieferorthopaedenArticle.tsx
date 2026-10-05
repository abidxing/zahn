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

const SLUG = "/wann-zum-kieferorthopaeden";

const SIGNS = [
  {
    title: "Schiefe oder eng stehende Zähne",
    paragraphs: [
      "Wenn im Kiefer nicht genügend Platz vorhanden ist, können Zähne schief wachsen oder übereinanderstehen. Dadurch kann die tägliche Reinigung schwieriger werden. Manche Stellen lassen sich mit der Zahnbürste oder Zahnseide nur schlecht erreichen.",
      "Ein Kieferorthopäde kann untersuchen, wie stark der Platzmangel ist und welche Behandlungsmöglichkeiten infrage kommen.",
    ],
  },
  {
    title: "Große Lücken zwischen den Zähnen",
    paragraphs: [
      "Kleine Zahnlücken sind nicht immer ein medizinisches Problem. Größere oder neu entstandene Lücken sollten jedoch untersucht werden. Sie können durch fehlende Zähne, eine besondere Zahnstellung oder unterschiedliche Größen von Zähnen und Kiefer entstehen.",
      "Vor einer Behandlung muss deshalb zunächst die Ursache der Lücke geklärt werden.",
    ],
  },
  {
    title: "Deutlich sichtbarer Überbiss",
    paragraphs: [
      "Bei einem Überbiss stehen die oberen Frontzähne deutlich vor den unteren Zähnen. Ein kleiner Abstand kann normal sein. Ist der Abstand jedoch sehr groß, kann dies das Abbeißen oder den Schutz der Frontzähne beeinflussen.",
      "Besonders bei Kindern ist eine frühzeitige Untersuchung hilfreich, weil sich Zähne und Kiefer noch entwickeln.",
    ],
  },
  {
    title: "Unterbiss",
    paragraphs: [
      "Bei einem Unterbiss stehen die unteren Zähne vor den oberen Zähnen. Diese Zahn- oder Kieferstellung kann das Kauen und Abbeißen beeinflussen.",
      "Da verschiedene Ursachen möglich sind, sollte die Situation individuell beurteilt werden. Der geeignete Zeitpunkt und die Art der Behandlung hängen unter anderem vom Alter und vom Wachstum ab.",
    ],
  },
  {
    title: "Kreuzbiss",
    paragraphs: [
      "Bei einem Kreuzbiss stehen einzelne obere Zähne oder eine ganze Zahngruppe beim Zubeißen innerhalb der unteren Zahnreihe. Der Kreuzbiss kann nur eine Seite oder beide Seiten betreffen.",
      "Eine kieferorthopädische Untersuchung kann zeigen, ob nur die Zähne oder auch die Kieferstellung betroffen sind.",
    ],
  },
  {
    title: "Schwierigkeiten beim Kauen oder Abbeißen",
    paragraphs: [
      "Wenn die oberen und unteren Zähne nicht richtig aufeinandertreffen, kann das Kauen oder Abbeißen unangenehm sein. Manche Menschen benutzen deshalb hauptsächlich eine Seite des Mundes.",
      "Solche Beschwerden können verschiedene Ursachen haben. Eine Untersuchung hilft dabei, die Zahnstellung, den Zusammenbiss und weitere mögliche Faktoren zu beurteilen.",
    ],
  },
  {
    title: "Häufige Mundatmung",
    paragraphs: [
      "Wenn ein Kind häufig durch den Mund atmet oder auch tagsüber den Mund meistens offen hält, sollten die Ursachen ärztlich oder zahnmedizinisch abgeklärt werden. Mundatmung kann unterschiedliche Gründe haben und bedeutet nicht automatisch, dass eine Zahnspange notwendig ist.",
      "Je nach Situation kann eine Zusammenarbeit zwischen Kieferorthopädie, Kinderarzt, HNO-Arzt oder Logopädie sinnvoll sein.",
    ],
  },
  {
    title: "Auffälliges Schluckmuster oder falsche Zungenlage",
    paragraphs: [
      "Beim normalen Schlucken sollte die Zunge eine geeignete Position im Mund einnehmen. Drückt sie regelmäßig gegen oder zwischen die Zähne, kann dies mit Veränderungen der Zahnstellung verbunden sein.",
    ],
  },
  {
    title: "Frühzeitiger oder verspäteter Zahnwechsel",
    paragraphs: [
      "Kinder verlieren ihre Milchzähne nicht alle im gleichen Alter. Trotzdem können ein sehr früher Zahnverlust, lange erhaltene Milchzähne oder ein auffälliger Zahndurchbruch untersucht werden.",
      "Eine Kontrolle bedeutet nicht automatisch, dass sofort eine Behandlung beginnen muss. Manchmal reicht es aus, die weitere Entwicklung regelmäßig zu beobachten.",
    ],
  },
  {
    title: "Zähne verschieben sich im Erwachsenenalter",
    paragraphs: [
      "Auch bei Erwachsenen können sich Zähne verändern oder verschieben. Das kann beispielsweise nach einer früheren Zahnspangenbehandlung passieren, wenn kein Retainer mehr getragen wird. Auch Zahnlücken, fehlende Zähne oder Veränderungen im Zahnhalteapparat können eine Rolle spielen.",
      "Für eine kieferorthopädische Behandlung gibt es grundsätzlich keine feste obere Altersgrenze. Vor Beginn müssen jedoch die Zähne, das Zahnfleisch und der Zahnhalteapparat sorgfältig untersucht werden.",
    ],
  },
] as const;

const FAQS = [
  {
    q: "Wann sollte ein Kind erstmals untersucht werden?",
    a: "Der passende Zeitpunkt ist von Kind zu Kind unterschiedlich. Eine frühe Untersuchung kann sinnvoll sein, wenn Eltern oder der behandelnde Zahnarzt Auffälligkeiten bei der Zahn- oder Kieferentwicklung bemerken. Nicht jedes Kind benötigt sofort eine Zahnspange. Bei manchen Fehlstellungen wartet man zunächst die weitere Entwicklung ab. In anderen Fällen kann eine frühe Behandlung helfen, das Wachstum gezielt zu begleiten. Eine persönliche Untersuchung ist deshalb wichtiger als eine allgemeine Altersempfehlung.",
  },
  {
    q: "Braucht man eine Überweisung zum Kieferorthopäden?",
    a: "Für eine private kieferorthopädische Erstberatung ist normalerweise keine Überweisung erforderlich. Abrechnung, Bewilligung und Kostenerstattung können jedoch von der jeweiligen Krankenversicherung und der geplanten Behandlung abhängen. Bei einer möglichen Gratis Zahnspange müssen bestimmte Voraussetzungen erfüllt sein. Dazu gehören unter anderem das Alter, eine schwere Zahn- oder Kieferfehlstellung und die entsprechende Einstufung. Die endgültige Entscheidung über eine Bewilligung trifft die zuständige Krankenversicherung.",
  },
  {
    q: "Was passiert beim ersten Termin?",
    a: "Beim ersten Termin werden die Zähne, der Biss und die Kieferstellung angesehen. Außerdem werden Beschwerden, Wünsche und die bisherige zahnmedizinische Entwicklung besprochen. Falls eine genauere Diagnostik notwendig ist, können beispielsweise Fotos, digitale Scans oder Röntgenaufnahmen geplant werden. Anschließend erklärt der Kieferorthopäde, ob eine Behandlung sinnvoll sein könnte und welche Möglichkeiten grundsätzlich zur Verfügung stehen. Eine Zahnspange wird normalerweise nicht allein aufgrund eines kurzen Blicks empfohlen. Für eine verlässliche Behandlungsplanung ist eine individuelle Untersuchung notwendig.",
  },
] as const;

export default function WannZumKieferorthopaedenArticle({
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
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const erwachseneHref = getHref("/zahnspange-fuer-erwachsene", locale);
  const mftHref = getHref("/myofunktionelle-therapie", locale);
  const gratisHref = getHref("/gratis-zahnspange", locale);
  const retainerHref = getHref("/kfo-retainer", locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
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
      lead="Zehn Anzeichen, bei denen eine Untersuchung beim Kieferorthopäden in Wien sinnvoll sein kann."
      locale={locale}
      dict={dict}
      skipProse
      hideHeader
    >
      <article className="mx-auto max-w-3xl">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Kieferorthopäde Wien
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Wann sollte man zum Kieferorthopäden? 10 wichtige Anzeichen bei Kindern und Erwachsenen
          </h1>
          <p className="text-sm text-gray-600">
            Autor und medizinisch geprüft von:{" "}
            <Link href={ueberMichHref} className="font-semibold text-accent hover:underline">
              {DOCTOR.name}, {DOCTOR.credentials}
            </Link>
            <br />
            Fachzahnarzt für Kieferorthopädie
          </p>
          <p className="rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
            Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle Untersuchung oder
            Diagnose.
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
            Viele Menschen denken bei einer kieferorthopädischen Behandlung zuerst an schiefe Zähne. Bei der{" "}
            <Link href={kfoHref} className="font-medium text-accent hover:underline">
              Kieferorthopädie Wien
            </Link>{" "}
            geht es jedoch nicht nur um das Aussehen der Zähne. Auch die Stellung des Kiefers, das Kauen, das
            Sprechen und das Schlucken können eine wichtige Rolle spielen.
          </p>
          <p>
            Aber wann ist eine Untersuchung sinnvoll? Ein{" "}
            <Link href={kfoHref} className="font-medium text-accent hover:underline">
              Kieferorthopäde in Wien
            </Link>{" "}
            kann Zähne und Kiefer untersuchen und feststellen, ob eine Behandlung notwendig oder empfehlenswert
            sein könnte. Hier finden Sie zehn typische Anzeichen, bei denen eine kieferorthopädische Beratung
            sinnvoll sein kann.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            10 Anzeichen für eine Untersuchung beim Kieferorthopäden
          </h2>
          <ol className="mt-6 space-y-4">
            {SIGNS.map((sign, idx) => (
              <li
                key={sign.title}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-soft sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{sign.title}</h3>
                  <div className="mt-2 space-y-3 text-sm leading-relaxed text-gray-800 sm:text-base">
                    {sign.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {idx === 7 ? (
                      <p>
                        In bestimmten Fällen kann zusätzlich zur kieferorthopädischen Behandlung eine{" "}
                        <Link href={mftHref} className="font-medium text-accent hover:underline">
                          myofunktionelle Therapie
                        </Link>{" "}
                        empfohlen werden. Dabei werden unter anderem die Zungenlage sowie die Mund- und
                        Gesichtsmuskulatur trainiert.
                      </p>
                    ) : null}
                    {idx === 9 ? (
                      <p>
                        Mehr zur{" "}
                        <Link href={erwachseneHref} className="font-medium text-accent hover:underline">
                          Zahnspange für Erwachsene
                        </Link>{" "}
                        und zur Stabilisierung mit einem{" "}
                        <Link href={retainerHref} className="font-medium text-accent hover:underline">
                          Retainer
                        </Link>{"."}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Wann sollte ein Kind erstmals untersucht werden?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Der passende Zeitpunkt ist von Kind zu Kind unterschiedlich. Eine frühe Untersuchung kann sinnvoll
              sein, wenn Eltern oder der behandelnde Zahnarzt Auffälligkeiten bei der Zahn- oder
              Kieferentwicklung bemerken.
            </p>
            <p>
              Nicht jedes Kind benötigt sofort eine Zahnspange. Bei manchen Fehlstellungen wartet man zunächst
              die weitere Entwicklung ab. In anderen Fällen kann eine frühe Behandlung helfen, das Wachstum
              gezielt zu begleiten. Eine persönliche Untersuchung ist deshalb wichtiger als eine allgemeine
              Altersempfehlung.
            </p>
            <p>
              Informationen zur{" "}
              <Link href={kinderHref} className="font-medium text-accent hover:underline">
                Zahnspange für Kinder
              </Link>{" "}
              finden Sie auf der dazugehörigen Seite.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Braucht man eine Überweisung zum Kieferorthopäden?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Für eine private kieferorthopädische Erstberatung ist normalerweise keine Überweisung erforderlich.
              Abrechnung, Bewilligung und Kostenerstattung können jedoch von der jeweiligen Krankenversicherung
              und der geplanten Behandlung abhängen.
            </p>
            <p>
              Bei einer möglichen{" "}
              <Link href={gratisHref} className="font-medium text-accent hover:underline">
                Gratis Zahnspange
              </Link>{" "}
              müssen bestimmte Voraussetzungen erfüllt sein. Dazu gehören unter anderem das Alter, eine schwere
              Zahn- oder Kieferfehlstellung und die entsprechende Einstufung. Die endgültige Entscheidung über
              eine Bewilligung trifft die zuständige Krankenversicherung.
            </p>
            <p>
              Welche Voraussetzungen für die{" "}
              <Link href="/gratis-zahnspange-wien-voraussetzungen" className="font-medium text-accent hover:underline">
                Gratis Zahnspange in Wien
              </Link>{" "}
              gelten, erklärt ein eigener Artikel. Den Unterschied zwischen Wahl- und Vertragskieferorthopäde
              beschreibt{" "}
              <Link href={kasseHref} className="font-medium text-accent hover:underline">
                Was bezahlt die Krankenkasse?
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Was passiert beim ersten Termin?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-800">
            <p>
              Beim ersten Termin werden die Zähne, der Biss und die Kieferstellung angesehen. Außerdem werden
              Beschwerden, Wünsche und die bisherige zahnmedizinische Entwicklung besprochen.
            </p>
            <p>
              Falls eine genauere Diagnostik notwendig ist, können beispielsweise Fotos, digitale Scans oder
              Röntgenaufnahmen geplant werden. Anschließend erklärt der Kieferorthopäde, ob eine Behandlung
              sinnvoll sein könnte und welche Möglichkeiten grundsätzlich zur Verfügung stehen.
            </p>
            <p>
              Eine Zahnspange wird normalerweise nicht allein aufgrund eines kurzen Blicks empfohlen. Für eine
              verlässliche Behandlungsplanung ist eine individuelle Untersuchung notwendig. Den weiteren Ablauf
              beschreibt die Seite{" "}
              <Link href={ablaufHref} className="font-medium text-accent hover:underline">
                Ablauf Zahnspange und Kieferorthopädie
              </Link>{"."}
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted px-6 py-10 text-white shadow-soft-lg sm:px-10">
          <h2 className="text-2xl font-bold">Kieferorthopäde in Wien: Persönliche Beratung vereinbaren</h2>
          <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
            <p>
              Wenn Sie bei sich oder Ihrem Kind eines dieser Anzeichen bemerken, können Sie eine persönliche
              Untersuchung bei Zahnspange Sablania vereinbaren.{" "}
              <Link href={ueberMichHref} className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                {DOCTOR.name}
              </Link>{" "}
              berät Kinder, Jugendliche und Erwachsene in der Ordination in 1200 Wien.
            </p>
            <p>
              Bei der Untersuchung wird geklärt, ob eine kieferorthopädische Behandlung erforderlich sein könnte,
              welche Zahnspangenarten infrage kommen und ob eine mögliche Kostenübernahme oder Kostenerstattung
              mit der Krankenversicherung geprüft werden sollte.
            </p>
            <p>
              Eine frühzeitige Beratung kann Klarheit schaffen. Sie bedeutet jedoch nicht automatisch, dass sofort
              eine Behandlung begonnen werden muss.
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
          <p className="mt-6 text-sm leading-relaxed text-white/90">
            Vereinbaren Sie jetzt einen Termin bei Ihrem Kieferorthopäden in Wien und lassen Sie Ihre Zahn- und
            Kieferstellung persönlich untersuchen.
          </p>
        </section>
      </article>

      <JsonLd data={[articleLd, breadcrumbLd, faqLd]} />
    </PageContent>
  );
}
