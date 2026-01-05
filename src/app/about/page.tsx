"use client";

import { useTheme } from "next-themes";

import { Profile } from "@/components/about/profile";
import { Social } from "@/components/about/social";
import { Exprerience } from "@/components/about/experience";
import { Location } from "@/components/about/location";
import { Skills } from "@/components/about/skills";
import { Certificate } from "@/components/about/certificate";
import { Background } from "@/components/background";
import DomeGallery from "@/components/dome-gallery";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <Background />
      <div className="w-[90%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-4 z-20">
        <Profile />
        <Social />
        <Exprerience />
        <Certificate />
        <Location />
        <Skills />
      </div>
      <div className="w-full h-screen my-20">
        <DomeGallery
          overlayBlurColor={theme === "dark" ? "#0a0a0a" : "#ffffff"}
          grayscale={true}
        />
      </div>
    </div>
  );
}
