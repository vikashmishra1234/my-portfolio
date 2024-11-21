import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiTypescript, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
];

const SkillCard = ({ name, icon: Icon, color }) => (
  <motion.div
    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl"
    whileHover={{ y: -5 }}
  >
    <Icon size={48} color={color} className="mb-4" />
    <h3 className="text-lg font-semibold text-[#6b3d05]">{name}</h3>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skill" className="py-24 bg-gradient-to-b from-[#deb887] to-[#f0d4a8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#9b5808] mb-6">
            My <span className="text-[#c07107]">Skills</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#6b3d05] max-w-3xl mx-auto">
            Here are the technologies and tools I specialize in:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} color={skill.color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

