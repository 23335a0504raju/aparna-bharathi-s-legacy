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
  momWork1: {
    src: "/images/mom-work-1.jpg",
    alt: "Bharathi at home, caring for the household",
  },
  momWork2: {
    src: "/images/mom-work-2.jpg",
    alt: "Bharathi ironing clothes for the neighbourhood",
  },
  dadWork1: {
    src: "/images/dad-work-1.jpg",
    alt: "Apparao at work at Coromandel",
  },
  dadWork2: {
    src: "/images/dad-work-2.jpg",
    alt: "Apparao during a working day",
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