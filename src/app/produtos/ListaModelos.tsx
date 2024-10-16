import { useState, useEffect } from "react";
import ListaDeProdutos from "../componentes/listaprodutos";
import ModeloCard from "./ModeloCard";

interface Modelo {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

interface Bateria {
  tipo: string;
  modelos: Modelo[];
}

interface ProdutosData {
  baterias: Bateria[];
}

interface ListaModelosProps {
  tipoBateria: string;
}

const ListaModelos = ({ tipoBateria }: ListaModelosProps) => {
  const [modelosData, setModelosData] = useState<Modelo[]>([]);
  const [modeloSelecionado, setModeloSelecionado] = useState<Modelo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/produtos.json");
        const data: ProdutosData = await response.json();

        const bateriaSelecionada = data.baterias.find((bateria) => bateria.tipo === tipoBateria);

        if (bateriaSelecionada) {
          setModelosData(bateriaSelecionada.modelos);
          setModeloSelecionado(bateriaSelecionada.modelos[0]); // Define o primeiro modelo como selecionado por padrão
        } else {
          console.error("Tipo de bateria não encontrado:", tipoBateria);
        }
      } catch (error) {
        console.error("Erro ao carregar modelos:", error);
      }
    };

    fetchData();
  }, [tipoBateria]);

  if (!modeloSelecionado) {
    return <p>Carregando modelos...</p>;
  }

  return (
    <div className="mb-8">
      <div className="flex gap-4 mt-8 overflow-x-auto whitespace-nowrap pr-5">
        {modelosData.map((modelo) => (
          <div key={modelo.id} className="flex-shrink-0 flex flex-col items-center min-w-[200px] ml-5">
            <ModeloCard
              modelo={modelo}
              isSelected={modeloSelecionado.id === modelo.id}
              onSelect={() => setModeloSelecionado(modelo)}
            />
          </div>
        ))}
      </div>

      <ListaDeProdutos
        modeloSelecionado={modeloSelecionado.id}
        tipoBateria={tipoBateria}
        descricaoModelo={modeloSelecionado.descricao}
      />
    </div>
  );
};

export default ListaModelos;
