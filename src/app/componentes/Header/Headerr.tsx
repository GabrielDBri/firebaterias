import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="top-0 left-0 w-full bg-gray-800 text-white shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4" aria-label="Main navigation">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo1.png"
            alt="Fire Baterias"
            width={150}
            height={150}
            priority // Para SEO, carregamento prioritário
          />
        </Link>
        <MainMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}
