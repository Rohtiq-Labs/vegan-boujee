import { ASSETS, type MediaSrc } from "@/data/assets";

export const BOOKING_URL =
  "https://www.veganandboujee.com/hair-lash-lift-services";

export type ServicePathway = {
  id: string;
  statement: string;
  leadsTo: string;
  category: string;
};

export type PricedService = {
  name: string;
  price: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  benefits?: string[];
  priced?: PricedService[];
  note?: string;
  visual: MediaSrc;
};

export const SERVICES = {
  hero: {
    label: "Experiences",
    headline: "Choose Your",
    headlineEm: "Transformation",
    support:
      "Whether you're seeking a subtle refresh, a dramatic transformation, enhanced features, or a confidence boost — every service at Vegan & Boujee is designed with intention.",
    cta: "Book Consultation",
    visual: ASSETS.heroImage,
  },
  categories: [
    {
      id: "hair",
      title: "Hair Transformations",
      tagline: "The version of you you've been waiting for.",
      description:
        "From dimensional blonding and balayage to vivid color, extensions, smoothing treatments, and hair repair — every service is customized to help you become the woman you're becoming.",
      services: [
        "Haircuts",
        "Hair Coloring",
        "Grey Coverage",
        "Balayage",
        "Babylights",
        "Color Melting",
        "Vivid Coloring",
        "Hair Extensions",
        "Smoothing Treatments",
        "Permanent Straightening",
        "Hair Repair Treatments",
        "Scalp Therapy Treatments",
      ],
      note: "All new color, chemical, and extension clients require a consultation before booking.",
      visual: ASSETS.hairServices,
    },
    {
      id: "brows-lashes",
      title: "Brows & Lashes",
      tagline: "Small shifts. Dramatic confidence.",
      description:
        "Refined enhancements that frame your face and lift your presence — without changing who you are.",
      services: [
        "Brow Lamination + Shape + Tint",
        "Lash Lift Treatment",
      ],
      benefits: [
        "Fuller looking brows",
        "Easier brow maintenance",
        "Lifted lashes",
        "Enhanced natural beauty",
        "Results lasting approximately 6 weeks",
      ],
      priced: [
        { name: "Brow Lamination + Shape + Tint", price: "$150" },
        { name: "Lash Lift Treatment", price: "$135" },
      ],
      visual: ASSETS.gallery[1],
    },
    {
      id: "beauty-enhancing",
      title: "Beauty Enhancing Treatments",
      tagline: "Highlight what already makes you beautiful.",
      description:
        "Subtle, intentional enhancements designed for self-expression — never to mask, always to elevate.",
      services: [
        "Tiny Tattoos",
        "Freckle Tattoos",
        "Lip Blush",
        "Lip Contour",
      ],
      visual: ASSETS.gallery[5],
    },
  ] as ServiceCategory[],
  spotlight: {
    label: "Featured Treatment",
    title: "Lip Blush",
    tagline: "Your lips, but softer. Your confidence, but louder.",
    purpose:
      "A semi-permanent enhancement that restores natural color, defines shape, and creates the look of effortlessly beautiful lips — without daily liner or lipstick.",
    benefits: [
      "Natural-looking color and definition",
      "Soft, blended finish — never harsh or overdone",
      "Ideal for pale, uneven, or faded lip tones",
      "Wake up feeling polished without the routine",
    ],
    process:
      "A personalized color is selected to complement your skin tone and desired aesthetic. The treatment is applied with precision and artistry — designed to enhance, not overpower.",
    healing:
      "Expect 5–7 days of healing. Lips will appear bolder initially, then soften into a beautiful, natural result as they settle.",
    longevity:
      "Two sessions are required for optimal results. Maintenance is recommended every 1–2 years to keep your color fresh.",
    pricing: [
      { name: "Initial Treatment", price: "$450" },
      { name: "Follow Up Treatment", price: "$250" },
    ],
    visual: ASSETS.gallery[5],
  },
  pathways: [
    {
      id: "major",
      statement: "I'm ready for a major hair transformation.",
      leadsTo: "Hair Transformations",
      category: "hair",
    },
    {
      id: "subtle",
      statement: "I'm looking for subtle enhancement.",
      leadsTo: "Brows & Lashes",
      category: "brows-lashes",
    },
    {
      id: "low-maintenance",
      statement: "I want low-maintenance beauty.",
      leadsTo: "Beauty Enhancing Treatments",
      category: "beauty-enhancing",
    },
    {
      id: "confidence",
      statement: "I want to feel more confident.",
      leadsTo: "Let's find your fit",
      category: "consult",
    },
  ] as ServicePathway[],
  closing: {
    headline: "Your Transformation",
    headlineEm: "Starts Here.",
    support: "The chair is waiting.",
    cta: "Book Consultation",
  },
} as const;
