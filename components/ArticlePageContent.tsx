import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";
import { ARTICLES_DE } from "@/lib/articles";

const BODY = {
  de: {
    introTitle: "Praxis & Wissen",
    introText:
      "Hier finden Sie Informationen und Einblicke rund um Kieferorthopädie, Zahnspangen und Krankenkasse in Wien.",
    listTitle: "Aktuelle Artikel",
    readMore: "Artikel lesen",
    topicsTitle: "Weitere Themen",
    topics: [
      "Behandlungsoptionen von klassischer Zahnspange bis Aligner",
      "Ablauf einer kieferorthopädischen Therapie",
      "Tipps zu Mundhygiene und Retention",
    ],
    ctaHint:
      "Persönliche Fragen? Vereinbaren Sie einen Termin in unserer Praxis – wir beraten Sie individuell.",
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online terminieren",
    ctaServices: "Leistungen",
  },
  en: {
    introTitle: "Practice & knowledge",
    introText:
      "Here you will find information and insights on orthodontics, braces and aesthetic dentistry in Vienna. German articles are listed below; English translations may be added over time.",
    listTitle: "Articles",
    readMore: "Read article",
    topicsTitle: "Topics",
    topics: [
      "Treatment options from fixed braces to aligners",
      "What to expect during orthodontic treatment",
      "Oral hygiene and retention tips",
    ],
    ctaHint:
      "Have questions? Book an appointment at our practice – we will advise you individually.",
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaServices: "Services",
  },
} as const;

export default function ArticlePageContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/artikel";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Artikel";
  const lead = leads[dePath];
  const lang = locale === "de" ? "de" : "en";
  const b = BODY[lang];
  const terminHref = getHref("/online-termine", locale);
  const servicesHref = getHref("/leistungen", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] to-gray-50/80 px-6 py-8 shadow-soft sm:px-10 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{b.introTitle}</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-800">{b.introText}</p>
        </div>

        <section className="mx-auto mt-12 max-w-5xl sm:mt-14">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{b.listTitle}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-1">
            {ARTICLES_DE.map((article) => (
              <li key={article.slug}>
                <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg sm:grid sm:grid-cols-[240px_1fr]">
                  <div className="relative aspect-[16/10] w-full bg-gray-50 sm:aspect-auto sm:min-h-[160px]">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <h3 className="text-lg font-bold text-primary sm:text-xl">
                      <Link href={article.slug} className="hover:text-accent">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
                      {article.excerpt}
                    </p>
                    <p className="mt-4">
                      <Link
                        href={article.slug}
                        className="inline-flex font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-primary"
                      >
                        {b.readMore} →
                      </Link>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          {lang === "en" ? (
            <p className="mt-4 text-sm text-gray-600">
              Note: This article is currently available in German.
            </p>
          ) : null}
        </section>

        <section className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{b.topicsTitle}</h2>
          <ul className="mt-5 list-none space-y-3">
            {b.topics.map((item) => (
              <li key={item} className="flex gap-3 text-gray-800">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-14 sm:p-8">
          <p className="leading-relaxed text-gray-800">{b.ctaHint}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
            >
              {b.ctaBook}
            </a>
            <Link
              href={terminHref}
              className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
            >
              {b.ctaOnline}
            </Link>
            <Link
              href={servicesHref}
              className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              {b.ctaServices}
            </Link>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
