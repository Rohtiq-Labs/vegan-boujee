"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export const ParallaxLayer = ({
  children,
  className = "",
  speed = 0.18,
}: ParallaxLayerProps): React.JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || speed === 0) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = (): void => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - viewportCenter) * speed;
      el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };

    const onScroll = (): void => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, speed]);

  return (
    <div
      ref={ref}
      className={`parallax-layer ${className}`.trim()}
      data-parallax={speed > 0 && !reduced ? "true" : undefined}
    >
      {children}
    </div>
  );
};
