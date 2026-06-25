import { ASSETS } from "@/data/assets";
import { CHANTEL, pillarTags } from "@/data/site-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const Philosophy = (): React.JSX.Element => {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy-text">
        <Reveal>
          <p className="section-label">Chantel&apos;s Philosophy</p>
        </Reveal>
        <Reveal delay={1}>
          <h2>
            Not a Salon.
            <br />A <em>Sanctuary</em> for
            <br />
            Conscious Women.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="philosophy-lead">
            <strong>
              You should never have to choose between looking incredible and
              living your values.
            </strong>
          </p>
        </Reveal>
        <Reveal delay={3}>
          <blockquote className="philosophy-quote">
            &ldquo;{CHANTEL.manifestoQuote}&rdquo;
            <cite>— {CHANTEL.name}</cite>
          </blockquote>
        </Reveal>
        <Reveal delay={4}>
          <div className="pillars">
            {pillarTags.map((tag) => (
              <span key={tag} className="pillar-tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal className="philosophy-visual">
        <div className="philosophy-image-wrap">
          <MediaVisual
            src={ASSETS.philosophy}
            ariaLabel="Chantel and the Vegan and Boujee team"
          />
        </div>
        <div className="philo-float-tag">{CHANTEL.philosophyNote}</div>
      </Reveal>
    </section>
  );
};
