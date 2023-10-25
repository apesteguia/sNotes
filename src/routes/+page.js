// src/routes/profile/+page.ts
import { redirect } from "@sveltejs/kit";

export const load = async ({ parent }) => {
  const { supabase, session } = await parent();
  if (!session) {
    console.log("sesion no valida");
    throw redirect(303, "/login");
  }

  const { data: tableData } = await supabase.from("notes").select("");

  return {
    user: session.user,
    tableData,
  };
};
