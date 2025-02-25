import { Suspense } from 'react';
import { 
  getPaginatedBlogPosts, 
  getAllCategories, 
  getFeaturedPosts 
} from '@/lib/mdx/mdx-config';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { FeaturedPost } from '@/components/blog/FeaturedPost';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { 
  FeaturedPostSkeleton, 
  CategoryFilterSkeleton, 
  BlogGridSkeleton 
} from '@/components/blog/loading'

import { Metadata } from 'next';

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
    tag?: string;
  };
}

export const metadata: Metadata = {
  title: 'Blog | Our Insights and Thoughts',
  description: 'Discover our latest articles, tutorials, and insights on web development, design, and technology.',
  openGraph: {
    title: 'Blog | Our Insights and Thoughts',
    description: 'Discover our latest articles, tutorials, and insights on web development, design, and technology.',
    type: 'website',
  },
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams.page) || 1;
  const category = searchParams.category || '';
  const tag = searchParams.tag || '';
  const postsPerPage = 9;
  
  const { items: posts, pageCount, currentPage } = await getPaginatedBlogPosts(
    page,
    postsPerPage,
    category,
    tag
  );
  
  const categories = await getAllCategories();
  const featuredPosts = await getFeaturedPosts(1);
  const featuredPost = featuredPosts[0];

  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <div className="grid gap-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest articles, tutorials, and insights on web development,
            design, and technology.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto w-full">
          <BlogSearch />
        </div>

        {/* Featured Post */}
        <Suspense fallback={<FeaturedPostSkeleton />}>
          {featuredPost && <FeaturedPost post={featuredPost} />}
        </Suspense>

        {/* Category Filter */}
        <Suspense fallback={<CategoryFilterSkeleton />}>
          <CategoryFilter categories={categories} />
        </Suspense>

        {/* Blog Grid */}
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid posts={posts} />
        </Suspense>

        {/* Pagination */}
        {pageCount > 1 && (
          <BlogPagination totalPages={pageCount} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
}