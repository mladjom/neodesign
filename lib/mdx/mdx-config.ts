// lib/mdx/mdx-config.ts
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import readingTime from 'reading-time';
import { BlogPost, PaginationResult, TableOfContentsItem } from '@/types/blog';

// MDX Components
import { components } from './mdx-components';
import { Callout } from '@/components/mdx/Callout'; 
import { ImageWithCaption } from '@/components/mdx/Image';
import { CodeBlock } from '@/components/mdx/CodeBlock';
import { CustomLink } from '@/components/mdx/Link'; 

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content: rawContent } = matter(fileContent);
    
    // Make sure we have all required components
    const mdxComponents = {
      ...components,
      Callout, 
      Image: ImageWithCaption,
      pre: CodeBlock,
      CodeBlock,
      a: CustomLink,
      CustomLink
    };
    
    // Compile MDX
    const mdxSource = await compileMDX({
      source: rawContent,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            [rehypePrism, { ignoreMissing: true }],
          ],
          remarkPlugins: [remarkGfm, remarkToc],
        },
      },
    });
    
    return {
      slug,
      title: frontMatter.title,
      date: frontMatter.date,
      lastUpdated: frontMatter.lastUpdated,
      excerpt: frontMatter.excerpt,
      content: mdxSource.content, // React component
      rawContent: rawContent, // Original markdown string for TOC generation
      author: frontMatter.author,
      coverImage: frontMatter.coverImage,
      readingTime: readingTime(rawContent).text,
      tags: frontMatter.tags || [],
      category: frontMatter.category,
      featured: frontMatter.featured || false,
      seo: {
        title: frontMatter.seoTitle || frontMatter.title,
        description: frontMatter.seoDescription || frontMatter.excerpt,
        keywords: frontMatter.seoKeywords || [],
        ogImage: frontMatter.ogImage || frontMatter.coverImage,
      },
    };
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error);
    return null;
  }
}

export function extractTableOfContents(content: string): TableOfContentsItem[] {
  if (!content || typeof content !== 'string') {
    console.warn('Content passed to extractTableOfContents is not a string:', typeof content);
    return [];
  }
  
  try {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    
    const toc: TableOfContentsItem[] = [];
    let currentH2: TableOfContentsItem | null = null;
    
    matches.forEach(match => {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      if (level === 2) {
        currentH2 = { id, title, level, children: [] };
        toc.push(currentH2);
      } else if (level === 3 && currentH2) {
        currentH2.children = currentH2.children || [];
        currentH2.children.push({ id, title, level });
      }
    });
    
    return toc;
  } catch (error) {
    console.error('Error extracting table of contents:', error);
    return [];
  }
}


export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // Ensure blog directory exists
    if (!fs.existsSync(BLOG_DIR)) {
      console.log(`Blog directory not found: ${BLOG_DIR}`);
      return [];
    }
    
    const files = fs.readdirSync(BLOG_DIR);
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const slug = file.replace(/\.mdx$/, '');
          const post = await getBlogPostBySlug(slug);
          return post;
        })
    );
    
    // Filter out nulls first
    const filteredPosts = posts.filter(post => post !== null) as BlogPost[];
    
    // Then sort the filtered posts
    return filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

export async function getPaginatedBlogPosts(
  page: number = 1,
  limit: number = 9,
  category?: string,
  tag?: string
): Promise<PaginationResult<BlogPost>> {
  const allPosts = await getAllBlogPosts();
  
  // Apply filters if needed
  let filteredPosts = allPosts;
  if (category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category && post.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (tag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags && post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }
  
  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  return {
    items: paginatedPosts,
    pageCount: Math.ceil(filteredPosts.length / limit),
    totalItems: filteredPosts.length,
    currentPage: page,
  };
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  
  // First try to get posts marked as featured
  let featuredPosts = allPosts.filter(post => post.featured);
  
  // If not enough featured posts, get the most recent ones
  if (featuredPosts.length < limit) {
    featuredPosts = allPosts.slice(0, limit);
  } else if (featuredPosts.length > limit) {
    // If too many featured posts, take only the most recent ones
    featuredPosts = featuredPosts.slice(0, limit);
  }
  
  return featuredPosts;
}

export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogPost[]> {
  const currentPost = await getBlogPostBySlug(slug);
  if (!currentPost) return [];
  
  const allPosts = await getAllBlogPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== slug);
  
  // Score posts based on shared tags and category
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Score for same category
    if (post.category === currentPost.category) {
      score += 2;
    }
    
    // Score for shared tags
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += sharedTags.length;
    
    return { post, score };
  });
  
  // Sort by score (highest first) and take top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

export async function getAllCategories() {
  try {
    const posts = await getAllBlogPosts();
    
    // Filter out posts with invalid categories
    const validPosts = posts.filter(post => post && typeof post.category === 'string');
    
    const categories = validPosts.reduce((acc, post) => {
      const category = post.category;
      
      if (!acc[category]) {
        acc[category] = {
          name: category,
          slug: category.toLowerCase().replace(/\s+/g, '-'),
          count: 0,
          description: `Posts about ${category}`,
        };
      }
      acc[category].count++;
      return acc;
    }, {} as Record<string, { name: string; slug: string; count: number; description: string }>);
    
    return Object.values(categories).sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error in getAllCategories:', error);
    return []; // Return empty array to prevent further errors
  }
}

export async function getAllTags() {
  try {
    const posts = await getAllBlogPosts();
    const tags = posts.reduce((acc, post) => {
      if (!post.tags) return acc;
      
      post.tags.forEach(tag => {
        if (!tag) return; // Skip empty tags
        
        if (!acc[tag]) {
          acc[tag] = {
            name: tag,
            slug: tag.toLowerCase().replace(/\s+/g, '-'),
            count: 0,
          };
        }
        acc[tag].count++;
      });
      return acc;
    }, {} as Record<string, { name: string; slug: string; count: number }>);
    
    return Object.values(tags).sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error in getAllTags:', error);
    return [];
  }
}

export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const allPosts = await getAllBlogPosts();
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  if (searchTerms.length === 0) return [];
  
  return allPosts
    .map(post => {
      let score = 0;
      
      // Search in title (highest weight)
      searchTerms.forEach(term => {
        if (post.title.toLowerCase().includes(term)) {
          score += 10;
        }
      });
      
      // Search in excerpt
      searchTerms.forEach(term => {
        if (post.excerpt.toLowerCase().includes(term)) {
          score += 5;
        }
      });
      
      // Search in tags and category
      searchTerms.forEach(term => {
        if (post.tags.some(tag => tag.toLowerCase().includes(term))) {
          score += 3;
        }
        if (post.category.toLowerCase().includes(term)) {
          score += 3;
        }
      });
      
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.post);
}