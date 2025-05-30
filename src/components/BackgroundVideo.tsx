'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="background-video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
        src={theme === 'dark' ? '/videos/bg-dark.mp4' : '/videos/bg-light.mp4'}
      />
    </div>
  );
} 