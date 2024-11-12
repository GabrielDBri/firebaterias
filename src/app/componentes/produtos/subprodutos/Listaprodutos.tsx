import { useRef } from "react";
import ProdutoTabela from "./Produtos";
import Navegacao from "../Navegacao";
import { Produto } from "./types";

interface ListaDeProdutosProps {
  modeloSelecionado: string;
  tipoBateria: string;
  descricaoModelo: string;
  produtos: Produto[];
}

const ListaDeProdutos = ({ modeloSelecionado, tipoBateria, descricaoModelo, produtos }: ListaDeProdutosProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Funções para rolar à esquerda e à direita
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="p-6 md:p-8 bg-gray-800 bg-opacity-40 rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">{descricaoModelo}</h2>

      {/* Navegação só será visível em dispositivos móveis */}
      <div className="block lg:hidden">
        <Navegacao scrollLeft={scrollLeft} scrollRight={scrollRight} />
      </div>

      {/* Grade para telas grandes e rolagem horizontal para telas menores */}
      <div
        ref={containerRef}
        className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory mt-4"
        style={{ whiteSpace: 'nowrap' }}
      >
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div key={index} className="inline-block snap-center lg:mt-8 lg:inline lg:w-auto">
              <ProdutoTabela produto={produto} />
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">Nenhum produto encontrado para o modelo selecionado.</p>
        )}
      </div>
    </section>
  );
};

export default ListaDeProdutos;
