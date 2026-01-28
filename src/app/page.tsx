import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { TypewriterText } from "@/components/Typewritter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getAllPosts } from "@/lib/posts";
import Polaroid from "@/components/Polaroid";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://caioblasio.com",
  },
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Hey, I&apos;m <span className="text-cyan-500">Caio</span>{" "}
              <span className="inline-block origin-[70%_70%] animate-wave-hand text-5xl">
                👋
              </span>
            </h1>
            <TypewriterText />
            <div className="flex flex-col gap-4">
              <p className="leading-loose">
                I&apos;m a Senior Frontend Engineer from Sao Paulo, Brazil,
                currently based in Berlin, Germany. With over 9 years of
                experience, I specialize in building scalable web applications
                and leading development teams to success!
              </p>
              <p className="leading-loose">
                I currently work at N26 as a Tech Lead for Web, one of
                Europe&apos;s top mobile banks.
              </p>
              <p className="leading-loose">
                In my free time, I love exploring new places, playing music, and
                staying active.
              </p>
            </div>
          </div>
          <Polaroid
            src="/images/caio-1.jpeg"
            alt="Picture of Caio De Blasio"
            caption="N26 Summer Event 2022"
          />
        </div>
      </section>
      <section className="my-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Articles</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {posts.slice(0, 8).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block hover:scale-[1.01] transition-transform hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <Card
                  className={cn(
                    post.image ? "pt-0 overflow-hidden" : "overflow-hidden",
                    "h-full",
                  )}
                >
                  {post.image && (
                    <div className="relative w-full h-32">
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
                      <h3 className="text-md font-semibold">{post.title}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
