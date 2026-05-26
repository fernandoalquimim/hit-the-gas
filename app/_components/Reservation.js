import { auth } from "@/app/_lib/auth";
import { getBookedDatesByCarId, getSettings } from "@/app/_lib/data-services";
import { ReservationContext } from "./ReservationContext";
import DateSelector from "./DateSelector";
import DriverSelector from "./DriverSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ car }) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCarId(car.id),
  ]);

  return (
    <ReservationContext>
      <DriverSelector />
      <div className="grid grid-cols-2 border border-primary-800">
        <DateSelector settings={settings} car={car} bookedDates={bookedDates} />
        {session?.user ? (
          <ReservationForm user={session.user} car={car} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </ReservationContext>
  );
}

export default Reservation;
