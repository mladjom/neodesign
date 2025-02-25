import { 
    BlogGridSkeleton, 
    FeaturedPostSkeleton,
    CategoryFilterSkeleton 
  } from '@/components/blog/loading';
  
  export default function BlogLoading() {
    return (
      <div className="container px-4 py-12 max-w-6xl mx-auto">
        <div className="grid gap-12">
          {/* Page Header Skeleton */}
          <div className="text-center space-y-4">
            <div className="h-10 w-44 bg-muted rounded mx-auto" />
            <div className="h-6 w-2/3 bg-muted rounded mx-auto" />
          </div>
  
          {/* Search Bar Skeleton */}
          <div className="max-w-md mx-auto w-full">
            <div className="h-10 bg-muted rounded" />
          </div>
  
          {/* Featured Post Skeleton */}
          <FeaturedPostSkeleton />
  
          {/* Category Filter Skeleton */}
          <CategoryFilterSkeleton />
  
          {/* Blog Grid Skeleton */}
          <BlogGridSkeleton />
        </div>
      </div>
    );
  }