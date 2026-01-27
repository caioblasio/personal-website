import { SocialLinks } from "../SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm text-gray-600">
          © {currentYear} Caio De Blasio. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <SocialLinks size={20} />
        </div>
      </div>
    </footer>
  );
};
