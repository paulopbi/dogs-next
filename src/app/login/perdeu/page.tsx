import { Metadata } from "next";
import LoginPerdeuForm from "@/components/login/LoginPerdeuForm";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha",
};

function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}

export default PerdeuPage;
