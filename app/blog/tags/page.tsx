import { Suspense } from 'react';
import { getAllTags } from '@/lib/blog-service';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { TagCloudSkeleton } from '@/components/blog/loading';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Blog Tags',
  description: 'Browse all tags on our blog',
};

// Client component for animated tags
function AnimatedTagList({ tags }: { tags: { name: string; slug: string; count: number }[] }) {
  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      {tags.map((tag, index) => (
        <motion.div
          key={tag.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Link href={`/blog?tag=${tag.slug}`}>
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{tag.name}</Badge>
                <span className="text-muted-foreground">{tag.count} posts</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default async function TagsPage() {
  const tags = await getAllTags();
  
  // Group tags by first letter for alphabetical organization
  const tagsByLetter = tags.reduce((acc, tag) => {
    const firstLetter = tag.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(tag);
    return acc;
  }, {} as Record<string, typeof tags>);
  
  // Sort letters
  const sortedLetters = Object.keys(tagsByLetter).sort();
  
  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <div className="grid gap-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Browse Tags</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all the topics we cover on our blog
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto w-full">
          <BlogSearch />
        </div>

        {/* Tags by Letter */}
        <Suspense fallback={<TagCloudSkeleton />}>
          <div className="space-y-10">
            {sortedLetters.map(letter => (
              <div key={letter} className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2">{letter}</h2>
                <AnimatedTagList tags={tagsByLetter[letter]} />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}