"use client";

import Magnetic from "../common/magnetic";
import RoundedButton from "../common/rounded-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeUp } from "./anim";
import { useEffect, useRef } from "react";

export const Profile = () => {
  const MotionCard = motion(Card);
  const ref = useRef<HTMLDivElement>(null);
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
      initial="initial"
      animate="animate"
      className="lg:col-span-2 lg:row-span-2 col-span-2 rounded-xl lg:h-[27rem] p-10"
    >
      <div className="flex gap-5">
        <Avatar className="bg-muted flex justify-center items-center w-24 h-24 border-4 border-foreground">
          <AvatarImage
            src="/me.jpg"
            alt="profile"
            className="object-cover object-top"
          />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 mt-3">
          <h1 className="text-2xl font-bold">Ahmad Mufid Risqi</h1>
          <h2 className="text-muted-foreground text-md">Fullstack Developer</h2>
        </div>
      </div>
      <p className="mt-5 text-muted-foreground text-xl">
        <span className="text-foreground font-bold">
          Hi! I&apos;m Ahmad Mufid Risqi,
        </span>{" "}
        an Information Technology student passionate about web development and
        learning new technologies. I enjoy building clean and functional digital
        experiences.
      </p>
      <Magnetic magnetStrength={20} padding={0.1}>
        <RoundedButton className="group px-6 py-3">
          <p className="group-hover:text-muted z-10">Download CV</p>
        </RoundedButton>
      </Magnetic>
    </MotionCard>
  );
};
