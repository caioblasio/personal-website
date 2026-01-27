"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Polaroid({ src, alt, caption }: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: -1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Updated Polaroid class list
      className="group relative w-full max-w-[320px] mx-auto lg:mx-0 bg-white p-4 pb-14 shadow-xl border border-neutral-700 transition-all duration-500 hover:scale-[1.03] hover:rotate-0 hover:shadow-2xl cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-200 border border-neutral-700/10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Caption Area */}
      {caption && (
        <div className="mt-4 text-center">
          <span className="font-handwriting text-neutral-700 text-lg opacity-80">
            {caption}
          </span>
        </div>
      )}

      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
