type SocialIconProps = {
  className?: string;
};

export const InstagramIcon = ({
  className,
}: SocialIconProps): React.JSX.Element => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" />
  </svg>
);

export const TikTokIcon = ({
  className,
}: SocialIconProps): React.JSX.Element => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M16.5 3.5c.4 2.4 1.8 4.2 4 4.8v3.4c-1.6 0-3.1-.5-4.4-1.4v6.9c0 3.8-3.1 6.9-6.9 6.9S2.3 20 2.3 16.2s3.1-6.9 6.9-6.9c.4 0 .8 0 1.2.1v3.8a3.1 3.1 0 1 0 2.2 2.9V3.5h3.1z" />
  </svg>
);
