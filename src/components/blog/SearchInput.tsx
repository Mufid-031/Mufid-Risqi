"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Kbd, KbdGroup } from "../ui/kbd";
import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;

        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const LeadingComp = () => (
    <KbdGroup>
      <Kbd>Shift</Kbd>
      <Kbd>S</Kbd>
    </KbdGroup>
  );

  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder="Search..."
      className="w-full h-12"
      icon={<SearchIcon className="w-4 h-4" />}
      leading={<LeadingComp />}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
