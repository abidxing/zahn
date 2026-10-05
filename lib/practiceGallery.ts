export type PracticeGalleryImage = {
  src: string;
  altDe: string;
  altEn: string;
  captionDe: string;
  captionEn: string;
  /** Larger tile in the bento grid */
  featured?: boolean;
};

export const PRACTICE_GALLERY_IMAGES: PracticeGalleryImage[] = [
  {
    src: "/galerie/practice-waiting-room-wide.jpg",
    altDe: "Moderner Wartebereich der Ordination Zahnspange Sablania in Wien",
    altEn: "Modern waiting area at Zahnspange Sablania dental practice in Vienna",
    captionDe: "Wartebereich",
    captionEn: "Waiting area",
    featured: true,
  },
  {
    src: "/galerie/practice-waiting-room-seating.jpg",
    altDe: "Sitzbereich mit Holzvertäfelung und Designleuchte",
    altEn: "Seating area with wood slat wall and designer lighting",
    captionDe: "Wartebereich",
    captionEn: "Waiting area",
    featured: true,
  },
  {
    src: "/galerie/practice-treatment-room-teal.jpg",
    altDe: "Behandlungsraum mit modernem Behandlungsstuhl und Tageslicht",
    altEn: "Treatment room with modern dental chair and natural light",
    captionDe: "Behandlungsraum",
    captionEn: "Treatment room",
    featured: true,
  },
  {
    src: "/galerie/practice-treatment-chair-orange.jpg",
    altDe: "Kieferorthopädischer Behandlungsstuhl und Instrumente",
    altEn: "Orthodontic treatment chair and instruments",
    captionDe: "Behandlungsraum",
    captionEn: "Treatment room",
  },
  {
    src: "/galerie/practice-restroom-vanity-mirror.jpg",
    altDe: "Patienten-Waschbereich mit Spiegel und dekorativen Details",
    altEn: "Patient wash area with mirror and decorative details",
    captionDe: "Patientenkomfort",
    captionEn: "Patient comfort",
  },
  {
    src: "/galerie/practice-restroom-marble-vanity.jpg",
    altDe: "Modernes WC mit Marmorfliesen und indirekter Beleuchtung",
    altEn: "Modern restroom with marble tiles and indirect lighting",
    captionDe: "Patientenkomfort",
    captionEn: "Patient comfort",
  },
  {
    src: "/galerie/practice-decor-buddha-floral.jpg",
    altDe: "Dekorativer Empfangsbereich mit Blumenarrangement",
    altEn: "Decorative reception area with floral arrangement",
    captionDe: "Ambiente",
    captionEn: "Ambience",
  },
  {
    src: "/galerie/practice-brochure-display.jpg",
    altDe: "Informationsmaterial und Produkte in der Ordination",
    altEn: "Information materials and products in the practice",
    captionDe: "Beratung & Info",
    captionEn: "Advice & info",
  },
];
