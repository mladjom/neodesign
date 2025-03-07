'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="mb-10">

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-auto">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="text-sm font-medium">{post.category}</Badge>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{post.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.author.title}</p>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button className="group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
