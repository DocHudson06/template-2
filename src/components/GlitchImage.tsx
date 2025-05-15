'use client';

import { useEffect, useState } from 'react';
import styles from './GlitchImage.module.css';

interface GlitchImageProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

export default function GlitchImage({ imageUrl, alt = 'Profile', className = '' }: GlitchImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Original Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Glitch Layers */}
      <div className={`absolute inset-0 ${styles.glitchContainer}`}>
        {/* Red Layer */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${styles.glitchLayer} ${styles.redLayer}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Green Layer */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${styles.glitchLayer} ${styles.greenLayer}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Blue Layer */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${styles.glitchLayer} ${styles.blueLayer}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Flash Layer */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${styles.glitchLayer} ${styles.flashLayer}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
} 