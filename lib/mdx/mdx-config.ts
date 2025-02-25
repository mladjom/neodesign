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

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContent);
    
    // Compile MDX
    const mdxSource = await compileMDX({
      source: content,
      components,
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
      content: mdxSource.content,
      author: frontMatter.author,
      coverImage: frontMatter.coverImage,
      readingTime: readingTime(content).text,
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

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
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
    filteredPosts = filteredPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
  }
  if (tag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
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

export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const matches = [...content.matchAll(headingRegex)];
  
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
}

export async function getAllCategories() {
  const posts = await getAllBlogPosts();
  const categories = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = {
        name: post.category,
        slug: post.category.toLowerCase().replace(/\s+/g, '-'),
        count: 0,
        description: `Posts about ${post.category}`,
      };
    }
    acc[post.category].count++;
    return acc;
  }, {} as Record<string, { name: string; slug: string; count: number; description: string }>);
  
  return Object.values(categories).sort((a, b) => b.count - a.count);
}

export async function getAllTags() {
  const posts = await getAllBlogPosts();
  const tags = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
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