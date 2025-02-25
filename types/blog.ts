export interface Author {
    name: string;
    avatar: string;
    title: string;
    bio: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  }
  
  export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    lastUpdated?: string;
    excerpt: string;
    content: string;
    author: Author;
    coverImage: string;
    readingTime: string;
    tags: string[];
    category: string;
    featured?: boolean;
    seo?: {
      title?: string;
      description?: string;
      keywords?: string[];
      ogImage?: string;
    };
  }
  
  export interface TableOfContentsItem {
    id: string;
    title: string;
    level: number;
    children?: TableOfContentsItem[];
  }
  
  export interface BlogCategory {
    name: string;
    slug: string;
    description: string;
    count: number;
  }
  
  export interface BlogTag {
    name: string;
    slug: string;
    count: number;
  }
  
  export interface PaginationResult<T> {
    items: T[];
    pageCount: number;
    totalItems: number;
    currentPage: number;
  }