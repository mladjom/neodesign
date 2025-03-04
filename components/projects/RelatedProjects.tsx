"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { ProjectAnimatedCard } from "./ProjectAnimatedCard";
import { SectionLoading } from "@/components/ui/section-loading";

interface RelatedProjectsProps {
  currentSlug: string;
  category: string;
  technologies: string[];
}

export function RelatedProjects({ currentSlug, category, technologies }: RelatedProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedProjects() {
      try {
        // Fetch all projects
        const response = await fetch('/api/projects');
        const allProjects = await response.json();
        
        // Filter out current project and find related ones
        const filteredProjects = allProjects
          .filter((project: Project) => project.slug !== currentSlug)
          .map((project: Project) => {
            // Calculate relevance score
            let score = 0;
            
            // Same category is a strong signal
            if (project.category === category) {
              score += 5;
            }
            
            // Shared technologies
            const sharedTechs = project.technologies.filter(tech => 
              technologies.includes(tech)
            );
            score += sharedTechs.length;
            
            return { ...project, relevanceScore: score };
          })
          .filter((project: Project & { relevanceScore: number }) => 
            // Only include somewhat relevant projects
            project.relevanceScore > 0
          )
          .sort((a: any, b: any) => 
            // Sort by relevance score
            b.relevanceScore - a.relevanceScore
          )
          .slice(0, 3); // Take top 3
        
        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching related projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedProjects();
  }, [currentSlug, category, technologies]);

  if (loading) {
    return <SectionLoading layout="grid" columns={3} items={3} />;
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">Related Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectAnimatedCard 
                key={project.slug} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}