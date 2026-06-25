import Link from "next/link";
import { ASSETS } from "@/data/assets";
import { CHANTEL, founderValues } from "@/data/site-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const Founder = (): React.JSX.Element => {
  return (
    <section className="founder" id="chantel">
      <div className="founder-bg-text" aria-hidden>
        Chantel
      </div>
      <div className="founder-inner">
        <Reveal className="founder-portrait">
          <div className="founder-accent-line" aria-hidden />
          <div className="founder-portrait-frame">
            <MediaVisual
              src={ASSETS.founder}
              ariaLabel="Chantel Justene, founder of Vegan and Boujee"
            />
          </div>
          <p className="founder-portrait-caption">
            {CHANTEL.handle} · Founder &amp; Stylist
          </p>
        </Reveal>
        <div className="founder-text">
          <Reveal>
            <p className="section-label">From Chantel</p>
          </Reveal>
          <Reveal delay={1}>
            <h2>
              I Didn&apos;t Build a Salon.
              <br />
              I Built a Space for Women
              <br />
              to <em>Come Home</em> to Themselves.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="founder-letter">
              Hey love — I&apos;m Chantel. I started Vegan &amp; Boujee because
              I was tired of the beauty industry telling women they had to pick
              a side: glamorous or conscious, soft or powerful, boujee or
              kind-hearted.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="founder-quote founder-quote--signature">
              <blockquote>
                &ldquo;{CHANTEL.signatureQuote}&rdquo;
              </blockquote>
              <cite>— {CHANTEL.name}</cite>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="founder-values">
              {founderValues.map((value) => (
                <div key={value.title} className="founder-value">
                  <span className="founder-value-title">{value.title}</span>
                  <p className="founder-value-desc">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={4}>
            <Link href="/about" className="founder-story-link">
              Read the full story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
