'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import AnimatedJobTitles from './AnimatedJobTitles';

export default function Hero() {
  const { theme } = useTheme();

  const iconColor =
    theme === 'dark'
      ? 'text-blue-500'
      : 'text-pink-500';

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Floating triangle shapes */}
      <img
        src="/vectors/triangle.svg"
        alt="Triangle Shape"
        className="absolute top-10 left-10 w-32 h-32 floating pointer-events-none select-none"
        draggable={false}
      />
      <img
        src="/vectors/triangle.svg"
        alt="Triangle Shape"
        className="absolute bottom-10 right-10 w-24 h-24 floating pointer-events-none select-none"
        draggable={false}
      />

      <section id="home" className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col-reverse lg:flex-row gap-12 w-full">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold w-full text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center lg:text-left max-w-2xl"
            >
              Hi, I&apos;m<br />
              Jyothi Vardhana Rao Metta
            </motion.h1>

            <div className="flex max-[836px]:flex-col flex-row items-center gap-3 mb-6 text-lg md:text-xl font-semibold">
              <span className="whitespace-nowrap text-gray-600 dark:text-gray-300">I am a</span>
              <AnimatedJobTitles
                titles={[
                  "Data Pipeline Architect",
                  "Cloud Engineer",
                  "DevOps Enthusiast",
                  "Business Analyst",
                  "Problem Solver"
                ]}
                className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              />
            </div>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg text-center lg:text-left">
            I design and optimize data pipelines and cloud architectures, leveraging DevOps practices and analytical expertise to deliver scalable, efficient, and business-focused technology solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6 w-full justify-center lg:justify-start">
              <a
                href="#contactinfo"
                className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow transition
                  hover:from-blue-700 hover:to-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-2 rounded-full font-semibold text-blue-600 border-2 border-blue-600 bg-white hover:bg-blue-50 transition
                  hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                View My Work
              </a>
            </div>

            {/* Social Icons in one rounded container */}
            <div className="flex w-full items-center justify-center lg:justify-start">
              <div className="flex gap-5 p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-inner">
                <a
                  href="https://github.com/Jyothivardhana0009"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`transition rounded-full p-2 ${iconColor} hover:scale-110`}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`transition rounded-full p-2 ${iconColor} hover:scale-110`}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:jyothivardhana0009@gmail.com"
                  aria-label="Email"
                  className={`transition rounded-full p-2 ${iconColor} hover:scale-110`}
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://leetcode.com/problemset/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className={`transition rounded-full p-2 ${iconColor} hover:scale-110`}
                >
                  <SiLeetcode size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem]"
            >
              <motion.div 
                animate={{
                  y: [0, -15, 0, 15, 0],
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full"
              >
                <Image
                  src="/images/profile.png"
                  alt="Jyothi Vardhana Rao Metta"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 576px"
                  className="object-cover rounded-3xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
