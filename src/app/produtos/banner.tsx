// components/Banner.tsx
import Image from "next/image";

interface BannerProps {
  imagem: string;
  titulo: string;
  descricao: string;
}

const Banner = ({ imagem, titulo, descricao }: BannerProps) => {
  return (
    <div className="relative w-full h-64 mb-8">
      <Image src={imagem} alt={titulo} layout="fill" objectFit="cover" className="rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-2">{titulo}</h1>
        <p className="text-lg">{descricao}</p>
      </div>
    </div>
  );
};

export default Banner;