"use client";

import { useRef } from 'react';
import Beneficios from './Beneficios';

const ListaBeneficios = () => {
  const beneficios = [
    {
      imagem: '/images/beneficios/garantia-da-qualidade.png',
      titulo: 'Qualidade Garantida',
      descricao: 'Baterias com alto desempenho e durabilidade.',
    },
    {
      imagem: '/images/beneficios/periodo-de-garantia.png',
      titulo: 'Garantia Estendida',
      descricao: 'Cobertura completa em caso de defeitos de fabricação.',
    },
    {
      imagem: '/images/beneficios/alta-velocidade.png',
      titulo: 'Alta Eficiência',
      descricao: 'Tecnologia avançada para uma energia duradoura.',
    },
    {
      imagem: '/images/beneficios/atendimento-ao-cliente.png',
      titulo: 'Atendimento Especializado',
      descricao: 'Equipe pronta para atender e orientar.',
    },
    {
      imagem: '/images/beneficios/novo-produto.png',
      titulo: 'Variedade de Produtos',
      descricao: 'Ampla gama de baterias para diversas necessidades.',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 sm:py-8 lg:py-24 relative" style={{ backgroundColor: '#dddddd' }}>
      <h2 className="text-3xl font-bold text-black text-center mb-8 lg:mb-12">Nossos Benefícios</h2>

      {/* Contêiner dos benefícios com layout 3 em cima e 2 em baixo */}
      <div
        ref={containerRef}
        className="grid gap-4 sm:gap-6 lg:gap-8 overflow-visible grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 justify-center"
      >
        {beneficios.map((beneficio, index) => (
          <div key={index} className="flex flex-col items-center p-4 sm:p-6 snap-center bg-white rounded-lg shadow-md">
            <img src={beneficio.imagem} alt={beneficio.titulo} className="w-20 h-20 mb-2 lg:mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2 lg:mb-3">{beneficio.titulo}</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base">{beneficio.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaBeneficios;
