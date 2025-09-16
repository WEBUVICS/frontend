"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // make sure lucide-react is installed

export default function FAQ() {
  const faqs = [
    { q: "Apa itu UVICS?", a: "UVICS adalah organisasi mahasiswa ..." },
    { q: "Siapa saja yang bisa bergabung dengan UVICS?", a: "Semua mahasiswa Universitas Klabat dapat bergabung ..." },
    { q: "Apakah ada biaya untuk bergabung dengan UVICS?", a: "Tidak ada biaya, semua kegiatan gratis ..." },
    { q: "Bagaimana UVICS mendukung mahasiswa dalam kompetisi?", a: "UVICS menyediakan bimbingan, pelatihan, dan dukungan penuh ..." },
    { q: "Apakah anggota bisa mengusulkan jenis lomba baru untuk diikuti?", a: "Ya, anggota dapat mengajukan usulan kepada pengurus ..." },
    { q: "Bagaimana cara menjadi anggota UVICS?", a: "Cukup mendaftar melalui formulir yang disediakan ..." },
    { q: "Jenis lomba apa saja yang diikuti UVICS?", a: "Berbagai lomba teknologi, bisnis, dan komunikasi ..." },
    { q: "Apakah UVICS menyediakan bimbingan atau pelatihan untuk lomba?", a: "Ya, setiap lomba disertai dengan sesi mentoring ..." },
    { q: "Apa keuntungan menjadi anggota UVICS?", a: "Pengalaman organisasi, jejaring, portofolio, dan e-certificate ..." },
    { q: "Bagaimana UVICS menampilkan prestasi para anggotanya?", a: "Prestasi akan dipublikasikan di website dan media sosial UVICS ..." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 flex justify-center">
      <div className="w-full max-w-6xl bg-[var(--color-muted)] rounded-lg p-10 shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Frequently Asked Question
        </h1>
        <p className="text-center text-white/90 mb-10 max-w-2xl mx-auto text-sm">
          Frequently Asked Questions (FAQs) are a collection of commonly asked
          questions and their answers about a particular topic, service, product,
          or system. FAQs are designed to provide quick and accessible information
          to users or customers, reducing the need for additional support or
          clarification.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow px-4 py-3 cursor-pointer transition"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
