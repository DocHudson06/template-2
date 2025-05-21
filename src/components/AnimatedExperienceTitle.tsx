'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function AnimatedExperienceTitle() {
  const words = ["Work", "Experience"];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className="inline-flex items-center gap-3 text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      <motion.span className="flex gap-2">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </motion.h2>
  );
} 