import { notFound } from "next/navigation";

async function getPr(slug) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getPr(slug);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Product({ params }) {
  const { slug } = await params;
  const product = await getPr(slug);

  return (
    <div>
      <h1>{product.title}</h1>
      <p><b>Slug (ID):</b> {slug}</p>
      <p>{product.description}</p>
    </div>
  );
}
