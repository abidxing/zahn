import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";
import { getInsuranceCoverageIntro, getInsuranceBindingInfo } from "@/lib/healthInsurance";
import HealthInsuranceFundLinks from "@/components/HealthInsuranceFundLinks";

const IMG = {
  drSs: "/asethetic-dental-services/DrSS-qccg77rgojbtrcav5z20egkfccceiwy9acpag4xm8o.png",
  drMansi: "/asethetic-dental-services/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png",
} as const;

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Forsthausgasse+16-20,+1200+Wien";

type Lang = "de" | "en";

type Copy = {
  heroKicker: string;
  heroTitle: string;
  statValue: string;
  statPlus: string;
  statCaption: string;
  ctaTag: string;
  intro: string;
  section1H: string;
  section1P: string;
  section2H: string;
  section2P: string;
  expLabel: string;
  expSub: string;
  treatValue: string;
  treatSub: string;
  qualH: string;
  quals: { abbr: string; title: string }[];
  memberH: string;
  members: { abbr: string; name: string }[];
  langH: string;
  langP: string;
  treatmentsH: string;
  treatmentItems: { label: string; path: string }[];
  insuranceH: string;
  insuranceP: string;
  insuranceLinkLabel: string;
  insuranceNote?: string;
  locationH: string;
  locationAddress: string;
  locationHours: string;
  locationPhone: string;
  directionsLabel: string;
  faqH: string;
  faqs: { q: string; a: string }[];
  generalH: string;
  generalItems: { label: string; path: string }[];
  ctaBook: string;
  ctaOnline: string;
  ctaContact: string;
  medicalNote: string;
  imgAltPrimary: string;
  imgAltSecondary: string;
  jobTitle: string;
  personDescription: string;
};

const COPY: Record<Lang, Copy> = {
  de: {
    heroKicker: "Indischstämmiger Kieferorthopäde in Wien",
    heroTitle: "Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien",
    statValue: "8.000",
    statPlus: "+",
    statCaption: "kieferorthopädische Behandlungen und Zahnspangenfälle",
    ctaTag: "Kostenlose Erstberatung vereinbaren",
    intro:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., ist ein indischstämmiger Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien. Er behandelt Kinder, Jugendliche und Erwachsene mit klassischen und modernen Methoden der Zahnregulierung. Beratungen sind auf Deutsch, Englisch und Hindi möglich.",
    section1H: "Kieferorthopäde in 1200 Wien",
    section1P:
      "In seiner Ordination in der Forsthausgasse behandelt Dr. Manish Sablania Zahn- und Kieferfehlstellungen bei Kindern, Jugendlichen und Erwachsenen. Abhängig vom Befund kommen feste Zahnspangen, herausnehmbare Geräte, transparente Aligner oder innenliegende Lingualzahnspangen infrage. Vor jeder Behandlung erfolgen eine persönliche Beratung, eine sorgfältige Diagnostik und eine individuelle Behandlungsplanung.",
    section2H: "Über 28 Jahre Erfahrung in der Kieferorthopädie",
    section2P:
      "Dr. Sablania verfügt über mehr als 28 Jahre klinische Erfahrung und hat über 8.000 kieferorthopädische Behandlungen und Zahnspangenfälle begleitet. Sein Schwerpunkt liegt auf einer verständlichen Beratung und einer Behandlung, die auf Alter, Befund und persönliche Bedürfnisse abgestimmt wird.",
    expLabel: "Über 28 Jahre Erfahrung",
    expSub: "Kieferorthopädie, Zahnregulierung und Zahnspange",
    treatValue: "8.000+",
    treatSub: "kieferorthopädische Behandlungen und Zahnspangenfälle",
    qualH: "Ausbildung und Qualifikationen",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery (BDS), Indien" },
      { abbr: "M.Sc", title: "Master of Science in Specialized Orthodontics, Deutschland" },
      { abbr: "POS", title: "Progressive Orthodontic Diploma, USA" },
      { abbr: "Fortbildungsdiplom", title: "Kieferorthopädisches Fortbildungsdiplom, Österreich" },
      { abbr: "Fachzahnarzt", title: "Fachzahnarzt für Kieferorthopädie" },
      {
        abbr: "Wahlkieferorthopäde",
        title: "Qualifizierter Wahlkieferorthopäde für die Krankenkasse-Gratis-Zahnspange",
      },
    ],
    memberH: "Mitgliedschaften",
    members: [
      { abbr: "VÖK", name: "Verband Österreichischer Kieferorthopäden" },
      { abbr: "ÖGZMK", name: "Österreichische Gesellschaft für Zahn-, Mund- und Kieferheilkunde" },
      { abbr: "ZIV", name: "Zahnärztlicher Interessenverband" },
    ],
    langH: "Behandlung auf Deutsch, Englisch und Hindi",
    langP:
      "Patientinnen und Patienten können ihre Fragen und Behandlungswünsche auf Deutsch, Englisch oder Hindi besprechen. Das ist besonders hilfreich, wenn medizinische Abläufe, Behandlungsmöglichkeiten, Kosten oder die tägliche Pflege einer Zahnspange verständlich erklärt werden sollen.",
    treatmentsH: "Behandlungen für Kinder, Jugendliche und Erwachsene",
    treatmentItems: [
      { label: "Zahnspange für Kinder", path: "/zahnspange-fuer-kinder" },
      { label: "Zahnspange für Jugendliche", path: "/zahnspange-fuer-jugendliche" },
      { label: "Zahnspange für Erwachsene", path: "/zahnspange-fuer-erwachsene" },
      { label: "Unsichtbare Zahnspange und Clear Aligner", path: "/unsichtbare-zahnspange-wien" },
      { label: "Lingualzahnspange", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
      { label: "Gratis Zahnspange", path: "/gratis-zahnspange" },
      { label: "Retainer", path: "/kfo-retainer" },
      { label: "Myofunktionelle Therapie", path: "/myofunktionelle-therapie" },
    ],
    insuranceH: "Wahlkieferorthopäde und Gratis Zahnspange",
    insuranceP:
      "Dr. Manish Sablania ist qualifizierter Wahlkieferorthopäde für die Krankenkasse-Gratis-Zahnspange. Kinder und Jugendliche bis zum vollendeten 18. Lebensjahr können bei einer schweren Zahn- oder Kieferfehlstellung der IOTN-Stufe 4 oder 5 anspruchsberechtigt sein. Vor Behandlungsbeginn ist eine Bewilligung der zuständigen Krankenkasse (ÖGK, SVS, BVAEB oder KFA) erforderlich. Nach aktueller ÖGK-Information können bei positiver Prüfung 80 % des gültigen Kassentarifs erstattet werden – nicht automatisch 80 % der Privatrechnung.",
    insuranceLinkLabel: "Mehr zur Gratis Zahnspange",
    insuranceNote:
      "Keramik-Brackets, Clear Aligner und andere Privat-Upgrades sind nicht automatisch Teil des Kassenprogramms.",
    locationH: "Ordination von Dr. Manish Sablania",
    locationAddress: `${PRACTICE.streetAddress}, ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    locationHours: `${PRACTICE.openingHoursDisplayDe} (Termine nach Vereinbarung)`,
    locationPhone: PRACTICE.telephone,
    directionsLabel: "Anfahrt",
    faqH: "Häufige Fragen",
    faqs: [
      {
        q: "Welche Sprachen spricht Dr. Manish Sablania?",
        a: "Beratungen sind auf Deutsch, Englisch und Hindi möglich.",
      },
      {
        q: "Behandelt Dr. Sablania Kinder und Erwachsene?",
        a: "Ja. Die Ordination bietet kieferorthopädische Behandlungen für Kinder, Jugendliche und Erwachsene an.",
      },
      {
        q: "Bietet Dr. Sablania die Gratis Zahnspange an?",
        a: "Dr. Sablania ist qualifizierter Wahlkieferorthopäde (100% Rückerstattung) für die Gratis Zahnspange. In der Ordination werden Versicherte der ÖGK, SVS, BVAEB und KFA (Wien) behandelt. Ob ein Anspruch besteht, hängt unter anderem vom Alter, dem Befund, der IOTN-Einstufung und der Bewilligung Ihrer Krankenkasse ab.",
      },
      {
        q: "Welche Krankenkassen werden in der Ordination behandelt?",
        a: "Patientinnen und Patienten mit ÖGK, SVS, BVAEB und KFA – Sie müssen nicht vorab nachfragen, ob Ihre Kasse bei uns behandelt wird.",
      },
      {
        q: "Wo befindet sich die Ordination?",
        a: "Die Ordination befindet sich in der Forsthausgasse 16–20, Stiege 3, EG, 1200 Wien.",
      },
    ],
    generalH: "Allgemeine Zahnheilkunde",
    generalItems: [
      { label: "Professionelle Mundhygiene", path: "/mundhygiene-wien" },
      { label: "Zahnbleaching", path: "/zahnbleaching" },
      { label: "Zahnfarbige Füllungen", path: "/komposit-zahnfuellung" },
      { label: "Krone & Brücke", path: "/krone-bruecke" },
      { label: "Implantat", path: "/implantat-wien" },
    ],
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online Termin",
    ctaContact: "Kontakt",
    medicalNote:
      "Allgemeine Informationen ersetzen keine persönliche Untersuchung oder Diagnose. Behandlungsempfehlungen erfolgen nach individueller Beratung.",
    imgAltPrimary:
      "Dr. med. dent. Manish Sablania, Fachzahnarzt für Kieferorthopädie in Wien",
    imgAltSecondary: "Portrait von Dr. Manish Sablania in der Ordination Zahnspange Sablania",
    jobTitle: DOCTOR.jobTitleDe,
    personDescription:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., ist ein indischstämmiger Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien. Beratungen auf Deutsch, Englisch und Hindi.",
  },
  en: {
    heroKicker: "Indian orthodontist in Vienna",
    heroTitle: "Specialist orthodontist and general dentist in 1200 Vienna",
    statValue: "8,000",
    statPlus: "+",
    statCaption: "orthodontic treatments and braces cases",
    ctaTag: "Book a free initial consultation",
    intro:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., is an Indian-origin specialist orthodontist and general dentist practising in 1200 Vienna. He treats children, teenagers and adults using conventional and modern orthodontic methods. Consultations are available in German, English and Hindi.",
    section1H: "Orthodontist in 1200 Vienna",
    section1P:
      "At his practice in Forsthausgasse, Dr. Manish Sablania treats dental and jaw misalignments in children, teenagers and adults. Depending on the diagnosis, treatment may include fixed braces, removable appliances, clear aligners or lingual braces fitted behind the teeth. Every treatment begins with a personal consultation, careful diagnosis and an individual treatment plan.",
    section2H: "More Than 28 Years of Orthodontic Experience",
    section2P:
      "Dr. Sablania has more than 28 years of clinical experience and has been involved in over 8,000 orthodontic treatments and braces cases. His approach focuses on clear explanations and treatment planning based on the patient’s age, diagnosis and individual needs.",
    expLabel: "More than 28 years of experience",
    expSub: "Orthodontics – tooth alignment – braces",
    treatValue: "8,000+",
    treatSub: "orthodontic treatments and braces cases",
    qualH: "Education and Qualifications",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery (BDS), India" },
      { abbr: "M.Sc", title: "Master of Science in Specialized Orthodontics, Germany" },
      { abbr: "POS", title: "Progressive Orthodontic Diploma, USA" },
      { abbr: "Diploma", title: "Orthodontic continuing-education diploma, Austria" },
      { abbr: "Specialist", title: "Specialist orthodontist (Fachzahnarzt für Kieferorthopädie)" },
      {
        abbr: "Elective",
        title: "Qualified elective orthodontist for Austria’s publicly funded braces programme",
      },
    ],
    memberH: "Professional memberships",
    members: [
      { abbr: "VÖK", name: "Austrian Association of Orthodontists" },
      { abbr: "ÖGZMK", name: "Austrian Society of Dentistry, Oral and Maxillofacial Medicine" },
      { abbr: "ZIV", name: "Dental interest group" },
    ],
    langH: "Consultations in German, English and Hindi",
    langP:
      "Patients can discuss their questions and treatment preferences in German, English or Hindi. This can make it easier to understand the diagnosis, available treatment options, costs and daily care of braces or aligners.",
    treatmentsH: "Orthodontic Treatment for All Ages",
    treatmentItems: [
      { label: "Braces for children", path: "/zahnspange-fuer-kinder" },
      { label: "Braces for teenagers", path: "/zahnspange-fuer-jugendliche" },
      { label: "Braces for adults", path: "/zahnspange-fuer-erwachsene" },
      { label: "Clear aligners", path: "/unsichtbare-zahnspange-wien" },
      { label: "Lingual braces", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
      { label: "Publicly funded braces", path: "/gratis-zahnspange" },
      { label: "Retainers", path: "/kfo-retainer" },
      { label: "Myofunctional therapy", path: "/myofunktionelle-therapie" },
    ],
    insuranceH: "Publicly Funded Braces and Reimbursement",
    insuranceP:
      "Dr. Manish Sablania is a qualified elective orthodontist for Austria’s publicly funded braces programme. Children and teenagers under 18 with a severe dental or jaw misalignment classified as IOTN grade 4 or 5 may be eligible. Approval from your health fund (ÖGK, SVS, BVAEB or KFA) is required before treatment begins. According to current ÖGK information, approved cases may receive reimbursement of 80% of the applicable contractual tariff—not necessarily 80% of the private invoice.",
    insuranceLinkLabel: "More about publicly funded braces",
    insuranceNote:
      "Private upgrades, ceramic brackets and clear aligners are not automatically covered by the publicly funded programme.",
    locationH: "Visit Dr. Manish Sablania in Vienna",
    locationAddress: `${PRACTICE.streetAddress}, ${PRACTICE.postalCode} Vienna`,
    locationHours: `${PRACTICE.openingHoursDisplayEn} (appointments by prior arrangement)`,
    locationPhone: PRACTICE.telephone,
    directionsLabel: "Directions",
    faqH: "Frequently asked questions",
    faqs: [
      {
        q: "Which languages does Dr. Sablania speak?",
        a: "Consultations are available in German, English and Hindi.",
      },
      {
        q: "Does Dr. Sablania treat children and adults?",
        a: "Yes. The practice provides orthodontic treatment for children, teenagers and adults.",
      },
      {
        q: "Does the practice offer publicly funded braces?",
        a: "Dr. Sablania is a qualified elective orthodontist for Austria’s publicly funded braces programme. The practice treats patients insured with ÖGK, SVS, BVAEB and KFA (Vienna). Eligibility depends on factors including age, diagnosis, IOTN classification and approval from your health fund.",
      },
      {
        q: "Which health insurance funds do you treat?",
        a: "ÖGK, SVS, BVAEB and KFA. You do not need to ask in advance whether we accept your fund.",
      },
      {
        q: "Where is the practice located?",
        a: "The practice is located at Forsthausgasse 16–20, Staircase 3, Ground Floor, 1200 Vienna.",
      },
    ],
    generalH: "General dentistry",
    generalItems: [
      { label: "Professional oral hygiene", path: "/mundhygiene-wien" },
      { label: "Teeth whitening", path: "/zahnbleaching" },
      { label: "Tooth-coloured fillings", path: "/komposit-zahnfuellung" },
      { label: "Crown & bridge", path: "/krone-bruecke" },
      { label: "Implants", path: "/implantat-wien" },
    ],
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaContact: "Contact",
    medicalNote:
      "General information does not replace a personal examination or diagnosis. Treatment recommendations are made after individual consultation.",
    imgAltPrimary: "Dr. med. dent. Manish Sablania, specialist orthodontist in Vienna",
    imgAltSecondary: "Portrait of Dr. Manish Sablania at Zahnspange Sablania",
    jobTitle: DOCTOR.jobTitleEn,
    personDescription:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., is an Indian-origin specialist orthodontist and general dentist in 1200 Vienna. Consultations in German, English and Hindi.",
  },
};

function TreatmentCard({
  href,
  children,
  locale,
}: {
  href: string;
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <Link
      href={getHref(href, locale)}
      className="flex h-full items-center rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-primary shadow-soft transition hover:border-primary/25 hover:bg-primary/[0.03]"
    >
      {children}
    </Link>
  );
}

export default function UeberMichPageContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const dePath = "/ueber-mich";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title =
    titles[dePath] ??
    (locale === "de"
      ? "Dr. Manish Sablania – Fachzahnarzt für Kieferorthopädie in Wien"
      : "Dr. Manish Sablania – Specialist Orthodontist in Vienna");
  const lead = leads[dePath];
  const lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];
  const terminHref = getHref("/online-termine", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const gratisHref = getHref("/gratis-zahnspange", locale);
  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = locale === "de" ? `${base}/ueber-mich` : `${base}/en/about`;
  const imageAbs = `${base}${IMG.drSs}`;

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/[0.08] via-white to-gray-50 shadow-soft-lg">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-2">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{c.heroKicker}</p>
              <p className="mt-2 text-xl font-bold leading-snug text-primary sm:text-2xl">{c.heroTitle}</p>
              <div className="mt-6 flex flex-wrap items-end gap-2">
                <span className="text-5xl font-bold tabular-nums text-primary sm:text-6xl">{c.statValue}</span>
                <span className="pb-1 text-3xl font-bold text-accent">{c.statPlus}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">{c.statCaption}</p>
              <div className="mt-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
                >
                  {c.ctaTag}
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg lg:mx-0 lg:max-w-sm">
              <Image
                src={IMG.drSs}
                alt={c.imgAltPrimary}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{c.intro}</p>
        </section>

        {/* Section 1 */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{c.section1H}</h2>
          <p className="mt-5 leading-relaxed text-gray-800">{c.section1P}</p>
        </section>

        {/* Section 2 – experience */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{c.section2H}</h2>
          <p className="mt-5 leading-relaxed text-gray-800">{c.section2P}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft">
              <p className="text-lg font-bold text-primary">{c.expLabel}</p>
              <p className="mt-2 text-sm text-gray-700">{c.expSub}</p>
            </div>
            <div className="rounded-2xl border border-accent/25 bg-accent/[0.08] p-6 shadow-soft">
              <p className="text-3xl font-bold tabular-nums text-primary sm:text-4xl">{c.treatValue}</p>
              <p className="mt-2 text-sm text-gray-800">{c.treatSub}</p>
            </div>
          </div>
        </section>

        {/* Section 3 – qualifications */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.qualH}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.quals.map((q) => (
              <div
                key={q.abbr + q.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition hover:border-primary/20"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-accent">{q.abbr}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">{q.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Memberships + portrait */}
        <section className="mx-auto mt-14 grid max-w-5xl gap-10 sm:mt-16 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <h3 className="text-xl font-bold text-primary sm:text-2xl">{c.memberH}</h3>
            <div className="mt-6 space-y-4">
              {c.members.map((m) => (
                <div
                  key={m.abbr}
                  className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm"
                >
                  <p className="font-bold text-primary">{m.abbr}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{m.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg">
            <Image
              src={IMG.drMansi}
              alt={c.imgAltSecondary}
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          </div>
        </section>

        {/* Section 4 – languages */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.langH}</h2>
          <p className="mt-5 leading-relaxed text-gray-800">{c.langP}</p>
        </section>

        {/* Section 5 – treatments */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.treatmentsH}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.treatmentItems.map((item) => (
              <li key={item.path + item.label}>
                <TreatmentCard href={item.path} locale={locale}>
                  {item.label}
                </TreatmentCard>
              </li>
            ))}
          </ul>
        </section>

        {/* General dentistry (existing verified services – keep, do not invent) */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h3 className="text-lg font-bold text-primary sm:text-xl">{c.generalH}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.generalItems.map((item) => (
              <li key={item.path + item.label}>
                <Link
                  href={getHref(item.path, locale)}
                  className="inline-flex rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/[0.04] sm:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6 – insurance */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.insuranceH}</h2>
          <p className="mt-5 leading-relaxed text-gray-800">{getInsuranceCoverageIntro(locale)}</p>
          <p className="mt-4 leading-relaxed text-gray-800">{c.insuranceP}</p>
          <div className="mt-5">
            <HealthInsuranceFundLinks locale={locale} />
          </div>
          {c.insuranceNote ? (
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{c.insuranceNote}</p>
          ) : null}
          <p className="mt-4 text-sm leading-relaxed text-gray-600">{getInsuranceBindingInfo(locale)}</p>
          <p className="mt-5">
            <Link href={gratisHref} className="font-semibold text-accent hover:underline">
              {c.insuranceLinkLabel}
            </Link>
          </p>
        </section>

        {/* Section 7 – practice */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.locationH}</h2>
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:p-8">
            <p className="font-semibold text-primary">{PRACTICE.name}</p>
            <p className="mt-2 text-gray-800">{c.locationAddress}</p>
            <p className="mt-2 text-gray-700">{c.locationHours}</p>
            <p className="mt-2">
              <a href={`tel:${PRACTICE.telephoneTel}`} className="font-medium text-accent hover:underline">
                {c.locationPhone}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
              >
                {c.ctaBook}
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
              >
                {c.directionsLabel}
              </a>
              <Link
                href={terminHref}
                className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {c.ctaOnline}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.faqH}</h2>
          <dl className="mt-6 space-y-4">
            {c.faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4">
                <dt className="font-semibold text-primary">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTAs */}
        <section className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-3 sm:mt-16">
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

        <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">{c.medicalNote}</p>
      </div>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${pageUrl}#person`,
            name: DOCTOR.name,
            honorificPrefix: DOCTOR.honorificPrefix,
            givenName: DOCTOR.givenName,
            familyName: DOCTOR.familyName,
            jobTitle: c.jobTitle,
            description: c.personDescription,
            image: imageAbs,
            url: pageUrl,
            worksFor: {
              "@type": "Dentist",
              name: PRACTICE.name,
              url: PRACTICE.url,
              address: {
                "@type": "PostalAddress",
                streetAddress: PRACTICE.streetAddress,
                postalCode: PRACTICE.postalCode,
                addressLocality: PRACTICE.addressLocality,
                addressCountry: PRACTICE.addressCountry,
              },
              telephone: PRACTICE.telephone,
            },
            knowsLanguage: ["German", "English", "Hindi"],
            hasCredential: c.quals.slice(0, 4).map((q) => ({
              "@type": "EducationalOccupationalCredential",
              name: q.title,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]}
      />
    </PageContent>
  );
}
