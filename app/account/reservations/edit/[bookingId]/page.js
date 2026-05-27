import Reservation from "@/app/_components/Reservation";
import { getBooking, getCar } from "@/app/_lib/data-services";

async function Page({ params }) {
  const {
    id: reservationId,
    carId,
    numPeople,
    observations,
  } = await getBooking(params.bookingId);
  const car = await getCar(carId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <Reservation car={car} />
    </div>
  );
}

export default Page;
