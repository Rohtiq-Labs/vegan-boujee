type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export const SectionTitle = ({
  children,
  className = "",
  centered = false,
}: SectionTitleProps): React.JSX.Element => {
  return (
    <h2
      className={`font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-light leading-[1.08] tracking-tight text-black [&_em]:italic [&_em]:text-brand-accent ${centered ? "text-center" : ""} ${className}`.trim()}
    >
      {children}
    </h2>
  );
};
