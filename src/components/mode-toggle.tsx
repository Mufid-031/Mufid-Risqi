"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const glowEl = document.getElementById("theme-glow");
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect || !glowEl) return;

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Posisi efek glow
    glowEl.style.setProperty("--theme-toggle-x", `${x}px`);
    glowEl.style.setProperty("--theme-toggle-y", `${y}px`);

    // Mulai animasi
    glowEl.classList.add("transitioning");

    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      glowEl.classList.remove("transitioning");
    }, 600); // ≈ 50% dari durasi 1200ms

  };

  return (
    <Button
      ref={(el) => {
        buttonRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref)
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
            el;
      }}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2 cursor-pointer", className)}
      aria-label="Toggle theme"
      onClick={handleClick}
      {...props}
    >
      <SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden" />
      <MoonIcon className="hidden size-[1.2rem] dark:block text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
