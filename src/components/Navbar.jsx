import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import myImage from "../assets/ossy.jpeg";

export default function Navbar({ scrolled, scrollToSection = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-sm"
            : "bg-white/70 dark:bg-black/70 backdrop-blur-md"
        } rounded-full px-6 py-3 border border-black/5 dark:border-white/5`}
      >
        <div className="flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.05] px-4 py-2 rounded-full transition-all text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          
          <div className="w-px h-6 bg-black/5 dark:bg-white/5 mx-2" />
          
          <motion.button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.05] w-9 h-9 flex items-center justify-center rounded-full transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiSun className="w-4 h-4" />
            ) : (
              <HiMoon className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`lg:hidden fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-sm"
            : "bg-white/70 dark:bg-black/70 backdrop-blur-md"
        } rounded-2xl px-5 py-3.5 border border-black/5 dark:border-white/5`}
      >
        <div className="flex items-center justify-between">
          <img
            src={myImage}
            alt="Profile"
            className="w-9 h-9 rounded-full cursor-pointer border border-black/5 dark:border-white/5"
            onClick={() => scrollToSection("home")}
          />

          <div className="flex items-center gap-2">
            {/* MOBILE THEME TOGGLE */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5 text-gray-700 dark:text-gray-400" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
              )}
            </motion.button>

            {/* HAMBURGER MENU */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                className="flex flex-col gap-1.5 items-center justify-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full block"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full block"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full block"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-lg rounded-2xl shadow-xl border border-black/5 dark:border-white/5 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full flex items-center px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-all text-sm font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}