"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

import { Button } from "../ui/button";
import { ProjectCard } from "./project-card";
import { SparklesText } from "../sparkle-text";
import { ExpandableCard } from "./expandable-card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { containerVariants, transitionAnimation } from "./anim";

export const ProjectsSection = () => {
  const [filterActive, setFilterActive] = useState<string>("all");
  const [projectsActive, setProjectsActive] =
    useState<typeof projects>(projects);
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const ctrls = useAnimation();
  const isIsView = useInView(ref, { once: true });

  const handleProjectsFilter = (active: string) => {
    setFilterActive(active);
    if (active === "all") {
      setProjectsActive(projects);
    } else {
      setProjectsActive(projects.filter((project) => project.type === active));
    }
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    if (isIsView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }
  }, [ctrls, isIsView]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col justify-center items-center mb-20"
    >
      <SparklesText className="mt-40">My Projects</SparklesText>
      <div className="flex justify-center items-center gap-5 mt-10 relative z-30">
        {filters.map((filter, index) => (
          <Button
            key={index}
            onClick={() => handleProjectsFilter(filter.value)}
            variant={filter.value === filterActive ? "default" : "outline"}
            className="rounded-full text-md cursor-pointer"
          >
            {filter.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20 relative">
        <Image
          src="/logo.png"
          alt="logo"
          width={400}
          height={300}
          className="opacity-5 w-full hover:opacity-10 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <ExpandableCard active={active} id={id} ref={ref} />
        <AnimatePresence mode="sync">
          {projectsActive.map((project, index) => (
            <ProjectCard
              key={index}
              id={id}
              title={project.title}
              description={project.description}
              image={project.image}
              techstacks={project.techstacks}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: transitionAnimation,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: transitionAnimation,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const filters = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Web",
    value: "web",
  },
  {
    name: "Mobile",
    value: "mobile",
  },
  {
    name: "Desktop",
    value: "desktop",
  },
];

const projects = [
  {
    title: "RAG Chatbot",
    description:
      "RAG Chatbot adalah chatbot pintar yang menggabungkan kekuatan Retrieval-Augmented Generation (RAG) dengan kemampuan GPT-3.5 dari OpenAI. Sistem ini dirancang untuk memberikan jawaban yang lebih akurat dan kontekstual dengan mengambil data dari sumber eksternal sebelum diproses oleh model language. Teknologi ini sangat cocok digunakan untuk chatbot berbasis pengetahuan spesifik, seperti dokumentasi perusahaan atau pusat bantuan interaktif.",
    image: "",
    link: "https://example.com/project1",
    techstacks: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Langchain",
      "Upstash",
    ],
    type: "web",
  },
  {
    title: "Learning Management System",
    description:
      "Sebuah platform pembelajaran online yang dirancang khusus untuk kebutuhan mahasiswa universitas. LMS ini mencakup berbagai fitur penting seperti manajemen modul dan course, tracking progress belajar, sistem kuis interaktif, dan dashboard admin. Dibangun menggunakan kombinasi frontend React dan backend Laravel, aplikasi ini mendukung pengelolaan konten pendidikan yang terstruktur dan efisien dengan antarmuka yang ramah pengguna.",
    image: "",
    link: "https://example.com/project2",
    techstacks: ["TypeScript", "React", "Laravel", "Tailwind CSS"],
    type: "web",
  },
  {
    title: "Search Engine",
    description:
      "Aplikasi mesin pencari ini dibangun untuk menelusuri konten berbasis teks secara cepat dan efisien. Menggunakan Next.js sebagai framework utama dan teknik information retrieval seperti tokenisasi dan indexing, sistem ini mampu memproses dokumen dan menampilkan hasil pencarian dengan relevansi tinggi. Cocok digunakan untuk website dokumentasi, perpustakaan digital, atau basis data internal perusahaan.",
    image: "",
    link: "https://example.com/project3",
    techstacks: ["TypeScript", "Next.js", "Tailwind CSS"],
    type: "web",
  },
  {
    title: "NextWalls",
    description:
      "NextWalls adalah aplikasi galeri wallpaper modern yang memungkinkan pengguna menjelajahi, menyimpan, dan mengunduh wallpaper resolusi tinggi. Dibangun dengan teknologi Next.js untuk performa optimal, aplikasi ini juga mendukung fitur filter berdasarkan resolusi dan kategori. Dengan UI yang clean dan responsif, NextWalls memberikan pengalaman visual yang menarik untuk para pencinta desain dan fotografi digital.",
    image: "",
    link: "https://example.com/project4",
    techstacks: ["TypeScript", "Next.js", "Tailwind CSS"],
    type: "desktop",
  },
  {
    title: "NextSiakad",
    description:
      "NextSIAKAD adalah sebuah Sistem Informasi Akademik (SIAKAD) berbasis web yang dirancang untuk mendukung proses manajemen akademik di perguruan tinggi. Aplikasi ini dibangun dengan pendekatan fullstack modern yang mengintegrasikan frontend, backend, serta database secara efisien.",
    image: "",
    link: "https://github.com/Mufid-031/PAW_PROJECT_NEXT_Siakad",
    techstacks: ["Laravel", "Tailwind CSS", "NestJs", "Prisma"],
    type: "mobile",
  },
];
