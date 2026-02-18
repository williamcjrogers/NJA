import Link from "next/link";

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Nicolas James Environmental - Home" className={`inline-block ${className}`}>
      <svg viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto md:h-12" role="img" aria-hidden="true">
        <text
          x="0"
          y="22"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="3"
          fill="#1A5C4F"
        >
          NICOLAS JAMES
        </text>
        <text
          x="0"
          y="42"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="5.5"
          fill="#2D2D2D"
        >
          ENVIRONMENTAL
        </text>
      </svg>
    </Link>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Nicolas James Environmental - Home" className={`inline-block ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" role="img" aria-hidden="true">
        <rect width="48" height="48" rx="8" fill="#1A5C4F" />
        <text
          x="50%"
          y="52%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          letterSpacing="1.5"
          fill="white"
        >
          NJE
        </text>
      </svg>
    </Link>
  );
}
