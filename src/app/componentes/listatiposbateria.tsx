"use client";
import { useRouter } from 'next/navigation'; // Atualizado para a versão atual do Next.js
import Produto from './comp2/tiposbateria';

const ListaTiposBateria = () => {
  const router = useRouter();
  const tipos = [
    {
      imagem: '/images/veiculosleve.webp',
      titulo: 'Veículos leves',
      descricao: 'Baterias para veículos leves',
      tipo: 'veiculos-leves',
    },
    {
      imagem: '/images/motos.webp', // Defina o caminho correto da imagem para "Motos"
      titulo: 'Motos',
      descricao: 'Baterias para motocicletas',
      tipo: 'motos', // Adicione um identificador único para o redirecionamento
    },
    {
      imagem: '/images/caminhoes.webp',
      titulo: 'Veículos pesados',
      descricao: 'Baterias para veículos pesados',
      tipo: 'veiculos-pesados',
    },
    {
      imagem: '/images/solar.webp',
      titulo: 'Solares',
      descricao: 'Baterias para sistemas solares',
      tipo: 'solares',
    },
    {
      imagem: '/images/estacionarios.webp',
      titulo: 'Estacionárias',
      descricao: 'Baterias estacionárias para backup',
      tipo: 'estacionarias',
    },
    
  ];

  // Função de clique para redirecionamento
  const handleClick = (tipo: string) => {
    router.push(`/produtos/${tipo}`);
  };

  return (
    <section className="py-12 relative">
      <div className="mb-8 ml-4">
        <h2 className="text-3xl font-bold text-left mb-2">Baterias Fire!</h2>
        <p className="text-lg text-left text-gray-300">
          Venha conferir nossos tipos de produtos para diferentes aplicações.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {tipos.map((tipo, index) => (
          <div
            key={index}
            onClick={() => handleClick(tipo.tipo)}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <Produto {...tipo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaTiposBateria;
