import Link from "next/link";
import { Nav } from "@/components/sections/nav/nav";
import { Footer } from "@/components/sections/footer/footer";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactProcess } from "@/components/sections/contact/contact-process";
import { ContactVisit } from "@/components/sections/contact/contact-visit";
import { ContactBeforeBook } from "@/components/sections/contact/contact-before";
import { ContactNote } from "@/components/sections/contact/contact-note";
import { ContactClosing } from "@/components/sections/contact/contact-closing";
import "./contact.css";

export default function ContactPage(): React.JSX.Element {
  return (
    <div className="contact-page">
      <Nav />
      <main>
        <ContactHero />
        <ContactProcess />
        <ContactVisit />
        <ContactBeforeBook />
        <ContactNote />
        <ContactClosing />
      </main>
      <Footer variant="contact" />
      <Link href="/" className="ct-back-home">
        ← Back to Home
      </Link>
    </div>
  );
}
