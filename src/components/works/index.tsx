"use client";

import { Suspense, useEffect, useRef } from "react";
import RoundedButton from "../common/rounded-button";
import { CardWork } from "./card-work";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiLangchain,
  SiLaravel,
  SiReact,
  SiTypescript,
  SiUpstash,
} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants } from "./anim";
import Link from "next/link";

export const Works = () => {
  const { theme } = useTheme();
  const ctrls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }
  }, [ctrls, isInView]);

  return (
    <motion.div
      data-scroll-section
      ref={ref}
      className="w-full overflow-hidden pb-20 flex flex-col items-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h1
        data-scroll
        data-scroll-speed="1"
        className="text-[5rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-extrabold text-muted/50 text-center mb-10"
      >
        MY WORKS
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="w-full h-full flex flex-col justify-center items-center gap-5 mb-20"
      >
        {projects.map((project, index) => (
          <CardWork
            key={index}
            ctrlsContainer={ctrls}
            custom={index}
            {...project}
          />
        ))}
      </div>
      <RoundedButton padding={15} className="group px-6 py-3 mb-20">
        <Link href="/projects" className="group-hover:text-muted z-10">
          SEE MORE
        </Link>
      </RoundedButton>
      <Suspense fallback={null}>
        <div className="w-full overflow-x-auto px-4 flex justify-center">
          <div className="min-w-[400px]">
            <GitHubCalendar
              username="Mufid-031"
              year="last"
              blockMargin={5}
              blockSize={13}
              showWeekdayLabels
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={15}
              style={{
                color: theme === "dark" ? "white" : "black",
              }}
            />
          </div>
        </div>
      </Suspense>
    </motion.div>
  );
};

const projects = [
  {
    title: "RAG Chatbot",
    description: "Powered by OpenAI GPT-3.5",
    image: "",
    link: "https://example.com/project1",
    techstacks: [
      SiTypescript,
      RiNextjsFill,
      RiTailwindCssFill,
      SiLangchain,
      SiUpstash,
    ],
  },
  {
    title: "Learning Management System",
    description: "LMS for University Students",
    image: "",
    link: "https://example.com/project2",
    techstacks: [SiTypescript, SiReact, SiLaravel, RiTailwindCssFill],
  },
  {
    title: "Search Engine",
    description: "Search Engine built with Next.js",
    image: "",
    link: "https://example.com/project3",
    techstacks: [SiTypescript, RiNextjsFill, RiTailwindCssFill],
  },
  {
    title: "NextWalls",
    description: "Wallpaper App built with Next.js",
    image: "",
    link: "https://example.com/project3",
    techstacks: [SiTypescript, RiNextjsFill, RiTailwindCssFill],
  },
];
