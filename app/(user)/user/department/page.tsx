"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function DepartmentUvics() {
  const PembuatWeb = [
    { id: 1, name: "Grantly Sorongan", position: "Web Development", image: "" },
    { id: 2, name: "Adithia Gunawan", position: "Web Development", image: "" },
    { id: 3, name: "Jordan Sutarto", position: "Web Development", image: "" },
    { id: 4, name: "Betrand Saputr", position: "Web Development", image: "" },
    { id: 5, name: "Kevin Pratama", position: "Web Development", image: "" },
    { id: 6, name: "Mikhael Santoso", position: "Web Development", image: "" },
    { id: 7, name: "Angela Putri", position: "Web Development", image: "" },
    { id: 8, name: "Jonathan Widjaja", position: "Web Development", image: "" },
    { id: 9, name: "Rachel Felicia", position: "Web Development", image: "" },
    { id: 10, name: "Steven Hartono", position: "Web Development", image: "" },
  ];

  // ==== Data coreTeam dan Advisor ====
  const coreTeamAdvisor = [
    {
      id: 1,
      name: "Stenly R. Pungus, S.Kom, M.IT, Ph.D",
      position: "Advisor",
      image: "/dummy-profile.svg",
    },
    {
      id: 2,
      name: "Aiko Lasut",
      position: "President",
      image: "/dummy-profile.svg",
    },
    {
      id: 3,
      name: "Prince Tampi",
      position: "Vice President",
      image: "/dummy-profile.svg",
    },
    {
      id: 4,
      name: "Dion Kobi",
      position: "Secretary",
      image: "/dummy-profile.svg",
    },
    {
      id: 5,
      name: "Syelle Kolosy",
      position: "Vice Secretary",
      image: "/dummy-profile.svg",
    },
    {
      id: 6,
      name: "Amanda Rorong",
      position: "Treasurer",
      image: "/dummy-profile.svg",
    },
    {
      id: 7,
      name: "Marcelin Prakoso",
      position: "Vice Treasurer",
      image: "/dummy-profile.svg",
    },
  ];

  // ==== Data Web Dev ====
  const webDevMembers = [
    { id: 1, name: "Grantly Sorongan", position: "Web Developer", image: "" },
    { id: 2, name: "Adithia Gunawan", position: "Web Developer", image: "" },
    { id: 3, name: "Jordan Sutarto", position: "Web Developer", image: "" },
    { id: 4, name: "Betrand Saputr", position: "Web Developer", image: "" },
  ];

  // ==== Data Public Documentation ====
  const publicDocMembers = [
    {
      id: 1,
      name: "Marshelina Pedramuni",
      position: "PIC Content Creation",
      image: "",
    },
    { id: 2, name: "Arviel Parengkuan", position: "PIC Multimedia", image: "" },
    {
      id: 3,
      name: "Alya Masago",
      position: "Member Content Creation",
      image: "",
    },
    {
      id: 4,
      name: "Renaldy Mantiri",
      position: "Member Content Creation",
      image: "",
    },
  ];

  // ==== Data Event & Education ====
  const eventEduMembers = [
    { id: 1, name: "Angga Wijaya", position: "PIC Event Edu", image: "" },
    { id: 2, name: "Diana Natalia", position: "Member Event Edu", image: "" },
    { id: 3, name: "Satria Budi", position: "Member Event Edu", image: "" },
  ];

  // ==== Reusable Carousel Component ====
  const TeamSection = ({ members }: { members: any[] }) => (
    <div className="mt-8 w-full max-w-6xl bg-[#FFA447] rounded-2xl shadow-lg px-8 py-10 relative">
      <Carousel opts={{ align: "start", loop: true }} className="relative">
        <CarouselContent className="gap-6">
          {members.map((member) => (
            <CarouselItem
              key={member.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex justify-center"
            >
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-[180px] overflow-hidden hover:scale-[1.05] transition-transform">
                <div className="relative w-full h-40 bg-white flex items-start justify-center">
                  <Image
                    src={
                      member?.image && member.image.trim() !== ""
                        ? member.image
                        : "/dummy-profile.svg"
                    }
                    alt={member.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="px-3 py-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Panah navigasi */}
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md hover:bg-gray-200 transition" />
        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md hover:bg-gray-200 transition" />
      </Carousel>
    </div>
  );

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1.2;
        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      {/* Card Utama */}
      <div className="w-full bg-[#FFA447] rounded-lg shadow-lg px-10 py-14 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1 text-white pr-4">
          <h2 className="text-3xl md:text-3xl font-semibold mb-5">
            Departement UVICS
          </h2>
          <p className="text-justify leading-relaxed text-base md:text-lg">
            UVICS terdiri dari berbagai departemen yang memperkenalkan peran dan
            anggota yang berkontribusi dalam mendukung visi dan misi organisasi.
          </p>
          <p className="mt-4 text-justify leading-relaxed text-base md:text-lg">
            Mulai dari tim inti hingga departemen khusus seperti publikasi,
            pendidikan, dan pengembangan web, setiap peran memiliki kontribusi
            penting dalam membangun komunitas UVICS yang inspiratif dan
            progresif.
          </p>
        </div>

        <div className="flex-shrink-0">
          <div className="w-80 h-56 relative shadow-xl rounded-md overflow-hidden">
            <Image
              src="/image-desc-UVICS.svg"
              alt="UVICS Team"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Slogan */}
      <div className="mt-10 w-full flex justify-center">
        <div className="bg-[#9CB9FF] px-12 py-4 rounded-lg shadow-lg w-[850px] text-center">
          <p className="text-white italic font-bold text-lg md:text-xl tracking-wide">
            Being an Achievers, carve Your Future
          </p>
        </div>
      </div>

      {/* Carousel Pembuat Website */}
      <div className="mt-16 w-full max-w-6xl">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent
            ref={carouselRef}
            className="gap-4 flex-nowrap flex overflow-x-auto scroll-smooth no-scrollbar"
          >
            {PembuatWeb.map((member) => (
              <CarouselItem
                key={member.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center"
              >
                <div className="flex flex-col bg-white rounded-xl shadow-md p-5 w-[260px] transition-transform hover:scale-[1.02]">
                  <div className="w-full h-56 rounded-lg overflow-hidden shadow-md relative bg-gray-100">
                    <Image
                      src={
                        member?.image && member.image.trim() !== ""
                          ? member.image
                          : "/dummy-profile.svg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#FFA447] text-left">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#FFA447] font-semibold text-left">
                    {member.position}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
        {/* === Core Team & Advisor Section === */}
        <div className="mt-16 w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA447] mb-6">
            Core Team And Advisor
          </h2>
          <div className="relative w-full max-w-5xl">
            <Image
              src="/coreteam-advisor.svg"
              alt="Core Team And Advisor"
              width={1000}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
        </div>
        <TeamSection members={coreTeamAdvisor} />

        {/* === Public Documentation Section === */}
        <div className="mt-20 w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA447] mb-6">
            Public Documentation
          </h2>
          <Image
            src="/public-doc.svg"
            alt="Public Documentation"
            width={1000}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
        <TeamSection members={publicDocMembers} />

        {/* === Event & Education Section === */}
        <div className="mt-20 w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA447] mb-6">
            Event & Education
          </h2>
          <Image
            src="/event-edu.svg"
            alt="Event and Education"
            width={1000}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
        <TeamSection members={eventEduMembers} />

        {/* === Web Dev Section === */}
        <div className="mt-20 w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA447] mb-6">
            Web Development
          </h2>
          <Image
            src="/web-dev.svg"
            alt="Web Development"
            width={1000}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
        <TeamSection members={webDevMembers} />
      </div>
    </div>
  );
}
