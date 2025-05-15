'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time to prevent flickering
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
            />

            {/* Middle Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="absolute inset-2 rounded-full border-4 border-blue-400 border-t-transparent animate-spin-slow"
            />

            {/* Inner Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="absolute inset-4 rounded-full border-4 border-blue-300 border-t-transparent animate-spin-reverse"
            />

            {/* Center Logo or Text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-white">P</span>
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="absolute bottom-1/4 text-white text-lg font-medium"
          >
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              ...
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 