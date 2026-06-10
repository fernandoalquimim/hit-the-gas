import { getCarImages } from "@/app/_lib/data-services";

import Galery from "./Galery";

async function CarGalery({ car }) {
  const images = await getCarImages(car.id);

  return <Galery images={images} />;
}

export default CarGalery;
