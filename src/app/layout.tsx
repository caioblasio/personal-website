import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { cn } from "@/lib/utils/cn";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const handwriting = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Caio De Blasio",
    default: "Caio De Blasio",
  },
  description:
    "I'm a Senior Frontend Engineer from Sao Paulo, Brazil, currently based in Berlin, Germany." +
    " With over 9 years of experience, I specialize in building scalable web applications" +
    " and leading development teams to success!",
  openGraph: {
    type: "website",
    locale: "en-US",
    siteName: "Caio De Blasio",
    url: "https://caioblasio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          handwriting.variable,
          "antialiased text-neutral-900 dark:text-neutral-100",
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
              <div className="mx-auto max-w-5xl px-6 py-12">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
