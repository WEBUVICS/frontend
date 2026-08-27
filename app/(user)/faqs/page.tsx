"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "Tentang UVICS",
  "Keanggotaan",
  "Departemen",
  "Program & Lomba",
] as const;

type Category = (typeof categories)[number];

type FaqItem = {
  id: string;
  category: Category;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "tentang-uvics",
    category: "Tentang UVICS",
    question: "Apa itu UVICS?",
    answer:
      "UVICS (Unklab Virtue in Computer Science) adalah organisasi mahasiswa Universitas Klabat yang menjadi wadah untuk mengembangkan potensi, membentuk tim, dan meraih prestasi melalui berbagai kompetisi.",
  },
  {
    id: "tujuan-uvics",
    category: "Tentang UVICS",
    question: "Apa tujuan utama UVICS?",
    answer:
      "UVICS membantu mahasiswa bertumbuh bersama, mengasah hard skill dan soft skill, membangun portofolio, serta menghasilkan program yang bermanfaat bagi kampus dan masyarakat.",
  },
  {
    id: "visi-uvics",
    category: "Tentang UVICS",
    question: "Apa visi UVICS?",
    answer:
      "UVICS ingin menjadi wadah bagi mahasiswa yang ingin bertumbuh dan berprestasi, membawa nama baik Universitas Klabat, meningkatkan keterampilan dan portofolio, serta memberikan dampak yang berkelanjutan.",
  },
  {
    id: "misi-uvics",
    category: "Tentang UVICS",
    question: "Bagaimana UVICS menjalankan misinya?",
    answer:
      "UVICS mengumpulkan mahasiswa lintas tingkat dan jurusan, menyediakan kesempatan belajar yang setara, melatih kerja sama, komunikasi, dan kepemimpinan, serta menjalankan program inovatif yang mengasah kreativitas anggota.",
  },
  {
    id: "struktur-uvics",
    category: "Tentang UVICS",
    question: "Bagaimana struktur organisasi UVICS?",
    answer:
      "UVICS dipimpin oleh President dengan pendampingan Advisor serta dukungan Core Team, Secretary, dan Treasurer. Pelaksanaan program dibagi ke departemen Internal Development, Competition Handler, Public Relations, Editor, dan Web Development.",
  },
  {
    id: "cakupan-anggota",
    category: "Keanggotaan",
    question: "Siapa saja yang dapat bergabung dengan UVICS?",
    answer:
      "Keanggotaan terbuka bagi mahasiswa Universitas Klabat dari semua fakultas dan tingkat. UVICS tidak terbatas pada mahasiswa jurusan komputer atau teknologi.",
  },
  {
    id: "komitmen-anggota",
    category: "Keanggotaan",
    question: "Berapa lama komitmen anggota UVICS?",
    answer:
      "Anggota diharapkan bersedia berkomitmen dan terlibat dalam organisasi selama satu tahun atau dua semester, sambil tetap mengatur prioritas akademik dengan baik.",
  },
  {
    id: "culture-uvics",
    category: "Keanggotaan",
    question: "Budaya kerja apa yang diterapkan di UVICS?",
    answer:
      "Budaya UVICS menekankan disiplin, aktif dan komunikatif, inovatif, saling berbagi dan peduli, serta transparan dalam bekerja bersama.",
  },
  {
    id: "value-uvics",
    category: "Keanggotaan",
    question: "Nilai apa yang diharapkan dari anggota UVICS?",
    answer:
      "Anggota diharapkan mau terus belajar, berani memberikan usaha lebih, bertumbuh bersama, menunjukkan antusiasme, dan menjadi inspirasi bagi lingkungan sekitarnya.",
  },
  {
    id: "benefit-anggota",
    category: "Keanggotaan",
    question: "Apa manfaat menjadi anggota UVICS?",
    answer:
      "Anggota dapat memperoleh mentoring dan konsultasi lomba, dukungan pendanaan, e-sertifikat, rekomendasi LinkedIn, akses Canva Pro organisasi, pengembangan keterampilan, networking, portofolio, serta personal branding.",
  },
  {
    id: "internal-development",
    category: "Departemen",
    question: "Apa peran Internal Development?",
    answer:
      "Internal Development mengelola pengembangan dan kebersamaan anggota melalui program seperti KABEL, Bonding, UVICS Escape, serta Champion of Change.",
  },
  {
    id: "competition-handler",
    category: "Departemen",
    question: "Apa peran Competition Handler?",
    answer:
      "Competition Handler mengelola informasi dan data kompetisi, membantu pembentukan tim, mengatur monitoring progres, memfasilitasi pertemuan dengan mentor, serta mempublikasikan pencapaian peserta.",
  },
  {
    id: "public-relations",
    category: "Departemen",
    question: "Apa peran Public Relations?",
    answer:
      "Public Relations mengelola media sosial dan interaksi dengan audiens, merencanakan promosi, menyiapkan konten dan liputan kegiatan, serta menyusun narasi berita organisasi.",
  },
  {
    id: "editor",
    category: "Departemen",
    question: "Apa peran Editor?",
    answer:
      "Editor menangani desain, foto, video, dokumentasi kegiatan, dan pengelolaan file media untuk mendukung kebutuhan konten seluruh departemen UVICS.",
  },
  {
    id: "web-development",
    category: "Departemen",
    question: "Apa peran Web Development?",
    answer:
      "Web Development mengembangkan dan memelihara website UVICS, memperbarui konten, memperbaiki masalah teknis, membangun solusi digital, serta menjalankan kegiatan belajar web bersama.",
  },
  {
    id: "jenis-kompetisi",
    category: "Program & Lomba",
    question: "Apakah UVICS hanya mendukung lomba bidang komputer?",
    answer:
      "Tidak. UVICS mendukung kompetisi lintas bidang seperti Business Case, Business Plan, Hackathon, Web Competition, sayembara arsitektur, karya tulis ilmiah, Nursing Study Case, dan Health Education Creative Video.",
  },
  {
    id: "competition-mentoring",
    category: "Program & Lomba",
    question: "Bagaimana UVICS mendampingi tim lomba?",
    answer:
      "Melalui Competition Mentoring, UVICS membantu pembentukan tim, pencarian mentor, monitoring progres, konsultasi, dan evaluasi agar peserta memperoleh arahan selama proses kompetisi.",
  },
  {
    id: "kabel",
    category: "Program & Lomba",
    question: "Apa itu program KABEL?",
    answer:
      "KABEL atau Kamar Belajar adalah kegiatan belajar bersama untuk meningkatkan pengetahuan dan keterampilan melalui sharing dengan narasumber maupun pembahasan studi kasus secara mandiri.",
  },
  {
    id: "program-kebersamaan",
    category: "Program & Lomba",
    question: "Program apa yang memperkuat kebersamaan anggota?",
    answer:
      "Bonding dan UVICS Escape menjadi sarana untuk mempererat hubungan antaranggota. Champion of Change juga memberikan apresiasi kepada anggota yang aktif berkontribusi.",
  },
  {
    id: "informasi-dan-prestasi",
    category: "Program & Lomba",
    question: "Bagaimana informasi dan prestasi lomba dikelola?",
    answer:
      "Competition Updates menyebarkan informasi lomba, Competition Database menyimpan data dan riwayat kompetisi, sedangkan Achievement Showcase mempublikasikan prestasi untuk mengapresiasi dan menginspirasi anggota.",
  },
];

function FaqCard({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonId = `faq-button-${faq.id}`;
  const contentId = `faq-content-${faq.id}`;

  return (
    <article className="rounded-xl border border-gray-100 bg-white shadow-sm">
      <h2>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-4 text-left transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-5"
        >
          <span className="font-semibold text-gray-800">{faq.question}</span>
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h2>
      {isOpen ? (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="px-4 pb-5 sm:px-5"
        >
          <p className="text-sm leading-7 text-gray-600">{faq.answer}</p>
        </div>
      ) : null}
    </article>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Tentang UVICS");
  const [openId, setOpenId] = useState<string | null>(null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const selectCategory = (category: Category) => {
    setActiveCategory(category);
    setOpenId(null);
  };

  return (
    <div className="flex min-h-screen justify-center px-4 py-10 font-sans sm:px-8 sm:py-16 lg:px-20">
      <div className="w-full max-w-6xl rounded-2xl bg-[var(--color-muted)] p-5 shadow-md sm:p-8 lg:p-10">
        <h1 className="mb-4 text-center text-2xl font-bold text-second sm:text-3xl">
          Pertanyaan yang Sering Diajukan
        </h1>
        <p className="mx-auto mb-7 max-w-2xl text-center text-sm leading-relaxed text-gray-600 sm:mb-8">
          Pilih kategori untuk menemukan jawaban seputar organisasi,
          keanggotaan, departemen, program, dan kompetisi UVICS.
        </p>

        <nav aria-label="Kategori FAQ" className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const itemCount = faqs.filter(
                (faq) => faq.category === category
              ).length;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`${category}: ${itemCount} pertanyaan`}
                  onClick={() => selectCategory(category)}
                  className={`rounded-full border px-3 py-2 text-sm font-semibold transition-[background-color,color,border-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-4 ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-sm"
                      : "border-blue-200 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  {category}
                  <span aria-hidden="true" className="ml-2 text-xs opacity-75">
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <p aria-live="polite" className="sr-only">
          Menampilkan {visibleFaqs.length} pertanyaan kategori {activeCategory}.
        </p>
        <section
          aria-label={`Pertanyaan kategori ${activeCategory}`}
          className="grid gap-3 md:grid-cols-2 md:items-start"
        >
          {visibleFaqs.map((faq) => (
            <FaqCard
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId((currentId) => (currentId === faq.id ? null : faq.id))
              }
            />
          ))}
        </section>
      </div>
    </div>
  );
}
