import { ASSETS } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";

export const CONTACT_BOOK_ID = "book";

export type ProcessStep = {
  num: string;
  title: string;
  detail: string;
};

export const CONTACT = {
  hero: {
    label: "Your Invitation",
    headline: "Begin Your",
    headlineEm: "Transformation",
    support:
      "Whether you're looking for a subtle refresh or a complete transformation — your journey begins here.",
    cta: "Book Consultation",
    visual: ASSETS.founderPortrait,
  },
  process: {
    label: "What Happens Next",
    steps: [
      {
        num: "01",
        title: "Book Your Consultation",
        detail: "Choose a time that works for you. First visits start with a conversation.",
      },
      {
        num: "02",
        title: "Discuss Your Goals",
        detail: "We talk about your vision, your lifestyle, and what transformation means to you.",
      },
      {
        num: "03",
        title: "Create Your Personalized Plan",
        detail: "A tailored approach — never copy-paste. Built around you.",
      },
      {
        num: "04",
        title: "Enjoy Your Transformation",
        detail: "Relax into the experience. Leave feeling like yourself — amplified.",
      },
    ] as ProcessStep[],
  },
  visit: {
    label: "Visit Vegan & Boujee",
    studio: {
      title: "The Studio",
      lines: ["Upland, CA", "By appointment only"],
    },
    hours: {
      title: "Hours",
      lines: ["Tuesday — Saturday", "By appointment"],
    },
    booking: {
      title: "Booking",
      lines: [
        "Reach out to schedule your appointment.",
        "New clients welcome — consultations included.",
      ],
    },
    email: "hello@veganandboujee.com",
    instagram: "https://www.instagram.com/veganandboujee/",
  },
  beforeBook: {
    label: "Before You Book",
    intro:
      "A few things to know — written with love, not rules. I want you to feel prepared and excited, not overwhelmed.",
    notes: [
      {
        title: "New Color Clients",
        text: "All new color appointments begin with a consultation. This ensures we create something beautiful and realistic for your hair.",
      },
      {
        title: "Chemical Services",
        text: "Smoothing, straightening, and chemical treatments require a consultation first — so we protect your hair and your goals.",
      },
      {
        title: "Extension Services",
        text: "Extensions are a commitment. We'll discuss length, maintenance, and lifestyle before we book your transformation.",
      },
    ],
  },
  note: {
    label: "A Note From Chantel",
    paragraphs: [
      "Every transformation begins with trust — and I don't take that lightly.",
      "My goal isn't to change who you are. It's to help you feel like the best, most confident version of yourself.",
      "I can't wait to meet you. Seriously — I'll be the one greeting you with a warm hug and a genuine smile.",
    ],
    signoff: CHANTEL.name,
    handle: CHANTEL.handle,
    visual: ASSETS.gallery[6],
  },
  closing: {
    headline: "Ready When",
    headlineEm: "You Are.",
    support: "Your next chapter starts with one conversation.",
    cta: "Email to Book",
    email: "hello@veganandboujee.com",
  },
} as const;
