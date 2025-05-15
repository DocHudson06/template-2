'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    title: 'Systems Engineer',
    company: 'Infosys Pvt Ltd. (Florida Power and Light)',
    period: 'Dec 2021 - Jul 2023',
    description: [
      'Built scalable pipelines using AWS Glue, Lambda, and MSK',
      'Improved delivery speed by 15% with cross-functional collaboration',
      'Developed and maintained enterprise web applications',
      'Implemented CI/CD pipelines for faster deployments'
    ],
    logo: '/images/clients/infosys.jpg',
  },
  {
    title: 'Software Developer',
    company: 'Digital IT Hub',
    period: 'Jan 2020 - Dec 2021',
    description: [
      'Developed full-stack applications using React and Node.js',
      'Implemented real-time data processing solutions',
      'Optimized database queries resulting in 30% performance improvement',
      'Mentored junior developers and conducted code reviews'
    ],
    logo: '/images/clients/digital-it.jpg',
  },
  {
    title: 'Junior Developer',
    company: 'Bharat Dynamics',
    period: 'Jun 2019 - Dec 2019',
    description: [
      'Assisted in developing internal tools and utilities',
      'Participated in code reviews and testing procedures',
      'Contributed to documentation and knowledge base',
      'Worked on bug fixes and feature implementations'
    ],
    logo: '/images/clients/bdl.jpg',
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="relative h-8 overflow-hidden text-2xl sm:text-3xl md:text-4xl text-black dark:text-white font-semibold text-center mb-12">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 relative mr-4">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li 
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
