"use client";

import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

import { fadeUp } from "./anim";
import { Globe } from "../globe";
import { Card } from "../ui/card";

export const Location = () => {
  const MotionCard = motion(Card);
  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }
  }, [ctrls, isInView]);

  return (
    <MotionCard
      ref={ref}
      variants={fadeUp}
      animate={ctrls}
      className="lg:col-span-1 col-span-2 rounded-xl h-[15rem] relative overflow-hidden p-10"
    >
      <h3 className="font-bold text-muted-foreground text-center text-xl md:text-base">
        Bangkalan, Indonesia
      </h3>
      <Globe className="top-20" />
    </MotionCard>
  );
};
