'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from './ui/button';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'vardhanrao9849@gmail.com',
      href: 'mailto:vardhanrao9849@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1-813-797-9106',
      href: 'tel:+18137979106'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Tampa, FL',
      href: 'https://maps.google.com/?q=Tampa,FL'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jyothi-vardhana-rao-metta-515213193/',
      href: 'https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/Jyothivardhana0009',
      href: 'https://github.com/Jyothivardhana0009'
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/20 dark:bg-gray-900/20 text-black dark:text-white rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get in touch with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 rounded-lg bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100/20 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.label}</h3>
                <p className="text-base font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
            onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
          >
            <Download className="w-5 h-5" />
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 