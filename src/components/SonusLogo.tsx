interface SonusLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SonusLogo({ variant = 'dark', className = '' }: SonusLogoProps) {
  const textColor = variant === 'light' ? '#ffffff' : '#0a1628';
  const arcColor = variant === 'light' ? '#60a5fa' : '#1a4fd6';

  return (
    <svg
      viewBox="0 0 220 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sonus Software Solutions"
    >
      {/* Arc above text */}
      <path
        d="M 20 38 Q 110 -8 200 38"
        fill="none"
        stroke={arcColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Arrow tip on arc */}
      <polygon
        points="198,32 205,38 196,42"
        fill={arcColor}
      />

      {/* S */}
      <text
        x="10"
        y="70"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="800"
        fontSize="38"
        fill={textColor}
        letterSpacing="2"
      >
        S
      </text>

      {/* Globe for O */}
      <g transform="translate(48, 42)">
        <circle cx="0" cy="0" r="16" fill="#dc2626" />
        {/* Globe latitude lines */}
        <ellipse cx="0" cy="0" rx="16" ry="7" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <ellipse cx="0" cy="-6" rx="12" ry="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
        <ellipse cx="0" cy="6" rx="12" ry="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
        {/* Globe longitude line */}
        <line x1="0" y1="-16" x2="0" y2="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        {/* Globe outline */}
        <circle cx="0" cy="0" r="16" fill="none" stroke={textColor === '#ffffff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.15)'} strokeWidth="1.5" />
        {/* Continent shapes */}
        <path d="M -8 -5 Q -4 -10 2 -8 Q 6 -6 4 -2 Q 0 2 -4 0 Q -8 -2 -8 -5Z" fill="rgba(255,255,255,0.35)" />
        <path d="M 2 4 Q 6 2 8 6 Q 8 10 4 11 Q 0 10 2 4Z" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* NUS */}
      <text
        x="70"
        y="70"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="800"
        fontSize="38"
        fill={textColor}
        letterSpacing="2"
      >
        NUS
      </text>
    </svg>
  );
}
