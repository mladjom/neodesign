"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

interface ChallengeAndSolutionProps {
  challenge: string;
  solution: string;
}

export function ChallengeAndSolution({
  challenge,
  solution
}: ChallengeAndSolutionProps) {
  return (
    <SectionWrapper background="muted">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">The Challenge</h2>
          <p className="text-muted-foreground">{challenge}</p>
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">The Solution</h2>
          <p className="text-muted-foreground">{solution}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}