import Link from "next/link";
import { ASSETS } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";
import { ImageReveal } from "@/components/ui/image-reveal";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const Founder = (): React.JSX.Element => {
  return (
    <section className="founder" id="chantel">
      <div className="founder-bg-text" aria-hidden>
        Chantel
      </div>
      <div className="founder-inner">
        <ImageReveal className="founder-portrait" variant="image-left" delay={1}>
          <div className="founder-accent-line" aria-hidden />
          <div className="founder-portrait-frame interactive-media">
            <MediaVisual
              src={ASSETS.founder}
              ariaLabel="Chantel Justene, founder of Vegan and Boujee"
            />
          </div>
          <p className="founder-portrait-caption">
            {CHANTEL.handle} · Founder &amp; Stylist
          </p>
        </ImageReveal>
        <div className="founder-text">
          <Reveal variant="text">
            <p className="section-label">From Chantel</p>
          </Reveal>
          <Reveal variant="text" delay={1}>
            <h2>
              I Didn&apos;t Build a Salon.
              <br />
              I Built a Space for Women
              <br />
              to <em>Come Home</em> to Themselves.
            </h2>
          </Reveal>
          <Reveal variant="text" delay={2}>
            <p className="founder-letter">
              Hey love — I&apos;m Chantel. I started Vegan &amp; Boujee because
              I was tired of the beauty industry telling women they had to pick
              a side: glamorous or conscious, soft or powerful, boujee or
              kind-hearted.
            </p>
          </Reveal>
          <Reveal variant="text" delay={3}>
            <div className="founder-quote founder-quote--signature">
              <blockquote>
                &ldquo;{CHANTEL.signatureQuote}&rdquo;
              </blockquote>
              <cite>— {CHANTEL.name}</cite>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={4}>
            <Link href="/about" className="founder-story-link motion-glow">
              Read the full story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
