"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedFeaturedStudy } from "@/components/projects/AnimatedFeaturedStudy";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/project-service";

export function FeaturedCaseStudies() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects.slice(0, 3));
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  return (
    <SectionWrapper
      background="muted"
      title="Featured Case Studies"
      subtitle="Deep dive into our most impactful projects"
      centered
    >
      {loading ? (
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i} 
              className="rounded-lg border bg-card shadow-sm h-64 animate-pulse" 
            />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedFeaturedStudy 
              key={project.slug} 
              project={project}
              index={index}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}