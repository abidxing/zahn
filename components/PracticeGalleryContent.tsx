"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { PRACTICE_GALLERY_IMAGES } from "@/lib/practiceGallery";

type PracticeGalleryContentProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function PracticeGalleryContent({ locale, dict }: PracticeGalleryContentProps) {
  const g = dict.practiceGallery;
  const isDe = locale === "de";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + PRACTICE_GALLERY_IMAGES.length) % PRACTICE_GALLERY_IMAGES.length));
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % PRACTICE_GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  const active = activeIndex !== null ? PRACTICE_GALLERY_IMAGES[activeIndex] : null;

  return (
    <div className="mt-6 space-y-8">
      <p className="max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">{g.intro}</p>

      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[140px] lg:gap-5">
        {PRACTICE_GALLERY_IMAGES.map((image, index) => {
          const alt = isDe ? image.altDe : image.altEn;
          const caption = isDe ? image.captionDe : image.captionEn;
          const spanClass = image.featured
            ? "col-span-2 row-span-2 lg:col-span-4 lg:row-span-2"
            : "col-span-1 row-span-1 lg:col-span-4 lg:row-span-2";

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative min-h-[180px] overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm ring-1 ring-gray-200/80 transition hover:shadow-lg hover:ring-[#0f2e5c]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2e5c] ${spanClass}`}
            >
              <Image
                src={image.src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e5c]/75 via-[#0f2e5c]/10 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <span className="inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:text-xs">
                  {caption}
                </span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-[#0f2e5c] opacity-0 shadow transition group-hover:opacity-100">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14zM11 8v8M7 12h8" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-sm text-gray-500">{g.note}</p>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={isDe ? active.altDe : active.altEn}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label={g.closeLabel}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-4 sm:block"
            aria-label={g.prevLabel}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-4 sm:block"
            aria-label={g.nextLabel}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] max-h-[85vh] w-full overflow-hidden rounded-2xl bg-black sm:aspect-[4/5]">
              <Image
                src={active.src}
                alt={isDe ? active.altDe : active.altEn}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/90 sm:text-base">
              {isDe ? active.altDe : active.altEn}
            </p>
            <p className="mt-1 text-center text-xs text-white/60">
              {activeIndex + 1} / {PRACTICE_GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
