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

const BASE = "/asethetic-dental-services";

const IMG = {
  smile: `${BASE}/Aesthetik.jpg`,
  bridgeWide: `${BASE}/dental-ga63c0bf75_1920-1536x864.png`,
  drSs: `${BASE}/DrSS-qccg77rgojbtrcav5z20egkfccceiwy9acpag4xm8o.png`,
  drMansi: `${BASE}/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png`,
  keramik: `${BASE}/Keramikkrone-1.png`,
  lingual: `${BASE}/Lingualtechnik-640-×-500-px-e1670235670602.png`,
  qualityDentist: `/services/${encodeURIComponent(
    "Practice for general, aesthetic dentistry, implantology & specialist dentist for orthodontic (6).png",
  )}`,
  schiene: `${BASE}/Schiene.png`,
  bracesColor: `${BASE}/SDC12934.jpg`,
  bleaching: `${BASE}/Zahnbleichen.png`,
  hygiene: `${BASE}/zahnhygiene.png`,
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

function ServiceCard({
  href,
  title,
  imageSrc,
  alt,
}: {
  href: string;
  title: string;
  imageSrc: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-50">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-primary group-hover:text-accent">{title}</h3>
      </div>
    </Link>
  );
}

const DE_LEAD =
  "Ästhetische zahnärztliche Leistungen in Wien umfassen Behandlungen, die Aussehen und Funktion der Zähne berücksichtigen – etwa Zahnstellung, Zahnfarbe oder Zahndefekte. Bei Zahnspange Sablania in 1200 Wien gehören dazu unter anderem unsichtbare Zahnspangen und transparente Aligner, Zahnbleaching, ästhetische Füllungen, professionelle Mundhygiene sowie Kronen und Brücken. Dr. Manish Sablania ist Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt. Ob eine Behandlung geeignet ist, hängt vom individuellen Befund ab; eine Website ersetzt keine Untersuchung. Kieferorthopädie kann Teil der Zahnästhetik sein, ersetzt aber keine restaurative Versorgung wie Füllungen oder Kronen. Für kieferorthopädische Fragen gibt es eine kostenlose Erstberatung. Der nächste Schritt ist ein Termin in der Ordination.";

export default function AestheticDentalServicesContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/asethetic-dental-services";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const isDe = locale === "de";
  const title = isDe ? "Ästhetische zahnärztliche Leistungen in Wien" : (titles[dePath] ?? "Aesthetic Dental Services");
  const lead = isDe ? DE_LEAD : leads[dePath];
  const u = (path: string) => getHref(path, locale);

  const unsichtbarHref = u("/unsichtbare-zahnspange-wien");
  const durchsichtigHref = u("/durchsichtige-zahnspange");
  const lingualHref = u("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange");
  const kfoHref = u("/kieferorthopaedie");
  const erwachseneHref = u("/zahnspange-fuer-erwachsene");
  const mundhygieneHref = u("/mundhygiene-wien");
  const bleachingHref = u("/zahnbleaching");
  const fuellungHref = u("/komposit-zahnfuellung");
  const kroneHref = u("/krone-bruecke");
  const kontaktHref = u("/kontakt");
  const terminHref = u("/online-termine");

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const h = {
    tagline: isDe
      ? "Zahnästhetik in Wien: Stellung, Farbe und Form – nach individuellem Befund"
      : "Beauty and function combined – aesthetic dentistry for a radiant smile",
    intro1: isDe
      ? "In der Ordination Zahnspange Sablania in 1200 Wien verbinden wir ästhetische Zahnmedizin mit Kieferorthopädie. Ziel ist es, Aussehen und Funktion der Zähne zu berücksichtigen – ohne pauschale Ergebnisversprechen. Welche Behandlung in Frage kommt, klären wir in der Untersuchung."
      : "At our dental and orthodontic practice in Vienna’s 20th district we offer aesthetic dentistry with a focus on a radiant, natural-looking smile. You benefit from many years of expertise combined with modern technology for high-quality aesthetic solutions—restoring shine while preserving function and health.",
    intro2: isDe
      ? "Ästhetische Zahnheilkunde meint hier kein festes Paket, sondern ausgewählte Leistungen: unsichtbare Zahnspange und transparente Aligner, Bleaching, zahnfarbene Füllungen, Mundhygiene sowie Kronen und Brücken. Jede Planung erfolgt individuell."
      : "Our wide range of aesthetic services allows tailored solutions for your goals. Every patient is unique—we take your wishes seriously and plan treatment together with you.",
    intro3: isDe
      ? "Wir beraten Sie zu den Leistungen, die in dieser Ordination angeboten werden. Ob eine Behandlung geeignet ist, hängt vom Befund, Ihren Zielen und der medizinischen Situation ab."
      : "We stand for quality, patient focus and advanced technology—helping you smile with confidence.",
    heart: isDe ? "Zahnmedizin mit ❤" : "Dentistry with heart",
    servicesH: isDe
      ? "Welche ästhetischen Zahnbehandlungen bieten wir an?"
      : "General and aesthetic services in orthodontics, Vienna",
    defineH: "Was sind ästhetische zahnärztliche Leistungen?",
    defineP:
      "Ästhetische zahnärztliche Leistungen – oft auch ästhetische Zahnmedizin oder Zahnästhetik genannt – zielen darauf, das Erscheinungsbild der Zähne zu verbessern und dabei die Funktion zu berücksichtigen. Das kann die Zahnstellung, die Zahnfarbe oder die Versorgung von Defekten betreffen. Welche Maßnahme sinnvoll ist, entscheidet die Untersuchung – nicht diese Website.",
    matchH: "Welche Behandlung passt zu welchem Anliegen?",
    matchLead:
      "Die folgenden Zuordnungen dienen der Orientierung. Eine Empfehlung erfolgt erst nach Befund:",
    matchItems: [
      "Zahnstellung: unsichtbare Zahnspange, transparente Aligner, Keramikbrackets oder Lingualtechnik",
      "Zahnfarbe: Zahnbleaching / Zahnaufhellung",
      "Zahndefekte: ästhetische Komposit- oder Keramikfüllungen",
      "Fehlende Zähne: Kronen und Brücken",
      "Beläge und Zahnstein: professionelle Mundhygiene",
    ],
    orthoH: isDe
      ? "Ästhetische Zahnmedizin und Kieferorthopädie"
      : "Invisible braces for a confident smile",
    orthoBody: isDe
      ? `${DOCTOR.experienceComboDe} Zahnfehlstellungen lassen sich kieferorthopädisch korrigieren – auch mit unauffälligen Optionen wie transparenten Alignern, Invisalign, Keramikbrackets oder einer Lingualzahnspange. Kieferorthopädie ersetzt keine Füllung, kein Bleaching und keine Krone: Sie betrifft die Stellung der Zähne.`
      : "Braces remain one of the most effective ways to treat malocclusion. Treating children, teens and adults has been my focus for many years—with over 28 years of experience and more than 8,000 brace treatments. Passion and sound knowledge guide every day in our practice. Your wellbeing is central: we listen, explain and support you throughout treatment.",
    orthoBody2: isDe
      ? "In der Beratung besprechen wir, ob eine kieferorthopädische Korrektur, eine restaurative Leistung oder beides in Frage kommt. Die Entscheidung hängt vom individuellen Befund ab."
      : "Beyond clinical results, we want you to feel welcome and comfortable from your first visit through completion of treatment.",
    invisH: isDe ? "Unsichtbare Zahnspange und Aligner" : "Invisalign clear aligners",
    invisSub1: isDe ? "Unsichtbare Zahnspange / Invisalign" : "Invisalign",
    invisSub2: isDe ? "Unsichtbare Lingualzahnspange" : "Lingual braces",
    consultH: isDe ? "Wie läuft die Beratung ab?" : "Free initial consultation",
    consultBody: isDe
      ? "Für die kieferorthopädische Erstberatung bieten wir eine kostenlose Beratung an. Dabei besprechen wir Ihre Anliegen, untersuchen Zähne und Kiefer und erläutern mögliche Optionen inklusive Ablauf und geschätzter Kosten, soweit das nach der Untersuchung möglich ist."
      : "We offer thorough consultations to discuss your goals and options. Continuous training keeps us at the forefront of research and technology so we can deliver up-to-date, effective care.",
    consultBody2: isDe
      ? "Auch bei Bleaching, Füllungen, Mundhygiene oder Kronen und Brücken klären wir Eignung und nächste Schritte individuell. Pauschale Eignung oder ein bestimmtes Aussehen können wir nicht im Voraus zusichern."
      : "Trust matters: we take time for diagnosis, planning and clear information.",
    consultBody3: isDe
      ? "Sie lernen die Ordination in 1200 Wien kennen, können Fragen stellen und entscheiden in Ruhe. Verbindliche Angaben zu Kosten und Dauer erfolgen nach Befund."
      : "A free initial consultation lets you meet the team, ask questions, and understand options, timeline and costs before you decide.",
    consultBody4: isDe
      ? "Terminvereinbarung ist online oder über die Ordination möglich."
      : "Contact us today to book your free orthodontic consultation—we look forward to helping you achieve a healthy, beautiful smile.",
    localH: "Ästhetische zahnärztliche Leistungen in Wien",
    arztH: isDe ? `${DOCTOR.name}, M.Sc. Specialized Orthodontics` : "Dr Manish Sablania M.Sc. Orthodontics",
    arztSub: isDe
      ? `${DOCTOR.jobTitleDe} · ${PRACTICE.streetAddress}, ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`
      : "Specialist orthodontist Vienna 1200",
    arztLi1: isDe
      ? "Qualifizierter Wahlkieferorthopäde für die Krankenkasse-Gratis-Zahnspange, Fachzahnarzt für Kieferorthopädie."
      : "Qualified elective orthodontist for Austria’s publicly funded braces programme and specialist orthodontics.",
    arztLi2: isDe ? DOCTOR.experienceComboDe : DOCTOR.experienceComboEn,
    ctaAesthetic: isDe ? "Termin für ästhetische Zahnmedizin vereinbaren" : "Book an aesthetic dentistry appointment",
    ctaConsult: isDe ? "Kostenlose Erstberatung vereinbaren" : "Book a free consultation",
    faqH: "Häufige Fragen zur ästhetischen Zahnmedizin",
  };

  const deFaqs: { q: string; aText: string; a: ReactNode }[] = [
    {
      q: "Was versteht man unter ästhetischer Zahnmedizin?",
      aText:
        "Ästhetische Zahnmedizin bzw. Zahnästhetik umfasst zahnärztliche Leistungen, die das Erscheinungsbild der Zähne berücksichtigen – etwa Stellung, Farbe oder die Versorgung von Defekten. Funktion und individuelle Befunde bleiben maßgeblich.",
      a: "Ästhetische Zahnmedizin bzw. Zahnästhetik umfasst zahnärztliche Leistungen, die das Erscheinungsbild der Zähne berücksichtigen – etwa Stellung, Farbe oder die Versorgung von Defekten. Funktion und individuelle Befunde bleiben maßgeblich.",
    },
    {
      q: "Welche ästhetischen zahnärztlichen Leistungen gibt es?",
      aText:
        "Zum Gebiet der ästhetischen Zahnheilkunde können unter anderem Zahnaufhellung, zahnfarbene Füllungen, kieferorthopädische Korrekturen mit Alignern oder unauffälligen Brackets sowie restaurative Versorgungen gehören. Welche Verfahren im Einzelfall infrage kommen, hängt vom Befund ab.",
      a: "Zum Gebiet der ästhetischen Zahnheilkunde können unter anderem Zahnaufhellung, zahnfarbene Füllungen, kieferorthopädische Korrekturen mit Alignern oder unauffälligen Brackets sowie restaurative Versorgungen gehören. Welche Verfahren im Einzelfall infrage kommen, hängt vom Befund ab.",
    },
    {
      q: "Welche ästhetischen Zahnbehandlungen bietet Zahnspange Sablania an?",
      aText:
        "In der Ordination Zahnspange Sablania in Wien gehören dazu: unsichtbare Zahnspange und transparente Aligner (einschließlich Invisalign), Lingualzahnspange, Keramikbrackets, Zahnbleaching, ästhetische Komposit- und Keramikfüllungen, professionelle Mundhygiene sowie Kronen und Brücken. Ob eine Behandlung geeignet ist, hängt vom individuellen Befund ab.",
      a: (
        <>
          In der Ordination Zahnspange Sablania in Wien gehören dazu: unsichtbare Zahnspange und transparente Aligner
          (einschließlich Invisalign), Lingualzahnspange, Keramikbrackets, Zahnbleaching, ästhetische Komposit- und
          Keramikfüllungen, professionelle Mundhygiene sowie Kronen und Brücken. Ob eine Behandlung geeignet ist, hängt
          vom individuellen Befund ab.
        </>
      ),
    },
    {
      q: "Können Zahnfehlstellungen ästhetisch korrigiert werden?",
      aText:
        "Zahnfehlstellungen können kieferorthopädisch behandelt werden. Unauffällige Optionen können transparente Aligner, Keramikbrackets oder eine innenliegende Lingualzahnspange sein. Die geeignete Methode legt die Untersuchung fest.",
      a: (
        <>
          Zahnfehlstellungen können kieferorthopädisch behandelt werden. Unauffällige Optionen können transparente
          Aligner, Keramikbrackets oder eine innenliegende Lingualzahnspange sein. Mehr zur{" "}
          <Link href={kfoHref} className="font-medium text-accent underline hover:text-primary">
            Kieferorthopädie in Wien
          </Link>
          . Die geeignete Methode legt die Untersuchung fest.
        </>
      ),
    },
    {
      q: "Sind transparente Aligner eine ästhetische Behandlung?",
      aText:
        "Transparente Aligner und Invisalign sind kieferorthopädische Behandlungen zur Korrektur der Zahnstellung. Weil die Schienen wenig sichtbar sind, werden sie oft als ästhetische Option wahrgenommen. Ob Aligner geeignet sind, hängt von der Fehlstellung ab.",
      a: (
        <>
          Transparente Aligner und Invisalign sind kieferorthopädische Behandlungen zur Korrektur der Zahnstellung. Weil
          die Schienen wenig sichtbar sind, werden sie oft als ästhetische Option wahrgenommen. Mehr zur{" "}
          <Link href={unsichtbarHref} className="font-medium text-accent underline hover:text-primary">
            unsichtbaren Zahnspange in Wien
          </Link>
          . Ob Aligner geeignet sind, hängt von der Fehlstellung ab.
        </>
      ),
    },
    {
      q: "Was kosten ästhetische Zahnbehandlungen in Wien?",
      aText:
        "Auf dieser Seite sind keine verbindlichen Preise hinterlegt. Die Kosten hängen von der gewählten Leistung und dem individuellen Befund ab. Geschätzte Kosten besprechen wir in der Beratung.",
      a: (
        <>
          Auf dieser Seite sind keine verbindlichen Preise hinterlegt. Die Kosten hängen von der gewählten Leistung und
          dem individuellen Befund ab. Geschätzte Kosten besprechen wir in der Beratung oder über{" "}
          <Link href={kontaktHref} className="font-medium text-accent underline hover:text-primary">
            Kontakt
          </Link>
          .
        </>
      ),
    },
    {
      q: "Wie finde ich heraus, welche Behandlung für mich geeignet ist?",
      aText:
        "Eine Untersuchung in der Ordination klärt, welche ästhetische oder kieferorthopädische Behandlung in Frage kommt. Für die kieferorthopädische Erstberatung ist eine kostenlose Beratung vorgesehen. Termine können online oder über die Ordination vereinbart werden.",
      a: (
        <>
          Eine Untersuchung in der Ordination klärt, welche ästhetische oder kieferorthopädische Behandlung in Frage
          kommt. Für die kieferorthopädische Erstberatung ist eine kostenlose Beratung vorgesehen. Termine können{" "}
          <Link href={terminHref} className="font-medium text-accent underline hover:text-primary">
            online
          </Link>{" "}
          oder über die Ordination vereinbart werden.
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
              name: "Ästhetische zahnärztliche Leistungen in Wien",
              headline: "Ästhetische zahnärztliche Leistungen in Wien",
              description:
                "Ästhetische Zahnmedizin in Wien: Aligner, Bleaching, Füllungen, Mundhygiene sowie Kronen und Brücken bei Zahnspange Sablania.",
              inLanguage: "de-AT",
              isPartOf: { "@id": websiteId },
              author: { "@id": doctorId },
              about: { "@id": dentistId },
              mainEntity: { "@id": `${pageUrl}#service` },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${base}${IMG.smile}`,
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
                  name: "Ästhetische Zahnärztliche Leistungen",
                  item: pageUrl,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: "Ästhetische zahnärztliche Leistungen",
              serviceType: "Ästhetische Zahnmedizin / Zahnästhetik",
              url: pageUrl,
              provider: { "@id": dentistId },
              areaServed: {
                "@type": "City",
                name: "Wien",
              },
              availableLanguage: ["German", "English", "Hindi"],
              description:
                "Überblick über ästhetische zahnärztliche Leistungen in Wien: Aligner, Bleaching, Füllungen, Mundhygiene, Kronen und Brücken.",
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
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted text-white shadow-soft-lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light/95">
                {isDe ? "Ästhetische Zahnmedizin Wien" : "Aesthetic dentistry Vienna"}
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">{h.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-white/90">{h.intro1}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-accent-light"
                >
                  {h.ctaAesthetic}
                </a>
                <Link
                  href={terminHref}
                  className="inline-flex rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
                >
                  {isDe ? "Termin online" : "Book online"}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center px-4 pb-8 pt-4 sm:px-8 sm:pb-10 sm:pt-6 lg:justify-end lg:px-10 lg:pb-12 lg:pl-6 lg:pt-10">
              <figure className="relative aspect-[4/5] w-full max-w-[min(100%,20rem)] overflow-hidden rounded-3xl border border-white/25 bg-white/[0.07] shadow-[0_24px_55px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/15 sm:max-w-[22rem] lg:aspect-[3/4] lg:max-h-[min(26rem,52vh)] lg:w-full lg:max-w-md">
                <Image
                  src={IMG.smile}
                  alt={isDe ? "Porträt mit sichtbarem Lächeln" : "Portrait with a visible smile"}
                  fill
                  className="object-cover object-[center_28%]"
                  sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 28rem, 24rem"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/35 via-transparent to-white/[0.07]"
                  aria-hidden
                />
              </figure>
            </div>
          </div>
        </section>

        {isDe ? (
          <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.defineH}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">{h.defineP}</p>
          </section>
        ) : null}

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-gray-700 sm:mt-16">
          <p>{h.intro2}</p>
          <p>{h.intro3}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-2xl font-bold text-primary">{h.heart}</p>
          <h2 className="mt-10 text-xl font-bold text-primary sm:text-2xl">{h.servicesH}</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            href={unsichtbarHref}
            title={isDe ? "Unsichtbare Zahnspange" : "Invisible braces"}
            imageSrc={IMG.schiene}
            alt={isDe ? "Transparente Aligner-Schiene" : "Clear aligner"}
          />
          <ServiceCard
            href={mundhygieneHref}
            title={isDe ? "Professionelle Mundhygiene" : "Professional oral hygiene"}
            imageSrc={IMG.hygiene}
            alt={isDe ? "Zahnbürste und Mundpflegeprodukte" : "Oral hygiene"}
          />
          <ServiceCard
            href={bleachingHref}
            title={isDe ? "Zahnbleaching" : "Teeth whitening"}
            imageSrc={IMG.bleaching}
            alt={isDe ? "Zahnaufhellung in der Praxis" : "Whitening"}
          />
          <ServiceCard
            href={fuellungHref}
            title={isDe ? "Ästhetische Zahnfüllungen" : "Aesthetic fillings"}
            imageSrc={IMG.keramik}
            alt={isDe ? "Zahnfarbene keramische Versorgung" : "Ceramic restoration"}
          />
          <ServiceCard
            href={kroneHref}
            title={isDe ? "Zahn Krone–Brücke" : "Crown & bridge"}
            imageSrc={IMG.bridgeWide}
            alt={isDe ? "Zahnersatz mit Krone und Brücke" : "Crown and bridge"}
          />
          <ServiceCard
            href={kfoHref}
            title={isDe ? "Kieferorthopädie Wien" : "Orthodontics Vienna"}
            imageSrc={IMG.bracesColor}
            alt={isDe ? "Farbige Brackets einer festen Zahnspange" : "Braces"}
          />
        </div>

        {isDe ? (
          <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.matchH}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">{h.matchLead}</p>
            <ul className="mt-5 list-none space-y-3">
              {h.matchItems.map((item) => (
                <li key={item} className="flex gap-3 text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.orthoH}</h2>
          <div className="relative mx-auto mt-6 aspect-[16/9] w-full max-w-xs overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft sm:max-w-sm">
            <Image
              src={IMG.qualityDentist}
              alt={isDe ? "Behandlung in der Zahnarztpraxis" : "Dental treatment"}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 85vw, 384px"
            />
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-700">{h.orthoBody}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">{h.orthoBody2}</p>
          {isDe ? (
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Weitere Informationen:{" "}
              <Link href={kfoHref} className="font-medium text-accent underline hover:text-primary">
                Kieferorthopädie in Wien
              </Link>
              ,{" "}
              <Link href={unsichtbarHref} className="font-medium text-accent underline hover:text-primary">
                unsichtbare Zahnspange in Wien
              </Link>
              ,{" "}
              <Link href={durchsichtigHref} className="font-medium text-accent underline hover:text-primary">
                transparente Aligner
              </Link>{" "}
              und{" "}
              <Link href={erwachseneHref} className="font-medium text-accent underline hover:text-primary">
                Zahnspange für Erwachsene
              </Link>
              .
            </p>
          ) : null}
        </section>

        <section className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">{h.invisH}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Link
              href={unsichtbarHref}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMG.schiene}
                  alt={isDe ? "Transparente Aligner auf einem Modell" : "Clear aligners"}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="50vw"
                />
              </div>
              <p className="p-4 text-center font-semibold text-primary group-hover:text-accent">{h.invisSub1}</p>
            </Link>
            <Link
              href={lingualHref}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMG.lingual}
                  alt={isDe ? "Lingualzahnspange von innen" : "Lingual braces"}
                  fill
                  className="object-contain bg-gray-50 p-2 transition group-hover:scale-[1.02]"
                  sizes="50vw"
                />
              </div>
              <p className="p-4 text-center font-semibold text-primary group-hover:text-accent">{h.invisSub2}</p>
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/15 bg-primary/[0.04] px-6 py-8 sm:mt-20 sm:px-10">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.consultH}</h2>
          <div className="relative mx-auto mt-6 aspect-[16/10] max-w-lg overflow-hidden rounded-xl border border-gray-100 shadow-soft">
            <Image
              src={IMG.drSs}
              alt={
                isDe
                  ? "Dr. med. dent. Manish Sablania, Fachzahnarzt für Kieferorthopädie in Wien"
                  : "Dr Manish Sablania, orthodontist in Vienna"
              }
              fill
              className="object-cover object-top"
              sizes="(max-width: 512px) 100vw, 512px"
            />
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-800">{h.consultBody}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody2}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody3}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody4}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
            >
              {h.ctaConsult}
            </a>
            <Link
              href={kontaktHref}
              className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-white"
            >
              {isDe ? "Kontakt" : "Contact"}
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-3xl flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-soft-lg sm:mt-20 sm:flex-row sm:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-gray-50">
            <Image
              src={IMG.drMansi}
              alt={isDe ? "Dr. med. dent. Manish Sablania" : "Dr. Manish Sablania"}
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          </div>
          <div>
            {isDe ? (
              <>
                <h2 className="text-xl font-bold text-primary">{h.localH}</h2>
                <p className="mt-3 text-lg font-semibold text-primary">{h.arztH}</p>
              </>
            ) : (
              <h2 className="text-xl font-bold text-primary">{h.arztH}</h2>
            )}
            <p className="mt-1 text-gray-600">{h.arztSub}</p>
            <ul className="mt-4 space-y-2 text-gray-800">
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                {h.arztLi1}
              </li>
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                {h.arztLi2}
              </li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-muted"
            >
              {h.ctaConsult}
            </a>
          </div>
        </section>

        {isDe ? (
          <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">{h.faqH}</h2>
            <div className="mt-8 space-y-3">
              {deFaqs.map((item) => (
                <FaqItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </PageContent>
  );
}
