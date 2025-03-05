"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { AnimatedProjectGrid } from '@/components/projects/AnimatedProjectGrid';
import { getAllProjects } from '@/lib/project-service';
import { Project } from '@/types/project';
import { useEffect } from 'react';

interface ProjectListProps {
  categories: string[];
}

export function ProjectList({ categories }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <SectionWrapper>
      <div className="space-y-12">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index} 
                className="rounded-lg border bg-card shadow-sm h-96 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <AnimatedProjectGrid projects={filteredProjects} />
        )}
      </div>
    </SectionWrapper>
  );
}