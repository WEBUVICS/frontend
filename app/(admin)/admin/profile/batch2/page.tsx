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
import { ChevronDown, Pencil, Trash2, Plus, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Member {
  id: number;
  name: string;
  title: string;
  batch: string;
  image: string | null;
}

const advisors: Member[] = [
  { id: 1, name: "Sir. Stenly Pungus Ph.D", title: "Advisor", batch: "Batch 2", image: null },
];

const coreTeam: Member[] = [
  { id: 1, name: "Aiko Lasut", title: "President", batch: "Batch 2", image: null },
  { id: 2, name: "Prince Tampi", title: "Vice President", batch: "Batch 2", image: null },
  { id: 3, name: "Dion Kobi", title: "Secretary", batch: "Batch 2", image: null },
];

const webDevelopment: Member[] = [
  { id: 1, name: "Grantly Sorongan", title: "Web Development", batch: "Batch 2", image: null },
  { id: 2, name: "Adithia Gunawan", title: "Web Development", batch: "Batch 2", image: null },
  { id: 3, name: "Jordan Sutarto", title: "Web Development", batch: "Batch 2", image: null },
];

const Indev: Member[] = [
  { id: 1, name: "Marshanda Padmarini", title: "Editor", batch: "Batch 2", image: null },
  { id: 2, name: "Avriel Parengkuan", title: "Indev", batch: "Batch 2", image: null },
  { id: 3, name: "Alyan Donuhulu", title: "Exaf", batch: "Batch 2", image: null },
];

const Exaf: Member[] = [
  { id: 1, name: "Marcel Pandelaki", title: "Editor", batch: "Batch 2", image: null },
  { id: 2, name: "Reva Rorie", title: "Indev", batch: "Batch 2", image: null },
  { id: 3, name: "Natanel Rantung", title: "Exaf", batch: "Batch 2", image: null },
];

const Editor: Member[] = [
  { id: 1, name: "John Doe", title: "Editor", batch: "Batch 2", image: null },
  { id: 2, name: "Jane Doe", title: "Editor", batch: "Batch 2", image: null },
];

const PR: Member[] = [
  { id: 1, name: "Alex Smith", title: "PR Coordinator", batch: "Batch 2", image: null },
  { id: 2, name: "Emily Johnson", title: "PR Staff", batch: "Batch 2", image: null },
];

const batches = ["Batch 1", "Batch 2", "Batch 2.5"];

export default function AdvisorCarousel() {
  const [selectedBatch, setSelectedBatch] = React.useState("Batch 2");
  const [showModal, setShowModal] = React.useState(false);

  const filteredAdvisors = advisors.filter((a) => a.batch === selectedBatch);
  const filteredCoreTeam = coreTeam.filter((m) => m.batch === selectedBatch);
  const filteredWebDev = webDevelopment.filter((m) => m.batch === selectedBatch);
  const filteredIndev = Indev.filter((m) => m.batch === selectedBatch);
  const filteredEventEdu = Exaf.filter((m) => m.batch === selectedBatch);
  const filteredEditor = Editor.filter((m) => m.batch === selectedBatch);
  const filteredPR = PR.filter((m) => m.batch === selectedBatch);

  const renderSection = (title: string, data: Member[], link?: string) => (
    <>
      <h2 className="text-orange-500 font-semibold text-lg mt-6 mb-3 pl-4 sm:pl-6 md:pl-8">
        {title}
      </h2>
      <div className="flex flex-col pl-4 sm:pl-6 md:pl-8">
        <Carousel className="w-full" opts={{ align: "start", loop: false }}>
          <CarouselContent className="flex gap-4 sm:gap-5 md:gap-6">
            {data.slice(0, 3).map((member: Member) => (
              <CarouselItem
                key={member.id}
                className="basis-[80%] sm:basis-[48%] md:basis-[32%] lg:basis-[22%]"
              >
                <Card className="rounded-lg shadow-sm border overflow-hidden p-0">
                  <div className="relative w-full h-48 sm:h-52 md:h-56 bg-gray-200 overflow-hidden rounded-t-lg flex items-center justify-center">
                    <Image
                      src={member?.image && member.image.trim() !== "" ? member.image : "/dummy-profile.svg"}
                      alt={member.name}
                      fill
                      className="object-contain p-2"
                    />
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
              <Link href={link} className="text-orange-500 text-sm font-medium hover:underline">
                Selengkapnya &gt;&gt;
              </Link>
            </div>
          )}
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
            <DropdownMenuContent align="end" className="bg-white border shadow-md rounded-md">
              {batches.map((batch) => (
                <DropdownMenuItem
                  key={batch}
                  onClick={() => setSelectedBatch(batch)}
                  className={`cursor-pointer px-2 py-1 text-sm ${
                    selectedBatch === batch ? "bg-orange-100 text-orange-600" : ""
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
          <button
            onClick={() => setShowModal(true)}
            className="p-2 rounded-full bg-gray-100 hover:bg-orange-100"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Semua Section */}
      {renderSection("Advisor", filteredAdvisors)}
      {renderSection("Core Team", filteredCoreTeam, "/admin/profile/core-team")}
      {renderSection("Web Development", filteredWebDev, "/admin/profile/web-development")}
      {renderSection("Indev", filteredIndev, "/admin/profile/indev")}
      {renderSection("Exaf", filteredEventEdu, "/admin/profile/exaf")}
      {renderSection("Editor", filteredEditor, "/admin/profile/editor")}
      {renderSection("PR", filteredPR, "/admin/profile/pr")}

      {/* === Overlay Modal === */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[650px] p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-5 text-center text-gray-800">
              Tambah Anggota
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Upload Foto */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/dummy-profile.svg"
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 w-full text-center text-sm text-black font-semibold bg-white/60">
                    Ubah Foto
                  </span>
                </div>
              </div>

              {/* Form Input */}
              <div className="flex flex-col w-full gap-4">
                <div>
                  <label className="text-sm text-gray-600">Nama Anggota</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-orange-400 px-1 py-1 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Departemen</label>
                  <select className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-orange-400 px-1 py-1 text-sm">
                    <option>Web Development</option>
                    <option>Indev</option>
                    <option>Core Team</option>
                    <option>Editor</option>
                    <option>PR</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Jabatan</label>
                  <select className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-orange-400 px-1 py-1 text-sm">
                    <option>Koordinator</option>
                    <option>PIC</option>
                    <option>Anggota</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Batch</label>
                  <select className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-orange-400 px-1 py-1 text-sm">
                    <option>Batch 1</option>
                    <option>Batch 2</option>
                    <option>Batch 2.5</option>
                  </select>
                </div>

                <button className="bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 rounded-md mt-4 transition">
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
