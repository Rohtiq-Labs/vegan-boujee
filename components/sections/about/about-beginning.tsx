import { ABOUT } from "@/data/about-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const AboutBeginning = (): React.JSX.Element => {
  const { beginning } = ABOUT;

  return (
    <section className="ab-beginning" aria-labelledby="ab-beginning-label">
      <Reveal>
        <p className="section-label" id="ab-beginning-label">
          {beginning.label}
        </p>
      </Reveal>
      <div className="ab-beginning-flow">
        <Reveal delay={1}>
          <p className="ab-prose ab-prose--lead">{beginning.chapters[0].text}</p>
        </Reveal>
        <Reveal delay={1}>
          <p className="ab-prose">{beginning.chapters[1].text}</p>
        </Reveal>
        <Reveal delay={2} className="ab-beginning-visual">
          <MediaVisual
            src={beginning.visual}
            ariaLabel="Vegan and Boujee studio moment"
          />
        </Reveal>
        <Reveal delay={2}>
          <blockquote className="ab-pull-quote ab-pull-quote--center">
            &ldquo;{beginning.chapters[2].pullQuote}&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={3}>
          <p className="ab-prose">{beginning.chapters[3].text}</p>
        </Reveal>
        <Reveal delay={3}>
          <p className="ab-prose ab-prose--closing">{beginning.chapters[4].text}</p>
        </Reveal>
      </div>
    </section>
  );
};
