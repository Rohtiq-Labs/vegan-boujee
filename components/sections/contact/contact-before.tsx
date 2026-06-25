import { CONTACT } from "@/data/contact-content";
import { Reveal } from "@/components/ui/reveal";

export const ContactBeforeBook = (): React.JSX.Element => {
  const { beforeBook } = CONTACT;

  return (
    <section className="ct-before" aria-labelledby="ct-before-label">
      <div className="ct-before-inner">
        <Reveal>
          <p className="section-label" id="ct-before-label">
            {beforeBook.label}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="ct-before-intro">{beforeBook.intro}</p>
        </Reveal>
        <div className="ct-before-list">
          {beforeBook.notes.map((note, index) => (
            <Reveal key={note.title} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
              <article className="ct-before-item">
                <h2 className="ct-before-title">{note.title}</h2>
                <p className="ct-before-text">{note.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
