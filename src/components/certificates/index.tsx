"use client";

import { motion } from "framer-motion";
import { SparklesText } from "@/components/sparkle-text";
import { CertificateCard } from "./certificate-card";
import { containerVariants } from "./anim";

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
