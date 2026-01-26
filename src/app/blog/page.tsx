import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Blog Home</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
