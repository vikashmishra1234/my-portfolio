import React from 'react';

// Lightweight icon components
const IconLayout = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const IconDatabase = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="m3 5v14c0 3 6 3 9 3s9 0 9-3V5"></path>
    <path d="m3 12c0 3 6 3 9 3s9 0 9-3"></path>
  </svg>
);

const IconCode = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconSmartphone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const IconGlobe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="m12 2c2.5 2.5 4 7 4 10s-1.5 7.5-4 10c-2.5-2.5-4-7-4-10s1.5-7.5 4-10"></path>
  </svg>
);

const IconZap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
);

const IconArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const IconCheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <IconLayout className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'Frontend Engineering',
      description: 'Crafting pixel-perfect, responsive user experiences with React, Next.js, and modern JavaScript frameworks that convert visitors into customers.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      projects: '25+ Projects'
    },
    {
      icon: <IconDatabase className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'Backend Architecture',
      description: 'Building scalable server-side solutions and robust APIs using Node.js, databases, and cloud technologies for enterprise-grade performance.',
      technologies: ['Node.js', 'MongoDB', 'PostgreSQL', 'Redis'],
      projects: '20+ APIs Built'
    },
    {
      icon: <IconCode className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end application development with seamless integration, from concept to deployment, ensuring optimal performance and scalability.',
      technologies: ['MERN Stack', 'Next.js', 'Docker', 'AWS'],
      projects: '15+ Full Apps'
    },
    {
      icon: <IconSmartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'Mobile-First Design',
      description: 'Creating responsive web applications that deliver exceptional user experiences across all devices and screen sizes.',
      technologies: ['PWA', 'Responsive', 'Touch UI', 'Performance'],
      projects: '100% Mobile Ready'
    },
    {
      icon: <IconGlobe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'Performance Optimization',
      description: 'Implementing advanced optimization techniques to achieve lightning-fast load times and superior Core Web Vitals scores.',
      technologies: ['Webpack', 'Vite', 'CDN', 'Caching'],
      projects: '99% Speed Score'
    },
    {
      icon: <IconZap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6" />,
      title: 'API Development',
      description: 'Designing and building RESTful and GraphQL APIs with comprehensive documentation and robust security implementations.',
      technologies: ['REST API', 'GraphQL', 'JWT', 'OAuth'],
      projects: '50+ Integrations'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements - simplified */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-cyan-500/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-emerald-500/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-cyan-400 font-mono text-sm sm:text-base md:text-lg">&gt; services.map()</span>
          </div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Digital Solutions
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Transforming your vision into powerful digital experiences with cutting-edge technologies 
            and industry best practices. Every project is crafted for performance, scalability, and user delight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full transition-all duration-500 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <div className="text-cyan-400 mb-4 sm:mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-slate-200 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs sm:text-sm rounded-full font-mono border border-slate-600/50 group-hover:border-cyan-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-emerald-400 font-mono text-xs sm:text-sm">
                    <IconCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {service.projects}
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-cyan-400 hover:text-emerald-400 font-mono font-medium text-sm sm:text-base transition-all duration-300 group-hover:translate-x-2"
                >
                  Get Started
                  <IconArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;