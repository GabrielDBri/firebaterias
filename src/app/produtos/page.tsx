import Banner from '../componentes/comp2/banner';
import ListaBeneficios from '../componentes/listabeneficios';
import Banner2 from '../componentes/comp2/banner2';
import ListaTiposBateria from '../componentes/listatiposbateria';

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
