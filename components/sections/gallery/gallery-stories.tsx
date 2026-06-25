import { GALLERY } from "@/data/gallery-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const GalleryStories = (): React.JSX.Element => {
  const { stories } = GALLERY;

  return (
    <section className="gl-stories" aria-labelledby="gl-stories-label">
      <Reveal>
        <p className="section-label section-label--on-dark" id="gl-stories-label">
          {stories.label}
        </p>
      </Reveal>
      <div className="gl-stories-list">
        {stories.items.map((story, index) => (
          <Reveal
            key={story.narrative}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className={`gl-story gl-story--${index % 2}`}
          >
            <div className="gl-story-visual">
              <MediaVisual src={story.src} ariaLabel={story.ariaLabel} />
            </div>
            <div className="gl-story-copy">
              <p className="gl-story-narrative">{story.narrative}</p>
              <span className="gl-story-feeling">{story.feeling}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
