import React from 'react';

interface ModeloCardProps {
  modelo: {
    id: string;
    titulo: string;
    imagem: string;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ModeloCard = ({ modelo, isSelected, onSelect }: ModeloCardProps) => {
  return (
    <div
      onClick={() => onSelect(modelo.id)}
      className={`cursor-pointer p-4 rounded relative overflow-hidden transition-all duration-500 ease-in-out ${
        isSelected ? "bg-red-600 text-white" : "bg-gray-100"
      }`}
      style={{
        width: '180px',
        height: '250px',
        marginLeft: '20px',
        clipPath: isSelected
          ? 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
          : 'none',
        boxShadow: isSelected ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          isSelected ? 'scale-105' : 'hover:scale-105'
        }`}
        style={{
          transform: isSelected ? 'translateY(-10px)' : 'none',
        }}
      >
        <img
          src={modelo.imagem}
          alt={modelo.titulo}
          className="w-full h-24 object-contain mb-4"
          style={{
            transition: 'transform 0.3s ease',
            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <h3
          className={`text-lg font-bold text-center ${
            isSelected ? "text-white" : "text-gray-800"
          }`}
        >
          {modelo.titulo}
        </h3>
      </div>
    </div>
  );
};

export default ModeloCard;
