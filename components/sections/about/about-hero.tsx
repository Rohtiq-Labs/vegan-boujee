"use client";

import { ABOUT } from "@/data/about-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

export const AboutHero = (): React.JSX.Element => {
  return (
    <section className="ab-hero" aria-labelledby="ab-hero-title">
      <div className="ab-hero-media" aria-hidden>
        <ParallaxLayer speed={0.18}>
          <MediaVisual
            src={ABOUT.hero.portrait}
            ariaLabel="Chantel Justene, founder of Vegan and Boujee"
          />
        </ParallaxLayer>
        <div className="ab-hero-shade" />
      </div>
      <div className="ab-hero-text">
        <Reveal variant="text">
          <p className="section-label section-label--on-dark">{ABOUT.hero.label}</p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <h1 id="ab-hero-title" className="ab-hero-title">
            {ABOUT.hero.headline}
            <br />
            <em>{ABOUT.hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal variant="text" delay={2}>
          <p className="ab-hero-support">{ABOUT.hero.support}</p>
        </Reveal>
      </div>
    </section>
  );
};
