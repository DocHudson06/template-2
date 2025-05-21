'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedJobTitlesProps {
  titles: string[];
  className?: string;
  prefix?: string;
}

const titleColors: Record<string, string> = {
  'Full Stack Developer': 'text-blue-600 dark:text-blue-400',
  'Cloud Engineer': 'text-purple-600 dark:text-purple-400',
  'DevOps Enthusiast': 'text-pink-600 dark:text-pink-400',
  'UI/UX Designer': 'text-blue-600 dark:text-blue-400',
  'Problem Solver': 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400'
};

export default function AnimatedJobTitles({ titles, className = '', prefix = '' }: AnimatedJobTitlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className={`relative h-[1.5em] ${className}`}>
      <span className="text-gray-600 dark:text-gray-300 ml-8 font-semibold">{prefix}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`absolute left-[9rem] font-bold tracking-wide ${titleColors[titles[currentIndex]]}`}
        >
          {titles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
} 