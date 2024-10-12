import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './style/style1.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[80px] bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-3xl font-bold">VM</div>
        <ul className="hidden md:flex md:text-2xl space-x-12">
          <li className="hover:text-gray-400 flex items-center">
            <FaHome size={20} className="mr-2" />
           <a href="/#home">Home</a>
          </li>
          <li className="hover:text-gray-400 flex items-center">
            <FaProjectDiagram size={20} className="mr-2" />
            <a href="/#projects">Projects</a>
          </li>
          <li className="hover:text-gray-400 flex items-center">
            <FaUserAlt size={20} className="mr-2" />
            <a href="/#skill">Skills</a>
          </li>
          <li className="hover:text-gray-400 flex items-center">
            <FaEnvelope size={20} className="mr-2" />
            Contact
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.ul
        className={`${
          nav ? 'block' : 'hidden'
        } md:hidden bg-gray-700 w-full text-center absolute top-[80px]`}
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: nav ? '0' : '-100vw' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <li className="py-4 text-xl hover:bg-gray-600 flex justify-center items-center">
          <FaHome size={20} className="mr-2" />
          <a href="#home">Home</a>
        </li>
        <li className="py-4 text-xl hover:bg-gray-600 flex justify-center items-center">
          <FaProjectDiagram size={20} className="mr-2" />
          <a href="#projects">Projects</a>
        </li>
        <li className="py-4 text-xl hover:bg-gray-600 flex justify-center items-center">
          <FaUserAlt size={20} className="mr-2" />
          <a href="#skill">Skills</a>
        </li>
        <li className="py-4 text-xl hover:bg-gray-600 flex justify-center items-center">
          <FaEnvelope size={20} className="mr-2" />
          <a href="#contact">Contact</a>
        </li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
