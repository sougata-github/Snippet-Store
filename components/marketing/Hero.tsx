"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import { ArrowRightIcon, ChevronRight, Code2 } from "lucide-react";

import { motion } from "framer-motion";
import { BorderBeam } from "../magicui/border-beam";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col items-start sm:items-center justify-between w-full py-16 gap-16 lg:mt-10 sm:text-center"
      initial={{
        opacity: 0,
        y: -5,
      }}
      animate={{
        opacity: 100,
        y: 0,
        transition: {
          delay: 0.2,
          ease: "easeIn",
        },
      }}
    >
      {/* Call to Action */}
      <div className="flex flex-col items-start sm:items-center lg:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-start sm:items-center mx-auto">
          <h1 className="text-7xl max-lg:text-5xl max-sm:text-4xl font-bold heading-gradient max-w-[800px]">
            The Perfect Place for Code Snippets
            <span className="max-sm:hidden">.</span>
          </h1>
          <p className="text-lg text-black/60 max-w-[400px] mt-2 max-lg:text-base">
            Efficiently store and manage your important code pieces in a
            centralised repository.
          </p>
        </div>

        <div>
          <Link href="/my-snippets" className="group">
            <Button className="rounded-xl px-5 py-4 text-sm">
              Get Started for free
              <ChevronRight className="w-5 h-5 ml-2 lg:group-hover:translate-x-1 transition-all max-md:h-4 max-md:w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="p-[1px] bg-gray-100 relative sm:mt-10 rounded-xl flex items-center justify-center max-md:justify-start shadow-custom overflow-hidden">
        <Image
          height={800}
          width={800}
          quality={100}
          unoptimized
          src="/assets/temp-hero.png"
          alt="hero-image"
          className="max-w-full rounded-xl relative z-10"
        />
        <BorderBeam size={200} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 blur-2xl pointer-events-none" />
    </motion.section>
  );
};

export default Hero;
