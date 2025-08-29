"use client";
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
  return (
    <div className="w-full max-w-6xl mx-auto py-12 relative">
      <h2 className="text-center text-xl font-bold text-[var(--color-second)] mb-8">
        GALERY
      </h2>

      {/* Custom Navigation Buttons */}
      <button className="gallery-button-prev absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronLeft size={24} />
      </button>

      <button className="gallery-button-next absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform shadow-lg">
        <ChevronRight size={24} />
      </button>

      <Swiper
        modules={[Grid, Pagination, Navigation]}
        slidesPerView={3} // 3 kolom
        grid={{ rows: 2, fill: "row" }} // 2 baris
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".gallery-button-prev",
          nextEl: ".gallery-button-next",
        }}
        className="pb-12"
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
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Tombol Edit & Delete */}
              <div className="flex justify-end space-x-4 p-3 bg-white">
                <button
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => onEdit?.(item)}
                >
                  <Edit size={18} />
                </button>
                <button
                  className="p-2 rounded-full bg-[var(--color-second)] text-white hover:scale-110 transition-transform"
                  onClick={() => onDelete?.(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
