"use client";

import Image from "next/image";

import { useReservation } from "./ReservationContext";

import pilot from "@/public/driver.png";

function DriverSelector() {
  const { hasDriver, setHasDriver } = useReservation();

  return (
    <div className="flex justify-between items-center shadow w-full border border-primary-800 has-checked:ring-[#5fa212] has-checked:ring-2 bg-primary-950 px-6 py-5 rounded-md mb-10">
      <div class="flex items-center space-x-5">
        <div class="flex items-center relative w-16 h-16">
          <Image src={pilot} fill className="object-cover" alt="pilot" />
        </div>
        <h2 class="text-3xl">I want an expert driver to take to wheel</h2>
      </div>
      <input
        type="checkbox"
        class="h-9 w-9 outline-offset-2 origin-left accent-[#5fa212]"
        checked={hasDriver}
        onChange={() => setHasDriver((h) => !h)}
      />
    </div>
  );
}

export default DriverSelector;
