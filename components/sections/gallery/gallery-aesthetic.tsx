import { GALLERY } from "@/data/gallery-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryAesthetic = (): React.JSX.Element => {
  const { aesthetic } = GALLERY;

  return (
    <section className="gl-aesthetic" aria-labelledby="gl-aesthetic-label">
      <Reveal>
        <p className="section-label section-label--on-blush" id="gl-aesthetic-label">
          {aesthetic.label}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <p className="gl-aesthetic-tagline">{aesthetic.tagline}</p>
      </Reveal>
      <div className="gl-aesthetic-mosaic">
        {aesthetic.moments.map((moment, index) => (
          <Reveal
            key={moment.mood}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className={`gl-aesthetic-cell gl-aesthetic-cell--${index}`}
          >
            <div className="gl-aesthetic-media">
              <MediaVisual src={moment.src} ariaLabel={moment.ariaLabel} />
            </div>
            <span className="gl-aesthetic-mood">{moment.mood}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
