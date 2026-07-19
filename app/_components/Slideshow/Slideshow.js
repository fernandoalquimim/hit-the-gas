"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "@/app/_styles/slideShow.css";

import SlideImage from "./components/SlideImage";
import cars from "@/app/_utils/constants/cars";

function SlideShow() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 7000,
      }}
      speed={1500}
      navigation={false}
      pagination={{
        clickable: false,
      }}
      allowTouchMove={false}
    >
      {cars.map((c, i) => (
        <SwiperSlide key={i}>
          <SlideImage src={c.image} className={c.classes} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideShow;
