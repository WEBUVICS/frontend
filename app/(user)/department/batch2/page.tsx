import React from "react";
import Image from "next/image";
import {
  AdvisorSection,
  MemberSection,
  PICSection,
} from "@/components/userComponents/department-member-sections";
import { MemberType } from "@/types/data-type";



export default function DepartmentUvics() {

  const Advisor = [
    { id: 1, name: "Stenly R. Pungus, S.Kom, M.IT, Ph.D", position: "Advisor", image: "/member/CORETEAM/advisor1.webp" },
  ];

  const coreTeamMembers:MemberType[] = [
    { id: 1, name: "Aiko Lasut", position: "President", image: "/member/CORETEAM/aiko.webp" },
    { id: 2, name: "Prince Tampi", position: "Vice President", image: "/member/CORETEAM/prince.webp" },
    { id: 3, name: "Dion Kobi", position: "Secretary", image: "/member/CORETEAM/dion.webp" },
    { id: 4, name: "Syelle Koloay", position: "Vice Secretary", image: "/member/CORETEAM/sela2.webp" },
    { id: 5, name: "Marcelo Poluakan", position: "Treasurer", image: "/member/CORETEAM/ralf.webp" },
    { id: 6, name: "Ananda Solang", position: "Vice Treasurer", image: "/member/PR/ananda.webp" },
];


  const webDevMembers:MemberType[] = [
    { id: 1, name: "Krismarvel Ticoalu", position: "PIC Web", image: "/member/WEBDEV/avel.webp" },
    { id: 2, name: "Imanuel Palenewen", position: "PIC Web", image: "/member/WEBDEV/noel.webp" },
    { id: 3, name: "Grantly Sorongan", position: "Koordinator", image: "/member/WEBDEV/grenly.webp" },
    { id: 5, name: "Jordan Sutarto", position: "Member Web", image: "/member/WEBDEV/jordan.webp" },
    { id: 6, name: "Betrand Saputra", position: "Member Web", image: "/member/WEBDEV/betrand.webp" },
    { id: 7, name: "Timothy Weley", position: "Member Web", image: "/member/WEBDEV/timo.webp" },
    { id: 8, name: "Nazarya Kandou", position: "Member Web", image: "/member/WEBDEV/nazar.webp" },
    { id: 9, name: "Kevin Tjiu", position: "Member Web", image: "/member/WEBDEV/kevin.webp" },
    { id: 10, name: "David Tjia", position: "Member Web", image: "/member/WEBDEV/david.webp" },
    { id: 11, name: "Clio Mataheru", position: "Member Web", image: "/member/WEBDEV/clio.webp" },
    { id: 12, name: "Julio Weol", position: "Member Web", image: "/member/WEBDEV/julio.webp" },
    { id: 13, name: "Adithia Gunawan", position: "Member Web", image: "/member/CH/adit.webp" },
  ];

  const indevMembers:MemberType[] = [
  { id: 1, name: "Natanael Rantung", position: "PIC INDEV", image: "/member/PR/natan.webp" },
  { id: 2, name: "Darryl Laluyan", position: "Koordinator", image: "/member/INDEV/deril.webp" },
  { id: 3, name: "Ariellya Sayow", position: "Member INDEV", image: "/member/INDEV/aril.webp" },
  { id: 4, name: "Ivana Sondakh", position: "Member INDEV", image: "/member/INDEV/ivana.webp" },
  { id: 5, name: "Vania Karwur", position: "Member INDEV", image: "/member/PR/vania.webp" },
  { id: 6, name: "Marcheilla Wenas", position: "Member INDEV", image: "/member/INDEV/cheilla.webp" }
];

const exafMembers:MemberType[] = [
  { id: 1, name: "Marcel Pandelaki", position: "PIC EXAF", image: "/member/PR/marsel.webp" },
  { id: 2, name: "Reva Rorie", position: "Koordinator", image: "/member/EXTERNAL/reva.webp" },
  { id: 3, name: "Riset Gosal", position: "Member EXAF", image: "/member/PR/riset.webp" },
  { id: 4, name: "Rivaldo Kindangen", position: "Member EXAF", image: "/member/EXTERNAL/rivaldo.webp" },
  { id: 5, name: "Lamtiar Nainggolan", position: "Member EXAF", image: "/member/EXTERNAL/lamtiar.webp" },
  { id: 6, name: "Alya Manoppo", position: "Member EXAF", image: "/member/PR/alya.webp" },
  { id: 7, name: "Yoel Kosenda", position: "Member EXAF", image: "/member/EXTERNAL/yoel.webp" },
  { id: 8, name: "Vanda Woruntu", position: "Member EXAF", image: "/member/EXTERNAL/vanda.webp" },
  { id: 9, name: "Cheiselio Benne", position: "Member EXAF", image: "/member/EXTERNAL/benne.webp" },
];

const editorMembers:MemberType[] = [
  { id: 1, name: "Thrilya Potalangi", position: "PIC Editor", image: "/member/EDITOR/Thrilya.webp" },
  { id: 2, name: "Avriel Parengkuan", position: "Koordinator", image: "/member/EDITOR/avril.webp" },
  { id: 3, name: "Edwardo Waturandang", position: "Member Editor", image: "/member/EDITOR/Edwardo.webp" },
  { id: 4, name: "Matthew Kambey", position: "Member Editor", image: "/member/EDITOR/met_kambey.webp" },
  { id: 5, name: "Mutiara Makarawung", position: "Member Editor", image: "/member/EDITOR/Mutiara.webp" },
  { id: 6, name: "Gabriel Sumual", position: "Member Editor", image: "/member/PR/tor.webp" },
];

const prMembers:MemberType[] = [
  { id: 1, name: "Jeany Pratiwi", position: "PIC PR", image: "/member/PR/jeany.webp" },
  { id: 2, name: "Marshanda Padmarini", position: "Koordinator", image: "/member/PR/marsha.webp" },
  { id: 3, name: "Glenvidi Gerungan", position: "Member PR", image: "/member/PR/cipeng.webp" },
  { id: 4, name: "Cinta Walukow", position: "Member PR", image: "/member/PR/cinta.webp" },
  { id: 5, name: "Christia Weol", position: "Member PR", image: "/member/PR/christy.webp" },
  { id: 6, name: "Dhesy Corneles", position: "Member PR", image: "/member/PR/cici.webp" },
  { id: 7, name: "Tiara Mamuaya", position: "Member PR", image: "/member/PR/tiara.webp" },
  { id: 8, name: "Renaldy Mantiri", position: "Member PR", image: "/member/PR/renaldy.webp" },
  { id: 9, name: "Vicky Manjanduga", position: "Member PR", image: "/member/PR/vicky.webp" },
];
const comhandmembers:MemberType[] = [
  { id: 1, name: "Siao Ling nyo", position: "PIC Comhand", image: "/member/CH/Xiaoling.webp" },
  { id: 2, name: "Arlan Jonsend", position: "Koordinator", image: "/member/EDITOR/Arlan.webp" },
  { id: 3, name: "Anggreiny Sondakh", position: "Member Comhand", image: "/member/CH/ang.webp" },
  { id: 4, name: "Syalom Angginaloy", position: "Member Comhand", image: "/member/CH/syalom.webp" }
];

  // === Render Halaman ===
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white px-3 sm:px-5 py-6 sm:py-12">
      {/* Card Utama */}
      <div className="w-full bg-[#FFA447] rounded-lg shadow-lg px-4 sm:px-8 md:px-10 py-6 sm:py-12 md:py-14 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10">
        <div className="flex-1 text-white pr-0 sm:pr-4">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
            Department UVICS
          </p>
          <h1 className="mb-3 font-quick text-2xl font-bold sm:text-3xl md:text-4xl">
            Batch 2
          </h1>
          <p className="text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            Batch 2 continued UVICS&apos;s growth with a broader organizational structure and stronger collaboration across departments.
          </p>
          <p className="mt-2 sm:mt-4 text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            This batch expanded member development through Web Development, Internal Development, External Affairs, Editor, Public Relations, and Competition Handler.
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

     {/* === Pembina === */}
<div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-16">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">
    Pembina
  </h2>
  <AdvisorSection members={Advisor} />
</div>

{/* === Tim Inti === */}
<div className="mt-10 sm:mt-20 w-full flex flex-col items-center text-center">
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFA447] mb-2">Tim Inti</h2>
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
