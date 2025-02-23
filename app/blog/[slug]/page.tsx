import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { BlogPostContent } from '@/components/blog/BlogPostContent'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  return <BlogPostContent {...post} />
}