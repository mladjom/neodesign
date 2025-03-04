# Blog Post Creation Guide

This guide explains how to create and publish blog posts on the NeoDesign website.

## Overview

Blog posts are written in MDX (Markdown with JSX) and stored in the `content/blog` directory. Each post is a separate `.mdx` file with front matter that contains metadata about the post.

## Creating a New Blog Post

### 1. Create a new MDX file

Create a new `.mdx` file in the `content/blog` directory. The filename should be the slug of your post (e.g., `my-new-blog-post.mdx`).

### 2. Add front matter

Front matter is YAML metadata at the top of the file between triple-dash lines:

```mdx
---
title: "Your Blog Post Title"
date: "2025-03-15"
lastUpdated: "2025-03-15"
excerpt: "A brief summary of your blog post (around 160 characters)."
author: "author-slug"
coverImage: "/blog/my-post-cover.jpg"
tags: ["tag1", "tag2", "tag3"]
category: "Category Name"
featured: false
seo:
  title: "SEO-Optimized Title (Optional)"
  description: "SEO description that will appear in search results."
  keywords: ["keyword1", "keyword2"]
  ogImage: "/blog/my-post-social.jpg"
---

Your blog post content starts here...
```

#### Front Matter Fields

| Field | Description | Required? |
|-------|-------------|-----------|
| `title` | Post title | Yes |
| `date` | Publication date (YYYY-MM-DD) | Yes |
| `lastUpdated` | Last updated date (YYYY-MM-DD) | No |
| `excerpt` | Brief summary (160 characters recommended) | Yes |
| `author` | Author slug from `lib/authors.ts` | Yes |
| `coverImage` | Featured image path | Yes |
| `tags` | Array of tags | Yes |
| `category` | Single category name | Yes |
| `featured` | Whether the post should be featured | No |
| `seo` | Object containing SEO metadata | No |

### 3. Write your content

After the front matter, write your blog post content using Markdown syntax and custom MDX components:

```mdx
## Introduction

This is my new blog post. It supports **bold text**, *italic text*, and [links](https://example.com).

<Callout type="info" title="Note">
  You can use custom components like this callout.
</Callout>

### Section Title

Here's some more content with a list:

- Item one
- Item two
- Item three

<Image 
  src="/blog/example-image.jpg" 
  alt="Example image" 
  caption="This is an image with a caption" 
/>

## Conclusion

That's all for this post!
```

## Available MDX Components

You can use these custom components in your MDX content:

### Callout

Use for highlighting important information:

```mdx
<Callout type="info" title="Note">
  This is an informational note.
</Callout>

<Callout type="warning">
  This is a warning without a title.
</Callout>

<Callout type="success" title="Success">
  This is a success message.
</Callout>

<Callout type="error" title="Error">
  This is an error message.
</Callout>
```

### Image with Caption

Use for adding images with optional captions:

```mdx
<Image 
  src="/blog/example-image.jpg" 
  alt="Description of the image" 
  caption="This caption appears below the image" 
/>
```

### Custom Links

Regular Markdown links are automatically enhanced:

```mdx
[Internal link to another page](/blog/another-post)

[External link to MDX docs](https://mdxjs.com/) 
```

### Code Blocks

Use triple backticks for code blocks with language-specific syntax highlighting:

````mdx
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```
````

## Markdown Features

### Headings

Use hashtags for headings:

```mdx
# Heading 1 (typically not used in content, as title is from front matter)
## Heading 2
### Heading 3
#### Heading 4
```

### Text Formatting

```mdx
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

### Lists

```mdx
Ordered list:
1. First item
2. Second item
3. Third item

Unordered list:
- Item one
- Item two
- Item three
```

### Blockquotes

```mdx
> This is a blockquote.
> It can span multiple lines.
>
> And can contain multiple paragraphs.
```

### Tables

```mdx
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

## Working with Authors

### Available Authors

The following author slugs are available:

- `alex-morgan` - Senior Developer
- `taylor-chen` - UX Designer
- `jordan-patel` - DevOps Engineer
- `editorial-team` - For general content or posts with multiple contributors

### Adding a New Author

To add a new author:

1. Edit `lib/authors.ts`
2. Add the author's image to `public/images/authors/`
3. Reference the author in your blog post front matter

## Publishing Workflow

1. Create your blog post in the `content/blog` directory
2. Add all necessary front matter
3. Write your content using Markdown and MDX components
4. Add any images to the `public/blog/` directory
5. Preview your post locally by running the development server
6. Commit your changes to the repository
7. Deploy the site to see your post published

## Best Practices

### SEO Optimization

- Use descriptive titles that include keywords
- Keep excerpts between 150-160 characters
- Include relevant tags and categories
- Provide SEO-specific metadata when possible

### Images

- Use descriptive filenames for images
- Always provide meaningful alt text
- Optimize images before uploading (compress, proper dimensions)
- Consider adding captions for better context

### Content Structure

- Use headings to create a clear hierarchy
- Keep paragraphs relatively short for readability
- Break up text with lists, images, and callouts
- Include a table of contents for longer posts

### Writing Style

- Use clear, concise language
- Address the reader directly when appropriate
- Back up claims with examples or references
- End with a conclusion or call to action

## Troubleshooting

### Blog Post Not Appearing

- Check that the filename has the `.mdx` extension
- Verify that all required front matter fields are present
- Ensure the date is not in the future

### Images Not Displaying

- Check that the image path in front matter is correct
- Verify that the image exists in the specified location
- Make sure the image is formatted as JPG, PNG, or WebP

### MDX Components Not Rendering

- Check that the component name is correctly capitalized
- Verify that there are no syntax errors in the component props
- Ensure that the component is properly imported in the MDX configuration

## Examples

For examples of properly formatted blog posts, see these reference posts:

- `content/blog/html-elements-test.mdx` - Shows all HTML elements and styling
- `content/blog/mdx-components-guide.mdx` - Demonstrates all MDX components
- `content/blog/author-system-guide.mdx` - Example of a comprehensive guide post