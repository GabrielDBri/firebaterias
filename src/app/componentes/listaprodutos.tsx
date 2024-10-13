"use client";
import { useEffect, useState } from "react";
import ProdutoTabela from "./comp2/produtos";

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

interface ListaDeProdutosProps {
  modeloSelecionado: string;
  tipoBateria: string;
}

const ListaDeProdutos = ({ modeloSelecionado, tipoBateria }: ListaDeProdutosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/produtos.json');
        if (!response.ok) {
          throw new Error(`Erro na resposta do servidor: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Dados carregados:", data);

        const bateriaSelecionada = data.baterias.find((bateria: any) => bateria.tipo === tipoBateria);
        console.log("Bateria selecionada:", bateriaSelecionada);

        if (!bateriaSelecionada) {
          console.error("Tipo de bateria não encontrado:", tipoBateria);
          setProdutos([]);
          return;
        }

        const modelo = bateriaSelecionada.modelos.find((mod: any) => mod.id === modeloSelecionado);
        console.log("Modelo encontrado:", modelo);

        if (modelo && modelo.produtos) {
          console.log("Produtos encontrados para o modelo:", modelo.produtos);
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
    <section className="container mx-auto p-8 bg-gray-800 bg-opacity-40 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Produtos Filtrados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
