"use client";

import { useOptimistic } from "react";

import BookingCard from "./components/BookingCard";
import { deleteBooking } from "@/app/_lib/actions";

function BookingList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((b) => b.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6 mb-6 @container/bookings">
      {optimisticBookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default BookingList;
