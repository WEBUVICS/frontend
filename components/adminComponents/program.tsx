"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pencil, Trash2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProgramSection() {
  const [editItem, setEditItem] = useState<any | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [detailItem, setDetailItem] = useState<any | null>(null);

  // contoh dummy data
  const programs = [
    {
      id: 1,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 2,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 3,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 4,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 5,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 6,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 7,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
  ];

  return (
    <section className="py-12 relative">
      <h2
        className="text-center text-2xl font-bold mb-8"
        style={{ color: "var(--color-second)" }}
      >
        PROGRAM
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".program-swiper-next",
          prevEl: ".program-swiper-prev",
        }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {programs.map((program) => (
          <SwiperSlide key={program.id}>
            <div
              onClick={() => setDetailItem(program)}
              className="bg-[var(--color-second)] text-white p-6 rounded-xl shadow-md cursor-pointer relative flex flex-col justify-between h-64"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                <p className="italic mb-2">{program.division}</p>
                <p className="text-sm">{program.description}</p>
              </div>

              {/* Edit & Delete Button */}
              <div
                className="flex justify-center gap-4 mt-4"
                
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setEditItem(program)}
                  className="p-2 rounded-full bg-white/30 hover:bg-white/40"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => setDeleteId(program.id)}
                  className="p-2 rounded-full bg-white/30 hover:bg-white/40"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigasi Panah */}
      <button className="program-swiper-prev hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronLeft size={22} />
      </button>
      <button className="program-swiper-next hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronRight size={22} />
      </button>

      {/* Modal Edit */}
      {editItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setEditItem(null)}
            >
              <X />
            </button>
            <h3 className="text-lg font-bold mb-4">Edit Program</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Judul</label>
                <input
                  type="text"
                  defaultValue={editItem.title}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Divisi</label>
                <input
                  type="text"
                  defaultValue={editItem.division}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Deskripsi</label>
                <textarea
                  defaultValue={editItem.description}
                  className="w-full border rounded p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--color-second)] text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Delete */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Hapus Program?</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  // hapus program
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Style pagination */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
