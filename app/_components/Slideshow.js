"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import car1 from "@/public/4.jpg";
import car2 from "@/public/5.jpg";
import car3 from "@/public/6.jpg";
import car4 from "@/public/7.jpg";
import car5 from "@/public/9.jpg";
import car6 from "@/public/11.jpg";

function SlideShow() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
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
      <SwiperSlide>
        <Image
          src={car1}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-right"
          alt="Try this experience"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={car2}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-top"
          alt="Try this experience"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={car3}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-top"
          alt="Try this experience"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={car4}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-top"
          alt="Try this experience"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={car5}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-top"
          alt="Try this experience"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={car6}
          fill
          quality={80}
          placeholder="blur"
          className="object-cover object-top"
          alt="Try this experience"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SlideShow;
