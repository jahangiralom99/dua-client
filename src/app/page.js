import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link href="categories/1">
        <button className="bg-green-600 px-12 py-6 text-white font-bold rounded-xl">
          All Category
        </button>
      </Link>
    </main>
  );
}
