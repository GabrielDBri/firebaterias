"use client";
import Banner from "../banner";
import ListaModelos from "../ListaModelos";

const Solar = () => {
  return (
    <div>
      <Banner
        imagem="/images/solar.webp"
        titulo="Solares"
        descricao="Baterias Solares"
      />
      {/* Passando o tipoBateria para ListaModelos */}
      <ListaModelos tipoBateria="solares" />
    </div>
  );
};

export default Solar;
