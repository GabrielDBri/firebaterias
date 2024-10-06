// components/ListaBeneficios.tsx
import Beneficios from './comp2/beneficios';

const ListaBeneficios = () => {
  const beneficios = [
    'Leave no trace',
    'Pequenos grupos de turistas',
    'Valor agregado',
    'Planejamento conveniente',
    'Integração com negócios',
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Benefícios</h2>
      <Beneficios lista={beneficios} />
    </section>
  );
};

export default ListaBeneficios;
