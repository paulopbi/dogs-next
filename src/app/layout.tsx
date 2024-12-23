import type { Metadata } from "next";
import { type_secound } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserContextProvider } from "@/context/userContext";
import userGet from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();
  return (
    <html lang="pt-BR">
      <body className={type_secound.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
