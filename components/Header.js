import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto">
        <Link href="/" className="text-xl font-bold">
          날씨 대시보드
        </Link>
      </nav>
    </header>
  );
}
