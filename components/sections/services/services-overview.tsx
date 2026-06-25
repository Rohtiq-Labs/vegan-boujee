import { SERVICES } from "@/data/services-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const ServicesOverview = (): React.JSX.Element => {
  const [hair, brows, beauty] = SERVICES.categories;

  return (
    <section className="sv-overview" aria-labelledby="sv-overview-label">
      <Reveal>
        <p className="section-label" id="sv-overview-label">
          Transformation Pathways
        </p>
      </Reveal>

      {/* Hair — blush editorial spread */}
      <article className="sv-pathway sv-pathway--hair" id={hair.id}>
        <div className="sv-pathway-head">
          <Reveal>
            <span className="sv-pathway-num" aria-hidden>01</span>
            <h2 className="sv-pathway-title">{hair.title}</h2>
            <p className="sv-pathway-tagline">{hair.tagline}</p>
          </Reveal>
        </div>
        <div className="sv-pathway-body sv-pathway-body--hair">
          <Reveal className="sv-pathway-visual" delay={1}>
            <MediaVisual src={hair.visual} ariaLabel="Hair transformation" />
          </Reveal>
          <div className="sv-pathway-detail">
            <Reveal delay={1}>
              <p className="sv-pathway-desc">{hair.description}</p>
            </Reveal>
            <Reveal delay={2}>
              <ul className="sv-service-list sv-service-list--columns">
                {hair.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </Reveal>
            {hair.note && (
              <Reveal delay={3}>
                <p className="sv-pathway-note">{hair.note}</p>
              </Reveal>
            )}
          </div>
        </div>
      </article>

      {/* Brows & Lashes — dark intimate layout */}
      <article className="sv-pathway sv-pathway--brows" id={brows.id}>
        <div className="sv-pathway-inner">
          <Reveal className="sv-pathway-visual sv-pathway-visual--tall">
            <MediaVisual src={brows.visual} ariaLabel="Brows and lashes" />
          </Reveal>
          <div className="sv-pathway-copy">
            <Reveal>
              <span className="sv-pathway-num sv-pathway-num--light" aria-hidden>02</span>
              <h2 className="sv-pathway-title sv-pathway-title--light">{brows.title}</h2>
              <p className="sv-pathway-tagline sv-pathway-tagline--light">{brows.tagline}</p>
            </Reveal>
            <Reveal delay={1}>
              <p className="sv-pathway-desc sv-pathway-desc--light">{brows.description}</p>
            </Reveal>
            {brows.benefits && (
              <Reveal delay={2}>
                <ul className="sv-benefit-list">
                  {brows.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {brows.priced && (
              <Reveal delay={3}>
                <div className="sv-price-list">
                  {brows.priced.map((item) => (
                    <div key={item.name} className="sv-price-row">
                      <span className="sv-price-name">{item.name}</span>
                      <span className="sv-price-amount">{item.price}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </article>

      {/* Beauty Enhancing — minimal centered editorial */}
      <article className="sv-pathway sv-pathway--beauty" id={beauty.id}>
        <Reveal>
          <span className="sv-pathway-num" aria-hidden>03</span>
          <h2 className="sv-pathway-title">{beauty.title}</h2>
          <p className="sv-pathway-tagline">{beauty.tagline}</p>
        </Reveal>
        <div className="sv-pathway-body sv-pathway-body--beauty">
          <Reveal delay={1}>
            <p className="sv-pathway-desc sv-pathway-desc--center">{beauty.description}</p>
          </Reveal>
          <Reveal className="sv-pathway-visual sv-pathway-visual--beauty" delay={2}>
            <MediaVisual src={beauty.visual} ariaLabel="Beauty enhancing treatments" />
          </Reveal>
          <Reveal delay={3}>
            <ul className="sv-beauty-services">
              {beauty.services.map((service) => (
                <li key={service}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </article>
    </section>
  );
};
