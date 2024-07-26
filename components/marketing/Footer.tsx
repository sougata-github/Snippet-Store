"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-8 flex items-center justify-center">
      <motion.p
        className="text-sm text-black/50"
        initial={{
          opacity: 0,
          y: 5,
        }}
        animate={{
          opacity: 100,
          y: 0,
          transition: {
            delay: 0.4,
            ease: "easeIn",
          },
        }}
      >
        @snippet-store | 2024
      </motion.p>
    </footer>
  );
};

export default Footer;
