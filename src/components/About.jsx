import { useState } from "react";
import aboutImg from "../assets/a.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// 👇 define container here
const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const About = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="text-center mb-12">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
        >
          Ossy Emeruwa
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          Frontend Developer
        </motion.span>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          {loading && (
            <div className="rounded-2xl w-[250px] h-[300px] lg:w-[300px] bg-neutral-800 animate-pulse" />
          )}

          <img
            className={`rounded-2xl w-[250px] lg:w-[300px] h-auto transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            src={aboutImg}
            alt="About"
            onLoad={() => setLoading(false)}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center"
        >
          <motion.p className="my-2 max-w-2xl py-6 text-center lg:text-left">
            {ABOUT_TEXT}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
