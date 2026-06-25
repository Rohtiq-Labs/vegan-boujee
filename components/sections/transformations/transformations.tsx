"use client";

import { useEffect, useRef } from "react";
import { transformStories } from "@/data/site-content";
import { MediaVisual } from "@/components/ui/media-visual";
import { Reveal } from "@/components/ui/reveal";

export const Transformations = (): React.JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const dots = document.querySelectorAll(".dot");

    const updateDots = (): void => {
      const cards = track.querySelectorAll(".transform-card");
      if (!cards.length) return;
      const cardW = (cards[0] as HTMLElement).offsetWidth + 16;
      const idx = Math.round(track.scrollLeft / cardW);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };

    const onScroll = (): void => updateDots();
    track.addEventListener("scroll", onScroll, { passive: true });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const cards = track.querySelectorAll(".transform-card");
        if (!cards.length) return;
        const cardW = (cards[0] as HTMLElement).offsetWidth + 16;
        const index = parseInt((dot as HTMLElement).dataset.index ?? "0", 10);
        track.scrollTo({ left: index * cardW, behavior: "smooth" });
      });
    });

    const onMouseDown = (e: MouseEvent): void => {
      isDragging.current = true;
      startX.current = e.pageX;
      startScroll.current = track.scrollLeft;
      track.style.cursor = "grabbing";
    };

    const onMouseUp = (): void => {
      isDragging.current = false;
      track.style.cursor = "grab";
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!isDragging.current) return;
      track.scrollLeft = startScroll.current - (e.pageX - startX.current);
    };

    track.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="transformations" id="work">
      <div className="transform-header">
        <div className="transform-header-text">
          <Reveal variant="text">
            <p className="section-label section-label--light">The Work</p>
          </Reveal>
          <Reveal variant="text" delay={1}>
            <h2>
              The Version of You
              <br />
              You&apos;ve Been <em>Waiting For.</em>
            </h2>
          </Reveal>
        </div>
      </div>
      <div className="carousel-track" id="carousel" ref={trackRef}>
        {transformStories.map((story) => (
          <article key={story.theme} className="transform-card motion-lift">
            <div className="card-media interactive-media">
              <MediaVisual src={story.src} ariaLabel={story.ariaLabel} />
            </div>
            <div className="card-overlay">
              <span className="card-theme">{story.theme}</span>
              <p className="card-outcome">{story.outcome}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="transform-footer">
        <div className="carousel-dots" id="dots">
          {transformStories.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === 0 ? "active" : ""}`}
              data-index={index}
              role="button"
              tabIndex={0}
              aria-label={`Go to transformation story ${index + 1}`}
            />
          ))}
        </div>
        <a href="#moments" className="btn-ghost">
          Read Their Words →
        </a>
      </div>
    </section>
  );
};
