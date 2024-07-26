"use client";

import Link from "next/link";

import { Button } from "../ui/button";

import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <motion.header
      className="py-4 border-b-2 w-full"
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
        <div className="flex items-center gap-2">
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
              <Button className="text-[15px] text-black/80 font-medium bg-accent hover:bg-accent/50">
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
