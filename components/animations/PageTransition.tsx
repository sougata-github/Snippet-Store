"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className="pointer-events-none fixed top-0 left-0 h-screen w-screen bg-background-light"
          initial={{
            opacity: 100,
          }}
          animate={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
