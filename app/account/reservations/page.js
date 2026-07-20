import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-services";
import BookingList from "@/app/_components/Booking/BookingList";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.clientId);

  return (
    <div>
      {!bookings?.length ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cars">
            amazing cars &rarr;
          </a>
        </p>
      ) : (
        <BookingList bookings={bookings} />
      )}
    </div>
  );
}

export default Page;
