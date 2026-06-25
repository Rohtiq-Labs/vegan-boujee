import Link from "next/link";
import { Nav } from "@/components/sections/nav/nav";
import { Footer } from "@/components/sections/footer/footer";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutBeginning } from "@/components/sections/about/about-beginning";
import { AboutChair } from "@/components/sections/about/about-chair";
import { AboutValues } from "@/components/sections/about/about-values";
import { AboutWords } from "@/components/sections/about/about-words";
import { AboutStories } from "@/components/sections/about/about-stories";
import { AboutClosing } from "@/components/sections/about/about-closing";
import "./about.css";

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="about-page">
      <Nav />
      <main>
        <AboutHero />
        <AboutBeginning />
        <AboutChair />
        <AboutValues />
        <AboutWords />
        <AboutStories />
        <AboutClosing />
      </main>
      <Footer variant="about" />
      <Link href="/" className="ab-back-home">
        ← Back to Home
      </Link>
    </div>
  );
}
