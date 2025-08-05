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
const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: 'React', level: 95, color: '#61DAFB' },
        { name: 'Next.js', level: 90, color: '#000000' },
        { name: 'TypeScript', level: 88, color: '#3178C6' },
        { name: 'JavaScript', level: 92, color: '#F7DF1E' },
      ]
    },
    {
      category: "Backend", 
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'MongoDB', level: 85, color: '#47A248' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'Java', level: 75, color: '#007396' },
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: 'Docker', level: 78, color: '#2496ED' },
        { name: 'Firebase', level: 82, color: '#FFCA28' },
        { name: 'AWS', level: 70, color: '#FF9900' },
        { name: 'Git', level: 88, color: '#F05032' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-emerald-400 font-mono text-lg">&gt; skills.filter(expert)</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Mastering the latest technologies and frameworks to build scalable, 
            performant applications that drive business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse opacity-75"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '3+', color: 'cyan' },
              { label: 'Projects Completed', value: '50+', color: 'emerald' },
              { label: 'Technologies Mastered', value: '15+', color: 'blue' },
              { label: 'Client Satisfaction', value: '99%', color: 'green' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-black mb-2 text-${stat.color}-400`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 font-mono text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;