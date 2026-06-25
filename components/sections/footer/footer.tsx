import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { InstagramIcon, TikTokIcon } from "@/components/ui/social-icons";
import { SALON } from "@/data/salon";

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
  { href: "/about#ab-stories-label", label: "Transformations" },
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
  { href: "/contact", label: "Consultation" },
  {
    href: "https://www.veganandboujee.com/hair-lash-lift-services",
    label: "Book Now",
    external: true,
  },
];

const contactLinks: FooterLink[] = [
  { href: "/contact#ct-visit-label", label: "Visit" },
  { href: "/contact#ct-note-label", label: "From Chantel" },
  { href: "/contact", label: "Book Now" },
];

const galleryLinks: FooterLink[] = [
  { href: "/gallery#gl-featured-label", label: "Curated" },
  { href: "/gallery#gl-stories-label", label: "Stories" },
  { href: "/gallery#gl-aesthetic-label", label: "Aesthetic" },
  { href: "/gallery#gl-reimagined-label", label: "Reimagined" },
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
            href={SALON.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Follow Vegan and Boujee on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.tiktok.com/@veganandboujee"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Follow Vegan and Boujee on TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Vegan &amp; Boujee. All rights reserved.
      </div>
    </footer>
  );
};
