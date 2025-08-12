"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SparklesText } from "../sparkle-text";
import { ProjectCard } from "./project-card";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExpandableCard } from "./expandable-card";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants } from "./anim";

export const ProjectsSection = () => {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const ctrls = useAnimation();
  const isIsView = useInView(ref, { once: true });

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
      className="flex flex-col justify-center items-center"
    >
      <SparklesText className="mt-40">My Projects</SparklesText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-40 relative">
        <Image
          src="/logo.png"
          alt="logo"
          width={400}
          height={300}
          className="opacity-5 w-full hover:opacity-10 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <ExpandableCard active={active} id={id} ref={ref} />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={id}
            title={project.title}
            description={project.description}
            image={project.image}
            techstacks={project.techstacks}
            onClick={() => setActive(project)}
          />
        ))}
      </div>
    </motion.div>
  );
};

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
  },
  {
    title: "Learning Management System",
    description:
      "Sebuah platform pembelajaran online yang dirancang khusus untuk kebutuhan mahasiswa universitas. LMS ini mencakup berbagai fitur penting seperti manajemen modul dan course, tracking progress belajar, sistem kuis interaktif, dan dashboard admin. Dibangun menggunakan kombinasi frontend React dan backend Laravel, aplikasi ini mendukung pengelolaan konten pendidikan yang terstruktur dan efisien dengan antarmuka yang ramah pengguna.",
    image: "",
    link: "https://example.com/project2",
    techstacks: ["TypeScript", "React", "Laravel", "Tailwind CSS"],
  },
  {
    title: "Search Engine",
    description:
      "Aplikasi mesin pencari ini dibangun untuk menelusuri konten berbasis teks secara cepat dan efisien. Menggunakan Next.js sebagai framework utama dan teknik information retrieval seperti tokenisasi dan indexing, sistem ini mampu memproses dokumen dan menampilkan hasil pencarian dengan relevansi tinggi. Cocok digunakan untuk website dokumentasi, perpustakaan digital, atau basis data internal perusahaan.",
    image: "",
    link: "https://example.com/project3",
    techstacks: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "NextWalls",
    description:
      "NextWalls adalah aplikasi galeri wallpaper modern yang memungkinkan pengguna menjelajahi, menyimpan, dan mengunduh wallpaper resolusi tinggi. Dibangun dengan teknologi Next.js untuk performa optimal, aplikasi ini juga mendukung fitur filter berdasarkan resolusi dan kategori. Dengan UI yang clean dan responsif, NextWalls memberikan pengalaman visual yang menarik untuk para pencinta desain dan fotografi digital.",
    image: "",
    link: "https://example.com/project4",
    techstacks: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
];
