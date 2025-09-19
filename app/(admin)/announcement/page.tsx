// ========= UNTUK HALAMAN HOME UBAH DISINI ===========


"use client";

import { useState, useEffect } from "react";

export default function AnnouncementPage() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [announcements, setAnnouncements] = useState<
    { title: string; date: string; description: string }[]
  >([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Load announcements from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("announcements");
    if (stored) {
      setAnnouncements(JSON.parse(stored));
    }
  }, []);

  // Save announcements to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  const handleOpenForm = (edit = false, index: number | null = null) => {
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

  const handleSave = () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Harap isi semua field!");
      return;
    }

    if (isEditing && editIndex !== null) {
      const updated = [...announcements];
      updated[editIndex] = {
        ...updated[editIndex],
        title: formData.title,
        description: formData.description,
      };
      setAnnouncements(updated);
    } else {
      setAnnouncements([
        ...announcements,
        {
          title: formData.title,
          date: new Date().toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          description: formData.description,
        },
      ]);
    }

    setFormData({ title: "", description: "" });
    setIsEditing(false);
    setEditIndex(null);
    setShowForm(false);
  };

  const handleDelete = (index: number) => {
    if (confirm("Yakin ingin menghapus pengumuman ini?")) {
      setAnnouncements(announcements.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
  {/* Page Title */}
  <h1 className="text-3xl font-bold text-[var(--color-second)] text-center mb-6">
    ANNOUNCEMENT
  </h1>

  {/* Add Button */}
    <div className="flex justify-end mb-6">
      <button
        onClick={() => handleOpenForm(false)}
        className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
      >
          <span className="text-yellow-300">➕</span> Tambah
        </button>
      </div>


      {/* Announcement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {announcements.length > 0 ? (
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
                  onClick={() => handleOpenForm(true, i)}
                  className="px-3 py-1 bg-[var(--color-primary)] text-white rounded hover:opacity-90"
                >
                  ✏️ Edit
                </button>
                <button
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg animate-slideUp">
            <h2 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Pengumuman" : "Tambah Pengumuman"}
            </h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">Nama Pengumuman</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring focus:ring-[var(--color-primary)]"
                placeholder="Masukkan Program..."
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Deskripsi Pengumuman
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring focus:ring-[var(--color-primary)]"
                placeholder="Masukkan Deskripsi Program..."
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-md border"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90"
              >
                {isEditing ? "Simpan" : "Tambah"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
