"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit, Trash2, ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ShowcaseItem = {
  id: number;
  image: string;
  competitionName: string;
  teamName?: string;
  description?: string;
  category?: string;
  members?: string[];
  message?: string;
};

type ShowcaseProps = {
  items: ShowcaseItem[];
  onEdit?: (item: ShowcaseItem) => void;
  onDelete?: (id: number) => void;
  onAdd?: (item: ShowcaseItem) => void;
};

export default function ShowcaseCard({
  items,
  onEdit,
  onDelete,
  onAdd,
}: ShowcaseProps) {
  const [editItem, setEditItem] = useState<ShowcaseItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState<
    (ShowcaseItem & { membersInput?: string }) | null
  >(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState<
    ShowcaseItem & { membersInput?: string }
  >({
    id: Date.now(),
    image: "",
    competitionName: "",
    teamName: "",
    description: "",
    category: "",
    members: [],
    membersInput: "",
    message: "",
  });

  const [detailItem, setDetailItem] = useState<ShowcaseItem | null>(null);

  const handleEditClick = (item: ShowcaseItem) => {
    setEditItem(item);
    setForm({
      ...item,
      membersInput: item.members?.join(", ") || "",
    });
  };

  const handleSave = () => {
    if (form) {
      const updatedForm: ShowcaseItem = {
        ...form,
        members: form.membersInput
          ? form.membersInput
              .split(",")
              .map((m) => m.trim())
              .filter((m) => m)
          : [],
      };
      delete (updatedForm as any).membersInput;

      onEdit?.(updatedForm);
      setEditItem(null);
    }
  };

  const handleAdd = () => {
    if (!newItem.image || !newItem.competitionName) {
      alert("Foto dan nama lomba wajib diisi!");
      return;
    }
    const formattedItem: ShowcaseItem = {
      ...newItem,
      members: newItem.membersInput
        ? newItem.membersInput
            .split(",")
            .map((m) => m.trim())
            .filter((m) => m)
        : [],
    };
    delete (formattedItem as any).membersInput;

    onAdd?.(formattedItem);
    setIsAddModalOpen(false);
    setNewItem({
      id: Date.now(),
      image: "",
      competitionName: "",
      teamName: "",
      description: "",
      category: "",
      members: [],
      membersInput: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 relative">
      {/* Header + Tombol Tambah */}
      <div className="relative flex items-center justify-center mb-8">
        <h2
          className="text-xl md:text-2xl font-bold text-center"
          style={{ color: "var(--color-second)" }}
        >
          SHOWCASE
        </h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="absolute right-0 px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Tambah Showcase</span>
          <span className="sm:hidden">+</span>
        </button>
      </div>

      {/* Swiper Showcase */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".showcase-swiper-next",
          prevEl: ".showcase-swiper-prev",
        }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setDetailItem(item)}
            >
              {/* Tombol Edit/Delete */}
              <div
                className="absolute top-2 right-2 flex space-x-2 z-10"
                onClick={(e) => e.stopPropagation()} // supaya tidak buka detail saat klik edit/delete
              >
                <button
                  onClick={() => handleEditClick(item)}
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => setDeleteId(item.id)}
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Foto */}
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt={item.competitionName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Nama lomba */}
              <div className="p-4 text-center font-semibold">
                {item.competitionName}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigasi Swiper */}
      <button className="showcase-swiper-prev hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronLeft size={22} />
      </button>
      <button className="showcase-swiper-next hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronRight size={22} />
      </button>

      {/* Modal Tambah */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg relative shadow-xl p-6">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">Tambah Showcase</h3>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-sm font-medium mb-1">Foto</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setNewItem({ ...newItem, image: url });
                    }
                  }}
                  className="w-full border rounded-lg p-2"
                />
                {newItem.image && (
                  <Image
                    src={newItem.image}
                    alt="Preview"
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover rounded-lg border mt-2"
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Lomba
                </label>
                <input
                  type="text"
                  value={newItem.competitionName}
                  onChange={(e) =>
                    setNewItem({ ...newItem, competitionName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Tim
                </label>
                <input
                  type="text"
                  value={newItem.teamName || ""}
                  onChange={(e) =>
                    setNewItem({ ...newItem, teamName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Kategori
                </label>
                <input
                  type="text"
                  value={newItem.category || ""}
                  onChange={(e) =>
                    setNewItem({ ...newItem, category: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deskripsi
                </label>
                <textarea
                  value={newItem.description || ""}
                  onChange={(e) =>
                    setNewItem({ ...newItem, description: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Anggota Tim
                </label>
                <textarea
                  value={newItem.membersInput || ""}
                  onChange={(e) =>
                    setNewItem({ ...newItem, membersInput: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-16"
                  placeholder="Pisahkan dengan koma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pesan / Kesan
                </label>
                <textarea
                  value={newItem.message || ""}
                  onChange={(e) =>
                    setNewItem({ ...newItem, message: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-16"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded-lg bg-[var(--color-second)] text-white"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail */}
      {detailItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl relative shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tombol Close */}
            <button
              onClick={() => setDetailItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            {/* Kiri: Foto + Judul + Deskripsi */}
            <div className="flex flex-col items-center text-center">
              {/* Foto */}
              <div className="bg-gray-300 flex items-center justify-center rounded-md w-full h-64 mb-6 overflow-hidden">
                <Image
                  src={detailItem.image}
                  alt={detailItem.competitionName}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Judul */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "var(--color-second)" }}
              >
                {detailItem.category} - {detailItem.competitionName}{" "}
                <span className="font-normal">
                  ({detailItem.year || new Date().getFullYear()})
                </span>
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-gray-700 italic max-w-lg">
                {detailItem.description}
              </p>
            </div>

            {/* Kanan: Tech Point */}
            <div className="flex flex-col justify-start text-left">
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--color-second)" }}
              >
                Tech Point
              </h4>
              <p className="italic text-gray-800 mb-4">{detailItem.category}</p>

              {/* Anggota */}
              <p className="text-xs text-gray-600 mb-4">
                {detailItem.members?.join("   ") || "-"}
              </p>

              {/* Pesan */}
              <p className="text-sm text-gray-700">
                {detailItem.message || "-"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Popup Edit */}
      {editItem && form && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg relative shadow-xl p-6">
            <button
              onClick={() => setEditItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-4">Edit Showcase</h3>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              {/* Foto */}
              <div>
                <Image
                  src={form.image}
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover rounded-lg border"
                />
                <label className="block text-sm font-medium mt-2">
                  Ganti Foto
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setForm({ ...form, image: url });
                    }
                  }}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              {/* Input lainnya */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Lomba
                </label>
                <input
                  type="text"
                  value={form.competitionName}
                  onChange={(e) =>
                    setForm({ ...form, competitionName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Tim
                </label>
                <input
                  type="text"
                  value={form.teamName || ""}
                  onChange={(e) =>
                    setForm({ ...form, teamName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Kategori
                </label>
                <input
                  type="text"
                  value={form.category || ""}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deskripsi
                </label>
                <textarea
                  value={form.description || ""}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Anggota Tim
                </label>
                <textarea
                  value={form.membersInput || ""}
                  onChange={(e) =>
                    setForm({ ...form, membersInput: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-16"
                  placeholder="Pisahkan dengan koma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pesan / Kesan
                </label>
                <textarea
                  value={form.message || ""}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 resize-y h-16"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setEditItem(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-[var(--color-second)] text-white"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Hapus */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-xl">
            <h3 className="text-lg font-bold mb-4">Hapus Showcase?</h3>
            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus showcase ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => setDeleteId(null)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => {
                  onDelete?.(deleteId);
                  setDeleteId(null);
                }}
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
    </div>
  );
}
