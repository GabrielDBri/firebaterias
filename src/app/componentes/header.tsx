import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Fire Baterias</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Baterias Fire</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
