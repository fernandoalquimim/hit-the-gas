"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/_styles/carousel.css";

import Modal from "./components/Modal";

function Carousel({ images }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <Modal>
      <Modal.Open opens={"carousel"}>
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          onSlideChange={(s) => {
            setCurrentSlideIndex(s.realIndex);
          }}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                alt="car image"
                src={image}
                fill
                className="object-cover object-center cursor-pointer select-none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Open>
      <Modal.Window name={"carousel"}>
        <div className="relative w-[80dvw] h-[80dvh] flex flex-col items-center">
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]}
            initialSlide={currentSlideIndex}
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
                  className="swiper-keep-open select-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default Carousel;
