"use client";

import Link from "next/link";

import { Button } from "../ui/button";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ChevronRight } from "lucide-react";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <motion.header
      className="py-2 border-b-[0.5px] border-gray-200 w-full backdrop-blur-md sticky top-0 left-0 right-0 z-[9999]"
      initial={{
        opacity: 0,
        y: -5,
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
      <nav className="flex justify-between items-center mx-auto max-w-7xl px-6">
        <Link href="/" className="text-black/80 text-lg font-semibold">
          <span className="text-primary">Snippet</span> Store
        </Link>

        {/* {Buttons} */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 max-lg:hidden">
            <Link target="_blank" href="https://github.com/sougata-github">
              <FaGithub className="h-[19px] w-[19px] text-black/80" />
            </Link>

            <Link target="_blank" href="https://x.com/sougata_x">
              <FaXTwitter className="h-[19px] w-[19px] text-black/80" />
            </Link>
          </div>

          <SignedOut>
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="text-[15px] text-black/80 font-medium hover:bg-transparent"
              >
                Log in
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/my-snippets" className="group">
              <Button
                variant="ghost"
                className="text-[15px] text-black/80 font-medium hover:bg-transparent"
              >
                Enter{" "}
                <ChevronRight className="group-hover:translate-x-1 h-4 w-4 ml-1 transition-all" />
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <Link href="/sign-up">
              <Button className="text-[15px] text-white font-medium bg-primary">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
