import Image from "next/image";
import { CalendarX, MegaphoneOff } from "lucide-react";
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

        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Dokumentasi kegiatan UVICS ${index + 1}`}
              width={287}
              height={171}
              className="h-44 w-full rounded-3xl object-cover shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Event Section */}
      <section className="w-full bg-white py-16 font-sans">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
              EVENT
            </span>
          </div>

          {DataEvent.length > 0 ? (
            <div className="space-y-8">
              {DataEvent.map((event: EventType) => (
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
            <div className="flex flex-col items-center justify-center rounded-3xl bg-gray-50 py-12 text-center shadow-inner">
              <CalendarX className="mb-4 h-16 w-16 text-gray-400" strokeWidth={1.5} />
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
      <section className="w-full bg-white py-16 font-sans">
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
            <div className="flex flex-col items-center justify-center rounded-3xl bg-gray-50 py-12 text-center shadow-inner">
              <MegaphoneOff className="mb-4 h-16 w-16 text-gray-400" strokeWidth={1.5} />
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
