// components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l-4 border-gray-900 pl-8 py-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{exp.company}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{exp.year}</span>
              </div>


              <p className="text-base md:text-lg text-blue-400 font-medium mb-4">{exp.role}</p>


              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{exp.description}</p>

       
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}