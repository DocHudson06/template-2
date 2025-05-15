'use client';

import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 text-gray-300">
      <Mail className="w-5 h-5 text-blue-400" />
      <a href="mailto:vardhanrao9849@gmail.com" className="hover:text-white transition-colors">
        vardhanrao9849@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <MapPin className="w-5 h-5 text-blue-400" />
      <span>Hyderabad, India</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <Phone className="w-5 h-5 text-blue-400" />
      <a href="tel:+919849849849" className="hover:text-white transition-colors">
        +91 9849849849
      </a>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <Linkedin className="w-5 h-5 text-blue-400" />
      <a 
        href="https://www.linkedin.com/in/jyothi-vardhana-rao-metta-515213193/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        linkedin.com/in/jyothi-vardhana-rao-metta-515213193
      </a>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <Github className="w-5 h-5 text-blue-400" />
      <a 
        href="https://github.com/Jyothivardhana0009" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        github.com/Jyothivardhana0009
      </a>
    </div>
  </div>
);

export default ContactInfo; 