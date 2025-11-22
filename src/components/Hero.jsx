import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HERO_CONTENT } from "../constants";

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Animated gradient orbs - dark mode only */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-0 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          left: '20%',
          top: '20%',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-0 dark:opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          right: '10%',
          bottom: '10%',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-8 px-5 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm border border-black/5 dark:border-white/5 rounded-full text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Frontend Developer
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: "easeOut"
          }}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white leading-none"
        >
          Welcome To My
          <br />
          Portfolio<span className="text-purple-600 dark:text-purple-500">.</span>
        </motion.h1>

        {/* Hero content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.9,
            ease: "easeOut"
          }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {HERO_CONTENT}
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://www.linkedin.com/in/ossyemeruwa"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 hover:border-purple-600/20 dark:hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <FaLinkedin className="text-xl relative z-10" />
            <div className="absolute inset-0 bg-purple-600/5 dark:bg-purple-500/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </a>
          <a         
            href="https://github.com/Ossy-em"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 hover:border-purple-600/20 dark:hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <FaGithub className="text-xl relative z-10" />
            <div className="absolute inset-0 bg-purple-600/5 dark:bg-purple-500/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </a>
          <a      
            href="https://x.com/ossyReactdev"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 hover:border-purple-600/20 dark:hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <FaSquareXTwitter className="text-xl relative z-10" />
            <div className="absolute inset-0 bg-purple-600/5 dark:bg-purple-500/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </a>
          <a   
            href="https://www.instagram.com/ossy.em/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 hover:border-purple-600/20 dark:hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <FaInstagram className="text-xl relative z-10" />
            <div className="absolute inset-0 bg-purple-600/5 dark:bg-purple-500/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={() => scrollToSection("work")}
          className="group relative px-8 py-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-full backdrop-blur-sm hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 text-gray-900 dark:text-white font-medium flex items-center gap-2">
            View My Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 dark:from-purple-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-black/10 dark:border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gray-600 dark:bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}