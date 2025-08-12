"use client";

import { SiGmail } from "react-icons/si";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa6";
import { RiGithubFill } from "react-icons/ri";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { hoverCardVariants } from "./anim";
import { cn } from "@/lib/utils";

export const Social = () => {
  const MotionCard = motion(Card);

  return (
    <>
      {socialIcons.map((item, index) => (
        <MotionCard
          key={item.name}
          className={cn(
            "flex items-center justify-center gap-2",
            item.className
          )}
          variants={hoverCardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={index % 2 == 0 ? -3 : 3}
        >
          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            <item.icon className="w-12 h-12" />
          </Link>
        </MotionCard>
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
    className: "bg-foreground text-background",
  },
  {
    name: "GitHub",
    url: "https://github.com/Mufid-031",
    icon: RiGithubFill,
    className: "bg-foreground text-background",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/coding-with-mufid",
    icon: LinkedInLogoIcon,
    className: "bg-blue-500 text-white",
  },
];
