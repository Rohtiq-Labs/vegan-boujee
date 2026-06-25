"use client";

import { useInView } from "@/hooks/use-in-view";

export type RevealVariant =
  | "fade"
  | "text"
  | "image"
  | "image-left"
  | "image-right"
  | "left"
  | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  variant?: RevealVariant;
};

const delayClass: Record<NonNullable<RevealProps["delay"]>, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

const variantClass: Record<RevealVariant, string> = {
  fade: "reveal--fade",
  text: "reveal--text",
  image: "reveal--image",
  "image-left": "reveal--image reveal--image-left",
  "image-right": "reveal--image reveal--image-right",
  left: "reveal--left",
  right: "reveal--right",
};

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: RevealProps): React.JSX.Element => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${delayClass[delay]} ${inView ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};
