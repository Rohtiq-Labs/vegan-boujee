import { GALLERY } from "@/data/gallery-content";
import { ImageReveal } from "@/components/ui/image-reveal";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryStories = (): React.JSX.Element => {
  const { stories } = GALLERY;

  return (
    <section className="gl-stories" aria-labelledby="gl-stories-label">
      <Reveal variant="text">
        <p className="section-label section-label--on-dark" id="gl-stories-label">
          {stories.label}
        </p>
      </Reveal>
      <div className="gl-stories-list">
        {stories.items.map((story, index) => (
          <div key={story.narrative} className={`gl-story gl-story--${index % 2}`}>
            <ImageReveal
              delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
              variant={index % 2 === 0 ? "image-left" : "image-right"}
              className="gl-story-visual-wrap"
            >
              <div className="gl-story-visual interactive-media">
                <MediaVisual src={story.src} ariaLabel={story.ariaLabel} />
              </div>
            </ImageReveal>
            <Reveal
              delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
              variant="text"
              className="gl-story-copy"
            >
              <p className="gl-story-narrative">{story.narrative}</p>
              <span className="gl-story-feeling">{story.feeling}</span>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};
