"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa6";
import { RiGithubFill } from "react-icons/ri";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

import { hoverCardVariants } from "./anim";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

export const Social = () => {
  const MotionCard = motion(Card);

  return (
    <>
      {socialIcons.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <MotionCard
            className={cn(
              "flex items-center justify-center gap-2 w-full h-full",
              item.className
            )}
            variants={hoverCardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            custom={index % 2 == 0 ? -3 : 3}
          >
            <item.icon className="w-12 h-12" />
          </MotionCard>
        </Link>
      ))}
    </>
  );
};

const socialIcons = [
  {
    name: "Gmail",
    url: "mailto:risqimufid50@gmail.com",
    icon: SiGmail,
    className: "bg-red-500 text-white",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@codingwithmufid",
    icon: FaTiktok,
    className: "bg-card text-foreground",
  },
  {
    name: "GitHub",
    url: "https://github.com/Mufid-031",
    icon: RiGithubFill,
    className: "bg-card-foreground text-background",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/coding-with-mufid",
    icon: LinkedInLogoIcon,
    className: "bg-blue-500 text-white",
  },
];
