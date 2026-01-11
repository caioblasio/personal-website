import Image from "next/image";
import Link from "next/link";
import { TypewriterText } from "@/components/Typewritter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <div className="mx-auto max-w-5xl px-6">
        <section className="my-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Hey, I&apos;m <span className="text-cyan-500">Caio</span>{" "}
              <span className="inline-block origin-[70%_70%] animate-wave-hand text-5xl">
                👋
              </span>
            </h1>
            <TypewriterText />
            <div className="flex flex-col gap-4">
              <p>
                I&apos;m a Web Tech Lead from Sao Paulo, Brazil, currently based
                in Berlin, Germany. With over 9 years of experience, I
                specialize in building scalable web applications and leading
                development teams to success!
              </p>
              <p>
                I currently work at N26, one of Europe&apos;s top mobile banks.
              </p>
              <p>
                In my free time, I love exploring new places, playing music, and
                staying active.
              </p>
            </div>
          </div>
        </section>
        <section className="my-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Articles</h2>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {posts.slice(0, 8).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block hover:scale-[1.01] transition-transform hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  <Card
                    className={
                      post.image ? "pt-0 overflow-hidden" : "overflow-hidden"
                    }
                  >
                    {post.image && (
                      <div className="relative w-full h-36">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>
                        <h3>{post.title}</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>Card Content</CardContent>
                    <CardFooter>
                      <p>{post.date}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
