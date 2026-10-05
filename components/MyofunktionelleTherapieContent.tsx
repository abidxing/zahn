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
      <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-800">{answer}</div>
    </details>
  );
}

const MYOFUNKTION_IMAGES = [
  {
    src: "/myofunktionelle-therapie/myofunktion-appliance-hand.png",
    altDe: "Herausnehmbares myofunktionelles Therapiegerät aus blauem Kunststoff mit Metallbögen",
    altEn: "Removable myofunctional therapy appliance in blue acrylic with metal components",
  },
  {
    src: "/myofunktionelle-therapie/myofunktion-plates-pair.png",
    altDe: "Zwei blaue herausnehmbare Platten mit Expansionsschraube und Halteklammern",
    altEn: "Two blue removable plates with expansion screw and retaining clasps",
  },
] as const;

type Lang = "de" | "en";

const COPY: Record<
  Lang,
  {
    galleryTitle: string;
    intro: { h2: string; p: string[] };
    timing: { h2: string; p: string[] };
    merke: { h3: string; p: string };
    funktion: { h2: string; p: string };
    details: { h3: string; items: string[] };
    platte: { h3: string; p: string };
    wear: { h2: string; p: string; cta: string };
    ablauf: { h2: string; steps: string[]; link: string };
  }
> = {
  de: {
    galleryTitle: "Beispiele: herausnehmbare Therapiegeräte",
    intro: {
      h2: "Was ist myofunktionelle Therapie?",
      p: [
        "Myofunktionelle Therapie arbeitet mit herausnehmbaren Geräten und gezielter Muskelarbeit. Kau-Muskulatur und übrige orofaziale Muskulatur können so aktiv und passiv beeinflusst werden. Diese Muskeln sind mitverantwortlich für die Zahnstellung und die Entwicklung des Kiefers.",
        "Sie kann der Vorbeugung von Fehlstellungen in der Frühphase dienen und ist auch eine Behandlungsoption, wenn bereits eine Fehlstellung besteht. Ob sie sinnvoll ist, hängt vom individuellen Befund ab.",
      ],
    },
    timing: {
      h2: "Wann kann eine myofunktionelle Therapie sinnvoll sein?",
      p: [
        "Die Therapie kommt frühzeitig im Milchgebiss, im Frühwechselgebiss oder im Wechselgebiss zum Einsatz – und kann je nach Befund auch später, etwa in der Retention, ergänzend genutzt werden.",
        "Ziel ist es, ungünstige Gewohnheiten wie Zungenpressen, ein ungünstiges Schluckmuster oder Mundatmung zu verbessern. Dadurch kann das Risiko späterer Zahn- und Kieferfehlstellungen verringert werden; ein bestimmtes Ergebnis ist nicht zugesichert.",
        "Je jünger die Patientinnen und Patienten sind und je mehr Wachstum noch möglich ist, desto günstiger kann die Prognose sein, Fehlstellungen frühzeitig zu beeinflussen.",
      ],
    },
    merke: {
      h3: "Merke",
      p: "Nicht nur die Steuerung des Wachstums ist ein zentrales Ziel: Die Therapie kann früh störende Faktoren angehen und einen harmonischen Wachstumsverlauf mit Kieferregulation unterstützen.",
    },
    funktion: {
      h2: "Myofunktionelle Therapie und Kieferorthopädie",
      p: "Funktionskieferorthopädische Geräte binden die orofaziale Muskulatur ein und sollen die Muskeltätigkeit normalisieren. Myofunktionelle Therapie zielt darauf ab, Fehlfunktionen zu verbessern. Die Geräte können Kräfte im Wachstum lenken; über Hemmung und Förderung kann eine skelettale Fehlstellung mitbeeinflusst werden. Sie ersetzt keine kieferorthopädische Zahnspangenbehandlung, kann diese aber je nach Befund ergänzen.",
    },
    details: {
      h3: "Typische Schwerpunkte der Behandlung",
      items: [
        "Bei den verwendeten Geräten wird großer Wert auf Mund- und Lippenschluss gelegt.",
        "Die Zunge erhält ausreichend Funktionsraum.",
        "Die Geräte werden in der Wachstumsphase eingesetzt.",
        "Eine Verbesserung der Nasenatmung wird angestrebt.",
        "Einsatz auch in der Phase der Stabilisierung (Retention) nach kieferorthopädischer Korrektur – grundsätzlich in jedem Alter möglich.",
      ],
    },
    platte: {
      h3: "Myofunktionelle Zahnspange (herausnehmbar)",
      p: "Zur Therapie werden individuell angepasste, herausnehmbare Platten oder Trainer verwendet – z. B. mit Klammern, Schrauben oder Federn, je nach Befund. Sie unterstützen die Muskel- und Zungenführung und werden nach Plan tagsüber und nachts getragen.",
    },
    wear: {
      h2: "Tragedauer",
      p: "Bei herausnehmbaren Geräten ist Ihre Mitarbeit entscheidend: In der Regel sollten sie mindestens 12–14 Stunden pro Tag getragen werden – typischerweise die ganze Nacht plus einige Stunden am Tag.",
      cta: "Termin zur kostenlosen Erstbesprechung",
    },
    ablauf: {
      h2: "Wie läuft eine myofunktionelle Therapie ab?",
      steps: [
        "Kostenlose Erstberatung zur Zahnfehlstellung – nur nach Vereinbarung.",
        "Diagnostik und Behandlungsunterlagen: Röntgen, Fotos und digitale Scans – ohne klassische Abdrücke.",
        "Planbesprechung: Auswertung und Empfehlung, welche Geräte oder Zahnspangen für Ihren Fall sinnvoll sind.",
        "Behandlungsbeginn: Einsetzen des Geräts, Aufklärung zu Reinigung und Tragezeiten.",
        "Regelmäßige Kontrollen etwa alle 6–8 Wochen.",
        "Behandlungsende: Entfernen der Apparatur und Besprechung des Ergebnisses.",
        "Retention – Stabilisierung des Behandlungserfolgs.",
      ],
      link: "Ablauf der Zahnspangenbehandlung",
    },
  },
  en: {
    galleryTitle: "Examples: removable appliances",
    intro: {
      h2: "Myofunctional therapy for misalignment",
      p: [
        "Myofunctional therapy uses removable appliances to influence the muscles of chewing and the rest of the orofacial system, actively and passively. These muscles play a part in tooth position and jaw development.",
        "It helps prevent misalignment in the early phase and is also an option when misalignment is already present.",
      ],
    },
    timing: {
      h2: "Timing, aims and details",
      p: [
        "Therapy is used early in the primary dentition, early mixed dentition or mixed dentition.",
        "The aim is to improve habits such as tongue thrusting, incorrect swallowing or mouth breathing – and to reduce the risk of later tooth and jaw misalignment.",
        "The younger the patient and the more growth potential remains, the better the chance of influencing development early.",
      ],
    },
    merke: {
      h3: "Key point",
      p: "Growth guidance is a central aim, but therapy also addresses disruptive factors early and supports harmonious jaw development.",
    },
    funktion: {
      h2: "Functional orthodontics and myofunctional therapy",
      p: "Functional appliances involve the orofacial muscles and aim to normalise muscle activity. Myofunctional therapy targets long-term improvement of dysfunctions. Appliances guide forces during growth; inhibition and stimulation can help address skeletal discrepancies.",
    },
    details: {
      h3: "Typical treatment focus",
      items: [
        "Emphasis on lip seal and mouth closure with the appliances used.",
        "Adequate functional space for the tongue.",
        "Use during the growth phase.",
        "Aim to improve nasal breathing.",
        "Also used in the retention phase after orthodontic correction – at any age where appropriate.",
      ],
    },
    platte: {
      h3: "Myofunctional brace (removable)",
      p: "Treatment uses individually fitted removable plates or trainers – with clasps, screws or springs as needed. They support muscle and tongue function and are worn by day and night according to your plan.",
    },
    wear: {
      h2: "Wear time",
      p: "With removable appliances, your cooperation is essential: they usually need to be worn at least 12–14 hours per day – typically all night plus several hours during the day.",
      cta: "Book a free initial consultation",
    },
    ablauf: {
      h2: "The process at our practice",
      steps: [
        "Free initial consultation for misalignment – by appointment only.",
        "Diagnostics and records: X-rays, photos and digital scans – without conventional impressions.",
        "Planning session: findings and recommendation on suitable appliances or braces.",
        "Start of treatment: fitting the appliance, advice on cleaning and wear.",
        "Regular check-ups about every 6–8 weeks.",
        "End of treatment: removal and review of the result.",
        "Retention – stabilising the outcome.",
      ],
      link: "Full treatment process in detail",
    },
  },
};

const sectionClass = "mx-auto mt-12 max-w-3xl sm:mt-14";
const cardClass =
  "rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-soft sm:p-8";
const h2Class = "text-xl font-bold text-primary sm:text-2xl";
const h3Class = "text-lg font-semibold text-primary sm:text-xl";
const bodyClass = "mt-4 space-y-4 text-base leading-relaxed text-gray-800";

export default function MyofunktionelleTherapieContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/myofunktionelle-therapie";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const isDe = locale === "de";
  const title = isDe ? "Myofunktionelle Therapie in Wien" : (titles[dePath] ?? "Myofunktionelle Therapie");
  const lead = isDe
    ? "Myofunktionelle Therapie trainiert Zunge, Lippen und Mundmuskulatur, wenn Zungenlage, Schluckmuster oder Atmung ungünstig sind. In der Ordination Zahnspange Sablania in Wien 1200 berät Dr. Manish Sablania, ob diese Behandlung die Kieferorthopädie ergänzen kann. Sie ersetzt keine Zahnspange. Ob Übungen und herausnehmbare Geräte sinnvoll sind, hängt vom Befund ab – etwa im Milchgebiss, Wechselgebiss oder später in der Retention."
    : leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termine", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const jugendHref = getHref("/zahnspange-fuer-jugendliche", locale);
  const retainerHref = getHref("/kfo-retainer", locale);
  const lang: Lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];

  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${dePath}`;
  const dentistId = `${base}/#dentist`;
  const websiteId = `${base}/#website`;
  const doctorId = `${base}/#doctor`;

  const deFaqs: { q: string; aText: string; a: ReactNode }[] = [
    {
      q: "Was ist eine myofunktionelle Therapie?",
      aText:
        "Myofunktionelle Therapie arbeitet mit herausnehmbaren Geräten und gezielter Muskelarbeit für Zunge, Lippen und Mundmuskulatur. Ziel ist es, ungünstige Funktionsmuster zu verbessern – je nach individuellem Befund.",
      a: "Myofunktionelle Therapie arbeitet mit herausnehmbaren Geräten und gezielter Muskelarbeit für Zunge, Lippen und Mundmuskulatur. Ziel ist es, ungünstige Funktionsmuster zu verbessern – je nach individuellem Befund.",
    },
    {
      q: "Wann ist eine myofunktionelle Therapie sinnvoll?",
      aText:
        "Sie kann sinnvoll sein, wenn ungünstige Gewohnheiten wie Zungenpressen, ein verändertes Schluckmuster oder Mundatmung vorliegen – oft früh im Milch- oder Wechselgebiss, bei Bedarf auch später. Die Entscheidung erfolgt nach Untersuchung. Für jüngere Patientinnen und Patienten siehe auch Zahnspange für Kinder.",
      a: (
        <>
          Sie kann sinnvoll sein, wenn ungünstige Gewohnheiten wie Zungenpressen, ein verändertes Schluckmuster oder
          Mundatmung vorliegen – oft früh im Milch- oder Wechselgebiss, bei Bedarf auch später. Die Entscheidung erfolgt
          nach Untersuchung. Für jüngere Patientinnen und Patienten siehe auch{" "}
          <Link href={kinderHref} className="font-medium text-accent hover:underline">
            Zahnspange für Kinder
          </Link>
          .
        </>
      ),
    },
    {
      q: "Was ist eine myofunktionelle Störung?",
      aText:
        "Darunter versteht man ungünstige Funktionsmuster im Mundbereich – etwa bei Zungenlage, Schlucken oder Mundschluss. Ob eine Störung vorliegt, beurteilt die kieferorthopädische Untersuchung; die Bezeichnung ersetzt keine Diagnose durch andere Fachrichtungen.",
      a: "Darunter versteht man ungünstige Funktionsmuster im Mundbereich – etwa bei Zungenlage, Schlucken oder Mundschluss. Ob eine Störung vorliegt, beurteilt die kieferorthopädische Untersuchung; die Bezeichnung ersetzt keine Diagnose durch andere Fachrichtungen.",
    },
    {
      q: "Welche Rolle spielt die Zungenlage?",
      aText:
        "Die Zunge braucht ausreichend Funktionsraum. Eine ungünstige Zungenlage kann die Zahnstellung und die Kieferentwicklung mitbeeinflussen. In der Therapie wird angestrebt, der Zunge Führung und Platz zu geben.",
      a: "Die Zunge braucht ausreichend Funktionsraum. Eine ungünstige Zungenlage kann die Zahnstellung und die Kieferentwicklung mitbeeinflussen. In der Therapie wird angestrebt, der Zunge Führung und Platz zu geben.",
    },
    {
      q: "Was hat das Schluckmuster mit der Kieferorthopädie zu tun?",
      aText:
        "Beim Schlucken wirken Zunge und Mundmuskulatur auf Zähne und Kiefer. Ein ungünstiges Schluckmuster kann Fehlstellungen mitbeeinflussen. Myofunktionelle Therapie kann die kieferorthopädische Behandlung ergänzen, ersetzt sie aber nicht.",
      a: (
        <>
          Beim Schlucken wirken Zunge und Mundmuskulatur auf Zähne und Kiefer. Ein ungünstiges Schluckmuster kann
          Fehlstellungen mitbeeinflussen. Myofunktionelle Therapie kann die{" "}
          <Link href={kfoHref} className="font-medium text-accent hover:underline">
            kieferorthopädische Behandlung
          </Link>{" "}
          ergänzen, ersetzt sie aber nicht.
        </>
      ),
    },
    {
      q: "Ist myofunktionelle Therapie auch für Erwachsene geeignet?",
      aText:
        "Der Schwerpunkt liegt oft im Wachstumsalter. Die Geräte können jedoch grundsätzlich in jedem Alter eingesetzt werden, etwa in der Retention nach einer Zahnspange – je nach Befund.",
      a: "Der Schwerpunkt liegt oft im Wachstumsalter. Die Geräte können jedoch grundsätzlich in jedem Alter eingesetzt werden, etwa in der Retention nach einer Zahnspange – je nach Befund.",
    },
    {
      q: "Wie läuft eine myofunktionelle Therapie ab?",
      aText:
        "Zuerst erfolgt eine kostenlose Erstberatung, danach Diagnostik mit Röntgen, Fotos und digitalen Scans. Anschließend folgen Planbesprechung, Einsetzen des Geräts, Kontrollen etwa alle 6–8 Wochen und oft eine Retention. Die genaue Dauer hängt vom Einzelfall ab. Details zum Ablauf der Zahnspangenbehandlung.",
      a: (
        <>
          Zuerst erfolgt eine kostenlose Erstberatung, danach Diagnostik mit Röntgen, Fotos und digitalen Scans.
          Anschließend folgen Planbesprechung, Einsetzen des Geräts, Kontrollen etwa alle 6–8 Wochen und oft eine
          Retention. Die genaue Dauer hängt vom Einzelfall ab. Details zum{" "}
          <Link href={ablaufHref} className="font-medium text-accent hover:underline">
            Ablauf der Zahnspangenbehandlung
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {isDe ? (
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: "Myofunktionelle Therapie in Wien",
                headline: "Myofunktionelle Therapie in Wien",
                description:
                  "Myofunktionelle Therapie in Wien: Training von Zunge, Lippen und Mundmuskulatur bei Zahnspange Sablania.",
                inLanguage: "de-AT",
                isPartOf: { "@id": websiteId },
                author: { "@id": doctorId },
                about: { "@id": dentistId },
                mainEntity: { "@id": `${pageUrl}#service` },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: `${base}${MYOFUNKTION_IMAGES[0].src}`,
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
                    name: "Myofunktionelle Therapie",
                    item: pageUrl,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": `${pageUrl}#service`,
                name: "Myofunktionelle Therapie",
                serviceType: "Myofunktionelle Therapie / Kieferorthopädie",
                url: pageUrl,
                provider: { "@id": dentistId },
                areaServed: {
                  "@type": "City",
                  name: "Wien",
                },
                availableLanguage: ["German", "English", "Hindi"],
                description:
                  "Myofunktionelle Therapie für Zunge, Lippen und Mundmuskulatur in der Kieferorthopädie Wien.",
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
        <section className={`${sectionClass} scroll-mt-8`}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.intro.h2}</h2>
            <div className={bodyClass}>
              {c.intro.p.map((para, i) => (
                <p key={`intro-${i}`}>{para}</p>
              ))}
              {isDe ? (
                <p>
                  In der{" "}
                  <Link href={kfoHref} className="font-medium text-accent hover:underline">
                    Kieferorthopädie in Wien
                  </Link>{" "}
                  bei Zahnspange Sablania wird geprüft, ob myofunktionelle Therapie allein oder ergänzend zur{" "}
                  <Link href={kinderHref} className="font-medium text-accent hover:underline">
                    Zahnspange für Kinder
                  </Link>{" "}
                  oder zur{" "}
                  <Link href={jugendHref} className="font-medium text-accent hover:underline">
                    Zahnspange für Jugendliche
                  </Link>{" "}
                  in Frage kommt.
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.timing.h2}</h2>
            <div className={bodyClass}>
              {c.timing.p.map((para, i) => (
                <p key={`timing-${i}`}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.06] px-5 py-6 sm:px-8 sm:py-7">
            <h3 className={`${h3Class} text-primary`}>{c.merke.h3}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-800">{c.merke.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.funktion.h2}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.funktion.p}</p>
          </div>
        </section>

        {isDe ? (
          <section className={sectionClass}>
            <div className={cardClass}>
              <h2 className={h2Class}>Welche Rolle spielen Zunge, Lippen und Mundmuskulatur?</h2>
              <div className={bodyClass}>
                <p>
                  <strong>Myofunktionelle Störung:</strong> Damit sind ungünstige Funktionsmuster im Mundbereich
                  gemeint – etwa beim Schlucken, bei der Zungenlage oder beim Mundschluss. Ob das zutrifft, zeigt die
                  Untersuchung.
                </p>
                <p>
                  <strong>Zungenlage:</strong> Die Zunge braucht Funktionsraum. Eine ungünstige Lage kann Zähne und
                  Kiefer mitbeeinflussen; die Therapie zielt darauf, der Zunge Führung zu geben.
                </p>
                <p>
                  <strong>Schluckmuster:</strong> Beim Schlucken wirken Zunge und Lippen auf die Zahnreihen. Ein
                  ungünstiges Muster kann Fehlstellungen begünstigen – die Therapie kann hier unterstützen, nicht
                  ersetzen.
                </p>
                <p>
                  <strong>Mundmuskulatur:</strong> Lippen- und Gesichtsmuskulatur helfen beim Mundschluss. Ein
                  besserer Schluss kann die Nasenatmung unterstützen; das wird angestrebt, nicht garantiert.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section className={sectionClass}>
          <div className={cardClass}>
            {isDe ? (
              <h2 className={h2Class}>{c.details.h3}</h2>
            ) : (
              <h3 className={h3Class}>{c.details.h3}</h3>
            )}
            <ul className="mt-5 space-y-3">
              {c.details.items.map((item, i) => (
                <li key={`detail-${i}`} className="flex gap-3 text-base leading-relaxed text-gray-800">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h3 className={h3Class}>{c.platte.h3}</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.platte.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <h3 className={`${h3Class} mb-5`}>{c.galleryTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {MYOFUNKTION_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={lang === "de" ? img.altDe : img.altEn}
                    fill
                    className="object-contain object-center p-3 sm:p-4"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-soft sm:p-8">
            <h2 className={h2Class}>{c.wear.h2}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.wear.p}</p>
            <p className="mt-6">
              <Link
                href={terminHref}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 sm:text-base"
              >
                {c.wear.cta}
              </Link>
            </p>
          </div>
        </section>

        <section className={`${sectionClass} pb-4`}>
          <h2 className={`${h2Class} text-center`}>{c.ablauf.h2}</h2>
          {isDe ? (
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-800">
              Die Beratung findet in der Ordination {PRACTICE.name}, {PRACTICE.streetAddress}, {PRACTICE.postalCode}{" "}
              {PRACTICE.addressLocality}, statt. {DOCTOR.name}, {DOCTOR.jobTitleDe}.
            </p>
          ) : null}
          <ol className="mx-auto mt-8 max-w-3xl space-y-4">
            {c.ablauf.steps.map((step, i) => {
              const isRet = isDe && step.startsWith("Retention");
              return (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base leading-relaxed text-gray-800">
                    {isRet ? (
                      <>
                        Retention – Stabilisierung des Behandlungserfolgs.{" "}
                        <Link href={retainerHref} className="font-medium text-accent hover:underline">
                          Retainer nach der Zahnkorrektur
                        </Link>
                      </>
                    ) : (
                      step
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center">
            <Link href={ablaufHref} className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent">
              {c.ablauf.link}
            </Link>
          </p>
        </section>

        {isDe ? (
          <section className={`${sectionClass} pb-4`}>
            <h2 className={h2Class}>Häufige Fragen zur myofunktionellen Therapie</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">
              Kurze Antworten zu Zungenlage, Schluckmuster und Ablauf – ohne pauschale Erfolgs- oder Preisversprechen.
            </p>
            <div className="mt-6 space-y-3">
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
