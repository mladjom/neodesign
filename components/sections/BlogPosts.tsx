"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { blogPosts } from "@/config/content";

export function BlogPosts() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          className="space-y-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center">Latest Insights</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video">
                    <img
                      src={`https://picsum.photos/400/250`}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <Button variant="link" className="p-0">Read More →</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}