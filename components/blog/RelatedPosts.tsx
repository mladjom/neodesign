"use client"

import { useEffect, useState } from 'react'
import { getAllPosts } from '@/lib/mdx'
import { BlogCard } from './BlogCard'

export function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const [relatedPosts, setRelatedPosts] = useState<{ slug: string }[]>([])

  useEffect(() => {
    async function fetchRelatedPosts() {
      const response = await fetch(`/api/related-posts?slug=${currentSlug}`)
      const data = await response.json()
      setRelatedPosts(data)
    }
    fetchRelatedPosts()
  }, [currentSlug])

  if (relatedPosts.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-bold mt-8 mb-4">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}