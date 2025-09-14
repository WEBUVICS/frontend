import ShowCaseCards from "@/components/showcase/showcase-cards";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { notFound } from "next/navigation";

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
  {
    id: "5",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 5",
    lomba: "Nama Lomba 5",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "6",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 6",
    lomba: "Nama Lomba 6",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "7",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 7",
    lomba: "Nama Lomba 7",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "8",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 8",
    lomba: "Nama Lomba 8",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "9",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 9",
    lomba: "Nama Lomba 9",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "10",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 10",
    lomba: "Nama Lomba 10",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "11",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 11",
    lomba: "Nama Lomba 11",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "12",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 12",
    lomba: "Nama Lomba 12",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "13",
    image: "/Logo UVICS White.jpeg",
    title: "Sample Title 13",
    lomba: "Nama Lomba 13",
    tags: ["tag1", "tag2", "tag3"],
  },
];

export default function ShowcasePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const cardsPerPage = 8;
  const totalPages = Math.ceil(showcaseItems.length / cardsPerPage);

  if (currentPage < 1 || currentPage > totalPages) return notFound();

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = showcaseItems.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          UVICS Showcase
        </h1>
        <p className="text-gray-500 text-lg">
          Discover our featured events, competitions, and achievements
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {currentCards.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full max-w-sm sm:w-[45%] md:w-[30%] lg:w-[22%] mx-auto sm:mx-0"
          >
            <ShowCaseCards {...item} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${currentPage - 1}`}
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`?page=${i + 1}`}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={`?page=${currentPage + 1}`}
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
