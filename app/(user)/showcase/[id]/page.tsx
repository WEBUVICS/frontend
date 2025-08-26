import Image from "next/image";
import { notFound } from "next/navigation";

async function getCardById(id: string) {
  const mockData = [
    {
      id: "1",
      image: "/sample.jpg",
      title: "AI Hackathon",
      lomba: "Hackathon 2025",
      members: ["Alice", "Bob", "Charlie"],
      description:
        "Our team developed an AI model that achieved first place in the 2025 hackathon event.",
      tags: ["AI", "Hackathon", "Winner"],
    },
    {
      id: "2",
      image: "/sample2.jpg",
      title: "Web Design Contest",
      lomba: "Creative Design 2025",
      members: ["David", "Emma"],
      description:
        "We designed a modern responsive UI/UX for a travel platform using Next.js and TailwindCSS.",
      tags: ["Design", "Next.js", "TailwindCSS"],
    },
  ];

  return mockData.find((card) => card.id === id) || null;
}

export default async function CardDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const card = await getCardById(params.id);

  if (!card) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 relative rounded-3xl overflow-hidden shadow-md">
          <Image
            src={card.image}
            alt={card.title}
            fill
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

      {/* Description Section */}
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
    </main>
  );
}
