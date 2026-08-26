"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Pencil, Plus, Trash2, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type AdminMember = {
  id: number;
  name: string;
  title: string;
  batch: string;
  image: string | null;
};

export type AdminProfileSection = {
  title: string;
  members: AdminMember[];
  href?: string;
};

const batches = ["Batch 1", "Batch 2", "Batch 2.5"];
const defaultAvatar = "/dummy-profile.svg";
const batchHref = (batch: string) =>
  `/admin/profile/${batch.toLowerCase().replace(" ", "")}`;

function PreviewActionButtons({ memberName }: { memberName: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      <button
        type="button"
        disabled
        aria-label={`Edit ${memberName} belum tersedia`}
        title="Fitur edit belum tersedia pada mode preview"
        className="rounded p-1 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Pencil aria-hidden="true" className="h-4 w-4" />
      </button>
      <button
        type="button"
        disabled
        aria-label={`Hapus ${memberName} belum tersedia`}
        title="Fitur hapus belum tersedia pada mode preview"
        className="rounded p-1 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Trash2 aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}

export function AdminMemberGrid({
  title,
  batch,
  names,
  memberTitle = "Member",
}: {
  title: string;
  batch: string;
  names?: string[];
  memberTitle?: string;
}) {
  const memberNames = names ?? Array.from({ length: 6 }, () => "John Doe");
  const backHref = batchHref(batch);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-4">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 rounded text-gray-700 transition-colors hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="font-medium">Kembali</span>
        </Link>
      </div>

      <h1 className="mb-5 text-pretty text-2xl font-semibold text-orange-500 sm:text-3xl">
        {title}
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {memberNames.map((name, index) => (
          <Card
            key={`${name}-${index}`}
            className="overflow-hidden rounded-2xl border shadow-md transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl motion-reduce:transition-none"
          >
            <div className="relative h-48 w-full bg-gray-200">
              <Image
                src={defaultAvatar}
                alt={`Foto preview ${name}`}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-6"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-semibold text-orange-500">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-500">{memberTitle}</p>
                </div>
                <PreviewActionButtons memberName={name} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MemberFormPreview({
  batch,
  departments,
  onClose,
}: {
  batch: string;
  departments: string[];
  onClose: () => void;
}) {
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[90vh] w-full max-w-2xl overscroll-contain overflow-y-auto rounded-lg bg-white p-4 shadow-lg sm:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup form tambah anggota"
          className="absolute right-3 top-3 rounded p-1 text-gray-500 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <X aria-hidden="true" className="h-6 w-6" />
        </button>
        <h2 id={titleId} className="mb-2 text-center text-xl font-semibold text-gray-800">
          Tambah Anggota
        </h2>
        <p id={descriptionId} className="mb-5 text-center text-sm text-amber-700">
          Mode preview: data yang diisi tidak akan disimpan.
        </p>

        <form className="flex flex-col gap-6 md:flex-row" onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-col items-center">
            <div className="relative h-40 w-32 overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={defaultAvatar}
                alt="Preview foto anggota"
                fill
                sizes="128px"
                className="object-contain p-2"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div>
              <label htmlFor={`${id}-name`} className="text-sm text-gray-700">
                Nama Anggota
              </label>
              <input
                id={`${id}-name`}
                name="memberName"
                type="text"
                autoComplete="off"
                placeholder="Contoh: Aiko Lasut…"
                className="w-full border-b border-gray-400 px-1 py-2 text-sm focus-visible:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              />
            </div>

            <div>
              <label htmlFor={`${id}-department`} className="text-sm text-gray-700">
                Departemen
              </label>
              <select
                id={`${id}-department`}
                name="department"
                autoComplete="off"
                className="w-full border-b border-gray-400 bg-white px-1 py-2 text-sm focus-visible:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                {departments.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`${id}-role`} className="text-sm text-gray-700">
                Jabatan
              </label>
              <select
                id={`${id}-role`}
                name="role"
                autoComplete="off"
                className="w-full border-b border-gray-400 bg-white px-1 py-2 text-sm focus-visible:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <option>Koordinator</option>
                <option>PIC</option>
                <option>Anggota</option>
              </select>
            </div>

            <div>
              <label htmlFor={`${id}-batch`} className="text-sm text-gray-700">
                Batch
              </label>
              <select
                id={`${id}-batch`}
                name="batch"
                defaultValue={batch}
                autoComplete="off"
                className="w-full border-b border-gray-400 bg-white px-1 py-2 text-sm focus-visible:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                {batches.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled
              title="Penyimpanan backend belum tersedia"
              className="mt-2 rounded-md bg-gray-300 py-2 font-semibold text-gray-600 disabled:cursor-not-allowed"
            >
              Simpan Belum Tersedia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AdminProfileBatchPreview({
  selectedBatch,
  sections,
  departments,
}: {
  selectedBatch: string;
  sections: AdminProfileSection[];
  departments: string[];
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 flex w-full items-center justify-end pr-4 sm:pr-6 md:pr-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md border px-3 py-1 text-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              {selectedBatch}
              <ChevronDown aria-hidden="true" className="h-4 w-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-md border bg-white shadow-md">
              {batches.map((batch) => (
                <DropdownMenuItem key={batch} asChild>
                  <Link
                    href={batchHref(batch)}
                    aria-current={selectedBatch === batch ? "page" : undefined}
                    className={selectedBatch === batch ? "bg-orange-100 text-orange-700" : ""}
                  >
                    {batch}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            disabled
            aria-label={`Edit ${selectedBatch} belum tersedia`}
            title="Fitur edit belum tersedia pada mode preview"
            className="rounded-full bg-gray-100 p-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Pencil aria-hidden="true" className="h-4 w-4 text-gray-600" />
          </button>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            aria-label="Buka form tambah anggota"
            className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <Plus aria-hidden="true" className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      {sections.map((section) => (
        <section key={section.title} aria-labelledby={`${section.title.replaceAll(" ", "-").toLowerCase()}-title`}>
          <h2
            id={`${section.title.replaceAll(" ", "-").toLowerCase()}-title`}
            className="mb-3 mt-6 pl-4 text-lg font-semibold text-orange-500 sm:pl-6 md:pl-8"
          >
            {section.title}
          </h2>
          <div className="flex flex-col pl-4 sm:pl-6 md:pl-8">
            <Carousel className="w-full" opts={{ align: "start", loop: false }}>
              <CarouselContent className="flex gap-4 sm:gap-5 md:gap-6">
                {section.members.slice(0, 3).map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="basis-[80%] sm:basis-[48%] md:basis-[32%] lg:basis-[22%]"
                  >
                    <Card className="overflow-hidden rounded-lg border p-0 shadow-sm">
                      <div className="relative h-48 w-full bg-gray-200 sm:h-52 md:h-56">
                        <Image
                          src={member.image || defaultAvatar}
                          alt={`Foto preview ${member.name}`}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 48vw, 80vw"
                          className={member.image ? "object-cover" : "object-contain p-2"}
                        />
                      </div>
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold text-orange-500">
                              {member.name}
                            </h3>
                            <p className="truncate text-xs text-gray-500">{member.title}</p>
                          </div>
                          <PreviewActionButtons memberName={member.name} />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {section.href && (
                <div className="mt-3 flex justify-end pr-5 sm:pr-6 md:pr-8">
                  <Link
                    href={section.href}
                    className="rounded text-sm font-medium text-orange-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Selengkapnya <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </Carousel>
          </div>
        </section>
      ))}

      {showModal && (
        <MemberFormPreview
          batch={selectedBatch}
          departments={departments}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
