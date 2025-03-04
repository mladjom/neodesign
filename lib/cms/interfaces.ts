import { BlogPost, Author } from '@/types/blog';
import { Project } from '@/types/project';

export interface CmsAdapter {
  // Blog methods
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPaginatedBlogPosts(page: number, limit: number, filters?: Record<string, any>): Promise<{
    items: BlogPost[];
    totalItems: number;
    pageCount: number;
  }>;
  
  // Project methods
  getProjectBySlug(slug: string): Promise<Project | null>;
  getAllProjects(): Promise<Project[]>;
  
  // Author methods
  getAuthorBySlug(slug: string): Promise<Author | null>;
  getAllAuthors(): Promise<Author[]>;
}