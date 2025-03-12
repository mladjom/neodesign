"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ExternalLink } from "lucide-react";

interface ProjectDetailHeroProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
}

export function ProjectDetailHero({ 
  title, 
  description, 
  technologies,
  projectUrl
}: ProjectDetailHeroProps) {
  return (
    <SectionWrapper className="pt-20 md:pt-32">
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
        
        {projectUrl && (
          <div>
            <Button variant="outline" className="mt-2" asChild>
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Live Site
              </a>
            </Button>
          </div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}