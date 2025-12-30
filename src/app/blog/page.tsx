"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FileTextIcon, SearchIcon } from "lucide-react";

import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import LightRays from "@/components/light-rays";
import ShinyText from "@/components/shiny-text";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
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
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-left"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HERO */}
        <section className="pt-28 md:pt-36 flex flex-col items-center gap-3 max-w-xl w-full text-center">
          <div className="w-16 h-16 bg-muted/90 p-4 rounded-xl flex items-center justify-center">
            <FileTextIcon className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-[#00ffff]">Blog</span>
          </h1>

          <ShinyText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            speed={2}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
          />

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
        </section>

        {/* CONTENT GRID */}
        <section className="w-full mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Blog list */}
            <div className="md:col-span-2 border-t border-r p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    rotate: -2,
                    transition: {
                      duration: 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  className="aspect-square border rounded-md bg-muted/30"
                >
                  <div className="p-5 flex flex-col justify-between h-40">
                    <h1>Lorem, ipsum.</h1>
                    <span>Views</span>
                  </div>
                  <Separator />
                  <div className="flex gap-3 p-5">
                    <Badge variant="secondary">Category</Badge>
                    <Badge variant="secondary">Category</Badge>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="border-t p-6 min-h-[300px]" />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
