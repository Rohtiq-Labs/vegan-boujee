import { BOOKING_URL, SERVICES } from "@/data/services-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const ServicesHero = (): React.JSX.Element => {
  const { hero } = SERVICES;

  return (
    <section className="sv-hero" aria-labelledby="sv-hero-title">
      <div className="sv-hero-media" aria-hidden>
        <MediaVisual src={hero.visual} ariaLabel="Vegan and Boujee experiences" />
        <div className="sv-hero-shade" />
      </div>
      <div className="sv-hero-content">
        <Reveal>
          <p className="section-label section-label--on-dark">{hero.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 id="sv-hero-title" className="sv-hero-title">
            {hero.headline}
            <br />
            <em>{hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="sv-hero-support">{hero.support}</p>
        </Reveal>
        <Reveal delay={3}>
          <a
            href={BOOKING_URL}
            className="btn-primary"
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
