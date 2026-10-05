import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import AdultsHeroSlider from "./AdultsHeroSlider";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";
import {
  getInsuranceCoverageIntro,
  getInsuranceFundsLinkHint,
} from "@/lib/healthInsurance";
import HealthInsuranceFundLinks from "@/components/HealthInsuranceFundLinks";

const ADULTS_HERO_BRACES =
  "/zahnspange-fuer-erwachsene/woman-with-dental-braces-teeth-glitter-lipstick-lips-talks-smiling-widely-blurred-background-room-home-extreme-closeup-scaled.jpg";

const ADULTS_HERO_SLIDES_META = [
  {
    src: ADULTS_HERO_BRACES,
    altDe: "Erwachsene Patientin mit fester Zahnspange und Lächeln",
    altEn: "Adult patient with fixed braces, smiling",
  },
  {
    src: "/zahnspange-fuer-erwachsene/hero-slide-aligners.png",
    altDe: "Nahaufnahme: durchsichtige Aligner-Schiene vor dem Gebiss",
    altEn: "Close-up: clear aligner tray in front of the teeth",
  },
  {
    src: "/zahnspange-fuer-erwachsene/hero-slide-keramik.png",
    altDe: "Keramikbrackets mit dünnem Metallbogen",
    altEn: "Ceramic brackets with a slim metal archwire",
  },
  {
    src: "/zahnspange-fuer-erwachsene/hero-slide-lingual.png",
    altDe: "Lingualtechnik: Brackets an der Innenseite der Oberzähne",
    altEn: "Lingual braces on the inside of the upper teeth",
  },
  {
    src: "/zahnspange-fuer-erwachsene/hero-slide-treatments-collage.png",
    altDe: "Übersicht: verschiedene kieferorthopädische Behandlungsoptionen",
    altEn: "Overview of different orthodontic treatment options",
  },
] as const;

const IMG = {
  keramik: ADULTS_HERO_BRACES,
  lingual: "/zahnspange-fuer-erwachsene/Lingualtechnik-640-%C3%97-500-px-e1670235670602.png",
  invisalign: "/zahnspange-fuer-erwachsene/SDC12926-.jpg",
} as const;

type Copy = {
  introTitle: string;
  introBody: string;
  typesTitle: string;
  typesLead: string;
  keramik: {
    title: string;
    p1Strong: string;
    p1Rest: string;
    p2: string;
    imageAlt: string;
    caption: string;
  };
  lingual: {
    title: string;
    body: string[];
    proLabel: string;
    proText: string;
    negLabel: string;
    negText: string;
    imageAlt: string;
  };
  invisalign: { title: string; body: string[]; imageAlt: string };
  refund: {
    title: string;
    lead: string;
    kassenStrong: string;
    kassenHint: string;
    zusatzStrong: string;
    zusatzBody: string;
  };
  process: { title: string; steps: string[]; linkLabel: string };
  ctaBook: string;
  ctaOnline: string;
  ctaContact: string;
};

const COPY: Record<"de" | "en", Copy> = {
  de: {
    introTitle: "Invisalign, Unsichtbare Zahnspange, Clear Aligner Kieferorthopädie für Erwachsene",
    introBody:
      "Eine Behandlung ist grundsätzlich in jedem Alter möglich. Bei Zahnspangen für Erwachsenen gibt es allerdings einige Besonderheiten zu beachten. Ob eine Behandlung sinnvoll und möglich ist, zeigt sich erst nach einer Untersuchung von Zähnen, Zahnfleisch und Kieferknochen. Dann folgt die Diagnose und die Einschätzung des Behandlungserfolges mit einer Zahnspange.",
    typesTitle: "Zahnspangen für Erwachsene",
    typesLead:
      "Genau wie bei Kindern gibt es auch bei der kieferorthopädischen Behandlung von Erwachsenen verschiedene Möglichkeiten. Folgende Zahnspangentypen sind möglich:",
    keramik: {
      title: "Keramik Brackets",
      p1Strong: "Metall Brackets",
      p1Rest:
        " – die festsitzende Zahnspange für Erwachsene. Bei der Verwendung von durchsichtigen Keramikbrackets profitieren Sie von einer deutlich verbesserten Optik.",
      p2: "Die Brackets werden direkt auf die Außenseite der Zähne geklebt und sind bei Jugendlichen und Erwachsenen besonders beliebt. Auch können Bögen in Zahnfarbe verwendet werden.",
      imageAlt: "Erwachsene Patientin mit fester Zahnspange, lächelnd",
      caption: "Feste Zahnspange bei Erwachsenen",
    },
    lingual: {
      title: "Lingualzahnspange",
      body: [
        "Fast vollständige unsichtbar wirkt diese innenliegende Zahnspange mit großer Präzision, den ganzen Tag.",
      ],
      proLabel: "Positiv:",
      proText: "Unsichtbar! Von außen ist die Zahnspange nicht zu sehen.",
      negLabel: "Negativ:",
      negText: "Am Anfang beim Sprechen können zu Beginn S- & C-Laute schwerer auszusprechen sein.",
      imageAlt: "Lingualtechnik Zahnspange – innenliegende Zahnspange",
    },
    invisalign: {
      title: "Invisalign-Clear Aligner Durchsichtige Schienen",
      body: [
        "Eine weitere Möglichkeit zur Behandlung von Zahnfehlstellungen. Die Regulierung erfolgt mit individuell gestalteten Schienen. Fast unsichtbar und abnehmbar.",
        "Diese Schienen werden meist von Erwachsenen getragen und sollten sowohl am Tag als auch bei Nacht getragen werden. Zum Essens und Zähneputzens werden die Invisalign Clear Aligner Schienen herausgenommen.",
      ],
      imageAlt: "Erwachsene Patientin mit Invisalign Clear Alignern",
    },
    refund: {
      title: "Rückerstattungsmöglichkeiten bei Zahnspangen für Erwachsene",
      lead:
        "Je nach Schwergrad der Zahnfehlstellung und Art der Behandlung werden von Krankenkassen oder Zusatzversicherungen Teile der Behandlung rückerstattet!",
      kassenStrong: "Informationen über Rückerstattungen der Krankenkassen (ÖGK, SVS, BVAEB, KFA):",
      kassenHint:
        "Offizielle Informationen Ihrer Krankenkasse – in der Ordination werden Versicherte aller dieser Träger betreut.",
      zusatzStrong: "Informationen über die Rückerstattung von Zusatz-Versicherungen:",
      zusatzBody:
        "Leistungen privater Zusatzversicherungen hängen vom Vertrag ab. Wir beraten Sie gerne zu den Unterlagen für Ihre Zusatzversicherung.",
    },
    process: {
      title: "Zahnregulierung für Erwachsene, der Ablauf:",
      steps: [
        "Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
        "Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.",
        "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
        "Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten",
        "Wichtige und notwendigen Kontrolltermine alle 6-8 Wochen",
        "Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses",
        "Retention – der Beginn der Stabilisierung des Behandlungsergebnisses",
      ],
      linkLabel: "Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.",
    },
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online terminieren",
    ctaContact: "Kontakt",
  },
  en: {
    introTitle: "Invisalign, invisible braces, clear aligner orthodontics for adults",
    introBody:
      "Treatment is generally possible at any age. For adult braces there are some special considerations. Whether treatment is advisable and feasible only becomes clear after an examination of the teeth, gums and jaw. Then follows the diagnosis and assessment of the expected outcome with braces.",
    typesTitle: "Braces for adults",
    typesLead:
      "As with children, there are various options for orthodontic treatment in adults. The following types are possible:",
    keramik: {
      title: "Ceramic brackets",
      p1Strong: "Metal brackets",
      p1Rest:
        " – the fixed brace for adults. With clear ceramic brackets you benefit from a much improved appearance.",
      p2: "Brackets are bonded directly to the outside of the teeth and are popular with both teenagers and adults. Archwires in tooth colour can also be used.",
      imageAlt: "Adult patient with fixed braces, smiling",
      caption: "Fixed braces for adults",
    },
    lingual: {
      title: "Lingual brace",
      body: [
        "This inner brace works with high precision and is almost completely invisible, all day.",
      ],
      proLabel: "Plus:",
      proText: "Invisible! The brace cannot be seen from the outside.",
      negLabel: "Minus:",
      negText: "At the start, S and C sounds can be harder to pronounce when speaking.",
      imageAlt: "Lingual technique – braces on the inside of the teeth",
    },
    invisalign: {
      title: "Invisalign clear aligner trays",
      body: [
        "Another option for treating misalignment. Correction is done with individually made trays. Almost invisible and removable.",
        "These trays are often worn by adults and should be worn both during the day and at night. They are removed for eating and brushing.",
      ],
      imageAlt: "Adult patient with Invisalign clear aligners",
    },
    refund: {
      title: "Reimbursement options for adult braces",
      lead:
        "Depending on the severity of misalignment and type of treatment, health insurers or supplementary insurance may reimburse part of the cost.",
      kassenStrong: "Health fund reimbursement (ÖGK, SVS, BVAEB, KFA):",
      kassenHint:
        "Official information from your fund—our practice treats insured members of all these schemes.",
      zusatzStrong: "Private supplementary insurance:",
      zusatzBody:
        "Supplementary benefits depend on your policy. We are happy to advise on documentation for your supplementary insurer.",
    },
    process: {
      title: "Orthodontic treatment for adults – the process",
      steps: [
        "Free initial consultation for misalignment at our orthodontic practice. By appointment only!",
        "Create treatment records for your individual plan. Diagnosis with X-rays, photos and digital scans. Always without impressions.",
        "Planning discussion and explanation. X-ray review and analysis of which type of brace and/or brackets are needed.",
        "Start of treatment. Fitting the appliance and advice on cleaning and wear times.",
        "Check-up appointments every 6–8 weeks.",
        "End of treatment. Removal of the brace and discussion of the result.",
        "Retention – the start of stabilising the treatment result.",
      ],
      linkLabel: "Full details of the treatment process at our practice",
    },
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaContact: "Contact",
  },
};

export default function ZahnspangeErwachseneContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-erwachsene";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnspange für Erwachsene";
  const lead = leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const invisalignHref = getHref("/unsichtbare-zahnspange-wien", locale);
  const terminHref = getHref("/online-termine", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero — image slider (title & lead come from PageContent header) */}
        <AdultsHeroSlider
          locale={lang}
          slides={ADULTS_HERO_SLIDES_META.map((s) => ({
            src: s.src,
            alt: lang === "de" ? s.altDe : s.altEn,
          }))}
        />

        {/* Intro (full text) */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <h2 className="text-xl font-bold leading-snug text-primary sm:text-2xl">{c.introTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-800 sm:text-lg">{c.introBody}</p>
        </section>

        {/* Treatment types intro */}
        <section className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.typesTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">{c.typesLead}</p>
        </section>

        {/* Keramik — image left */}
        <section className="mx-auto mt-10 max-w-5xl">
          <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft-lg">
            <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] bg-gray-50 lg:min-h-[300px]">
                <Image
                  src={IMG.keramik}
                  alt={c.keramik.imageAlt}
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="text-lg font-bold text-primary sm:text-xl">{c.keramik.title}</h3>
                <div className="mt-4 space-y-4 text-gray-800">
                  <p className="leading-relaxed">
                    <strong>{c.keramik.p1Strong}</strong>
                    {c.keramik.p1Rest}
                  </p>
                  <p className="leading-relaxed">{c.keramik.p2}</p>
                </div>
              </div>
            </div>
            <p className="border-t border-gray-100 bg-gray-50/80 px-4 py-3 text-center text-sm text-gray-600">
              {c.keramik.caption}
            </p>
          </article>
        </section>

        {/* Lingual — image right */}
        <section className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft-lg">
            <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
              <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
                <h3 className="text-lg font-bold text-primary sm:text-xl">{c.lingual.title}</h3>
                {c.lingual.body.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-gray-800">
                    {p}
                  </p>
                ))}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-4">
                    <p className="text-sm font-semibold text-emerald-900">{c.lingual.proLabel}</p>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-950/90">{c.lingual.proText}</p>
                  </div>
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4">
                    <p className="text-sm font-semibold text-amber-900">{c.lingual.negLabel}</p>
                    <p className="mt-1 text-sm leading-relaxed text-amber-950/90">{c.lingual.negText}</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 min-h-[260px] bg-gray-50 lg:order-2 lg:min-h-[300px]">
                <Image
                  src={IMG.lingual}
                  alt={c.lingual.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>
        </section>

        {/* Invisalign — image left */}
        <section className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft-lg">
            <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] bg-gray-50 lg:min-h-[300px]">
                <Image
                  src={IMG.invisalign}
                  alt={c.invisalign.imageAlt}
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="text-lg font-bold text-primary sm:text-xl">{c.invisalign.title}</h3>
                {c.invisalign.body.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-gray-800">
                    {p}
                  </p>
                ))}
                <div className="mt-6">
                  <Link
                    href={invisalignHref}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 sm:text-base"
                  >
                    {dict.common.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Refund */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-gray-50 p-6 shadow-soft sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.refund.title}</h2>
            <p className="mt-4 leading-relaxed text-gray-800">{getInsuranceCoverageIntro(locale)}</p>
            <p className="mt-4 leading-relaxed text-gray-800">{c.refund.lead}</p>
            <p className="mt-6 font-semibold text-gray-900">{c.refund.kassenStrong}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              {getInsuranceFundsLinkHint(locale)}
            </p>
            <div className="mt-4">
              <HealthInsuranceFundLinks locale={locale} />
            </div>
            <p className="mt-8 font-semibold text-gray-900">{c.refund.zusatzStrong}</p>
            <p className="mt-2 leading-relaxed text-gray-800">{c.refund.zusatzBody}</p>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.process.title}</h2>
          <ol className="mt-8 space-y-0">
            {c.process.steps.map((step, i) => {
              const isRetention = /^Retention\b/i.test(step);
              const stepContent =
                isRetention ? (
                  <>
                    <strong>Retention</strong>
                    {step.replace(/^Retention\s*/i, "")}
                  </>
                ) : (
                  step
                );
              return (
                <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < c.process.steps.length - 1 && (
                    <span
                      className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                      isRetention ? "bg-accent" : "bg-primary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className={`leading-relaxed text-gray-800 ${
                        isRetention ? "text-gray-900" : ""
                      }`}
                    >
                      {stepContent}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6">
            <Link
              href={ablaufHref}
              className="text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:text-primary hover:decoration-primary"
            >
              {c.process.linkLabel}
            </Link>
          </div>
        </section>

        {/* Bottom CTAs */}
        <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
          >
            {c.ctaBook}
          </a>
          <Link
            href={terminHref}
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
          >
            {c.ctaOnline}
          </Link>
          <Link
            href={kontaktHref}
            className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            {c.ctaContact}
          </Link>
        </section>
      </div>
    </PageContent>
  );
}
