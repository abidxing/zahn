import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import Link from "next/link";
import { getHref } from "@/lib/paths";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function DentistViennaContent({ locale, dict }: Props) {
  const isDe = locale === "de";

  const title = isDe
    ? "Zahnarzt in Wien 1200 – Allgemeine Zahnheilkunde & Kieferorthopädie"
    : "Dentist in Vienna 1200 – General Dentistry & Orthodontics";

  const lead = isDe
    ? "Willkommen in unserer Zahnarztpraxis im 20. Bezirk in Wien. Als erfahrener Zahnarzt und Fachzahnarzt für Kieferorthopädie kümmern wir uns mit moderner Technik um Ihre Zähne – von Prophylaxe und Füllungen bis zu Implantaten und Zahnspangen."
    : "Welcome to our dental practice in Vienna’s 20th district. As an experienced dentist and specialist in orthodontics, we take care of your teeth with modern technology – from preventive care and fillings to implants and braces.";

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {/* Intro section */}
      <h2>{isDe ? "Qualität in 1200 Wien – Ihre erste Wahl für gesunde Zähne" : "Quality in 1200 Vienna – your first choice for healthy teeth"}</h2>
      <p>
        {isDe
          ? "In unserer Zahnarztpraxis im 20. Bezirk steht Ihre Zahngesundheit im Mittelpunkt. Als Zahnarzt und Kieferorthopäde in 1200 Wien bietet Dr. Manish Sablania Ihnen ein breites Spektrum an allgemeiner, ästhetischer Zahnheilkunde und Kieferorthopädie. Versicherte der ÖGK, SVS, BVAEB und KFA (Wien) sind in der Ordination willkommen."
          : "At our dental practice in Vienna’s 20th district, your oral health is our priority. As a dentist and orthodontist in 1200 Vienna, Dr. Manish Sablania offers a wide range of general, aesthetic dentistry and orthodontic services. Patients insured with ÖGK, SVS, BVAEB and KFA (Vienna) are welcome at the practice."}
      </p>
      <p>
        {isDe
          ? "Unser Ziel ist es, Ihnen eine angenehme, stressfreie Behandlung zu ermöglichen – mit viel Einfühlungsvermögen, moderner Ausstattung und klarer Beratung."
          : "Our goal is to make your treatment as pleasant and stress‑free as possible – with empathy, modern equipment and clear, honest advice."}
      </p>

      {/* Services grid */}
      <h2>{isDe ? "Leistungsspektrum unserer Praxis" : "Range of services in our practice"}</h2>
      <p>
        {isDe
          ? "Als Zahnärzte in 1200 Wien decken wir alle Bereiche der modernen Zahnmedizin ab – von der Vorsorge über ästhetische Behandlungen bis hin zur Kieferorthopädie und Implantologie."
          : "As dentists in 1200 Vienna we cover all areas of modern dentistry – from preventive care and aesthetic treatments to orthodontics and implantology."}
      </p>

      <ul>
        <li>
          <strong>{isDe ? "Professionelle Mundhygiene & Kontrolle" : "Professional oral hygiene & check‑ups"}</strong>{" "}
          {isDe
            ? "Entfernung von Belägen und Zahnstein, Schutz vor Karies und Parodontitis sowie Beratung zur richtigen Zahnpflege."
            : "Removal of plaque and tartar, protection against caries and gum disease, and advice on proper home care."}
        </li>
        <li>
          <strong>{isDe ? "Ästhetische Zahnfüllungen" : "Aesthetic dental fillings"}</strong>{" "}
          {isDe
            ? "Zahnfarbene Kompositfüllungen, die sich harmonisch in Ihre Zahnreihe einfügen und Defekte unauffällig versorgen."
            : "Tooth‑coloured composite fillings that blend in with your natural teeth and restore defects discreetly."}
        </li>
        <li>
          <strong>{isDe ? "Zahnaufhellung (Bleaching)" : "Teeth whitening"}</strong>{" "}
          {isDe
            ? "Schonende Aufhellung verfärbter Zähne für ein strahlendes Lächeln."
            : "Gentle whitening of discoloured teeth for a brighter, more radiant smile."}
        </li>
        <li>
          <strong>{isDe ? "Invisalign & unsichtbare Zahnspangen" : "Invisalign & invisible braces"}</strong>{" "}
          {isDe
            ? "Moderne, nahezu unsichtbare Schienentherapie oder feste Zahnspangen für Kinder, Jugendliche und Erwachsene."
            : "Modern, almost invisible aligner therapy or fixed braces for children, teenagers and adults."}
        </li>
        <li>
          <strong>{isDe ? "Implantate & Zahnersatz" : "Dental implants & prosthetics"}</strong>{" "}
          {isDe
            ? "Festsitzender Zahnersatz mit Implantaten sowie Kronen und Brücken für Funktion und Ästhetik."
            : "Fixed tooth replacement with implants as well as crowns and bridges for function and aesthetics."}
        </li>
        <li>
          <strong>{isDe ? "Sportschutz-Mundschienen" : "Sports mouthguards"}</strong>{" "}
          {isDe
            ? "Individuell angepasste Sportschutzschienen zum Schutz von Zähnen und Kiefer bei Sportarten mit Körperkontakt."
            : "Custom‑made sports mouthguards to protect teeth and jaws during contact sports."}
        </li>
      </ul>

      {/* Highlight cards like on reference page */}
      <h2>{isDe ? "Ausgewählte Leistungen im Überblick" : "Selected services at a glance"}</h2>
      <p>
        {isDe
          ? "Nachfolgend finden Sie einige unserer wichtigsten Leistungen mit kurzer Erklärung. Über die Detailseiten erhalten Sie noch mehr Informationen."
          : "Below you will find some of our key services with a short explanation. You can access even more information on the respective detail pages."}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          locale={locale}
          title={isDe ? "Zahnspangen & Kieferorthopädie" : "Braces & Orthodontics"}
          description={
            isDe
              ? "Korrektur von Zahn- und Kieferfehlstellungen mit festen Zahnspangen, Alignern und lingualer Technik."
              : "Correction of dental and jaw misalignments with fixed braces, aligners and lingual appliances."
          }
          href={getHref("/kieferorthopaedie", locale)}
        />
        <ServiceCard
          locale={locale}
          title={isDe ? "Professionelle Mundhygiene" : "Professional oral hygiene"}
          description={
            isDe
              ? "Gründliche Zahnreinigung, Entfernung von Belägen und Politur für ein spürbar sauberes Mundgefühl."
              : "Thorough cleaning, removal of deposits and polishing for a noticeably clean, fresh mouth."
          }
          href={getHref("/mundhygiene-wien", locale)}
        />
        <ServiceCard
          locale={locale}
          title={isDe ? "Zahnbleaching" : "Teeth whitening"}
          description={
            isDe
              ? "Aufhellung verfärbter Zähne – schnell, schonend und mit sichtbaren Ergebnissen."
              : "Brightening of discoloured teeth – quick, gentle and with visible results."
          }
          href={getHref("/zahnbleaching", locale)}
        />
        <ServiceCard
          locale={locale}
          title={isDe ? "Ästhetische Füllungen" : "Aesthetic fillings"}
          description={
            isDe
              ? "Moderne Kompositfüllungen, die sich farblich an Ihre natürlichen Zähne anpassen."
              : "Modern composite fillings that match the colour of your natural teeth."
          }
          href={getHref("/komposit-zahnfuellung", locale)}
        />
        <ServiceCard
          locale={locale}
          title={isDe ? "Implantate & Kronen/Brücken" : "Implants & crowns/bridges"}
          description={
            isDe
              ? "Stabiler, ästhetischer Zahnersatz mit Implantaten, Kronen und Brücken."
              : "Stable, aesthetic tooth replacement with implants, crowns and bridges."
          }
          href={getHref("/implantat-wien", locale)}
        />
        <ServiceCard
          locale={locale}
          title={isDe ? "Sportschutz" : "Sports protection"}
          description={
            isDe
              ? "Individuelle Sportschutz-Schienen für Kinder und Erwachsene."
              : "Individual sports mouthguards for children and adults."
          }
          href={getHref("/sportschutz-mouthguards", locale)}
        />
      </div>

      {/* Technology & location section */}
      <h2 className="mt-10">
        {isDe
          ? "Moderne Technik & zentrale Lage in 1200 Wien"
          : "State‑of‑the‑art technology & convenient location in 1200 Vienna"}
      </h2>
      <p>
        {isDe
          ? "Wir arbeiten mit digitalen Röntgenaufnahmen, 3D‑Scans und computergestützter Behandlungsplanung. So können wir auch komplexe Behandlungen präzise, schonend und effizient durchführen."
          : "We work with digital X‑rays, 3D scanning and computer‑assisted treatment planning. This allows us to carry out even complex treatments precisely, gently and efficiently."}
      </p>
      <p>
        {isDe
          ? "Unsere Praxis in 1200 Wien liegt nahe der Bezirke 1210, 1020, 1190 und 1220 sowie Klosterneuburg und ist einfach mit öffentlichen Verkehrsmitteln oder dem Auto erreichbar."
          : "Our practice in 1200 Vienna is close to districts 1210, 1020, 1190 and 1220 as well as Klosterneuburg and can be reached easily by public transport or car."}
      </p>

      {/* Call to action */}
      <h2 className="mt-10">
        {isDe ? "Termin beim Zahnarzt in 1200 Wien vereinbaren" : "Book an appointment with the dentist in 1200 Vienna"}
      </h2>
      <p>
        {isDe
          ? "Wenn Sie einen zuverlässigen Zahnarzt und Kieferorthopäden in 1200 Wien suchen, sind Sie bei uns richtig. Vereinbaren Sie einen Termin – wir freuen uns darauf, Sie kennenzulernen."
          : "If you are looking for a reliable dentist and orthodontist in 1200 Vienna, you have come to the right place. Book an appointment – we look forward to meeting you."}
      </p>
      <p>
        <Link href={getHref("/online-termine", locale)} className="text-accent font-semibold hover:underline">
          {isDe ? "Online Termin vereinbaren" : "Book an appointment online"}
        </Link>
      </p>
    </PageContent>
  );
}

function ServiceCard({
  locale,
  title,
  description,
  href,
}: {
  locale: Locale;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-base font-semibold text-[#0f2e5c] group-hover:text-[#163d78]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <span className="mt-3 inline-flex items-center text-sm font-semibold text-[#0f2e5c] group-hover:text-[#163d78]">
        {locale === "de" ? "Mehr lesen" : "Read more"}
        <svg
          className="ml-1 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </span>
    </Link>
  );
}

