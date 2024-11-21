import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#deb887] to-[#f0d4a8] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-[#9b5808]">Vikash Mishra</h3>
            <p className="text-[#6b3d05] md:text-lg  mt-2">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/vikashmishra1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-3xl text-[#9b5808] hover:text-[#c07107] transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com/in/vikash-mishra-099478277" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl text-[#9b5808] hover:text-[#c07107] transition-colors duration-300" />
            </a>
            <a href="https://twitter.com/VikashMishra57" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-3xl text-[#9b5808] hover:text-[#c07107] transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-[#6b3d05]">&copy; {new Date().getFullYear()} Vikash Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

