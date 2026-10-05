import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "en" as const;

const DOCTOR_IMAGE =
  "/Specialist%20dentist%20in%20orthodontics%20Dr%20med%20dent%20Manish%20Sablania%20BDS%20MSc%20Orthodontic%20dentist%20Vienna%201200.png";

const DOCTOR = {
  title: "Specialist orthodontist Dr. med. dent. Manish Sablania, BDS, M.Sc. – Orthodontist Vienna 1200",
  line2: "Qualified elective orthodontist for Austria’s publicly funded braces programme, specialised in orthodontics.",
  bio: "More than 28 years of experience and over 8,000 orthodontic treatments and braces cases, with a strong focus on patient wellbeing.",
};

export const metadata: Metadata = {
  title: "Our Team",
  description: "The team at Zahnspange Sablania in Vienna.",
  alternates: { canonical: `${SITE_URL}/en/team`, languages: { de: `${SITE_URL}/unser-team`, en: `${SITE_URL}/en/team` } },
};

const INTRO_EN = [
  "Welcome to our exceptional dental team, where experience meets a passion for first-class patient care. Our dedicated team of dentists embodies a wealth of expertise and a commitment to serving our patients with unwavering patience and courtesy.",
  "In the world of dentistry, experience is invaluable, and our team has an abundance of it. With years of collective knowledge, we have encountered and successfully addressed a wide range of dental concerns. From routine check-ups to complex procedures, our team has refined its skills to ensure you receive the best possible care.",
  "But it is not only our clinical competence that sets us apart – it is our unwavering commitment to treating every patient with the greatest patience and courtesy. We understand that a visit to the dentist can sometimes be a source of anxiety, and we strive to create a comfortable and reassuring environment for all our patients. Our team is not only here to diagnose and treat dental issues, but also to listen to you, inform you, and support you on your journey to oral health. Your concerns and questions are always met with the respect and understanding they deserve.",
  "In our dental practice we do not only improve smiles – we build relationships with our patients. You can rely on our team to provide you with the personal care you deserve, while treating you with the patience and courtesy you should expect from a truly exceptional dental experience. Welcome to a dental team that not only understands your needs but also puts your comfort and well-being first. Your smile is in capable hands, and we look forward to embarking on this dental journey with you.",
];

export default function TeamPage() {
  const dict = getDictionary(locale);
  const t = dict.team;
  return (
    <PageContent title={t.title} lead={t.lead} locale={locale} dict={dict}>
      <section className="mt-8 space-y-6">
        {INTRO_EN.map((paragraph, i) => (
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
      <p className="mt-10 text-gray-600">
        {t.moreAbout}{" "}
        <Link href={getHref("/ueber-mich", locale)} className="text-accent hover:underline">{t.aboutMe}</Link>{t.page} {t.bookAt}{" "}
        <a href="http://zahnspange-sablania.termin365.at/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.onlineTermin}</a>{t.pageEnd}
      </p>
    </PageContent>
  );
}
