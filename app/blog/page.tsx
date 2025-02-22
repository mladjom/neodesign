import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export default async function Blog() {
  const blogDir = path.join(process.cwd(), "content");
  const files = await fs.readdir(blogDir);
  const posts = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(blogDir, file), "utf-8");
      const { data } = matter(content);
      return { slug: file.replace(".md", ""), title: data.title };
    })
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary">Blog</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="text-xl text-primary hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}