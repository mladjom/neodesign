"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";
import { BlogPost } from "@/types/blog";
import { OptimizedImage } from "@/components/core/OptimizedImage";
import { format } from "date-fns";

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <SectionWrapper 
      title="Latest Insights"
      centered
    >
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <AnalyticsLink 
              href={`/blog/${post.slug}`}
              category="blog"
              action="read"
              label={post.slug}
            >
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                {/* Fixed image container with proper aspect ratio */}
                <div className="relative w-full aspect-video">
                  <OptimizedImage
                    src={post.coverImage || `/images/blog/post-${index + 1}.jpg`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(post.date), 'MMM dd, yyyy')}
                  </p>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0">
                    Read More →
                  </Button>
                </div>
              </Card>
            </AnalyticsLink>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" asChild>
          <AnalyticsLink 
            href="/blog"
            category="blog"
            action="view_all"
          >
            View All Articles
          </AnalyticsLink>
        </Button>
      </div>
    </SectionWrapper>
  );
}