import { ABOUT } from "@/data/about-content";
import { Reveal } from "@/components/ui/reveal";

export const AboutWords = (): React.JSX.Element => {
  const { words } = ABOUT;

  return (
    <section className="ab-words" aria-labelledby="ab-words-label">
      <Reveal>
        <p className="section-label" id="ab-words-label">
          {words.label}
        </p>
      </Reveal>
      <div className="ab-letter">
        <Reveal delay={1}>
          <p className="ab-letter-salutation">{words.salutation}</p>
        </Reveal>
        <Reveal delay={1}>
          <p className="ab-letter-p">{words.paragraphs[0]}</p>
        </Reveal>
        <Reveal delay={2}>
          <blockquote className="ab-pull-quote ab-pull-quote--left">
            &ldquo;{words.pullQuotes[0].text}&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={2}>
          <p className="ab-letter-p">{words.paragraphs[1]}</p>
        </Reveal>
        <Reveal delay={3}>
          <p className="ab-letter-p">{words.paragraphs[2]}</p>
        </Reveal>
        <Reveal delay={3}>
          <blockquote className="ab-pull-quote ab-pull-quote--right">
            &ldquo;{words.pullQuotes[1].text}&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={4}>
          <p className="ab-letter-p ab-letter-p--closing">{words.paragraphs[3]}</p>
        </Reveal>
        <Reveal delay={4}>
          <footer className="ab-letter-sign">
            <span className="ab-letter-name">{words.signoff}</span>
            <span className="ab-letter-handle">{words.handle}</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
};
