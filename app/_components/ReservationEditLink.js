import Link from "next/link";

const variations = {
  mini: "flex justify-center items-center h-7 w-7 bg-primary-800 hover:bg-primary-950 text-primary-200 transition-colors cursor-pointer rounded-sm @min-[576px]/bookings:hidden",
  normal:
    "group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900",
};

function ReservationEditLink({ children, id, variation = "normal" }) {
  return (
    <Link
      href={`/account/reservations/edit/${id}`}
      className={variations[variation]}
    >
      {children}
    </Link>
  );
}

export default ReservationEditLink;
