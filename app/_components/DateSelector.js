"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { isPast } from "date-fns";

import { useReservation } from "./ReservationContext";

import "react-day-picker/dist/style.css";

function DateSelector({ settings }) {
  const { range, setRange, resetRange, hasDriver } = useReservation();
  const [singleDate, setSingleDate] = useState(null);

  const { minBookingLength, maxBookingLength } = settings;

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
        classNames={{ months: "flex flex-row gap-12 mx-6" }}
        mode={selectorMode}
        selected={hasDriver ? singleDate : range}
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
    </div>
  );
}

export default DateSelector;
