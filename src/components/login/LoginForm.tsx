"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Metadata } from "next";
import login from "@/actions/login";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import Link from "next/link";
import styles from "./LoginForm.module.css";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue sua conta no site dogs",
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Carregando...</Button>
      ) : (
        <Button disabled={pending}>Entrar</Button>
      )}
    </>
  );
}

function LoginForm() {
  const [state, action] = useFormState(login, {
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
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link href="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
