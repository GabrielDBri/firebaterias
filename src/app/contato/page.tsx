import Contact from '../componentes/Contact';
import Banner from '../componentes/banners/Banner';

export default function ProdutosPage() {
  return (
    <section className="flex flex-col items-center text-center py-12">
      <div className="w-full">
        <Banner />
      </div>
      
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-4">Entre em contato</h1>
        <p className="mb-8">Aqui estão as baterias que temos à venda.</p>
        <Contact />
      </div>
      
      {/* Aqui você pode listar os produtos */}
    </section>
  );
}
