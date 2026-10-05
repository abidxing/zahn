import type { Metadata } from "next";
import Image from "next/image";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "de" as const;

const DOCTOR_IMAGE =
  "/Specialist%20dentist%20in%20orthodontics%20Dr%20med%20dent%20Manish%20Sablania%20BDS%20MSc%20Orthodontic%20dentist%20Vienna%201200.png";

export const metadata: Metadata = {
  title: "Unser Team | Dr. Manish Sablania",
  description: "Das Team der Praxis Zahnspange Sablania in Wien: erfahrene Kieferorthopäden und freundliches Praxisteam.",
  alternates: {
    canonical: `${SITE_URL}/unser-team`,
    languages: { de: `${SITE_URL}/unser-team`, en: `${SITE_URL}/en/team` },
  },
};

const DOCTOR = {
  title: "Fachzahnarzt für Kieferorthopädie Dr. med. dent. Manish Sablania BDS M.Sc. Kieferorthopäde Wien 1200",
  line2: "Qualifizierter Wahlkieferorthopäde für die Krankenkasse-Gratis-Zahnspange, spezialisiert auf Kieferorthopädie.",
  bio: "Über 28 Jahre Erfahrung und mehr als 8.000 kieferorthopädische Behandlungen und Zahnspangenfälle. Das Wohl der Patientinnen und Patienten steht im Mittelpunkt.",
};

const INTRO_DE = [
  "Willkommen in unserem außergewöhnlichen zahnärztlichen Team, in dem Erfahrung auf Leidenschaft für eine erstklassige Patientenversorgung trifft. Unser engagiertes Team von Zahnärzten verkörpert eine Fülle von Fachwissen und das Engagement, unseren Patienten mit unerschütterlicher Geduld und Höflichkeit zu dienen.",
  "In der Welt der Zahnmedizin ist Erfahrung von unschätzbarem Wert, und unser Team verfügt über eine Fülle davon. Mit jahrelangem kollektivem Wissen sind wir auf eine Vielzahl von zahnmedizinischen Anliegen gestoßen und haben diese erfolgreich gelöst. Von Routineuntersuchungen bis hin zu komplexen Eingriffen hat unser Team seine Fähigkeiten verfeinert, um sicherzustellen, dass Sie die bestmögliche Versorgung erhalten.",
  "Aber es ist nicht nur unsere klinische Kompetenz, die uns auszeichnet – es ist unser unerschütterliches Engagement, jeden Patienten mit größter Geduld und Höflichkeit zu behandeln. Wir verstehen, dass der Besuch beim Zahnarzt manchmal eine Quelle der Angst sein kann, und wir sind bestrebt, eine komfortable und beruhigende Umgebung für alle unsere Patienten zu schaffen. Unser Team ist nicht nur hier, um Zahnprobleme zu diagnostizieren und zu behandeln, sondern auch, um Ihnen zuzuhören, Sie aufzuklären und Sie auf Ihrem Weg zur Mundgesundheit zu begleiten. Ihren Anliegen und Fragen begegnet man stets mit dem Respekt und Verständnis, das sie verdienen.",
  "In unserer Zahnarztpraxis verbessern wir nicht nur das Lächeln, sondern bauen wir Beziehungen zu unseren Patienten auf. Sie können sich darauf verlassen, dass unser Team Ihnen die persönliche Betreuung bietet, die Sie verdienen, und Sie gleichzeitig mit der Geduld und Höflichkeit behandelt, die Sie von einem wirklich außergewöhnlichen zahnärztlichen Erlebnis erwarten sollten. Willkommen in einem zahnärztlichen Team, das nicht nur Ihre Bedürfnisse versteht, sondern auch Ihren Komfort und Ihr Wohlbefinden in den Vordergrund stellt. Ihr Lächeln ist in kompetenten Händen, und wir können es kaum erwarten, uns mit Ihnen auf diese zahnärztliche Reise zu begeben.",
];

export default function UnserTeamPage() {
  const dict = getDictionary(locale);
  return (
    <PageContent title="Unser Team" lead="" locale={locale} dict={dict}>
      <section className="mt-8 space-y-6">
        {INTRO_DE.map((paragraph, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>
      <article className="mt-12 flex flex-col sm:flex-row gap-8 max-w-4xl rounded-xl shadow-sm bg-white p-6 border border-gray-100">
        <div className="relative w-full sm:w-80 aspect-[3/4] shrink-0 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={DOCTOR_IMAGE}
            alt={DOCTOR.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px"
            priority
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#1e293b] leading-snug">
            {DOCTOR.title}
          </h3>
          <p className="mt-3 text-sm font-medium text-[#0f2e5c]">
            {DOCTOR.line2}
          </p>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            {DOCTOR.bio}
          </p>
        </div>
      </article>
    </PageContent>
  );
}
