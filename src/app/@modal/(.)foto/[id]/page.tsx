import { notFound } from "next/navigation";
import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/FeedModal";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  if (!data) return notFound();
  return <FeedModal photo={data} />;
}
