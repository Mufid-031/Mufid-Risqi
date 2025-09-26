"use client";

import { motion } from "framer-motion";
import { SparklesText } from "@/components/sparkle-text";
import { CertificateCard } from "./certificate-card";

export default function CertificatesSection() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-col justify-center items-center"
    >
      <SparklesText className="mt-40">My Certificates</SparklesText>
      <CertificateCard />
    </motion.div>
  );
}
