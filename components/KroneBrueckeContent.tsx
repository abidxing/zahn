import type { ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

/** Hero video — same clip as legacy site (YouTube). */
const YOUTUBE_EMBED_ID = "V1Sf9c1n53c";

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`scroll-mt-28 ${className}`}>
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

export default function KroneBrueckeContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const dePath = "/krone-bruecke";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Krone & Brücke";
  const lead = leads[dePath];
  const isDe = locale === "de";
  const terminHref = getHref("/online-termine", locale);
  const implantHref = getHref("/implantat-wien", locale);

  const de = {
    kicker: "Krone & Brücke Wien",
    tagline: "Zahnkronenbrücke: Mit Präzision und Perfektion Ihr Lächeln wiederherstellen.",
    heroIntro:
      "Es liegt uns am Herzen, Ihnen zu einem makellosen Lächeln zu verhelfen. Wenn Sie mit einem oder mehreren fehlenden Zähnen zu kämpfen haben, könnten unsere Lösungen für Zahnkronen und Brücken genau das Richtige für Sie sein.",
    was: {
      h: "Was sind Zahnkronenbrücken?",
      p: "Zahnkronenbrücken, oft auch Zahnbrücken genannt, sind individuell angefertigte Restaurationen, die fehlende Zähne ersetzen sollen. Diese Brücken bestehen aus einem oder mehreren künstlichen Zähnen (Pontics), die zwischen Zahnkronen verankert werden und einen natürlich aussehenden und funktionellen Ersatz für Ihre fehlenden Zähne bieten.",
    },
    warum: {
      h: "Warum Zahnkronenbrücken wählen?",
      p: (
        <>
          Entdecken Sie die Vorteile von Zahnkronenbrücken, einschließlich wiederhergestelltem Aussehen, verbesserter Mundgesundheit, verbesserter{" "}
          <strong>Kauffähigkeit</strong> und gesteigertem Selbstvertrauen. Wir besprechen auch, wie sie im Vergleich zu anderen Zahnersatzoptionen wie{" "}
          <Link href={implantHref} className="font-medium text-accent underline hover:text-primary">
            Implantaten
          </Link>{" "}
          und Zahnersatz abschneiden.
        </>
      ),
    },
    beratung: {
      h: "Beratung und Bewertung",
      p: "Erfahren Sie mehr über die Erstberatung, bei der unser erfahrenes Zahnteam Ihre Mundgesundheit beurteilt, Ihre Ziele bespricht und einen personalisierten Behandlungsplan erstellt, der auf Ihre individuellen Bedürfnisse zugeschnitten ist.",
    },
    entwurf: {
      h: "Brückenentwurf und -fertigung",
      p: "Tauchen Sie ein in den Prozess der Gestaltung und Herstellung Ihrer individuellen Zahnkronenbrücke. Wir erklären die verwendeten Materialien und die erforderliche Präzision, um eine nahtlose Passform und ein natürliches Aussehen zu gewährleisten.",
    },
    platzierung: {
      h: "Brückenplatzierung",
      p: "Erfahren Sie, was Sie während der Brückenplatzierung erwartet, einschließlich Anästhesieoptionen, dem Anpassungsprozess und Anweisungen zur Pflege nach der Platzierung.",
    },
    erholung: {
      h: "Erholung und Anpassung",
      p: "Entdecken Sie Tipps für eine reibungslose Erholungsphase nach dem Erhalt Ihrer Zahnkronenbrücke, einschließlich der Bewältigung anfänglicher Beschwerden und der Anpassung an Ihre neue Restauration.",
    },
    wartung: {
      h: "Langfristige Wartung",
      p: "Erfahren Sie, wie Sie Ihre Zahnkronenbrücke pflegen, um deren Haltbarkeit und Langlebigkeit zu gewährleisten. Wir geben Einblicke in Mundhygienepraktiken, Ernährungsempfehlungen und regelmäßige Kontrolluntersuchungen.",
    },
    natuerlich: {
      h: "Sehen Zahnkronenbrücken natürlich aus?",
      p: "Wir gehen auf häufige Bedenken hinsichtlich des Aussehens von Zahnkronenbrücken und ihrer nahtlosen Verschmelzung mit Ihren natürlichen Zähnen ein. Unser Ziel ist es, Ihnen dabei zu helfen, Ihr Lächeln mit Präzision und Perfektion zurückzugewinnen. Zahnkronenbrücken bieten eine zuverlässige und ästhetisch ansprechende Lösung für fehlende Zähne, und unser erfahrenes Team steht Ihnen während des gesamten Prozesses zur Seite. Wenn Sie bereit sind, den ersten Schritt zur Wiederherstellung Ihres Lächelns zu tun, kontaktieren Sie uns noch heute für eine Beratung. Hier beginnt Ihre Reise zu einem wunderschön wiederhergestellten Lächeln.",
    },
    arztH: "Dr. med. dent. Manish Sablania M.Sc. Orthodontics",
    arztSub: "Dr. med. dent. Manish Sablania BDS M.Sc. – Kieferorthopädie-Zahnarzt Wien 1200",
    arztLi1:
      "Qualifizierter Wahlkieferorthopäde für „Krankenkasse-Gratis Zahnspange“, spezialisiert in Kieferorthopädie und Orthodontie.",
    arztLi2:
      "Über 28 Jahre Erfahrung und mehr als 8.000 kieferorthopädische Behandlungen und Zahnspangenfälle – mit Fokus auf das Wohlbefinden der Patientinnen und Patienten.",
    arztCta: "Termin zur kostenlosen Erstberatung",
    videoLabel: "Praxisvideo",
  };

  const en = {
    kicker: "Crown & bridge Vienna",
    tagline: "Restore your smile with precision and care.",
    heroIntro:
      "We want you to enjoy a confident smile. If you are missing one or more teeth, crown and bridge work may be the right solution for you.",
    was: {
      h: "What are crown-supported bridges?",
      p: "Crown bridges—often simply called bridges—are custom restorations that replace missing teeth. They consist of one or more artificial teeth (pontics) anchored by crowns on neighbouring teeth, offering a natural-looking, functional replacement.",
    },
    warum: {
      h: "Why choose a crown bridge?",
      p: (
        <>
          Benefits include restored appearance, better oral health, improved chewing function and confidence. We also explain how bridges compare with options such as{" "}
          <Link href={implantHref} className="font-medium text-accent underline hover:text-primary">
            implants
          </Link>{" "}
          and removable dentures.
        </>
      ),
    },
    beratung: {
      h: "Consultation and assessment",
      p: "At your first visit our team reviews your oral health, discusses your goals and prepares a personalised treatment plan tailored to your needs.",
    },
    entwurf: {
      h: "Design and fabrication",
      p: "We walk you through designing and manufacturing your individual bridge: materials, precision and how we achieve a comfortable fit and natural look.",
    },
    platzierung: {
      h: "Placement appointment",
      p: "Learn what to expect during placement—including anaesthesia options, fitting steps and instructions for care immediately afterwards.",
    },
    erholung: {
      h: "Recovery and adaptation",
      p: "Practical tips for smooth healing after your bridge is fitted, managing initial sensitivity and getting used to your new restoration.",
    },
    wartung: {
      h: "Long-term maintenance",
      p: "How to care for your bridge for lasting results: hygiene habits, diet and regular check-ups.",
    },
    natuerlich: {
      h: "Do crown bridges look natural?",
      p: "We address common concerns about appearance and blending with your own teeth. Our aim is to help you regain your smile with precision. When you are ready to take the first step, contact us for a consultation—your journey to a restored smile starts here.",
    },
    arztH: "Dr Manish Sablania M.Sc. Orthodontics",
    arztSub: "Specialist orthodontist Vienna 1200",
    arztLi1: "Qualified elective orthodontist for Austria’s publicly funded braces programme and comprehensive orthodontic care.",
    arztLi2: "More than 28 years of experience and over 8,000 orthodontic treatments and braces cases.",
    arztCta: "Book a free initial consultation",
    videoLabel: "Practice video",
  };

  const c = isDe ? de : en;

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero: video + copy — single page H1 comes from PageContent header */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted text-white shadow-soft-lg">
          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light/95">{c.kicker}</p>
              <p className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">{c.tagline}</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">{c.heroIntro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light"
                >
                  {c.arztCta}
                </a>
                <Link
                  href={terminHref}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {isDe ? "Termin online buchen" : "Book online"}
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-black shadow-soft-lg lg:max-w-none">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&controls=0`}
                  title={c.videoLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-14 max-w-3xl space-y-12 sm:mt-20">
          <Section title={c.was.h}>
            <p>{c.was.p}</p>
          </Section>
          <Section title={c.warum.h} className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-6 sm:px-8">
            <p>{c.warum.p}</p>
          </Section>
          <Section title={c.beratung.h}>
            <p>{c.beratung.p}</p>
          </Section>
          <Section title={c.entwurf.h}>
            <p>{c.entwurf.p}</p>
          </Section>
          <Section title={c.platzierung.h}>
            <p>{c.platzierung.p}</p>
          </Section>
          <Section title={c.erholung.h}>
            <p>{c.erholung.p}</p>
          </Section>
          <Section title={c.wartung.h}>
            <p>{c.wartung.p}</p>
          </Section>
          <Section title={c.natuerlich.h} className="rounded-2xl border border-primary/15 bg-primary/[0.04] px-5 py-6 sm:px-8">
            <p>{c.natuerlich.p}</p>
          </Section>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-soft-lg sm:mt-20">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.arztH}</h2>
          <p className="mt-2 text-gray-600">{c.arztSub}</p>
          <ul className="mt-5 space-y-3 text-gray-800">
            <li className="flex gap-2">
              <span className="text-accent">●</span>
              <span>{c.arztLi1}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">●</span>
              <span>{c.arztLi2}</span>
            </li>
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-muted"
          >
            {c.arztCta}
          </a>
        </section>
      </div>
    </PageContent>
  );
}
