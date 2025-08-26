"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Member {
  id: number;
  name: string;
  title: string;
  batch: string;
  image: string | null;
}

const eventEducationTeam: Member[] = [
  { id: 1, name: "Marcel Pandelaki", title: "EnE", batch: "Batch 1", image: null },
  { id: 2, name: "Reva Rorie", title: "EnE", batch: "Batch 1", image: null },
  { id: 3, name: "Natanel Rantung", title: "EnE", batch: "Batch 1", image: null },
  { id: 4, name: "Marcel Pandelaki", title: "EnE", batch: "Batch 1", image: null },
  { id: 5, name: "Reva Rorie", title: "EnE", batch: "Batch 1", image: null },
  { id: 6, name: "Natanel Rantung", title: "EnE", batch: "Batch 1", image: null },
];

const DEFAULT_AVATAR = "/images/default-avatar.png";

export default function EventEducationPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Tombol kembali */}
      <div className="mb-4">
        <Link
          href="/admin/profile"
          className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-base">Kembali</span>
        </Link>
      </div>

      {/* Judul Halaman */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-orange-500 mb-5">Event & Education</h1>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventEducationTeam.map((member) => (
          <Card
            key={member.id}
            className="rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
              <img
                src={member.image || DEFAULT_AVATAR}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-orange-500 font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.title}</p>
                </div>
                <div className="flex gap-3 text-orange-400">
                  <button className="hover:text-orange-600 transition-colors">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
