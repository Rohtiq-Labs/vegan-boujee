import { ASSETS } from "@/data/assets";
import { CHANTEL } from "@/data/site-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { MediaVisual } from "@/components/ui/media-visual";

export const Hero = (): React.JSX.Element => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <MediaVisual src={ASSETS.hero} ariaLabel="Vegan and Boujee hero" priority />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-initial" aria-hidden>
        V
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">
          {CHANTEL.name} · {CHANTEL.location}
        </p>
        <h1>
          Beauty That
          <br />
          <em>Transforms</em>
          <br />
          More Than Hair
        </h1>
        <p className="hero-voice">&ldquo;{CHANTEL.heroVoice}&rdquo;</p>
        <a href="/services" className="btn-primary">
          Begin Your Transformation
          <ArrowIcon />
        </a>
      </div>
      <div className="hero-scroll-hint" aria-hidden>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};
