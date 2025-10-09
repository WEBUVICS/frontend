"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MemberType } from "@/types/data-type";



export default function DepartmentUvics() {

  const Advisor = [
    { id: 1, name: "Stenly R. Pungus, S.Kom, M.IT, Ph.D", position: "Advisor", image: "/member/CORETEAM/advisor.webp" },
  ];

  const coreTeamMembers:MemberType[] = [
  { id: 1, name: "Aiko Lasut", position: "President", image: "/member/CORETEAM/aiko.webp" },
  { id: 2, name: "Prince Tampi", position: "Vice President", image: "/member/CORETEAM/prince.webp" },
  { id: 3, name: "Dion Kobi", position: "Secretary", image: "/member/CORETEAM/dion.webp" },
  { id: 4, name: "Syelle Kolooy", position: "Vice Secretary", image: "/member/CORETEAM/sela2.webp" },
  { id: 5, name: "Marcelo Poluoko", position: "Treasurer", image: "/member/CORETEAM/ralf.webp" },
  { id: 6, name: "Ananda Solong", position: "Vice Treasurer", image: "/member/PR/ananda.webp" },
];


  const webDevMembers:MemberType[] = [
    { id: 1, name: "Krismarvel Ticoalu", position: "PIC Admin Interface", image: "/member/WEBDEV/avel.webp" },
    { id: 2, name: "Imanuel Palenewen", position: "PIC User Interface", image: "/member/WEBDEV/nuel.webp" },
    { id: 3, name: "Grantly Sorongan", position: "Koordinator", image: "/member/WEBDEV/grantly.webp" },
    { id: 5, name: "Jordan Sutarto", position: "Member User Interface", image: "/member/WEBDEV/jordan.webp" },
    { id: 6, name: "Betrand Saputra", position: "Member User Interface", image: "/member/WEBDEV/betrand.webp" },
    { id: 7, name: "Timothy Weley", position: "Member User Interface", image: "/member/WEBDEV/timo.webp" },
    { id: 8, name: "Nazarya Kandou", position: "Member User Interface", image: "/member/WEBDEV/nazar.webp" },
    { id: 9, name: "Kevin Tjiu", position: "Member User Interface", image: "/member/WEBDEV/kevin.webp" },
  ];

  const indevMembers:MemberType[] = [
  { id: 2, name: "Natanael Rantung", position: "PIC INDEV", image: "/member/PR/natan.webp" },
  { id: 3, name: "Darryl Laluyan", position: "Koordinator", image: "/member/INDEV/deril.webp" },
  { id: 4, name: "Ariellya Sayow", position: "Member INDEV", image: "/member/INDEV/aril.webp" },
  { id: 5, name: "Ivana Sondakh", position: "Member INDEV", image: "/member/INDEV/ivana.webp" },
  { id: 6, name: "Vania Karwur", position: "Member INDEV", image: "/member/PR/vania.webp" },
  { id: 7, name: "Marcheilla Wenas", position: "Member INDEV", image: "" }
];

const exafMembers:MemberType[] = [
  { id: 2, name: "Marcel Pandelaki", position: "PIC EXAF", image: "/member/PR/marsel.webp" },
  { id: 3, name: "Reva Rorie", position: "Koordinator", image: "/member/EXTERNAL/reva.webp" },
  { id: 4, name: "Riset Gosal", position: "Member EXAF", image: "/member/PR/riset.webp" },
  { id: 5, name: "Rivaldo Kindangen", position: "Member EXAF", image: "" },
  { id: 6, name: "Lamtiar Nainggolan", position: "Member EXAF", image: "" },
  { id: 7, name: "Alya Manoppo", position: "Member EXAF", image: "" },
  { id: 8, name: "Yoel Kosenda", position: "Member EXAF", image: "" },
  { id: 9, name: "Vanda Woruntu", position: "Member EXAF", image: "" },
  { id: 1, name: "Cheiselio Benne", position: "Member EXAF", image: "" },
];

const editorMembers:MemberType[] = [
  { id: 2, name: "Thrilya Potalangi", position: "PIC Editor", image: "/member/EDITOR/Thrilya.webp" },
  { id: 3, name: "Avriel Parengkuan", position: "Koordinator", image: "/member/EDITOR/avril.webp" },
  { id: 4, name: "Edwardo Waturandang", position: "Member Editor", image: "/member/EDITOR/Edwardo.webp" },
  { id: 5, name: "Matthew Kambey", position: "Member Editor", image: "" },
  { id: 6, name: "Mutiara Makarawung", position: "Member Editor", image: "/member/EDITOR/Mutiara.webp" },
  { id: 7, name: "Gabriel Sumual", position: "Member Editor", image: "" },
];

const prMembers:MemberType[] = [
  { id: 2, name: "Jeany Pratiwi", position: "PIC PR", image: "/member/PR/jeany.webp" },
  { id: 3, name: "Marshanda Padmarini", position: "Koordinator", image: "/member/PR/marsha.webp" },
  { id: 4, name: "Glenvidi Gerungan", position: "Member PR", image: "/member/PR/cipeng.webp" },
  { id: 5, name: "Cinta Walukow", position: "Member PR", image: "/member/PR/cinta.webp" },
  { id: 6, name: "Christia Weol", position: "Member PR", image: "/member/PR/christy.webp" },
  { id: 7, name: "Dhesy Corneles", position: "Member PR", image: "/member/PR/cici.webp" },
  { id: 8, name: "Renaldy Mantiri", position: "Member PR", image: "" },
  { id: 9, name: "Vicky Manjanduga", position: "Member PR", image: "/member/PR/vicky.webp" },
];
const comhandmembers:MemberType[] = [
  { id: 2, name: "Siao Ling nyo", position: "PIC PR", image: "/member/CH/Xiaoling.webp" },
  { id: 3, name: "Arlan Jonsend", position: "Koordinator", image: "/member/EDITOR/Arlan.webp" },
  { id: 4, name: "Anggreiny Sondakh", position: "Member PR", image: "/member/CH/ang.webp" },
  { id: 5, name: "Syalom Angginaloy", position: "Member PR", image: "" }
];

  // === Card Member ===
  const MemberCard = ({member }: {member:MemberType }) => (
    <div key={member.id} className="flex flex-col rounded-xl items-center bg-white shadow-lg w-full gap-5 sm:w-32 md:w-40 lg:w-44 xl:w-48 h-44 sm:h-52 md:h-60 lg:h-64 overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-32 sm:h-28 md:h-32 lg:h-36 bg-white flex items-center justify-center">
        <Image
          src={member.image && member.image.trim() !== "" ? member.image : "/dummy-profile.svg"}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="px-2 sm:px-3 py-1 text-center">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
          {member.name}
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 font-medium">
          {member.position}
        </p>
      </div>
    </div>
  );

  // === Card PIC ===
  const PICCard = ({member }: {member: MemberType }) => (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-[120px] sm:w-[150px] md:w-[180px] h-[180px] sm:h-[210px] md:h-[240px] overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-28 sm:h-32 md:h-36 bg-white flex items-center justify-center">
        <Image
          src={member.image && member.image.trim() !== "" ? member.image : "/dummy-profile.svg"}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="px-2 sm:px-3 py-2 sm:py-3 text-center">
        <h3 className="text-[11px] sm:text-sm md:text-base font-semibold text-gray-800 leading-tight line-clamp-2">
          {member.name}
        </h3>
        <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 font-medium">{member.position}</p>
      </div>
    </div>
  );

  // === PIC Section ===
  const PICSection = ({ members }: { members: MemberType[] }) => {
    const pics = members.filter(
      (m) => m.position.toLowerCase().includes("pic") || m.position.toLowerCase().includes("koordi")
    );
    if (pics.length === 0) return null;

    return (
      <div className="mt-4 w-full max-w-5xl bg-[#4574C3] rounded-2xl shadow-lg px-3 sm:px-6 py-4 sm:py-6 flex flex-wrap justify-center gap-3 sm:gap-4">
  {pics.map((pic) => (
    <div key={pic.id}>
      <PICCard member={pic} />
    </div>
  ))}
</div>
    );
  };

// === Member Section ===
const MemberSection = ({ members }: { members: MemberType[] }) => {
  const normalMembers = members.filter(
    (m) =>
      !m.position.toLowerCase().includes("pic") &&
      !m.position.toLowerCase().includes("koordi")
  );

  if (normalMembers.length === 0) return null;

  const hasManyMembers = normalMembers.length >= 5;

  return (
    <div className="mt-6 mx-auto w-full max-w-6xl bg-[#FFA447] rounded-2xl shadow-lg px-5 sm:px-6 md:px-9 py-6 sm:py-10 relative">
      {hasManyMembers ? (
        <>
          {/* ✅ Mode Swiper jika member ≥ 5 */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            loop
            breakpoints={{
              320: { slidesPerView: 2 },
              375: { slidesPerView: 2 },
              425: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 5 },
            }}
          >
            {normalMembers.map((member) => (
              <SwiperSlide key={member.id} className="flex justify-center">
                <MemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi */}
          <button className="custom-prev absolute top-1/2 -left-3 sm:-left-8 z-10 bg-white w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="custom-next absolute top-1/2 -right-3 sm:-right-8 z-10 bg-white w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      ) : (
        // ✅ Mode static grid center jika member < 5
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
          {normalMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


  // === Advisor Section ===
const AdvisorSection = ({ members }: { members: MemberType[] }) => {
  if (members.length === 0) return null;

  return (
    <div className="mt-6 w-full flex justify-center">
      <div className="flex flex-wrap justify-center gap-4">
        {members.map((advisor) => (
          <MemberCard key={advisor.id} member={advisor} />
        ))}
      </div>
    </div>
  );
};

{/* === Core Team === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Core Team</h2>
  <PICSection members={coreTeamMembers} />
  <MemberSection members={coreTeamMembers} />
</div>


  // === Render Halaman ===
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white px-3 sm:px-5 py-6 sm:py-12">
      {/* Card Utama */}
      <div className="w-full bg-[#FFA447] rounded-lg shadow-lg px-4 sm:px-8 md:px-10 py-6 sm:py-12 md:py-14 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10">
        <div className="flex-1 text-white pr-0 sm:pr-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 md:mb-5">Departement UVICS</h2>
          <p className="text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            UVICS terdiri dari berbagai departemen yang memperkenalkan peran dan anggota yang berkontribusi dalam mendukung visi dan misi organisasi.
          </p>
          <p className="mt-2 sm:mt-4 text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            Mulai dari tim inti hingga departemen khusus seperti publikasi, pendidikan, dan pengembangan web, setiap peran memiliki kontribusi penting dalam membangun komunitas UVICS yang inspiratif dan progresif.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-32 sm:h-44 md:h-52 lg:h-56 relative shadow-xl rounded-md overflow-hidden">
            <Image src="/image-desc-UVICS.svg" alt="UVICS Team" fill className="rounded-md object-cover" />
          </div>
        </div>
      </div>

      {/* Slogan */}
      <div className="mt-6 sm:mt-10 w-full flex justify-center">
        <div className="bg-[#9CB9FF] px-3 sm:px-8 md:px-12 py-3 sm:py-4 rounded-lg shadow-lg w-full sm:w-[850px] max-w-full text-center">
          <p className="text-white italic font-bold text-sm sm:text-lg md:text-xl tracking-wide">
            Being an Achievers, carve Your Future
          </p>
        </div>
      </div>

     {/* === Advisor === */}
<div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-16">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">
    Advisor
  </h2>
  <AdvisorSection members={Advisor} />   {/* ✅ pakai ini */}
</div>

{/* === Core Team === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Core Team</h2>
  <PICSection members={coreTeamMembers} />
  <MemberSection members={coreTeamMembers} />
</div>


     {/* === INDEV === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Internal Development</h2>
  <PICSection members={indevMembers} />
  <MemberSection members={indevMembers} />
</div>

{/* === EXAF === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">External Affairs</h2>
  <PICSection members={exafMembers} />
  <MemberSection members={exafMembers} />
</div>

{/* === EDITOR === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">EDITOR</h2>
  <PICSection members={editorMembers} />
  <MemberSection members={editorMembers} />
</div>

{/* === PR === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Public Relations</h2>
  <PICSection members={prMembers} />
  <MemberSection members={prMembers} />
</div>
{/* === Comhand === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Competition Handler</h2>
  <PICSection members={comhandmembers} />
  <MemberSection members={comhandmembers} />
</div>
      {/* === Web Development === */}
      <div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Web Development</h2>
        <PICSection members={webDevMembers} />
        <MemberSection members={webDevMembers} />
      </div>
    </div>
  );
}
