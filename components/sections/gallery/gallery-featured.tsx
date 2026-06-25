import { GALLERY, type FeaturedPiece } from "@/data/gallery-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

const layoutClass: Record<FeaturedPiece["layout"], string> = {
  tall: "gl-piece--tall",
  wide: "gl-piece--wide",
  standard: "gl-piece--standard",
};

export const GalleryFeatured = (): React.JSX.Element => {
  const { featured } = GALLERY;

  return (
    <section className="gl-featured" aria-labelledby="gl-featured-label">
      <Reveal>
        <p className="section-label" id="gl-featured-label">
          {featured.label}
        </p>
      </Reveal>
      <div className="gl-magazine">
        {featured.pieces.map((piece, index) => (
          <Reveal
            key={piece.label}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className={`gl-piece ${layoutClass[piece.layout]}`}
          >
            <div className="gl-piece-media">
              <MediaVisual src={piece.src} ariaLabel={piece.ariaLabel} />
            </div>
            <div className="gl-piece-caption">
              <span className="gl-piece-category">{piece.category}</span>
              <span className="gl-piece-label">{piece.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
