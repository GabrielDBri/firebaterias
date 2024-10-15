import Image from "next/image";

interface Produto {
  codigo: string;
  imagem: string;
  dimensoes: string;
  capacidade_c100: string;
  capacidade_c20: string;
  capacidade_c10: string;
  garantia: string;
  terminal: string;
  peso: string;
  manutencao: string;
}

const ProdutoTabela = ({ produto }: { produto: Produto }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md relative">
      {/* Cabeçalho com código do produto e imagem */}
      <div className="bg-gray-600 text-white flex items-center p-4 relative h-24">
        <div className="absolute -top-8 left-4">
          <Image
            src={produto.imagem}
            alt={produto.codigo}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <h3 className="ml-auto text-lg font-bold pr-4">{produto.codigo}</h3>
      </div>

      {/* Tabela de especificações */}
      <table className="w-full text-center border-collapse border border-black mt-4">
        <tbody>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">DIMENSÕES</td>
            <td className="p-2 border-black text-black">{produto.dimensoes}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">CAPACIDADE C100</td>
            <td className="p-2 border-black text-black">{produto.capacidade_c100}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">CAPACIDADE C20</td>
            <td className="p-2 border-black text-black">{produto.capacidade_c20}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">CAPACIDADE C10</td>
            <td className="p-2 border-black text-black">{produto.capacidade_c10}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">GARANTIA</td>
            <td className="p-2 border-black text-black">{produto.garantia}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">TIPO DE TERMINAL</td>
            <td className="p-2 border-black text-black">{produto.terminal}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black">PESO</td>
            <td className="p-2 border-black text-black">{produto.peso}</td>
          </tr>
          <tr className="border border-black">
            <td className="p-2 font-bold bg-gray-200 border-r border-black text-black" colSpan={2}>
              {produto.manutencao}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoTabela;
