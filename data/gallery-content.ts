import { ASSETS, type MediaSrc } from "@/data/assets";
import { BOOKING_URL } from "@/data/nav-links";

export type FeaturedPiece = {
  src: MediaSrc;
  label: string;
  category: string;
  layout: "tall" | "wide" | "standard";
  ariaLabel: string;
};

export type TransformationStory = {
  src: MediaSrc;
  narrative: string;
  feeling: string;
  ariaLabel: string;
};

export type ReimaginedPair = {
  src: MediaSrc;
  caption: string;
  ariaLabel: string;
};

export type AestheticMoment = {
  src: MediaSrc;
  mood: string;
  ariaLabel: string;
};

const { gallery } = ASSETS;

export const GALLERY = {
  hero: {
    label: "The Journal",
    headline: "The Confidence",
    headlineEm: "Shift",
    support:
      "Every transformation tells a story. Explore the moments, confidence, and self-expression that define the Vegan & Boujee experience.",
    visual: gallery[3],
  },
  featured: {
    label: "Curated Moments",
    pieces: [
      {
        src: ASSETS.hairServices,
        label: "Dimensional Color",
        category: "Hair",
        layout: "tall",
        ariaLabel: "Hair color transformation",
      },
      {
        src: gallery[1],
        label: "Lash Lift",
        category: "Lashes",
        layout: "standard",
        ariaLabel: "Lash lift transformation",
      },
      {
        src: gallery[2],
        label: "Brow Definition",
        category: "Brows",
        layout: "wide",
        ariaLabel: "Brow lamination transformation",
      },
      {
        src: gallery[4],
        label: "Vivid Expression",
        category: "Color",
        layout: "standard",
        ariaLabel: "Vivid color transformation",
      },
      {
        src: gallery[5],
        label: "Lip Blush",
        category: "Enhancement",
        layout: "tall",
        ariaLabel: "Lip blush enhancement",
      },
      {
        src: ASSETS.studio,
        label: "The Studio",
        category: "Atmosphere",
        layout: "wide",
        ariaLabel: "Vegan and Boujee studio",
      },
      {
        src: gallery[8],
        label: "The Finish",
        category: "Transformation",
        layout: "standard",
        ariaLabel: "Finished transformation look",
      },
    ] as FeaturedPiece[],
  },
  stories: {
    label: "Transformation Stories",
    items: [
      {
        src: gallery[0],
        narrative:
          "After years of hiding her grey coverage concerns, she finally felt confident embracing a look designed specifically for her.",
        feeling: "Self-acceptance",
        ariaLabel: "Grey coverage transformation story",
      },
      {
        src: gallery[4],
        narrative:
          "She had outgrown who she used to be. Her hair finally matched the woman she was becoming.",
        feeling: "Personal evolution",
        ariaLabel: "Color reinvention story",
      },
      {
        src: gallery[1],
        narrative:
          "Sometimes the biggest transformation isn't the hair. It's how you feel walking out the door.",
        feeling: "Quiet confidence",
        ariaLabel: "Lash lift transformation story",
      },
    ] as TransformationStory[],
  },
  reimagined: {
    label: "Before & After, Reimagined",
    intro: "No sliders. No side-by-side gimmicks. Just the shift — captured.",
    pairs: [
      {
        src: gallery[2],
        caption: "Visibility reclaimed.",
        ariaLabel: "Brow transformation",
      },
      {
        src: gallery[5],
        caption: "Soft power, permanently.",
        ariaLabel: "Lip blush transformation",
      },
    ] as ReimaginedPair[],
  },
  aesthetic: {
    label: "The Vegan & Boujee Aesthetic",
    tagline: "Atmosphere over outcome.",
    moments: [
      {
        src: ASSETS.team,
        mood: "The chair",
        ariaLabel: "Studio chair moment",
      },
      {
        src: gallery[6],
        mood: "The detail",
        ariaLabel: "Beauty detail",
      },
      {
        src: ASSETS.studio,
        mood: "The energy",
        ariaLabel: "Studio energy",
      },
      {
        src: gallery[7],
        mood: "The finish",
        ariaLabel: "Finished look",
      },
    ] as AestheticMoment[],
  },
  closing: {
    headline: "Ready For Your",
    headlineEm: "Transformation?",
    support: "Your story starts in the chair.",
    cta: "Book Consultation",
    bookingUrl: BOOKING_URL,
  },
} as const;
