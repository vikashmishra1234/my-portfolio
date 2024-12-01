'use client'

import { motion } from 'framer-motion'
import { Code, Database, Layout, Smartphone, Globe, Zap } from 'lucide-react'

const services = [
  {
    icon: <Layout className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Vue, or Angular.'
  },
  {
    icon: <Database className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs using Node.js, Python, or other backend technologies.'
  },
  {
    icon: <Code className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'Full Stack Development',
    description: 'End-to-end application development, seamlessly integrating frontend and backend technologies.'
  },
  {
    icon: <Smartphone className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'Responsive Web Design',
    description: 'Crafting websites that look and function beautifully on all devices, from desktops to smartphones.'
  },
  {
    icon: <Globe className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'Web Performance Optimization',
    description: 'Improving website speed and efficiency for better user experience and search engine rankings.'
  },
  {
    icon: <Zap className="w-10 h-10 mb-4 text-yellow-700" />,
    title: 'API Development & Integration',
    description: 'Designing, developing, and integrating APIs to connect various services and enhance functionality.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f0d4a8] to-[#deb887]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-[#9b5808] mb-6 text-center"
        >
          My Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center md:text-xl text-[#6b3d05] max-w-3xl mx-auto"
        >
          As a fullstack web developer, I offer a comprehensive range of services to bring your digital ideas to life. From crafting beautiful user interfaces to building powerful backend systems, I've got you covered.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8"
        >
          {services.map((service, index) => (
            <motion.a
            href='#contact' 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-800">{service.title}</h3>
                <p className="text-yellow-700 text-lg">{service.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

