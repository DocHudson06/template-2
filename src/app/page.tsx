'use client';

import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Portfolio from "@/components/Portfolio";
import ContactInfo from "@/components/ContactInfo";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-white">
        <Hero />
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
        >
          <About />
        </motion.section>
        
        <motion.section
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <ExperienceTimeline />
          </div>
        </motion.section>

        <motion.section
          id="portfolio"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
        >
          <Portfolio />
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            <ContactInfo />
          </div>
        </motion.section>
      </main>
    </>
  );
}

