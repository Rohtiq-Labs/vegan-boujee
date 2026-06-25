type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export const SectionEyebrow = ({
  children,
  className = "",
  centered = false,
}: SectionEyebrowProps): React.JSX.Element => {
  return (
    <p
      className={`mb-6 flex items-center gap-3.5 text-[0.67rem] uppercase tracking-[0.35em] text-brand-accent before:block before:h-px before:w-[30px] before:bg-brand-accent ${centered ? "justify-center" : ""} ${className}`.trim()}
    >
      {children}
    </p>
  );
};
