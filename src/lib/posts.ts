import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  image?: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const { data } = matter(
        fs.readFileSync(path.join(postsDir, filename), "utf8")
      );
      return { slug, ...data } as Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// src/lib/posts.ts
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
      description: data.description || "",
      image: data.image || undefined,
      content,
    };
  } catch {
    return null;
  }
}
