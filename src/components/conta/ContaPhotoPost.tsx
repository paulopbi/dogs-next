"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Metadata } from "next";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "../helper/ErrorMessage";
import styles from "./ContaPhotoPost.module.css";
import photoPost from "@/actions/photo-post";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue sua conta no site dogs",
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Enviar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = React.useState("");
  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImageChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
