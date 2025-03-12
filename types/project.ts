// types/project.ts - Enhance with more specific types
export interface Project {
  slug: string;
  title: string;
  client: string;
  timeline: string;
  role: string;
  thumbnail: string;
  technologies: string[];
  category: string;
  summary: string;
  description: string;
  outcomes: string[];
  // Add more specific types
  projectUrl?: string; // Optional project URL
  startDate?: Date; // Project start date
  endDate?: Date; // Project end date
  priority?: number; // For sorting projects
  featured?: boolean; // Flag for featured projects
}

// Add more specific types for process steps
export interface ProcessStep {
  title: string;
  description: string;
  image: string;
  imageAlt?: string; // For accessibility
  order: number; // For sorting steps
}

// Enhance ProjectDetail interface
export interface ProjectDetail extends Project {
  challenge: string;
  solution: string;
  process: ProcessStep[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string; // Add company name
    avatarUrl?: string; // Add avatar for testimonial
  };
  results: {
    metric: string;
    value: string;
    description?: string; // Add more context to results
  }[];
}