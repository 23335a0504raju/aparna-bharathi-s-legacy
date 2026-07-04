// Centralized image map — replace paths / drop new files into public/images/.
// Missing files render as a labeled placeholder via <SmartImage />.
export const IMAGES = {
  dadPortrait: {
    src: "/images/dad-portrait.jpg",
    alt: "Portrait of Apparao, father",
  },
  momPortrait: {
    src: "/images/mom-portrait.jpg",
    alt: "Portrait of Bharathi, mother",
  },
  couple: {
    src: "/images/couple.jpg",
    alt: "Apparao and Bharathi together",
  },
  family: {
    src: "/images/family.jpg",
    alt: "The family together",
  },
  gallery1: { src: "/images/gallery-1.jpg", alt: "Family memory" },
  gallery2: { src: "/images/gallery-2.jpg", alt: "Family memory" },
  gallery3: { src: "/images/gallery-3.jpg", alt: "Family memory" },
} as const;

export type ImageKey = keyof typeof IMAGES;