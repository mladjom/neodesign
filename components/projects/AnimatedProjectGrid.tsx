'use client';

import { motion } from "framer-motion";
import { ProjectAnimatedCard } from "./ProjectAnimatedCard";
import type { Project } from "@/types/project";

interface AnimatedProjectGridProps {
  projects: Project[];
}

export function AnimatedProjectGrid({ projects }: AnimatedProjectGridProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ProjectAnimatedCard key={project.slug} project={project} index={index} />
      ))}
    </motion.div>
  );
}
