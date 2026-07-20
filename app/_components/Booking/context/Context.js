"use client";

import { createContext, useContext, useState } from "react";

const initialState = {
  from: undefined,
  to: undefined,
};

const bookingContext = createContext();

function Context({ children }) {
  const [range, setRange] = useState(initialState);
  const [singleDate, setSingleDate] = useState(null);
  const [hasDriver, setHasDriver] = useState(false);
  const [numDays, setNumDays] = useState(0);

  const resetRange = () => setRange(initialState);
  const resetAllStates = () => {
    resetRange();
    setHasDriver(false);
    setNumDays(0);
  };

  return (
    <bookingContext.Provider
      value={{
        range,
        setRange,
        resetRange,
        singleDate,
        setSingleDate,
        hasDriver,
        setHasDriver,
        numDays,
        setNumDays,
        resetAllStates,
      }}
    >
      {children}
    </bookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(bookingContext);

  if (!context)
    throw new Error("useBooking hook being used outside Booking Context");

  return context;
}

export { Context, useBooking };
