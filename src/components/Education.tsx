'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of South Florida',
    period: '2021 - 2023',
    location: 'Tampa, FL',
    logo: '/images/education/usf.jpg',
    description: 'Specialized in Software Engineering and Cloud Computing. Graduated with a 3.8 GPA.',
    courses: [
      'Advanced Software Engineering',
      'Cloud Computing',
      'Machine Learning',
      'Database Systems',
      'Distributed Systems'
    ]
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Jawaharlal Nehru Technological University',
    period: '2015 - 2019',
    location: 'Hyderabad, India',
    logo: '/images/education/jntu.jpg',
    description: 'Focused on Software Development and Computer Networks. Graduated with First Class Distinction.',
    courses: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Database Management Systems'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      {/* 
        Main container background:
        - Light mode: solid white (bg-white)
        - Dark mode: theme-matching dark background (dark:bg-[#1a1f2e])
        - Text colors: black in light mode, white in dark mode for optimal readability
      */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#1a1f2e] text-black dark:text-white rounded-2xl p-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="inline-flex items-center gap-3 text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300">My academic journey</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* School Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20" />
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      fill
                      sizes="96px"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-black dark:text-white">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 