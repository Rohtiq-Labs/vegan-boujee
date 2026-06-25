type MediaVideoProps = {
  src: string;
  ariaLabel: string;
};

export const MediaVideo = ({
  src,
  ariaLabel,
}: MediaVideoProps): React.JSX.Element => {
  return (
    <video
      className="media-video"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    />
  );
};
