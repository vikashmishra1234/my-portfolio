import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { icon: FaHome, text: 'Home', href: '#home' },
    { icon: FaProjectDiagram, text: 'Projects', href: '#projects' },
    { icon: FaUserAlt, text: 'Skills', href: '#skill' },
    { icon: FaEnvelope, text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-[#c07107] to-[#deb887] shadow-lg' 
        : 'bg-gradient-to-r from-[#deb887] to-[#f0d4a8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VM
          </motion.div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-[#9b5808] px-3 py-2 rounded-md text-xl font-medium flex items-center transition-colors duration-200"
                  >
                    <item.icon className="mr-2" />
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="text-white p-1 hover:text-[#9b5808] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={nav}
              aria-label="Toggle menu"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#c07107]">
              {navItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-white hover:bg-[#9b5808] hover:text-white  px-3 py-2 rounded-md text-lg font-medium flex items-center transition-colors duration-200"
                  onClick={handleClick}
                >
                  <item.icon className="mr-2" />
                  {item.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

