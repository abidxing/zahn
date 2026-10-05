import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroSpecialtiesSection from "@/components/HeroSpecialtiesSection";
import ServicesSection from "@/components/ServicesSection";
import BracesCategoriesSection from "@/components/BracesCategoriesSection";
import ServicesSimple from "@/components/ServicesSimple";
import DigitalPracticeSection from "@/components/DigitalPracticeSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import GoogleRating from "@/components/GoogleRating";
import ContactSection from "@/components/ContactSection";
import HomeInternalLinks from "@/components/HomeInternalLinks";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Kieferorthopädie Wien 1200 | Dr. Manish Sablania",
  description:
    "Dr. Manish Sablania ist Fachzahnarzt für Kieferorthopädie und Zahnarzt in 1200 Wien. Zahnspangen, Aligner und Behandlungen für Kinder, Jugendliche und Erwachsene.",
  dePath: "/",
  locale,
});

export default function HomePage() {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <HeroSpecialtiesSection locale={locale} dict={dict} />
      <ServicesSimple locale={locale} dict={dict} />
      <DigitalPracticeSection locale={locale} dict={dict} />
      <Services locale={locale} />
      <WhyChooseUs dict={dict} />
      <BracesCategoriesSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <HomeInternalLinks locale={locale} />
      <CTASection locale={locale} dict={dict} />
      <GoogleRating dict={dict} locale={locale} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
