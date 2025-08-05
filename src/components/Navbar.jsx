

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Smartphone, 
  Globe, 
  Zap,
  Menu,
  X,
  Home,
  FolderOpen,
  User,
  Mail,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'services', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { icon: Home, text: 'Home', href: '#home' },
    { icon: Code, text: 'Services', href: '#services' },
    { icon: User, text: 'Skills', href: '#skills' },
    { icon: FolderOpen, text: 'Projects', href: '#projects' },
    { icon: Mail, text: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              &lt;Vikash/&gt;
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-xl text-sm font-mono font-medium flex items-center transition-all duration-300 ${
                      activeSection === item.href
                        ? 'text-cyan-400 bg-slate-800/50'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30'
                    }`}
                  >
                    <item.icon className="mr-2 w-4 h-4" />
                    {item.text}
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl border border-cyan-500/30"
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="lg:hidden text-slate-300 hover:text-cyan-400 p-2 rounded-xl hover:bg-slate-800/30 transition-all duration-300"
            aria-expanded={nav}
            aria-label="Toggle menu"
          >
            {nav ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.text}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 font-mono"
                  onClick={handleClick}
                >
                  <item.icon className="mr-3 w-5 h-5" />
                  {item.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;