import { getManufacturers } from "@/app/_lib/data-services";
import Selector from "./Selector";

async function Manufacturer() {
  const manufacturers = await getManufacturers();

  return (
    <div className="w-full h-20 mb-10">
      <Selector manufacturers={manufacturers} />
    </div>
  );
}

export default Manufacturer;
