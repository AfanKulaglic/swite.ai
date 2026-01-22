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
      {/* Radial threads from center */}
      <line x1="16" y1="16" x2="16" y2="2" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="27.86" y2="6.14" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="30" y2="16" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="27.86" y2="25.86" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="16" y2="30" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="4.14" y2="25.86" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="2" y2="16" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <line x1="16" y1="16" x2="4.14" y2="6.14" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      
      {/* Concentric circles - web rings */}
      <circle cx="16" cy="16" r="4" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.7" />
      <circle cx="16" cy="16" r="7" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.6" />
      <circle cx="16" cy="16" r="10" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.5" />
      <circle cx="16" cy="16" r="13" stroke="url(#webGradient)" strokeWidth="0.8" opacity="0.4" />
      
      {/* Center point - web anchor */}
      <circle cx="16" cy="16" r="1.5" fill="url(#webGradient)" opacity="0.9" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E5E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
