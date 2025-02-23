import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypePrism,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
        development: process.env.NODE_ENV === 'development',
      },
      scope: data,
      parseFrontmatter: true,
    })

    return {
      slug: realSlug,
      frontmatter: data,
      content: mdxSource,
    }
  } catch (error) {
    console.error('MDX Compilation Error:', error)
    throw new Error(`Failed to compile MDX for slug: ${realSlug}`)
  }
}

export async function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return posts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1))
}