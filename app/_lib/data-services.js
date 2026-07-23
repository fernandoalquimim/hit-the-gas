import { eachDayOfInterval } from "date-fns";
import { notFound } from "next/navigation";

import { supabase } from "./supabase";
import { carsPerPage } from "@/app/_utils/constants/global";

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

export async function getAllCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
}

export async function getCars(selectedManufacturers = [], page = 0) {
  let query = supabase
    .from("cars")
    .select(
      "id, name, maxCapacity, regularPrice, discount, image, brands(name,logo,dimensions)",
      { count: "exact" },
    );

  if (selectedManufacturers.length)
    query = query.in("brandId", selectedManufacturers);

  if (page > 0) {
    const from = carsPerPage * (page - 1);
    const to = carsPerPage * page - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Cars could not be loaded");
  }

  return { data, count };
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

export async function getManufacturers() {
  const { data, error } = await supabase
    .from("cars")
    .select("brands(id, name, logo, dimensions)")
    .order("name");

  if (error) throw new Error("Brands could not be loaded");

  return data
    .map((d) => d.brands)
    .filter((b, i, arr) => i === arr.findIndex((t) => t.id === b.id));
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

async function fetchCountries(offset = 0) {
  try {
    const res = await fetch(
      `https://api.restcountries.com/countries/v5?response_fields=names.common%2Cflag.url_svg&limit=100&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.RESTCOUNTRIES_KEY}`,
        },
      },
    );

    const data = await res.json();
    const countries = data?.data?.objects?.map((o) => ({
      name: o.names.common,
      flag: o.flag.url_svg,
    }));

    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

export async function getCountries() {
  const countries = [];
  const offset = 100;

  for (let i = 0; i < 3; i++) {
    countries.push(...(await fetchCountries(i * offset)));
  }

  return countries;
}

export async function updateClient(id, updatedFields) {
  const { error } = await supabase
    .from("clients")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("Client could not be updated");
}

export async function getCarImages(id) {
  const bucketName = "galery";

  const { data, error } = await supabase.storage
    .from(bucketName)
    .list(`car-${id}`, { limit: 15 });

  if (error) {
    throw new Error(`Images of car ${id} could not be loaded`);
  }

  const fileUrls = data.flatMap((file) => {
    if (!file.metadata.mimetype.includes("image")) return [];

    const filePath = `car-${id}/${file.name}`;

    const { data: imageUrl, error: imageError } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    if (imageError) return [];

    return [imageUrl.publicUrl];
  });

  return fileUrls;
}
