'use client';

import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaLinkedin,
  FaGithub,
  FaDownload
} from 'react-icons/fa';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: 'Email',
    value: 'vardhanrao9849@gmail.com',
    href: 'mailto:vardhanrao9849@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5" />,
    label: 'Location',
    value: 'Hyderabad, India'
  },
  {
    icon: <FaPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 9849849849',
    href: 'tel:+919849849849'
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jyothi-vardhana-rao-metta-515213193',
    href: 'https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/'
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/Jyothivardhana0009',
    href: 'https://github.com/Jyothivardhana0009'
  }
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              {item.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 truncate block"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base text-gray-900 dark:text-white truncate">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          <FaDownload className="w-5 h-5 mr-2" />
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo; 