// pages/index.tsx
import { NextPage } from 'next';
import Banner from './componentes/Banners/Banner';
import SobreNos from './componentes/Home/SobreNos';
import Manifesto from './componentes/Home/Manifesto';       
import ListaServicos from './componentes/Home/ListaServicos';
import InfoGrid from './componentes/InfoGrid';

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <SobreNos />
      <ListaServicos />
      <Manifesto />  
      <InfoGrid/>
    </div>
  );
};

export default Home;
