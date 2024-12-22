import LoginResetarForm from "@/components/login/LoginResetarForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha",
  description: "Resete sua conta no site dogs",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

function ResetarPage({ searchParams }: ResetarSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}

export default ResetarPage;
