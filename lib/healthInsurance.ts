import type { Locale } from "@/lib/i18n";

/** Austrian social health insurance funds — practice treats members of all. */
export const AUSTRIAN_HEALTH_INSURERS = [
  { id: "oegk", label: "ÖGK", href: "https://www.gesundheitskasse.at" },
  { id: "svs", label: "SVS", href: "https://www.svs.at" },
  { id: "bvaeb", label: "BVAEB", href: "https://www.bvaeb.at" },
  { id: "kfa", label: "KFA", href: "https://www.gesundheitskasse.at" },
] as const;

export const INSURANCE_FUNDS_LABEL = {
  de: "ÖGK, SVS, BVAEB und KFA (Wien)",
  en: "ÖGK, SVS, BVAEB and KFA (Vienna)",
} as const;

export type HealthInsuranceCopy = {
  badgeSuffixDe: string;
  badgeSuffixEn: string;
  coverageIntroDe: string;
  coverageIntroEn: string;
  fundsLinkHintDe: string;
  fundsLinkHintEn: string;
  supplementaryHeadingDe: string;
  supplementaryHeadingEn: string;
  supplementaryBodyDe: string;
  supplementaryBodyEn: string;
  bindingInfoDe: string;
  bindingInfoEn: string;
};

export const HEALTH_INSURANCE_COPY: HealthInsuranceCopy = {
  badgeSuffixDe: "ÖGK · SVS · BVAEB · KFA · Privat · Mo–Fr: 10–17 Uhr",
  badgeSuffixEn: "ÖGK · SVS · BVAEB · KFA · Private · Mon–Fri: 10:00–17:00",
  coverageIntroDe:
    "In unserer Ordination werden Patientinnen und Patienten mit allen gängigen österreichischen Krankenkassen betreut: ÖGK, SVS, BVAEB und KFA (in Wien besonders relevant). Sie müssen nicht vorab prüfen, ob wir Ihre Kasse „aufnehmen“ – wir betreuen Versicherte aller dieser Träger und unterstützen Sie bei Bewilligungen und Kostenerstattungen nach den jeweiligen Regeln Ihrer Versicherung.",
  coverageIntroEn:
    "Our practice treats patients with all major Austrian health insurance funds: ÖGK, SVS, BVAEB and KFA (especially relevant in Vienna). You do not need to ask in advance whether we “accept” your insurer—we care for members of all these funds and help with approvals and reimbursement according to each fund’s rules.",
  fundsLinkHintDe:
    "Offizielle Informationen Ihrer Krankenkasse (ÖGK, SVS, BVAEB, KFA):",
  fundsLinkHintEn: "Official information from your health fund (ÖGK, SVS, BVAEB, KFA):",
  supplementaryHeadingDe: "Private Zusatzversicherungen",
  supplementaryHeadingEn: "Private supplementary insurance",
  supplementaryBodyDe:
    "Leistungen privater Zusatzversicherungen hängen vom jeweiligen Vertrag ab. Wir beraten Sie gerne, welche Unterlagen für Ihre Zusatzversicherung sinnvoll sind – unabhängig davon, bei welcher gesetzlichen Kasse Sie versichert sind.",
  supplementaryBodyEn:
    "Benefits from private supplementary policies depend on your contract. We are happy to advise which documents your supplementary insurer may need—regardless of whether you are with ÖGK, SVS, BVAEB or KFA.",
  bindingInfoDe:
    "Verbindliche Tarife, Bewilligungen und Erstattungshöhen legt Ihre Krankenkasse (ÖGK, SVS, BVAEB oder KFA) fest. In der Ordination werden Versicherte aller dieser Träger behandelt.",
  bindingInfoEn:
    "Binding tariffs, approvals and reimbursement amounts are set by your health fund (ÖGK, SVS, BVAEB or KFA). Our practice treats insured members of all these funds.",
};

export function getInsuranceCoverageIntro(locale: Locale): string {
  return locale === "de"
    ? HEALTH_INSURANCE_COPY.coverageIntroDe
    : HEALTH_INSURANCE_COPY.coverageIntroEn;
}

export function getInsuranceFundsLinkHint(locale: Locale): string {
  return locale === "de"
    ? HEALTH_INSURANCE_COPY.fundsLinkHintDe
    : HEALTH_INSURANCE_COPY.fundsLinkHintEn;
}

export function getSupplementaryInsuranceCopy(locale: Locale): {
  heading: string;
  body: string;
} {
  return locale === "de"
    ? {
        heading: HEALTH_INSURANCE_COPY.supplementaryHeadingDe,
        body: HEALTH_INSURANCE_COPY.supplementaryBodyDe,
      }
    : {
        heading: HEALTH_INSURANCE_COPY.supplementaryHeadingEn,
        body: HEALTH_INSURANCE_COPY.supplementaryBodyEn,
      };
}

export function getInsuranceBindingInfo(locale: Locale): string {
  return locale === "de"
    ? HEALTH_INSURANCE_COPY.bindingInfoDe
    : HEALTH_INSURANCE_COPY.bindingInfoEn;
}
