"use client";

import {
  LegacyAnimationControls,
  motion,
  MotionProps,
  useAnimation,
} from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { arrowVariants, cardVariants, fadeLeft } from "./anim";
import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import Magnetic from "../common/magnetic";

interface CardWorkProps extends MotionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techstacks: IconType[];
  ctrlsContainer: LegacyAnimationControls;
}

export const CardWork = ({
  title,
  description,
  image,
  link,
  techstacks,
  ctrlsContainer,
  ...props
}: CardWorkProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ctrls = useAnimation();

  const handleHover = () => {
    setIsHovered(true);
    ctrls.start("hover");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    ctrls.start("initial");
  };

  return (
    <motion.div
      className="w-[80%] md:w-[70%]"
      variants={fadeLeft}
      animate={ctrlsContainer}
      {...props}
    >
      <Link
        href={link}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full border-b-2 border-muted-foreground/80 hover:border-foreground text-muted-foreground/80 hover:text-foreground py-5 z-10 transition-colors duration-200 cursor-pointer flex justify-between items-center"
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {title}
          </h2>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl">
            {description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            {techstacks.map((Icon, index) => (
              <Icon key={index} className="w-3 h-3 md:w-5 md:h-5" />
            ))}
          </div>
        </div>
        <Magnetic padding={200}>
          <motion.div
            variants={cardVariants}
            animate={isHovered ? "hover" : "initial"}
            className="absolute right-[25%] top-1/2 -translate-y-1/2 w-56 h-56 bg-foreground rounded-xl flex justify-center items-center z-30"
          >
            {image ? (
              <Image src={image} alt={title} fill className="object-cover" />
            ) : (
              <Image src="/logo.png" alt="logo" width={200} height={200} />
            )}
          </motion.div>
        </Magnetic>
        <motion.div
          variants={arrowVariants}
          animate={isHovered ? "hover" : "initial"}
        >
          <ArrowRightIcon className="w-10 h-10" />
        </motion.div>
      </Link>
    </motion.div>
  );
};
