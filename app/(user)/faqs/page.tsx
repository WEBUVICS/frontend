"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Apa ada syarat masuk UVICS?",
    a: "Tidak ada! Yang penting memiliki niat untuk belajar dan berkembang bersama.",
  },
  {
    q: "Siapa saja yang bisa bergabung dengan UVICS?",
    a: "Mahasiswa Universitas Klabat dari semua jurusan dan angkatan dapat bergabung, tidak terbatas hanya untuk jurusan komputer atau teknologi.",
  },
  {
    q: "Bagaimana cara mendaftar menjadi anggota UVICS?",
    a: "Pendaftaran dilakukan melalui formulir rekrutmen anggota yang dibuka setiap periode tertentu. Informasi pendaftaran biasanya diumumkan di Instagram @uvics_id dan situs resmi UVICS.",
  },
  {
    q: "Apa saja manfaat yang akan saya dapatkan jika bergabung?",
    a: "Anggota UVICS akan mendapatkan mentoring lomba, kesempatan pembiayaan lomba, e-sertifikat, rekomendasi LinkedIn, akses Canva Pro organisasi, serta pengalaman membangun personal branding, networking, dan portofolio melalui proyek lomba.",
  },
  {
    q: "Bagaimana cara menghubungi UVICS jika ingin bertanya lebih lanjut?",
    a: "Kamu bisa menghubungi kami melalui email di uvics@unklab.ac.id, Instagram @uvics_id, atau LinkedIn UVICS UNKLAB.",
  },
  {
    q: "Apakah hanya lomba IT atau komputer saja yang diikuti UVICS?",
    a: "Tidak. UVICS mendukung berbagai kompetisi lintas bidang, termasuk Business Case, Business Plan, Hackathon, Web Development, Architecture Design, Scientific Writing, Nursing Study Case, Health Education Creative Video, dan kompetisi interdisipliner lainnya.",
  },
  {
    q: "Bagaimana sistem pembagian divisi di UVICS?",
    a: "Setiap anggota dapat memilih divisi sesuai minat, seperti Internal Development, Competition Handler, Public Relations, Editor, atau Web Development. Setiap divisi memiliki peran khusus dalam mendukung kegiatan organisasi."
  },
  {
    q: "Apakah UVICS hanya fokus pada kompetisi internal kampus?",
    a: "Tidak. UVICS juga berpartisipasi dalam kompetisi tingkat nasional maupun internasional, serta membuat program-program inovatif yang memberi dampak kepada masyarakat.",
  },
  {
    q: "Apakah semua anggota UVICS wajib ikut lomba?",
    a: "Tidak semua lomba wajib diikuti, tetapi anggota diharapkan aktif berpartisipasi sesuai bidang dan minat masing-masing.",
  },
  {
    q: "Apakah mahasiswa baru boleh langsung ikut lomba melalui UVICS?",
    a: "Ya, tentu saja! Mahasiswa baru sangat dianjurkan untuk ikut serta agar bisa belajar sejak awal, mendapatkan pengalaman, dan membangun portofolio lebih cepat.",
  },
];

function FAQColumn({
  items,
  startIndex,
  openIndex,
  onToggle,
}: {
  items: typeof faqs;
  startIndex: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-3 md:w-1/2">
      {items.map((faq, index) => {
        const itemIndex = startIndex + index;
        const isOpen = openIndex === itemIndex;
        const contentId = `faq-content-${itemIndex}`;

        return (
          <article key={faq.q} className="rounded-lg bg-white shadow">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => onToggle(itemIndex)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-4 py-4 text-left transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={contentId}
              aria-hidden={!isOpen}
              className={`overflow-hidden px-4 transition-all duration-300 ${
                isOpen ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <main className="flex min-h-screen justify-center px-4 py-10 font-sans sm:px-8 sm:py-16 lg:px-20">
      <div className="w-full max-w-6xl rounded-lg bg-[var(--color-muted)] p-5 shadow-md sm:p-8 lg:p-10">
        <h1 className="mb-4 text-center text-2xl font-bold text-second sm:text-3xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-gray-500 sm:mb-10">
          Temukan jawaban atas pertanyaan umum seputar keanggotaan, kegiatan,
          dan program UVICS.
        </p>

        <section aria-label="Daftar pertanyaan umum" className="flex flex-col gap-3 md:flex-row md:items-start">
          <FAQColumn
            items={faqs.slice(0, 5)}
            startIndex={0}
            openIndex={openIndex}
            onToggle={toggleFAQ}
          />
          <FAQColumn
            items={faqs.slice(5)}
            startIndex={5}
            openIndex={openIndex}
            onToggle={toggleFAQ}
          />
        </section>
      </div>
    </main>
  );
}
