import { Variants } from "framer-motion";

export const imageVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [-10, 10],
    scale: [1.1, 1],
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      damping: 15,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
