"use client";

import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, GraduationCap, Users, FlaskConical } from "lucide-react";

const ABOUT_CONTENT = [
  {
    icon: Brain,
    title: "What I Build",
    content:
      "I build AI systems that have to work outside a notebook: agents, the tooling that watches them, and the models underneath. Currently an AI Builder intern (R&D) at Razorpay and a 10x national hackathon finalist.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    content:
      "B.Tech Computer Science and Engineering student at Graphic Era Hill University, graduating in 2028. Focus on software development, open source contribution, and research driven problem solving.",
  },
  {
    icon: FlaskConical,
    title: "Research & Open Source",
    content:
      "Co-founder of PxA Labs, an open-source AI research and engineering group with 100+ GitHub stars across its projects. Co-author of a preprint on real-time wavefront reconstruction (Project RIPRA), with merged pull requests in sktime.",
  },
  {
    icon: Users,
    title: "Leadership",
    content:
      "Treasurer of the IEEE Student Branch at GEHU. Previously led business development and sponsorships at AIESEC in India, and served as Senior Manager Incoming Social Sector.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Get to know me better."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ABOUT_CONTENT.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border h-full",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
