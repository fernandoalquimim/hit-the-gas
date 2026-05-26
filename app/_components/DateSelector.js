"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { differenceInDays, isPast } from "date-fns";

import { useReservation } from "./ReservationContext";

import "react-day-picker/dist/style.css";

function DateSelector({ settings, car }) {
  const { range, setRange, resetRange, hasDriver } = useReservation();
  const [singleDate, setSingleDate] = useState(null);

  const { minBookingLength, maxBookingLength } = settings;
  const { regularPrice, discount } = car;

  const displayRange = range;
  const numDays = hasDriver
    ? displayRange?.to
      ? 1
      : 0
    : displayRange
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const carPrice = numDays * (regularPrice - discount);

  const selectorMode = hasDriver ? "single" : "range";
  const minBooking = hasDriver ? 1 : minBookingLength;
  const maxBooking = hasDriver ? 1 : maxBookingLength;
  const setSelectedDate = (value) => {
    if (hasDriver) {
      setSingleDate(value);
      setRange({ from: value, to: value });
    } else {
      setRange(value);
    }
  };

  useEffect(() => {
    resetRange();
    setSingleDate(null);
  }, [hasDriver]);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12"
        classNames={{ months: "flex flex-row gap-12 mx-6 min-h-72" }}
        mode={selectorMode}
        selected={hasDriver ? singleDate : displayRange}
        onSelect={setSelectedDate}
        min={minBooking}
        max={maxBooking}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={
          (curDate) => isPast(curDate)
          // || bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-16.25">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/day</span>
          </p>
          {numDays ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numDays}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${carPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => {
              resetRange();
              setSingleDate(null);
            }}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
