import { getCars } from "@/app/_lib/data-services";
import CarCard from "./components/CarCard";

async function CarsList({ manufacturersIds }) {
  const cars = await getCars(manufacturersIds);

  if (!cars?.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-8 sliding-div">
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}

export default CarsList;
