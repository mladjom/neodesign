'use server';

import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectDetail, Project } from '@/types/project';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string): Promise<ProjectDetail> {
  try {
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    const { data, content } = matter(fileContent);
    
    // Validate and transform the data
    const project = {
      slug,
      title: data.title,
      client: data.client,
      timeline: data.timeline,
      role: data.role,
      thumbnail: data.thumbnail,
      technologies: data.technologies || [],
      category: data.category,
      summary: data.summary,
      description: data.description,
      outcomes: data.outcomes || [],
      challenge: data.challenge,
      solution: data.solution,
      process: data.process || [],
      testimonial: data.testimonial,
      results: data.results || [],
    } as ProjectDetail;
    
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
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(async fileName => {
          const slug = fileName.replace(/\.mdx$/, '');
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