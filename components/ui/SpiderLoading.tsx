'use client';

import { useEffect, useState } from 'react';
import AnimatedSpider from './AnimatedSpider';

interface SpiderLoadingProps {
  message?: string;
}

export default function SpiderLoading({ message = "Loading..." }: SpiderLoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Spider Web Background - Building Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(50%, 50%)">
            {/* Radial lines - appear based on progress */}
            {progress > 10 && (
              <line x1="0" y1="0" x2="0" y2="-400" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 20) - 10) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 20 && (
              <line x1="0" y1="0" x2="283" y2="-283" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 30) - 20) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 30 && (
              <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 40) - 30) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 40 && (
              <line x1="0" y1="0" x2="283" y2="283" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 50) - 40) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 50 && (
              <line x1="0" y1="0" x2="0" y2="400" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 60) - 50) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 60 && (
              <line x1="0" y1="0" x2="-283" y2="283" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 70) - 60) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 70 && (
              <line x1="0" y1="0" x2="-400" y2="0" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 80) - 70) * 40} 
                className="transition-all duration-300" />
            )}
            {progress > 80 && (
              <line x1="0" y1="0" x2="-283" y2="-283" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="400" strokeDashoffset={400 - (Math.min(progress, 90) - 80) * 40} 
                className="transition-all duration-300" />
            )}
            
            {/* Circular rings - appear after radial lines */}
            {progress > 25 && (
              <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" 
                strokeDasharray="502" strokeDashoffset={502 - (Math.min(progress, 40) - 25) * 33.5} 
                className="transition-all duration-300" />
            )}
            {progress > 45 && (
              <circle cx="0" cy="0" r="150" fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="2" 
                strokeDasharray="942" strokeDashoffset={942 - (Math.min(progress, 60) - 45) * 62.8} 
                className="transition-all duration-300" />
            )}
            {progress > 65 && (
              <circle cx="0" cy="0" r="220" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" 
                strokeDasharray="1382" strokeDashoffset={1382 - (Math.min(progress, 80) - 65) * 92.1} 
                className="transition-all duration-300" />
            )}
            {progress > 85 && (
              <circle cx="0" cy="0" r="290" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2" 
                strokeDasharray="1822" strokeDashoffset={1822 - (Math.min(progress, 100) - 85) * 121.5} 
                className="transition-all duration-300" />
            )}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Spider with Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-32 h-32 mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center">
            <AnimatedSpider state="building" className="w-24 h-24" />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          {message}
        </h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Glow effect */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-white/60 text-sm font-semibold">
          {progress}%
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Status Messages */}
        <div className="mt-8 text-white/40 text-sm">
          {progress < 30 && "Initializing AI engine..."}
          {progress >= 30 && progress < 60 && "Building neural networks..."}
          {progress >= 60 && progress < 90 && "Weaving your experience..."}
          {progress >= 90 && "Almost ready..."}
        </div>
      </div>
    </div>
  );
}
