// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { HERO_CONTENT } from '../constants';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
    
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-white"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 100%' }}
      />

   
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="inline-block mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs font-medium text-gray-900 shadow-sm"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Frontend Developer
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-gray-900">
           Welcome To My Portfolio.
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {HERO_CONTENT}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a href="https://www.linkedin.com/in/ossyemeruwa" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg transition-all duration-300">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="https://github.com/Ossy-em" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-gray-900 hover:scale-110 hover:shadow-lg transition-all duration-300">
            <FaGithub className="text-lg" />
          </a>
          <a href="https://x.com/ossyReactdev" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300">
            <FaSquareXTwitter className="text-lg" />
          </a>
          <a href="https://www.instagram.com/ossy.em/" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-pink-600 hover:scale-110 hover:shadow-lg transition-all duration-300">
            <FaInstagram className="text-lg" />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => scrollToSection('work')}
          className="group mt-12 px-6 py-3 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-all duration-300 font-medium border-2 border-gray-900 hover:shadow-2xl inline-flex items-center gap-2"
        >
          View My Work
          <motion.span
            className="hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}