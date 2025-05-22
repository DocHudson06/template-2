'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import styles from './Skills.module.css';

// Shortened skills list, each with a random value between 85 and 95
const skills = [
  { name: 'JavaScript', value: 92 },
  { name: 'TypeScript', value: 89 },
  { name: 'React', value: 94 },
  { name: 'Next.js', value: 90 },
  { name: 'Node.js', value: 87 },
  { name: 'Python', value: 95 },
  { name: 'Tailwind CSS', value: 88 },
  { name: 'HTML/CSS', value: 91 },
  { name: 'Express.js', value: 86 },
];

export default function Skills() {
  // Ref for the section to observe
  const sectionRef = useRef<HTMLDivElement>(null);
  // useInView returns true when the section is in the viewport
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  // State to trigger animation replay
  const [trigger, setTrigger] = useState(false);

  // Replay animation every time the section enters the viewport
  useEffect(() => {
    if (isInView) {
      setTrigger(false); // Reset
      // Timeout ensures the transition restarts
      setTimeout(() => setTrigger(true), 50);
    } else {
      setTrigger(false);
    }
  }, [isInView]);

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
            description="My technical expertise and capabilities"
          />
        </motion.div>
        {/* Attach ref to the container for intersection observer */}
        <div ref={sectionRef} className="mt-10 space-y-8">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-base">{skill.name}</span>
                <span className="font-mono text-sm">{skill.value}%</span>
              </div>
              {/*
                Progress bar container:
                - bg-gray-200 for light, dark:bg-gray-800 for dark
                - rounded-full for pill shape
              */}
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                {/*
                  Animated progress bar:
                  - Uses inline style for width, animates from 0% to skill.value%
                  - Color: pink in light mode, purple in dark mode
                  - Transition is triggered by the 'trigger' state
                  - Replayable: resets to 0% when out of view, animates again on entry
                */}
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out bg-pink-500 dark:bg-purple-500`}
                  style={{
                    width: trigger ? `${skill.value}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {/*
          Animation logic:
          - useInView detects when the section is visible (30% threshold)
          - When in view, 'trigger' is set to true, animating the bar to its value
          - When out of view, 'trigger' is set to false, resetting the bar to 0%
          - Animation replays every time the section enters the viewport
          - Bar color is pink in light mode, purple in dark mode
        */}
      </div>
    </section>
  );
} 