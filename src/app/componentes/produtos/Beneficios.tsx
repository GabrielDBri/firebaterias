interface BeneficioProps {
  lista: { imagem: string; titulo: string; descricao: string }[];
}

const Beneficios = ({ lista }: BeneficioProps) => {
  return (
    <div className="flex gap-4 md:flex-wrap justify-center">
      {lista.map((beneficio, index) => (
        <div
          key={index}
          className="relative w-60 h-40 sm:w-1/2 md:w-40 md:h-52 lg:w-40 lg:h-52 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center text-center m-4 hover:scale-105 transform transition-all"
          style={{
            backgroundImage: `url(${beneficio.imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay para melhorar a legibilidade */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          {/* Título e Descrição */}
          <div className="relative px-4 py-2 text-white z-10">
            <h3 className="text-lg font-bold">{beneficio.titulo}</h3>
            <p className="text-sm mt-1">{beneficio.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beneficios;
