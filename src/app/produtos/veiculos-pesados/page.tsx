"use client";
import Banner from "../banner";
import ListaModelos from "../ListaModelos";

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
