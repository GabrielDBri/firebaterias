// components/ListaProdutosPopulares.tsx
import ProdutoCard from "./comp2/produtos";

const produtos = [
  {
    imagem: "/produto-fire1.jpg",
    nome: "Produto FIRE 1",
    preco: "R$ 350,00",
  },
  {
    imagem: "/produto-fire2.jpg",
    nome: "Produto FIRE 2",
    preco: "R$ 380,00",
  },
  {
    imagem: "/produto-fire3.jpg",
    nome: "Produto FIRE 3",
    preco: "R$ 400,00",
  },
  {
    imagem: "/produto-fire4.jpg",
    nome: "Produto FIRE 4",
    preco: "R$ 420,00",
  },
  {
    imagem: "/produto-fire5.jpg",
    nome: "Produto FIRE 5",
    preco: "R$ 450,00",
  },
  {
    imagem: "/produto-fire6.jpg",
    nome: "Produto FIRE 6",
    preco: "R$ 470,00",
  },
  // Adicione mais produtos conforme necessário
];

const ListaProdutosPopulares = () => {
  return (
    <section className="container mx-auto my-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Nossos Produtos Populares</h2>
      <div className="overflow-x-scroll overflow-y-hidden flex gap-4 snap-x snap-mandatory">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 snap-start transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <ProdutoCard
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaProdutosPopulares;
