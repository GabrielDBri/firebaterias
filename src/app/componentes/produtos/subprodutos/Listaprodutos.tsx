import { useEffect, useState, useRef } from "react";
import ProdutoTabela from "./Produtos";
import Navegacao from "../Navegacao"; // Importando o componente de navegação

interface Produto {
  codigo: string;
  imagem: string;
  dimensoes: string;
  capacidade_c100: string;
  capacidade_c20: string;
  capacidade_c10: string;
  garantia: string;
  terminal: string;
  peso: string;
  manutencao: string;
  modeloId: string;
}

interface Bateria {
  tipo: string;
  modelos: Modelo[];
}

interface Modelo {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  produtos: Produto[];
}

interface ProdutosData {
  baterias: Bateria[];
}

interface ListaDeProdutosProps {
  modeloSelecionado: string;
  tipoBateria: string;
  descricaoModelo: string;
}

const ListaDeProdutos = ({ modeloSelecionado, tipoBateria, descricaoModelo }: ListaDeProdutosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/produtos.json');
        if (!response.ok) {
          throw new Error(`Erro na resposta do servidor: ${response.statusText}`);
        }

        const data: ProdutosData = await response.json();
        const bateriaSelecionada = data.baterias.find((bateria) => bateria.tipo === tipoBateria);

        if (!bateriaSelecionada) {
          console.error("Tipo de bateria não encontrado:", tipoBateria);
          setProdutos([]);
          return;
        }

        const modelo = bateriaSelecionada.modelos.find((mod) => mod.id === modeloSelecionado);
        if (modelo && modelo.produtos) {
          setProdutos(modelo.produtos);
        } else {
          console.error("Modelo não encontrado ou sem produtos:", modeloSelecionado);
          setProdutos([]);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      }
    };
    fetchData();
  }, [modeloSelecionado, tipoBateria]);

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
      {/* Exibe a descrição do modelo selecionado */}
      <h2 className="text-3xl font-bold text-center mb-12 text-white">{descricaoModelo}</h2>

      {/* Navegação - somente para mobile */}
      <Navegacao scrollLeft={scrollLeft} scrollRight={scrollRight} />

      {/* Contêiner de produtos com rolagem horizontal no mobile */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory mt-4"
        style={{ whiteSpace: 'nowrap' }}   // Forçando largura 100% para os itens
      >
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div
              key={index}
              className="inline-block snap-center mt-8" // Adicionando margem superior para espaçamento extra
            >
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
