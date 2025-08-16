"use client";

import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { fadeUp } from "./anim";
import { Separator } from "../ui/separator";

export const Exprerience = () => {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="lg:col-span-4 col-span-2 rounded-xl p-10"
    >
      <h3 className="font-bold text-muted-foreground text-xl">Experience</h3>
      <Separator />
      <div className="w-full h-full flex flex-col gap-10 mt-5">
        {expreriences.map((experience, index) => (
          <div className="flex justify-between" key={index}>
            <div className="flex gap-3">
              {/* <div className="w-14 h-14 bg-muted-foreground rounded-full"></div> */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-md md:text-md">
                  {experience.company}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {experience.position}
                </p>
              </div>
            </div>
            <span className="text-muted-foreground text-sm md:text-md">
              {experience.duration}
            </span>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

const expreriences = [
  {
    company: "UKM-FT ITC Universitas Trunojoyo Madura",
    position: "Sekretaris Divisi Penelitian dan Pengembangan",
    duration: "2024 ~ 2025",
  },
];
