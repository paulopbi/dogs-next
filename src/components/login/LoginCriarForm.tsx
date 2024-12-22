"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Metadata } from "next";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import styles from "./LoginForm.module.css";
import userPost from "@/actions/user-post";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue sua conta no site dogs",
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button disabled={pending}>Cadastrar</Button>
      )}
    </>
  );
}

function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Email" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}

export default LoginCriarForm;
