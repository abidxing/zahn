"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalContactBar from "@/components/GlobalContactBar";
import Breadcrumb from "@/components/Breadcrumb";
import OnlineReceptionWidget from "@/components/OnlineReceptionWidget";
import AblaufHeroSlider from "@/components/AblaufHeroSlider";
import { getLocaleFromPathname } from "@/lib/paths";
import { dictionaries } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function LocaleShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale: Locale = getLocaleFromPathname(pathname ?? "");
  const dict = dictionaries[locale] ?? dictionaries.de;
  const isAblaufPage =
    pathname === "/ablauf-zahnspange-kieferorthopaedie" ||
    pathname === "/en/treatment-process";

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "de";
  }, [locale]);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <div className="min-w-0 w-full max-w-[100vw] overflow-x-hidden">
        {isAblaufPage && <AblaufHeroSlider locale={locale} />}
        <Breadcrumb locale={locale} dict={dict} />
        <main className="min-h-screen min-w-0">{children}</main>
        <GlobalContactBar dict={dict} />
        <OnlineReceptionWidget locale={locale} dict={dict} />
        <Footer locale={locale} dict={dict} />
      </div>
    </>
  );
}
