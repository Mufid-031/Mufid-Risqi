"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./card";

export const Lanyard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="w-full h-screen relative" ref={ref}>
      <div className="absolute inset-0 bg-[#0d0d0d]">
        {isInView && <Card />}
      </div>
    </div>
  );
};
