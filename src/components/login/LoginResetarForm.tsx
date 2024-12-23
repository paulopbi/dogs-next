"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Metadata } from "next";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import styles from "./LoginForm.module.css";
import passwordReset from "@/actions/password-reset";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue sua conta no site dogs",
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button disabled={pending}>Resetar Senha</Button>
      )}
    </>
  );
}

function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Nova senha" name="password" type="password" />
        <input type="hidden" value={login} name="login" />
        <input type="hidden" value={keyToken} name="key" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}

export default LoginResetarForm;
