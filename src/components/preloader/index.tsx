"use client";

import CountUp from "../ui/count-up";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import { slideUp } from "./anim";
import { Tagline } from "../tagline";
import { DotLoader } from "../dot-loader";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height - 100
  } Q${dimension.width / 2} ${dimension.height + 100} 0 ${
    dimension.height - 100
  } Z`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} Z`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-screen h-screen flex justify-center items-center fixed z-[99999] bg-accent-foreground"
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute z-10 text-muted text-6xl md:text-7xl lg:text-8xl font-bold">
            <CountUp from={0} to={100} duration={2} separator="." />
            <span className="ml-2">%</span>
          </div>
          <svg className="absolute top-0 w-full h-[calc(100%-300px)]">
            <motion.path
              className="fill-accent-foreground"
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
          <DotLoader position="LEFT TOP" />
          <Tagline />
        </>
      )}
    </motion.div>
  );
}
