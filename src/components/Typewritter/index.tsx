"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export function TypewriterText() {
  return (
    <div className="text-5xl text-black dark:text-white min-h-[1.2em]">
      <Typewriter
        options={{
          strings: ["Developer", "Tech Lead", "Traveler", "Musician"],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
