import { ASSETS, type MediaSrc } from "@/data/assets";

export type TransformStory = {
  src: MediaSrc;
  theme: string;
  outcome: string;
  ariaLabel: string;
};

export type ClientMoment = {
  quote: string;
  tone: "whisper" | "standard" | "emphasis";
};

export const transformStories: TransformStory[] = [
  {
    src: ASSETS.transformations[0],
    theme: "More Than a New Look",
    outcome: "A color that finally felt like her.",
    ariaLabel: "Color transformation",
  },
  {
    src: ASSETS.transformations[1],
    theme: "The Confidence Shift",
    outcome: "Softer, lifted, unapologetically feminine.",
    ariaLabel: "Lash lift transformation",
  },
  {
    src: ASSETS.transformations[2],
    theme: "Real Women. Real Transformations.",
    outcome: "She saw herself — fully — for the first time in years.",
    ariaLabel: "Brow transformation",
  },
  {
    src: ASSETS.transformations[3],
    theme: "The Version of You",
    outcome: "Her hair matched the woman she was becoming.",
    ariaLabel: "Full color transformation",
  },
  {
    src: ASSETS.transformations[4],
    theme: "Beauty With Intention",
    outcome: "A quiet power that stayed all week.",
    ariaLabel: "Lip blush transformation",
  },
];

export const clientMoments: ClientMoment[] = [
  {
    quote:
      "I came in for my hair and left feeling like myself again.",
    tone: "emphasis",
  },
  {
    quote: "I haven't felt this confident in years.",
    tone: "standard",
  },
  {
    quote: "Chantel has a way of making you feel seen.",
    tone: "whisper",
  },
  {
    quote: "This wasn't just an appointment. It felt like a reset.",
    tone: "standard",
  },
  {
    quote:
      "For the first time in a long time, I looked in the mirror and loved what I saw.",
    tone: "emphasis",
  },
  {
    quote: "Boujee without the guilt. I didn't know that was possible.",
    tone: "whisper",
  },
];

export const pillarTags = [
  "Conscious Beauty",
  "Cruelty-Free",
  "Values-Aligned",
  "Vegan Products",
] as const;

export const CHANTEL = {
  name: "Chantel Justene",
  handle: "@veganandboujee",
  location: "Upland, CA",
  signatureQuote:
    "I don't want you to just love your hair — I want you to walk out feeling like the most confident version of yourself.",
  manifestoQuote: "Where vanity and love for all beings co-exist.",
  heroVoice:
    "I built Vegan & Boujee for women who want to feel boujee and still sleep well at night.",
  philosophyNote: "Beauty is an act of self-love.",
  bookingNote:
    "Come as you are. Leave as the woman you've been talking yourself into becoming.",
} as const;
