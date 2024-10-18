import React from 'react';

export default function InfoGrid() {
  const infos = [
    {
      titulo: 'COMPRA SEGURA',
      descricao:
        'Todos os cuidados necessários para que suas informações estejam criptografadas, seguras e livres de qualquer vulnerabilidade.',
    },
    {
      titulo: 'FORMA DE PAGAMENTO',
      descricao:
        'Alternativas que atendem a qualquer perfil de consumidor: entre as mais tradicionais até as novidades.',
    },
    {
      titulo: 'BLOG',
      descricao:
        'Fique por dentro das nossas novidades e saiba tudo que você precisa para se manter nas tendências e no bom gosto.',
    },
  ];

  return (
    <div className="container mx-auto my-16 p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {infos.map((info, index) => (
        <div
          key={index}
          className="p-6 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white text-black"
        >
          <h3 className="text-lg font-bold mb-4">{info.titulo}</h3>
          <p className="text-gray-800">{info.descricao}</p>
        </div>
      ))}
    </div>
  );
}
