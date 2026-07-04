// Centralized image map — replace paths / drop new files into public/images/.
// Missing files render as a labeled placeholder via <SmartImage />.
export const IMAGES = {
  dadPortrait: {
    src: "/images/dad-portrait.jpg",
    alt: "Apparao, all smiles at a family celebration",
  },
  momPortrait: {
    src: "/images/mom-portrait.jpg",
    alt: "Bharathi, laughing warmly while holding a little one",
  },
  momWork1: {
    src: "/images/mom-work-1.jpg",
    alt: "Bharathi with Raju, a quiet moment together",
  },
  momWork2: {
    src: "/images/mom-work-2.jpg",
    alt: "Bharathi at home, all warmth",
  },
  dadWork1: {
    src: "/images/dad-work-1.jpg",
    alt: "Apparao, steady and smiling",
  },
  dadWork2: {
    src: "/images/dad-work-2.jpg",
    alt: "Apparao and Bharathi on a quiet walk together",
  },
  couple1: {
    src: "/images/couple-1.jpg",
    alt: "Apparao and Bharathi holding a red heart balloon on their anniversary",
  },
  couple2: {
    src: "/images/couple-2.jpg",
    alt: "Apparao and Bharathi on a walk together",
  },
  couple3: {
    src: "/images/couple-3.jpg",
    alt: "A younger Apparao and Bharathi under a flowering garden arch",
  },
  couple4: {
    src: "/images/couple-4.jpg",
    alt: "Apparao and Bharathi, a quiet moment outdoors",
  },
  wedding: {
    // ?v=2 busts browser caches from before this file was re-cropped
    src: "/images/wedding.jpg?v=2",
    alt: "Apparao and Bharathi exchanging garlands at their wedding, 25 April 1999",
  },
  saiBaby: {
    src: "/images/sai-baby.jpg",
    alt: "Sai — their first blessing, framed by a heart of roses",
  },
  rajuBaby: {
    src: "/images/raju-baby.jpg",
    alt: "Raju — their son, out on a sunny afternoon",
  },
  childhood1: {
    src: "/images/childhood-1.jpg",
    alt: "Sai dressed up in a half-saree for a festival day",
  },
  childhood2: {
    src: "/images/childhood-2.jpg",
    alt: "Bharathi and Raju, a warm everyday moment",
  },
  familyRecent: {
    src: "/images/family-recent.jpg",
    alt: "Apparao, Bharathi, Raju and Sai together, all smiles",
  },
  growing1: {
    src: "/images/growing-1.jpg",
    alt: "Bharathi, Raju and Apparao at the 25th anniversary celebration",
  },
  growing2: {
    src: "/images/growing-2.jpg",
    alt: "The family on an outing in the forest",
  },
  weddingMemory1: {
    src: "/images/wedding-memory-1.jpg?v=2",
    alt: "The wedding rituals — family gathered close around the couple",
  },
  weddingMemory2: {
    src: "/images/wedding-memory-2.jpg?v=2",
    alt: "Apparao and Bharathi with the ceremonial wedding pots",
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

// Family section: 1 featured + 5 grid
export const FAMILY_PHOTOS = [
  { src: "/images/family-1.jpg", alt: "The whole family celebrating their 25th wedding anniversary" },
  { src: "/images/family-2.jpg", alt: "Bharathi, Raju and Apparao at the anniversary celebration" },
  { src: "/images/family-3.jpg", alt: "The family gathered together for the anniversary" },
  { src: "/images/family-4.jpg", alt: "A family outing in the forest" },
  { src: "/images/family-5.jpg", alt: "Bharathi and Raju, a warm selfie" },
  { src: "/images/family-6.jpg", alt: "Sai with family" },
];

// Gallery masonry: 15 images, ordered as a mini story — wedding day, the old album, then recent years
export const GALLERY_PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Apparao and Bharathi on their wedding day, 25 April 1999" },
  { src: "/images/gallery-2.jpg", alt: "Tying the mangalsutra, wedding day" },
  { src: "/images/gallery-3.jpg", alt: "A page from the wedding album — the garland ceremony" },
  { src: "/images/gallery-4.jpg", alt: "Wedding day, surrounded by family" },
  { src: "/images/gallery-5.jpg", alt: "The wedding ritual, family gathered close" },
  { src: "/images/gallery-6.jpg", alt: "A moment from the wedding ceremony" },
  { src: "/images/gallery-7.jpg", alt: "Bharathi, bridal portrait" },
  { src: "/images/gallery-8.jpg", alt: "A page from the family album" },
  { src: "/images/gallery-9.jpg", alt: "A family outing in the forest" },
  { src: "/images/gallery-10.jpg", alt: "Apparao and Bharathi on a walk together" },
  { src: "/images/gallery-11.jpg", alt: "Bharathi, Raju and Apparao celebrating" },
  { src: "/images/gallery-12.jpg", alt: "The family together, celebrating 25 years" },
  { src: "/images/gallery-13.jpg", alt: "Bharathi and Raju, a warm selfie" },
  { src: "/images/gallery-14.jpg", alt: "Sai, framed by a heart of roses" },
  { src: "/images/gallery-15.jpg", alt: "Sai with family" },
];