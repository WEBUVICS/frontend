"use client";

import { useId } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import type { MemberType } from "@/types/data-type";

function isCoordinator(member: MemberType) {
  const position = member.position.toLowerCase();
  return position.includes("pic") || position.includes("koordi");
}

function MemberCard({ member }: { member: MemberType }) {
  return (
    <article className="flex h-44 w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-52 sm:w-32 md:h-60 md:w-40 lg:h-64 lg:w-44 xl:w-48">
      <div className="relative flex h-24 w-full items-center justify-center bg-white sm:h-28 md:h-32 lg:h-36">
        <Image
          src={member.image?.trim() || "/dummy-profile.svg"}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 45vw, (max-width: 767px) 128px, (max-width: 1023px) 160px, 192px"
          className="object-cover"
        />
      </div>
      <div className="px-2 py-2 text-center sm:px-3">
        <h3 className="line-clamp-2 text-xs font-semibold leading-tight text-gray-800 sm:text-sm md:text-base lg:text-lg">
          {member.name}
        </h3>
        <p className="text-[10px] font-medium text-gray-600 sm:text-xs md:text-sm lg:text-base">
          {member.position}
        </p>
      </div>
    </article>
  );
}

function CoordinatorCard({ member }: { member: MemberType }) {
  return (
    <article className="flex h-[180px] w-[120px] flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-[210px] sm:w-[150px] md:h-[240px] md:w-[180px]">
      <div className="relative flex h-28 w-full items-center justify-center bg-white sm:h-32 md:h-36">
        <Image
          src={member.image?.trim() || "/dummy-profile.svg"}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 120px, (max-width: 767px) 150px, 180px"
          className="object-cover"
        />
      </div>
      <div className="px-2 py-2 text-center sm:px-3 sm:py-3">
        <h3 className="line-clamp-2 text-[11px] font-semibold leading-tight text-gray-800 sm:text-sm md:text-base">
          {member.name}
        </h3>
        <p className="text-[9px] font-medium text-gray-600 sm:text-xs md:text-sm">
          {member.position}
        </p>
      </div>
    </article>
  );
}

export function PICSection({ members }: { members: MemberType[] }) {
  const coordinators = members.filter(isCoordinator);
  if (coordinators.length === 0) return null;

  return (
    <div className="mt-4 flex w-full max-w-5xl flex-wrap justify-center gap-3 rounded-2xl bg-[#4574C3] px-3 py-4 shadow-lg sm:gap-4 sm:px-6 sm:py-6">
      {coordinators.map((member) => (
        <CoordinatorCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export function MemberSection({ members }: { members: MemberType[] }) {
  const navigationId = useId().replaceAll(":", "");
  const normalMembers = members.filter((member) => !isCoordinator(member));
  if (normalMembers.length === 0) return null;

  const previousClass = `members-prev-${navigationId}`;
  const nextClass = `members-next-${navigationId}`;

  return (
    <div className="relative mx-auto mt-6 w-full max-w-6xl rounded-2xl bg-[#FFA447] px-5 py-6 shadow-lg sm:px-6 sm:py-10 md:px-9">
      {normalMembers.length >= 5 ? (
        <>
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            navigation={{ nextEl: `.${nextClass}`, prevEl: `.${previousClass}` }}
            loop
            breakpoints={{
              320: { slidesPerView: 2 },
              425: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1440: { slidesPerView: 5 },
            }}
          >
            {normalMembers.map((member) => (
              <SwiperSlide key={member.id} className="flex justify-center">
                <MemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Anggota sebelumnya"
            className={`${previousClass} absolute top-1/2 -left-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 sm:-left-8 sm:h-8 sm:w-8 md:h-10 md:w-10`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Anggota berikutnya"
            className={`${nextClass} absolute top-1/2 -right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 sm:-right-8 sm:h-8 sm:w-8 md:h-10 md:w-10`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {normalMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}

export function AdvisorSection({ members }: { members: MemberType[] }) {
  if (members.length === 0) return null;

  return (
    <div className="mt-6 flex w-full justify-center">
      <div className="flex flex-wrap justify-center gap-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
