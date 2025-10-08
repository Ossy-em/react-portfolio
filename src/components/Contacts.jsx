import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="text-lg">
              <span className="text-gray-400">Email: </span>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-400 transition-colors">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <a 
            href={`mailto:${CONTACT.email}`}
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}