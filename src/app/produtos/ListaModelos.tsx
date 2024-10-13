// components/ListaModelos.tsx
import { useState } from "react";
import ListaDeProdutos from "../componentes/listaprodutos";

interface Modelo {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

interface ListaModelosProps {
  tipoBateria: string; // Adiciona o tipo de bateria como uma prop obrigatória
}

const ListaModelos = ({ tipoBateria }: ListaModelosProps) => {
  const modelosData: Modelo[] = [
    { id: "truforce-24", titulo: "Truforce EFB 24 Meses", descricao: "Baterias com 24 meses de garantia", imagem: "/images/truforce-24.webp" },
    { id: "maxfor-18", titulo: "Maxfor 18 Meses", descricao: "Baterias com 18 meses de garantia", imagem: "/images/maxfor-18.webp" },
    // Adicione mais modelos conforme necessário
  ];

  const [modeloSelecionado, setModeloSelecionado] = useState<string>(modelosData[0].id);

  return (
    <div>
      <div className="flex gap-4 mt-8">
        {modelosData.map((modelo) => (
          <div
            key={modelo.id}
            onClick={() => setModeloSelecionado(modelo.id)}
            className={`cursor-pointer p-4 border rounded ${
              modeloSelecionado === modelo.id ? "border-red-500" : "border-gray-300"
            }`}
          >
            <img src={modelo.imagem} alt={modelo.titulo} className="w-16 h-16" />
            <h3>{modelo.titulo}</h3>
          </div>
        ))}
      </div>
      
      {/* Passa o tipo de bateria junto com o modelo selecionado */}
      <ListaDeProdutos modeloSelecionado={modeloSelecionado} tipoBateria={tipoBateria} />
    </div>
  );
};

export default ListaModelos;
