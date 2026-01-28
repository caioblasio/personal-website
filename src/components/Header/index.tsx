import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 backdrop-blur-lg dark:border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform active:scale-95"
        >
          <div className="relative h-7 w-7 overflow-hidden rounded-full transition-all group-hover:ring-black/10 dark:ring-white/10">
            <Image
              src="/images/logo-256x256.png"
              alt="Caio De Blasio"
              width={28}
              height={28}
            />
          </div>
          <span className="hidden font-bold tracking-tight md:inline">
            Caio
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            <Link
              className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              href="/blog"
            >
              Blog
            </Link>
          </nav>
          <Link
            href="mailto:caioblasio@gmail.com"
            aria-label="Email"
            className="hidden md:block bg-black px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:bg-gray-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Contact
          </Link>
          <div className="flex md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
