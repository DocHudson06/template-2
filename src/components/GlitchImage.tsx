'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GlitchImage.module.css';

interface GlitchImageProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function GlitchImage({ 
  src, 
  alt = '', 
  className = '',
  priority = false 
}: GlitchImageProps) {
  const [mounted, setMounted] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    setMounted(true);
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  if (!mounted) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${styles.glitchWrapper} ${isGlitching ? styles.active : ''}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg shadow-xl"
          priority={priority}
        />
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={styles.glitchLayer}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
} 