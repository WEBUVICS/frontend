"use client";
import { useState } from "react";
import Image from "next/image";
import { Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type Event = {
  id: number;
  title: string;
  image: string;
  description: string;
  hashtag: string;
};

type EventCardProps = {
  events: Event[];
  onEdit?: (event: Event) => void;
  onDelete?: (id: number) => void;
};

export default function EventCard({
  events,
  onEdit,
  onDelete,
}: EventCardProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    hashtag: "",
    image: ""
  });

  const handleEditClick = (event: Event) => {
    setEditingEvent(event);
    setForm({
      title: event.title,
      description: event.description,
      hashtag: event.hashtag,
      image: ""
    });
  };

  const handleSave = () => {
    if (editingEvent) {
      const updated = { ...editingEvent, ...form };
      onEdit?.(updated);
      setEditingEvent(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div
                className="cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="p-4 flex justify-between items-start gap-2 flex-1">
                <h3 className="text-xs md:text-sm lg:text-base font-semibold leading-snug line-clamp-2 flex-1">
                  {event.title}
                </h3>

                <div className="flex space-x-2 shrink-0">
                  <button
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => handleEditClick(event)}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => setDeletingId(event.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigasi */}
      <button className="swiper-button-prev-custom hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronLeft size={22} />
      </button>
      <button className="swiper-button-next-custom hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronRight size={22} />
      </button>

      {/* Detail */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={800}
                height={500}
                className="w-full h-56 md:h-72 lg:h-80 object-cover"
              />
            </div>
            <h2 className="text-base md:text-xl lg:text-2xl font-bold mt-6 pr-8 capitalize">
              {selectedEvent.title}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base normal-case">
              {selectedEvent.description}
            </p>
            <p className="mt-4 text-blue-600 font-semibold text-[10px] md:text-xs lg:text-sm uppercase tracking-wide">
              {selectedEvent.hashtag}
            </p>
          </div>
        </div>
      )}

      {editingEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl relative">
            <button
              onClick={() => setEditingEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Preview Image */}
              <div className="flex-1">
                <Image
                  src={form.image || editingEvent.image}
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-64 object-cover rounded-lg border"
                />
                <label className="block text-sm font-medium mt-3">
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

              {/* Title & Hashtag */}
              <div className="flex-1 space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full border rounded-lg p-2"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Hashtag
                  </label>
                  <input
                    type="text"
                    value={form.hashtag}
                    onChange={(e) =>
                      setForm({ ...form, hashtag: e.target.value })
                    }
                    className="w-full border rounded-lg p-2"
                    placeholder="#hashtag"
                  />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Deskripsi
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border rounded-lg p-3 h-40 md:h-56 resize-y"
                placeholder="Deskripsi event..."
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setEditingEvent(null)}
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

      {/* DELETE CONFIRM MODAL */}
      {deletingId !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
            <h2 className="text-lg font-bold mb-4">Hapus Event?</h2>
            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus event ini?
            </p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  onDelete?.(deletingId);
                  setDeletingId(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white"
              >
                Ya, Hapus
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
