import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content");
  const files = await fs.readdir(blogDir);
  return files.map((file) => ({ slug: file.replace(".md", "") }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const content = await fs.readFile(filePath, "utf-8");
  const { data, content: markdown } = matter(content);
  const processedContent = await remark().use(html).process(markdown);
  const htmlContent = processedContent.toString();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}