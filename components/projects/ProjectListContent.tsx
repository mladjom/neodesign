'use client';

import { useState } from 'react';
import { CategoryFilter } from '@/components/projects/CategoryFilter';
import { AnimatedProjectGrid } from '@/components/projects/AnimatedProjectGrid';
import type { Project } from '@/types/project';

interface ProjectListContentProps {
  projects: Project[];
  categories: string[];
}

export function ProjectListContent({ projects, categories }: ProjectListContentProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <AnimatedProjectGrid projects={filteredProjects} />
    </>
  );
}