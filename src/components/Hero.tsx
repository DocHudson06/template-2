'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
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
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-2"
            >
              <motion.a
                href="https://github.com/Jyothivardhana0009"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:vardhanrao9849@gmail.com"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 text-lg font-semibold"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end items-start"
          >
            <div className="relative w-[28rem] h-[28rem] min-w-[18rem] min-h-[18rem]">
              <Image
                src="/images/profile.jpg"
                alt="Jyothi Vardhana Rao Metta"
                fill
                sizes="(max-width: 768px) 448px, 448px"
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
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 