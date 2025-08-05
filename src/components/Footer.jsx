
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
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vikashmishra1234',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vikash-mishra-099478277',
      icon: <User className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/VikashMishra57',
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-slate-900 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              &lt;Vikash/&gt;
            </div>
            <p className="text-slate-400 leading-relaxed">
              Building digital experiences that matter. Transforming ideas into powerful, 
              scalable solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 font-mono"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6">Let's Connect</h3>
            <div className="space-y-3">
              <p className="text-slate-400 font-mono">
                <span className="text-emerald-400">Email:</span> vikashmishra8371@gmail.com
              </p>
              <p className="text-slate-400 font-mono">
                <span className="text-emerald-400">Phone:</span> +91 8979481819
              </p>
              <p className="text-slate-400 font-mono">
                <span className="text-emerald-400">Location:</span> Mathura, UP, India
              </p>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-2 px-6 rounded-xl font-mono font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-800/50 text-center"
        >
          <p className="text-slate-400 font-mono">
            <span className="text-cyan-400">&copy;</span> {currentYear} Vikash Mishra. 
            <span className="text-emerald-400 ml-2">Crafted with ❤️ and lots of ☕</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;