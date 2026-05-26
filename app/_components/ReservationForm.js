"use client";

import { differenceInDays } from "date-fns";

import { createBooking } from "@/app/_lib/actions";
import { useReservation } from "./ReservationContext";
import SubmitButton from "./SubmitButton";

function ReservationForm({ user, car }) {
  const { hasDriver, range, resetRange, numDays } = useReservation();
  const { id, maxCapacity, regularPrice, discount } = car;

  const startDate = range?.from;
  const endDate = range?.to;
  const bookingMaxCapacity = hasDriver ? maxCapacity - 1 : maxCapacity;
  const carPrice = regularPrice - discount;

  const bookingData = {
    startDate,
    endDate,
    numDays,
    carPrice,
    hasDriver,
    carId: id,
  };

  const createBookingWithDataBound = createBooking.bind(null, bookingData);

  return (
    <div className="flex flex-col">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithDataBound(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col grow h-full"
      >
        <div className="space-y-2">
          <label htmlFor="numPeople">How many people?</label>
          <select
            name="numPeople"
            id="numPeople"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of people...
            </option>
            {Array.from({ length: bookingMaxCapacity }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "person" : "people"}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know in advance?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate && numDays) ? (
            <p className="text-primary-300 text-base h-15 leading-15">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton>Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
