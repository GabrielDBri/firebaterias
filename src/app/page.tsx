// pages/index.tsx
import { NextPage } from 'next';
import Banner from './componentes/banners/Banner';
import SobreNos from './componentes/Home/SobreNos';
import Manifesto from './componentes/Home/Manifesto';
import Identidade from './componentes/Home/Identidade';
import ListaServicos from './componentes/Home/ListaServicos';

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <SobreNos />
      <ListaServicos />
      <Manifesto />  
      <Identidade />
    </div>
  );
};

export default Home;
