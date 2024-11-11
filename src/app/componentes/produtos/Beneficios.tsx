interface BeneficioProps {
  lista: { imagem: string; titulo: string }[];
}

const Beneficios = ({ lista }: BeneficioProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-screen-lg p-4">
      {lista.map((beneficio, index) => (
        <div
          key={index}
          className="w-[250px] h-[320px] bg-gradient-to-b from-red-500 to-red-800 shadow-md rounded-lg p-4 text-left transform transition-all hover:scale-105 flex flex-col justify-between relative"
        >
          {/* Título do card no canto superior esquerdo, com maior tamanho de fonte e quebra de linhas */}
          <h3 className="text-2xl font-bold text-white absolute top-8 left-4 break-words whitespace-pre-wrap">
            {beneficio.titulo}
          </h3>

          {/* Espaço reservado para manter a imagem consistente */}
          <div className="flex justify-center items-center mt-[100px] mb-4">
            <img
              src={beneficio.imagem}
              alt={beneficio.titulo}
              className="w-auto h-[150px] object-contain"
              style={{
                // Remover a sombra para eliminar o efeito de borda
                boxShadow: 'none',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beneficios;
