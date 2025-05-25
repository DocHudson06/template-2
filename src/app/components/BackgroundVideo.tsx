'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function BackgroundVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        src={theme === 'dark' ? '/videos/bg-dark.mp4' : '/videos/bg-light.mp4'}
      />
    </div>
  );
} 