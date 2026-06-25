import { ASSETS } from "@/data/assets";
import { clientMoments, type ClientMoment } from "@/data/site-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

const toneClass: Record<ClientMoment["tone"], string> = {
  whisper: "moment-entry--whisper",
  standard: "moment-entry--standard",
  emphasis: "moment-entry--emphasis",
};

export const ClientMoments = (): React.JSX.Element => {
  return (
    <section className="client-moments" id="moments" aria-labelledby="moments-label">
      <div className="moments-inner">
        <Reveal>
          <p className="section-label" id="moments-label">
            What It Feels Like
          </p>
        </Reveal>
        <div className="moments-layout">
          <div className="moments-visual" aria-hidden>
            <div className="moments-visual-frame">
              <MediaVisual
                src={ASSETS.clientMoments}
                ariaLabel="Client moment"
              />
            </div>
          </div>
          <div className="moments-journal">
            {clientMoments.map((moment, index) => (
              <Reveal
                key={moment.quote}
                delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
                className={`moment-entry ${toneClass[moment.tone]} moment-entry--${index % 3}`}
              >
                <blockquote>&ldquo;{moment.quote}&rdquo;</blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
