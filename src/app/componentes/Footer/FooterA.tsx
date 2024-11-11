"use client"; // Adiciona isso no topo do arquivo para torná-lo um Client Component

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* Logo */}
      <div className="flex justify-center py-2">
        <Image 
          src="/logo1.png"
          alt="Logo Baterias FIRE"
          width={150} 
          height={75} 
          className="object-contain"
        />
      </div>  

      <div className="bg-gray-800 py-2 border-b border-white"></div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 px-4 text-center sm:text-left">
        
        {/* Institucional */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">INSTITUCIONAL</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/produtos" className="hover:underline">Produtos</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>
    
        {/* Produtos */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">PRODUTOS</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/produtos/veiculos-leves" className="hover:underline">Veículos Leves</Link></li>
            <li><Link href="/produtos/veiculos-pesados" className="hover:underline">Veículos Pesados</Link></li>
            <li><Link href="/produtos/motos" className="hover:underline">Motos</Link></li>
            <li><Link href="/produtos/solares" className="hover:underline">Sistemas Solares</Link></li>
            <li><Link href="/produtos/estacionarias" className="hover:underline">Estacionários</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">CONTATO</h3>
          <div className="flex justify-center sm:justify-start gap-4 py-2 text-2xl">
            <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:+5535999640477" rel="noopener noreferrer">
              <BsFillTelephoneFill />
            </a>
            <a href="mailto:contato@bateriasfire.com" rel="noopener noreferrer">
              <MdOutlineEmail />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Lojas Físicas */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">LOJAS FÍSICAS</h3>
          <div className="text-sm space-y-4">
            <div>
              <strong>ITAJUBA - MG</strong>
              <p>Av. Paulo Chiaradia, 316</p>
              <p>Bairro São Vicente</p>
              <p>(35) 3622-0282</p>
              <p>(35) 98812-4312</p>
            </div>
            <div>
              <strong>POUSO ALEGRE - MG</strong>
              <p>Av. Vereador Antônio da Costa Rios, 1172</p>
              <p>Bairro São Geraldo</p>
              <p>(35) 3422-0728</p>
              <p>(35) 98805-2223</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-black-200 py-4 border-t border-white w-full text-center text-xs">
        &copy; 2024 Todos os direitos reservados & Baterias FIRE
      </div>
    </footer>
  );
}
