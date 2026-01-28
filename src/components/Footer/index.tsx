import Image from "next/image";
import { SocialLinks } from "../SocialLinks";
import { SiNextdotjs, SiVercel } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm text-gray-600">
          <Image
            src="/images/logo-256x256.png"
            alt="Caio De Blasio"
            width={28}
            height={28}
            className="inline mr-2"
          />
          © {currentYear} Caio De Blasio.
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-4 md:mt-0">
          <span>Made with</span>
          <FaHeart className="text-red-500" width={28} height={28} />
          <span>with</span>
          <SiNextdotjs title="Next.js" width={28} height={28} />
          <span>and hosted on</span>
          <SiVercel title="Vercel" width={28} height={28} />
        </div>

        <div className="mt-4 flex space-x-6 md:mt-0">
          <SocialLinks size={20} />
        </div>
      </div>
    </footer>
  );
};
