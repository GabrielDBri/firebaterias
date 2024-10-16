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
          src="/logo1.png" // substitua pelo caminho correto da sua logo
          alt="Logo Baterias FIRE"
          width={150} 
          height={75} 
          className="object-contain"
        />
      </div>  

      <div className="bg-gray-800 py-2 border-b border-white"></div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 px-4 text-center sm:text-left">
        
        {/* Institucional */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">INSTITUCIONAL</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/produtos" className="hover:underline">Produtos</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>
    
        {/* Produtos */}
        <div className="pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">PRODUTOS</h3>
          <ul className="space-y-2">
            <li><Link href="/produtos/veiculos-leves" className="hover:underline">Veículos Leves</Link></li>
            <li><Link href="/produtos/veiculos-pesados" className="hover:underline">Veículos Pesados</Link></li>
            <li><Link href="/produtos/motos" className="hover:underline">Motos</Link></li>
            <li><Link href="/produtos/solares" className="hover:underline">Sistemas Solares</Link></li>
            <li><Link href="/produtos/estacionarias" className="hover:underline">Estacionários</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="lg:col-span-2 text-center sm:text-left">
          <div className="mb-4">
            <h3 className="font-bold mb-4 border-b border-white pb-2">CONTATO</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 py-4">
              <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer" className="text-3xl">
                <FaWhatsapp />
              </a>
              <a href="tel:+5535999640477" rel="noopener noreferrer" className="text-3xl">
                <BsFillTelephoneFill />
              </a>
              <a href="mailto:contato@bateriasfire.com" rel="noopener noreferrer" className="text-3xl">
                <MdOutlineEmail />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Lojas Físicas */}
          <div>
            <h3 className="font-bold mb-4 border-b border-white pb-2">LOJAS FÍSICAS</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-sm">
                <strong>ITAJUBA - MG</strong>
                <p>Av. Paulo Chiaradia, 316</p>
                <p>Bairro São Vicente</p>
                <p>(35) 3622-0282</p>
                <p>(35) 98812-4312</p>
              </div>
              <div className="text-sm">
                <strong>POUSO ALEGRE - SP</strong>
                <p>Av. Vereador Antônio da Costa Rios, 1172</p>
                <p>Bairro São Geraldo</p>
                <p>(35) 3422-0728</p>
                <p>(35)  98805-2223</p>
              </div>
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
