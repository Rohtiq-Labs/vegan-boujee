import { GALLERY, type ClientWord } from "@/data/gallery-content";
import { Reveal } from "@/components/ui/reveal";

const toneClass: Record<ClientWord["tone"], string> = {
  whisper: "gl-word--whisper",
  standard: "gl-word--standard",
  emphasis: "gl-word--emphasis",
};

export const GalleryWords = (): React.JSX.Element => {
  const { words } = GALLERY;

  return (
    <section className="gl-words" aria-labelledby="gl-words-label">
      <Reveal>
        <p className="section-label" id="gl-words-label">
          {words.label}
        </p>
      </Reveal>
      <div className="gl-words-journal">
        {words.items.map((item, index) => (
          <Reveal
            key={item.quote}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className={`gl-word ${toneClass[item.tone]} gl-word--${index % 3}`}
          >
            <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
