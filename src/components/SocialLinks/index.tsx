import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type SocialLinksProps = {
  size?: number;
};

export const SocialLinks = ({ size = 24 }: SocialLinksProps) => {
  return (
    <>
      <Link
        href="https://github.com/caioblasio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={size} />
      </Link>
      <Link
        href="https://linkedin.com/in/caioblasio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={size} />
      </Link>
      <Link
        href="mailto:caioblasio@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <MdEmail size={size} />
      </Link>
    </>
  );
};
