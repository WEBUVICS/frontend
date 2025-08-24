"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Pencil, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import type { CarouselApi } from "@/components/ui/carousel";


interface Member {
  id: number;
  name: string;
  title: string;
  batch: string;
  image: string | null;
}

// Data Advisor
const advisors: Member[] = [
  { id: 1, name: "Sir. Stenly Pungus Ph.D", title: "Advisor", batch: "Batch 1", image: null }
];

const coreTeam: Member[] = [
  { id: 1, name: "Aiko Lasut", title: "President", batch: "Batch 1", image: null },
  { id: 2, name: "Prince Tampi", title: "Vice President", batch: "Batch 1", image: null },
  { id: 3, name: "Dion Kobi", title: "Secretary", batch: "Batch 1", image: null },
];

const webDevelopment: Member[] = [
  { id: 1, name: "Grantly Sorongan", title: "Web Development", batch: "Batch 1", image: null },
  { id: 2, name: "Adithia Gunawan", title: "Web Development", batch: "Batch 1", image: null },
  { id: 3, name: "Jordan Sutarto", title: "Web Development", batch: "Batch 1", image: null }
];

const publicDocs: Member[] = [
  { id: 1, name: "Marshanda Padmarini", title: "PnD", batch: "Batch 1", image: null },
  { id: 2, name: "Avriel Parengkuan", title: "PnD", batch: "Batch 1", image: null },
  { id: 3, name: "Alyan Donuhulu", title: "PnD", batch: "Batch 1", image: null },
];

const eventEducation: Member[] = [
  { id: 1, name: "Marcel Pandelaki", title: "EnE", batch: "Batch 1", image: null },
  { id: 2, name: "Reva Rorie", title: "EnE", batch: "Batch 1", image: null },
  { id: 3, name: "Natanel Rantung", title: "EnE", batch: "Batch 1", image: null },
];

const batches = ["Batch 1", "Batch 2", "Batch 3"];

export default function AdvisorCarousel() {
  const [selectedBatch, setSelectedBatch] = React.useState("Batch 1");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const filteredAdvisors = advisors.filter((a) => a.batch === selectedBatch);
  const filteredCoreTeam = coreTeam.filter((m) => m.batch === selectedBatch);
  const filteredWebDev = webDevelopment.filter((m) => m.batch === selectedBatch);
  const filteredPublicDocs = publicDocs.filter((m) => m.batch === selectedBatch);
  const filteredEventEdu = eventEducation.filter((m) => m.batch === selectedBatch);

  const renderSection = (title: string, data: Member[], link?: string) => (
    <>
      <h2 className="text-orange-500 font-semibold text-lg mt-6 mb-3 pl-4 sm:pl-6 md:pl-8">
        {title}
      </h2>
      <div className="flex flex-col pl-4 sm:pl-6 md:pl-8">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: false }}
          setApi={setApi}
        >
          <CarouselContent className="flex gap-4 sm:gap-5 md:gap-6">
            {data.slice(0, 3).map((member: Member) => (
              <CarouselItem
                key={member.id}
                className="basis-[80%] sm:basis-[48%] md:basis-[32%] lg:basis-[22%]"
              >
                <Card className="rounded-lg shadow-sm border overflow-hidden p-0">
                  <div className="w-full h-36 sm:h-40 md:h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    ) : null}
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-orange-500 font-semibold text-sm leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-gray-500 text-xs">{member.title}</p>
                      </div>
                      <div className="flex items-center gap-2 text-orange-400">
                        <button className="hover:text-orange-600">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button className="hover:text-orange-600">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {link && (
            <div className="flex justify-end mt-3 pr-5 sm:pr-6 md:pr-8">
              <Link
                href={link}
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                Selengkapnya &gt;&gt;
              </Link>
            </div>
          )}

          {/* Dot Indicator */}
          <div className="flex justify-center gap-2 mt-5">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 rounded-full ${
                  idx === 2 ? "w-6 h-2 bg-orange-300" : "w-2 h-2 bg-orange-300"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </>
  );

  return (
    <div className="w-full flex flex-col">
      {/* Dropdown & Icons */}
      <div className="flex items-center justify-end w-full mb-2 pr-4 sm:pr-6 md:pr-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm px-3 py-1 rounded-md hover:bg-gray-100 border">
              {selectedBatch}
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border shadow-md rounded-md"
            >
              {batches.map((batch) => (
                <DropdownMenuItem
                  key={batch}
                  onClick={() => setSelectedBatch(batch)}
                  className={`cursor-pointer px-2 py-1 text-sm ${
                    selectedBatch === batch
                      ? "bg-orange-100 text-orange-600"
                      : ""
                  }`}
                >
                  {batch}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="p-2 rounded-full bg-gray-100 hover:bg-orange-100">
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-orange-100">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Render Semua Section */}
      {renderSection("Advisor", filteredAdvisors)}
      {renderSection("Core Team", filteredCoreTeam, "/admin/profile/core-team")}
      {renderSection("Web Development", filteredWebDev, "/admin/profile/web-development")}
      {renderSection("Public and Documentation", filteredPublicDocs, "/admin/profile/public-documentation")}
      {renderSection("Event and Education", filteredEventEdu, "/admin/profile/event-education")}
    </div>
  );
}
