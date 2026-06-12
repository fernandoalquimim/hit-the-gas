"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/_styles/carSlideShow.css";

import GaleryModal from "./Modals/Galery/GaleryModal";

function Galery({ images }) {
  return (
    <GaleryModal>
      <GaleryModal.Open opens={"galery"}>
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                alt="car image"
                src={image}
                fill
                className="object-cover object-center cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </GaleryModal.Open>
      <GaleryModal.Window name={"galery"}>
        <div className="relative w-[80dvw] h-[80dvh] flex flex-col items-center">
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]}
          >
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <Image
                  alt="car image"
                  src={image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "auto",
                    height: "100%",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  className="keep-galery-open"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </GaleryModal.Window>
    </GaleryModal>
  );
}

export default Galery;
