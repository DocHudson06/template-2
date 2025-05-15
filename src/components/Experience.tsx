'use client';

import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

// Experience data
const experiences = [
  {
    date: '2022 - Present',
    role: 'Senior Data Operations Engineer',
    company: 'TechCorp Inc.',
    description: 'Lead the development and implementation of data pipelines and ETL processes.',
  },
  {
    date: '2020 - 2022',
    role: 'Data Engineer',
    company: 'DataFlow Systems',
    description: 'Designed and maintained data warehouses, implemented automated testing frameworks.',
  },
  {
    date: '2018 - 2020',
    role: 'Junior Data Analyst',
    company: 'Analytics Pro',
    description: 'Developed data models and dashboards, performed data analysis.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey</p>
        </motion.div>

        <VerticalTimeline lineColor="#3B82F6">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: '#1F2937',
                color: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #1F2937',
              }}
              date={experience.date}
              dateClassName="text-gray-400"
              iconStyle={{
                background: '#3B82F6',
                color: '#fff',
              }}
              icon={<Briefcase className="w-5 h-5" />}
            >
              <h3 className="text-xl font-bold text-white">
                {experience.role}
              </h3>
              <h4 className="text-blue-400 font-medium mb-4">
                {experience.company}
              </h4>
              <p className="text-gray-300">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
} 