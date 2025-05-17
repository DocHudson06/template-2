'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', logo: '/images/skills/react.svg' },
      { name: 'Next.js', logo: '/images/skills/nextjs.svg' },
      { name: 'TypeScript', logo: '/images/skills/typescript.svg' },
      { name: 'Tailwind CSS', logo: '/images/skills/tailwind.svg' },
      { name: 'HTML5', logo: '/images/skills/html5.svg' },
      { name: 'CSS3', logo: '/images/skills/css3.svg' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', logo: '/images/skills/nodejs.svg' },
      { name: 'Python', logo: '/images/skills/python.svg' },
      { name: 'Java', logo: '/images/skills/java.svg' },
      { name: 'Spring Boot', logo: '/images/skills/spring.svg' },
      { name: 'Express.js', logo: '/images/skills/express.svg' },
      { name: 'GraphQL', logo: '/images/skills/graphql.svg' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', logo: '/images/skills/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/images/skills/postgresql.svg' },
      { name: 'MySQL', logo: '/images/skills/mysql.svg' },
      { name: 'Redis', logo: '/images/skills/redis.svg' },
      { name: 'Firebase', logo: '/images/skills/firebase.svg' },
      { name: 'DynamoDB', logo: '/images/skills/dynamodb.svg' }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', logo: '/images/skills/docker.svg' },
      { name: 'Kubernetes', logo: '/images/skills/kubernetes.svg' },
      { name: 'AWS', logo: '/images/skills/aws.svg' },
      { name: 'Git', logo: '/images/skills/git.svg' },
      { name: 'Jenkins', logo: '/images/skills/jenkins.svg' },
      { name: 'Terraform', logo: '/images/skills/terraform.svg' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-4 bg-white/10 dark:bg-gray-700/10 backdrop-blur-sm rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-12 h-12 relative mb-2"
                    >
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="text-sm font-medium text-center"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 