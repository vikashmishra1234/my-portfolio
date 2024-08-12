import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import person from "../../assets/person.svg";
import resume from "../../assets/vikashmishraresume.pdf";
import Navbar from "../Navbar";
const Hero = () => {
  const [skill, setSkill] = useState("WebDeveloper");
  const [count, setCount] = useState(0);
  const Skills = ["WebDeveloper", "UI/UX Designer", "Mern Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount === Skills.length - 1 ? 0 : prevCount + 1;
        setSkill(Skills[newCount]);
        return newCount;
      });
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [Skills]);

  return (
    <div id="home" className="hero-container">
    <Navbar/>
      <section  className="hero">

        <motion.div
        
         className="person" initial={{scale:.5}} whileInView={{scale:1}}
         transition={{duration:1.2}}
          style={{ textAlign: "center" }}>
          <img src={person} alt="Person illustration" />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="about"
        >
          <h1>
            Hello, I am <span>Vikash</span>
          </h1>
          <h3>{skill}</h3>
          <p>
            Pursuing a bachelor's in Computer Science & Engineering.
            Enthusiastic about developing new wonders using the latest
            technologies.
          </p>
          <div className="social">
            <div>
              <a href={resume} download="resume.pdf" class="download-button">
                My Resume
              </a>
            </div>
            <div>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
