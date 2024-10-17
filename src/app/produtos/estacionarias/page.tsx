"use client";
import Banner from "../../componentes/banners/Banner3";
import ListaModelos from "../../componentes/produtos/subprodutos/ListaModelos";

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
