import { getAllPosts } from '@/lib/mdx'
import { BlogList } from '@/components/blog/BlogList'

export default async function BlogListPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList posts={posts} />
    </div>
  )
}