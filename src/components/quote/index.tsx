"use client";

import { QuoteIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { containerVariants, fadeUp } from "./anim";

export const Quote = () => {
  const ctrls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }
  }, [ctrls, isInView]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-96 md:h-screen overflow-hidden pb-24 flex flex-col items-center relative"
      variants={containerVariants}
      animate={ctrls}
    >
      <h1 className="text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[25rem] font-extrabold text-muted/50 text-center mb-10">
        QUOTE
      </h1>
      <motion.div className="absolute text-center w-[80%] xl:w-[60%] top-10 md:top-32 lg:top-52 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
        <QuoteIcon
          className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
          fill="currentColor"
        />
        <motion.p
          variants={fadeUp}
          animate={ctrls}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          I see AI not as a destination, but as a bridge to smarter solutions.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
