// components/ProdutoCard.tsx
import Image from "next/image";

interface ProdutoCardProps {
  imagem: string;
  nome: string;
  preco: string;
}

const ProdutoCard = ({ imagem, nome, preco }: ProdutoCardProps) => {
  // Link dinâmico para o WhatsApp
  const whatsappLink = `https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20produto%20${encodeURIComponent(
    nome
  )}%20que%20custa%20${encodeURIComponent(preco)}.%20Poderia%20me%20ajudar?`;

  return (
    <div className="text-center border border-gray-300 rounded-lg p-4 shadow-sm">
      <Image src={imagem} alt={nome} width={200} height={200} className="mx-auto mb-4" />
      <h3 className="text-xl font-bold text-black">{nome}</h3> {/* Cor do título em preto */}
      <p className="text-black">{preco}</p> {/* Cor do preço em preto */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-6 py-2 rounded-md mt-4 inline-block" // "Comprar" permanece branco sobre fundo vermelho
      >
        Comprar
      </a>
    </div>
  );
};

export default ProdutoCard;
