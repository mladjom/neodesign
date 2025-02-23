import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function BlogCard({ post }: { post: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.frontmatter.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.frontmatter.date}</p>
        <p className="mt-2">{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-4 inline-block">
          Read more
        </Link>
      </CardContent>
    </Card>
  )
}