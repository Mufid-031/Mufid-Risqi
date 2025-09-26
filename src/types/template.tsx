"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [showOverlay, setShowOverlay] = useState(false);
  const [readyToShow, setReadyToShow] = useState(false);

  const pathname = usePathname();

  const routeName = useMemo(() => {
    const map: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/projects": "Projects",
    };
    return map[pathname] ?? pathname.replace("/", "") ?? "";
  }, [pathname]);

  // Tentukan first load vs navigasi
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      // First load → TIDAK tampil overlay, langsung render konten (di balik preloader)
      setShowOverlay(false);
      setReadyToShow(true);
    } else {
      // Navigasi berikutnya → tampilkan overlay dan animasikan
      setReadyToShow(false);
      setShowOverlay(true);
    }

    // Cleanup saat route berubah / unmount: matikan timeline dan reset style
    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
      if (overlayRef.current)
        gsap.set(overlayRef.current, { clearProps: "all" });
    };
  }, [pathname]);

  // Jalankan GSAP SETELAH overlay ter-mount & ter-paint
  useLayoutEffect(() => {
    if (!showOverlay || !overlayRef.current) return;

    // Tunggu satu frame supaya DOM sudah siap
    const id = requestAnimationFrame(() => {
      const el = overlayRef.current!;
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          setReadyToShow(true); // tampilkan konten setelah overlay keluar
          setShowOverlay(false); // unmount overlay
        },
      });
      tlRef.current = tl;

      tl.set(el, { yPercent: -100 })
        .to(el, { yPercent: 0, duration: 1.1 }) // masuk
        .to(el, { yPercent: 100, duration: 0.8, ease: "power2.in" }); // keluar
    });

    return () => cancelAnimationFrame(id);
  }, [showOverlay]);

  return (
    <div>
      {showOverlay && (
        <div
          ref={overlayRef}
          className="w-full min-h-screen bg-primary-foreground fixed inset-0 z-[999] flex justify-center items-center text-muted-foreground capitalize text-8xl font-bold"
        >
          {routeName}
        </div>
      )}

      {readyToShow && children}
    </div>
  );
}
