'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import AnimatedExperienceTitle from './AnimatedExperienceTitle';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Infosys Pvt Ltd. (Client-NextEra Energy Inc.)',
    period: 'Dec 2021 - Jul 2023',
    description: [
      'Built and deployed 7+ real-time AWS data pipelines to boost processing capacity and enable seamless team adoption.',
      'Developed PySpark ETL in AWS Glue, improving Redshift analytics throughput by 20%.',
      'Automated 25 event-driven Airflow DAGs on ECS Fargate, reducing data latency by 70%.',
      'Secured 12 dashboards with dynamic RLS and role-based access for 600 users.'
    ],
    logo: '/images/clients/infosys.jpg',
  },
  {
    title: 'Data Engineer',
    company: 'Digital IT Hub',
    period: 'Jan 2020 - Nov 2021',
    description: [
      'Created 30+ CloudFormation stacks with CI/CD for rapid, versioned environment provisioning',
      'Designed modular DBT SQL models, increasing ETL performance by 35%',
      'Automated data ingestion and transformation in Azure Databricks, cutting runtimes by 60%',
      'Enhanced analytics scalability with optimized MySQL and robust data models'
    ],
    logo: '/images/clients/digital-it.jpg',
  },
  {
    title: 'Intern',
    company: 'Bharat Dynamics Limited (Government of India Enterprise)',
    period: 'Feb 2019 - Jul 2019',
    description: [
      'Standardized 50 GB of geo-location data with Python for accurate analysis.',
      'Improved Oracle SQL and PL/SQL procedures, reducing execution time by 45%.',
      'Monitored 15+ Kafka jobs to ensure 99.9% uptime.',
      'Managed OBIA/OBIEE installations for enterprise reporting reliability.'
    ],
    logo: '/images/clients/bdl.jpg',
  }
];

// Animation variants for timeline items
const timelineItemVariants = {
  hidden: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  }
};

// Animation variants for description items
const descriptionItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#1a1f2e] text-black dark:text-white rounded-2xl p-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl max-[448px]:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text max-w-full">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">My professional journey and achievements</p>
        </motion.div>
        
        <div className="relative experience-timeline">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 shadow-[0_0_15px_rgba(0,0,0,0.3)]" />

          {/* Experience items */}
          <div className="timeline-items">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index % 2 === 0 ? 'left' : 'right'}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={timelineItemVariants}
                className={`timeline-item flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-blue-500/40 dark:border-purple-400/40 hover:border-blue-600 dark:hover:border-purple-500 shadow-blue-200 dark:shadow-purple-900"
                  >
                    <div className="flex items-center mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 relative mr-4"
                      >
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          sizes="48px"
                          className="rounded-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          custom={idx}
                          variants={descriptionItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes cd-bounce-2 {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
          50% { transform: translateY(-20px); }
          70% { transform: translateY(-10px); }
        }

        @media (max-width: 448px) {
          .experience-timeline h2 {
            font-size: 1.25rem;
            line-height: 1.3;
            word-break: break-word;
          }
        }
      `}</style>
    </section>
  );
}
