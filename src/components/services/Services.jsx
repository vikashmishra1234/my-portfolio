
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

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12 mb-6" />,
      title: 'Frontend Engineering',
      description: 'Crafting pixel-perfect, responsive user experiences with React, Next.js, and modern JavaScript frameworks that convert visitors into customers.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      projects: '25+ Projects'
    },
    {
      icon: <Database className="w-12 h-12 mb-6" />,
      title: 'Backend Architecture',
      description: 'Building scalable server-side solutions and robust APIs using Node.js, databases, and cloud technologies for enterprise-grade performance.',
      technologies: ['Node.js', 'MongoDB', 'PostgreSQL', 'Redis'],
      projects: '20+ APIs Built'
    },
    {
      icon: <Code className="w-12 h-12 mb-6" />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end application development with seamless integration, from concept to deployment, ensuring optimal performance and scalability.',
      technologies: ['MERN Stack', 'Next.js', 'Docker', 'AWS'],
      projects: '15+ Full Apps'
    },
    {
      icon: <Smartphone className="w-12 h-12 mb-6" />,
      title: 'Mobile-First Design',
      description: 'Creating responsive web applications that deliver exceptional user experiences across all devices and screen sizes.',
      technologies: ['PWA', 'Responsive Design', 'Touch UI', 'Performance'],
      projects: '100% Mobile Ready'
    },
    {
      icon: <Globe className="w-12 h-12 mb-6" />,
      title: 'Performance Optimization',
      description: 'Implementing advanced optimization techniques to achieve lightning-fast load times and superior Core Web Vitals scores.',
      technologies: ['Webpack', 'Vite', 'CDN', 'Caching'],
      projects: '99% Speed Score'
    },
    {
      icon: <Zap className="w-12 h-12 mb-6" />,
      title: 'API Development',
      description: 'Designing and building RESTful and GraphQL APIs with comprehensive documentation and robust security implementations.',
      technologies: ['REST API', 'GraphQL', 'JWT', 'OAuth'],
      projects: '50+ Integrations'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
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
            <span className="text-cyan-400 font-mono text-lg">&gt; services.map()</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Digital Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Transforming your vision into powerful digital experiences with cutting-edge technologies 
            and industry best practices. Every project is crafted for performance, scalability, and user delight.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <div className="text-cyan-400 mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full font-mono border border-slate-600/50 group-hover:border-cyan-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-emerald-400 font-mono text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {service.projects}
                  </div>
                </div>
                
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-cyan-400 hover:text-emerald-400 font-mono font-medium transition-colors duration-300 group-hover:translate-x-2"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesSection;