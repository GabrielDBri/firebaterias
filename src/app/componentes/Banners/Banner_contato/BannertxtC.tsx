import React from "react";
import Image from "next/image";

const BannerText = () => {
  return (
    <div>
      <div className="absolute bottom-0 left-0 right-0 md:w-2/3 w-full p-2 md:p-4 text-left text-white z-10 bg-black bg-opacity-70 rounded-tr-2xl md:rounded-tr-3xl">
        <div className="p-1 md:p-4 rounded-tr-lg flex items-center">
          <div className="w-6 md:w-12 h-0.5 bg-red-500 mr-1 md:mr-2"></div>
          <p className="text-xxs md:text-sm text-red-500 mb-1 inline-block">
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
        <p className="mt-1 text-lg md:mt-2 md:text-6xl font-bold font-space-grotesk">
          O melhor para seu dia a dia
        </p>
      </div>
    </div>
  );
};

export default BannerText;
