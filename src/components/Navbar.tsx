'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '/#about', icon: <User className="w-5 h-5" /> },
    { name: 'Experience', href: '/#experience', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Portfolio', href: '/#portfolio', icon: <FolderGit2 className="w-5 h-5" /> },
    { name: 'Contact', href: '/#contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              className="text-white font-bold text-xl hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    pathname === item.href ? 'text-white' : ''
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                  pathname === item.href ? 'text-white' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 