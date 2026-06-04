import { eachDayOfInterval } from "date-fns";
import { notFound } from "next/navigation";

import { supabase } from "./supabase";

export async function getClient(email) {
  const { data } = await supabase
    .from("clients")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createClient(newClient) {
  const { data, error } = await supabase.from("clients").insert([newClient]);

  if (error) throw new Error("Client could not be created");

  return data;
}

export async function getCars() {
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, name, maxCapacity, regularPrice, discount, image, brands(name,logo,dimensions)",
    );

  if (error) throw new Error("Cars could not be loaded");

  return data;
}

export async function getCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id,created_at,name,description,cc,hp,maxSpeed,acc,maxCapacity,regularPrice,discount,image,brands(name,logo,dimensions)",
    )
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) notFound();

  return data;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) throw new Error("Settings could not be loaded");

  return data;
}

export async function createBooking(newBooking) {
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");

  return data;
}

export async function getBookedDatesByCarId(carId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("carId", carId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) throw new Error("Bookings could not get loaded");

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getBookings(clientId) {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numDays, numPeople, hasDriver, totalPrice, clientId, carId, status, cars(name, image)",
    )
    .eq("clientId", clientId)
    .order("startDate");

  if (error) throw new Error("Bookings could not get loaded");

  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Booking could not get loaded");

  return data;
}

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw new Error("Booking could not be deleted");
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

export async function updateClient(id, updatedFields) {
  const { error } = await supabase
    .from("clients")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("Client could not be updated");
}
