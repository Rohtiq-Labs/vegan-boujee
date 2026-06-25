import { ABOUT } from "@/data/about-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";

export const AboutClosing = (): React.JSX.Element => {
  const { closing } = ABOUT;

  return (
    <section className="ab-closing" aria-labelledby="ab-closing-title">
      <div className="ab-closing-inner">
        <Reveal>
          <h2 id="ab-closing-title" className="ab-closing-title">
            {closing.headline}
            <br />
            <em>{closing.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="ab-closing-support">{closing.support}</p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href={closing.bookingUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book With Chantel
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
