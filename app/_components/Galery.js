"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/app/_styles/carSlideShow.css";

import Modal from "./Modal";

function Galery({ images }) {
  return (
    <Modal>
      <Modal.Open opens={"galery"}>
        <Swiper navigation={true} modules={[Navigation]}>
          {images.map((i) => (
            <SwiperSlide>
              <Image
                alt="car image"
                src={i}
                fill
                className="object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Open>
      <Modal.Window name={"galery"}>
        <h1>Galery</h1>
      </Modal.Window>
    </Modal>
  );
}

export default Galery;
