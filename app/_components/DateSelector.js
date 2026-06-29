"use client";

import { useEffect } from "react";
import { DayPicker } from "react-day-picker";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";

import { useReservation } from "./ReservationContext";

import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, car, bookedDates, booking }) {
  const {
    range,
    setRange,
    resetRange,
    singleDate,
    setSingleDate,
    hasDriver,
    setHasDriver,
    numDays,
    setNumDays,
  } = useReservation();

  const { minBookingLength, maxBookingLength } = settings;
  const { regularPrice, discount } = car;

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

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
    if (booking) {
      setHasDriver(booking.hasDriver);
      if (booking.hasDriver) {
        setSingleDate(booking.startDate);
        setRange({
          from: new Date(booking.startDate),
          to: new Date(booking.startDate),
        });
      } else {
        setRange({
          from: new Date(booking.startDate),
          to: new Date(booking.endDate),
        });
      }
    }
  }, []);

  useEffect(() => {
    setNumDays(
      hasDriver
        ? displayRange?.to
          ? 1
          : 0
        : displayRange
          ? differenceInDays(displayRange.to, displayRange.from)
          : 0,
    );
  }, [hasDriver, displayRange]);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12"
        classNames={{
          months:
            "min-h-72 min-w-60 flex flex-col items-center gap-6 @lg:flex-row @lg:justify-around @lg:items-start @2xl:justify-center @2xl:gap-10 @max-lg:pb-12",
        }}
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
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-center px-8 bg-accent-500 text-primary-800 @lg:h-16.25 @max-lg:flex-col @max-lg:py-3 transition-all duration-300">
        <div className="flex justify-between items-center @max-lg:flex-col @max-lg:items-end @max-lg:gap-2.5 @max-lg:min-w-56 @lg:max-w-130.5 @lg:w-full">
          <p className="flex items-baseline">
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
            {numDays ? (
              <span className="bg-accent-600 px-3 py-2 text-2xl ml-2.5">
                <span>&times;</span> <span>{numDays}</span>
              </span>
            ) : null}
          </p>
          {numDays ? (
            <p>
              <span className="text-lg font-bold uppercase">Total</span>{" "}
              <span className="text-2xl font-semibold">${carPrice}</span>
            </p>
          ) : null}
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
    </div>
  );
}

export default DateSelector;
