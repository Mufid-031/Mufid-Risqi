"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

const certificates = [
  {
    title: "AWS Dasar Cloud",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_aws-dasar-cloud.pdf",
    image: "/certificates/images/aws.png",
    issued: "Des ~ 23 Desember 2027",
  },
  {
    title: "Backend Pemula dengan JavaScript",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_belajar-back-end-pemula.pdf",
    image: "/certificates/images/backend.png",
    issued: "Des ~ 19 Desember 2027",
  },
  {
    title: "Dasar AI",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_belajar-dasar-AI.pdf",
    image: "/certificates/images/dasar-ai.png",
    issued: "Des ~ 18 Desember 2027",
  },
  {
    title: "Dasar Pemrograman JavaScript",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_dasar-pemrograman-javascript.pdf",
    image: "/certificates/images/javascript.png",
    issued: "Des ~ 10 Desember 2027",
  },
  {
    title: "Dasar Pemrograman Web",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_dasar-pemrograman-web.pdf",
    image: "/certificates/images/dpw.png",
    issued: "Des ~ 09 Desember 2027",
  },
  {
    title: "Frontend Web",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_frontend-web.pdf",
    image: "/certificates/images/frontend.png",
    issued: "Des ~ 10 Desember 2027",
  },
  {
    title: "Frontend Web",
    company: "Dicoding",
    file: "/certificates/dicoding_sertif_react-developer.pdf",
    image: "/certificates/images/react.png",
    issued: "Des ~ 10 Desember 2027",
  },
];

export function CertificateCard() {
  return (
    <div className="min-h-screen w-full flex flex-wrap gap-x-20 gap-y-32 items-center justify-center p-8 my-32">
      {certificates.map((cert) => (
        <PinContainer key={cert.title} title={cert.title} href={cert.file}>
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[25rem] h-[24rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="size-3 rounded-full bg-green-500 animate-pulse" />
              <div className="text-xs text-slate-400">Certificate</div>
            </div>

            {/* Thumbnail */}
            <div className="relative w-full h-56 rounded-lg overflow-hidden border border-slate-700/50">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 mt-4 space-y-2">
              <div className="text-lg font-bold text-slate-100">
                {cert.title}
              </div>
              <div className="text-sm text-slate-400">
                Issued: {cert.issued}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end text-xs text-slate-500">
              Click to open
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
