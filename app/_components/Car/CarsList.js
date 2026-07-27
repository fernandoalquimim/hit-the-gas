import { getCars } from "@/app/_lib/data-services";
import CarCard from "./components/CarCard";
import Pagination from "@/app/_components/Pagination/Pagination";

async function CarsList({ manufacturersIds, page }) {
  const { data: cars, count } = await getCars(manufacturersIds, page);

  if (!cars?.length) return null;

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 mb-6 sliding-div">
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <Pagination totalItems={count} currentPage={page} />
      </div>
    </>
  );
}

export default CarsList;
