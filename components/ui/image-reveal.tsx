"use client";

import { Reveal, type RevealVariant } from "@/components/ui/reveal";
import { ParallaxLayer } from "@/components/ui/parallax-layer";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  parallax?: boolean;
  parallaxSpeed?: number;
  variant?: Extract<RevealVariant, "image" | "image-left" | "image-right">;
};

export const ImageReveal = ({
  children,
  className = "",
  delay = 0,
  parallax = true,
  parallaxSpeed = 0.1,
  variant = "image",
}: ImageRevealProps): React.JSX.Element => {
  return (
    <Reveal variant={variant} className={className} delay={delay}>
      <div className="image-reveal__frame interactive-media">
        <ParallaxLayer speed={parallax ? parallaxSpeed : 0}>
          <div className="image-reveal__inner">{children}</div>
        </ParallaxLayer>
      </div>
    </Reveal>
  );
};
