"use client";

import Image from "next/image";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1027/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1039/600/400",
  "https://picsum.photos/id/1041/600/400",
  "https://picsum.photos/id/1042/600/400",
  "https://picsum.photos/id/1043/600/400",
  "https://picsum.photos/id/1044/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1047/600/400",
  "https://picsum.photos/id/1048/600/400",
  "https://picsum.photos/id/1049/600/400",
];

export default function UserMedia() {
  return (
    // Section Gallery
    <section className="min-h-screen bg-[#e6f0ff] flex flex-col items-center py-16 w-screen">
      {/* Title */}
      <div className="mb-12">
        <span className="bg-[#4285F4] text-white px-10 py-2 rounded-xl font-bold tracking-[0.5em] text-lg shadow-md">
          GALLERY
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-14 w-full max-w-7xl">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-[50px] shadow-md overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={287}
              height={171}
              className="object-cover w-full h-[171px] rounded-[50px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
