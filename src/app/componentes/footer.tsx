import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";



export default function Footer() {
    return (
      <footer className="bg-black text-white">
        <div className="bg-black-800 py-4 border-b border-white pb-2">
          <div className="container mx-auto text-center text-sm">
            &copy; 2024 Todos os direitos reservados & Baterias FIRE
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          {/* Institucional */}
          <div>
            <h3 className="font-bold mb-4 border-b border-white pb-2">INSTITUCIONAL</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contato</a></li>
              <li><a href="#" className="hover:underline">Política de Compra</a></li>
              <li><a href="#" className="hover:underline">Política de Frete</a></li>
            </ul>
          </div>
  
          {/* Produtos */}
          <div>
            <h3 className="font-bold mb-4 border-b border-white pb-2">PRODUTOS</h3>
            <ul>
              <li><a href="#" className="hover:underline">Balcão</a></li>
              <li><a href="#" className="hover:underline">Baterias para Veículos Elétricos</a></li>
              <li><a href="#" className="hover:underline">Acessórios para Baterias</a></li>
              <li><a href="#" className="hover:underline">Bateria AGM</a></li>
              <li><a href="#" className="hover:underline">Bateria EFB</a></li>
              <li><a href="#" className="hover:underline">Bateria de Íons de Lítio</a></li>
            </ul>
          </div>
          <div>
            {/* Contato */}
            <div className="md:col-span-2">
              <h3 className="font-bold border-b border-white pb-2 w-full">CONTATO</h3>
              <ul className="space-y-2 py-4">
                <li className="flex items-center space-x-8">
                  <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-4xl" />
                  </a>
                  <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                    <BsFillTelephoneFill className="text-4xl"/>
                  </a>
                  <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                    <MdOutlineEmail className="text-4xl" />
                  </a>
                  <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-4xl" />
                  </a>
                  <a href="https://wa.me/+5535999640477" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-4xl" />
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Lojas Físicas */}
            <div className="md:col-span-2">
              <h3 className="font-bold mb-4 border-b border-white pb-2 w-full">LOJAS FÍSICAS</h3>
              <ul className="flex flex-nowrap space-x-8">
                <li className="whitespace-nowrap mb-4">
                  <strong>PORTO FERREIRA - SP</strong>
                  <p>Av. Henrique da Motta Fonseca Jr, 1744</p>
                  <p>(19) 3581-4077</p>
                  <p>(19) 99336-1557</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-black-200 py-4 border-y border-white pb-2 w-full">
          <div className="container mx-auto text-center text-sm">
            &copy; 2024 Todos os direitos reservados & Baterias FIRE
          </div>
        </div>
      </footer>
    );
  }
  