import { getManufacturers } from "@/app/_lib/data-services";
import Selector from "./Selector";

async function Manufacturer({ selected }) {
  const manufacturers = await getManufacturers();

  return (
    <div className="w-full h-20 mb-5">
      <Selector manufacturers={manufacturers} selected={selected} />
    </div>
  );
}

export default Manufacturer;
