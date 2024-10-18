import Image from 'next/image';
import React from 'react';

const Manifesto = () => (
  <div className="relative">
    <section className="p-6 bg-red-600 text-white relative" style={{ height: '150px' }}>
      <header className="relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8">Nosso Manifesto</h1>
      </header>
    </section>

    <section className="relative flex flex-col md:flex-row">
      <article className="bg-black text-white p-8 shadow-md relative z-20 w-full md:w-2/5 -mt-8">
        <h2 className="text-3xl font-bold mb-8">Nossa Identidade</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <h3 className="text-4xl font-bold mr-4">01</h3>
            <div>
              <h4 className="text-xl font-bold">Nossa Missão</h4>
              <p>Fornecer soluções energéticas inovadoras com foco em sustentabilidade.</p>
            </div>
          </div>
          <div className="flex items-start">
            <h3 className="text-4xl font-bold mr-4">02</h3>
            <div>
              <h4 className="text-xl font-bold">Visão</h4>
              <p>Ser líder no mercado de baterias, com produtos de excelência e responsabilidade.</p>
            </div>
          </div>
          <div className="flex items-start">
            <h3 className="text-4xl font-bold mr-4">03</h3>
            <div>
              <h4 className="text-xl font-bold">Valores</h4>
              <p>Inovação contínua, sustentabilidade ambiental, qualidade superior, ética transparente e responsabilidade social.</p>
            </div>
          </div>
        </div>
      </article>
      <figure className="relative h-[300px] md:flex-1">
        <Image
          src="/images/motos.webp"
          alt="Carro com Bateria FIRE"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </figure>
    </section>
  </div>
);

export default Manifesto;
