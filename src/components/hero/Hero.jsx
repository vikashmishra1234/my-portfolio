import React from "react";
import { motion } from "framer-motion";
import person from "../../assets/person.svg";
import resume from "../../assets/Vikash-Resume.pdf";
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div id="home" className="flex bg-[#deb887] pt-8 md:pt-0  md:h-[calc(100vh-80px)] flex-col items-center justify-center pb-8">
      <section className="flex flex-col md:flex-row md:w-[90vw] gap-8 md:m-auto items-center justify-center">
        <motion.div
          className=""
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={person} alt="Person illustration" className="w-[290px] sm:w-[350px] md:w-[550px] " />
        </motion.div>
        
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-[95%] m-auto"
        >
          <h1 className="md:text-[60px]  text-[45px] font-bold m-0">
            Hello, I am <span className="text-[#c07107]">Vikash</span>
          </h1>
          <h3 className="text-[31px] mt-0 md:mt-2 mb-2 text-[#9b5808]">
            <TypeAnimation
              sequence={[
                'FullStack Developer',
                1000,
                'MernStack Developer',
                1000,
                'Nextjs Developer',
                1000,
                'DSA Enthausiastic',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="text-[21px] md:text[24px] w-[90%] m-0">
            Pursuing a bachelor's in Computer Science & Engineering. Enthusiastic about developing new wonders using the latest technologies.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={resume}
              download="Vikash-Resume.pdf"
              className="bg-[#b2844a] text-[20px] text-white py-2 px-4 rounded-md hover:bg-[#deb887] hover:border hover:border-[#b2844a] transition-colors"
            >
              My Resume
            </a>
            <a href="#contact" className="bg-[#deb887] text-[20px] hover:bg-[#b2844a] border border-[#b2844a] text-white py-2 px-4 rounded-md transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
