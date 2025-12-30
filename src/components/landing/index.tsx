"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Particles from "../particles";
import { imageVariants } from "./anim";
import { Background } from "../background";
import ScrollVelocity from "./scroll-velocity";
import RoundedButton from "../common/rounded-button";
import VariableProximity from "../variable-proximity";

export const Landing = () => {
  const { theme } = useTheme();
  const [particlesColors, setParticlesColors] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const MotionImage = motion(Image);

  useEffect(() => {
    if (theme === "dark") {
      setParticlesColors(["#fff", "#fff"]);
    } else {
      setParticlesColors(["#000", "#000"]);
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden flex justify-center items-center"
      data-scroll-section
    >
      <Background />
      <MotionImage
        variants={imageVariants}
        initial="initial"
        whileHover="hover"
        src="/logo.png"
        alt="logo"
        width={300}
        height={300}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <div
        data-scroll
        data-scroll-speed="2"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 z-20"
      >
        <VariableProximity
          label="AHMAD MUFID RISQI"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="1"
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <ScrollVelocity
          className="text-5xl lg:text-8xl font-extrabold"
          texts={[
            "FRONTEND DEVELOPER-ANDROID DEVELEOPER-",
            "BACKEND DEVELOPER-UI/UX DESIGNER-",
          ]}
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="1"
        className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <RoundedButton
          padding={10}
          className="group p-3 hover:px-6 py-3 transition-all duration-400 flex gap-3"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <p className="hidden group-hover:block group-hover:text-muted z-20 transition-all duration-400">
            Scroll
          </p>
          <ArrowDown className="w-6 h-6 group-hover:text-muted z-20" />
        </RoundedButton>
      </div>
      <Particles
        speed={0.1}
        particleCount={100}
        particleSpread={10}
        particleBaseSize={100}
        disableRotation={false}
        alphaParticles={false}
        moveParticlesOnHover={false}
        particleColors={particlesColors}
        className="pointer-events-none"
      />
    </div>
  );
};
