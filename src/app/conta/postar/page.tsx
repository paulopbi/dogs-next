import ContaPhotoPost from "@/components/conta/ContaPhotoPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export const runtime = "edge";

export default function PostarPage() {
  return <ContaPhotoPost />;
}
