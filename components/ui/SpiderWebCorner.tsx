interface SpiderWebCornerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  className?: string;
}

export default function SpiderWebCorner({ 
  position = 'top-right', 
  size = 'md',
  opacity = 0.15,
  className = '' 
}: SpiderWebCornerProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  const positionClasses = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0 scale-x-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-y-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-x-[-1] scale-y-[-1]'
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main structural radial threads from corner */}
        <line x1="120" y1="0" x2="120" y2="120" stroke="url(#webGradientCorner)" strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <line x1="120" y1="0" x2="0" y2="0" stroke="url(#webGradientCorner)" strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <line x1="120" y1="0" x2="0" y2="120" stroke="url(#webGradientCorner)" strokeWidth="1.8" opacity="0.8" strokeLinecap="round" />
        <line x1="120" y1="0" x2="30" y2="90" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />
        <line x1="120" y1="0" x2="50" y2="70" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />
        <line x1="120" y1="0" x2="70" y2="50" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />
        <line x1="120" y1="0" x2="90" y2="30" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />
        
        {/* Circular/Arc connecting threads */}
        <path d="M 120 20 L 110 10 L 100 0" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.8" fill="none" strokeLinecap="round" />
        <path d="M 120 40 L 105 25 L 90 15 L 75 8 L 60 0" stroke="url(#webGradientCorner)" strokeWidth="1.5" opacity="0.75" fill="none" strokeLinecap="round" />
        <path d="M 120 60 L 100 40 L 80 25 L 60 15 L 40 8 L 20 0" stroke="url(#webGradientCorner)" strokeWidth="1.4" opacity="0.7" fill="none" strokeLinecap="round" />
        <path d="M 120 80 L 95 55 L 70 35 L 50 22 L 35 12 L 22 5 L 10 0" stroke="url(#webGradientCorner)" strokeWidth="1.3" opacity="0.65" fill="none" strokeLinecap="round" />
        <path d="M 120 100 L 90 70 L 65 48 L 48 32 L 32 20 L 20 12 L 12 6 L 6 2 L 0 0" stroke="url(#webGradientCorner)" strokeWidth="1.2" opacity="0.6" fill="none" strokeLinecap="round" />
        
        {/* Connection nodes */}
        <circle cx="110" cy="10" r="2" fill="url(#webGradientCorner)" opacity="0.9" />
        <circle cx="100" cy="0" r="2" fill="url(#webGradientCorner)" opacity="0.9" />
        <circle cx="120" cy="20" r="2" fill="url(#webGradientCorner)" opacity="0.9" />
        <circle cx="120" cy="40" r="2" fill="url(#webGradientCorner)" opacity="0.9" />
        <circle cx="105" cy="25" r="2" fill="url(#webGradientCorner)" opacity="0.85" />
        <circle cx="90" cy="15" r="2" fill="url(#webGradientCorner)" opacity="0.85" />
        <circle cx="60" cy="0" r="2" fill="url(#webGradientCorner)" opacity="0.85" />
        <circle cx="120" cy="60" r="2" fill="url(#webGradientCorner)" opacity="0.85" />
        <circle cx="100" cy="40" r="2" fill="url(#webGradientCorner)" opacity="0.8" />
        <circle cx="80" cy="25" r="2" fill="url(#webGradientCorner)" opacity="0.8" />
        
        <defs>
          <linearGradient id="webGradientCorner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4169E1" />
            <stop offset="100%" stopColor="#6B46C1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
