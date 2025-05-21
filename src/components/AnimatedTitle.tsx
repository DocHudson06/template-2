'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export default function AnimatedTitle({ text, className = '' }: AnimatedTitleProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 * i,
        repeat: Infinity,
        repeatDelay: 1, // 1 second break between iterations
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={`inline-flex items-center gap-3 text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Changed to false to allow continuous animation
    >
      <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      <motion.span className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.h2>
  );
} 