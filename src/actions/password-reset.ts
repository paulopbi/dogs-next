"use server";
import { PASSWORD_RESET } from "@/functions/api";
import { redirect } from "next/navigation";
import apiError from "@/functions/api-error";

export default async function passwordReset(state: {}, formdata: FormData) {
  const login = formdata.get("login") as string | null;
  const key = formdata.get("key") as string | null;
  const password = formdata.get("password") as string | null;

  try {
    if (!login || !key || !password)
      throw new Error("Preencha novamente os dados.");

    const { url } = PASSWORD_RESET();
    const response = await fetch(url, {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) throw new Error("Não autorizado.");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("/login");
}
