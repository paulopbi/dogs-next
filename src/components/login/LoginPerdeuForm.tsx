"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Metadata } from "next";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import styles from "./LoginForm.module.css";
import passwordLost from "@/actions/password-lost";

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
        <Button disabled={pending}>Enviar Email</Button>
      )}
    </>
  );
}

function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });
  const [url, setUrl] = React.useState<string>("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuário" name="login" type="text" />
        <input type="hidden" name="url" value={url} />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email Enviado</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}

export default LoginPerdeuForm;
