"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarX, MegaphoneOff } from "lucide-react"; // ✅ icon untuk empty state
import EventCard from "@/components/userComponents/eventCard";
import AnnouncementCard from "@/components/userComponents/announcementCard";
import { DataAnnouncement } from "./dataAnnounce";
import { DataEvent, EventType } from "./dataEvent";

const images = [
  "/gallery/foto-1.webp",
  "/gallery/foto-2.webp",
  "/gallery/foto-3.webp",
  "/gallery/foto-4.webp",
  "/gallery/foto-5.webp",
  "/gallery/foto-7.webp",
  "/gallery/foto-8.webp",
  "/gallery/foto-9.webp",
  "/gallery/foto-10.webp",
  "/gallery/foto-11.webp",
  "/gallery/foto-12.webp",
  "/gallery/foto-13.webp",
  "/gallery/foto-14.webp",
  "/gallery/foto15.webp",
  "/gallery/foto-16.webp",
  "/gallery/foto-17.webp",
];

// Bagi foto menjadi beberapa baris
const rows = 4;
const rowImages = Array.from({ length: rows }, (_, rowIndex) =>
  images.filter((_, i) => i % rows === rowIndex)
);

export default function UserMedia() {
  return (
    <>
      {/* Gallery Section */}
      <section className="min-h-screen bg-[#e6f0ff] flex flex-col items-center py-16 w-full overflow-hidden font-sans">
        <div className="mb-12">
          <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
            GALLERY
          </span>
        </div>

        <div className="flex flex-col gap-10 w-full">
          {rowImages.map((row, rowIndex) => {
            const toLeft = rowIndex % 2 === 0;

            return (
              <div key={rowIndex} className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-28 px-14 py-1"
                  animate={{ x: toLeft ? ["0%", "-100%"] : ["-100%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                  }}
                >
                  {row.map((src, i) => (
                    <div
                      key={i}
                      className="relative rounded-[50px] shadow-md flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery ${rowIndex + 1}-${i + 1}`}
                        width={287}
                        height={171}
                        className="object-cover w-[287px] h-[171px] rounded-[50px]"
                      />
                    </div>
                  ))}

                  {/* duplikasi baris */}
                  {row.map((src, i) => (
                    <div
                      key={`dup-${i}`}
                      className="relative rounded-[50px] shadow-md flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery ${rowIndex + 1}-dup-${i + 1}`}
                        width={287}
                        height={171}
                        className="object-cover w-[287px] h-[171px] rounded-[50px]"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Event Section */}
      <section className="min-h-screen bg-white py-16 w-full font-sans">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
              EVENT
            </span>
          </div>

          {DataEvent.length > 0 && DataEvent ? (
            <div className="space-y-8">
              {DataEvent.map((event:EventType) => (
                <EventCard
                  key={event.id}
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  hashtag={event.hashtag}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl shadow-inner">
              <CalendarX className="w-20 h-20 text-gray-400 mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-gray-600">
                Belum ada event yang tersedia
              </h2>
              <p className="text-gray-500 mt-2">
                Nantikan event menarik dari kami selanjutnya 🎉
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Announcement Section */}
      <section className="min-h-screen bg-white py-16 w-full font-sans">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
              ANNOUNCEMENT
            </span>
          </div>

          {DataAnnouncement.length > 0 ? (
            <div className="space-y-12">
              {DataAnnouncement.map((announc) => (
                <AnnouncementCard
                  key={announc.id}
                  mainTitle={announc.mainTitle}
                  title={announc.title}
                  description={announc.description}
                  date={announc.date}
                  location={announc.location}
                  time={announc.time}
                  image={announc.image}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl shadow-inner">
              <MegaphoneOff className="w-20 h-20 text-gray-400 mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-gray-600">
                Belum ada pengumuman saat ini
              </h2>
              <p className="text-gray-500 mt-2">
                Cek kembali nanti untuk informasi terbaru 📢
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
