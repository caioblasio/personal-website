import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  const groupedArticles = posts.reduce<Record<string, typeof posts>>(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {},
  );

  // Sort years descending
  const years = Object.keys(groupedArticles).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">All Articles</h1>
      <div className="space-y-16">
        {years.map((year) => (
          <section
            key={year}
            className="relative grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Year Label - Sticky on desktop */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold text-slate-400 md:sticky md:top-8">
                {year}
              </h2>
            </div>

            {/* Articles List */}
            <div className="md:col-span-3 space-y-8 border-l border-slate-200 dark:border-slate-800 pl-6">
              {groupedArticles[year].map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col items-start"
                >
                  <time className="text-sm text-slate-500 mb-1">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute -left-7 top-2.5 h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 line-clamp-2 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
