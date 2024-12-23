import React from "react";
import ContaHeader from "@/components/conta/ContaHeader";

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
