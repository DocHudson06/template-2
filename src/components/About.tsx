'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';
import AnimatedTitle from './AnimatedTitle';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      {/* 
        Main container with updated background colors:
        - Light mode: solid white (bg-white)
        - Dark mode: theme-matching dark background (dark:bg-[#1a1f2e])
        - Text colors remain black in light mode and white in dark mode for optimal readability
      */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#1a1f2e] text-black dark:text-white rounded-2xl p-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <AnimatedTitle text="About Me!!" />
          <p className="text-gray-600 dark:text-gray-300">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Static Image */}
          <div className="relative">
            <div className={styles.imageContainer}>
              <div className={styles.gradientBorder}>
                <div className={styles.gradientBorderInner}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/images/about.jpg"
                      alt="About Me"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300">
              I am a certified AWS Data Engineer and Developer Associate with 4 years of experience building cloud-native data lakes and real-time data pipelines. My passion lies in leveraging cloud technologies and advanced analytics to deliver actionable business insights and scalable solutions
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
              My journey began with a strong foundation in computer science and data engineering, working with organizations like Infosys, Digital IT Hub, and Bharat Dynamics Limited. I have led cross-functional teams, streamlined ETL processes, and implemented robust cloud architectures that accelerated analytics and reduced costs.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                My Life, Unfiltered
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                Beyond my work in tech, I&aposm passionate about fitness, photography, culinary exploration, and immersing myself in manga, manhwa, and anime—always seeking new adventures and creative inspiration in every aspect of life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 