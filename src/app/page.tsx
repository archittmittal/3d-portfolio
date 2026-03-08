"use client";

import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";

// Lazy load below-fold sections for faster initial load
const SkillsSection = dynamic(() => import("@/components/sections/skills"), {
  ssr: false,
});
const ExperienceSection = dynamic(() => import("@/components/sections/experience"), {
  ssr: false,
});
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/sections/contact"), {
  ssr: false,
});

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
