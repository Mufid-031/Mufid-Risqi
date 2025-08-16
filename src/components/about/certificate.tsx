"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Card } from "../ui/card";
import { fadeUp } from "./anim";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";
import { Separator } from "../ui/separator";
import { FloatingElement } from "../floating-element";

export const Certificate = () => {
  const MotionCard = motion(Card);
  const ref = useRef<HTMLDivElement | null>(null);
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
      animate={ctrls}
      className="lg:col-span-4 col-span-2 rounded-xl p-10"
    >
      <h3 className="font-bold text-muted-foreground text-xl">Certificate</h3>
      <Separator />
      <div className="w-full h-full flex flex-col gap-10 mt-5">
        {certificates.map((certificate, index) => (
          <CertificateList key={index} {...certificate} />
        ))}
      </div>
      <Separator />
      <div className="flex items-center justify-end">
        <Button variant="link">
          <Link href="/certificates" className="flex gap-3">
            See all <ArrowUpRightFromSquare className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </MotionCard>
  );
};

const CertificateList = ({
  name,
  company,
  href,
  expired,
}: {
  name: string;
  company: string;
  href: string;
  expired: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className="flex justify-between relative">
      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-md md:text-md">{name}</h3>
          <p className="text-muted-foreground text-xs md:text-sm">{company}</p>
        </div>
      </div>
      <span className="text-muted-foreground text-sm md:text-md">
        {expired}
      </span>
      <FloatingElement containerRef={ref} text={"See • more • details •"} />
    </div>
  );
};

const certificates = [
  {
    name: "AWS Dasar Cloud",
    company: "Dicoding",
    href: "/certificates/dicoding_sertif_aws-dasar-cloud.pdf",
    expired: "Now ~ 23 Desember 2027",
  },
  {
    name: "Backend Pemula dengan JavaScript",
    company: "Dicoding",
    href: "/certificates/dicoding_sertif_belajar-back-end-pemula.pdf",
    expired: "Now ~ 19 Desember 2027",
  },
  {
    name: "Dasar AI",
    company: "Dicoding",
    href: "/certificates/dicoding_sertif_belajar-dasar-AI.pdf",
    expired: "Now ~ 18 Desember 2027",
  },
];
