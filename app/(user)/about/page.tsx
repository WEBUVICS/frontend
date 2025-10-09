"use client";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-second">
          About
        </h1>

        {/* Visi & Misi */}
        <section className="bg-[var(--popover)] rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center text-[var(--color-second)] mb-6">
            VISI DAN MISI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-second)] text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Visi</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Menjadi wadah untuk Mahasiswa-Mahasiswi yang ingin bertumbuh dan berprestasi dalam lomba;
                </li>
                <li>
                  Menjadi organisasi yang membawa prestasi dan nama baik bagi kampus Universitas Klabat;
                </li>
                <li>
                  Menjadi tempat mahasiswa untuk mengasah dan meningkatkan hard
                  skill dan soft skill mereka untuk meningkatkan pengalaman dan
                  portofolio.
                </li>
                <li>
                  Menjadi organisasi yang memberikan manfaat dan dampak yang berkelanjutan dalam masyarakat.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-second)] text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Misi</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Mengumpulkan mahasiswa dari berbagai tingkat dan jurusan untuk
                  sama-sama bertumbuh dan berprestasi membangun portofolio;
                </li>
                <li>
                  Memberikan sistem dan kesempatan yang sama kepada mahasiswa
                  untuk melatih kerjasama, komunikasi, dan leadership mereka;
                </li>
                <li>
                  Menyediakan media belajar bersama untuk setiap anggota
                  meningkatkan hard skill dan soft skill mereka.
                </li>
                <li>
                  Menciptakan program-program inovatif yang dapat memberikan dampak dalam masyarakat dan mengasah pola pikir kreatif member UVICS
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sejarah */}
        <section className="bg-[var(--color-muted)] rounded-lg p-8 shadow-md text-center">
          <h2 className="text-2xl font-bold text-[var(--color-second)] mb-6">
            Sejarah
          </h2>
          <div className="bg-white rounded-lg h-64 flex items-center justify-center shadow-inner">
            <p className="text-gray-400">
              Konten sejarah UVICS akan ditempatkan di sini.
            </p>
          </div>
        </section>

        {/* Our Program */}
        <section className="bg-[var(--color-muted)] rounded-lg p-8 shadow-md text-center">
          <h2 className="text-2xl font-bold text-[var(--color-second)] mb-6">
            OUR PROGRAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[var(--color-second)] text-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">1. Kamar Belajar</h3>
                <p className="text-sm">Internal Development</p>
                <p className="mt-2 text-sm">
                  Ini adalah program yang dibuat untuk mengembangkan kemampuan
                  semua anggota UVICS.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Desc */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-second)] mb-6">
            Job Desc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">INTERNAL DEVELOPMENT</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>
                  Mendukung pengembangan potensi anggota
                </li>
                <li>
                  Memberikan pelatihan dan koordinasi untuk meningkatkan keterampilan tim
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">EXTERNAL AFFAIRS</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>
                  Merancang dan melaksanakan event-event keren, mulai dari
                  webinar, workshop, hingga program pengabdian masyarakat;
                </li>
                <li>
                  Membangun hubungan dengan sponsor dan komunitas untuk
                  perkembangan UVICS.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">EDITOR</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Mengelola konten tulisan maupun visual organisasi.</li>
                <li>
                  Mendokumentasikan setiap kegiatan UVICS, baik melalui foto
                  maupun video.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Compatition Handler</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Mengatur dan mengawasi jalannya kompetisi</li>
                <li>
                  Memastikan kegiatan berjalan lancar, terstruktur, dan bermanfaat.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Web Development</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Mengembangkan dan merawat website organisasi</li>
                <li>
                  Menyediakan media informasi yang interaktif dan mudah diakses
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Pulic Relation</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Menjalin hubungan dengan mitra, sponsor, dan masyarakat.</li>
                <li>
                  Membangun citra positif organisasi melalui komunikasi yang efektif.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[var(--color-second)]">
            Benefits
          </h2>
          <div className="bg-[var(--color-second)] text-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>
                Mendapatkan Mentoring Lomba dari para ahli-ahli di bidangnya
              </li>
              <li>
                Kesempatan pembiayaan lomba
              </li>
              <li>
                Mendapatkan E-Sertifikat.
              </li>
              <li>Rekomendasi linkedin</li>
              <li>Akses Canva Pro organisasi</li>
              <li>Rekomendasi LinkedIn.</li>
              <li>
               Meningkatkan Personal Branding dan Networking
              </li>
              <li>
               Membangung Protofolio lewat project-project perlombaan
              </li>
              
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
