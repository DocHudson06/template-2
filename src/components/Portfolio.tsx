'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, BookOpen } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Real-time Weather API',
    category: 'Backend Development',
    image: '/images/projects/weather-api.jpg',
    description: 'Developed a real-time weather API service that provides accurate weather forecasts and historical data. Implemented caching and rate limiting for optimal performance.',
    technologies: [
      { name: 'Node.js', logo: '/logos/nodejs.png' },
      { name: 'Express', logo: '/logos/express.png' },
      { name: 'MongoDB', logo: '/logos/mongodb.png' },
      { name: 'Redis', logo: '/logos/redis.png' },
      { name: 'Docker', logo: '/logos/docker.png' }
    ],
    github: 'https://github.com/yourusername/weather-api',
    article: 'https://medium.com/@vardhanrao9849/ev-analysis-e62bf7abf8da'
  },
  {
    id: 2,
    title: 'Crypto Hashrate/Price Analysis',
    category: 'Data Analysis',
    image: '/images/projects/crypto-analysis.jpg',
    description: 'Built a comprehensive cryptocurrency analysis tool that correlates mining hashrates with price movements. Features include real-time data visualization and predictive analytics.',
    technologies: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'Pandas', logo: '/logos/pandas.png' },
      { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
      { name: 'React', logo: '/logos/react.png' },
      { name: 'D3.js', logo: '/logos/d3.png' }
    ],
    github: 'https://github.com/Jyothivardhana0009/crypto_temp',
    article: 'https://medium.com/@vardhanrao9849/can-the-weather-influence-cryptocurrency-prices-39eedc0ae515'
  },
  {
    id: 3,
    title: 'Data Pipeline Automation',
    category: 'Data Engineering',
    image: '/images/projects/data-pipeline.jpg',
    description: 'Designed and implemented an automated data pipeline system that processes and transforms large datasets in real-time. Features include error handling and monitoring.',
    technologies: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'Airflow', logo: '/logos/airflow.png' },
      { name: 'AWS', logo: '/logos/aws.png' },
      { name: 'Docker', logo: '/logos/docker.png' }
    ],
    github: 'https://github.com/yourusername/data-pipeline',
    article: null
  },
  {
    id: 4,
    title: 'Data Pipeline Automation',
    category: 'Data Engineering',
    image: '/images/projects/data-pipeline.jpg',
    description: 'Designed and implemented an automated data pipeline system that processes and transforms large datasets in real-time. Features include error handling and monitoring.',
    technologies: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'Airflow', logo: '/logos/airflow.png' },
      { name: 'AWS', logo: '/logos/aws.png' },
      { name: 'Docker', logo: '/logos/docker.png' }
    ],
    github: 'https://github.com/yourusername/data-pipeline',
    article: null
  }
];

// Modal component
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative h-64 sm:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-lg"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{project.category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 dark:bg-gray-700/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-full text-sm flex items-center gap-2"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-700/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              {project.article && (
                <a
                  href={project.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Article
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300">Check out some of my recent projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
} 