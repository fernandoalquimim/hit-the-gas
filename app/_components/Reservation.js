import { getSettings } from "@/app/_lib/data-services";
import DateSelector from "./DateSelector";
import DriverSelector from "./DriverSelector";

async function Reservation({ car }) {
  const [settings] = await Promise.all([getSettings()]);

  return (
    <>
      <DriverSelector />
      <div className="grid grid-cols-2 border border-primary-800">
        <DateSelector settings={settings} car={car} />
      </div>
    </>
  );
}

export default Reservation;
