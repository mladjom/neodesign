'use server';

import { promises as fs } from 'fs';
import path from 'path';
import { ProjectDetail, Project } from '@/types/project';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string): Promise<ProjectDetail> {
  try {
    const filePath = path.join(PROJECTS_DIR, `${slug}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Parse JSON file
    const project = JSON.parse(fileContent) as ProjectDetail;
    
    // Ensure slug is set
    project.slug = slug;
    
    return project;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    throw new Error(`Project not found: ${slug}`);
  }
}

export async function getAllProjects(): Promise<ProjectDetail[]> {
  try {
    const fileNames = await fs.readdir(PROJECTS_DIR);
    
    const projects = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.json'))
        .map(async fileName => {
          const slug = fileName.replace(/\.json$/, '');
          const project = await getProjectBySlug(slug);
          return project;
        })
    );
    
    // Sort projects by priority or date
    return projects.sort((a, b) => {
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      
      // Default sort by date if no priority
      const dateA = a.startDate ? new Date(a.startDate) : new Date(0);
      const dateB = b.startDate ? new Date(b.startDate) : new Date(0);
      
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return [];
  }
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter(project => project.category.toLowerCase() === category.toLowerCase());
}

/**
 * Gets featured projects, optionally limited to a specific number
 * Projects are considered featured if they have featured flag set to true
 */
export async function getFeaturedProjects(limit: number = 3): Promise<ProjectDetail[]> {
  try {
    const allProjects = await getAllProjects();
    
    // Filter projects that have featured=true
    const featuredProjects = allProjects.filter(project => project.featured === true);
    
    // Still respect the priority ordering
    const sortedFeaturedProjects = featuredProjects.sort((a, b) => {
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      
      // Default sort by date if no priority
      const dateA = a.startDate ? new Date(a.startDate) : new Date(0);
      const dateB = b.startDate ? new Date(b.startDate) : new Date(0);
      
      return dateB.getTime() - dateA.getTime();
    });
    
    // Return limited number if specified
    return limit > 0 ? sortedFeaturedProjects.slice(0, limit) : sortedFeaturedProjects;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}