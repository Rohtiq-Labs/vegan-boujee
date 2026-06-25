import { BOOKING_URL, SERVICES } from "@/data/services-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";

const categoryHref = (category: string): string => {
  if (category === "consult") return BOOKING_URL;
  return `#${category}`;
};

export const ServicesGuide = (): React.JSX.Element => {
  return (
    <section className="sv-guide" aria-labelledby="sv-guide-title">
      <Reveal>
        <p className="section-label section-label--on-dark" id="sv-guide-label">
          Find Your Fit
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2 id="sv-guide-title" className="sv-guide-title">
          Which Experience Is <em>Right for You?</em>
        </h2>
      </Reveal>
      <div className="sv-guide-list">
        {SERVICES.pathways.map((pathway, index) => (
          <Reveal key={pathway.id} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
            <a
              href={categoryHref(pathway.category)}
              className="sv-guide-item"
              {...(pathway.category === "consult"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="sv-guide-statement">&ldquo;{pathway.statement}&rdquo;</span>
              <span className="sv-guide-arrow" aria-hidden>→</span>
              <span className="sv-guide-dest">{pathway.leadsTo}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export const ServicesClosing = (): React.JSX.Element => {
  const { closing } = SERVICES;

  return (
    <section className="sv-closing" aria-labelledby="sv-closing-title">
      <div className="sv-closing-inner">
        <Reveal>
          <h2 id="sv-closing-title" className="sv-closing-title">
            {closing.headline}
            <br />
            <em>{closing.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="sv-closing-support">{closing.support}</p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href={BOOKING_URL}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {closing.cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
