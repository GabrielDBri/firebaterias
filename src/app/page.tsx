// pages/index.tsx
import { NextPage } from 'next';
import Banner from './componentes/Banners/Banner1';
import SobreNos from './componentes/Home/SobreNos';
import Manifesto from './componentes/Home/Manifesto';       
import ListaServicos from './componentes/Home/ListaServicos';
import InfoGrid from './componentes/InfoGrid';
import Sustainability from './componentes/Home/Sustainability';

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <SobreNos />
      <ListaServicos />
      <Manifesto />  
      <Sustainability/>
      <InfoGrid/>
    </div>
  );
};

export default Home;
