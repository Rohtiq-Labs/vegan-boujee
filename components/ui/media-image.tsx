type MediaImageProps = {
  src: string;
  ariaLabel: string;
  priority?: boolean;
};

export const MediaImage = ({
  src,
  ariaLabel,
  priority = false,
}: MediaImageProps): React.JSX.Element => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="media-image"
      src={src}
      alt={ariaLabel}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};
