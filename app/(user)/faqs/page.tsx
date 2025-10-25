"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Apa ada syarat masuk UVICS?", a: "Tidak ada dong! yang penting niat semua pasti bisa" },
    { q: "Siapa saja yang bisa bergabung dengan UVICS?", a: "Mahasiswa/i Universitas Klabat dari semua jurusan dan angkatan dapat bergabung, tidak terbatas hanya untuk jurusan komputer atau teknologi." },
    { q: "Bagaimana cara mendaftar menjadi anggota UVICS?", a: "Pendaftaran dilakukan melalui formulir rekrutmen anggota yang dibuka setiap periode tertentu. Informasi pendaftaran biasanya diumumkan di Instagram @uvics_id dan website resmi UVICS." },
    { q: "Apa saja benefit yang akan saya dapatkan jika bergabung?", a: "Anggota UVICS akan mendapatkan mentoring lomba, kesempatan pembiayaan lomba, e-sertifikat, rekomendasi LinkedIn, akses Canva Pro organisasi, serta pengalaman membangun personal branding, networking, dan portofolio melalui project lomba." },
    { q: "Bagaimana cara menghubungi UVICS jika ingin bertanya lebih lanjut?", a: "Kamu bisa menghubungi kami melalui email di uvics@unklab.ac.id, Instagram @uvics_id, atau LinkedIn UVICS UNKLAB." },
    { q: "Apakah hanya lomba IT atau komputer saja yang diikuti UVICS?", a: "Tidak. UVICS mendukung berbagai jenis lomba, baik di bidang teknologi, bisnis, desain, maupun kategori lain sesuai minat dan potensi anggota." },
    { q: "Bagaimana sistem pembagian divisi di UVICS?", a: "Setiap anggota dapat memilih divisi sesuai minat, seperti Public Relations, Editor, Competition Handler, Web Development, atau Internal Development. Setiap divisi memiliki peran khusus dalam mendukung kegiatan organisasi." },
    { q: "Apakah UVICS hanya fokus pada kompetisi internal kampus?", a: "Tidak. UVICS juga berpartisipasi dalam kompetisi tingkat nasional maupun internasional, serta membuat program-program inovatif yang memberi dampak ke masyarakat" },
    { q: "Apakah semua anggota UVICS wajib ikut lomba?", a: "Tidak semua lomba wajib diikuti, tetapi anggota diharapkan aktif berpartisipasi sesuai bidang dan minat masing-masing" },
    { q: "Apakah mahasiswa baru boleh langsung ikut lomba melalui UVICS?", a: "Ya, tentu saja! Mahasiswa baru justru sangat dianjurkan untuk ikut serta agar bisa belajar sejak awal, mendapatkan pengalaman, dan membangun portofolio lebih cepat." },
    
  ];

  // state untuk masing-masing sisi
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleFAQ = (index: number, side: "left" | "right") => {
    if (side === "left") {
      // tutup kanan jika kiri dibuka
      setOpenRight(null);
      setOpenLeft(openLeft === index ? null : index);
    } else {
      // tutup kiri jika kanan dibuka
      setOpenLeft(null);
      setOpenRight(openRight === index ? null : index);
    }
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 flex justify-center">
      <div className="w-full max-w-6xl bg-[var(--color-muted)] rounded-lg p-10 shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-second mb-4">
          Frequently Asked Question
        </h1>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
          Frequently Asked Questions (FAQs) berisi kumpulan pertanyaan dan jawaban yang sering ditanyakan seputar organisasi UVICS. Mulai dari kegiatan, keanggotaan, hingga program yang dijalankan. Tujuannya adalah membantu mahasiswa mengenal UVICS lebih mudah dan cepat, tanpa perlu menunggu penjelasan langsung dari pengurus.
        </p>

        {/* FAQ Grid */}
        <section className="flex gap-3">
          {/* Kiri */}
          <div className="w-1/2 flex flex-col gap-2">
            {faqs.slice(0, 5).map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow px-4 py-3 cursor-pointer transition"
                onClick={() => toggleFAQ(i, "left")}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openLeft === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Konten dengan animasi height */}
                <div
                  className={`transition-all overflow-hidden duration-300 ${
                    openLeft === i ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kanan */}
          <div className="w-1/2 flex flex-col gap-2">
            {faqs.slice(5, 10).map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow px-4 py-3 cursor-pointer transition"
                onClick={() => toggleFAQ(i, "right")}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openRight === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Konten dengan animasi height */}
                <div
                  className={`transition-all overflow-hidden duration-300 ${
                    openRight === i ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}