'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';

export default function BackgroundVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle video aspect ratio and positioning
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    
    // Function to handle video positioning
    const handleVideoPosition = () => {
      const videoAspectRatio = video.videoWidth / video.videoHeight;
      const windowAspectRatio = window.innerWidth / window.innerHeight;

      if (videoAspectRatio > windowAspectRatio) {
        // Video is wider than window - fit to height
        video.style.width = 'auto';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.objectPosition = 'center center';
      } else {
        // Video is taller than window - fit to width
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.objectFit = 'cover';
        video.style.objectPosition = 'center center';
      }
    };

    // Initial positioning
    video.addEventListener('loadedmetadata', handleVideoPosition);
    window.addEventListener('resize', handleVideoPosition);

    return () => {
      video.removeEventListener('loadedmetadata', handleVideoPosition);
      window.removeEventListener('resize', handleVideoPosition);
    };
  }, []);

  if (!mounted) return null;

  return (
    // Container with z-index 5 - sits above global background (z-0) but below main content (z-10+)
    <div className="fixed inset-0 w-full h-full overflow-hidden z-5 pointer-events-none">
      <video
        ref={videoRef}
        src={theme === 'dark' ? '/videos/bg-dark.mp4' : '/videos/bg-light.mp4'}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
      />
    </div>
  );
} 