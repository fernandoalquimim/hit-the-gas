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
