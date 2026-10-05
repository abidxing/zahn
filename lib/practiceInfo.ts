/**
 * Verified practice facts used site-wide (SEO, schema, copy consistency).
 * Do not invent additional credentials or statistics beyond these.
 */

export const PRACTICE = {
  name: "Zahnspange Sablania",
  url: "https://www.zahnspange-sablania.at/",
  telephone: "+43 1 3306090",
  telephoneTel: "+4313306090",
  whatsapp: "+43 677 64410301",
  whatsappTel: "+4367764410301",
  email: "info@zahnspange-sablania.at",
  emailSecondary: "info@wienzahnaerzte.at",
  streetAddress: "Forsthausgasse 16–20, Stiege 3, EG",
  postalCode: "1200",
  addressLocality: "Wien",
  addressCountry: "AT",
  addressCountryName: "Austria",
  openingHours: "Mo-Fr 10:00-17:00",
  openingHoursDisplayDe: "Montag–Freitag: 10:00–17:00",
  openingHoursDisplayEn: "Monday–Friday: 10:00–17:00",
  languages: ["de", "en", "hi"] as const,
  languagesDisplayDe: "Deutsch, Englisch und Hindi",
  languagesDisplayEn: "German, English and Hindi",
  geo: {
    latitude: 48.2425,
    longitude: 16.3785,
  },
} as const;

export const DOCTOR = {
  name: "Dr. med. dent. Manish Sablania",
  honorificPrefix: "Dr. med. dent.",
  givenName: "Manish",
  familyName: "Sablania",
  credentials: "BDS, M.Sc. Specialized Orthodontics",
  jobTitleDe: "Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt",
  jobTitleEn: "Specialist orthodontist and general dentist",
  experienceYearsLabelDe: "Über 28 Jahre Erfahrung",
  experienceYearsLabelEn: "More than 28 years of experience",
  treatmentsLabelDe: "mehr als 8.000 kieferorthopädische Behandlungen und Zahnspangenfälle",
  treatmentsLabelEn: "over 8,000 orthodontic treatments and braces cases",
  experienceComboDe:
    "Über 28 Jahre Erfahrung und mehr als 8.000 kieferorthopädische Behandlungen und Zahnspangenfälle.",
  experienceComboEn:
    "More than 28 years of experience and over 8,000 orthodontic treatments and braces cases.",
  treatmentsStatDe: "8.000+",
  treatmentsStatEn: "8,000+",
  imagePath:
    "/Specialist%20dentist%20in%20orthodontics%20Dr%20med%20dent%20Manish%20Sablania%20BDS%20MSc%20Orthodontic%20dentist%20Vienna%201200.png",
} as const;

/** Default Open Graph / social share image */
export const DEFAULT_OG_IMAGE = "/Dr-Manish-fav.png";
