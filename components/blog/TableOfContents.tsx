// src/components/blog/TableOfContents.tsx
"use client"

import { useState, useEffect } from 'react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type Heading = {
  id: string
  title: string
  level: number
}

export function TableOfContents({ content }: { content: MDXRemoteSerializeResult }) {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const extractedHeadings = content.compiledSource
      .split('\n')
      .filter((line) => line.match(/^<h[2-3]/))
      .map((line) => {
        const match = line.match(/<h([2-3]) id="(.+)">(.+)<\/h[2-3]>/)
        if (match) {
          return {
            level: parseInt(match[1]),
            id: match[2],
            title: match[3],
          }
        }
        return null
      })
      .filter((heading): heading is Heading => heading !== null)

    setHeadings(extractedHeadings)
  }, [content])

  return (
    <nav className="toc">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 16}px` }}>
            <a href={`#${heading.id}`} className="text-blue-500 hover:underline">
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}