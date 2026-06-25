import { ABOUT } from "@/data/about-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const AboutStories = (): React.JSX.Element => {
  return (
    <section className="ab-stories" aria-labelledby="ab-stories-label">
      <Reveal>
        <p className="section-label section-label--on-dark" id="ab-stories-label">
          {ABOUT.stories.label}
        </p>
      </Reveal>
      <div className="ab-stories-list">
        {ABOUT.stories.items.map((story, index) => (
          <Reveal
            key={story.quote}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className="ab-story"
          >
            <div className="ab-story-visual">
              <MediaVisual src={story.src} ariaLabel={story.ariaLabel} />
            </div>
            <blockquote className="ab-story-quote">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
            <p className="ab-story-shift">{story.shift}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
