import LoginCriarForm from "@/components/login/LoginCriarForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site dogs",
};

function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}

export default CriarPage;
