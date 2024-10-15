import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex justify-center py-2">
        <Image 
          src="/logo1.png" // substitua pelo caminho correto da sua logo
          alt="Logo Baterias FIRE"
          width={200} 
          height={100} 
        />
      </div>  
      <div className="bg-gray-800 py-2 border-b border-white pb-2"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 pt-4">
        {/* Institucional */}
        <div className="lg:border-white lg:pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">INSTITUCIONAL</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            <li><Link href="/politica-de-compra" className="hover:underline">Política de Compra</Link></li>
            <li><Link href="/politica-de-frete" className="hover:underline">Política de Frete</Link></li>
          </ul>
        </div>
    
        {/* Produtos */}
        <div className=" lg:border-white lg:pr-4">
          <h3 className="font-bold mb-4 border-b border-white pb-2">PRODUTOS</h3>
          <ul className="space-y-2">
            <li><Link href="/produtos/balcao" className="hover:underline">Balcão</Link></li>
            <li><Link href="/produtos/veiculos-eletricos" className="hover:underline">Baterias para Veículos Elétricos</Link></li>
            <li><Link href="/produtos/acessorios" className="hover:underline">Acessórios para Baterias</Link></li>
            <li><Link href="/produtos/agm" className="hover:underline">Bateria AGM</Link></li>
            <li><Link href="/produtos/efb" className="hover:underline">Bateria EFB</Link></li>
            <li><Link href="/produtos/ions-litio" className="hover:underline">Bateria de Íons de Lítio</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="lg:col-span-2">
          <div>
            <h3 className="font-bold mb-4 border-b border-white pb-2">CONTATO</h3>
            <div className="flex space-x-4 py-4">
              <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-4xl" />
              </a>
              <a href="tel:+5535999640477" rel="noopener noreferrer">
                <BsFillTelephoneFill className="text-4xl"/>
              </a>
              <a href="mailto:contato@bateriasfire.com" rel="noopener noreferrer">
                <MdOutlineEmail className="text-4xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-4xl" />
              </a>
            </div>
          </div>

          {/* Lojas Físicas */}
          <div>
            <h3 className="font-bold mb-4 border-b border-white pb-2">LOJAS FÍSICAS</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <strong>PORTO FERREIRA - SP</strong>
                <p>Av. Henrique da Motta Fonseca Jr, 1744</p>
                <p>(19) 3581-4077</p>
                <p>(19) 99336-1557</p>
              </div>
              <div>
                <strong>RIBEIRÃO PRETO - SP</strong>
                <p>Av. Wladimir Meireles Ferreira, 1795</p>
                <p>(16) 3512-8236</p>
                <p>(16) 99152-6536</p>
              </div>
              <div>
                <strong>SÃO CARLOS - SP</strong>
                <p>Rua Major Julio Salles, 450</p>
                <p>(16) 3374-3030</p>
                <p>(16) 99716-9753</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-black-200 py-4 border-t border-white w-full">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Todos os direitos reservados & Baterias FIRE
        </div>
      </div>
    </footer>
  );
}
