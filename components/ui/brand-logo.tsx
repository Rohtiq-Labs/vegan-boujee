import { BRAND_LOGO } from "@/data/assets";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export const BrandLogo = ({
  className,
  priority = false,
}: BrandLogoProps): React.JSX.Element => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={BRAND_LOGO}
      alt="Vegan & Boujee"
      width={220}
      height={48}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};
