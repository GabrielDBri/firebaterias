import { useState, useEffect } from "react";
import ListaDeProdutos from "../componentes/listaprodutos";
import ModeloCard from "./ModeloCard";

interface Modelo {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
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
        const data = await response.json();

        const bateriaSelecionada = data.baterias.find((bateria: any) => bateria.tipo === tipoBateria);

        if (bateriaSelecionada) {
          const modelos = bateriaSelecionada.modelos.map((modelo: any) => ({
            id: modelo.id,
            titulo: modelo.titulo,
            descricao: modelo.descricao,
            imagem: modelo.imagem
          }));
          
          setModelosData(modelos);
          setModeloSelecionado(modelos[0]); // Define o primeiro modelo como selecionado por padrão
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
    <div>
      <div className="flex gap-4 mt-8">
        {modelosData.map((modelo) => (
          <div key={modelo.id} className="flex flex-col items-center" style={{ marginLeft: '20px' }}>
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