"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ContactHero() {
  return (
    <SectionWrapper className="pt-20 md:pt-32">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Let's discuss how we can help bring your vision to life
        </p>
      </motion.div>
    </SectionWrapper>
  );
}