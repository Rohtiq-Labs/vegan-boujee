import { CHANTEL } from "@/data/site-content";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";

export const Booking = (): React.JSX.Element => {
  return (
    <section className="booking" id="book">
      <div className="petal petal-1" aria-hidden />
      <div className="petal petal-2" aria-hidden />
      <div className="booking-inner">
        <Reveal>
          <div className="booking-rosette">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
              <path
                d="M14 2l2.2 6.6L23 7l-4.8 4.8 1.6 7.2L14 16l-5.8 3 1.6-7.2L5 7l6.8 1.6L14 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2>
            Your Chair Is
            <br />
            <em>Waiting.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="booking-voice">
            &ldquo;{CHANTEL.bookingNote}&rdquo;
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="booking-actions">
            <a href="/contact" className="btn-primary">
              Book With Chantel
              <ArrowIcon />
            </a>
            <a href="/about" className="btn-outline">
              Read Her Story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
