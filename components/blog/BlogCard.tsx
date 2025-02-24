import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import type { Post } from "@/lib/posts"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
        <div className="aspect-video">
          <img
            src={post.frontmatter.coverImage || `https://picsum.photos/seed/${post.slug}/400/250`}
            alt={post.frontmatter.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">{format(new Date(post.frontmatter.date), "MMM dd, yyyy")}</p>
          <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
          <p className="text-muted-foreground line-clamp-2">{post.frontmatter.excerpt}</p>
          <Button variant="link" className="p-0">
            Read More →
          </Button>
        </div>
      </Card>
    </Link>
  )
}