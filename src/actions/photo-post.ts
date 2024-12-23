"use server";
import { PHOTO_POST } from "@/functions/api";
import { cookies } from "next/headers";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function photoPost(state: {}, formdata: FormData) {
  const token = cookies().get("token")?.value;
  const nome = formdata.get("nome") as string | null;
  const idade = formdata.get("idade") as string | null;
  const peso = formdata.get("peso") as string | null;
  const img = formdata.get("img") as File;

  try {
    if (!token || !nome || !idade || !peso || img.size === 0)
      throw new Error("Preencha todos os dados.");

    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formdata,
    });

    if (!response.ok) throw new Error("Email ou usuário já cadastrado.");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/");
}
