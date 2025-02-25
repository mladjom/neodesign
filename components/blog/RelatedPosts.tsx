'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Related Articles</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}