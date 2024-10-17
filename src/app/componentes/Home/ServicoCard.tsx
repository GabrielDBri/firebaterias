// components/servicos/ServicoCard.tsx
interface ServicoCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  const ServicoCard = ({ icon, title, description }: ServicoCardProps) => {
    return (
      <div className="bg-black-500 p-6 rounded-lg flex flex-col items-center text-center shadow-lg max-w-xs transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
        <img src={icon} alt={title} className="w-12 h-12 mb-4" loading="lazy" />
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    );
  };
  
  export default ServicoCard;
  