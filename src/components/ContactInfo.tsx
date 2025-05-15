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
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Tampa, Florida',
      href: '#'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1-813-797-9106',
      href: 'tel:+18137979106'
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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get in touch with me
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {item.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.value}
                </p>
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
    </div>
  );
} 