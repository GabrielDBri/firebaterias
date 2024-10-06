// components/ListaProdutos.js
import Produto from './comp2/produto';

const ListaProdutos = () => {
  const produtos = [
    {
      imagem: '/path/to/camera1.jpg',
      titulo: 'Sensation 60s Vintage, nossa primeira coleção',
      descricao: 'Leia mais',
      data: '29 de março de 2022',
    },
    {
      imagem: '/path/to/camera2.jpg',
      titulo: 'Review de Filmes (1977)',
      descricao: 'Leia mais',
      data: '10 de junho de 2022',
    },
    {
      imagem: '/path/to/camera3.jpg',
      titulo: 'Melhores câmeras antigas com designs incomuns',
      descricao: 'Leia mais',
      data: '13 de setembro de 2022',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h2>
      <div className="flex justify-center flex-wrap">
        {produtos.map((produto, index) => (
          <Produto key={index} {...produto} />
        ))}
      </div>
    </section>
  );
};

export default ListaProdutos;
