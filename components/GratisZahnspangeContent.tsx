import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";

/** All imagery for this page lives under /public/gratis-zahnspange — each file used once. */
const IMG = {
  hero: "/gratis-zahnspange/1-2048x1365.jpg",
  intro: "/gratis-zahnspange/Teaser-Zahspange.png",
  voraussetzungen: "/gratis-zahnspange/Zahnspange-1-pzjfyo51j40kv49z4w8mofsr7omfkjws47rwkxmwx8.png",
  wer1: "/gratis-zahnspange/Kind-Laecheln.png",
  wer2: "/gratis-zahnspange/jugendliche-skaliert.png",
  wer3: "/gratis-zahnspange/Jugendliche.png",
  wer4: "/gratis-zahnspange/beautiful-young-woman-is-dentist-she-is-open-mouthed-shows-newly-fixed-aesthetic-self-aligning-lingual-locks-close-up-860x649.jpg",
  metall: "/gratis-zahnspange/Screenshot-5168.png",
  keramik: "/gratis-zahnspange/girl-eating-chocolate-with-ceramic-teeth-braces_10069-205.png",
  aligners: "/gratis-zahnspange/Aligners-35-q1ah25wbsc1ausmvjri1zvu9hxd6rvlh3ro9a6rxnw.jpg",
  lingualAlt: "/gratis-zahnspange/Screenshot-5329-860x649.png",
  interzeptiv: "/gratis-zahnspange/patientin-strahlendes-laecheln.png",
  hauptbehandlung: "/gratis-zahnspange/Zahnarzt-1-e1671695799854.png",
  ablauf: "/gratis-zahnspange/spiegle-etc-klein.png",
  arzt: "/gratis-zahnspange/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png",
} as const;

const OEGK_URL = "https://www.gesundheitskasse.at/cdscontent/?contentid=10007.882758";

function FaqItem({ question, answer }: { question: string; answer: string }) {
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

type Faq = { q: string; a: string };
type WerCard = { title: string; text: string };
type BraceCard = { title: string; body: string; img: keyof typeof IMG; alt: string };
type TableRow = { option: string; visibility: string; reimbursement: string; note: string };
type PricingCard = {
  title: string;
  subtitle?: string;
  details?: ReactNode[];
  price: string;
  priceNote?: string;
  highlightLabel?: string;
  highlightValue?: string;
  notes?: ReactNode[];
};

export default function GratisZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/gratis-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Gratis Zahnspange";
  const lead = leads[dePath];
  const isDe = locale === "de";

  const ueberMichHref = getHref("/ueber-mich", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const jugendHref = getHref("/zahnspange-fuer-jugendliche", locale);
  const durchsichtigHref = getHref("/durchsichtige-zahnspange", locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const terminHref = getHref("/online-termine", locale);
  const wahlArtikelHref = "/wahlkieferorthopaede-vertragskieferorthopaede-oegk";

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const deCopy = {
    heroKicker: "Kieferorthopädie Wien",
    heroTitle: "Gratis Zahnspange in Wien",
    heroLead:
      "Die Gratis Zahnspange ist eine von der österreichischen Krankenversicherung vorgesehene kieferorthopädische Leistung für bestimmte Kinder und Jugendliche, wenn die entsprechenden Voraussetzungen erfüllt sind. Bei Zahnspange Sablania in Wien prüft Dr. Manish Sablania als Wahlkieferorthopäde, ob Anspruch auf die Gratis Zahnspange in Wien bestehen kann. Anspruch und Bewilligung sind nicht automatisch: In der Regel kommen das Alter von 6 bis 18 Jahren, eine schwere Fehlstellung der IOTN-Stufe 4 oder 5 und die Entscheidung der zuständigen Krankenkasse zusammen. In der Ordination in 1200 Wien werden Versicherte der ÖGK, SVS, BVAEB und KFA (Wien) behandelt.\n\nFür eine bewilligte Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange ist das Honorar so festgelegt, dass die Krankenkassen-Erstattung bei erfüllten Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) bis zu 100 % unserer Rechnung abdecken kann. Die endgültige Bewilligung erfolgt durch die zuständige Krankenkasse. Keramik-Brackets, Alignersysteme und Lingualtechnik sind nicht Teil dieses 100-%-Angebots.",
    ctaPrimary: "Kostenlose Erstberatung vereinbaren",
    ctaSecondary: "Termin online buchen",
    infoBoxTitle: "Besonderer Kostenvorteil bei Zahnspange Sablania",
    infoBoxHighlight: "Bis zu 100 % unserer Rechnung zurück",
    infoBoxText:
      "Bei der bewilligten Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange kann die ÖGK-Kostenerstattung bei erfüllten Gratis-Zahnspange-Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) bis zu 100 % der von Zahnspange Sablania ausgestellten Rechnung abdecken. Dadurch kann für diese konkrete Behandlung kein verbleibender Selbstbehalt entstehen.",
    infoBoxText2:
      "Diese Regelung gilt ausschließlich für die entsprechende Behandlung bei Zahnspange Sablania. Private Zusatzleistungen sowie Keramik-Brackets, Clear Aligner, Invisalign und Lingualzahnspangen sind davon nicht automatisch umfasst. Die endgültige Bewilligung und Kostenerstattung erfolgt durch die ÖGK und hängt von der individuellen Anspruchsberechtigung ab.",
    oegkLinkLabel: "Aktuelle Informationen der ÖGK zur Zahnspange",
    wasIstH2: "Was ist die Gratis Zahnspange?",
    wasIstBody:
      "Die Gratis Zahnspange ist eine kieferorthopädische Leistung der österreichischen Krankenversicherung für bestimmte Kinder und Jugendliche. Sie greift nur, wenn die Voraussetzungen der zuständigen Krankenkasse erfüllt sind – nicht automatisch für jede Fehlstellung und nicht für jede Zahnspange.",
    wasIstBody2:
      "In der Kieferorthopädie Zahnspange Sablania in Wien wird geprüft, ob ein Anspruch in Frage kommt. Die endgültige Bewilligung liegt bei der Krankenkasse.",
    werH2: "Wer hat Anspruch auf die Gratis Zahnspange?",
    werLead:
      "Anspruch und Bewilligung sind nicht automatisch. In der Regel müssen folgende Punkte zusammenkommen:",
    werCards: [
      {
        title: "Alter",
        text: "Kinder und Jugendliche im Alter von 6 bis 18 Jahren, die die Altersvoraussetzungen der Krankenkasse erfüllen.",
      },
      {
        title: "Schwere Fehlstellung",
        text: "Schwere Zahn- oder Kieferfehlstellung – in der Regel IOTN-Stufe 4 oder 5.",
      },
      {
        title: "Medizinische Notwendigkeit",
        text: "Die medizinische Notwendigkeit muss kieferorthopädisch festgestellt werden.",
      },
      {
        title: "Bewilligung",
        text: "Die endgültige Entscheidung trifft die zuständige Krankenkasse – eine Bewilligung ist nicht automatisch.",
      },
    ] as WerCard[],
    iotnH2: "Welche Rolle spielt der IOTN bei der Gratis Zahnspange?",
    iotnBody:
      "IOTN steht für Index of Orthodontic Treatment Need. Der Index stuft ein, wie stark eine Zahn- oder Kieferfehlstellung ist und wie dringend eine kieferorthopädische Behandlung medizinisch nötig erscheint. Für die Gratis Zahnspange ist auf dieser Seite IOTN 4 oder IOTN 5 als Voraussetzung genannt: Stufe 4 steht für schwere, Stufe 5 für sehr schwere Behandlungsbedürftigkeit. Die Einstufung entscheidet mit darüber, ob ein Kassenanspruch geprüft werden kann.",
    iotnNote:
      "Die IOTN-Stufe lässt sich nicht anhand dieser Website selbst festlegen. Ob IOTN 4 oder 5 vorliegt, wird in der kieferorthopädischen Untersuchung festgestellt und mit Ihnen besprochen. Wir stellen keine Online-Diagnose.",
    erstattungH2: "Welche Kosten übernimmt die Krankenkasse?",
    erstattungLead:
      "Als Wahlkieferorthopäde – nicht als Vertragskieferorthopäde – rechnet Dr. Sablania nicht wie eine direkte Vertragskassenleistung ab. Allgemein können nach aktueller Information der Krankenkasse bei einer genehmigten Wahlbehandlung 80 % des gültigen Kassentarifs erstattet werden – nicht automatisch 80 % der Privatrechnung. Bei Zahnspange Sablania ist das Honorar für die bewilligte Gratis-Zahnspange mit fester Metallzahnspange so festgelegt, dass die Erstattung bei erfüllten Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) bis zu 100 % unserer Rechnung abdecken kann. Ein typischer Ablauf sieht so aus:",
    kasseArticleLabel: "Unterschied zwischen Wahl- und Vertragskieferorthopädie",
    steps: [
      "Erstberatung und kieferorthopädische Untersuchung",
      "Feststellung des Befunds und der IOTN-Einstufung",
      "Erstellung des Behandlungsplans und der erforderlichen Unterlagen",
      "Antrag beziehungsweise Prüfung durch die zuständige Krankenkasse",
      "Behandlungsbeginn nach erforderlicher Bewilligung",
      "Bezahlung entsprechend der Vereinbarung mit der Ordination",
      "Einreichung der erforderlichen Rechnung und Unterlagen",
      "Kostenerstattung durch die ÖGK nach positiver Prüfung – bei der entsprechenden Gratis-Zahnspangen-Behandlung bei Zahnspange Sablania können bis zu 100 % unserer Rechnung abgedeckt werden.",
    ],
    erstattungNote:
      "Der genaue Ablauf kann von der Krankenkasse, Behandlung und individuellen Bewilligung abhängen.",
    bracesH2: "Welche Zahnspange wird von der Krankenkasse berücksichtigt?",
    bracesLead:
      "Bei der Gratis-Zahnspange richtet sich die Behandlung nach den Vorgaben der jeweiligen Krankenkasse. Wichtig zu wissen:",
    braceCards: [
      {
        title: "Metall-Zahnspange",
        body: "Festsitzende Metall-Brackets sind in der Regel die standardmäßig vorgesehene Option im Kassenprogramm.",
        img: "metall" as const,
        alt: "Festsitzende Metall-Zahnspange",
      },
      {
        title: "Keramik-Brackets",
        body: "Zahnfarbene Keramik-Brackets sind eine ästhetische Privatoption und nicht automatisch Teil der Kassenleistung.",
        img: "keramik" as const,
        alt: "Keramik-Brackets als private Alternative",
      },
      {
        title: "Clear Aligner",
        body: "Durchsichtige Schienen (Clear Aligner / Invisalign) sind nicht automatisch im öffentlich finanzierten Programm enthalten.",
        img: "aligners" as const,
        alt: "Clear Aligner Schienen",
      },
      {
        title: "Lingualzahnspange",
        body: "Innenliegende (linguale) Zahnspangen sind ebenfalls nicht automatisch abgedeckt und bedürfen einer separaten Kostenklärung.",
        img: "lingualAlt" as const,
        alt: "Linguale Zahnspange von innen",
      },
    ] as BraceCard[],
    compareH2: "Gratis Zahnspange oder private Alternative?",
    compareLead:
      "Überblick – ohne Preise. Ob und in welcher Höhe eine Erstattung möglich ist, hängt von Anspruch und Bewilligung ab.",
    tableHeaders: ["Option", "Sichtbarkeit", "Mögliche Kassenerstattung", "Hinweis"] as const,
    tableRows: [
      {
        option: "Metall-Zahnspange",
        visibility: "Sichtbar",
        reimbursement: "Bei erfüllten Gratis-Zahnspange-Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) bis zu 100 % unserer Rechnung",
        note: "Gilt für die bewilligte Gratis-Zahnspangen-Behandlung bei Zahnspange Sablania",
      },
      {
        option: "Keramik-Brackets",
        visibility: "Weniger auffällig",
        reimbursement: "In der Regel privat",
        note: "Ästhetische Aufzahlung / Privatoption",
      },
      {
        option: "Clear Aligner",
        visibility: "Nahezu unsichtbar",
        reimbursement: "In der Regel privat",
        note: "Nicht automatisch im Kassenprogramm",
      },
      {
        option: "Lingualzahnspange",
        visibility: "Von außen unsichtbar",
        reimbursement: "In der Regel privat",
        note: "Separate Kostenklärung erforderlich",
      },
    ] as TableRow[],
    ablaufH2: "Wie läuft die Gratis-Zahnspangen-Behandlung ab?",
    ablaufLead:
      "Von der Erstberatung bis zur Retention begleiten wir Sie in der Kieferorthopädie in Wien strukturiert – inklusive der Unterlagen für Ihre Krankenkasse, soweit erforderlich.",
    ablaufPoints: [
      "Erstberatung und Untersuchung",
      "Diagnostik (u. a. Röntgen, Fotos, digitaler Scan wo sinnvoll)",
      "Individueller Behandlungsplan",
      "Unterlagen für die Krankenkasse bei Bedarf",
      "Regelmäßige Kontrolltermine",
      "Retention zur Stabilisierung des Ergebnisses",
    ],
    ablaufLink: "Den gesamten Ablauf in der Kieferorthopädie im Detail",
    arztH2: "Gratis Zahnspange bei Zahnspange Sablania in Wien",
    arztSub: `${DOCTOR.jobTitleDe} · ${PRACTICE.streetAddress}, ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    arztBullets: [
      "Qualifizierter Wahlkieferorthopäde für die Gratis-Zahnspange – kein Vertragskieferorthopäde der ÖGK",
      DOCTOR.experienceComboDe,
      `Beratung auf ${PRACTICE.languagesDisplayDe}`,
      `Behandlung in der Ordination ${PRACTICE.streetAddress}, ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    ],
    arztCta: "Termin zur kostenlosen Erstberatung",
    arztNote:
      "Die endgültige Bewilligung und Erstattung legt die zuständige Krankenkasse fest. Bei der bewilligten Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange kann die ÖGK-Erstattung bei Zahnspange Sablania bis zu 100 % unserer Rechnung abdecken, sofern alle Voraussetzungen erfüllt sind.",
    faqH2: "Häufige Fragen zur Gratis Zahnspange",
    faqs: [
      {
        q: "Was ist die Gratis Zahnspange in Österreich?",
        a: "Die Gratis Zahnspange ist eine von der österreichischen Krankenversicherung vorgesehene kieferorthopädische Leistung für bestimmte Kinder und Jugendliche. Anspruch besteht nicht automatisch: Es müssen die Voraussetzungen der zuständigen Krankenkasse erfüllt sein, und die Behandlung wird in der Regel vorab geprüft beziehungsweise bewilligt.",
      },
      {
        q: "Wer bekommt eine Gratis Zahnspange in Wien?",
        a: "Bei Zahnspange Sablania in Wien kommen grundsätzlich Kinder und Jugendliche im Alter von 6 bis 18 Jahren infrage, die eine schwere Zahn- oder Kieferfehlstellung der IOTN-Stufe 4 oder 5 haben. Die medizinische Notwendigkeit muss kieferorthopädisch festgestellt werden. Die endgültige Entscheidung trifft die zuständige Krankenkasse – eine Bewilligung ist nicht automatisch.",
      },
      {
        q: "Welche IOTN-Stufe braucht man für die Gratis Zahnspange?",
        a: "Auf dieser Seite ist IOTN 4 oder IOTN 5 als Voraussetzung genannt. Der IOTN (Index of Orthodontic Treatment Need) stuft den kieferorthopädischen Behandlungsbedarf ein. Ob IOTN 4 oder 5 vorliegt, wird in der Untersuchung festgestellt – nicht anhand dieser Website.",
      },
      {
        q: "Bis zu welchem Alter gibt es die Gratis Zahnspange?",
        a: "Nach den Angaben dieser Seite kommen Kinder und Jugendliche im Alter von 6 bis 18 Jahren infrage, sofern die Altersvoraussetzungen der Krankenkasse erfüllt sind. Die bewilligte Gratis-Zahnspange mit fester Metallzahnspange bei Zahnspange Sablania bezieht sich auf Patientinnen und Patienten unter 18 Jahren mit IOTN 4 oder IOTN 5.",
      },
      {
        q: "Welche Krankenkasse bezahlt die Gratis Zahnspange?",
        a: "In der Ordination werden Versicherte der ÖGK, SVS, BVAEB und KFA (Wien) behandelt. Ob und in welcher Höhe eine Leistung oder Erstattung möglich ist, entscheidet die zuständige Krankenkasse nach Prüfung des Einzelfalls. Die Bewilligung ist nicht automatisch.",
      },
      {
        q: "Muss man die Gratis Zahnspange zuerst selbst bezahlen?",
        a: "Dr. Manish Sablania ist Wahlkieferorthopäde, kein Vertragskieferorthopäde. Die Behandlung wird daher nicht wie eine direkte Vertragskassenleistung abgerechnet. In der Regel zahlen Patientinnen und Patienten entsprechend der Vereinbarung mit der Ordination und reichen Rechnung sowie Unterlagen bei der Krankenkasse ein. Die Krankenkasse prüft anschließend die Erstattung.",
      },
      {
        q: "Ist die Gratis Zahnspange wirklich vollständig kostenlos?",
        a: "Bei der bewilligten Gratis-Zahnspangen-Behandlung mit fester Metallzahnspange kann die Kostenerstattung bei erfüllten Voraussetzungen (unter 18 Jahren, IOTN 4 oder IOTN 5) bis zu 100 % der Rechnung von Zahnspange Sablania abdecken. Dadurch kann für diese konkrete Behandlung kein Selbstbehalt verbleiben. Die endgültige Bewilligung und Erstattung entscheidet die zuständige Krankenkasse nach Prüfung des individuellen Anspruchs. Private Zusatzleistungen und ästhetische Alternativen wie Keramik-Brackets, Clear Aligner, Invisalign oder Lingualzahnspangen sind nicht automatisch umfasst.",
      },
      {
        q: "Welche Zahnspangen sind im Rahmen der Gratis Zahnspange möglich?",
        a: "Bei der Gratis-Zahnspange richtet sich die Behandlung nach den Vorgaben der jeweiligen Krankenkasse. Festsitzende Metall-Brackets sind in der Regel die standardmäßig vorgesehene Option. Keramik-Brackets, Clear Aligner, Invisalign und Lingualzahnspangen sind nicht automatisch Teil des öffentlich finanzierten Programms und bedürfen einer gesonderten Kostenklärung.",
      },
    ] as Faq[],
    sourceNote:
      "Informationen der Krankenkasse zuletzt geprüft: Juli 2026. Verbindliche Tarife und Bewilligungen erhalten Sie bei Ihrer Krankenkasse (ÖGK, SVS, BVAEB oder KFA).",
    relatedLead: "Weitere Informationen:",
    relatedLinks: [
      { href: ueberMichHref, label: "Über Dr. Sablania" },
      { href: kfoHref, label: "Kieferorthopädie Wien" },
      { href: kinderHref, label: "Zahnspange für Kinder" },
      { href: jugendHref, label: "Zahnspange für Jugendliche" },
      { href: durchsichtigHref, label: "Durchsichtige Zahnspange" },
      { href: wahlArtikelHref, label: "Unterschied zwischen Wahl- und Vertragskieferorthopädie" },
      {
        href: "/gratis-zahnspange-wien-voraussetzungen",
        label: "Wer bekommt eine Gratis Zahnspange? Voraussetzungen",
      },
    ],
    pricingH2: "Kosten und Honorare",
    pricingLead:
      "Transparente Orientierung zu ausgewählten Leistungen. Die endgültige Bewilligung durch die Krankenkasse bleibt im Einzelfall maßgeblich.",
    pricingCards: [
      {
        title: "Herausnehmbare / Interzeptive Zahnspangen",
        subtitle: "Gesamtkosten pro Behandlungsjahr ohne Analyse",
        price: "€ 1.300,-",
        priceNote: "(bei Privatbehandlung)",
        highlightLabel: "Bei aktiver und genehmigter Krankenkasse:",
        highlightValue: "Keine Kosten",
      },
      {
        title: "Analyse, Records und Behandlungsplan",
        price: "€ 300,-",
        notes: [
          "Bei einer Gratis-Zahnspange entstehen keine Kosten. Verrechnung direkt mit der Krankenkasse.",
          <>
            <strong>€ 300,- nur bei</strong> Dokumentation/Analyse in unserer Ordination, wenn die
            Behandlung anschließend <strong>woanders/oder nicht bei uns</strong> durchgeführt wird.
          </>,
        ],
      },
      {
        title: "Festsitzende Zahnspangen – unter 18 Jahren",
        details: ["Unter 18 Jahren", <strong key="iotn">IOTN 4 oder IOTN 5</strong>],
        price: "Kostenlos",
        notes: ["Nach Genehmigung durch die Krankenkasse kostenlos."],
      },
      {
        title: "Entfernung einer bestehenden Zahnspange",
        subtitle:
          "Für Patienten, die bereits eine festsitzende Zahnspange haben und diese in unserer Ordination entfernen lassen möchten.",
        price: "€ 350,-",
      },
    ] as PricingCard[],
    finalH2: "Jetzt kostenlose Erstberatung vereinbaren",
    finalP:
      "Wir prüfen mit Ihnen, ob die Voraussetzungen für die Gratis Zahnspange erfüllt sein können, erklären den Ablauf der Bewilligung und informieren Sie transparent über die mögliche Kostenerstattung von bis zu 100 % unserer Rechnung.",
    finalB1: "Termin vereinbaren",
    finalB2: "Kontakt aufnehmen",
  };

  const enCopy = {
    heroKicker: "Orthodontics Vienna",
    heroTitle: "Publicly Funded Braces in Vienna – Eligibility and ÖGK Reimbursement",
    heroLead:
      "Publicly funded braces are available through Austria’s health-fund system for eligible children and teenagers with severe dental or jaw misalignments. Dr. Manish Sablania is a qualified elective orthodontist for this programme. The practice treats patients with ÖGK, SVS, BVAEB and KFA (Vienna). Eligibility and the amount of any reimbursement are determined by your health fund after reviewing the individual case.",
    ctaPrimary: "Book a free initial consultation",
    ctaSecondary: "Book an appointment online",
    infoBoxTitle: "Important information about reimbursement",
    infoBoxText:
      "When treatment is provided by a qualified elective orthodontist, your health fund (ÖGK, SVS, BVAEB or KFA) reviews reimbursement individually. According to current ÖGK information, approved cases may receive reimbursement of 80% of the applicable contractual tariff. This does not necessarily mean 80% of the orthodontist’s invoice. Prior approval may be required. Confirm your individual eligibility with your fund before treatment begins.",
    oegkLinkLabel: "Current ÖGK information on braces",
    werH2: "Who may qualify for publicly funded braces?",
    werLead: "Eligibility and approval are not automatic. These points usually need to come together:",
    werCards: [
      {
        title: "Age",
        text: "Children and teenagers aged 6 to 18 who meet the age requirements of the health fund.",
      },
      {
        title: "Severe misalignment",
        text: "Severe dental or jaw misalignment – generally IOTN grade 4 or 5.",
      },
      {
        title: "Medical necessity",
        text: "Medical necessity must be confirmed through orthodontic assessment.",
      },
      {
        title: "Approval",
        text: "The final decision rests with your health fund (ÖGK, SVS, BVAEB or KFA) – approval is not automatic.",
      },
    ] as WerCard[],
    iotnH2: "What do IOTN grades 4 and 5 mean?",
    iotnBody:
      "The Index of Orthodontic Treatment Need classifies the severity and medical need for orthodontic treatment. Grades 4 and 5 indicate severe or very severe treatment need. The final classification must be established through orthodontic diagnosis – not from website content alone.",
    iotnNote:
      "We do not diagnose online. Whether IOTN 4 or 5 applies is determined in the examination and explained to you in person.",
    erstattungH2: "How does ÖGK reimbursement work with an elective orthodontist?",
    erstattungLead:
      "As a qualified elective orthodontist, Dr. Sablania does not bill like a contracted insurer orthodontist. A typical process looks like this:",
    steps: [
      "Initial consultation and orthodontic examination",
      "Clinical findings and IOTN classification",
      "Treatment plan and required documentation",
      "Application / review by your health fund (ÖGK, SVS, BVAEB or KFA)",
      "Start of treatment after any required approval",
      "Payment according to the agreement with the practice",
      "Submission of the invoice and required documents",
      "Reimbursement by the insurer according to its decision",
    ],
    erstattungNote:
      "The exact process can depend on the insurer, the treatment and the individual approval.",
    bracesH2: "Which type of braces is included?",
    bracesLead:
      "For Gratis-Zahnspange, treatment follows the rules of the relevant health fund. Important points:",
    braceCards: [
      {
        title: "Metal braces",
        body: "Fixed metal brackets are generally the standard funded option for fixed treatment.",
        img: "metall" as const,
        alt: "Fixed metal braces",
      },
      {
        title: "Ceramic brackets",
        body: "Tooth-coloured ceramic brackets are an aesthetic private upgrade and are not automatically covered.",
        img: "keramik" as const,
        alt: "Ceramic brackets as a private option",
      },
      {
        title: "Clear aligners",
        body: "Clear aligners / Invisalign are not automatically included in the publicly funded programme.",
        img: "aligners" as const,
        alt: "Clear aligner trays",
      },
      {
        title: "Lingual braces",
        body: "Lingual (inside) braces are likewise not automatically covered and need a separate cost discussion.",
        img: "lingualAlt" as const,
        alt: "Lingual braces on the inside of the teeth",
      },
    ] as BraceCard[],
    compareH2: "Publicly funded braces or a private alternative?",
    compareLead:
      "Overview – without prices. Whether reimbursement is possible, and at what level, depends on eligibility and approval.",
    tableHeaders: ["Option", "Visibility", "Possible reimbursement", "Note"] as const,
    tableRows: [
      {
        option: "Metal braces",
        visibility: "Visible",
        reimbursement: "Subject to eligibility and approval",
        note: "Usually the standard option in the public programme",
      },
      {
        option: "Ceramic brackets",
        visibility: "Less noticeable",
        reimbursement: "Usually private",
        note: "Aesthetic upgrade / private option",
      },
      {
        option: "Clear aligners",
        visibility: "Nearly invisible",
        reimbursement: "Usually private",
        note: "Not automatically included in the public programme",
      },
      {
        option: "Lingual braces",
        visibility: "Invisible from outside",
        reimbursement: "Usually private",
        note: "Separate cost clarification required",
      },
    ] as TableRow[],
    ablaufH2: "Treatment process at our practice",
    ablaufLead:
      "From the first consultation through to retention, we guide you step by step – including health-fund documentation where required.",
    ablaufPoints: [
      "Initial consultation and examination",
      "Diagnostics (including X-rays, photos and digital scan where appropriate)",
      "Individual treatment plan",
      "Health-fund documentation if needed",
      "Regular control visits",
      "Retention to stabilise the result",
    ],
    ablaufLink: "Full orthodontic treatment process in detail",
    arztH2: "Consultation with Dr. Manish Sablania",
    arztSub: `${DOCTOR.jobTitleEn} · ${PRACTICE.addressLocality} ${PRACTICE.postalCode}`,
    arztBullets: [
      "Qualified elective orthodontist for publicly funded braces – not a contracted ÖGK orthodontist",
      DOCTOR.experienceComboEn,
      `Consultations in ${PRACTICE.languagesDisplayEn}`,
      `Treatment at the practice in ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    ],
    arztCta: "Book a free initial consultation",
    arztNote:
      "Approval and reimbursement are decided by your health fund (ÖGK, SVS, BVAEB or KFA). Our practice treats insured members of all these funds.",
    faqH2: "FAQ",
    faqs: [
      {
        q: "Are publicly funded braces completely free of charge?",
        a: "With contracted insurer orthodontists, treatment may be provided as a health-fund benefit under the applicable rules. With elective orthodontists, different reimbursement rules apply. ÖGK reviews each case individually and, according to current information, may reimburse 80% of the applicable contractual tariff. That is not necessarily 80% of the private invoice.",
      },
      {
        q: "Who may be eligible for publicly funded braces?",
        a: "In general, children and teenagers aged 6 to 18 who meet the age criteria and have a severe dental or jaw misalignment of IOTN grade 4 or 5 may qualify. The final decision is made by your health fund (ÖGK, SVS, BVAEB or KFA).",
      },
      {
        q: "Is prior approval required?",
        a: "Depending on the treatment and insurer, a review or approval may be required before treatment begins. Eligibility should therefore be clarified before starting.",
      },
      {
        q: "Does ÖGK pay for Invisalign or clear aligners?",
        a: "Clear aligners and Invisalign are not automatically part of the publicly funded programme. Whether any contribution is possible depends on your fund (ÖGK, SVS, BVAEB or KFA) and your individual approval.",
      },
      {
        q: "What does elective orthodontist mean?",
        a: "An elective orthodontist (Wahlkieferorthopäde) does not generally bill treatment in the same way as a contracted insurer orthodontist. Patients may apply for partial reimbursement depending on approval and health-fund rules.",
      },
    ] as Faq[],
    sourceNote:
      "Health-fund information last reviewed: July 2026. Binding tariffs and approvals are provided by your fund (ÖGK, SVS, BVAEB or KFA).",
    relatedLead: "Related pages:",
    relatedLinks: [
      { href: ueberMichHref, label: "About Dr. Sablania" },
      { href: kfoHref, label: "Orthodontics" },
      { href: kinderHref, label: "Braces for children" },
      { href: jugendHref, label: "Braces for teens" },
      { href: durchsichtigHref, label: "Clear aligners" },
    ],
    pricingH2: "Fees and costs",
    pricingLead:
      "A transparent overview of selected services. Final health-fund approval is decided case by case.",
    pricingCards: [
      {
        title: "Removable / interceptive braces",
        subtitle: "Total cost per treatment year excluding analysis",
        price: "€ 1.300,-",
        priceNote: "(private treatment)",
        highlightLabel: "With active, approved health fund:",
        highlightValue: "No charge",
      },
      {
        title: "Analysis, records and treatment plan",
        price: "€ 300,-",
        notes: [
          "With a Gratis Zahnspange there are no costs. Billing is handled directly with the health fund.",
          "€ 300,- only if analysis/documentation is done here and treatment continues elsewhere.",
        ],
      },
      {
        title: "Fixed braces – under 18",
        details: ["Under 18 years of age", <strong key="iotn">IOTN 4 or IOTN 5</strong>],
        price: "No charge",
        notes: ["Free of charge after approval by the health fund."],
      },
      {
        title: "Removal of existing braces",
        subtitle:
          "For patients who already have fixed braces and would like them removed at our practice.",
        price: "€ 350,-",
      },
    ] as PricingCard[],
    finalH2: "Book your free consultation",
    finalP:
      "We will explain in person whether publicly funded braces may apply in your case – and which private alternatives are available.",
    finalB1: "Book appointment",
    finalB2: "Contact us",
  };

  const copy = isDe ? deCopy : enCopy;

  const werImgs = [IMG.wer1, IMG.wer2, IMG.wer3, IMG.wer4] as const;
  const werAlts = isDe
    ? [
        "Lächelndes Kind in der Kieferorthopädie",
        "Jugendliche mit festsitzender Zahnspange",
        "Jugendlicher Patient mit Zahnspange",
        "Erwachsene Patientin mit ästhetischer Zahnspange",
      ]
    : [
        "Smiling child at the orthodontic practice",
        "Teen with fixed braces",
        "Teenage patient with braces",
        "Adult patient with aesthetic braces",
      ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} hideHeader showCta={false}>
      <div className="not-prose max-w-none space-y-0">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted text-white shadow-soft-lg">
          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light/95">{copy.heroKicker}</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{copy.heroTitle}</h1>
              {copy.heroLead.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`max-w-xl text-base leading-relaxed text-white/90 sm:text-lg ${i === 0 ? "mt-5" : "mt-4"}`}
                >
                  {para}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light"
                >
                  {copy.ctaPrimary}
                </a>
                <Link
                  href={terminHref}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 shadow-soft-lg lg:mx-0 lg:max-w-2xl lg:justify-self-start">
              <Image
                src={IMG.hero}
                alt={isDe ? "Patientin in der Kieferorthopädie bei der Beratung" : "Orthodontic consultation"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Important info box */}
        <section className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-soft-lg">
            <div className="relative aspect-[21/9] w-full sm:aspect-[2/1]">
              <Image
                src={IMG.intro}
                alt={isDe ? "Metallbrackets – öffentlich finanzierte Zahnspange" : "Metal brackets – publicly funded braces"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-amber-300/80 bg-amber-50/95 px-6 py-5 shadow-soft sm:px-8 sm:py-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-950">{copy.infoBoxTitle}</p>
            {"infoBoxHighlight" in copy && copy.infoBoxHighlight ? (
              <p className="mt-3">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary ring-1 ring-primary/15">
                  {copy.infoBoxHighlight}
                </span>
              </p>
            ) : null}
            <p className="mt-2 text-sm leading-relaxed text-amber-950/90 sm:text-base">{copy.infoBoxText}</p>
            {"infoBoxText2" in copy && copy.infoBoxText2 ? (
              <p className="mt-2 text-sm leading-relaxed text-amber-950/90 sm:text-base">{copy.infoBoxText2}</p>
            ) : null}
            <p className="mt-4">
              <a
                href={OEGK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-amber-400/80 underline-offset-2 hover:text-accent"
              >
                {copy.oegkLinkLabel} →
              </a>
            </p>
          </div>
        </section>

        {"wasIstH2" in copy && copy.wasIstH2 ? (
          <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.wasIstH2}</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.wasIstBody}</p>
            {"wasIstBody2" in copy && copy.wasIstBody2 ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.wasIstBody2}</p>
            ) : null}
          </section>
        ) : null}

        {/* Who may qualify */}
        <section className="mt-16 rounded-3xl bg-gray-50/90 px-4 py-12 sm:mt-24 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.werH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.werLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.werCards.map((card, i) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={werImgs[i]!}
                    alt={werAlts[i] ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
            {isDe ? (
              <>
                Mehr zu{" "}
                <Link href={kinderHref} className="font-medium text-accent underline hover:text-primary">
                  Zahnspange für Kinder
                </Link>{" "}
                und{" "}
                <Link href={jugendHref} className="font-medium text-accent underline hover:text-primary">
                  Zahnspange für Jugendliche
                </Link>
                .
              </>
            ) : (
              <>
                More on{" "}
                <Link href={kinderHref} className="font-medium text-accent underline hover:text-primary">
                  braces for children
                </Link>{" "}
                and{" "}
                <Link href={jugendHref} className="font-medium text-accent underline hover:text-primary">
                  braces for teens
                </Link>
                .
              </>
            )}
          </p>
        </section>

        {/* IOTN */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.iotnH2}</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.iotnBody}</p>
              <p className="mt-4 rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-3 text-sm text-slate-700">
                {copy.iotnNote}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft-lg">
              <Image
                src={IMG.voraussetzungen}
                alt={isDe ? "Festsitzende Metall-Zahnspange" : "Fixed metal braces"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Reimbursement steps */}
        <section className="mt-16 rounded-3xl bg-primary/[0.06] px-4 py-12 sm:mt-24 sm:px-8 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.erstattungH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.erstattungLead}</p>
          {"kasseArticleLabel" in copy && copy.kasseArticleLabel ? (
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700">
              <Link href={wahlArtikelHref} className="font-medium text-accent underline hover:text-primary">
                {copy.kasseArticleLabel}
              </Link>
            </p>
          ) : null}
          <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <Image
                src={IMG.hauptbehandlung}
                alt={isDe ? "Zahnarzt bei der kieferorthopädischen Behandlung" : "Dentist during orthodontic treatment"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <ol className="space-y-4">
              {copy.steps.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-800 sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm italic text-slate-600">{copy.erstattungNote}</p>
        </section>

        {/* Which braces */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.bracesH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.bracesLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {copy.braceCards.map((b) => (
              <article
                key={b.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-50">
                  <Image
                    src={IMG[b.img]}
                    alt={b.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
            {isDe ? (
              <>
                Private Alternativen wie{" "}
                <Link href={durchsichtigHref} className="font-medium text-accent underline hover:text-primary">
                  durchsichtige Zahnspangen / Clear Aligner
                </Link>{" "}
                besprechen wir transparent in der Beratung.
              </>
            ) : (
              <>
                Private options such as{" "}
                <Link href={durchsichtigHref} className="font-medium text-accent underline hover:text-primary">
                  clear aligners
                </Link>{" "}
                are explained transparently during the consultation.
              </>
            )}
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.compareH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.compareLead}</p>
          <div className="mx-auto mt-8 max-w-5xl overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-soft">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-primary/[0.04]">
                  {copy.tableHeaders.map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-primary sm:px-5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.tableRows.map((row) => (
                  <tr key={row.option} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 font-medium text-slate-900 sm:px-5">{row.option}</td>
                    <td className="px-4 py-3 text-slate-700 sm:px-5">{row.visibility}</td>
                    <td className="px-4 py-3 text-slate-700 sm:px-5">{row.reimbursement}</td>
                    <td className="px-4 py-3 text-slate-600 sm:px-5">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Treatment process */}
        <section className="mt-16 rounded-3xl bg-gray-50/90 px-4 py-12 sm:mt-24 sm:px-8 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.ablaufH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.ablaufLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <Image
                src={IMG.ablauf}
                alt={isDe ? "Kieferorthopädische Instrumente und Spiegel" : "Orthodontic instruments"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <ul className="space-y-4">
              {copy.ablaufPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-soft sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={IMG.interzeptiv}
                alt={isDe ? "Patientin mit strahlendem Lächeln nach Behandlung" : "Patient with a bright smile after treatment"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
          <p className="mt-10 text-center">
            <Link
              href={ablaufHref}
              className="inline-flex items-center gap-2 font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-primary"
            >
              {copy.ablaufLink} →
            </Link>
          </p>
        </section>

        {/* Doctor consultation */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-soft-lg sm:p-10 lg:grid-cols-[minmax(0,280px)_1fr]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={IMG.arzt}
                alt={
                  isDe
                    ? "Dr. med. dent. Manish Sablania, Kieferorthopäde Wien"
                    : "Dr Manish Sablania, orthodontist Vienna"
                }
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">{copy.arztH2}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{copy.arztSub}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-800 sm:text-base">
                {copy.arztBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">{copy.arztNote}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-muted"
                >
                  {copy.arztCta}
                </a>
                <Link
                  href={ueberMichHref}
                  className="inline-flex rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/[0.04]"
                >
                  {isDe ? "Mehr über Dr. Sablania" : "More about Dr. Sablania"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.faqH2}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {copy.faqs.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </section>

        {/* Source note + related links */}
        <section className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <p className="text-sm leading-relaxed text-slate-600">
            {copy.sourceNote}{" "}
            <a
              href={OEGK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline hover:text-primary"
            >
              {copy.oegkLinkLabel}
            </a>
          </p>
          <p className="mt-6 text-sm text-slate-600">{copy.relatedLead}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {copy.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-accent underline hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={kontaktHref} className="font-medium text-accent underline hover:text-primary">
                {isDe ? "Kontakt" : "Contact"}
              </Link>
            </li>
            <li>
              <Link href={terminHref} className="font-medium text-accent underline hover:text-primary">
                {isDe ? "Online-Termine" : "Book appointment"}
              </Link>
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.pricingH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.pricingLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.pricingCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-soft sm:p-6"
              >
                <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                {card.subtitle ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.subtitle}</p>
                ) : null}
                {card.details?.length ? (
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {card.details.map((item, detailIndex) => (
                      <li key={detailIndex}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-4 text-2xl font-bold tracking-tight text-primary">{card.price}</p>
                {card.priceNote ? (
                  <p className="mt-1 text-sm text-slate-600">{card.priceNote}</p>
                ) : null}
                {card.highlightLabel && card.highlightValue ? (
                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/90 px-3 py-2.5">
                    <p className="text-xs leading-relaxed text-amber-950/90 sm:text-sm">{card.highlightLabel}</p>
                    <p className="mt-1 text-sm font-semibold text-amber-950">{card.highlightValue}</p>
                  </div>
                ) : null}
                {card.notes?.length ? (
                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {card.notes.map((note, noteIndex) => (
                      <li key={noteIndex}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 mb-4 rounded-3xl bg-gradient-to-br from-primary to-primary-muted px-6 py-12 text-center text-white shadow-soft-lg sm:mt-24 sm:px-10 sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.finalH2}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">{copy.finalP}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light"
            >
              {copy.finalB1}
            </a>
            <Link
              href={kontaktHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.finalB2}
            </Link>
          </div>
        </section>
      </div>
      <JsonLd
        data={
          isDe
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "@id": `${pageUrl}#webpage`,
                  url: pageUrl,
                  name: "Gratis Zahnspange in Wien",
                  headline: "Gratis Zahnspange in Wien",
                  description:
                    "Gratis Zahnspange in Wien: Voraussetzungen, IOTN und Beratung bei Zahnspange Sablania. Anspruch hängt von Alter, Befund und Krankenkasse ab.",
                  inLanguage: "de-AT",
                  isPartOf: { "@id": websiteId },
                  author: { "@id": doctorId },
                  about: { "@id": dentistId },
                  mainEntity: { "@id": `${pageUrl}#service` },
                  audience: {
                    "@type": "PeopleAudience",
                    name: "Kinder und Jugendliche",
                    suggestedMinAge: 6,
                    suggestedMaxAge: 18,
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
                      name: "Gratis Zahnspange",
                      item: pageUrl,
                    },
                  ],
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "@id": `${pageUrl}#service`,
                  name: "Gratis Zahnspange",
                  serviceType: "Kieferorthopädie / Gratis Zahnspange",
                  url: pageUrl,
                  provider: { "@id": dentistId },
                  areaServed: {
                    "@type": "City",
                    name: "Wien",
                  },
                  availableLanguage: ["German", "English", "Hindi"],
                  description:
                    "Kieferorthopädische Beratung zur Gratis Zahnspange in Wien. Anspruch hängt von Alter, IOTN und Bewilligung der zuständigen Krankenkasse ab.",
                },
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: copy.faqs.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                    },
                  })),
                },
              ]
            : {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: copy.faqs.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              }
        }
      />
    </PageContent>
  );
}
