import { Variants } from "framer-motion";

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
