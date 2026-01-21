interface SpiderLogoProps {
  className?: string;
}

export default function SpiderLogo({ className = "w-8 h-8" }: SpiderLogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Web network - hexagonal structure */}
      <path 
        d="M16 4 L24 9 L24 19 L16 24 L8 19 L8 9 Z" 
        stroke="url(#spiderGradient)" 
        strokeWidth="1" 
        opacity="0.3"
      />
      
      {/* Inner web connections */}
      <line x1="16" y1="4" x2="16" y2="14" stroke="url(#spiderGradient)" strokeWidth="0.8" opacity="0.4" />
      <line x1="8" y1="9" x2="14" y2="14" stroke="url(#spiderGradient)" strokeWidth="0.8" opacity="0.4" />
      <line x1="24" y1="9" x2="18" y2="14" stroke="url(#spiderGradient)" strokeWidth="0.8" opacity="0.4" />
      <line x1="8" y1="19" x2="14" y2="18" stroke="url(#spiderGradient)" strokeWidth="0.8" opacity="0.4" />
      <line x1="24" y1="19" x2="18" y2="18" stroke="url(#spiderGradient)" strokeWidth="0.8" opacity="0.4" />
      
      {/* Spider center body - minimalistic circle */}
      <circle cx="16" cy="16" r="2.5" fill="url(#spiderGradient)" />
      
      {/* Spider legs - 4 pairs, minimal and geometric */}
      {/* Top left */}
      <path d="M14.5 14.5 L10 10" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Top right */}
      <path d="M17.5 14.5 L22 10" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Middle left */}
      <path d="M13.5 16 L7 16" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Middle right */}
      <path d="M18.5 16 L25 16" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom left */}
      <path d="M14.5 17.5 L10 22" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom right */}
      <path d="M17.5 17.5 L22 22" stroke="url(#spiderGradient)" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E5E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
