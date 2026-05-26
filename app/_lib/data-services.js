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
    .select("id, name, maxCapacity, discount, image");

  if (error) throw new Error("Cars could not be loaded");

  return data;
}

export async function getCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id,created_at,name,description,cc,hp,maxSpeed,acc,maxCapacity,regularPrice,discount,image",
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
