// components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ scrolled, scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/60 backdrop-blur-sm'
      } rounded-full px-6 py-3 border border-gray-200`}
    >
      <div className="flex items-center justify-center gap-6">
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          About
        </button>
        <button 
          onClick={() => scrollToSection('work')} 
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Work
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact
        </button>
      </div>
    </motion.nav>
  );
}