import { CmsAdapter } from './interfaces';
import { getBlogPostBySlug as getFSBlogPostBySlug, 
         getAllBlogPosts as getFSAllBlogPosts,
         getPaginatedBlogPosts as getFSPaginatedBlogPosts } from '@/lib/blog-service';
import { getProjectBySlug as getFSProjectBySlug,
         getAllProjects as getFSAllProjects } from '@/lib/project-service';
import { getAuthorBySlug as getFSAuthorBySlug,
         getAllAuthors as getFSAllAuthors } from '@/lib/authors';

// Adapter that uses the existing file system functions
export class FileSystemCmsAdapter implements CmsAdapter {
  async getBlogPostBySlug(slug: string) {
    const post = await getFSBlogPostBySlug(slug);
    return post ?? null;
  }
  
  async getAllBlogPosts() {
    return getFSAllBlogPosts();
  }
  
  async getPaginatedBlogPosts(page: number, limit: number, filters?: Record<string, any>) {
    const category = filters?.category;
    const tag = filters?.tag;
    const authorSlug = filters?.author;
    
    const result = await getFSPaginatedBlogPosts(page, limit, category, tag, authorSlug);
    
    return {
      items: result.items,
      totalItems: result.totalItems,
      pageCount: result.pageCount
    };
  }
  
  async getProjectBySlug(slug: string) {
    const project = await getFSProjectBySlug(slug);
    return project ?? null;
  }
  
  async getAllProjects() {
    return getFSAllProjects();
  }
  
  async getAuthorBySlug(slug: string) {
    const author = await getFSAuthorBySlug(slug);
    return author ?? null;
  }
  
  async getAllAuthors() {
    return getFSAllAuthors();
  }
}