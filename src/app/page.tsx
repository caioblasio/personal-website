import Image from "next/image";
import { TypewriterText } from "@/components/Typewritter";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function Home() {
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
            <div className="flex flex-row gap-4 w-full">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                  <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
