// =============================================================================
// CRITICAL LAYOUT - DO NOT BREAK
// =============================================================================
// 1. The line below MUST stay: it loads all global and Tailwind styles.
//    Removing it will break the entire site's CSS.
// 2. Keep <html><body><LocaleShell>{children}</LocaleShell></body></html>.
//    LocaleShell provides Navbar, Footer, Breadcrumb; removing it breaks the app.
// 3. Keep the body className (font-sans, min-h-screen, bg-white, text-primary).
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { getMetadataBase } from "@/lib/site";
import LocaleShell from "@/components/LocaleShell";
import PracticeJsonLd from "@/components/PracticeJsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/practiceInfo";

const GA_MEASUREMENT_ID = "G-MXDRDTJFB3";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Kieferorthopädie Wien 1200 | Dr. Manish Sablania",
    template: "%s | Zahnspange Sablania",
  },
  description:
    "Dr. Manish Sablania ist Fachzahnarzt für Kieferorthopädie und Zahnarzt in 1200 Wien. Zahnspangen, Aligner und Behandlungen für Kinder, Jugendliche und Erwachsene.",
  icons: {
    icon: "/Dr-Manish-fav.png",
    apple: "/Dr-Manish-fav.png",
  },
  openGraph: {
    siteName: "Zahnspange Sablania",
    locale: "de_AT",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className="font-sans antialiased min-h-screen bg-white text-primary overflow-x-hidden"
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <PracticeJsonLd />
        <LocaleShell>{children}</LocaleShell>
      </body>
    </html>
  );
}
