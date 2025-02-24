import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), "content/blog")

export type Post = {
  slug: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    coverImage?: string
    tags?: string[]
  }
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as Post["frontmatter"],
      content,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as Post["frontmatter"],
    content,
  }
}

