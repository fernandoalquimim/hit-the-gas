import Image from "next/image";
import { getCarImages } from "@/app/_lib/data-services";

import Galery from "./Galery";

async function CarGalery({ car }) {
  const images = await getCarImages(car.id);
  const { image } = car;

  if (!images?.length)
    return <Image src={image} fill className="object-cover" alt="car image" />;

  return <Galery images={images} />;
}

export default CarGalery;
