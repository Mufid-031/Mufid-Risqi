"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, Zap } from "lucide-react";
import { SpinningText } from "./spinning-text";
import { RefObject, useEffect, useState } from "react";

export const FloatingElement = ({
  containerRef,
  icon = Zap,
  text,
}: {
  containerRef: RefObject<HTMLElement | null>;
  icon?: LucideIcon;
  text: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const Icon = icon;

  const getMousePosition = (e: Event, container?: HTMLElement | null) => {
    const mouseEvent = e as MouseEvent;
    if (container) {
      const bounds = container.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - bounds.left,
        y: mouseEvent.clientY - bounds.top,
      };
    }

    return { x: mouseEvent.clientX, y: mouseEvent.clientY };
  };

  const handleMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent;
    setPosition(getMousePosition(mouseEvent, containerRef.current));
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mouseenter", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [containerRef]);

  if (!containerRef.current) return null;

  if (position.x === 0 && position.y === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            type: "spring",
            stiffness: 200,
            damping: 20,
          },
        }}
        exit={{ opacity: 0, scale: 0 }}
        style={{ x: position.x, y: position.y } as React.CSSProperties}
      >
        <Icon
          fill="white"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7"
        />
        <SpinningText className="absolute pointer-events-none text-xs">
          {text}
        </SpinningText>
      </motion.div>
    </AnimatePresence>
  );
};
