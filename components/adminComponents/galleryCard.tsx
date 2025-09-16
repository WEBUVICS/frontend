"use client";
import { useState } from "react";
import Image from "next/image";
import { Edit, Trash2, ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type GalleryItem = {
  id: number;
  image: string;
};

type GalleryProps = {
  items: GalleryItem[];
  onEdit?: (item: GalleryItem) => void;
  onDelete?: (id: number) => void;
  onAdd?: (image: string) => void;
};

export default function GalleryCard({ items, onEdit, onDelete, onAdd }: GalleryProps) {
  const [editItem, setEditItem] = useState<GalleryItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [newImage, setNewImage] = useState<string>("");
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [addPreviewImage, setAddPreviewImage] = useState<string>("");

  const handleAddPhoto = () => {
    setIsAddModalOpen(true);
    setAddPreviewImage("");
  };

  const handleAddFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setAddPreviewImage(result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Silakan pilih file gambar (JPG, PNG, GIF, dll.)");
      }
    }
  };

  const handleSaveNewPhoto = () => {
    if (!addPreviewImage) {
      alert("Silakan pilih foto terlebih dahulu!");
      return;
    }

    onAdd?.(addPreviewImage);
    setIsAddModalOpen(false);
    setAddPreviewImage("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 relative">
      <div className="relative flex items-center justify-center mb-8">
        <h2
          className="text-xl md:text-2xl font-bold text-center"
          style={{ color: "var(--color-second)" }}
        >
          GALLERY
        </h2>

        {/* Button Tambah Foto */}
        <button
          onClick={handleAddPhoto}
          className="absolute right-0 px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Tambah Foto</span>
          <span className="sm:hidden">+</span>
        </button>
      </div>

      {/* Tombol navigasi */}
      <button className="gallery-button-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronLeft size={24} />
      </button>

      <button className="gallery-button-next absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronRight size={24} />
      </button>

      {/* Swiper dengan breakpoints */}
      <Swiper
        modules={[Grid, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".gallery-button-prev",
          nextEl: ".gallery-button-next",
        }}
        className="pb-12"
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: { rows: 1, fill: "row" },
            spaceBetween: 12,
          },

          768: {
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 16,
          },

          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 24,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
              {/* Foto */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt="Gallery Item"
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>

              {/* Tombol Edit & Delete */}
              <div className="flex justify-end space-x-4 p-3 bg-white">
                <button
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => setEditItem(item)}
                >
                  <Edit size={18} />
                </button>
                <button
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => setDeleteId(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Tambah Foto */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => {
                setIsAddModalOpen(false);
                setAddPreviewImage("");
              }}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-4">Tambah Foto Baru</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Foto <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAddFileSelect}
                  className="w-full border rounded-lg px-3 py-2 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Pilih file gambar (JPG, PNG, GIF, dll.)
                </p>
              </div>

              {/* Preview Foto */}
              {addPreviewImage && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Preview Foto:</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
                    <Image
                      src={addPreviewImage}
                      alt="Preview"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setAddPreviewImage("");
                }}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSaveNewPhoto}
                className="px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
              >
                Tambah Foto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Edit */}
      {editItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setEditItem(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-4">Edit Foto</h3>

            {/* Preview Foto */}
            <div className="mb-4">
              <Image
                src={editItem.image}
                alt="Preview"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const previewUrl = URL.createObjectURL(file);
                  setNewImage(previewUrl);
                }
              }}
              className="w-full border rounded-lg p-2 mb-4"
            />

            {newImage && (
              <Image
                src={newImage}
                alt="Preview Baru"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <button
              className="w-full bg-[var(--color-second)] text-white py-2 rounded-lg hover:opacity-90"
              onClick={() => {
                onEdit?.({ ...editItem, image: newImage || editItem.image });
                setEditItem(null);
                setNewImage("");
              }}
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      )}

      {/* Popup Hapus */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <h3 className="text-lg font-bold mb-4">Hapus Foto?</h3>
            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus foto ini?
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