"use client";
import Banner from "../../componentes/Banners/Banner3";
import ListaModelos from "../../componentes/produtos/subprodutos/ListaModelos";

const Solar = () => {
  return (
    <div>
      <Banner
        imagem="/images/caminhoes.webp"
        titulo="Veiculos Pesados"
        descricao="Bateria para veiculos pesados"
      />
      {/* Passando o tipoBateria para ListaModelos */}
      <ListaModelos tipoBateria="veiculos-pesados" />
    </div>
  );
};

export default Solar;
