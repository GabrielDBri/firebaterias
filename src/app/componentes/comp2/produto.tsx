// components/Produto.tsx
interface ProdutoProps {
    imagem: string;
    titulo: string;
    descricao: string;
    data: string;
  }
  
  const Produto = ({ imagem, titulo, descricao, data }: ProdutoProps) => {
    return (
      <div className="border border-gray-300 p-6 m-4 text-center max-w-xs">
        <img src={imagem} alt={titulo} className="w-full h-auto mb-4" />
        <p className="text-sm text-gray-500 mb-2">{data}</p>
        <h3 className="text-xl font-semibold">{titulo}</h3>
        <p className="text-blue-500 mt-2">{descricao}</p>
      </div>
    );
  };
  
  export default Produto;
  