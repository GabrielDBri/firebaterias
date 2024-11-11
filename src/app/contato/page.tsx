import Contact from '../componentes/Contato/Contato';
import Banner from '../componentes/Banners/Banner_home/BannerH';
import InfoGrid from '../componentes/InfoGrid';

export default function ProdutosPage() {
  return (
    <section className="items-center text-center">
      <div className="w-full">
        <Banner />
      </div>
      
      <div className="">
        <Contact />
      </div>
      <InfoGrid/>
    
      
      {/* Aqui você pode listar os produtos */}
    </section>
  );
}
