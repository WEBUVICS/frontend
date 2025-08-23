"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EventCard from "@/components/eventCard";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1027/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1039/600/400",
  "https://picsum.photos/id/1041/600/400",
  "https://picsum.photos/id/1042/600/400",
  "https://picsum.photos/id/1043/600/400",
  "https://picsum.photos/id/1044/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1047/600/400",
  "https://picsum.photos/id/1048/600/400",
  "https://picsum.photos/id/1049/600/400",
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
      <section className="min-h-screen bg-[#e6f0ff] flex flex-col items-center py-16 w-full overflow-hidden">
        <div className="mb-12">
          <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md">
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
      <section className="min-h-screen bg-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-[var(--color-primary)] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md">
              EVENT
            </span>
          </div>

          {/* Event Cards */}
          <div className="space-y-8">
            {/* Horizontal Layout */}
            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="CIVICS GELAR PERTEMUAN PERDANA 2024"
              description="CIVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. CIVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#CIVICS2024 #BERSAMAMERAIHPRESTASI"
            />

            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="CIVICS GELAR PERTEMUAN PERDANA 2024"
              description="CIVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. CIVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#CIVICS2024 #BERSAMAMERAIHPRESTASI"
            />

            <EventCard
              image="https://picsum.photos/id/1015/800/600"
              title="CIVICS GELAR PERTEMUAN PERDANA 2024"
              description="CIVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. CIVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI."
              hashtag="#CIVICS2024 #BERSAMAMERAIHPRESTASI"
            />
          </div>
        </div>
      </section>
    </>
  );
}
