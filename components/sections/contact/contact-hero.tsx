"use client";

import { CONTACT, CONTACT_BOOK_ID } from "@/data/contact-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

export const ContactHero = (): React.JSX.Element => {
  const { hero } = CONTACT;

  return (
    <section className="ct-hero" aria-labelledby="ct-hero-title">
      <div className="ct-hero-media" aria-hidden>
        <ParallaxLayer speed={0.18}>
          <MediaVisual src={hero.visual} ariaLabel="Book with Vegan and Boujee" />
        </ParallaxLayer>
        <div className="ct-hero-shade" />
      </div>
      <div className="ct-hero-content">
        <Reveal variant="text">
          <p className="section-label section-label--on-dark">{hero.label}</p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <h1 id="ct-hero-title" className="ct-hero-title">
            {hero.headline}
            <br />
            <em>{hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal variant="text" delay={2}>
          <p className="ct-hero-support">{hero.support}</p>
        </Reveal>
        <Reveal variant="fade" delay={3}>
          <a href={`#${CONTACT_BOOK_ID}`} className="btn-primary motion-glow">
            {hero.cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
