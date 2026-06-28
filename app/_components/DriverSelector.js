"use client";

import Image from "next/image";

import { useReservation } from "./ReservationContext";

import pilot from "@/public/driver.png";

function DriverSelector() {
  const { hasDriver, setHasDriver, resetRange, setSingleDate } =
    useReservation();

  return (
    <label className="driver-checkbox-container">
      <div className="flex @max-[400px]:flex-col justify-around @min-[953px]:justify-center @min-[953px]:gap-36 items-center px-1.5 @max-[400px]:py-1.5 shadow w-full border border-primary-800 has-checked:ring-[#5fa212] has-checked:ring-2 bg-primary-950 rounded-md mb-10">
        <div className="flex items-center relative w-26 h-32">
          <Image src={pilot} fill className="object-cover" alt="pilot" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center">
            I want an expert driver <br /> take the wheel
          </h2>
          <h4 className="text-primary-600 text-md text-center">
            Only for the day selected
          </h4>
        </div>
        <input
          type="checkbox"
          checked={hasDriver}
          onChange={() => setHasDriver((h) => !h)}
          onClick={() => {
            resetRange();
            setSingleDate(null);
          }}
        />
        <svg viewBox="0 0 64 64" className="h-8 w-8 @max-[500px]:hidden">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className="driver-checkbox-path"
          ></path>
        </svg>
      </div>
    </label>
  );
}

export default DriverSelector;
