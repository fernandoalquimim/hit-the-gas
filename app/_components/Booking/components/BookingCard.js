import Image from "next/image";
import { formatDistance, format, isPast, isToday, parseISO } from "date-fns";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import BookingEditLink from "./BookingEditLink";
import BookingDeleteButton from "./BookingDeleteButton";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function BookingCard({ booking, onDelete, showActions = true }) {
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
      <div className="flex @max-[576px]/bookings:flex-col w-full">
        <div className="relative min-h-36 h-full @min-[576px]/bookings:aspect-square">
          <Image
            src={image}
            fill
            alt={name}
            className="object-cover border-r border-primary-800"
          />
          {isPast(new Date(startDate)) ? (
            <span className="absolute top-2 left-2 bg-primary-900 text-primary-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <>
              <span className="absolute top-2 left-2 bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
                upcoming
              </span>
              {showActions && (
                <div className="absolute right-2 top-2 flex gap-2">
                  <BookingEditLink id={id} variation="mini">
                    <PencilIcon className="h-4.5 w-4.5" />
                  </BookingEditLink>
                  <BookingDeleteButton
                    booking={booking}
                    onDelete={onDelete}
                    variation="mini"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </BookingDeleteButton>
                </div>
              )}
            </>
          )}
        </div>

        <div className="grow px-6 py-3 flex flex-col @container/details">
          <div className="flex items-center justify-between gap-5">
            <div className="text-base @min-[398px]/details:text-xl @min-[500px]/details:text-2xl font-semibold transition-all duration-300">
              <span className="text-primary-400">#{id}</span> &bull;{" "}
              <span>
                {name} reserved for {numDays} {numDays > 1 ? "days" : "day"}
              </span>
            </div>
          </div>
          <p className="text-sm @min-[398px]/details:text-lg text-primary-300 transition-all duration-300">
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ){" "}
            {!hasDriver && (
              <> &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}</>
            )}
          </p>

          <div className="mt-auto @container/footer">
            <div className="flex justify-between items-baseline @max-[500px]/footer:flex-col @max-[500px]/footer:gap-1">
              <div className="flex items-center @max-[220px]/footer:justify-between @max-[220px]/footer:w-full @min-[220px]/footer:gap-3">
                <p className="text-base @min-[398px]/details:text-lg font-semibold text-accent-400 transition-all duration-300">
                  ${totalPrice}
                </p>
                <p className="text-primary-300">&bull;</p>
                <p className="text-base @min-[398px]/details:text-lg text-primary-300 transition-all duration-300">
                  {numPeople} {numPeople > 1 ? "people" : "person"}{" "}
                  {hasDriver && (
                    <span className="@max-[220px]/footer:block text-accent-300">
                      (+ driver)
                    </span>
                  )}
                </p>
              </div>
              <p className="text-xs @min-[398px]/details:text-sm @min-[500px]/details:text-base text-primary-400 transition-all duration-300">
                Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {showActions && !isPast(startDate) ? (
        <div className="flex flex-col border-l border-primary-800 w-25 @max-[576px]/bookings:hidden">
          <BookingEditLink id={id}>
            <PencilIcon className="h-4.5 w-4.5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </BookingEditLink>
          <BookingDeleteButton booking={booking} onDelete={onDelete}>
            <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Delete</span>
          </BookingDeleteButton>
        </div>
      ) : null}
    </div>
  );
}

export default BookingCard;
