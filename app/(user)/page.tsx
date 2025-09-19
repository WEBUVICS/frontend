// ========= UNTUK HALAMAN HOME UBAH DISINI ===========
"use client";

import Image from "next/image";
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      
      {/* Photo Section */}
      <section className="text-center">
        <div className="container mx-auto">
          <Image
            src="/Uvics.jpg"
            alt="Group Photo"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

      {/* About Section */}
        <div className="my-15 mx-auto max-w-6xl px-4">
          <div className="bg-[#4D8BFF21] pb-5 rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 relative min-h-[250px]">
              <h2 className="text-3xl font-semibold text-amber-500 mb-4 font-['Quicksand']">About</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-['Open_Sans']">
                UVICS (Unklab Virtue in Computer Science) hadir sebagai komunitas mahasiswa Universitas 
                Klabat yang dirancang untuk menggali potensi dan menciptakan prestasi bersama. 
                Melalui partisipasi dalam berbagai kompetisi teknologi dan bisnis, UVICS
                membantu anggotanya mengembangkan keterampilan, kolaborasi, dan inovasi.
              </p>
              <div className="absolute bottom-2 -mb-5 right-4 p-1 ">
                <a href="#" className="bg-blue-500 opacity-60 hover:opacity-100 text-white text-sm px-1 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 inline-flex items-center">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-[1324px] h-0 outline  outline-gray-300"></div>
      </div>  

      {/* Alasan Section */}

      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Quicksand']">
              Mengapa Bergabung dengan UVICS?
            </h2>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                Berkembang dan Berprestasi
              </h3>
              <p className="text-gray-600 text-center">
                Peluang besar untuk meningkatkan pengalaman, dan membangun
                portofolio yang kuat melalui berbagai kompetisi dan proyek.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                Jaringan Relasi yang Mendukung
              </h3>
              <p className="text-gray-600 text-center">
                UVICS menyediakan lingkungan belajar yang dinamis, mendukung
                eksplorasi ide kreatif dan membangun koneksi dengan profesional.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                Meningkatkan Soft Skill
              </h3>
              <p className="text-gray-600 text-center">
                UVICS mendorong peningkatan keterampilan komunikasi, kolaborasi,
                dan kepemimpinan melalui berbagai aktivitas kelompok.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="text-center mb-10 px-4 py-5 pb-15 bg-gradient-to-b  from-blue-50 to-white">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[1324px] h-0 outline  outline-gray-300"></div>
        </div>  
        <blockquote className="italic text-lg pt-20">
          "Kehidupan adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu
          meresponsnya."
          <footer className="mt-2">– Charles R. Swindoll</footer>
        </blockquote>
      </section>

      {/* Carousel Section */}
      <section className="my-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Events</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-4">
            <Image
              src="/Event.jpg"
              alt="Event 1"
              width={300}
              height={200}
              className="w-1/2 md:w-1/4 h-auto"
            />
            <Image
              src="/Event.jpg"
              alt="Event 2"
              width={300}
              height={200}
              className="w-1/2 md:w-1/4 h-100px"
            />
            <Image
              src="/Event.jpg"
              alt="Event 3"
              width={300}
              height={200}
              className="w-1/2 md:w-1/4 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
};
