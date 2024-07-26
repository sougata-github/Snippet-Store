"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative flex justify-between w-full py-6 max-md:flex-col max-lg:py-12 gap-16"
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
      <div className="flex flex-col items-start lg:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="text-5xl font-bold text-black/80 max-w-[500px] max-lg:max-w-[460px] max-lg:text-4xl">
            The Place to store all your code snippets
          </h1>
          <p className="text-lg text-black/50 max-w-[400px] mt-2 max-lg:text-base max-lg:max-w-[320px]">
            Efficiently store and manage your important code pieces in a
            centralised repository.
          </p>
        </div>

        <div>
          <Link href="/my-snippets" className="group">
            <Button className="rounded-sm text-lg p-6 max-lg:text-sm max-lg:p-5">
              Get Started for free
              <ChevronRight className="w-5 h-5 ml-2 lg:group-hover:translate-x-1 transition-all max-md:h-4 max-md:w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-xl flex items-center justify-center max-md:justify-start ">
        <Image
          height={800}
          width={800}
          quality={100}
          unoptimized
          src="/assets/temp-hero.png"
          alt="hero-image"
          className="lg:max-w-[620px] max-w-full rounded-xl"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
