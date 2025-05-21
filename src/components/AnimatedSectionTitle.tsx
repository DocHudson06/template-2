'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnimatedSectionTitleProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

const letterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 20,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: "easeIn"
    }
  })
};

export default function AnimatedSectionTitle({ title, icon: Icon, description }: AnimatedSectionTitleProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 650); // 0.65 second gap
    }, 3000); // Total animation cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <div className="flex">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "exit"}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
      {description && (
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      )}
    </div>
  );
} 