"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
 // Importando diretamente de 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'; 
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative text-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
         // Registrando os módulos diretamente aqui
      >
        {/* Primeiro Slide */}
        <SwiperSlide>
          <div className="h-[600px]">
            <Image
              src="/banner1.jpeg"
              alt="Banner de Fire Baterias 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 w-full p-4 text-left text-white z-10 bg-black bg-opacity-60">
              <h1 className="text-4xl font-bold">Baterias Fire, A Energia Que Você Precisa!</h1>
              <p className="mt-2">Venha conferir nossos tipos de produtos para diferentes aplicações.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Segundo Slide */}
        <SwiperSlide>
          <div className="relative h-[600px]">
            <Image
              src="/banner02.jpeg" // Substitua pelo caminho da sua segunda imagem
              alt="Banner de Fire Baterias 2"
              layout="fill"
              objectFit="cover"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 w-full p-4 text-left text-white z-10 bg-black bg-opacity-60">
              <h1 className="text-4xl font-bold">Baterias Fire, A Energia Que Você Precisa!</h1>
              <p className="mt-2">Venha conferir nossos tipos de produtos para diferentes aplicações.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
