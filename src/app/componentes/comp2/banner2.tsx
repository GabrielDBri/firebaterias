// components/BannerComTexto.tsx
import Image from "next/image";

const Banner2 = () => {
  return (
    <section className="relative my-16 h-[500px] bg-black text-white flex items-center">
      {/* Coluna de Texto */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-red-600">FIRE,</span> A Potência Que Você Precisa, Onde Quer Que Vá.
        </h2>
        <p className="mb-6 text-lg">
          Há mais de 20 anos, a FIRE se dedica à fabricação de baterias automotivas com tecnologia de ponta e um compromisso inabalável com a inovação. Utilizando materiais de alta qualidade e processos de fabricação avançados, transformamos componentes de lítio em soluções de energia confiáveis e eficientes. Com paixão e expertise, oferecemos baterias que não apenas atendem, mas superam as expectativas dos motoristas modernos, garantindo desempenho e durabilidade excepcionais.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold w-max">
          Saiba mais
        </button>
      </div>
      
      {/* Coluna da Imagem */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/banner2.jpg" // Substitua pelo caminho correto da imagem
          alt="Car Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Banner2;
