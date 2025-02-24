import { getAllPosts } from "@/lib/posts"
import { BlogList } from "@/components/blog/BlogList"
import { Pagination } from "@/components/blog/Pagination"
import { BlogHeader } from "@/components/blog/BlogHeader"

const POSTS_PER_PAGE = 9

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const allPosts = await getAllPosts()

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHeader />
      <BlogList posts={paginatedPosts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}