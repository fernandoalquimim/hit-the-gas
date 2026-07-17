import Button from "../Button";
import ReservationCard from "./ReservationCard";

function ReservationDeleteInfo({ booking, onCloseModal, onConfirm }) {
  return (
    <div className="flex flex-col gap-5 w-[40vw] @container/bookings">
      <h1 className="text-2xl leading-8 font-medium">
        Are you sure you want to delete this reservation permanently?
      </h1>

      <ReservationCard booking={booking} showActions={false} />

      <div className="flex justify-between gap-5 @max-[353px]/bookings:flex-col">
        <div className="flex items-center text-center text-accent-500 @max-[353px]/bookings:order-2 @max-[353px]/bookings:justify-center">
          This action cannot be undone.
        </div>
        <div className="flex gap-4 @max-[257px]/bookings:flex-col">
          <Button
            additionalClasses="grow transition-all duration-300"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button
            variation="danger"
            additionalClasses="grow transition-all duration-300"
            onClick={() => onConfirm(booking.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReservationDeleteInfo;
