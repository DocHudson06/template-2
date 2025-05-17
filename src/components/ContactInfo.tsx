'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Download } from 'lucide-react';

export default function ContactInfo() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: 'Email',
      value: (
        <a
          href="mailto:vardhanrao9849@gmail.com"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          vardhanrao9849@gmail.com
        </a>
      ),
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: 'Phone',
      value: (
        <a
          href="tel:+18137979106"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          +1-813-797-9106
        </a>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: 'Location',
      value: (
        <a
          href="https://maps.google.com/?q=Tampa,FL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Tampa, FL
        </a>
      ),
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: 'LinkedIn',
      value: (
        <a
          href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          linkedin.com/in/jyothi-vardhana-rao-metta-515213193/
        </a>
      ),
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: 'GitHub',
      value: (
        <a
          href="https://github.com/Jyothivardhana0009"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          github.com/Jyothivardhana0009
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">Let's discuss your next project</p>
        </motion.div>

        {/* Responsive grid: 1 col (xs), 2 col (md), 3 col (lg+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {contacts.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <div className="text-gray-600 dark:text-gray-300">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Download CV Button */}
        <div className="flex justify-center">
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
