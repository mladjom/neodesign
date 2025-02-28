import { Suspense } from 'react';
import { 
  getAllTags, 
  getAllCategories,
  getFeaturedPosts 
} from '@/lib/blog-service';
import { NewsletterSignup } from './NewsletterSignup';
import { PopularPostsSidebar } from './PopularPostsSidebar';
import { AuthorCard } from './AuthorCard';
import { TagCloud } from './TagCloud';
import { 
  TagCloudSkeleton 
} from './loading';
import { BlogPost } from '@/types/blog';

interface BlogSidebarProps {
  currentPost?: BlogPost;
}

export async function BlogSidebar({ currentPost }: BlogSidebarProps) {
  const tags = await getAllTags();
  const popularPosts = await getFeaturedPosts(5);
  
  // Filter out current post from popular posts if needed
  const filteredPopularPosts = currentPost 
    ? popularPosts.filter(post => post.slug !== currentPost.slug)
    : popularPosts;
  
  return (
    <div className="space-y-8">
      {/* Author Card (if viewing a post) */}
      {currentPost && (
        <AuthorCard author={currentPost.author} />
      )}
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Popular Posts */}
      <PopularPostsSidebar posts={filteredPopularPosts.slice(0, 4)} />
      
      {/* Tags */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Popular Tags</h3>
        <Suspense fallback={<TagCloudSkeleton />}>
          <TagCloud tags={tags} limit={10} />
        </Suspense>
      </div>
    </div>
  );
}