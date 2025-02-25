import { Suspense } from 'react';
import { searchBlogPosts, getAllTags } from '@/lib/mdx/mdx-config';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { TagCloud } from '@/components/blog/TagCloud';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { 
  BlogGridSkeleton,
  TagCloudSkeleton 
} from '@/components/blog/loading';
import { Metadata } from 'next';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export const metadata: Metadata = {
  title: 'Search Blog',
  description: 'Search our blog for articles, tutorials, and insights',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const tags = await getAllTags();
  const searchResults = query ? await searchBlogPosts(query) : [];
  
  return (
    <BlogLayout>
      <div className="space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Search Results</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {query ? `Showing results for "${query}"` : 'Enter your search query'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto w-full">
          <BlogSearch />
        </div>

        {/* Popular Tags */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Popular Tags</h2>
          <Suspense fallback={<TagCloudSkeleton />}>
            <TagCloud tags={tags} limit={15} />
          </Suspense>
        </div>

        {/* Search Results */}
        {query && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              {searchResults.length 
                ? `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`
                : 'No results found'}
            </h2>
            <Suspense fallback={<BlogGridSkeleton />}>
              <BlogGrid posts={searchResults} />
            </Suspense>
          </div>
        )}
      </div>
    </BlogLayout>
  );
}