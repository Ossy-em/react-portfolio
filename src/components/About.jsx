import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { ABOUT_TEXT } from "../constants";
import myImage from "../assets/ossy.jpeg";

export default function About() {
  const keyTechs = [
    "React",
    "Next.js",
    "Javascript",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-transparent to-transparent dark:from-white" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-16">
            {/* Profile Image Section */}
            <motion.div 
              className="flex flex-col items-center mx-auto md:mx-0 md:sticky md:top-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative group mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm">
                  <img
                    src={myImage}
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full backdrop-blur-sm">
                <FaMapMarkerAlt className="text-sm text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Remote</span>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  Ossy Emeruwa
                </h2>
                <div className="w-16 h-1 bg-gray-900 dark:bg-white mb-6" />
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-medium">
                  Frontend Developer
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex flex-wrap items-center gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="https://github.com/Ossy-em"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/10 dark:hover:border-white/10 transition-all text-sm font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                >
                  <FaGithub className="text-base group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ossyemeruwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/10 dark:hover:border-white/10 transition-all text-sm font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                >
                  <FaLinkedin className="text-base group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </motion.div>

              {/* About Text */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ABOUT_TEXT}
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {keyTechs.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}