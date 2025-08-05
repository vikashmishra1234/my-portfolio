import { motion } from "framer-motion";
import { Code, Globe, ArrowRight } from "lucide-react";
import projectData from "../../../project.json";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full filter blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 md:w-80 md:h-80 bg-emerald-500/5 rounded-full filter blur-xl md:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="text-blue-400 font-mono text-sm md:text-lg">
              &gt; projects.showcase()
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Work
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that solve real-world problems. Each
            project demonstrates technical excellence, user-centric design, and
            business impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                {/* Project Category */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500/20 text-blue-400 text-xs sm:text-sm rounded-full font-mono border border-blue-500/30">
                    {project.category}
                  </span>
                  <div className="flex space-x-2 sm:space-x-3">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-200 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-mono text-emerald-400 mb-2 sm:mb-3">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono border border-slate-600/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-mono text-cyan-400 mb-2 sm:mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs sm:text-sm rounded-full font-mono border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-mono text-sm sm:text-base font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex-1 border border-emerald-500 sm:border-2 text-emerald-400 py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-mono text-sm sm:text-base font-medium text-center transition-all duration-300 hover:bg-emerald-500 hover:text-slate-900"
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 font-mono">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg sm:rounded-xl font-mono text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Start a Project
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;