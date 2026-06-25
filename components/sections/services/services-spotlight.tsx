import { SERVICES } from "@/data/services-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const ServicesSpotlight = (): React.JSX.Element => {
  const { spotlight } = SERVICES;

  return (
    <section className="sv-spotlight" aria-labelledby="sv-spotlight-title">
      <div className="sv-spotlight-visual">
        <Reveal className="sv-spotlight-frame">
          <MediaVisual src={spotlight.visual} ariaLabel="Lip blush treatment" />
        </Reveal>
      </div>
      <div className="sv-spotlight-content">
        <Reveal>
          <p className="section-label section-label--on-blush">{spotlight.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 id="sv-spotlight-title" className="sv-spotlight-title">
            {spotlight.title}
          </h2>
          <p className="sv-spotlight-tagline">{spotlight.tagline}</p>
        </Reveal>
        <Reveal delay={2}>
          <p className="sv-spotlight-purpose">{spotlight.purpose}</p>
        </Reveal>
        <Reveal delay={2}>
          <div className="sv-spotlight-block">
            <h3 className="sv-spotlight-label">Benefits</h3>
            <ul className="sv-spotlight-list">
              {spotlight.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <div className="sv-spotlight-block">
            <h3 className="sv-spotlight-label">The Process</h3>
            <p className="sv-spotlight-text">{spotlight.process}</p>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <div className="sv-spotlight-duo">
            <div className="sv-spotlight-block">
              <h3 className="sv-spotlight-label">Healing</h3>
              <p className="sv-spotlight-text">{spotlight.healing}</p>
            </div>
            <div className="sv-spotlight-block">
              <h3 className="sv-spotlight-label">Longevity</h3>
              <p className="sv-spotlight-text">{spotlight.longevity}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="sv-spotlight-pricing">
            {spotlight.pricing.map((item) => (
              <div key={item.name} className="sv-price-row sv-price-row--spotlight">
                <span className="sv-price-name">{item.name}</span>
                <span className="sv-price-amount">{item.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
