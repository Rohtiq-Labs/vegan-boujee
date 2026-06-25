"use client";

import { BOOKING_URL, SERVICES } from "@/data/services-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

export const ServicesHero = (): React.JSX.Element => {
  const { hero } = SERVICES;

  return (
    <section className="sv-hero" aria-labelledby="sv-hero-title">
      <div className="sv-hero-media" aria-hidden>
        <ParallaxLayer speed={0.18}>
          <MediaVisual src={hero.visual} ariaLabel="Vegan and Boujee experiences" />
        </ParallaxLayer>
        <div className="sv-hero-shade" />
      </div>
      <div className="sv-hero-text">
        <Reveal variant="text">
          <p className="section-label section-label--on-dark">{hero.label}</p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <h1 id="sv-hero-title" className="sv-hero-title">
            {hero.headline}
            <br />
            <em>{hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal variant="text" delay={2}>
          <p className="sv-hero-support">{hero.support}</p>
        </Reveal>
        <Reveal variant="fade" delay={3}>
          <a
            href={BOOKING_URL}
            className="btn-primary motion-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
