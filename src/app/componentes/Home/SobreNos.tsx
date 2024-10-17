// components/sobreNos/SobreNos.tsx
const SobreNos = () => {
  return (
    <section className="py-12 bg-black-500 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        {/* Título e Subtítulo */}
        <div className="w-full px-6 mb-6 md:mb-0 md:w-1/2">
          <h3 className="text-sm font-semibold text-red-600 mb-2">Sobre Nós</h3>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            Para a Baterias FIRE, a mudança começa com inovação e compromisso desde o primeiro passo
          </h2>
        </div>
        
        {/* Descrição */}
        <div className="w-full px-6 md:w-1/2">
          <p className="text-gray-300 leading-relaxed">
            A empresa iniciou suas atividades em 1998 no município de Itajubá/MG. Com o reconhecimento de sua qualidade e a crescente demanda, a Baterias Fire desenvolveu um parque industrial moderno e sustentável, que evolui constantemente para atender às necessidades do mercado. Com uma presença consolidada em todo o Brasil e em diversos países da América do Sul, a empresa alcançou seu objetivo de fornecer soluções de excelência em baterias automotivas, estacionárias e solares. Nossa linha de produção é orientada por produtos de alta qualidade, responsabilidade social e ambiental, além de um atendimento comercial de excelência. Contamos com uma cadeia logística eficiente, incluindo frota própria, para garantir a segurança e agilidade na produção, distribuição e entrega dos nossos produtos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
