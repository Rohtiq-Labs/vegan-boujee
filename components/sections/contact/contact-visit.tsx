import { CONTACT, CONTACT_BOOK_ID } from "@/data/contact-content";
import { Reveal } from "@/components/ui/reveal";

export const ContactVisit = (): React.JSX.Element => {
  const { visit } = CONTACT;

  return (
    <section className="ct-visit" aria-labelledby="ct-visit-label">
      <div className="ct-visit-inner">
        <Reveal>
          <p className="section-label section-label--on-blush" id="ct-visit-label">
            {visit.label}
          </p>
        </Reveal>
        <div className="ct-visit-grid">
          <Reveal delay={1} className="ct-visit-block">
            <h2 className="ct-visit-title">{visit.studio.title}</h2>
            {visit.studio.lines.map((line) => (
              <p key={line} className="ct-visit-line">
                {line}
              </p>
            ))}
          </Reveal>
          <Reveal delay={2} className="ct-visit-block">
            <h2 className="ct-visit-title">{visit.hours.title}</h2>
            {visit.hours.lines.map((line) => (
              <p key={line} className="ct-visit-line">
                {line}
              </p>
            ))}
          </Reveal>
          <Reveal delay={3} className="ct-visit-block ct-visit-block--wide">
            <h2 className="ct-visit-title">{visit.booking.title}</h2>
            {visit.booking.lines.map((line) => (
              <p key={line} className="ct-visit-line">
                {line}
              </p>
            ))}
            <div className="ct-visit-links">
              <a href={`mailto:${visit.email}`} className="ct-visit-link">
                {visit.email}
              </a>
              <a
                href={visit.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-visit-link"
              >
                @veganandboujee
              </a>
              <a href={`#${CONTACT_BOOK_ID}`} className="ct-visit-link ct-visit-link--accent">
                Start booking →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
