'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, BookOpen, FolderGit2 } from 'lucide-react';
import Image from 'next/image';
import AnimatedSectionTitle from './AnimatedSectionTitle';

// Project data structure
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: {
    name: string;
    logo: string;
  }[];
  github?: string;
  article?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'Latest CSS Guides',
    category: 'Featured Project',
    description: 'A comprehensive collection of modern CSS techniques and best practices. Includes guides on animations, layouts, and responsive design.',
    technologies: [
      { name: 'CSS3', logo: '/logos/css3.png' },
      { name: 'Sass', logo: '/logos/sass.png' },
      { name: 'Tailwind', logo: '/logos/tailwind.png' }
    ],
    github: 'https://github.com/yourusername/css-guides',
    article: 'https://medium.com/@vardhanrao9849/css-guides',
    image: '/images/portfolio-covers/project1-cover.jpg'
  },
  {
    id: 'project2',
    title: 'Real-time Weather API',
    category: 'Backend Development',
    description: 'Developed a real-time weather API service that provides accurate weather forecasts and historical data. Implemented caching and rate limiting for optimal performance.',
    technologies: [
      { name: 'Node.js', logo: '/logos/nodejs.png' },
      { name: 'Express', logo: '/logos/express.png' },
      { name: 'MongoDB', logo: '/logos/mongodb.png' }
    ],
    github: 'https://github.com/yourusername/weather-api',
    article: 'https://medium.com/@vardhanrao9849/ev-analysis-e62bf7abf8da',
    image: '/images/portfolio-covers/project2-cover.jpg'
  },
  {
    id: 'project3',
    title: 'Crypto Hashrate/Price Analysis',
    category: 'Data Analysis',
    description: 'Built a comprehensive cryptocurrency analysis tool that correlates mining hashrates with price movements. Features include real-time data visualization and predictive analytics.',
    technologies: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'Pandas', logo: '/logos/pandas.png' },
      { name: 'TensorFlow', logo: '/logos/tensorflow.png' }
    ],
    github: 'https://github.com/Jyothivardhana0009/crypto_temp',
    article: 'https://medium.com/@vardhanrao9849/can-the-weather-influence-cryptocurrency-prices-39eedc0ae515',
    image: '/images/portfolio-covers/project3-cover.jpg'
  }
];

// Animation variants for the heading
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: "easeIn"
    }
  })
};

// Modal component for project details
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-white dark:bg-black rounded-xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 text-black dark:text-white" />
          </button>
          
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.category}</p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm flex items-center gap-2"
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
            </div>

            <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
              {project.article && (
                <a
                  href={project.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Article
                </a>
              )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      {/* Main container with fully opaque background for better readability */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white rounded-2xl p-8 shadow-xl">
        <AnimatedSectionTitle
          title="Portfolio"
          icon={FolderGit2}
          description="My recent projects and work"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              onClick={() => setSelectedProject(project)}
            >
              {project.image && (
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{project.category}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 