// components/ListaProdutos.tsx
"use client";
import { useState } from 'react';
import Produto from './comp2/tiposbateria';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ListaProdutos = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const tipos = [
    {
      imagem: '/images/veiculosleve.webp',
      titulo: 'Veículos leves',
      descricao: 'Baterias para veículos leves',
    },
    {
      imagem: '/images/caminhoes.webp',
      titulo: 'Veículos pesados',
      descricao: 'Baterias para veículos pesados',
    },
    {
      imagem: '/images/solar.webp',
      titulo: 'Solares',
      descricao: 'Baterias para sistemas solares',
    },
    {
      imagem: '/images/estacionarios.webp',
      titulo: 'Estacionárias',
      descricao: 'Baterias estacionárias para backup',
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="mb-8 ml-4">
        <h2 className="text-3xl font-bold text-left mb-2">Baterias Fire, a energia que queima!</h2>
        <p className="text-lg text-left text-gray-300">
          Venha conferir nossos tipos de produtos para diferentes aplicações.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {tipos.map((tipo, index) => (
          <Produto key={index} {...tipo} />
        ))}
      </div>
    </section>
  );
};

export default ListaProdutos;
