import Link from "next/link";
import { isPast } from "date-fns";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

import Modal from "./Modal";
import ReservationDeleteInfo from "./ReservationDeleteInfo";
import ReservationInfo from "./ReservationInfo";

function ReservationCard({ booking, onDelete }) {
  const { id, startDate } = booking;

  return (
    <div className="flex border border-primary-800">
      <ReservationInfo booking={booking} />

      {!isPast(startDate) ? (
        <div className="flex flex-col border-l border-primary-800 w-25">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </Link>
          <Modal>
            <Modal.Open opens={"delete"}>
              <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 cursor-pointer">
                <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                <span className="mt-1">Delete</span>
              </button>
            </Modal.Open>
            <Modal.Window name={"delete"}>
              <ReservationDeleteInfo booking={booking} onConfirm={onDelete} />
            </Modal.Window>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
