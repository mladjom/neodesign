"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { getAllProjects } from "@/lib/project-service";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

interface RelatedProjectsProps {
  currentSlug: string;
  category: string;
}

export function RelatedProjects({ currentSlug, category }: RelatedProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        // Filter out current project and find projects in the same category
        const relatedProjects = allProjects
          .filter(project => project.slug !== currentSlug && project.category === category)
          .slice(0, 3);
          
        setProjects(relatedProjects);
      } catch (error) {
        console.error("Error loading related projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [currentSlug, category]);

  if (projects.length === 0 && !loading) {
    return null;
  }

  return (
    <SectionWrapper title="Related Projects" centered>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {loading ? (
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div 
                key={index} 
                className="rounded-lg border bg-card shadow-sm h-96 animate-pulse" 
              />
            ))}
          </div>
        ) : (
          <ProjectGrid projects={projects} />
        )}
      </motion.div>
    </SectionWrapper>
  );
}