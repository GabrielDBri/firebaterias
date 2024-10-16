"use client";
import Banner from "../banner";
import ListaModelos from "../ListaModelos";

const Motos = () => {
  return (
    <div>
      <Banner
        imagem="/images/motos.webp"
        titulo="Motos"
        descricao="Baterias Para Motocicletas"
      />
      {/* Passando o tipoBateria para ListaModelos */}
      <ListaModelos tipoBateria="motocicletas" />
    </div>
  );
};

export default Motos;