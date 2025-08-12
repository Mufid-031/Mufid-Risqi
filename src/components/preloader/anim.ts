import { Variants } from "framer-motion";

export const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

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
