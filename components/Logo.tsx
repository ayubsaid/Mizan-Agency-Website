type LogoProps = {
  className?: string;
};

// MIZAN wordmark. It uses currentColor, so set the colour with a text-* class.
export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 172 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 38V2l16 36L34 2v36M46 2v36M58 2h30L58 38h30M98 38L114 2l16 36M142 38V2l28 36V2" />
    </svg>
  );
}
