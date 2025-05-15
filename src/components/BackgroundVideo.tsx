'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface BackgroundVideoProps {
  darkVideoUrl: string;
  lightVideoUrl: string;
}

export default function BackgroundVideo({ darkVideoUrl, lightVideoUrl }: BackgroundVideoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src={theme === 'dark' ? darkVideoUrl : lightVideoUrl}
          type="video/mp4"
        />
      </video>
    </div>
  );
} 