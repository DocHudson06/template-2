'use client';

import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Portfolio from "@/components/Portfolio";
import ContactInfo from "@/components/ContactInfo";
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import BackgroundVideo from '@/components/BackgroundVideo';

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

export default function HomePageClient() {
  return (
    <>
      {/* Navbar - floating UI, highest layer */}
      <div className="relative z-[50]">
      <Navbar />
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen">
        {/* Theme-aware video background - middle layer */}
        <BackgroundVideo />

        {/* Main content wrapper - above video */}
        <main className="relative z-[40]">
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
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
        >
          <Skills />
        </motion.section>

        <motion.section
          id="education"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit="exit"
        >
          <Education />
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
            <ContactInfo />
          </div>
        </motion.section>
        </main>
      </div>

      {/* Footer - floating UI, highest layer */}
      <div className="relative z-[50]">
        <Footer />
      </div>
    </>
  );
} 