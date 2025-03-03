import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  extractTableOfContents,
  getRelatedPosts,
  getAllBlogPosts
} from '@/lib/blog-service';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ShareLinks } from '@/components/blog/ShareLinks';
import { PostNavigation } from '@/components/blog/PostNavigation';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  BlogDetailSkeleton,
  TableOfContentsSkeleton,
  RelatedPostsSkeleton
} from '@/components/blog/loading';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastUpdated,
      authors: [post.author.name],
      images: [
        {
          url: post.seo?.ogImage || post.coverImage,
          alt: post.title,
        },
      ],
    },
    keywords: post.seo?.keywords || post.tags,
  };
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

          {/* Featured Image */}
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

          {/* Author Info */}
          <div className="flex items-center gap-4 border-y py-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
            <div className="ml-auto">
              <ShareLinks url={`/blog/${post.slug}`} title={post.title} />
            </div>
          </div>

          {/* Table of Contents - Now below author for all devices */}
          <div className="border rounded-lg p-4 bg-muted/10">
            <Suspense fallback={<TableOfContentsSkeleton />}>
              {toc.length > 0 && <TableOfContents toc={toc} />}
            </Suspense>
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t">
            {post.tags.map(tag => (
              <Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`}>
                <Badge variant="outline">{tag}</Badge>
              </Link>
            ))}
          </div>

          {/* Post Navigation */}
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />

          {/* Related Posts */}
          <Suspense fallback={<RelatedPostsSkeleton />}>
            {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
          </Suspense>
        </Suspense>
      </article>
    </BlogLayout>
  );
}