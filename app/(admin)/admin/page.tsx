"use client";

import { useState, useCallback, useRef } from "react";
import EventCard, { Event } from "@/components/adminComponents/eventCard";
import GalleryCard, {
  GalleryItem,
} from "@/components/adminComponents/galleryCard";
import ShowcaseCard, {
  ShowcaseItem,
} from "@/components/adminComponents/showcaseCard";
import ProgramCard, { ProgramItem } from "@/components/adminComponents/program";

export default function MediaBlog() {
  const [events, setEvents] = useState<Event[]>([
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
  ]);

  // State untuk programs
  const [programs, setPrograms] = useState<ProgramItem[]>([
    {
      id: 1,
      title: "Kamar Belajar",
      division: "Web Development",
      description: "Ini adalah program yang dibuat untuk semua anggota UVICS",
    },
    {
      id: 2,
      title: "Workshop Mobile App",
      division: "Mobile Development",
      description:
        "Program pelatihan pengembangan aplikasi mobile untuk anggota",
    },
    {
      id: 3,
      title: "Data Science Bootcamp",
      division: "Data Science",
      description:
        "Program intensif untuk mempelajari analisis data dan machine learning",
    },
    {
      id: 4,
      title: "UI/UX Design Course",
      division: "Design",
      description:
        "Program pembelajaran desain antarmuka dan pengalaman pengguna",
    },
    {
      id: 5,
      title: "Cyber Security Training",
      division: "Security",
      description:
        "Program pelatihan keamanan siber untuk melindungi sistem dan data",
    },
    {
      id: 6,
      title: "Cloud Computing Workshop",
      division: "Infrastructure",
      description:
        "Program pembelajaran teknologi cloud computing dan deployment",
    },
    {
      id: 7,
      title: "AI & Machine Learning",
      division: "Artificial Intelligence",
      description:
        "Program eksplorasi kecerdasan buatan dan pembelajaran mesin",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    id: 0,
    title: "",
    image: "",
    description: "",
    hashtag: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Event handlers
  const handleAddEvent = () => {
    setIsModalOpen(true);
    setSelectedFile(null);
    setPreviewImage("");
    setNewEvent({ id: 0, title: "", image: "", description: "", hashtag: "" });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setPreviewImage(result);
          setNewEvent({ ...newEvent, image: result });
        };
        reader.readAsDataURL(file);
      } else {
        alert("Silakan pilih file gambar (JPG, PNG, GIF, dll.)");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    }
  };

  const handleSaveEvent = () => {
    // Validasi semua field required
    if (!newEvent.title.trim()) {
      alert("Judul event harus diisi!");
      return;
    }

    if (!selectedFile || !previewImage) {
      alert("Gambar event harus dipilih!");
      return;
    }

    if (!newEvent.description.trim()) {
      alert("Deskripsi event harus diisi!");
      return;
    }

    if (!newEvent.hashtag.trim()) {
      alert("Hashtag event harus diisi!");
      return;
    }

    const eventToAdd = { ...newEvent, id: Date.now() };
    setEvents([...events, eventToAdd]);

    // Reset form
    setNewEvent({ id: 0, title: "", image: "", description: "", hashtag: "" });
    setSelectedFile(null);
    setPreviewImage("");
    setIsModalOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEditEvent = useCallback((event: Event) => {
    setEvents((prev) => prev.map((e) => (e.id === event.id ? event : e)));
  }, []);

  const handleDeleteEvent = useCallback((id: number) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const handleEditGallery = useCallback((item: GalleryItem) => {
    // TODO: Implement edit
  }, []);

  const handleDeleteGallery = useCallback((id: number) => {
    // TODO: Implement delete
  }, []);

  const handleEditShowcase = useCallback((item: ShowcaseItem) => {
    alert(`Edit showcase: ${item.competitionName}`);
  }, []);

  const handleDeleteShowcase = useCallback((id: number) => {
    alert(`Delete showcase dengan id: ${id}`);
  }, []);

  // Program handlers
  const handleEditProgram = useCallback((program: ProgramItem) => {
    setPrograms((prev) => prev.map((p) => (p.id === program.id ? program : p)));
  }, []);

  const handleDeleteProgram = useCallback((id: number) => {
    setPrograms((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const galleries: GalleryItem[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: `https://picsum.photos/seed/gallery-${index}/400/300`,
  }));

  const showcases: ShowcaseItem[] = [
    {
      id: 1,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
    {
      id: 6,
      image: "https://picsum.photos/id/200/400/300",
      competitionName: "Kompetisi Web Development",
      teamName: "Tim Alpha",
      description: "Membangun aplikasi berbasis Next.js",
      category: "Teknologi",
      members: ["Andi", "Budi", "Citra"],
      message: "Pengalaman luar biasa mengikuti lomba ini!",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 space-y-16">
      {/* Events Section */}
      <section className="w-full max-w-6xl mx-auto">
        <div className="relative flex items-center justify-center mb-8">
          {/* Title */}
          <h2
            className="text-xl md:text-2xl font-bold text-center"
            style={{ color: "var(--color-second)" }}
          >
            EVENTS
          </h2>

          {/* Button */}
          <button
            onClick={handleAddEvent}
            className="absolute right-0 px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
          >
            <span className="hidden sm:inline">+ Tambah Event</span>
            <span className="sm:hidden">+</span>
          </button>
        </div>

        <EventCard
          events={events}
          onEdit={handleEditEvent}
          onDelete={handleDeleteEvent}
        />
      </section>

      {/* Gallery Section */}
      <section className="w-full">
        <GalleryCard
          items={galleries}
          onEdit={handleEditGallery}
          onDelete={handleDeleteGallery}
        />
      </section>

      {/* Showcase Section */}
      <section className="w-full max-w-6xl mx-auto">
        <ShowcaseCard
          items={showcases}
          onEdit={handleEditShowcase}
          onDelete={handleDeleteShowcase}
        />
      </section>

      {/* Program Section */}
      <section className="w-full max-w-6xl mx-auto">
        <ProgramCard
          programs={programs}
          onEdit={handleEditProgram}
          onDelete={handleDeleteProgram}
        />
      </section>

      {/* Modal Tambah Event */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm  flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Tambah Event Baru</h3>

            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Judul Event <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan judul event"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gambar Event <span className="text-red-500">*</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="w-full border rounded-lg px-3 py-2 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Pilih file gambar (JPG, PNG, GIF, dll.)
                </p>
              </div>

              {/* Image Preview */}
              {previewImage && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Preview Gambar:</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Event <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Masukkan deskripsi event"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  rows={4}
                  className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Hashtag */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hashtag <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: #UVICS2024 #EventSeru"
                  value={newEvent.hashtag}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, hashtag: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewEvent({
                    id: 0,
                    title: "",
                    image: "",
                    description: "",
                    hashtag: "",
                  });
                  setSelectedFile(null);
                  setPreviewImage("");
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEvent}
                className="px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
              >
                Simpan Event
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
