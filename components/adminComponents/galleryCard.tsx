"use client";
import { useState } from "react";
import Image from "next/image";
import { Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

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
};

export default function GalleryCard({ items, onEdit, onDelete }: GalleryProps) {
  const [editItem, setEditItem] = useState<GalleryItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [newImage, setNewImage] = useState<string>("");

  return (
    <div className="w-full max-w-6xl mx-auto py-12 relative">
      <h2
        className="text-xl md:text-2xl font-bold text-center mb-8"
        style={{ color: "var(--color-second)" }}
      >
        GALLERY
      </h2>

      {/* Tombol navigasi */}
      <button type="button" aria-label="Foto sebelumnya" className="gallery-button-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronLeft aria-hidden="true" size={24} />
      </button>

      <button type="button" aria-label="Foto berikutnya" className="gallery-button-next absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronRight aria-hidden="true" size={24} />
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
                  unoptimized={item.image.startsWith("blob:")}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>

              {/* Tombol Edit & Delete */}
              <div className="flex justify-end space-x-4 p-3 bg-white">
                <button
                  type="button"
                  aria-label={`Edit foto ${item.id}`}
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => setEditItem(item)}
                >
                  <Edit aria-hidden="true" size={18} />
                </button>
                <button
                  type="button"
                  aria-label={`Hapus foto ${item.id}`}
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => setDeleteId(item.id)}
                >
                  <Trash2 aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Edit */}
      {editItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="gallery-edit-title" className="bg-white rounded-xl p-6 w-full max-w-md relative max-h-[90vh] overscroll-contain overflow-y-auto">
            <button
              type="button"
              aria-label="Tutup form edit foto"
              onClick={() => setEditItem(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h3 id="gallery-edit-title" className="text-lg font-bold mb-4">Edit Foto</h3>

            {/* Preview Foto */}
            <div className="mb-4">
              <Image
                src={editItem.image}
                alt="Preview"
                width={400}
                height={300}
                unoptimized={editItem.image.startsWith("blob:")}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <label htmlFor="gallery-image" className="mb-1 block text-sm font-medium">
              Ganti Foto
            </label>
            <input
              id="gallery-image"
              name="image"
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
                unoptimized={newImage.startsWith("blob:")}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <button
              type="button"
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
          <div role="alertdialog" aria-modal="true" aria-labelledby="gallery-delete-title" className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <h3 id="gallery-delete-title" className="text-lg font-bold mb-4">Hapus Foto?</h3>
            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus foto ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => setDeleteId(null)}
              >
                Batal
              </button>
              <button
                type="button"
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
