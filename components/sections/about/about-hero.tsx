import { ABOUT } from "@/data/about-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const AboutHero = (): React.JSX.Element => {
  return (
    <section className="ab-hero" aria-labelledby="ab-hero-title">
      <div className="ab-hero-portrait">
        <MediaVisual
          src={ABOUT.hero.portrait}
          ariaLabel="Chantel Justene, founder of Vegan and Boujee"
        />
        <div className="ab-hero-portrait-shade" aria-hidden />
      </div>
      <div className="ab-hero-text">
        <Reveal>
          <p className="section-label section-label--on-dark">{ABOUT.hero.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 id="ab-hero-title" className="ab-hero-title">
            {ABOUT.hero.headline}
            <br />
            <em>{ABOUT.hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="ab-hero-support">{ABOUT.hero.support}</p>
        </Reveal>
      </div>
    </section>
  );
};
