// components/Beneficios.js
interface BeneficioProps {
    lista: string[];
}

const Beneficios = ({ lista }: BeneficioProps) => {
    return (
      <div className="flex justify-between">
        {lista.map((beneficio, index) => (
          <div key={index} className="flex-1 m-4 text-center">
            <h3 className="text-2xl font-bold">{index + 1}.</h3>
            <p className="mt-2">{beneficio}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Beneficios;
  