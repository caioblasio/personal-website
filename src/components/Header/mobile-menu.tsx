"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md p-2 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <RemoveScroll>
                <motion.nav
                  className="fixed inset-0 z-9999 flex bg-white dark:bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 10 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute right-6 top-6 p-2"
                  >
                    <X />
                  </button>

                  <ul className="flex h-full w-full flex-col items-center justify-center gap-10">
                    <li>
                      <Link href="/" onClick={() => setOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={() => setOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setOpen(false)}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </motion.nav>
              </RemoveScroll>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
