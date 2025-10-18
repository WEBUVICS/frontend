"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // pastikan lucide-react terinstal

export default function FAQ() {
  const faqs = [
    { q: "Apa ada syarat masuk UVICS?", 
      a: "Tidak ada dong! yang penting niat semua pasti bisa" },
    { q: "Siapa saja yang bisa bergabung dengan UVICS?", 
      a: "Mahasiswa/i Universitas Klabat dari semua jurusan dan angkatan dapat bergabung, tidak terbatas hanya untuk jurusan komputer atau teknologi." },
    { q: "Bagaimana cara mendaftar menjadi anggota UVICS?",
      a: "Pendaftaran dilakukan melalui formulir rekrutmen anggota yang dibuka setiap periode tertentu. Informasi pendaftaran biasanya diumumkan di Instagram @uvics_id dan website resmi UVICS." },
    { q: "Apa saja benefit yang akan saya dapatkan jika bergabung?",
      a: "Anggota UVICS akan mendapatkan mentoring lomba, kesempatan pembiayaan lomba, e-sertifikat, rekomendasi LinkedIn, akses Canva Pro organisasi, serta pengalaman membangun personal branding, networking, dan portofolio melalui project lomba." },
    { q: "Apakah hanya lomba IT atau komputer saja yang diikuti UVICS?",
      a: "Tidak. UVICS mendukung berbagai jenis lomba, baik di bidang teknologi, bisnis, desain, maupun kategori lain sesuai minat dan potensi anggota." },
    { q: "Bagaimana sistem pembagian divisi di UVICS?", 
      a: "Setiap anggota dapat memilih divisi sesuai minat, seperti Public Relations, Editor, Competition Handler, Web Development, atau Internal Development. Setiap divisi memiliki peran khusus dalam mendukung kegiatan organisasi." },
    { q: "Apakah UVICS hanya fokus pada kompetisi internal kampus?", 
      a: "Tidak. UVICS juga berpartisipasi dalam kompetisi tingkat nasional maupun internasional, serta membuat program-program inovatif yang memberi dampak ke masyarakat" },
    { q: "Apakah semua anggota UVICS wajib ikut lomba?", 
      a: "Ya, tentu saja! Mahasiswa baru justru sangat dianjurkan untuk ikut serta agar bisa belajar sejak awal, mendapatkan pengalaman, dan membangun portofolio lebih cepat." },
    { q: "Bagaimana cara menghubungi UVICS jika ingin bertanya lebih lanjut?", 
      a: "Kamu bisa menghubungi kami melalui email di uvics@unklab.ac.id, Instagram @uvics_id, atau LinkedIn UVICS UNKLAB." },
    { q: "Apakah mahasiswa baru boleh langsung ikut lomba melalui UVICS?", 
      wa: "Tidak semua lomba wajib diikuti, tetapi anggota diharapkan aktif berpartisipasi sesuai bidang dan minat masing-masing" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-[#ff9e2c] mb-3">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Frequently Asked Questions (FAQs) adalah tempat bagi kamu yang ingin tahu lebih dalam tentang UVICS —
        mulai dari cara bergabung, kegiatan, hingga manfaat menjadi anggota. Kami ingin memastikan semua mahasiswa
        Universitas Klabat dapat menemukan jawaban dengan cepat dan mudah.
      </p>

      {/* Gunakan grid 2 kolom untuk keseimbangan visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
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

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
