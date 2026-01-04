import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/75 py-2 dark:bg-black/75 sm:py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/file.svg"
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="hidden font-semibold md:inline">Caio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
        </nav>

        {/* Right */}
        <div className="flex md:hidden items-center gap-2">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
