'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './AnimatedJobTitles.module.css';

interface AnimatedJobTitlesProps {
  titles: string[];
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
}

const titleColors: Record<string, string> = {
  'Data Pipeline Architect': 'text-blue-600 dark:text-blue-400',
  'Cloud Engineer': 'text-purple-600 dark:text-purple-400',
  'DevOps Enthusiast': 'text-pink-600 dark:text-pink-400',
  'Business Analyst': 'text-blue-600 dark:text-blue-400',
  'Problem Solver': 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400'
};

export default function AnimatedJobTitles({ 
  titles, 
  prefix = "", 
  className = "", 
  style = {} 
}: AnimatedJobTitlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div
      className={`${styles.hero__titleRow} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <span className={styles.hero__prefix}>{prefix}</span>
      <div className={styles.hero__animatedTitle}>
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
              className={`font-bold tracking-wide ${titleColors[titles[currentIndex]]}`}
            >
              {titles[currentIndex]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 