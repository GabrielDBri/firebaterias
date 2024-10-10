import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white  z-50 shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-lg font-bold">
          <Link href="/">
              <Image
                src="/images/firesbateria.png" // Caminho da imagem na pasta public
                alt="Fire Baterias"
                width={200} // Ajuste a largura conforme necessário
                height={200} // Ajuste a altura conforme necessário
                className="mr-2" // Classe opcional para espaçamento à direita
              />
          </Link>
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
