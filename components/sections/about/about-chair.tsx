import { ABOUT } from "@/data/about-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const AboutChair = (): React.JSX.Element => {
  const { chair } = ABOUT;

  return (
    <section className="ab-chair" aria-labelledby="ab-chair-label">
      <div className="ab-chair-header">
        <Reveal>
          <p className="section-label section-label--on-blush" id="ab-chair-label">
            {chair.label}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="ab-chair-intro">{chair.intro}</p>
        </Reveal>
      </div>
      <div className="ab-chair-body">
        <ol className="ab-chair-list">
          {chair.feelings.map((feeling, index) => (
            <Reveal key={feeling.word} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
              <li className="ab-chair-item">
                <span className="ab-chair-word">{feeling.word}</span>
                <p className="ab-chair-line">{feeling.line}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="ab-chair-visual" delay={2}>
          <div className="ab-chair-visual-frame">
            <MediaVisual
              src={chair.visual}
              ariaLabel="Experience in Chantel's chair"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
