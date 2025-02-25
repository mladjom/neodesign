// app/blog/author/[slug]/page.tsx
import { Suspense } from 'react';
import { getAllBlogPosts } from '@/lib/mdx/mdx-config';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogGridSkeleton } from '@/components/blog/loading';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import Link from 'next/link';
import { Metadata } from 'next';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const allPosts = await getAllBlogPosts();
  const author = allPosts.find(post => 
    post.author.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  )?.author;
  
  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'The requested author could not be found.',
    };
  }
  
  return {
    title: `${author.name} - Author`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - Author`,
      description: author.bio,
      type: 'profile',
      images: [
        {
          url: author.avatar,
          alt: author.name,
        },
      ],
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const allPosts = await getAllBlogPosts();
  
  // Find author by slug
  const authorSlug = params.slug;
  const author = allPosts.find(post => 
    post.author.name.toLowerCase().replace(/\s+/g, '-') === authorSlug
  )?.author;
  
  if (!author) {
    notFound();
  }
  
  // Get all posts by this author
  const authorPosts = allPosts.filter(post => 
    post.author.name.toLowerCase().replace(/\s+/g, '-') === authorSlug
  );
  
  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <div className="grid gap-12">
        {/* Author Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Avatar className="h-32 w-32">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-4xl">{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-3xl font-bold">{author.name}</h1>
              <p className="text-xl text-muted-foreground">{author.title}</p>
            </div>
            <div className="max-w-2xl">
              <p>{author.bio}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              {author.twitter && (
                <Button size="icon" variant="ghost" asChild>
                  <a 
                    href={`https://twitter.com/${author.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
              )}
              {author.github && (
                <Button size="icon" variant="ghost" asChild>
                  <a 
                    href={`https://github.com/${author.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              )}
              {author.linkedin && (
                <Button size="icon" variant="ghost" asChild>
                  <a 
                    href={`https://linkedin.com/in/${author.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Author's Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Articles by {author.name} ({authorPosts.length})
          </h2>
          <Suspense fallback={<BlogGridSkeleton />}>
            <BlogGrid posts={authorPosts} />
          </Suspense>
        </div>
        
        {/* Back to Blog Button */}
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Back to All Articles
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}