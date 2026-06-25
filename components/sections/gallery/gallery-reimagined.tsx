import { GALLERY } from "@/data/gallery-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryReimagined = (): React.JSX.Element => {
  const { reimagined } = GALLERY;

  return (
    <section className="gl-reimagined" aria-labelledby="gl-reimagined-label">
      <div className="gl-reimagined-header">
        <Reveal>
          <p className="section-label" id="gl-reimagined-label">
            {reimagined.label}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="gl-reimagined-intro">{reimagined.intro}</p>
        </Reveal>
      </div>
      <div className="gl-reimagined-grid">
        {reimagined.pairs.map((pair, index) => (
          <Reveal
            key={pair.caption}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className="gl-reimagined-item"
          >
            <div className="gl-reimagined-media">
              <MediaVisual src={pair.src} ariaLabel={pair.ariaLabel} />
            </div>
            <p className="gl-reimagined-caption">{pair.caption}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
