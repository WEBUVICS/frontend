"use client";

import { useCallback, useState } from "react";
import EventCard, { Event } from "@/components/adminComponents/eventCard";
import GalleryCard, {
  GalleryItem,
} from "@/components/adminComponents/galleryCard";

const events: Event[] = [
  {
    id: 1,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1005/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
  {
    id: 2,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1011/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
  {
    id: 3,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1025/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
  {
    id: 4,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1031/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
  {
    id: 5,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1037/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
  {
    id: 6,
    title: "UVICS GELAR PERTEMUAN PERDANA 2024",
    image: "https://picsum.photos/id/1005/400/300",
    description:
      "UVICS SUKSES MENGGELAR PERTEMUAN PERDANA PADA JUMAT, 11 OKTOBER 2024 DI SETU BABAKAN JAKARTA SELATAN. KEGIATAN ACARA INI DIHADIRI OLEH LEBIH DARI 30 ANGGOTA YANG ANTUSIAS UNTUK MENYAMBUT AGENDA DAN KOMPETISI TAHUN DEPAN. ACARA INI BERLANGSUNG DENGAN SANGAT MERIAH DENGAN POIN PENTING YANG DIBAHAS MELIPUTI PERKENALAN ORGANISASI, KEGIATAN KOMPETITIF, DAN UPACARA TAHUN DEPAN. UVICS SANGAT SENANG DAPAT BERTEMU DENGAN PARA ANGGOTA BARU YANG SIAP MELANGKAH MENUJU PRESTASI LEBIH BESAR TAHUN INI.",
    hashtag: "#UVICS2024 #BERSAMAMERAIHPRESTASI",
  },
];

const galleries: GalleryItem[] = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/seed/gallery-${index}/400/300`,
}));

export default function MediaBlog() {
  const [eventItems, setEventItems] = useState(events);
  const [galleryItems, setGalleryItems] = useState(galleries);

  const handleEditEvent = useCallback((updatedEvent: Event) => {
    setEventItems((current) =>
      current.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  }, []);

  const handleDeleteEvent = useCallback((id: number) => {
    setEventItems((current) => current.filter((event) => event.id !== id));
  }, []);

  const handleEditGallery = useCallback((updatedItem: GalleryItem) => {
    setGalleryItems((current) =>
      current.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }, []);

  const handleDeleteGallery = useCallback((id: number) => {
    setGalleryItems((current) => current.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 space-y-16">
      {/* Events Section */}
      <section className="w-full">
        <h2
          className="text-xl md:text-2xl font-bold text-center mb-8"
          style={{ color: "var(--color-second)" }}
        >
          EVENTS
        </h2>
        <EventCard
          events={eventItems}
          onEdit={handleEditEvent}
          onDelete={handleDeleteEvent}
        />
      </section>

      {/* Gallery Section */}
      <section className="w-full">
        <GalleryCard
          items={galleryItems}
          onEdit={handleEditGallery}
          onDelete={handleDeleteGallery}
        />
      </section>
    </div>
  );
}
