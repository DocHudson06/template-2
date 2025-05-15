'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import Experience from "@/components/Experience";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-white">
                John Doe
              </h2>
              <p className="text-xl text-blue-400">
                Data Operations Engineer
              </p>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm a passionate developer with a keen eye for creating beautiful and functional web applications. 
                With expertise in modern web technologies, I strive to build seamless user experiences that make a difference.
              </p>
              <p>
                My journey in web development started several years ago, and since then, I've been constantly learning 
                and adapting to new technologies and best practices. I believe in writing clean, maintainable code 
                and creating intuitive user interfaces.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Born in 1990</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Master's Degree</span>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-fit"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 