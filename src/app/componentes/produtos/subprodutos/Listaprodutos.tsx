import { useEffect, useState } from "react";
import ProdutoTabela from "./Produtos";

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

  return (
    <section className="p-6 md:p-8 bg-gray-800 bg-opacity-40 rounded-lg mt-8">
      {/* Exibe a descrição do modelo selecionado */}
      <h2 className="text-3xl font-bold text-center mb-12 text-white">{descricaoModelo}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <ProdutoTabela key={index} produto={produto} />
          ))
        ) : (
          <p className="text-white text-center col-span-full">Nenhum produto encontrado para o modelo selecionado.</p>
        )}
      </div>
    </section>
  );
};

export default ListaDeProdutos;
