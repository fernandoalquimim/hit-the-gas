import { eachDayOfInterval } from "date-fns";
import { auth } from "@/app/_lib/auth";
import { getBookedDatesByCarId, getSettings } from "@/app/_lib/data-services";
import { ReservationContext } from "./ReservationContext";
import DateSelector from "./DateSelector";
import DriverSelector from "./DriverSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ car, booking }) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCarId(car.id),
  ]);

  const editingReservedDates = booking
    ? eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      })
    : [];

  const displayingBookedDates = bookedDates.filter(
    (booked) =>
      !editingReservedDates.some(
        (editing) => editing.getTime() === booked.getTime(),
      ),
  );

  return (
    <ReservationContext>
      <div className="@container">
        <DriverSelector />
        <div className="grid grid-cols-2 @max-[67rem]:grid-cols-1 border border-primary-800">
          <DateSelector
            settings={settings}
            car={car}
            bookedDates={displayingBookedDates}
            booking={booking}
          />
          {session?.user ? (
            <ReservationForm user={session.user} car={car} booking={booking} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </ReservationContext>
  );
}

export default Reservation;
