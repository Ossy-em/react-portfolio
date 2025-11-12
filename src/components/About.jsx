// components/About.jsx
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
      className="py-20 px-6 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-white dark:from-black/80 dark:via-black/60 dark:to-black"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start justify-center gap-12">
            <div className="flex flex-col items-center mx-auto md:mx-0">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Remote</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Ossy Emeruwa
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Frontend Developer
              </p>

              <div className="flex items-center gap-3 mb-8">
                <a
                  href="https://github.com/Ossy-em"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-gray-900 transition-all text-sm font-medium dark:bg-black dark:border-white/20"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ossyemeruwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all text-sm font-medium dark:bg-black dark:border-white/20"
                >
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="mb-8">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
>
                  {ABOUT_TEXT}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {keyTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
