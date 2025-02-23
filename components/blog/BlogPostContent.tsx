"use client"

import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import { MDXComponents } from './MDXComponents'

const TableOfContents = dynamic(() => import('./TableOfContents').then(mod => mod.TableOfContents))
const RelatedPosts = dynamic(() => import('./RelatedPosts').then(mod => mod.RelatedPosts))

export function BlogPostContent({ content, slug, frontmatter }: any) {
  return (
    <article className="prose prose-lg mx-auto">
      <h1>{frontmatter.title}</h1>
      <p className="text-muted-foreground">{frontmatter.date}</p>
      <TableOfContents content={content} />
      <MDXRemote {...content} components={MDXComponents} />
      <RelatedPosts currentSlug={slug} />
    </article>
  )
}
