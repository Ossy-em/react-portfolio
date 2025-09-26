import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandFramer } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
      <TbBrandNextjs className="text-7xl" style={{ color: "#000000" }} />
        </motion.div>
          <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
        <RiTailwindCssFill className="text-7xl" style={{ color: "#38BDF8" }} />

        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <SiFirebase className="text-7xl" style={{ color: "#FFCA28" }} />
        </motion.div>
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVarients(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <TbBrandFramer className="text-7xl" style={{ color: "#0055FF" }} />
        </motion.div>

        <motion.div
          variants={iconVarients(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <FaAws className="text-7xl" style={{ color: "#FF9900" }} />
        </motion.div>

        <motion.div
          variants={iconVarients(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
  <FaAngular className="text-7xl" style={{ color: "#DD0031" }} />
        </motion.div>

        <motion.div
          variants={iconVarients(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
         <FaFigma className="text-7xl" style={{ color: "#F24E1E" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
