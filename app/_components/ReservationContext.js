"use client";

import { createContext, useContext, useState } from "react";

const initialState = {
  from: undefined,
  to: undefined,
};

const reservationContext = createContext();

function ReservationContext({ children }) {
  const [range, setRange] = useState(initialState);
  const [hasDriver, setHasDriver] = useState(false);
  const [numDays, setNumDays] = useState(0);

  const resetRange = () => setRange(initialState);
  const resetAllStates = () => {
    resetRange();
    setHasDriver(false);
    setNumDays(0);
  };

  return (
    <reservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
        hasDriver,
        setHasDriver,
        numDays,
        setNumDays,
        resetAllStates,
      }}
    >
      {children}
    </reservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(reservationContext);

  if (!context)
    throw new Error(
      "useReservation hook being used outside ReservationContext",
    );

  return context;
}

export { ReservationContext, useReservation };
