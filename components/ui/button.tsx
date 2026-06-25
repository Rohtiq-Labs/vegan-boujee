import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "cta-white";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-dark border-none px-10 py-[17px]",
  ghost:
    "border border-black/25 bg-transparent text-black hover:border-brand-accent hover:text-brand-accent px-10 py-4",
  "cta-white":
    "bg-white text-black hover:bg-brand-bg px-12 py-[17px]",
};

export const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps): React.JSX.Element => {
  const styles = `inline-block font-sans text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-300 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
};
