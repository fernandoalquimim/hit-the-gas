import Modal from "../Modal/Modal";
import ReservationDeleteInfo from "./ReservationDeleteInfo";

const variations = {
  mini: "flex justify-center items-center h-7 w-7 bg-red-700 hover:bg-red-800 text-red-300 transition-colors cursor-pointer rounded-sm @min-[576px]/bookings:hidden",
  normal:
    "group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 cursor-pointer",
};

function ReservationDeleteButton({
  children,
  booking,
  onDelete,
  variation = "normal",
}) {
  return (
    <Modal>
      <Modal.Open opens={"delete"}>
        <button className={variations[variation]}>{children}</button>
      </Modal.Open>
      <Modal.Window name={"delete"}>
        <ReservationDeleteInfo booking={booking} onConfirm={onDelete} />
      </Modal.Window>
    </Modal>
  );
}

export default ReservationDeleteButton;
