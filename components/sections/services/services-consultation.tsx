import { SERVICES } from "@/data/services-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const ServicesConsultation = (): React.JSX.Element => {
  const { consultation } = SERVICES;

  return (
    <section className="sv-consultation" aria-labelledby="sv-consultation-title">
      <div className="sv-consultation-inner">
        <div className="sv-consultation-text">
          <Reveal>
            <p className="section-label" id="sv-consultation-label">
              {consultation.label}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="sv-consultation-title" className="sv-consultation-title">
              {consultation.title}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="sv-consultation-intro">{consultation.intro}</p>
          </Reveal>
          <div className="sv-consultation-points">
            {consultation.points.map((point, index) => (
              <Reveal key={point.title} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
                <div className="sv-consultation-point">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={4}>
            <p className="sv-consultation-closing">{consultation.closing}</p>
          </Reveal>
        </div>
        <Reveal className="sv-consultation-visual" delay={2}>
          <div className="sv-consultation-frame">
            <MediaVisual
              src={consultation.visual}
              ariaLabel="Consultation with Chantel"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
