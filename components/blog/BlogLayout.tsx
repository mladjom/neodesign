import { ReactNode, Suspense } from 'react';
import { BlogSidebar } from './BlogSidebar';
import { BlogPost } from '@/types/blog';

interface BlogLayoutProps {
  children: ReactNode;
  currentPost?: BlogPost;
}

export function BlogLayout({ children, currentPost }: BlogLayoutProps) {
  return (
    <div className="container px-4 py-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {children}
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<div>Loading sidebar...</div>}>
            <BlogSidebar currentPost={currentPost} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}