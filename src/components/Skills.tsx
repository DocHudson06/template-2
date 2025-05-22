'use client';

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import styles from './Skills.module.css';

// Core skills with their brand colors
const skills = [
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PHP', color: '#8993be' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'Vue', color: '#42b883' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Git', color: '#F05032' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Material UI', color: '#007FFF' },
  { name: 'Jest', color: '#C21325' },
  { name: 'Bootstrap', color: '#7952B3' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Express', color: '#000000' },
  { name: 'Redux', color: '#764ABC' },
  { name: 'Sass', color: '#CC6699' },
  { name: 'Webpack', color: '#1C78C0' },
  { name: 'JWT', color: '#000000' },
  { name: 'Socket.io', color: '#010101' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Nginx', color: '#009639' },
  { name: 'Cypress', color: '#17202C' },
  { name: 'ESLint', color: '#4B32C3' },
  { name: 'Prettier', color: '#F7B93E' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white rounded-2xl p-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedSectionTitle
            title="Skills"
            icon={Code}
            description="Tech stack"
          />
        </motion.div>
        <div className={styles.skillsContainer}>
          <motion.div 
            className={styles.skillsList}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill.name}
                className={styles.skillPill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={styles.hexagon}
                  style={{ ['--hex-color' as any]: skill.color }}
                />
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.orbit} />
            <img
              src="/images/skills/your-image.png"
              alt="Skills visualization"
              className={styles.animatedImage}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 