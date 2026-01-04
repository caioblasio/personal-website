import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">Post Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        The blog post you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/blog"
        className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Back to Blog
      </Link>
    </div>
  );
}
