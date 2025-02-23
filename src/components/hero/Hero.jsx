import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import MyImage from '../../assets/file.png'

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-[#deb887] to-[#f0d4a8] flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl max-w-6xl w-full mx-auto overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello, I am <span className="text-[#c07107]">Vikash</span>
              </h1>
              <h3 className="text-2xl md:text-3xl mb-6 text-[#9b5808]">
                <TypeAnimation
                  sequence={[
                    'FullStack Developer',
                    1000,
                    'MernStack Developer',
                    1000,
                    'Nextjs Developer',
                    1000,
                    'DSA Enthusiast',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h3>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Pursuing a bachelor's in Computer Science & Engineering. Enthusiastic about developing new wonders using the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Vikash-Resume.pdf"
                  download="Vikash-Resume.pdf"
                  className="bg-[#b2844a] text-white py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#9b6d3a] hover:shadow-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  My Resume
                </a>
                <a
                  href="#contact"
                  className="border-2 border-[#b2844a] text-[#b2844a] py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#b2844a] hover:text-white hover:shadow-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-[#deb887] rounded-full filter blur-3xl opacity-50"></div>
                <img 
                  src="https://gifdb.com/images/high/programming-angry-punching-keyboard-fw45yh2e39g24ylb.gif" 
                  alt="Person illustration" 
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

