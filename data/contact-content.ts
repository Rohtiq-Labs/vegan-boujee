import { ASSETS } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";

export const CONTACT_BOOK_ID = "book";

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
