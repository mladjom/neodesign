"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProcessData } from "@/config/services";

export function ProcessTimeline() {
  return (
    <SectionWrapper background="muted" title="Our Process">
      <div className="max-w-3xl mx-auto">
        {ProcessData.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative pl-8 pb-12 border-l border-primary/20 last:border-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}