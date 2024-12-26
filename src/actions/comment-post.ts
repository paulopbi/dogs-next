"use server";
import { COMMENT_POST } from "@/functions/api";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { Comment } from "./photo-get";
import apiError from "@/functions/api-error";

export default async function commentPost(state: {}, formdata: FormData) {
  const token = cookies().get("token")?.value;
  const comment = formdata.get("comment") as string | null;
  const id = formdata.get("id") as string | null;

  try {
    if (!token || !comment || !id) throw new Error("Preencha todos os dados.");

    const { url } = COMMENT_POST(id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formdata,
    });

    if (!response.ok) throw new Error("Email ou usuário já cadastrado.");
    const data = (await response.json()) as Comment;
    revalidateTag("comment");
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
