"use client";

import { ASSETS } from "@/data/assets";
import { CHANTEL, pillarTags } from "@/data/site-content";
import { ImageReveal } from "@/components/ui/image-reveal";
import { MediaVisual } from "@/components/ui/media-visual";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

export const Philosophy = (): React.JSX.Element => {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy-text">
        <Reveal variant="text">
          <p className="section-label">Chantel&apos;s Philosophy</p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <h2>
            Not a Salon.
            <br />A <em>Sanctuary</em> for
            <br />
            Conscious Women.
          </h2>
        </Reveal>
        <Reveal variant="text" delay={2}>
          <p className="philosophy-lead">
            <strong>
              You should never have to choose between looking incredible and
              living your values.
            </strong>
          </p>
        </Reveal>
        <Reveal variant="text" delay={3}>
          <blockquote className="philosophy-quote">
            &ldquo;{CHANTEL.manifestoQuote}&rdquo;
            <cite>— {CHANTEL.name}</cite>
          </blockquote>
        </Reveal>
        <Reveal variant="fade" delay={4}>
          <div className="pillars">
            {pillarTags.map((tag) => (
              <span key={tag} className="pillar-tag motion-glow">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <ImageReveal className="philosophy-visual" variant="image-right" delay={2}>
        <div className="philosophy-image-wrap">
          <MediaVisual
            src={ASSETS.philosophy}
            ariaLabel="Chantel and the Vegan and Boujee team"
          />
        </div>
        <ParallaxLayer className="philo-float-tag" speed={0.14}>
          <span>{CHANTEL.philosophyNote}</span>
        </ParallaxLayer>
      </ImageReveal>
    </section>
  );
};
