"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MemberType } from "@/types/data-type";

export default function DepartmentUvics() {


  const Advisor:MemberType[] = [
    { id: 1, name: "Stenly R. Pungus, S.Kom, M.IT, Ph.D", position: "Advisor", image: "/member/CORETEAM/advisor1.webp" },
    { id: 2, name: "Semmy W. Taju S.Kom, M.S, Ph.D", position: "Advisor", image: "/member/CORETEAM/advisor2.webp" },
    
  ];
  

  const coreTeamMembers:MemberType[] = [
  { id: 1, name: "Aiko Lasut", position: "President", image: "/member/CORETEAM/aiko.webp" },
  { id: 2, name: "Prince Tampi", position: "Vice President", image: "/member/CORETEAM/prince.webp" },
  { id: 3, name: "Dion Kobi", position: "Secretary", image: "/member/CORETEAM/dion.webp" },
  { id: 4, name: "Vania", position: "Vice Secretary", image: "/member/PR/vania.webp" },
  { id: 5, name: "Marcelo Poluakan", position: "Treasurer", image: "/member/CORETEAM/ralf.webp" },
  { id: 6, name: "Timothy Weley", position: "Vice Treasurer", image: "/member/CORETEAM/wakil-ben.webp" },
];


  const webDevMembers:MemberType[] = [
    { id: 1, name: "Krismarvel Ticoalu", position: "PIC Web", image: "/member/WEBDEV/avel.webp" },
    { id: 2, name: "Imanuel Palenewen", position: "PIC Web", image: "/member/WEBDEV/noel.webp" },
    { id: 3, name: "Grantly Sorongan", position: "Koordinator ", image: "/member/WEBDEV/grenly.webp" },
    { id: 4, name: "Kevin Tjiu", position: "Member Web", image: "/member/WEBDEV/kevin.webp" },
    { id: 5, name: "Jordan Sutarto", position: "Member Web", image: "/member/WEBDEV/jordan.webp" },
    { id: 6, name: "Betrand Saputra", position: "Member Web", image: "/member/WEBDEV/betrand.webp" },
    { id: 7, name: "Timothy Weley", position: "Member Web", image: "/member/WEBDEV/timo.webp" },
    { id: 8, name: "Nazarya Kandou", position: "Member Web", image: "/member/WEBDEV/nazar.webp" },
  ];

  const indevMembers:MemberType[] = [
  { id: 1, name: "Ivana Sondakh", position: "PIC INDEV", image: "/member/INDEV/ivana.webp" },
  { id: 2, name: "Darryl Laluyan", position: "Koordinator", image: "/member/INDEV/deril.webp" },
  { id: 3, name: "Ariellya Sayow", position: "Member INDEV", image: "/member/INDEV/aril.webp" },
  { id: 4, name: "Reva Rorie", position: "Member INDEV", image: "/member/EXTERNAL/reva.webp" },
  { id: 5, name: "Marcheilla Wenas", position: "Member INDEV", image: "/member/INDEV/cheilla.webp" },
  { id: 6, name: "Arji Legi", position: "Member INDEV", image: "/member/INDEV/arji.webp" },
  { id: 7, name: "Joel Mantiri", position: "Member INDEV", image: "/member/INDEV/joel.webp" },
];


const editorMembers:MemberType[] = [
  { id: 1, name: "Edwardo Waturandang", position: "PIC Editor", image: "/member/EDITOR/Edwardo.webp" },
  { id: 2, name: "Thrilya Potalangi", position: "Koordinator", image: "/member/EDITOR/Thrilya.webp" },
  { id: 3, name: "Arlan Jonsend", position: "Member Editor", image: "/member/EDITOR/Arlan.webp" },
  { id: 4, name: "Mutiara Makarawung", position: "Member Editor", image: "/member/EDITOR/Mutiara.webp" },
  { id: 5, name: "Matthew Kambey", position: "Member Editor", image: "/member/EDITOR/met_kambey.webp" },
  { id: 6, name: "Matthew Pangemanan", position: "Member Editor", image: "/member/EDITOR/met_pangemanan.webp" },
  { id: 7, name: "Febriansyah Sahay", position: "Member Editor", image: "/member/EDITOR/febriansyah.webp" },
  { id: 8, name: "Jeremiah Lengkong", position: "Member Editor", image: "/member/EDITOR/jere.webp" },
  { id: 9, name: "Channy Thomas", position: "Member Editor", image: "/member/EDITOR/channy.webp" },
];

const prMembers:MemberType[] = [
  { id: 1, name: "Christia Weol", position: "PIC PR", image: "/member/PR/christy.webp" },
  { id: 2, name: "Glenvidi Gerungan", position: "Koordinator", image: "/member/PR/cipeng.webp" },
  { id: 3, name: "Cinta Walukow", position: "Member PR", image: "/member/PR/cinta.webp" },
  { id: 4, name: "Dhesy Corneles", position: "Member PR", image: "/member/PR/cici.webp" },
  { id: 5, name: "Tiara Mamuaya", position: "Member PR", image: "/member/PR/tiara.webp" },
  { id: 6, name: "Regiana Monangin", position: "Member PR", image: "/member/PR/regiana.webp" },
  { id: 7, name: "Agatha Kolanus", position: "Member PR", image: "" },
  { id: 8, name: "Rivaldo Kindangen", position: "Member PR", image: "/member/EXTERNAL/rivaldo.webp" },
  { id: 9, name: "Riset Gosal", position: "Member PR", image: "/member/PR/riset.webp" },
];
const comhandmembers:MemberType[] = [
  { id: 1, name: "Vania Karwur", position: "PIC Comhand", image: "/member/PR/vania.webp" },
  { id: 2, name: "Aiko Lasut", position: "Koordinator", image: "/member/CORETEAM/aiko.webp" },
  { id: 3, name: "Adithia Gunawan", position: "Member Comhand", image: "/member/CH/adit.webp" },
  { id: 4, name: "Anggreiny Sondakh", position: "Member Comhand", image: "/member/CH/ang.webp" },
  { id: 1, name: "Siao Ling nyo", position: "Member Comhand", image: "/member/CH/Xiaoling.webp" },
  { id: 6, name: "Samuel Anasim", position: "Member Comhand", image: "/member/CH/samuel.webp" },
  { id: 7, name: "Jofan Kalengkongan", position: "Member Comhand", image: "/member/CH/jofan.webp" },
];

  // === Card Member ===
  const MemberCard = ({ member }: { member: MemberType }) => (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-28 sm:w-32 md:w-40 lg:w-44 xl:w-48 h-44 sm:h-52 md:h-60 lg:h-64 overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 bg-white flex items-center justify-center">
        <Image
          src={member.image && member.image.trim() !== "" ? member.image : "/dummy-profile.svg"}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="px-2 sm:px-3 py-2 text-center">
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
  const PICCard = ({ member }: { member: MemberType }) => (
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
    <PICCard key={pic.id} member={pic} />
  ))}
</div>
    );
  };

  // === Member Section ===
  const MemberSection = ({ members }: { members: MemberType[] }) => {
    const normalMembers = members.filter(
      (m) => !m.position.toLowerCase().includes("pic") && !m.position.toLowerCase().includes("koordi")
    );
    if (normalMembers.length === 0) return null;

    return (
      <div className="mt-6 w-full max-w-6xl bg-[#FFA447] rounded-2xl shadow-lg px-5 sm:px-6 md:px-9 py-6 sm:py-10 relative">
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
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1440: { slidesPerView: 5 },
          }}
        >
          {normalMembers.map((member) => (
            <SwiperSlide key={member.id} className="flex justify-center">
              <MemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Navigasi Kiri */}
        <button className="custom-prev absolute top-1/2 -left-3 sm:-left-8 z-10 bg-white w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Tombol Navigasi Kanan */}
        <button className="custom-next absolute top-1/2 -right-3 sm:-right-8 z-10 bg-white w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
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
            Batch 2.5 melanjutkan perjalanan UVICS dengan formasi yang lebih fokus dan solid. Terdapat lima divisi yang aktif, yakni Web Development, Internal Development, Editor, Public Relation, dan Competition Handler. 
          </p>
          <p className="mt-2 sm:mt-4 text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            Batch ini menonjolkan kreativitas, komunikasi, serta pengembangan diri anggota dalam suasana kolaboratif yang hangat dan produktif.
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
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">INDEV</h2>
  <PICSection members={indevMembers} />
  <MemberSection members={indevMembers} />
</div>

{/* === EDITOR === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">EDITOR</h2>
  <PICSection members={editorMembers} />
  <MemberSection members={editorMembers} />
</div>

{/* === PR === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">PR</h2>
  <PICSection members={prMembers} />
  <MemberSection members={prMembers} />
</div>
{/* === Comhand === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Comhand</h2>
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
