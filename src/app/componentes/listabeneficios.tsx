// components/ListaBeneficios.tsx
import Beneficios from './comp2/beneficios';

const ListaBeneficios = () => {
  const beneficios = [
    {
      imagem: '/images/beneficios/garantia-da-qualidade.png',
      titulo: 'Qualidade Garantida',
      descricao: 'Baterias com alto desempenho e durabilidade.',
    },
    {
      imagem: '/images/beneficios/periodo-de-garantia.png',
      titulo: 'Garantia Estendida',
      descricao: 'Cobertura completa em caso de defeitos de fabricação.',
    },
    {
      imagem: '/images/beneficios/alta-velocidade.png',
      titulo: 'Alta Eficiência',
      descricao: 'Tecnologia avançada para uma energia duradoura.',
    },
    {
      imagem: '/images/beneficios/atendimento-ao-cliente.png',
      titulo: 'Atendimento Especializado',
      descricao: 'Equipe pronta para atender e orientar.',
    },
    {
      imagem: '/images/beneficios/novo-produto.png',
      titulo: 'Variedade de Produtos',
      descricao: 'Ampla gama de baterias para diversas necessidades.',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Benefícios</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Beneficios lista={beneficios} />
      </div>
    </section>
  );
};

export default ListaBeneficios;
