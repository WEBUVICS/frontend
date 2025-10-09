import ShowCaseCards from "@/components/showcase/showcase-cards";
import { mockData } from "./mockData";



export default function Showcase() {

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-second mb-3">
          UVICS Showcase
        </h1>
        <p className="text-gray-500 text-lg">
          Discover our featured events, competitions, and achievements
        </p>
      </div>

      {/* Flex Cards */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {mockData.map((item) => (
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
