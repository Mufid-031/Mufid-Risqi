"use client";

import { motion } from "framer-motion";

import { containerVariants } from "./anim";
import { CertificateCard } from "./certificate-card";
import { SparklesText } from "@/components/sparkle-text";

export default function CertificatesSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col justify-center items-center"
    >
      <SparklesText className="mt-40">My Certificates</SparklesText>
      <CertificateCard />
    </motion.div>
  );
}
