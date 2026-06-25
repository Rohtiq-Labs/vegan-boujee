"use client";

import { ASSETS } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

export const Hero = (): React.JSX.Element => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <ParallaxLayer speed={0.22}>
          <MediaVisual src={ASSETS.hero} ariaLabel="Vegan and Boujee hero" priority />
        </ParallaxLayer>
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-initial" aria-hidden>
        V
      </div>
      <div className="hero-content">
        <Reveal variant="text">
          <p className="hero-eyebrow">
            {CHANTEL.name} · {CHANTEL.location}
          </p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <h1>
            Beauty That
            <br />
            <em>Transforms</em>
            <br />
            More Than Hair
          </h1>
        </Reveal>
        <Reveal variant="text" delay={2}>
          <p className="hero-voice">&ldquo;{CHANTEL.heroVoice}&rdquo;</p>
        </Reveal>
        <Reveal variant="fade" delay={3}>
          <a href="/services" className="btn-primary motion-glow">
            Begin Your Transformation
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
      <div className="hero-scroll-hint" aria-hidden>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};
