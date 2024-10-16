import Link from "next/link";

export default function MainMenu() {
  return (
    <ul className="hidden lg:flex space-x-4 ml-4" role="menubar">
      <li role="menuitem"><Link href="/">Baterias Fire</Link></li>
      <li role="menuitem"><Link href="/produtos">Produtos</Link></li>
      <li role="menuitem"><Link href="/blog">Blog</Link></li>
      <li role="menuitem"><Link href="/contato">Contato</Link></li>
    </ul>
  );
}
