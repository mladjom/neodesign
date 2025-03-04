import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createMetadata } from '@/config/metadata';
import { getBlogPostBySlug, extractTableOfContents, getRelatedPosts, getAllBlogPosts } from '@/lib/blog-service';
import { BlogJsonLd } from '@/components/blog/BlogJsonLd';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ShareLinks } from '@/components/blog/ShareLinks';
import { PostNavigation } from '@/components/blog/PostNavigation';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BlogDetailSkeleton, TableOfContentsSkeleton, RelatedPostsSkeleton } from '@/components/blog/loading';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { siteConfig } from '@/config/metadata';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return createMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    image: post.seo?.ogImage || post.coverImage,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const toc = extractTableOfContents(post.rawContent as string);
  const relatedPosts = await getRelatedPosts(resolvedParams.slug, 3);

  // Get prev/next posts for navigation
  const allPosts = await getAllBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === resolvedParams.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <BlogLayout currentPost={post}>
      {/* Add JSON-LD structured data */}
      <BlogJsonLd post={post} siteUrl={siteConfig.url} />
      
      <article className="space-y-10">
        <Suspense fallback={<BlogDetailSkeleton />}>
          {/* Article Header */}
          <header className="text-center mx-auto max-w-3xl space-y-6">
            <Link href={`/blog?category=${post.category.toLowerCase()}`}>
              <Badge className="mb-4">{post.category}</Badge>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image with proper Next.js Image optimization */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>

          {/* Rest of the content remains the same... */}
        </Suspense>
      </article>
    </BlogLayout>
  );
}