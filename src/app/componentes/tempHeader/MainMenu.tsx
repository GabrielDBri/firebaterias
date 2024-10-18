"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  label: JSX.Element;
}

const menuItems: MenuItem[] = [
  { href: "/", label: <>Baterias <span className="text-red-700">Fire</span></> },
  { href: "/blog", label: <>Blog</> },
  { href: "/contato", label: <>Contato</> },
  { href: "/produtos", label: <>Produtos</> },
];

export default function MainMenu() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex space-x-4 ml-4 font-montserrat uppercase text-sm" role="menubar">
      {menuItems.map(({ href, label }) => (
        <li
          key={href}
          role="menuitem"
          className={`hover:border-b-4 hover:border-red-700 transition-all ${
            pathname === href ? "border-b-4 border-red-700" : ""
          }`}
        >
          <Link href={href} className="p-2 block">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
