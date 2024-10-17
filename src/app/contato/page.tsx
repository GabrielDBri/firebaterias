import Contact from '../componentes/Contact';
import Banner from '../componentes/banners/Banner';





export default function ProdutosPage() {
    return (
      <section className="">
        <Banner/>
        <h1 className="text-3xl font-bold mb-4">Entre em contato</h1>
        <p>Aqui estão as baterias que temos à venda.</p>
        <Contact/>
        
        {/* Aqui você pode listar os produtos */}
      </section>
    );
  }