"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Background } from "@/components/background";
import { PinContainer } from "@/components/ui/3d-pin";
import { SparklesText } from "@/components/sparkle-text";

export const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const cardVariants: Variants = {
  initial: {
    scale: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Certificates() {
  return (
    <main>
      <Background />
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center"
      >
        <SparklesText className="mt-40">My Certificates</SparklesText>
        <div className="min-h-screen w-full flex flex-wrap gap-x-20 gap-y-32 items-center justify-center p-8 my-32">
          {certificates.map((cert) => (
            <PinContainer key={cert.title} title={cert.title} href={cert.file}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[25rem] h-[24rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="text-xs text-slate-400">Certificate</div>
                </div>

                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-slate-700/50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 mt-4 space-y-2">
                  <div className="text-lg font-bold text-slate-100">
                    {cert.title}
                  </div>
                  <div className="text-sm text-slate-400">
                    Issued: {cert.issued}
                  </div>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

const certificates = [
  {
    title: "AWS Dasar Cloud",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_aws-dasar-cloud.pdf",
    image: "/certificates/images/aws.png",
    issued: "23 Desember 2024 ~ 23 Desember 2027",
  },
  {
    title: "Backend Pemula dengan JavaScript",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_belajar-back-end-pemula.pdf",
    image: "/certificates/images/backend.png",
    issued: "19 Desember 2024 ~ 19 Desember 2027",
  },
  {
    title: "Dasar AI",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_belajar-dasar-AI.pdf",
    image: "/certificates/images/dasar-ai.png",
    issued: "18 Desember 2024 ~ 18 Desember 2027",
  },
  {
    title: "Dasar Pemrograman JavaScript",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_dasar-pemrograman-javascript.pdf",
    image: "/certificates/images/javascript.png",
    issued: "10 Desember 2024 ~ 10 Desember 2027",
  },
  {
    title: "Dasar Pemrograman Web",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_dasar-pemrograman-web.pdf",
    image: "/certificates/images/dpw.png",
    issued: "09 Desember 2024 ~ 09 Desember 2027",
  },
  {
    title: "Frontend Web",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_frontend-web.pdf",
    image: "/certificates/images/frontend.png",
    issued: "10 Desember 2024 ~ 10 Desember 2027",
  },
  {
    title: "React Developer",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_react-developer.pdf",
    image: "/certificates/images/react.png",
    issued: "10 Desember 2024 ~ 10 Desember 2027",
  },
];
