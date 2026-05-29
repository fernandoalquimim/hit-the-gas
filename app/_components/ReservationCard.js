import Image from "next/image";
import Link from "next/link";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numDays,
    totalPrice,
    numPeople,
    created_at,
    hasDriver,
    cars: { name, image },
  } = booking;

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <h3 className="text-xl font-semibold text-primary-400">#{id}</h3>
            <h3 className="text-xl font-semibold">
              {name} reserved for {numDays} {numDays > 1 ? "days" : "day"}
            </h3>
          </div>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ){" "}
          {!hasDriver && (
            <> &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}</>
          )}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {numPeople} {numPeople > 1 ? "people" : "person"}{" "}
            {hasDriver && <span className="text-accent-300">(+ driver)</span>}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {!isPast(startDate) ? (
        <div className="flex flex-col border-l border-primary-800 w-25">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </Link>
          <DeleteReservation bookingId={id} onDelete={onDelete} />
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
