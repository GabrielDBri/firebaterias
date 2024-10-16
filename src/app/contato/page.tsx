import Contact from '../componentes/contact';
import Banner from '../componentes/comp2/banner';





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