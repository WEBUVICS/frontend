import ShowCaseCards from "@/components/showcase/showcase-cards";

export default function Showcase() {
  const showcaseItems = [
    {
      id: "1",
      image: "/Logo UVICS White.jpeg",
      title: "Sample Title 1",
      lomba: "Nama Lomba 1",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "2",
      image: "/Logo UVICS White.jpeg",
      title: "Sample Title 2",
      lomba: "Nama Lomba 2",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "3",
      image: "/Logo UVICS White.jpeg",
      title: "Sample Title 3",
      lomba: "Nama Lomba 3",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "4",
      image: "/Logo UVICS White.jpeg",
      title: "Sample Title 4",
      lomba: "Nama Lomba 4",
      tags: ["tag1", "tag2", "tag3"],
    },
  ];

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          UVICS Showcase
        </h1>
        <p className="text-gray-500 text-lg">
          Discover our featured events, competitions, and achievements
        </p>
      </div>

      {/* Flex Cards */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {showcaseItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full max-w-sm sm:w-[45%] md:w-[30%] lg:w-[22%] mx-auto sm:mx-0"
          >
            <ShowCaseCards
              id={item.id}
              image={item.image}
              title={item.title}
              lomba={item.lomba}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
