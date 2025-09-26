"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "../ui/count-up";
import { ballVariants, slideUp } from "./anim";

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
          <motion.div className="absolute left-10 top-10 text-xl flex items-end gap-1">
            <motion.div className="flex gap-2 items-end">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-muted"
                  variants={ballVariants}
                  animate="animate"
                  custom={i}
                />
              ))}
            </motion.div>
          </motion.div>
          <div className="absolute bottom-20 lg:bottom-10 left-10 space-y-1 text-muted">
            <h4 className="text-sm md:text-lg">A Selected</h4>
            <p className="text-xs md:text-base">
              Full Stack Web Developer & Android Developer
            </p>
          </div>
          <div className="absolute bottom-20 lg:bottom-10 right-10 space-y-1 text-muted">
            <h4 className="text-sm md:text-lg">From</h4>
            <p className="text-xs md:text-base">Indonesia</p>
          </div>
        </>
      )}
    </motion.div>
  );
}
