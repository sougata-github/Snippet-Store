"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import { ArrowDown, ChevronRight, CurlyBraces } from "lucide-react";

import { motion } from "framer-motion";
import { BorderBeam } from "../magicui/border-beam";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-start sm:items-center w-full pt-8 max-sm:pt-10 pb-8 gap-16 lg:mt-6 mt-2 text-center"
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
      <div className="flex flex-col items-center lg:gap-12 gap-8">
        <Link
          href="/my-snippets"
          className="group cursor-pointer border-gray-300 border-[0.5px] my-2 flex items-center gap-2 rounded-3xl bg-gray-200 px-4 py-1 text-xs sm:text-sm text-gray-500"
        >
          <CurlyBraces className="w-4 h-4 text-gray-500" />
          In development
          <ChevronRight className="lg:group-hover:translate-x-1 transition-all w-4 h-4 text-gray-500" />
        </Link>

        <div className="flex flex-col gap-6 items-center mx-auto">
          <h1 className="text-7xl max-lg:text-5xl max-sm:text-4xl font-bold heading-gradient max-w-[800px]">
            The Place for your <span className="text-black">Code Snippets</span>
            .
          </h1>

          <p className="text-xl text-black/80 font-medium lg:max-w-[500px] max-w-[420px] mt-2 max-lg:text-lg">
            Efficiently store and manage your important code pieces in a
            centralised repository.
          </p>
        </div>

        <div>
          <Link href="/my-snippets" className="group">
            <Button className="p-6 text-sm">
              Get Started for free
              <ChevronRight className="w-5 h-5 ml-2 lg:group-hover:rotate-[360deg] transition-all duration-500 max-md:h-4 max-md:w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="lg:px-4 px-0">
        <div className="p-[1px] bg-gray-200 relative sm:mt-10 rounded-xl flex items-center justify-center max-md:justify-start shadow-lg overflow-hidden">
          <Image
            height={800}
            width={800}
            quality={100}
            unoptimized
            src="/assets/temp-hero.png"
            alt="hero-image"
            className="w-[1080px] max-w-full rounded-xl relative z-10"
          />
          <BorderBeam size={200} />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
