import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { 
  getBlogPostBySlug, 
  extractTableOfContents, 
  getRelatedPosts 
} from '@/lib/mdx/mdx-config';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ShareLinks } from '@/components/blog/ShareLinks';
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
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
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
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const toc = extractTableOfContents(post.content as string);
  const relatedPosts = await getRelatedPosts(params.slug, 3);
  
  return (
    <article className="container px-4 py-12 max-w-7xl mx-auto">
      <Suspense fallback={<BlogDetailSkeleton />}>
        <div className="grid lg:grid-cols-4 gap-12 relative">
          {/* Main Content (3 columns) */}
          <div className="lg:col-span-3 space-y-10">
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
            
            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
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
            
            {/* Related Posts */}
            <Suspense fallback={<RelatedPostsSkeleton />}>
              {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
            </Suspense>
          </div>
          
          {/* Sidebar (1 column) - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <Suspense fallback={<TableOfContentsSkeleton />}>
                {toc.length > 0 && <TableOfContents toc={toc} />}
              </Suspense>
            </div>
          </aside>
        </div>
      </Suspense>
    </article>
  );
}
