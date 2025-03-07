"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function AboutHero() {
  return (
    <SectionWrapper className="relative pt-20 md:pt-32">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl text-muted-foreground">
          We're a team of passionate designers and developers dedicated to
          transforming ideas into exceptional digital experiences.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}