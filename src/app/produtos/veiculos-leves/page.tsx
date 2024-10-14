"use client";
import Banner from "../banner";
import ListaModelos from "../ListaModelos";

const Solar = () => {
  return (
    <div>
      <Banner
        imagem="/images/veiculosleve.webp"
        titulo="Veiculos Leves"
        descricao="Baterias Para veiculos leves"
      />
      {/* Passando o tipoBateria para ListaModelos */}
      <ListaModelos tipoBateria="veiculos-leves" />
    </div>
  );
};

export default Solar;
