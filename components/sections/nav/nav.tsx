"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { CONTACT_PATH, NAV_LINKS } from "@/data/nav-links";

type NavProps = {
  bookHref?: string;
};

const isPageLink = (href: string): boolean =>
  href.startsWith("/") && !href.includes("#");

const isExternalLink = (href: string): boolean => href.startsWith("http");

export const Nav = ({ bookHref = CONTACT_PATH }: NavProps): React.JSX.Element => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const onScroll = (): void => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const renderLink = (link: (typeof NAV_LINKS)[number], className: string): React.JSX.Element => {
    if (isPageLink(link.href)) {
      return (
        <Link href={link.href} className={className} onClick={() => setMenuOpen(false)}>
          {link.label}
        </Link>
      );
    }

    return (
      <a href={link.href} className={className} onClick={() => setMenuOpen(false)}>
        {link.label}
      </a>
    );
  };

  const bookLinkProps = {
    className: "nav-cta",
    onClick: () => setMenuOpen(false),
  };

  return (
    <>
      <nav id="main-nav">
        <Link href="/" className="nav-logo" aria-label="Vegan & Boujee home">
          <BrandLogo className="nav-logo-image" priority />
        </Link>

        <ul className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>{renderLink(link, "nav-link")}</li>
          ))}
        </ul>

        <div className="nav-actions">
          {isExternalLink(bookHref) ? (
            <a
              href={bookHref}
              {...bookLinkProps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          ) : (
            <Link href={bookHref} {...bookLinkProps}>
              Book
            </Link>
          )}
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </nav>

      <div
        id="nav-mobile-menu"
        className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav-mobile-links">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href} style={{ transitionDelay: `${index * 50}ms` }}>
              {renderLink(link, "nav-mobile-link")}
            </li>
          ))}
        </ul>
        {isExternalLink(bookHref) ? (
          <a
            href={bookHref}
            className="btn-primary nav-mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Book
          </a>
        ) : (
          <Link
            href={bookHref}
            className="btn-primary nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book
          </Link>
        )}
      </div>
    </>
  );
};
