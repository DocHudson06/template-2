'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedJobTitlesProps {
  titles: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedJobTitles({ 
  titles, 
  interval = 3000, 
  className = '' 
}: AnimatedJobTitlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      // Wait for fade out animation to complete before changing title
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 300); // Half of the animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [titles.length, interval]);

  return (
    <div className={`relative h-8 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-xl font-semibold"
          >
            {titles[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
} 