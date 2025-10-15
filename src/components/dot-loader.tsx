"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

export const ballVariants: Variants = {
  animate: (index: number) => ({
    y: [0, -5, 0, -5, 0, -5, 0],
    transition: {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: index * 0.2,
    },
  }),
};

export const DotLoader = ({
  position = "LEFT TOP",
}: {
  position?: "LEFT TOP" | "RIGHT TOP" | "LEFT BOTTOM" | "RIGHT BOTTOM";
}) => {
  const classPosition =
    position === "LEFT TOP"
      ? "left-10 top-10"
      : position === "RIGHT TOP"
      ? "right-10 top-10"
      : position === "LEFT BOTTOM"
      ? "left-10 bottom-10"
      : "right-10 bottom-10";

  return (
    <motion.div
      className={cn("absolute text-xl flex items-end gap-1", classPosition)}
    >
      <motion.div className="flex gap-2 items-end">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-muted"
            variants={ballVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
