export const WaveDivider = ({
  color = "hsl(var(--background))",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) => (
  <div className={`wave-divider ${flip ? "rotate-180" : ""} ${className}`} style={{ marginTop: "-2px", marginBottom: "-2px" }}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "80px" }}>
      <path
        d="M0,40 C240,100 480,0 720,60 C960,120 1200,20 1440,80 L1440,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const HillDivider = ({
  color = "hsl(var(--background))",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <div className={`wave-divider ${className}`} style={{ marginTop: "-2px", marginBottom: "-2px" }}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "100px" }}>
      <ellipse cx="360" cy="120" rx="400" ry="80" fill={color} />
      <ellipse cx="1000" cy="120" rx="500" ry="100" fill={color} />
      <rect x="0" y="100" width="1440" height="20" fill={color} />
    </svg>
  </div>
);

export default WaveDivider;
