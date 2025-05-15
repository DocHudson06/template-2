'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaUserEdit, 
  FaBriefcase, 
  FaCode, 
  FaEnvelope,
  FaHome
} from 'react-icons/fa';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome className="w-5 h-5" />
  },
  {
    name: 'About',
    path: '/about',
    icon: <FaUserEdit className="w-5 h-5" />
  },
  {
    name: 'Experience',
    path: '/experience',
    icon: <FaBriefcase className="w-5 h-5" />
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    icon: <FaCode className="w-5 h-5" />
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <FaEnvelope className="w-5 h-5" />
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 z-50"
    >
      {/* Logo or Profile Image */}
      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-8 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">P</span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 w-full">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`group flex flex-col items-center p-2 transition-colors duration-200 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20' 
                      : 'bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-xs mt-2 font-medium">{item.name}</span>
                </Link>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 dark:bg-blue-400 rounded-l-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </motion.aside>
  );
} 