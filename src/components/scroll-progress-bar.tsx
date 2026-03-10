"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SECTION_COLORS = [
  { id: "hero", light: "#6366f1", dark: "#818cf8" },       // indigo
  { id: "about", light: "#8b5cf6", dark: "#a78bfa" },      // violet
  { id: "skills", light: "#ec4899", dark: "#f472b6" },     // pink
  { id: "experience", light: "#f97316", dark: "#fb923c" }, // orange
  { id: "projects", light: "#06b6d4", dark: "#22d3ee" },   // cyan
  { id: "contact", light: "#10b981", dark: "#34d399" },    // emerald
];

function getActiveColor(isDark: boolean): string {
  const sections = SECTION_COLORS.map(({ id, light, dark }) => {
    const el = document.getElementById(id);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return { id, color: isDark ? dark : light, top: rect.top, bottom: rect.bottom };
  }).filter(Boolean) as { id: string; color: string; top: number; bottom: number }[];

  const viewportCenter = window.innerHeight / 2;

  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].top <= viewportCenter) {
      return sections[i].color;
    }
  }

  return sections[0]?.color ?? (isDark ? "#818cf8" : "#6366f1");
}

export default function ScrollProgressBar() {
  const scaleX = useMotionValue(0);
  const smoothScaleX = useSpring(scaleX, { stiffness: 100, damping: 30, mass: 0.5 });
  const [color, setColor] = useState("#818cf8");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDark = () => document.documentElement.classList.contains("dark");

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      scaleX.set(progress);
      setVisible(scrollTop > 50);
      setColor(getActiveColor(isDark()));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left pointer-events-none"
      style={{
        scaleX: smoothScaleX,
        backgroundColor: color,
        zIndex: 9999,
        boxShadow: `0 0 8px ${color}80, 0 0 20px ${color}40`,
        opacity: visible ? 1 : 0,
        transition: "background-color 0.6s ease, box-shadow 0.6s ease, opacity 0.3s ease",
      }}
    />
  );
}
