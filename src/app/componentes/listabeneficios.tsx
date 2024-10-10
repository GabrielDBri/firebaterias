// components/ListaBeneficios.tsx
import Beneficios from './comp2/beneficios';

const ListaBeneficios = () => {
  const beneficios = [
    {
      imagem: '/images/qualidade.jpg',
      titulo: 'Qualidade Garantida',
      descricao: 'Baterias com alto desempenho e durabilidade.',
    },
    {
      imagem: '/images/garantia.jpg',
      titulo: 'Garantia Estendida',
      descricao: 'Cobertura completa em caso de defeitos de fabricação.',
    },
    {
      imagem: '/images/eficiencia.jpg',
      titulo: 'Alta Eficiência',
      descricao: 'Tecnologia avançada para uma energia duradoura.',
    },
    {
      imagem: '/images/atendimento.jpg',
      titulo: 'Atendimento Especializado',
      descricao: 'Equipe pronta para atender e orientar.',
    },
    {
      imagem: '/images/variedade.jpg',
      titulo: 'Variedade de Produtos',
      descricao: 'Ampla gama de baterias para diversas necessidades.',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Benefícios</h2>
      <Beneficios lista={beneficios} />
    </section>
  );
};

export default ListaBeneficios;
