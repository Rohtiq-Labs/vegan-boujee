import { GALLERY } from "@/data/gallery-content";
import { ImageReveal } from "@/components/ui/image-reveal";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryReimagined = (): React.JSX.Element => {
  const { reimagined } = GALLERY;

  return (
    <section className="gl-reimagined" aria-labelledby="gl-reimagined-label">
      <div className="gl-reimagined-header">
        <Reveal variant="text">
          <p className="section-label" id="gl-reimagined-label">
            {reimagined.label}
          </p>
        </Reveal>
        <Reveal variant="text" delay={1}>
          <p className="gl-reimagined-intro">{reimagined.intro}</p>
        </Reveal>
      </div>
      <div className="gl-reimagined-grid">
        {reimagined.pairs.map((pair, index) => (
          <div key={pair.caption} className="gl-reimagined-item motion-lift">
            <ImageReveal delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
              <div className="gl-reimagined-media interactive-media">
                <MediaVisual src={pair.src} ariaLabel={pair.ariaLabel} />
              </div>
            </ImageReveal>
            <Reveal variant="text" delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
              <p className="gl-reimagined-caption">{pair.caption}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};
