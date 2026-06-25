import { ASSETS, type MediaSrc } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";

export type AboutValue = {
  title: string;
  thought: string;
};

export type ChairFeeling = {
  word: string;
  line: string;
};

export type AboutStory = {
  quote: string;
  shift: string;
  src: MediaSrc;
  ariaLabel: string;
};

export type PullQuote = {
  text: string;
};

export const ABOUT = {
  hero: {
    label: "From Chantel",
    headline: "I Didn't Build a Salon.",
    headlineEm: "I Built a Space for Women to Come Home to Themselves.",
    support:
      "Vegan & Boujee exists because I refused to believe you had to sacrifice your values to feel beautiful — or sacrifice beauty to live consciously.",
    portrait: ASSETS.founderPortrait,
  },
  beginning: {
    label: "The Beginning",
    chapters: [
      {
        text: "I spent years inside an industry that treated beauty like a transaction. Walk in, walk out, next client. No one asked how you felt — only how you looked.",
      },
      {
        text: "And the products. The cruelty behind so many \"luxury\" formulas. The disconnect between what we put on our bodies and what we claim to believe. It never sat right with me.",
      },
      {
        pullQuote:
          "I wanted a space where vanity and love for all beings could co-exist.",
      },
      {
        text: "So I built one. Not a salon in the traditional sense — a studio rooted in conscious beauty, vegan products, and the kind of personal attention that makes a woman feel like she matters.",
      },
      {
        text: "Every appointment is intentional. Every formula is cruelty-free. Every woman who sits in my chair leaves knowing she didn't have to choose between boujee and kind.",
      },
    ],
    visual: ASSETS.studio,
  },
  chair: {
    label: "What Happens In My Chair",
    intro:
      "This isn't about services or techniques. It's about what you carry when you leave.",
    feelings: [
      {
        word: "Seen",
        line: "Not just your hair — you. Your energy, your story, the version of yourself you're becoming.",
      },
      {
        word: "Heard",
        line: "We talk. Really talk. Your appointment is a conversation, not a checklist.",
      },
      {
        word: "Confident",
        line: "The kind that doesn't need permission. The kind that stays after you leave.",
      },
      {
        word: "Empowered",
        line: "Because looking incredible and living your values aren't opposites.",
      },
      {
        word: "Comfortable",
        line: "Warm chair, warm energy. No performance. Just you.",
      },
    ] as ChairFeeling[],
    visual: ASSETS.gallery[2],
  },
  values: {
    label: "What I Stand For",
    items: [
      {
        title: "Conscious Beauty",
        thought:
          "Every product, every choice — aligned with compassion. Beauty that feels good in your bones.",
      },
      {
        title: "Self-Expression",
        thought:
          "Your look should sound like you. Not a trend. Not a template. You.",
      },
      {
        title: "Compassion",
        thought:
          "Cruelty-free isn't a marketing word here. It's a non-negotiable.",
      },
      {
        title: "Confidence",
        thought:
          "The mirror is just the beginning. What matters is how you walk out the door.",
      },
      {
        title: "Personal Transformation",
        thought:
          "Identity shifts happen in this chair. I've watched it hundreds of times.",
      },
      {
        title: "Feminine Energy",
        thought:
          "Soft is not weak. Expressive is not excessive. Feminine is power.",
      },
      {
        title: "Intentional Luxury",
        thought:
          "Boujee without the guilt. Elevated without the pretense.",
      },
    ] as AboutValue[],
  },
  words: {
    label: "Words From Chantel",
    salutation: "Hey love,",
    paragraphs: [
      "If you're reading this, you're probably looking for more than a hair appointment. Good — because that's all I offer.",
      "I started Vegan & Boujee for women who are tired of choosing. Tired of picking between glamorous and conscious, between soft and powerful, between looking incredible and sleeping well at night.",
      "My chair is where those false choices end. Where you can be boujee and kind-hearted. Where your transformation is personal, not prescribed.",
      "I don't want you to just love your hair. I want you to walk out feeling like the most confident version of yourself — the one you've been talking yourself into becoming.",
    ],
    pullQuotes: [
      {
        text: "Beauty should never cost you your values.",
      },
      {
        text: "Come as you are. That's not marketing — it's how I run my studio.",
      },
    ] as PullQuote[],
    signoff: CHANTEL.name,
    handle: CHANTEL.handle,
  },
  stories: {
    label: "Real Women, Real Transformations",
    items: [
      {
        quote: "I came in for my hair and left feeling like myself again.",
        shift: "Identity reclaimed.",
        src: ASSETS.gallery[0],
        ariaLabel: "Client transformation moment",
      },
      {
        quote: "This wasn't just an appointment. It felt like a reset.",
        shift: "A full exhale.",
        src: ASSETS.gallery[3],
        ariaLabel: "Client transformation moment",
      },
      {
        quote:
          "For the first time in a long time, I looked in the mirror and loved what I saw.",
        shift: "Self-recognition.",
        src: ASSETS.gallery[5],
        ariaLabel: "Client transformation moment",
      },
    ] as AboutStory[],
  },
  closing: {
    headline: "Your Transformation Starts",
    headlineEm: "Long Before The Mirror.",
    support: "The chair is waiting.",
    bookingUrl: "https://www.veganandboujee.com/hair-lash-lift-services",
  },
} as const;
