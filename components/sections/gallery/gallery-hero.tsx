import { GALLERY } from "@/data/gallery-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryHero = (): React.JSX.Element => {
  const { hero } = GALLERY;

  return (
    <section className="gl-hero" aria-labelledby="gl-hero-title">
      <div className="gl-hero-media">
        <MediaVisual src={hero.visual} ariaLabel="Vegan and Boujee gallery" />
        <div className="gl-hero-shade" aria-hidden />
      </div>
      <div className="gl-hero-content">
        <Reveal>
          <p className="section-label section-label--on-dark">{hero.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 id="gl-hero-title" className="gl-hero-title">
            {hero.headline}
            <br />
            <em>{hero.headlineEm}</em>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="gl-hero-support">{hero.support}</p>
        </Reveal>
      </div>
    </section>
  );
};

export const GalleryClosing = (): React.JSX.Element => {
  const { closing } = GALLERY;

  return (
    <section className="gl-closing" aria-labelledby="gl-closing-title">
      <div className="gl-closing-inner">
        <Reveal>
          <h2 id="gl-closing-title" className="gl-closing-title">
            {closing.headline}
            <br />
            <em>{closing.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="gl-closing-support">{closing.support}</p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href={closing.bookingUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {closing.cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
