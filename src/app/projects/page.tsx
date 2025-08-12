"use client";

import { Background } from "@/components/background";
import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects";

export default function Projects() {
  return (
    <>
      <Header />
      <Background />
      <ProjectsSection />
      <BottomNav />
    </>
  );
}
