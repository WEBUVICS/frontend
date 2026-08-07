import Image from "next/image";

const departments = [
  "Internal Development",
  "Competition Handler",
  "Public Relations",
  "Editor",
  "Web Development",
];

export default function BatchThreePage() {
  return (
    <main className="w-full bg-white px-3 py-6 sm:px-5 sm:py-12">
      <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center">
        <div className="w-full rounded-lg bg-[#FFA447] px-4 py-6 shadow-lg sm:px-8 sm:py-12 md:px-10 md:py-14">
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-10 md:flex-row">
            <div className="flex-1 text-white">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                Department UVICS
              </p>
              <h1 className="mb-3 font-quick text-2xl font-bold sm:text-3xl md:text-4xl">
                Batch 3.0
              </h1>
              <p className="max-w-3xl text-justify text-sm leading-relaxed sm:text-base md:text-lg">
                Batch 3.0 represents the continued growth of UVICS as a
                student-driven organization that supports collaboration,
                competition readiness, skill development, and meaningful
                organizational contribution.
              </p>
              <p className="mt-3 max-w-3xl text-justify text-sm leading-relaxed sm:text-base md:text-lg">
                Member details for this batch will be updated once the official
                information is ready to be published.
              </p>
            </div>

            <div className="shrink-0">
              <div className="relative h-32 w-48 overflow-hidden rounded-md shadow-xl sm:h-44 sm:w-64 md:h-52 md:w-72 lg:h-56 lg:w-80">
                <Image
                  src="/image-desc-UVICS.svg"
                  alt="UVICS Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full justify-center sm:mt-10">
          <div className="w-full max-w-[850px] rounded-lg bg-[#9CB9FF] px-3 py-3 text-center shadow-lg sm:px-8 sm:py-4 md:px-12">
            <p className="text-sm font-bold italic tracking-wide text-white sm:text-lg md:text-xl">
              Being an Achiever, Carve Your Future
            </p>
          </div>
        </div>

        <section className="mt-10 w-full max-w-5xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center shadow-md sm:mt-14 sm:p-8">
          <h2 className="font-quick text-2xl font-bold text-[#FFA447]">
            Departments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Batch 3.0 follows UVICS&apos;s current organizational structure across
            the following departments.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {departments.map((department) => (
              <div
                key={department}
                className="rounded-xl bg-white px-4 py-4 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {department}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
