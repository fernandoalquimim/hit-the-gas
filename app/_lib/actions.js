"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking as createBookingSPB,
  deleteBooking as deleteBookingSPB,
  getBookings,
} from "./data-services";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const data = Object.fromEntries(formData.entries());

  const newBooking = {
    ...bookingData,
    clientId: session.user.clientId,
    numPeople: Number(data.numPeople),
    observations: data.observations.slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.numDays * bookingData.carPrice,
    isPaid: false,
    hasAccessories: false,
    accessoriesPrice: 0,
    status: "unconfirmed",
  };

  await createBookingSPB(newBooking);

  revalidatePath(`/cars/${bookingData.carId}`);

  redirect("/cars/thank-you");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const clientBookings = await getBookings(session.user.clientId);
  const clientBookingsIds = clientBookings.map((b) => b.id);
  if (!clientBookingsIds.includes(bookingId))
    throw new Error("You are only allowed to delete the bookings you did");

  await deleteBookingSPB(bookingId);

  revalidatePath("/account/reservations");
}
