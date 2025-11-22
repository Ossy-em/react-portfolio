import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import myImage from "../assets/ossy.jpeg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-white dark:bg-black py-32 px-6 overflow-hidden"
    >
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl bg-gray-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[35%_65%] gap-16 items-start relative z-10">
        {/* LEFT — STATIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sticky top-32 flex flex-col items-center md:items-end"
        >
          <div className="hidden md:block mb-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm group">
              <img
                src={myImage}
                alt="Ossy Emeruwa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white" />
        </motion.div>

        {/* RIGHT — EXPERIENCE SCROLLABLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12 h-[80vh] w-full md:w-3/4 overflow-y-auto pr-2 md:pr-6 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white" />
          </motion.div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Vertical line indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-colors" />
                
                <div className="pl-8 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                      {exp.company} · {exp.type}
                    </p>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                    {exp.description.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                        className="flex gap-3"
                      >
                        <span className="text-gray-400 dark:text-gray-600 mt-1.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.03, duration: 0.3 }}
                        className="px-3 py-1.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}