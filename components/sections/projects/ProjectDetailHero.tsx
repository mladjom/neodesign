"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

interface ProjectDetailHeroProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectDetailHero({ 
  title, 
  description, 
  technologies 
}: ProjectDetailHeroProps) {
  return (
    <SectionWrapper className="pt-20 md:pt-32">
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="text-xl text-muted-foreground">{description}</p>
      </motion.div>
    </SectionWrapper>
  );
}