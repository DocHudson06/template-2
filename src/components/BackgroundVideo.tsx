'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface BackgroundVideoProps {
  darkVideoUrl: string;
  lightVideoUrl: string;
  className?: string;
}

export default function BackgroundVideo({
  darkVideoUrl,
  lightVideoUrl,
  className = '',
}: BackgroundVideoProps) {
  const darkVideoRef = useRef<HTMLVideoElement>(null);
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Ensure videos are playing when mounted
    if (darkVideoRef.current) {
      darkVideoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Autoplay prevented for dark video');
      });
    }
    if (lightVideoRef.current) {
      lightVideoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Autoplay prevented for light video');
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Dark Mode Video */}
      <video
        ref={darkVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={darkVideoUrl} type="video/mp4" />
      </video>

      {/* Light Mode Video */}
      <video
        ref={lightVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={lightVideoUrl} type="video/mp4" />
      </video>

      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
    </div>
  );
} 