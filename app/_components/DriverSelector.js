"use client";

import Image from "next/image";

import { useReservation } from "./ReservationContext";

import pilot from "@/public/driver.png";

function DriverSelector() {
  const { hasDriver, setHasDriver } = useReservation();

  return (
    <label className="driver-checkbox-container">
      <div className="flex justify-around items-center space-x-5 shadow w-full border border-primary-800 has-checked:ring-[#5fa212] has-checked:ring-2 bg-primary-950 px-6 rounded-md mb-10">
        <div class="flex items-center space-x-5">
          <div class="flex items-center relative w-32 h-32">
            <Image src={pilot} fill className="object-cover" alt="pilot" />
          </div>
          <h2 class="text-3xl">I want an expert driver to take the wheel</h2>
        </div>
        <input
          type="checkbox"
          checked={hasDriver}
          onChange={() => setHasDriver((h) => !h)}
        />
        <svg viewBox="0 0 64 64" className="h-8 w-8">
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
