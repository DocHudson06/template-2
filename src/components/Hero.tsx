'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Hi, I'm Jyothi Vardhana Rao Metta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer & Cloud Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build modern web applications and cloud solutions with a focus on performance, scalability, and user experience.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                href="https://github.com/Jyothivardhana0009"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:vardhanrao9849@gmail.com"
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20" />
              <Image
                src="/images/profile.jpg"
                alt="Jyothi Vardhana Rao Metta"
                fill
                sizes="(max-width: 768px) 256px, 256px"
                className="object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            href="#about"
            className="p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 