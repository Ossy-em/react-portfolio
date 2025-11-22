import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { HiExternalLink } from "react-icons/hi";
import myImage from "../assets/ossy.jpeg";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group"
    >
      <motion.div
        className="w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-sm"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
            <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white max-w-xs leading-tight">
            {project.title}
          </h3>
        </motion.div>

        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {project.link && (
            <motion.a
              href={project.link}
              target="_self"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all text-sm group/link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Project
              <HiExternalLink className="text-lg transition-transform duration-300 group-hover/link:rotate-45" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gray-900 dark:bg-white" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white" />
        </motion.div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}