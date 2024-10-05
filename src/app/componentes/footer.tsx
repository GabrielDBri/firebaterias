import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";



export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white pt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Institucional */}
          <div>
            <h3 className="font-bold mb-4">INSTITUCIONAL</h3>
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
            <h3 className="font-bold mb-4">PRODUTOS</h3>
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
            <div>
              <h3 className="font-bold">CONTATO</h3>
              <ul className="space-y-2 py-4">
                <li className="flex items-center space-x-8">
                  <FaWhatsapp className="text-4xl"/>
                  <BsFillTelephoneFill className="text-4xl"/>
                  <MdOutlineEmail className="text-4xl" />
                  <FaInstagram className="text-4xl" />
                  <FaFacebookF className="text-4xl" />
                </li>
              </ul>
            </div>
    
            {/* Lojas Físicas */}
            <div>
              <h3 className="font-bold mb-4">LOJAS FÍSICAS</h3>
              <ul className="flex flex-nowrap space-x-8">
                <li className="whitespace-nowrap mb-4">
                  <strong>PORTO FERREIRA - SP</strong>
                  <p>Av. Henrique da Motta Fonseca Jr, 1744</p>
                  <p>(19) 3581-4077</p>
                  <p>(19) 99336-1557</p>
                </li>
                <li className="whitespace-nowrap mb-4">
                  <strong>RIBEIRÃO PRETO - SP</strong>
                  <p>Av. Wladimir Meirelles Ferreira, 1795</p>
                  <p>(16) 3632-2805</p>
                  <p>(16) 99152-6536</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-sm">
            &copy; 2024 Todos os direitos reservados & Baterias FIRE
          </div>
        </div>
      </footer>
    );
  }
  