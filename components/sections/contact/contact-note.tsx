import { CONTACT } from "@/data/contact-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const ContactNote = (): React.JSX.Element => {
  const { note } = CONTACT;

  return (
    <section className="ct-note" aria-labelledby="ct-note-label">
      <Reveal className="ct-note-visual">
        <MediaVisual src={note.visual} ariaLabel="Note from Chantel" />
      </Reveal>
      <div className="ct-note-content">
        <Reveal>
          <p className="section-label section-label--on-dark" id="ct-note-label">
            {note.label}
          </p>
        </Reveal>
        {note.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
            <p className="ct-note-p">{paragraph}</p>
          </Reveal>
        ))}
        <Reveal delay={3}>
          <footer className="ct-note-sign">
            <span className="ct-note-name">{note.signoff}</span>
            <span className="ct-note-handle">{note.handle}</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
};
