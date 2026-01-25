'use client';

import { useEffect, useState } from 'react';

type SpiderState = 'idle' | 'listening' | 'thinking' | 'building' | 'celebrating';

interface AnimatedSpiderProps {
  state: SpiderState;
  className?: string;
}

export default function AnimatedSpider({ state, className = "w-10 h-10" }: AnimatedSpiderProps) {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [webProgress, setWebProgress] = useState(0);
  const [blinkState, setBlinkState] = useState(false);
  const [spiderPosition, setSpiderPosition] = useState({ x: 60, y: 60, rotation: 0 });

  // Eye tracking animation when listening - more dynamic
  useEffect(() => {
    if (state === 'listening') {
      const interval = setInterval(() => {
        const time = Date.now() / 1000;
        setEyePosition({
          x: Math.sin(time * 2) * 3,
          y: Math.cos(time * 1.5) * 2
        });
      }, 30);
      return () => clearInterval(interval);
    } else if (state === 'building') {
      // Eyes follow web construction
      const interval = setInterval(() => {
        const angle = (Date.now() / 500) % (Math.PI * 2);
        setEyePosition({
          x: Math.cos(angle) * 2,
          y: 1 + Math.sin(angle) * 2
        });
      }, 50);
      return () => clearInterval(interval);
    } else if (state === 'celebrating') {
      // Eyes wide and happy
      setEyePosition({ x: 0, y: -1 });
    } else {
      setEyePosition({ x: 0, y: 0 });
    }
  }, [state]);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkState(true);
      setTimeout(() => setBlinkState(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Web building animation - spider moves to build web
  useEffect(() => {
    if (state === 'building') {
      setWebProgress(0);
      const interval = setInterval(() => {
        setWebProgress(prev => {
          if (prev >= 100) return 100;
          
          // Move spider to different positions as it builds
          const progress = prev + 2;
          
          // Spider moves in a circular pattern around the web
          if (progress < 50) {
            // Building radial lines - move outward
            const angle = (progress / 50) * Math.PI * 2;
            setSpiderPosition({
              x: 60 + Math.cos(angle) * 20,
              y: 60 + Math.sin(angle) * 20,
              rotation: (angle * 180 / Math.PI) + 90
            });
          } else {
            // Building circular rings - move in circles
            const ringProgress = (progress - 50) / 50;
            const angle = ringProgress * Math.PI * 4; // Multiple rotations
            const radius = 15 + ringProgress * 20;
            setSpiderPosition({
              x: 60 + Math.cos(angle) * radius,
              y: 60 + Math.sin(angle) * radius,
              rotation: (angle * 180 / Math.PI) + 90
            });
          }
          
          return progress;
        });
      }, 50);
      return () => clearInterval(interval);
    } else {
      setWebProgress(0);
      setSpiderPosition({ x: 60, y: 60, rotation: 0 });
    }
  }, [state]);

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Web being built - Spider actively constructs it */}
        {state === 'building' && webProgress > 0 && (
          <g>
            {/* Radial support lines - drawn as spider moves */}
            <g opacity="0.8">
              {webProgress > 5 && (
                <line x1="60" y1="60" x2="60" y2="10" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 12) - 5) * 7} />
              )}
              {webProgress > 12 && (
                <line x1="60" y1="60" x2="95" y2="25" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 19) - 12) * 7} />
              )}
              {webProgress > 19 && (
                <line x1="60" y1="60" x2="110" y2="60" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 26) - 19) * 7} />
              )}
              {webProgress > 26 && (
                <line x1="60" y1="60" x2="95" y2="95" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 33) - 26) * 7} />
              )}
              {webProgress > 33 && (
                <line x1="60" y1="60" x2="60" y2="110" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 40) - 33) * 7} />
              )}
              {webProgress > 40 && (
                <line x1="60" y1="60" x2="25" y2="95" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 47) - 40) * 7} />
              )}
              {webProgress > 47 && (
                <line x1="60" y1="60" x2="10" y2="60" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 54) - 47) * 7} />
              )}
              {webProgress > 54 && (
                <line x1="60" y1="60" x2="25" y2="25" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="50" strokeDashoffset={50 - (Math.min(webProgress, 61) - 54) * 7} />
              )}
            </g>
            
            {/* Circular rings - spider weaves them */}
            <g opacity="0.8">
              {webProgress > 61 && (
                <circle cx="60" cy="60" r="15" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="94.2" strokeDashoffset={94.2 - (Math.min(webProgress, 70) - 61) * 10.5} 
                  fill="none" />
              )}
              {webProgress > 70 && (
                <circle cx="60" cy="60" r="25" stroke="url(#webGradient)" strokeWidth="2" 
                  strokeDasharray="157" strokeDashoffset={157 - (Math.min(webProgress, 80) - 70) * 15.7} 
                  fill="none" />
              )}
              {webProgress > 80 && (
                <circle cx="60" cy="60" r="35" stroke="url(#webGradient)" strokeWidth="1.8" 
                  strokeDasharray="220" strokeDashoffset={220 - (Math.min(webProgress, 90) - 80) * 22} 
                  fill="none" />
              )}
              {webProgress > 90 && (
                <circle cx="60" cy="60" r="45" stroke="url(#webGradient)" strokeWidth="1.5" 
                  strokeDasharray="283" strokeDashoffset={283 - (Math.min(webProgress, 100) - 90) * 28.3} 
                  fill="none" />
              )}
            </g>
            
            {/* Connection nodes at intersections - appear as web completes */}
            {webProgress > 95 && (
              <>
                <circle cx="60" cy="35" r="2" fill="url(#webGradient)" className="animate-node-pop" />
                <circle cx="78" cy="45" r="2" fill="url(#webGradient)" className="animate-node-pop" style={{ animationDelay: '0.05s' }} />
                <circle cx="78" cy="75" r="2" fill="url(#webGradient)" className="animate-node-pop" style={{ animationDelay: '0.1s' }} />
                <circle cx="60" cy="85" r="2" fill="url(#webGradient)" className="animate-node-pop" style={{ animationDelay: '0.15s' }} />
                <circle cx="42" cy="75" r="2" fill="url(#webGradient)" className="animate-node-pop" style={{ animationDelay: '0.2s' }} />
                <circle cx="42" cy="45" r="2" fill="url(#webGradient)" className="animate-node-pop" style={{ animationDelay: '0.25s' }} />
              </>
            )}
          </g>
        )}

        {/* Celebrating stars */}
        {state === 'celebrating' && (
          <g>
            <path d="M 60 20 L 62 26 L 68 26 L 63 30 L 65 36 L 60 32 L 55 36 L 57 30 L 52 26 L 58 26 Z" 
              fill="#FFD700" className="animate-spin-star" />
            <path d="M 30 40 L 32 44 L 36 44 L 33 47 L 34 51 L 30 48 L 26 51 L 27 47 L 24 44 L 28 44 Z" 
              fill="#FFD700" className="animate-spin-star" style={{ animationDelay: '0.2s' }} />
            <path d="M 90 40 L 92 44 L 96 44 L 93 47 L 94 51 L 90 48 L 86 51 L 87 47 L 84 44 L 88 44 Z" 
              fill="#FFD700" className="animate-spin-star" style={{ animationDelay: '0.4s' }} />
          </g>
        )}

        {/* Spider body - moves while building */}
        <g 
          transform={state === 'building' ? `translate(${spiderPosition.x - 60}, ${spiderPosition.y - 60}) rotate(${spiderPosition.rotation}, 60, 60)` : ''}
          className={state === 'listening' ? 'animate-bob' : state === 'celebrating' ? 'animate-bounce-happy' : ''}
        >
          <ellipse cx="60" cy="74" rx="16" ry="18" fill="url(#spiderBodyGradient)" className={state === 'thinking' ? 'animate-breathe' : ''} />
          <ellipse cx="58" cy="70" rx="12" ry="14" fill="url(#spiderShineGradient)" opacity="0.4" />
          <ellipse cx="60" cy="50" rx="13" ry="15" fill="url(#spiderBodyGradient)" className={state === 'thinking' ? 'animate-breathe' : ''} />
          <ellipse cx="58" cy="47" rx="10" ry="11" fill="url(#spiderShineGradient)" opacity="0.4" />

          {/* Legs */}
          <g className={state === 'listening' ? 'animate-wiggle-legs-active' : state === 'building' ? 'animate-work-legs' : 'animate-wiggle-legs-idle'}>
            <path d="M 50 46 Q 32 38 22 32" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 48 52 Q 26 48 16 46" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 48 62 Q 26 70 16 78" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 50 70 Q 32 82 24 92" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 70 46 Q 88 38 98 32" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 72 52 Q 94 48 104 46" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 72 62 Q 94 70 104 78" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 70 70 Q 88 82 96 92" stroke="url(#spiderBodyGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>

          <ellipse cx="60" cy="42" rx="11" ry="10" fill="url(#spiderBodyGradient)" />

          {/* HUGE EXPRESSIVE Eyes */}
          <g>
            {/* Left main eye - MUCH BIGGER */}
            <ellipse cx="53" cy="42" rx="7" ry={blinkState ? "0.5" : "7.5"} fill="#0a0a0a" className="transition-all duration-150" />
            {!blinkState && (
              <>
                <circle cx={53 + eyePosition.x} cy={42 + eyePosition.y} r="4.5" fill="white" />
                <circle cx={53 + eyePosition.x + 1.2} cy={42 + eyePosition.y - 1.2} r="2" fill="white" opacity="0.95" />
                <circle cx={53 + eyePosition.x - 0.8} cy={42 + eyePosition.y + 0.8} r="1.2" fill="#60A5FA" opacity="0.7" />
                <circle cx={53 + eyePosition.x + 0.5} cy={42 + eyePosition.y + 0.5} r="0.6" fill="#3B82F6" opacity="0.5" />
              </>
            )}
            
            {/* Right main eye - MUCH BIGGER */}
            <ellipse cx="67" cy="42" rx="7" ry={blinkState ? "0.5" : "7.5"} fill="#0a0a0a" className="transition-all duration-150" />
            {!blinkState && (
              <>
                <circle cx={67 + eyePosition.x} cy={42 + eyePosition.y} r="4.5" fill="white" />
                <circle cx={67 + eyePosition.x + 1.2} cy={42 + eyePosition.y - 1.2} r="2" fill="white" opacity="0.95" />
                <circle cx={67 + eyePosition.x - 0.8} cy={42 + eyePosition.y + 0.8} r="1.2" fill="#60A5FA" opacity="0.7" />
                <circle cx={67 + eyePosition.x + 0.5} cy={42 + eyePosition.y + 0.5} r="0.6" fill="#3B82F6" opacity="0.5" />
              </>
            )}
            
            {/* Secondary eyes - bigger */}
            <circle cx="47" cy="38" r="3" fill="#0a0a0a" />
            <circle cx={47 + eyePosition.x * 0.6} cy={38 + eyePosition.y * 0.6} r="1.5" fill="white" />
            
            <circle cx="73" cy="38" r="3" fill="#0a0a0a" />
            <circle cx={73 + eyePosition.x * 0.6} cy={38 + eyePosition.y * 0.6} r="1.5" fill="white" />

            {/* Side eyes */}
            <circle cx="44" cy="44" r="2.5" fill="#0a0a0a" />
            <circle cx={44 + eyePosition.x * 0.4} cy={44 + eyePosition.y * 0.4} r="1.1" fill="white" />
            
            <circle cx="76" cy="44" r="2.5" fill="#0a0a0a" />
            <circle cx={76 + eyePosition.x * 0.4} cy={44 + eyePosition.y * 0.4} r="1.1" fill="white" />

            {/* Top eyes */}
            <circle cx="53" cy="34" r="2.5" fill="#0a0a0a" />
            <circle cx={53 + eyePosition.x * 0.4} cy={34 + eyePosition.y * 0.4} r="1.1" fill="white" />
            
            <circle cx="67" cy="34" r="2.5" fill="#0a0a0a" />
            <circle cx={67 + eyePosition.x * 0.4} cy={34 + eyePosition.y * 0.4} r="1.1" fill="white" />
          </g>

          <g opacity="0.7">
            <path d="M 56 48 L 55 52" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 64 48 L 65 52" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Spinnerets at back (for web making) - more visible */}
          {state === 'building' && (
            <g className="animate-pulse-fast">
              <circle cx="60" cy="90" r="2.5" fill="url(#spiderBodyGradient)" opacity="0.9" />
              <circle cx="60" cy="90" r="1.5" fill="white" opacity="0.6" className="animate-spinnerets-work" />
            </g>
          )}
        </g>

        {/* Thought bubbles for thinking state */}
        {state === 'thinking' && (
          <g className="animate-float-up-fast">
            <circle cx="75" cy="25" r="4" fill="white" opacity="0.8" />
            <circle cx="82" cy="18" r="6" fill="white" opacity="0.8" />
            <circle cx="92" cy="15" r="8" fill="white" opacity="0.8" />
            <text x="92" y="18" fontSize="10" fill="#0C6EFD" textAnchor="middle" fontWeight="bold">?</text>
          </g>
        )}

        <defs>
          <linearGradient id="spiderBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C6EFD" />
            <stop offset="100%" stopColor="#0A58CA" />
          </linearGradient>
          <linearGradient id="spiderShineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C6EFD" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#0A58CA" />
          </linearGradient>
        </defs>
      </svg>
      
      <style jsx>{`
        @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @keyframes wiggle-legs-idle { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(0.5deg); } }
        @keyframes wiggle-legs-active { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-2deg); } 75% { transform: rotate(2deg); } }
        @keyframes work-legs { 0%, 100% { transform: rotate(0deg) scale(1); } 25% { transform: rotate(-3deg) scale(1.02); } 75% { transform: rotate(3deg) scale(1.02); } }
        @keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes bounce-happy { 0%, 100% { transform: translateY(0) scale(1); } 25% { transform: translateY(-8px) scale(1.05); } 50% { transform: translateY(0) scale(1); } 75% { transform: translateY(-4px) scale(1.02); } }
        @keyframes float-up-fast { 0% { opacity: 0; transform: translateY(15px) scale(0.8); } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; transform: translateY(-15px) scale(1.2); } }
        @keyframes node-pop { 0% { transform: scale(0); opacity: 0; } 50% { transform: scale(1.5); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes spinnerets-work { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.3); opacity: 1; } }
        @keyframes spin-star { 0% { transform: rotate(0deg) scale(0); } 50% { transform: rotate(180deg) scale(1.2); } 100% { transform: rotate(360deg) scale(1); } }
        @keyframes pulse-fast { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-breathe { animation: breathe 1.5s ease-in-out infinite; transform-origin: center; }
        .animate-wiggle-legs-idle { animation: wiggle-legs-idle 3s ease-in-out infinite; transform-origin: 60px 60px; }
        .animate-wiggle-legs-active { animation: wiggle-legs-active 0.6s ease-in-out infinite; transform-origin: 60px 60px; }
        .animate-work-legs { animation: work-legs 0.4s ease-in-out infinite; transform-origin: 60px 60px; }
        .animate-bob { animation: bob 1s ease-in-out infinite; }
        .animate-bounce-happy { animation: bounce-happy 0.8s ease-in-out infinite; }
        .animate-float-up-fast { animation: float-up-fast 1.5s ease-in-out infinite; }
        .animate-node-pop { animation: node-pop 0.4s ease-out forwards; }
        .animate-spinnerets-work { animation: spinnerets-work 0.3s ease-in-out infinite; }
        .animate-spin-star { animation: spin-star 1s ease-out forwards; transform-origin: 60px 20px; }
        .animate-pulse-fast { animation: pulse-fast 0.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
