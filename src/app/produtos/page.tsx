import Banner from '../componentes/Banners/Banner1';
import ListaBeneficios from '../componentes/produtos/Listabeneficios';
import Banner2 from '../componentes/Banners/Banner2i';
import ListaTiposBateria from '../componentes/produtos/Listatiposbateria';

const Home = () => {
  return (
    <div>
      <Banner />
      <ListaTiposBateria />
      <ListaBeneficios />
      <Banner2/>
    </div>
  );
};

export default Home;
