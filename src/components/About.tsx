'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <Image
                src="/images/about.jpg"
                alt="About Me"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m a passionate Full Stack Developer and Cloud Engineer with a strong foundation in both frontend and backend technologies. With expertise in modern web frameworks and cloud platforms, I specialize in building scalable and performant applications.
              </p>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Starting from my early days in software development, I've worked on diverse projects ranging from enterprise applications to cloud infrastructure. My experience spans across various industries, giving me a unique perspective on solving complex technical challenges.
              </p>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Develop modern web applications using React, Next.js, and TypeScript
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Design and implement scalable cloud solutions on AWS
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Build robust backend services with Node.js and Python
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Create efficient database architectures and optimize performance
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 