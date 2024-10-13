// pages/produtos/estacionarias/page.tsx
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
      <ListaModelos />
    </div>
  );
};

export default Estacionarias;
