"use client";
import Banner from "../banner";
import ListaModelos from "../ListaModelos";

const Estacionarias = () => {
  return (
    <div>
      <Banner
        imagem="/images/estacionarios.webp"
        titulo="Estacionárias"
        descricao="Baterias estacionárias para backup"
      />
      {/* Passando o tipoBateria para ListaModelos */}
      <ListaModelos tipoBateria="estacionarias" />
    </div>
  );
};

export default Estacionarias;
