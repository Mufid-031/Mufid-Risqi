"use client";

import { FigmaLogoIcon, FramerLogoIcon } from "@radix-ui/react-icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaLaravel, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";

import { fadeUp } from "./anim";
import { Card } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const Skills = () => {
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
      className="lg:col-span-3 col-span-2 rounded-xl w-full h-[15rem] p-10"
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-5 lg:grid-cols-6 lg:grid-rows-1 justify-items-center content-center w-full h-full">
        {skillIcons.map((skill, index) => (
          <div key={index} className="flex justify-center items-center">
            <Tooltip>
              <TooltipTrigger>{skill.icon}</TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

const skillIcons = [
  {
    icon: <RiReactjsFill className="w-12 h-12 text-muted-foreground" />,
    name: "React",
  },
  {
    icon: <RiNextjsFill className="w-12 h-12 text-muted-foreground" />,
    name: "Next.js",
  },
  {
    icon: <FaVuejs className="w-12 h-12 text-muted-foreground" />,
    name: "Vue.js",
  },
  {
    icon: <FramerLogoIcon className="w-12 h-12 text-muted-foreground" />,
    name: "Framer Motion",
  },
  {
    icon: <FaLaravel className="w-12 h-12 text-muted-foreground" />,
    name: "Laravel",
  },
  {
    icon: <FigmaLogoIcon className="w-12 h-12 text-muted-foreground" />,
    name: "Figma",
  },
];
