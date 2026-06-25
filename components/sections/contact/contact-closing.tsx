import { CONTACT, CONTACT_BOOK_ID } from "@/data/contact-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";

export const ContactClosing = (): React.JSX.Element => {
  const { closing } = CONTACT;

  return (
    <section
      className="ct-closing"
      id={CONTACT_BOOK_ID}
      aria-labelledby="ct-closing-title"
    >
      <div className="ct-closing-inner">
        <Reveal>
          <h2 id="ct-closing-title" className="ct-closing-title">
            {closing.headline}
            <br />
            <em>{closing.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="ct-closing-support">{closing.support}</p>
        </Reveal>
        <Reveal delay={2}>
          <a href={`mailto:${closing.email}`} className="btn-primary">
            {closing.cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
