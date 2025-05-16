'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:vardhanrao9849@gmail.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  vardhanrao9849@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18137979106"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-lg">📱</span>
                  +1-813-797-9106
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-lg">📍</span>
                Tampa, FL
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Jyothivardhana0009"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:vardhanrao9849@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200/20 dark:border-gray-700/20">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} Jyothi Vardhana Rao Metta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 