import Image from 'next/image';

interface BeneficioProps {
  lista: { imagem: string; titulo: string; descricao: string }[];
}

const Beneficios = ({ lista }: BeneficioProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {lista.map((beneficio, index) => (
        <div
          key={index}
          className="relative w-40 h-52 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-between text-center m-4 hover:scale-105 transform transition-all"
        >
          {/* Imagem do Benefício */}
          <div className="relative w-full h-24">
            <Image
              src={beneficio.imagem}
              alt={beneficio.titulo}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          {/* Título e Descrição */}
          <div className="px-4 py-2">
            <h3 className="text-lg font-bold">{beneficio.titulo}</h3>
            <p className="text-sm mt-1">{beneficio.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beneficios;
