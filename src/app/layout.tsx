import React from "react";
import type { Metadata } from "next";
import { type_secound } from "@/functions/fonts";
import { UserContextProvider } from "@/context/userContext";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import userGet from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const { data: user } = await userGet();
  return (
    <html lang="pt-BR">
      <body className={type_secound.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
