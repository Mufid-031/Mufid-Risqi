"use client";

import React from "react";
import {
  ReactThemeSwitchAnimationProps,
  useModeAnimation,
} from "@/hooks/use-animation-mode";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface SwitchDarkModeProps extends ReactThemeSwitchAnimationProps {
  className?: string;
}

const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({
  className = "",
  isDarkMode: externalDarkMode,
  onDarkModeChange,
  ...props
}) => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    ...props,
    isDarkMode: externalDarkMode, 
    onDarkModeChange,
  });

  return (
    <Button
      ref={ref}
      onClick={toggleSwitchTheme}
      variant="ghost"
      className={cn("rounded-full cursor-pointer", className)}
      aria-label={isDarkMode === true ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">
        {isDarkMode === true ? "Switch to light mode" : "Switch to dark mode"}
      </span>

      <div className="relative">{isDarkMode ? <MoonIcon /> : <SunIcon />}</div>
    </Button>
  );
};

export default SwitchDarkMode;
