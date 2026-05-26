import { auth } from "@/app/_lib/auth";
import { getSettings } from "@/app/_lib/data-services";
import DateSelector from "./DateSelector";
import DriverSelector from "./DriverSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ car }) {
  const session = await auth();
  const [settings] = await Promise.all([getSettings()]);

  return (
    <>
      <DriverSelector />
      <div className="grid grid-cols-2 border border-primary-800">
        <DateSelector settings={settings} car={car} />
        {session?.user ? (
          <ReservationForm user={session.user} car={car} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </>
  );
}

export default Reservation;
