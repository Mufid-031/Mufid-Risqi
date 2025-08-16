import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const hoverCardVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: (rotate: number) => ({
    scale: 1.1,
    rotate,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};
