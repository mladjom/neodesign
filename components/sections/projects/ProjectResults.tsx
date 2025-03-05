"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

interface ProjectResult {
  metric: string;
  value: string;
}

interface ProjectResultsProps {
  results: ProjectResult[];
}

export function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <SectionWrapper background="muted" title="Results" centered>
      <div className="grid gap-8 md:grid-cols-3">
        {results.map((result, index) => (
          <motion.div
            key={result.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center space-y-2"
          >
            <p className="text-4xl font-bold text-primary">{result.value}</p>
            <p className="text-muted-foreground">{result.metric}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}