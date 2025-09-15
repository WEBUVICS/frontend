"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pencil, Trash2, ChevronLeft, ChevronRight, X } from "lucide-react";

type Benefit = {
  id: number;
  title: string;
  description: string;
};

export default function BenefitSection() {
  const [benefits, setBenefits] = useState<Benefit[]>([
    {
      id: 1,
      title: "Mendapatkan Sertifikat",
      description:
        "Semua peserta UVICS akan membangun personal branding masing-masing. Sertifikat diberikan sesuai pencapaian anggota.",
    },
    {
      id: 2,
      title: "Networking",
      description:
        "Peserta bisa berjejaring dengan banyak orang dari berbagai divisi untuk memperluas koneksi.",
    },
    {
      id: 3,
      title: "Networking",
      description:
        "Peserta bisa berjejaring dengan banyak orang dari berbagai divisi untuk memperluas koneksi.",
    },
    {
      id: 4,
      title: "Networking",
      description:
        "Peserta bisa berjejaring dengan banyak orang dari berbagai divisi untuk memperluas koneksi.",
    },
  ]);

  const [editItem, setEditItem] = useState<Benefit | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newBenefit, setNewBenefit] = useState<Benefit>({
    id: 0,
    title: "",
    description: "",
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // handle CRUD
  const handleDelete = (id: number) => {
    setBenefits((prev) => prev.filter((b) => b.id !== id));
    setDeleteId(null);
  };

  const handleSave = (updated: Benefit) => {
    setBenefits((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    setEditItem(null);
  };

  const handleAddBenefit = () => {
    if (!newBenefit.title.trim() || !newBenefit.description.trim()) {
      alert("Judul dan deskripsi harus diisi!");
      return;
    }
    const benefitToAdd = { ...newBenefit, id: Date.now() };
    setBenefits((prev) => [...prev, benefitToAdd]);
    setNewBenefit({ id: 0, title: "", description: "" });
    setIsAddModalOpen(false);
  };

  return (
    <section className="py-11 relative">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-8">
        <h2
          className="text-xl md:text-2xl font-bold text-center"
          style={{ color: "var(--color-second)" }}
        >
          BENEFIT
        </h2>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="absolute right-0 px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
        >
          <span className="hidden sm:inline">+ Tambah Benefit</span>
          <span className="sm:hidden">+</span>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={setSwiperInstance}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="pb-12"
      >
        {benefits.map((benefit) => (
          <SwiperSlide key={benefit.id}>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 relative mx-auto max-w-4xl min-h-[200px] flex flex-col justify-center">
              {/* Action Buttons */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <button
                  onClick={() => setEditItem(benefit)}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-100 text-[var(--color-second)]"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => setDeleteId(benefit.id)}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-100 text-[var(--color-second)]"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="text-center px-8">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--color-second)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
                  {benefit.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-second)] text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        <ChevronRight size={22} />
      </button>

      {/* Modal Add */}
      {isAddModalOpen && (
        <Modal
          onClose={() => setIsAddModalOpen(false)}
          title="Tambah Benefit Baru"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddBenefit();
            }}
            className="space-y-4"
          >
            <InputField
              label="Judul"
              value={newBenefit.title}
              onChange={(e) =>
                setNewBenefit({ ...newBenefit, title: e.target.value })
              }
            />
            <TextAreaField
              label="Deskripsi"
              value={newBenefit.description}
              onChange={(e) =>
                setNewBenefit({ ...newBenefit, description: e.target.value })
              }
            />
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
              >
                Tambah Benefit
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal Edit */}
      {editItem && (
        <Modal onClose={() => setEditItem(null)} title="Edit Benefit">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave(editItem);
            }}
            className="space-y-4"
          >
            <InputField
              label="Judul"
              value={editItem.title}
              onChange={(e) =>
                setEditItem({ ...editItem, title: e.target.value })
              }
            />
            <TextAreaField
              label="Deskripsi"
              value={editItem.description}
              onChange={(e) =>
                setEditItem({ ...editItem, description: e.target.value })
              }
            />
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setEditItem(null)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-second)] text-white rounded-lg hover:scale-105 transition-transform"
              >
                Simpan
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal Delete */}
      {deleteId && (
        <Modal onClose={() => setDeleteId(null)} title="Hapus Benefit?">
          <p className="text-gray-600 mb-6">
            Apakah Anda yakin ingin menghapus benefit ini?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setDeleteId(null)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={() => handleDelete(deleteId)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Hapus
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}

/* ---------------- Helper Components ---------------- */

function Modal({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
