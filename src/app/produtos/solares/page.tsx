"use client";
import Banner from "../../componentes/banners/Banner3";
import ListaModelos from "../../componentes/produtos/subprodutos/ListaModelos";

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
