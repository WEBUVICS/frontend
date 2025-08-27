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
  onEdit?: (event: Event) => void; // disiapkan untuk handle edit
  onDelete?: (id: number) => void; // disiapkan untuk handle delete
};

export default function EventCard({
  events,
  onEdit,
  onDelete,
}: EventCardProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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

              {/* Content */}
              <div className="p-4 flex justify-between items-start gap-2 flex-1">
                <h3 className="text-xs md:text-sm lg:text-base font-semibold leading-snug line-clamp-2 flex-1">
                  {event.title}
                </h3>

                {/* buttons */}
                <div className="flex space-x-2 shrink-0">
                  <button
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => onEdit?.(event)} // panggil callback edit
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => onDelete?.(event.id)} // panggil callback delete
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev-custom hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronLeft size={22} />
      </button>
      <button className="swiper-button-next-custom hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">
        <ChevronRight size={22} />
      </button>

      {/* Modal Detail */}
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
