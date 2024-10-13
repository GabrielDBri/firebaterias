import Banner from '../componentes/comp2/banner';
import ListaProdutos from '../componentes/listatiposbateria';
import ListaBeneficios from '../componentes/listabeneficios';
import ListaProdutosPopulares from '../componentes/listaprodutos';
import Banner2 from '../componentes/comp2/banner2';

const Home = () => {
  return (
    <div>
      <Banner />
      <ListaProdutos />
      <ListaBeneficios />
      <Banner2/>
    </div>
  );
};

export default Home;
