"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "../ui/separator";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, { scope: ref });

  return (
    <footer
      ref={ref}
      className="w-full md:h-96 bg-primary-foreground p-10 md:p-20 z-30"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between z-40">
        <div className="w-full md:w-1/2">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="-ml-7"
          />
          <h4 className="text-foreground/70 md:w-1/2 -mt-6">
            Transforming ideas into intuitive, engaging, and functional digital
            solutions.
          </h4>
        </div>
        <div className="w-full md:w-1/2 flex gap-20 md:justify-end mt-14">
          <div className="space-y-2">
            <h5 className="text-foreground font-bold text-xl">Links</h5>
            <div className="font-light flex flex-col gap-2">
              <Link
                className="text-foreground/70 hover:text-foreground"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-foreground/70 hover:text-foreground"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-foreground/70 hover:text-foreground"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="text-foreground font-bold text-xl">Connect</h5>
            <div className="font-light flex flex-col gap-2">
              <Link
                className="text-foreground/70 hover:text-foreground"
                href="https://github.com/Mufid-031"
              >
                Github
              </Link>
              <Link
                className="text-foreground/70 hover:text-foreground"
                href="https://www.linkedin.com/in/coding-with-mufid"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="md:mt-13 mt-5" />
      <h6 className="text-foreground/70 text-center mt-4 text-sm">© 2025 Ahmad Mufid Risqi. All rights reserved.</h6>
    </footer>
  );
};
