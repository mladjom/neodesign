// src/app/api/related-posts/route.ts
import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/mdx'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const currentSlug = searchParams.get('slug')

  if (!currentSlug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  const allPosts = await getAllPosts()
  const currentPost = allPosts.find((post) => post.slug === currentSlug)
  
  if (!currentPost) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.frontmatter.tags?.some((tag: string) => currentPost.frontmatter.tags?.includes(tag)))
    .slice(0, 3)

  return NextResponse.json(relatedPosts)
}