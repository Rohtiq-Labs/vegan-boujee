export const BRAND_LOGO = "/logo/vegan.png";

export const VIDEOS = [
  "/assets/videos/video-01.mp4",
  "/assets/videos/video-02.mp4",
  "/assets/videos/video-03.mp4",
  "/assets/videos/video-04.mp4",
  "/assets/videos/video-05.mp4",
  "/assets/videos/video-06.mp4",
  "/assets/videos/video-07.mp4",
] as const;

const imagePath = (filename: string): string =>
  encodeURI(`/images/${filename}`);

export const IMAGES = {
  hairServices: imagePath("HAIR+SERVICES.webp"),
  team: imagePath("Team.webp"),
  studio: imagePath("IMG_9757.webp"),
  founderPortrait: imagePath("A910F163-BC21-4ED7-9A13-9629A3FDCBEF.webp"),
  work: [
    imagePath("image-asset.webp"),
    imagePath("image-asset (1).webp"),
    imagePath("image-asset (2).webp"),
    imagePath("image-asset (3).webp"),
    imagePath("image-asset (4).webp"),
    imagePath("image-asset (5).webp"),
    imagePath("image-asset (6).webp"),
    imagePath("image-asset (7).webp"),
    imagePath("image-asset (8).webp"),
  ],
} as const;

export type VideoSrc = (typeof VIDEOS)[number];
export type ImageSrc =
  | typeof IMAGES.hairServices
  | typeof IMAGES.team
  | typeof IMAGES.studio
  | typeof IMAGES.founderPortrait
  | (typeof IMAGES.work)[number];

export type MediaSrc = VideoSrc | ImageSrc;

export const isVideoSrc = (src: MediaSrc): src is VideoSrc =>
  src.endsWith(".mp4");

export const ASSETS = {
  hero: VIDEOS[5],
  heroImage: IMAGES.studio,
  studio: IMAGES.studio,
  founder: IMAGES.team,
  team: IMAGES.team,
  founderPortrait: IMAGES.founderPortrait,
  philosophy: IMAGES.team,
  clientMoments: IMAGES.work[1],
  transformations: [
    IMAGES.work[0],
    IMAGES.work[1],
    IMAGES.work[2],
    IMAGES.work[3],
    IMAGES.work[4],
  ],
  gallery: [
    IMAGES.work[0],
    IMAGES.work[1],
    IMAGES.work[2],
    IMAGES.work[3],
    IMAGES.work[4],
    IMAGES.work[5],
    IMAGES.work[6],
    IMAGES.work[7],
    IMAGES.work[8],
  ],
  hairServices: IMAGES.hairServices,
  booking: VIDEOS[2],
  videos: {
    hero: VIDEOS[5],
    founder: VIDEOS[1],
    transformations: [VIDEOS[2], VIDEOS[3], VIDEOS[4], VIDEOS[5], VIDEOS[6]] as const,
  },
} as const;

export const getVideo = (index: number): VideoSrc =>
  VIDEOS[index % VIDEOS.length];

export const getWorkImage = (index: number): ImageSrc =>
  IMAGES.work[index % IMAGES.work.length];
