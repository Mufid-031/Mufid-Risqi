"use client";

import gsap from "gsap";
import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { Tagline } from "@/components/tagline";
import { DotLoader } from "@/components/dot-loader";

type TransitionPageContextType = {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  readyToShow: boolean;
  setReadyToShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransitionPageContext = createContext<TransitionPageContextType | null>(
  null
);

export function TransitionPageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [readyToShow, setReadyToShow] = useState<boolean>(true);

  const pathname = usePathname();

  const routeName = useMemo(() => {
    const map: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/projects": "Projects",
      "/certificates": "Certificates",
    };

    return map[pathname] ?? pathname.replace("/", "") ?? "";
  }, [pathname]);

  useLayoutEffect(() => {
    if (!showOverlay || !overlayRef.current) return;

    const id = requestAnimationFrame(() => {
      const el = overlayRef.current!;
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          setReadyToShow(true);
          setShowOverlay(false);
        },
      });

      tlRef.current
        .set(el, { yPercent: -100 })
        .to(el, { yPercent: 0, duration: 1.1 })
        .to(el, { yPercent: 100, duration: 0.8, ease: "power2.in" });
    });

    return () => cancelAnimationFrame(id);
  }, [showOverlay]);

  return (
    <TransitionPageContext.Provider
      value={{ showOverlay, setShowOverlay, readyToShow, setReadyToShow }}
    >
      <div>
        {showOverlay && (
          <div
            ref={overlayRef}
            className="w-full min-h-screen bg-foreground fixed inset-0 z-[999] flex justify-center items-center text-background capitalize text-8xl font-bold"
          >
            <DotLoader position="LEFT TOP" />
            {routeName}
            <Tagline />
          </div>
        )}

        {readyToShow && children}
      </div>
    </TransitionPageContext.Provider>
  );
}

export function useTransitionPage() {
  const context = useContext(TransitionPageContext);

  if (!context) {
    throw new Error(
      "useTransitionPage must be used within a TransitionPageProvider"
    );
  }

  return context;
}
