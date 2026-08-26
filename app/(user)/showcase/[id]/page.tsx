import Image from "next/image";
import { notFound } from "next/navigation";
import { mockData } from "../mockData";
import type { Metadata } from "next";


async function getCardById(id: string) {
  return mockData.find((card) => card.id === id) || null;
}

export default async function CardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const card = await getCardById(id);

  if (!card) return notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full  md:w-1/2 h-72 relative rounded-3xl overflow-hidden shadow-md">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">{card.title}</h1>
          <p className="text-gray-600 italic">{card.lomba}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{card.description}</p>
      </div>

      {/* Members Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {card.members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const card = await getCardById(id);

  if (!card) return {};

  return {
    title: `${card.title} | Showcase UVICS`,
    description: card.description.slice(0, 155),
    alternates: { canonical: `/showcase/${card.id}` },
    openGraph: {
      title: card.title,
      description: card.description.slice(0, 155),
      images: [{ url: card.image, alt: card.title }],
    },
  };
}
