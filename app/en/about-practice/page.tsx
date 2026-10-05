import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import PracticeGalleryContent from "@/components/PracticeGalleryContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Our Practice | Dr. Manish Sablania",
  description:
    "Modern orthodontics practice in Vienna 1200: photos of the waiting area, treatment rooms and atmosphere at Dr Manish Sablania’s practice.",
  alternates: {
    canonical: `${SITE_URL}/en/about-practice`,
    languages: { de: `${SITE_URL}/ueber-uns`, en: `${SITE_URL}/en/about-practice` },
  },
};

const BULLETS = [
  "Individual care",
  "Modern technology",
  "Years of experience",
  "Pleasant atmosphere",
];

export default function AboutPracticePage() {
  const dict = getDictionary(locale);
  return (
    <PageContent
      title="Our Practice"
      lead="Modern orthodontics in Vienna"
      locale={locale}
      dict={dict}
      skipProse
    >
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Philosophy</h2>
        <p className="text-gray-600">
          Our practice is centred on patient-focused care. We take time to understand your needs
          and work with you to create a treatment plan that fits your goals and lifestyle. For us,
          modern orthodontics combines aesthetics, function and your comfort.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Modern Technology</h2>
        <p className="text-gray-600">
          We use digital diagnostics, precise 3D planning and up-to-date treatment methods – from
          invisible aligners to fixed braces. This allows us to run treatments efficiently and
          comfortably and to show you a clear picture of the planned result.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Why our practice?</h2>
        <ul className="space-y-2 text-gray-600">
          {BULLETS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0f2e5c]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Practice images</h2>
        <PracticeGalleryContent locale={locale} dict={dict} />
      </section>
    </PageContent>
  );
}
