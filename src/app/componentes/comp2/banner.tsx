import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative text-center">
      {/* Imagem do banner */}
      <Image
        src="/banner1.jpg"  // Caminho da imagem na pasta public
        alt="Banner de Fire Baterias"
        width={1200}  // Defina o tamanho desejado
        height={500}  // Defina o tamanho desejado
        className="w-full h-auto"
      />
      {/* Texto no canto inferior esquerdo */}
      <div className="absolute bottom-5 left-0 p-4 text-left text-white">
        <h1 className="text-4xl font-bold">Bateria FIRE: Potência que Move Seu Caminho</h1>
        <p className="mt-4">Com durabilidade para acompanhar você em qualquer jornada.</p>
      </div>
    </div>
  );
};

export default Banner;
