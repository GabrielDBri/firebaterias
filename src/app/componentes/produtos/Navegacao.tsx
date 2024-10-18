interface NavegacaoProps {
    scrollLeft: () => void; // Define a prop scrollLeft
    scrollRight: () => void; // Define a prop scrollRight
  }
  
  const Navegacao = ({ scrollLeft, scrollRight }: NavegacaoProps) => {
    return (
      <div className="flex justify-center items-center mt-4 md:hidden">
        <button onClick={scrollLeft} className="p-4 rounded-full bg-red-600 text-white flex items-center justify-center mx-2">
          &larr;
        </button>
        <button onClick={scrollRight} className="p-4 rounded-full bg-red-600 text-white flex items-center justify-center mx-2">
          &rarr;
        </button>
      </div>
    );
  };
  
  export default Navegacao;
  