import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../constants";
import { HiExternalLink } from "react-icons/hi";
import { FaTelegramPlane, FaCode, FaRocket, FaDatabase } from "react-icons/fa";
import myImage from "../assets/ossy.jpeg";

const gradients = [
  "from-blue-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-pink-500 to-purple-600",
  "from-indigo-500 to-purple-600",
];

const icons = [FaTelegramPlane, FaCode, FaRocket, FaDatabase];

function ProjectCard({ project, index }) {
  const gradient = gradients[index % gradients.length];
  const IconComponent = icons[index % icons.length];

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
    >
      <motion.div
        className="w-full aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl border-gray-900"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <IconComponent className="text-white text-8xl" />
            </motion.div>
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
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white max-w-xs">
            {project.title}
          </h3>
        </motion.div>

        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="w-8 h-8 rounded-full overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover dark:border dark:border-gray-200"
            />
          </motion.div>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1.5 bg-gray-100 dark:bg-black border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
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
              className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Project
              <HiExternalLink className="text-lg group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-gray-100"
        >
          Projects
        </motion.h2>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
