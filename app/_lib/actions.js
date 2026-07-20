"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking as createBookingSPB,
  updateBooking as updateBookingSPB,
  deleteBooking as deleteBookingSPB,
  updateClient as updateClientSPB,
  getBookings,
} from "./data-services";
import { redirect } from "next/navigation";

export async function signInAction(callbackUrl) {
  await signIn("google", { redirectTo: callbackUrl || "/account" });
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

export async function updateBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bookingId = Number(formData.get("id"));
  const numPeople = Number(formData.get("numPeople"));
  const observations = formData.get("observations").slice(0, 1000);

  const clientBookings = await getBookings(session.user.clientId);
  const clientBookingsIds = clientBookings.map((b) => b.id);
  if (!clientBookingsIds.includes(bookingId))
    throw new Error("You are only allowed to update the bookings you did");

  const newBooking = {
    ...bookingData,
    numPeople,
    observations,
    extrasPrice: 0,
    totalPrice: bookingData.numDays * bookingData.carPrice,
    isPaid: false,
    status: "unconfirmed",
  };

  await updateBookingSPB(bookingId, newBooking);

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect("/account/reservations");
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const clientBookings = await getBookings(session.user.clientId);
  const clientBookingsIds = clientBookings.map((b) => b.id);
  if (!clientBookingsIds.includes(bookingId))
    throw new Error("You are only allowed to delete the bookings you did");

  await deleteBookingSPB(bookingId);

  revalidatePath("/account/reservations");
}

export async function updateClient(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  await updateClientSPB(session.user.clientId, updateData);

  revalidatePath("/account/profile");
  revalidatePath("/account");

  redirect("/account");
}
