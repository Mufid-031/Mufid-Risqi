"use client";

import Link from "next/link";
import { RandomLetterSwapPingPong } from "./random-letter-swap";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants, fadeUp } from "./anim";
import { useEffect, useRef } from "react";

export const Contact = () => {
  const ctrls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }

    console.log(isInView);
  }, [ctrls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      animate={ctrls}
      className="w-full h-96 md:h-screen overflow-hidden pb-24 flex flex-col items-center relative"
    >
      <h1 className="text-[5rem] md:text-[10rem] lg:text-[12rem] xl:text-[19rem] font-extrabold text-muted/50 text-center mb-10">
        CONTACT
      </h1>
      <div className="absolute text-center w-full xl:w-[60%] top-20 md:top-32 lg:top-52 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
        <motion.h2
          variants={fadeUp}
          animate={ctrls}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-[4.2rem] font-extrabold"
        >
          Let’s Build Something Great
        </motion.h2>
        <Link href="mailto:risqimufid50@gmail.com">
          <RandomLetterSwapPingPong
            label="CONTACT ME"
            reverse={false}
            className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground"
          />
        </Link>
        <motion.p
          variants={fadeUp}
          animate={ctrls}
          className="text-md md:text-xl lg:text-2xl text-muted-foreground px-20"
        >
          I’m always open to discussing new opportunities, collaborations, or
          simply having a chat. Feel free to reach out!
        </motion.p>
      </div>
    </motion.div>
  );
};
