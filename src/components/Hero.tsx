'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import AnimatedJobTitles from './AnimatedJobTitles';

export default function Hero() {
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-900 flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-start space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              >
                John Doe
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <AnimatedJobTitles 
                  titles={["Senior Data Engineer", "Full-stack Developer", "Tech Enthusiast"]} 
                  className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-semibold"
                />
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
                  Transforming complex data challenges into elegant solutions through innovative engineering and automation.
                </p>
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-800/70 transition-colors"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
} 