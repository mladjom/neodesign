"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/core/OptimizedImage";

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ProjectProcessSectionProps {
  steps: ProcessStep[];
}

export function ProjectProcessSection({ steps }: ProjectProcessSectionProps) {
  return (
    <SectionWrapper title="Our Process" centered>
      <div className="space-y-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="grid gap-12 md:grid-cols-2 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
            <div className={index % 2 ? "md:order-1" : ""}>
              <div className="aspect-video relative">
                <OptimizedImage
                  src={step.image}
                  alt={step.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}