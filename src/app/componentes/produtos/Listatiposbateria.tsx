"use client";
import { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Usando o useRouter para navegação
import Produto from './Tiposbateria';
import Navegacao from './Navegacao';

const produtos = [
  {
    imagem: '/images/veiculosleve.webp',
    titulo: 'Veículos leves',
    tipo: 'veiculos-leves',
  },
  {
    imagem: '/images/motos.webp',
    titulo: 'Motos',
    tipo: 'motos',
  },
  {
    imagem: '/images/caminhoes.webp',
    titulo: 'Veículos pesados',
    tipo: 'veiculos-pesados',
  },
  {
    imagem: '/images/solar.webp',
    titulo: 'Solares',
    tipo: 'solares',
  },
  {
    imagem: '/images/estacionarios.webp',
    titulo: 'Estacionárias',
    tipo: 'estacionarias',
  },
];

const ListaTiposBateria = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Inicializando o useRouter

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

  const handleClick = (tipo: string) => {
    router.push(`/produtos/${tipo}`); // Navega para a rota correta
  };

  return (
    <section className="py-12 relative">
      <div className="mb-8 ml-4">
        <h2 className="text-3xl font-bold text-left mb-2">Baterias Fire!</h2>
        <p className="text-lg text-left text-gray-300">
          Venha conferir nossos tipos de produtos para diferentes aplicações.
        </p>
      </div>

      {/* Contêiner dos produtos com rolagem horizontal */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
            onClick={() => handleClick(produto.tipo)} // Redireciona ao clicar no produto
            className="cursor-pointer" // Garantindo que o mouse indique a interatividade
          >
            <Produto imagem={produto.imagem} titulo={produto.titulo} />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <Navegacao scrollLeft={scrollLeft} scrollRight={scrollRight} />
    </section>
  );
};

export default ListaTiposBateria;
