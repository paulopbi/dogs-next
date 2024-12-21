import type { Metadata } from "next";
import "./globals.css";
import { type_secound } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_secound.variable}>{children}</body>
    </html>
  );
}
