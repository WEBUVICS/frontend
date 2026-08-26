// ========= UNTUK HALAMAN HOME UBAH DISINI ===========


"use client";

import { useState, useEffect } from "react";

type Announcement = {
  title: string;
  date: string;
  description: string;
};

const STORAGE_KEY = "announcements:v1";
const LEGACY_STORAGE_KEY = "announcements";

function isAnnouncement(value: unknown): value is Announcement {
  if (typeof value !== "object" || value === null) return false;

  const item = value as Record<string, unknown>;
  return (
    typeof item.title === "string" &&
    typeof item.date === "string" &&
    typeof item.description === "string"
  );
}

export default function AnnouncementPage() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [storageError, setStorageError] = useState("");
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Load announcements from localStorage on mount
  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) return;

      try {
        const stored =
          localStorage.getItem(STORAGE_KEY) ??
          localStorage.getItem(LEGACY_STORAGE_KEY);

        if (stored) {
          const parsed: unknown = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setAnnouncements(parsed.filter(isAnnouncement));
          }
        }
      } catch {
        setStorageError("Data tersimpan tidak dapat dibaca. Mulai dengan daftar kosong.");
      } finally {
        setStorageReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const persistAnnouncements = (nextAnnouncements: Announcement[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAnnouncements));
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      setStorageError("");
    } catch {
      setStorageError("Perubahan tidak dapat disimpan di browser ini.");
    }
  };

  const handleOpenForm = (edit = false, index: number | null = null) => {
    setFormError("");
    setIsEditing(edit);
    setEditIndex(index);
    if (edit && index !== null) {
      setFormData({
        title: announcements[index].title,
        description: announcements[index].description,
      });
    } else {
      setFormData({ title: "", description: "" });
    }
    setShowForm(true);
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      setFormError("Nama dan deskripsi pengumuman wajib diisi.");
      return;
    }

    const nextAnnouncements =
      isEditing && editIndex !== null
        ? announcements.map((announcement, index) =>
          index === editIndex
            ? {
                ...announcement,
                title: formData.title.trim(),
                description: formData.description.trim(),
              }
            : announcement
        )
        : [
            ...announcements,
            {
              title: formData.title.trim(),
              date: new Intl.DateTimeFormat("id-ID", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(new Date()),
              description: formData.description.trim(),
            },
          ];

    setAnnouncements(nextAnnouncements);
    persistAnnouncements(nextAnnouncements);

    setFormData({ title: "", description: "" });
    setIsEditing(false);
    setEditIndex(null);
    setFormError("");
    setShowForm(false);
  };

  const handleDelete = (index: number) => {
    if (confirm("Yakin ingin menghapus pengumuman ini?")) {
      const nextAnnouncements = announcements.filter((_, i) => i !== index);
      setAnnouncements(nextAnnouncements);
      persistAnnouncements(nextAnnouncements);
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
  {/* Page Title */}
  <h1 className="text-3xl font-bold text-[var(--color-second)] text-center mb-6">
    ANNOUNCEMENT
  </h1>

      {storageError && (
        <p role="status" className="mb-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800">
          {storageError}
        </p>
      )}

  {/* Add Button */}
    <div className="flex justify-end mb-6">
      <button
        type="button"
        onClick={() => handleOpenForm(false)}
        className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
      >
          <span aria-hidden="true" className="text-yellow-300">➕</span> Tambah
        </button>
      </div>


      {/* Announcement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!storageReady ? (
          <p role="status" className="text-gray-500">Memuat…</p>
        ) : announcements.length > 0 ? (
          announcements.map((a, i) => (
            <div
              key={i}
              className="bg-card text-card-foreground p-6 rounded-lg shadow hover:shadow-lg transition relative"
            >
              <h2 className="font-bold text-lg">{a.title}</h2>
              <p className="text-sm text-muted-foreground">{a.date}</p>
              <p className="mt-2">{a.description}</p>

              {/* Edit/Delete buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => handleOpenForm(true, i)}
                  className="px-3 py-1 bg-[var(--color-primary)] text-white rounded hover:opacity-90"
                >
                  ✏️ Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(i)}
                  className="px-3 py-1 bg-[var(--color-second)] text-white rounded hover:opacity-90"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Belum ada pengumuman.</p>
        )}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-form-title"
            className="max-h-[90vh] w-full max-w-md overscroll-contain overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 id="announcement-form-title" className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Pengumuman" : "Tambah Pengumuman"}
            </h2>

            <form onSubmit={handleSave}>
              <div className="mb-4">
              <label htmlFor="announcement-title" className="block font-medium mb-1">Nama Pengumuman</label>
              <input
                id="announcement-title"
                name="title"
                type="text"
                autoComplete="off"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full rounded-md border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                placeholder="Contoh: Pendaftaran Batch 4…"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="announcement-description" className="block font-medium mb-1">
                Deskripsi Pengumuman
              </label>
              <textarea
                id="announcement-description"
                name="description"
                autoComplete="off"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full rounded-md border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                placeholder="Tulis detail pengumuman…"
              />
            </div>

            {formError && (
              <p role="alert" className="mb-4 text-sm text-red-600">
                {formError}
              </p>
            )}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setFormError("");
                }}
                className="px-4 py-2 rounded-md border"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90"
              >
                {isEditing ? "Simpan" : "Tambah"}
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
