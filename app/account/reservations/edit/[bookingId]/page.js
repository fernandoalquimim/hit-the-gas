import { getBooking, getCar } from "@/app/_lib/data-services";
import Car from "@/app/_components/Car";
import Reservation from "@/app/_components/Reservation";

async function Page({ params }) {
  const booking = await getBooking(params.bookingId);
  const { id: reservationId, carId } = booking;
  const car = await getCar(carId);

  return (
    <div className="mx-0.5 grid gap-10 pb-8">
      <h2 className="font-semibold text-2xl text-accent-400">
        Edit Reservation #{reservationId}
      </h2>

      <Car car={car} booking={booking} />

      <Reservation car={car} booking={booking} />
    </div>
  );
}

export default Page;
