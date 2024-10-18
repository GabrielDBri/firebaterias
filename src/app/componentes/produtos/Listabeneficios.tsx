"use client";

import { useRef } from 'react';
import Beneficios from './Beneficios';
import Navegacao from './Navegacao'; // Importando o componente de navegação

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

  // Funções de rolagem horizontal no mobile
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
    <section className="py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Benefícios</h2>


      {/* Contêiner dos benefícios com rolagem horizontal no mobile e layout centralizado no desktop */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible"
        style={{ whiteSpace: 'nowrap' }} // Força o layout inline no mobile
      >
        <Beneficios lista={beneficios} />
      </div>
      {/* Navegação visível apenas no mobile */}
      <div className="md:hidden">
        <Navegacao scrollLeft={scrollLeft} scrollRight={scrollRight} />
      </div>
    </section>
  );
};

export default ListaBeneficios;
