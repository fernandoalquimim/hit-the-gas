import Button from "./Button";
import ReservationInfo from "./ReservationInfo";

function ReservationDeleteInfo({ booking, onCloseModal, onConfirm }) {
  return (
    <div className="flex flex-col  gap-5">
      <h1 className="text-2xl leading-8 font-medium">
        Are you sure you want to delete this reservation permanently?
      </h1>

      <div className="flex border border-primary-800">
        <ReservationInfo booking={booking} />
      </div>

      <div className="flex justify-between gap-5">
        <div className="flex items-center text-accent-500">
          This action cannot be undone.
        </div>
        <div className="flex gap-4">
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button variation="danger" onClick={() => onConfirm(booking.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReservationDeleteInfo;
