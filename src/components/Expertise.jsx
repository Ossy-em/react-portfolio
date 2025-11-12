import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import myImage from "../assets/ossy.jpeg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-br from-blue-50/40 via-cyan-50/20 to-white dark:from-blue-900/10 dark:via-cyan-900/5 dark:to-black py-10 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-16 items-start">
        {/* LEFT — STATIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sticky top-24 flex justify-center md:justify-end"
        >
         <div className="hidden md:block w-40 h-40 rounded-full overflow-hidden shadow-lg border border-gray-200 dark:border-white/20">
  <img
    src={myImage}
    alt="Ossy Emeruwa"
    className="w-full h-full object-cover dark:border dark:border-gray-200"
  />
</div>

        </motion.div>

        {/* RIGHT — EXPERIENCE SCROLLABLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10 h-[80vh] w-full md:w-3/4 overflow-y-auto pr-2 md:pr-6 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/30"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center"
          >
            Work Experience
          </motion.h2>

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l border-gray-900 dark:border-white pl-6 py-3"
            >
              {/* Title section */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-xs text-blue-400">•</span>
                <p className="text-xs text-blue-500 dark:text-blue-400 font-medium">
                  {exp.company} ({exp.type})
                </p>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{exp.year}</span>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-xs md:text-sm space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full text-[10px] md:text-xs font-medium text-gray-900 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}