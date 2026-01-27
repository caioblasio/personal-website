import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXParser } from "@/components/MDXParser";
import { Button } from "@/components/ui/Button";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      <div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/blog">
            <IoIosArrowRoundBack /> Ver todos
          </Link>
        </Button>
      </div>

      <article className="prose prose-lg">
        <header className="mb-8">
          <time className="text-muted-foreground text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        </header>

        <MDXRemote source={post.content} components={MDXParser} />
      </article>
    </div>
  );
}
