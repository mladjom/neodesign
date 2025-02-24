// components/projects/ProjectGrid.tsx
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
}
