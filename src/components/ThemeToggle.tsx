'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 p-2 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          className="text-gray-800 dark:text-gray-200"
        >
          <path
            d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-6.998Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Sun Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          className="text-gray-800 dark:text-gray-200"
        >
          <path
            d="M12 2.25v-1.5m0 13.5v-1.5m0 13.5v-1.5m-9.75-9.75h-1.5m13.5 0h-1.5m-13.5 13.5h-1.5m13.5 0h-1.5m-9.75-9.75c0-1.125.914-2.25 2.25-2.25.75 0 1.5.375 2.25.75.75.375 1.5.75 2.25.75 1.336 0 2.25-1.125 2.25-2.25 0-1.125-.914-2.25-2.25-2.25-.75 0-1.5.375-2.25.75-.75.375-1.5.75-2.25.75-1.336 0-2.25-1.125-2.25-2.25zm0 13.5c0-1.125.914-2.25 2.25-2.25.75 0 1.5.375 2.25.75.75.375 1.5.75 2.25.75 1.336 0 2.25-1.125 2.25-2.25 0-1.125-.914-2.25-2.25-2.25-.75 0-1.5.375-2.25.75-.75.375-1.5.75-2.25.75-1.336 0-2.25-1.125-2.25-2.25z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
} 