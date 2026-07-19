import Image from "next/image";
import { getCarImages } from "@/app/_lib/data-services";

import Carousel from "../Carousel/Carousel";

async function CarCarousel({ car }) {
  const images = await getCarImages(car.id);
  const { image } = car;

  if (!images?.length)
    return <Image src={image} fill className="object-cover" alt="car image" />;

  const displayImages = [image, ...images.filter((i) => i !== image)];

  return <Carousel images={displayImages} />;
}

export default CarCarousel;
