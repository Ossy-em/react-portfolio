import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HERO_CONTENT } from "../constants";

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden dark:bg-black"
    >
    <motion.div
  className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white dark:from-blue-900/45 dark:via-cyan-900/20 dark:to-black"
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
        {/* Badge - appears first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-xs font-medium text-gray-900 dark:text-white shadow-sm"
        >
          Frontend Developer
        </motion.div>

        {/* Main heading - appears second with gentle fade + slide */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: "easeOut"
          }}
          className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-gray-900 dark:text-white"
        >
          Welcome To My Portfolio.
        </motion.h1>

        {/* Hero content - appears last with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.9,
            ease: "easeOut"
          }}
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {HERO_CONTENT}
        </motion.p>

        {/* Social icons - appear after content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://www.linkedin.com/in/ossyemeruwa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a         
            href="https://github.com/Ossy-em"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="text-lg" />
          </a>
          
      <a      href="https://x.com/ossyReactdev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
          >
            <FaSquareXTwitter className="text-lg" />
          </a>
       <a   
            href="https://www.instagram.com/ossy.em/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
          >
            <FaInstagram className="text-lg" />
          </a>
        </motion.div>

        {/* Button - appears last */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={() => scrollToSection("work")}
          className="group mt-12 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-sm rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium border-2 border-gray-900 dark:border-white hover:shadow-2xl inline-flex items-center gap-2"
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
