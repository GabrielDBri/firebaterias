interface ModeloCardProps {
    modelo: {
      id: string;
      titulo: string;
      imagem: string;
    };
    isSelected: boolean;
    onSelect: (id: string) => void;
  }
  
  const ModeloCard = ({ modelo, isSelected, onSelect }: ModeloCardProps) => {
    return (
      <div
        onClick={() => onSelect(modelo.id)}
        className={`cursor-pointer p-4 rounded relative overflow-hidden ${
          isSelected ? "bg-red-600 text-white" : "bg-gray-100"
        }`}
        style={{
          width: '180px',
          height: '250px',
          marginLeft: '20px',
          clipPath: isSelected ? 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' : 'none'
        }}
      >
        <img src={modelo.imagem} alt={modelo.titulo} className="w-full h-24 object-contain mb-4" />
        <h3 className={`text-lg font-bold text-center ${isSelected ? "text-white" : "text-gray-800"}`}>
          {modelo.titulo}
        </h3>
      </div>
    );
  };
  
  export default ModeloCard;
  