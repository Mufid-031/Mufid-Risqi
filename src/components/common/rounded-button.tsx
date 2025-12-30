"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import Magnetic from "./magnetic";

interface RoundedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number;
  children: React.ReactNode;
  className?: string;
}

export default function RoundedButton({
  padding = 100,
  children,
  className,
  ...attributes
}: RoundedButtonProps) {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current!.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current!.play();
    }, 300);
  };

  return (
    <Magnetic padding={padding}>
      <div
        className={cn(
          "rounded-[3em] border border-slate-300 cursor-pointer relative flex items-center justify-center px-16 py-4 transition-colors duration-300",
          className
        )}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          className="w-full h-[150%] absolute rounded-full top-[100%] bg-accent-foreground"
        ></div>
      </div>
    </Magnetic>
  );
}
