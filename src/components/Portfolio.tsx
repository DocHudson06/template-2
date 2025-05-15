'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Data Pipeline Automation',
    category: 'Data Engineering',
    image: '/images/projects/project1.jpg',
    description: 'Built an automated data pipeline system that processes and transforms large datasets in real-time. Implemented error handling and monitoring.',
    technologies: ['Python', 'Apache Airflow', 'AWS', 'Docker'],
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    image: '/images/projects/project2.jpg',
    description: 'Developed an interactive dashboard for business metrics visualization. Features include real-time updates and custom reporting.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Node.js'],
  },
  {
    id: 3,
    title: 'ML Model Deployment',
    category: 'Machine Learning',
    image: '/images/projects/project3.jpg',
    description: 'Deployed machine learning models in production with automated testing and monitoring. Reduced inference time by 40%.',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Prometheus'],
  },
  {
    id: 4,
    title: 'ETL System',
    category: 'Data Engineering',
    image: '/images/projects/project4.jpg',
    description: 'Designed and implemented an ETL system for processing financial data. Handles millions of records daily with 99.9% accuracy.',
    technologies: ['Python', 'PostgreSQL', 'Apache Spark', 'Airflow'],
  },
];

// Modal component
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative h-64 sm:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 text-sm font-medium">{project.category}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
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
    <section id="portfolio" className="w-full min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400">Check out some of my recent projects</p>
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
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
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