"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { getAllProjects } from "@/lib/project-service";
import { AnimatedProjectGrid } from "@/components/projects/AnimatedProjectGrid";

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
        <AnimatedProjectGrid projects={projects} />
      )}
    </SectionWrapper>
  );
}