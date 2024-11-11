import React from "react";
import Image from "next/image";

const BannerText = () => {
  return (
    <div>
      <div className="absolute bottom-0 left-0 right-0 md:w-2/3 w-4/5 p-2 md:p-4 text-left text-white z-10 bg-black bg-opacity-70 rounded-tr-2xl md:rounded-tr-3xl">
        <div className="p-1 md:p-4 rounded-tr-lg flex items-center">
          {/* Removi o tracinho vermelho no mobile */}
          <div className="hidden md:block w-12 h-0.5 bg-red-500 mr-2"></div>
          <p className="hidden md:block text-sm text-red-500 mb-1 inline-block">
            SOBRE NÓS
          </p>
        </div>
        <h1 className="text-2xl md:text-6xl font-bold font-space-grotesk">
          Baterias{" "}
          <span
            className="text-red-600 font-bold px-1"
            style={{ textShadow: "1px 1px 2px #ffffff" }}
          >
            FIRE
          </span>
        </h1>
        {/* Ajustei o parágrafo para manter o texto numa linha só */}
        <p className="mt-1 text-lg md:mt-2 md:text-5xl font-bold font-space-grotesk">
          O melhor para seu dia a dia
        </p>
      </div>
    </div>
  );
};

export default BannerText;
