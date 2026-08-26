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
      const updated = {
        ...editingEvent,
        ...form,
        image: form.image || editingEvent.image,
      };
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
              <button
                type="button"
                aria-label={`Lihat detail ${event.title}`}
                className="group w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-second)]"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    unoptimized={event.image.startsWith("blob:")}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </button>

              <div className="p-4 flex justify-between items-start gap-2 flex-1">
                <h3 className="text-xs md:text-sm lg:text-base font-semibold leading-snug line-clamp-2 flex-1">
                  {event.title}
                </h3>

                <div className="flex space-x-2 shrink-0">
                  <button
                    type="button"
                    aria-label={`Edit ${event.title}`}
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => handleEditClick(event)}
                  >
                    <Edit aria-hidden="true" size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Hapus ${event.title}`}
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => setDeletingId(event.id)}
                  >
                    <Trash2 aria-hidden="true" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigasi */}
      <button type="button" aria-label="Event sebelumnya" className="swiper-button-prev-custom hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronLeft aria-hidden="true" size={22} />
      </button>
      <button type="button" aria-label="Event berikutnya" className="swiper-button-next-custom hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronRight aria-hidden="true" size={22} />
      </button>

      {/* Detail */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="event-detail-title" className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative max-h-[90vh] overscroll-contain overflow-y-auto">
            <button
              type="button"
              aria-label="Tutup detail event"
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
                unoptimized={selectedEvent.image.startsWith("blob:")}
                className="w-full h-56 md:h-72 lg:h-80 object-cover"
              />
            </div>
            <h2 id="event-detail-title" className="text-base md:text-xl lg:text-2xl font-bold mt-6 pr-8 capitalize">
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
          <div role="dialog" aria-modal="true" aria-labelledby="event-edit-title" className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl relative max-h-[90vh] overscroll-contain overflow-y-auto">
            <button
              type="button"
              aria-label="Tutup form edit event"
              onClick={() => setEditingEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            <h2 id="event-edit-title" className="mb-4 text-xl font-bold">
              Edit Event
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Preview Image */}
              <div className="flex-1">
                <Image
                  src={form.image || editingEvent.image}
                  alt="Preview"
                  width={600}
                  height={400}
                  unoptimized={(form.image || editingEvent.image).startsWith("blob:")}
                  className="w-full h-48 md:h-64 object-cover rounded-lg border"
                />
                <label htmlFor="event-image" className="block text-sm font-medium mt-3">
                  Ganti Foto
                </label>
                <input
                  id="event-image"
                  name="image"
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
                  <label htmlFor="event-title" className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    id="event-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full border rounded-lg p-2"
                    placeholder="Judul event…"
                  />
                </div>
                <div>
                  <label htmlFor="event-hashtag" className="block text-sm font-medium mb-1">
                    Hashtag
                  </label>
                  <input
                    id="event-hashtag"
                    name="hashtag"
                    type="text"
                    autoComplete="off"
                    value={form.hashtag}
                    onChange={(e) =>
                      setForm({ ...form, hashtag: e.target.value })
                    }
                    className="w-full border rounded-lg p-2"
                    placeholder="#hashtag…"
                  />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="event-description" className="block text-sm font-medium mb-1">
                Deskripsi
              </label>
              <textarea
                id="event-description"
                name="description"
                autoComplete="off"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border rounded-lg p-3 h-40 md:h-56 resize-y"
                placeholder="Deskripsi event…"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={() => setEditingEvent(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>
              <button
                type="button"
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
          <div role="alertdialog" aria-modal="true" aria-labelledby="event-delete-title" className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
            <h2 id="event-delete-title" className="text-lg font-bold mb-4">Hapus Event?</h2>
            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus event ini?
            </p>
            <div className="flex justify-center space-x-3">
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>
              <button
                type="button"
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
