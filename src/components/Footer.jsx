import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (

    <footer className="py-8 px-6 bg-white dark:bg-black border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            © 2025 Ossy Emeruwa. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-gray-500 dark:text-gray-500"
          >
            Built with React & Tailwind CSS
          </motion.p>
        </div>
      </div>
      </footer>
  )
}

export default Footer

