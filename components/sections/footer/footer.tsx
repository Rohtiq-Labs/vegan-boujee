import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

type FooterProps = {
  variant?: "home" | "about" | "services" | "contact" | "gallery";
};

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

const homeLinks: FooterLink[] = [
  { href: "/#about", label: "Philosophy" },
  { href: "/services", label: "Experiences" },
  { href: "/gallery", label: "Journal" },
  { href: "/about", label: "Chantel's Story" },
  { href: "/contact", label: "Book Now" },
];

const aboutLinks: FooterLink[] = [
  { href: "/about#ab-beginning-label", label: "The Beginning" },
  { href: "/about#ab-chair-label", label: "The Experience" },
  { href: "/about#ab-values-label", label: "Values" },
  { href: "/about#ab-words-label", label: "From Chantel" },
  {
    href: "https://www.veganandboujee.com/hair-lash-lift-services",
    label: "Book Now",
    external: true,
  },
];

const servicesLinks: FooterLink[] = [
  { href: "/services#hair", label: "Hair" },
  { href: "/services#brows-lashes", label: "Brows & Lashes" },
  { href: "/services#beauty-enhancing", label: "Enhancing" },
  { href: "/services#sv-consultation-label", label: "Consultation" },
  {
    href: "https://www.veganandboujee.com/hair-lash-lift-services",
    label: "Book Now",
    external: true,
  },
];

const contactLinks: FooterLink[] = [
  { href: "/contact#ct-process-label", label: "The Process" },
  { href: "/contact#ct-visit-label", label: "Visit" },
  { href: "/contact#ct-before-label", label: "Before You Book" },
  { href: "/contact#ct-note-label", label: "From Chantel" },
  { href: "/contact", label: "Book Now" },
];

const galleryLinks: FooterLink[] = [
  { href: "/gallery#gl-featured-label", label: "Curated" },
  { href: "/gallery#gl-stories-label", label: "Stories" },
  { href: "/gallery#gl-aesthetic-label", label: "Aesthetic" },
  { href: "/gallery#gl-words-label", label: "Client Words" },
  { href: "/contact", label: "Book Now" },
];

const linkSets = {
  home: homeLinks,
  about: aboutLinks,
  services: servicesLinks,
  contact: contactLinks,
  gallery: galleryLinks,
} as const;

const isAppRoute = (href: string): boolean =>
  href.startsWith("/about") ||
  href.startsWith("/services") ||
  href.startsWith("/contact") ||
  href.startsWith("/gallery");

export const Footer = ({
  variant = "home",
}: FooterProps): React.JSX.Element => {
  const links = linkSets[variant];

  return (
    <footer>
      <div className="footer-inner">
        <Link href="/" className="footer-logo" aria-label="Vegan & Boujee home">
          <BrandLogo className="footer-logo-image" />
          <span>Conscious Beauty · Upland, CA</span>
        </Link>
        <ul className="footer-links">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : isAppRoute(link.href) ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/veganandboujee/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            IG
          </a>
          <a
            href="http://www.tiktok.com/veganandboujee"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            TK
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Vegan &amp; Boujee. All rights reserved.
      </div>
    </footer>
  );
};
