// components/identidade/Identidade.tsx
const Identidade = () => {
    return (
      <section className="py-12 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold">Nossa Identidade</h3>
          <div className="flex flex-col space-y-4 mt-6">
            <div>
              <h4 className="text-md font-bold">Nossa Missão</h4>
              <p>Fornecer soluções energéticas inovadoras com foco em sustentabilidade.</p>
            </div>
            <div>
              <h4 className="text-md font-bold">Visão</h4>
              <p>Ser líder no mercado de baterias...</p>
            </div>
            <div>
              <h4 className="text-md font-bold">A walk thru the past</h4>
              <p>Impacto contínuo...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Identidade;
  