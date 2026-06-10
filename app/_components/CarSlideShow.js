"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/app/_styles/carSlideShow.css";

function CarSlideShow({ images, onClick }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} onClick={onClick}>
      {images.map((i) => (
        <>
          <SwiperSlide>
            <Image
              alt="car image"
              src={i}
              fill
              className="object-cover object-center"
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}

export default CarSlideShow;
