'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Author } from '@/types/blog';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  const authorSlug = author.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Avatar className="h-16 w-16">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left space-y-2">
              <div>
                <Link 
                  href={`/blog/author/${authorSlug}`}
                  className="inline-block font-semibold hover:text-primary transition-colors"
                >
                  {author.name}
                </Link>
                <p className="text-sm text-muted-foreground">{author.title}</p>
              </div>
              <p className="text-sm line-clamp-3">{author.bio}</p>
              <div className="flex justify-center sm:justify-start gap-1">
                {author.twitter && (
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a 
                      href={`https://twitter.com/${author.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                )}
                {author.github && (
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a 
                      href={`https://github.com/${author.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                )}
                {author.linkedin && (
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a 
                      href={`https://linkedin.com/in/${author.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
