import { isVideoSrc, type MediaSrc } from "@/data/assets";
import { MediaImage } from "@/components/ui/media-image";
import { MediaVideo } from "@/components/ui/media-video";

type MediaVisualProps = {
  src: MediaSrc;
  ariaLabel: string;
  priority?: boolean;
};

export const MediaVisual = ({
  src,
  ariaLabel,
  priority = false,
}: MediaVisualProps): React.JSX.Element => {
  if (isVideoSrc(src)) {
    return <MediaVideo src={src} ariaLabel={ariaLabel} />;
  }

  return <MediaImage src={src} ariaLabel={ariaLabel} priority={priority} />;
};
