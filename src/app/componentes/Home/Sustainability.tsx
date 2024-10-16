import React from 'react';

const Sustainability = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-16 lg:px-32 text-black font-opensans" aria-labelledby="responsabilidade-ambiental">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-left mb-4">
          <p className="text-sm text-red-500 font-bold">LOGÍSTICA REVERSA</p>
          <h1 id="responsabilidade-ambiental" className="text-black font-bold text-3xl">Responsabilidade Ambiental</h1>
        </header>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <figure className="flex-1 flex justify-center h-full">
            <img 
              src="/images/beneficios/garantia-da-qualidade.png" 
              alt="Representação da garantia da qualidade e sustentabilidade" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <figcaption className="sr-only">Imagem ilustrativa da garantia da qualidade e do compromisso com a sustentabilidade</figcaption>
          </figure>

          <article className="flex-1 text-justify md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Nossa operação é resultado de um <span className="text-green-500">compromisso autêntico com a sustentabilidade.</span></h2>
            <p className="text-lg mb-6">
              Cientes da importância de retribuir à sociedade e colaborar com o seu bem-estar, a Baterias Fire vê na sustentabilidade uma forma de garantir o futuro da indústria.
            </p>
            <p className="text-lg mb-6">
              Estimulamos a preservação dos recursos naturais ao incorporar chumbo reciclado na fabricação de nossas baterias, e ao monitorar, tratar e destinar de forma adequada todos os resíduos gerados, reduzimos de maneira significativa o nosso impacto ambiental.
            </p>

            <h3 className="text-xl font-semibold mb-4">Processo de Logística Reversa</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Distribuição de baterias novas para nossos parceiros comerciais</li>
              <li>Comercialização das baterias para os consumidores</li>
              <li>Retorno das baterias usadas através de nossos pontos de coleta</li>
              <li>Coleta das baterias usadas para tratamento adequado</li>
              <li>Envio das baterias inutilizadas para empresas de reciclagem especializadas</li>
              <li>Recebimento de matéria-prima reciclada para reintegrá-la à nossa linha de produção</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
