"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import BannerText from './BannertxtH';

const Banner = () => {
  return (
    <div className="relative text-center w-full h-[250px] md:h-[700px]"> {/* Aumentando a altura do banner */}
      <BannerText />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        className="h-full w-full"
      >
        {/* Primeiro Slide */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/images/firee.png"
              alt="Banner de Fire Baterias 1"
              layout="fill"
              objectFit="cover"
              priority={true}
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>

        {/* Segundo Slide */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/images/firee.png"
              alt="Banner de Fire Baterias 2"
              layout="fill"
              objectFit="cover"
              priority={true}
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Estilizando as setas um pouco maiores */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;  /* Aumentando um pouco a largura das setas */
          height: 40px; /* Aumentando um pouco a altura das setas */
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 30px; /* Aumentando o tamanho do ícone da seta */
          color: #ffffff; /* Cor branca para garantir visibilidade */
        }
      `}</style>
    </div>
  );
};

export default Banner;
