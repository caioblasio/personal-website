// components/mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

export const MDXParser: MDXComponents = {
  /* ---------------- Headings ---------------- */
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-6">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="scroll-m-20 pb-2 text-2xl font-semibold mt-10 mb-4">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="scroll-m-20 text-xl font-semibold mt-8 mb-3">{children}</h3>
  ),

  h4: ({ children }) => (
    <h4 className="scroll-m-20 text-lg font-medium mt-6 mb-2">{children}</h4>
  ),

  /* ---------------- Text ---------------- */
  p: ({ children }) => (
    <p className="leading-7 text-muted-foreground mb-4">{children}</p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),

  em: ({ children }) => <em className="italic text-foreground">{children}</em>,

  del: ({ children }) => (
    <del className="line-through text-muted-foreground">{children}</del>
  ),

  /* ---------------- Links ---------------- */
  a: ({ href = "", children }) => {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="font-medium text-primary underline underline-offset-4"
      >
        {children}
      </Link>
    );
  },

  /* ---------------- Lists ---------------- */
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>
  ),

  li: ({ children }) => <li className="leading-7">{children}</li>,

  /* ---------------- Blockquote ---------------- */
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-border pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  /* ---------------- Code ---------------- */
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ) : (
      <pre className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
        <code className="font-mono">{children}</code>
      </pre>
    ),

  /* ---------------- Tables ---------------- */
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,

  tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,

  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold">{children}</th>
  ),

  td: ({ children }) => (
    <td className="px-4 py-2 text-muted-foreground">{children}</td>
  ),

  /* ---------------- Horizontal Rule ---------------- */
  hr: () => <hr className="my-8 border-border" />,

  /* ---------------- Image ---------------- */
  img: ({ src, alt = "", width, height }) => {
    // If the src starts with /images, we assume it's in /public/images
    // Otherwise you could handle external images differently
    const finalSrc = src?.startsWith("/images") ? src : src;

    // Use Next.js Image for optimization if width/height is provided
    if (width && height) {
      return (
        <Image
          src={finalSrc!}
          alt={alt}
          width={parseInt(width.toString())}
          height={parseInt(height.toString())}
          className="rounded-md my-4"
        />
      );
    }

    // Fallback to standard <img> if no width/height
    return <img src={finalSrc} alt={alt} className="rounded-md my-4" />;
  },
};
