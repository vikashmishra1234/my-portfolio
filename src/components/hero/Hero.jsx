import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen  bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-cyan-500/10 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-emerald-500/10 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative mt-[90px] z-10 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl max-w-7xl w-full mx-auto overflow-hidden">
        <div className="p-6 sm:p-10 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16">
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main heading */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4 sm:mb-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                  Vikash<span className="text-slate-300">.</span>
                </h1>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-3 sm:mb-4"></div>
              </motion.div>

              {/* Dynamic role typing */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold mb-2 sm:mb-8 text-slate-200 min-h-[40px] sm:min-h-[50px] md:min-h-[60px]"
              >
                <span className="text-emerald-400">&gt;</span>{" "}
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Next.js Developer",
                    2000,
                    "React Enthusiast",
                    2000,
                    "Tech Innovation Partner",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyan-400"
                />
                <span className="animate-pulse text-emerald-400">|</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-300 leading-relaxed font-light max-w-2xl"
              >
                Transforming ideas into powerful digital experiences.
                Specializing in modern web technologies, scalable architectures,
                and innovative solutions that drive business growth. Let's build
                something extraordinary together.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                    Education
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-mono">
                    BTech CSE
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                    1+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-mono">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-mono">
                    LeetCode Problems Solved
                  </div>
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#projects"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 flex items-center justify-center font-mono"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                  View My Work
                </a>
                <a
  href="#"
  className="group border border-2 border-emerald-500 text-emerald-400 py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-emerald-500 hover:text-slate-900 hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 flex items-center justify-center font-mono"
>
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
    />
  </svg>
  Resume
</a>

              </motion.div>
            </motion.div>

            {/* Code visualization */}
            <motion.div
              className="w-full lg:w-2/5 mt-8 lg:mt-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Terminal window */}
                <div className="bg-slate-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-700 overflow-hidden">
                  {/* Terminal header */}
                  <div className="bg-slate-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 sm:ml-4 text-xs sm:text-sm text-slate-400 font-mono">
                      ~/vikash-agency
                    </div>
                  </div>

                  {/* Terminal content */}
                  <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <div className="flex items-center text-emerald-400">
                      <span className="text-cyan-400">$</span>
                      <span className="ml-1 sm:ml-2">
                        npm run create-awesome-project
                      </span>
                    </div>
                    <div className="text-slate-500">
                      <div>✨ Initializing project...</div>
                      <div>📦 Installing dependencies...</div>
                      <div>🚀 Setting up development server...</div>
                      <div className="text-emerald-400">
                        ✅ Ready to build amazing things!
                      </div>
                    </div>

                    <div className="mt-2 sm:mt-4 text-slate-400">
                      <div className="text-cyan-400">const</div>
                      <div className="ml-2 sm:ml-4">
                        <span className="text-yellow-400">skills</span> = [
                      </div>
                      <div className="ml-4 sm:ml-8 text-green-400">
                        'React', 'Node.js', 'Next.js',
                        <br />
                        'TypeScript', 'MongoDB', 'AWS'
                      </div>
                      <div className="ml-2 sm:ml-4">];</div>
                    </div>

                    <div className="flex items-center text-emerald-400 animate-pulse">
                      <span className="text-cyan-400">$</span>
                      <span className="ml-1 sm:ml-2">
                        Building the future...
                      </span>
                      <span className="animate-ping">_</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
