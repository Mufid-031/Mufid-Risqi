import { Transition, Variants } from "framer-motion";

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

export const transitionAnimation: Transition = {
  duration: 0.5,
  type: "spring",
  stiffness: 100,
  damping: 20,
};
