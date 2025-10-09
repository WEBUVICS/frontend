"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EventCard from "@/components/userComponents/eventCard";
import AnnouncementCard from "@/components/userComponents/announcementCard";

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
  "/gallery/foto-15.webp",
  "/gallery/foto-16.webp",
  "/gallery/foto-17.webp",
 
];

// bagi foto jadi beberapa baris
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

        {/* baris */}
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
                  {/* isi row */}
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
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
              EVENT
            </span>
          </div>

          {/* Event Cards */}
          <div className="space-y-8">
            {/* Horizontal Layout */}
            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="UVICS GELAR PERTEMUAN PERDANA 2024"
              description="UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#UVICS2024 #BERSAMAMERAIHPRESTASI"
            />

            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="UVICS GELAR PERTEMUAN PERDANA 2024"
              description="UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#UVICS2024 #BERSAMAMERAIHPRESTASI"
            />

            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="UVICS GELAR PERTEMUAN PERDANA 2024"
              description="UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#UVICS2024 #BERSAMAMERAIHPRESTASI"
            />
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="min-h-screen bg-white py-16 w-full font-sans">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md font-head">
              ANNOUNCEMENT
            </span>
          </div>

          {/* Announcement Cards */}
          <div className="space-y-12">
            <AnnouncementCard
              mainTitle="UVICS Guest Speaker Session"
              title="Unlocking Creativity: Innovative Solutions for the Digital Era"
              description="UVICS dengan bangga mengundang Anda untuk menghadiri sesi bersama pembicara tamu kami yang luar biasa. [Nama Pembicara], seorang ahli di bidang keahlian pembicara, seperti UI/UX, Web Development, atau Bisnis Digital]. Dalam sesi ini, kita akan membahas strategi dan wawasan terkini untuk menciptakan solusi inovatif di era digital."
              date="Sabtu, 14 Desember 2024"
              time="10:00 - 12:00 WITA"
              location="Aula Universitas Klabat atau via Zoom (link akan diberikan)"
              image="https://picsum.photos/id/1043/400/400"
            />

            <AnnouncementCard
              mainTitle="UVICS Guest Speaker Session"
              title="Unlocking Creativity: Innovative Solutions for the Digital Era"
              description="UVICS dengan bangga mengundang Anda untuk menghadiri sesi bersama pembicara tamu kami yang luar biasa. [Nama Pembicara], seorang ahli di bidang keahlian pembicara, seperti UI/UX, Web Development, atau Bisnis Digital]. Dalam sesi ini, kita akan membahas strategi dan wawasan terkini untuk menciptakan solusi inovatif di era digital."
              date="Sabtu, 14 Desember 2024"
              time="10:00 - 12:00 WITA"
              location="Aula Universitas Klabat atau via Zoom (link akan diberikan)"
              image="https://picsum.photos/id/1043/400/400"
            />

            <AnnouncementCard
              mainTitle="UVICS Guest Speaker Session"
              title="Unlocking Creativity: Innovative Solutions for the Digital Era"
              description="UVICS dengan bangga mengundang Anda untuk menghadiri sesi bersama pembicara tamu kami yang luar biasa. [Nama Pembicara], seorang ahli di bidang keahlian pembicara, seperti UI/UX, Web Development, atau Bisnis Digital]. Dalam sesi ini, kita akan membahas strategi dan wawasan terkini untuk menciptakan solusi inovatif di era digital."
              date="Sabtu, 14 Desember 2024"
              time="10:00 - 12:00 WITA"
              location="Aula Universitas Klabat atau via Zoom (link akan diberikan)"
              image="https://picsum.photos/id/1043/400/400"
            />

            <AnnouncementCard
              mainTitle="UVICS Guest Speaker Session"
              title="Unlocking Creativity: Innovative Solutions for the Digital Era"
              description="UVICS dengan bangga mengundang Anda untuk menghadiri sesi bersama pembicara tamu kami yang luar biasa. [Nama Pembicara], seorang ahli di bidang keahlian pembicara, seperti UI/UX, Web Development, atau Bisnis Digital]. Dalam sesi ini, kita akan membahas strategi dan wawasan terkini untuk menciptakan solusi inovatif di era digital."
              date="Sabtu, 14 Desember 2024"
              time="10:00 - 12:00 WITA"
              location="Aula Universitas Klabat atau via Zoom (link akan diberikan)"
              image="https://picsum.photos/id/1043/400/400"
            />

            <AnnouncementCard
              mainTitle="UVICS Guest Speaker Session"
              title="Unlocking Creativity: Innovative Solutions for the Digital Era"
              description="UVICS dengan bangga mengundang Anda untuk menghadiri sesi bersama pembicara tamu kami yang luar biasa. [Nama Pembicara], seorang ahli di bidang keahlian pembicara, seperti UI/UX, Web Development, atau Bisnis Digital]. Dalam sesi ini, kita akan membahas strategi dan wawasan terkini untuk menciptakan solusi inovatif di era digital."
              date="Sabtu, 14 Desember 2024"
              time="10:00 - 12:00 WITA"
              location="Aula Universitas Klabat atau via Zoom (link akan diberikan)"
              image="https://picsum.photos/id/1043/400/400"
            />
          </div>
        </div>
      </section>
    </>
  );
}
