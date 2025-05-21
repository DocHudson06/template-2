'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { FaPlay, FaPause, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import styles from './BottomNavbar.module.css';

const BottomNavbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Create audio element
    const audio = new Audio('/audio/song.mp3');
    audio.loop = true;
    
    // Handle audio loading
    audio.addEventListener('canplaythrough', () => {
      setIsAudioReady(true);
    });

    // Handle audio errors
    audio.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
      setIsAudioReady(false);
    });

    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || !isAudioReady) return;
    
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        // Reset audio to start if it has ended
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
        }
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling audio:', error);
      setIsPlaying(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  return (
    <nav className={styles.bottomNavbar} role="navigation" aria-label="Bottom navigation">
      <div className={styles.navContainer}>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={!isAudioReady}
          className={styles.button}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <FaPause className={styles.icon} />
          ) : (
            <FaPlay className={styles.icon} />
          )}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={styles.button}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? (
            <BsSunFill className={styles.icon} />
          ) : (
            <BsMoonFill className={styles.icon} />
          )}
        </button>

        {/* Social Links */}
        <button
          onClick={() => openSocialLink('https://github.com/Jyothivardhana0009')}
          className={styles.button}
          aria-label="Visit GitHub profile"
        >
          <FaGithub className={styles.icon} />
        </button>
        <button
          onClick={() => openSocialLink('https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/')}
          className={styles.button}
          aria-label="Visit LinkedIn profile"
        >
          <FaLinkedin className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavbar; 