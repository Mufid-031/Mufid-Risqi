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

export const fadeLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.5,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

export const cardVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -12,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1,
    rotate: 12,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const arrowVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
