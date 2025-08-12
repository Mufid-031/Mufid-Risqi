"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

type Props = {
  children: React.ReactNode;
};

export const LocomotiveProvider = ({ children }: Props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // smooth speed
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="locomotive-scroll" ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};
