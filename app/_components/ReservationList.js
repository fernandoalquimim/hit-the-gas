import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard key={booking.id} booking={booking} />
      ))}
    </ul>
  );
}

export default ReservationList;
